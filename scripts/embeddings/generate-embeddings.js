#!/usr/bin/env node
/**
 * COLHYBRI GEO embeddings pipeline.
 *
 * Builds a corpus from the cocon i18n content (messages/<locale>.json), chunks it
 * to ~300-500 tokens, generates embeddings, and upserts into Supabase
 * public.content_embeddings (see supabase/migrations/20260627000000_content_embeddings.sql).
 *
 * Commands:
 *   node scripts/embeddings/generate-embeddings.js embed [--dry-run] [--locale fr] [--limit 50]
 *   node scripts/embeddings/generate-embeddings.js search "downtown revitalization" [locale]
 *   node scripts/embeddings/generate-embeddings.js links https://www.colhybri.vision/en/main-street-america en
 *
 * Environment (never commit these; use .env.local / Supabase project secrets):
 *   SUPABASE_URL                 default NEXT_PUBLIC_SUPABASE_URL or the COLHYBRI ref URL
 *   SUPABASE_SERVICE_ROLE_KEY    REQUIRED for embed/upsert (bypasses RLS). Read-only cmds can use anon.
 *   SUPABASE_ANON_KEY            optional, used by search/links if no service key
 *   EMBEDDINGS_API_URL           default https://api.openai.com/v1/embeddings (OpenAI-compatible)
 *   EMBEDDINGS_API_KEY           REQUIRED to call the embedding model
 *   EMBEDDING_MODEL              default text-embedding-3-small
 *   EMBEDDING_DIM                default 1536 (MUST match vector(N) in the migration)
 *   SITE_URL                     default https://www.colhybri.vision
 *
 * TODO(florent): confirm the embedding provider/model. Default is OpenAI
 * text-embedding-3-small (1536 dims). If you prefer Voyage (Anthropic's
 * recommended embeddings partner), set EMBEDDINGS_API_URL/MODEL/DIM accordingly
 * and update the migration's vector dimension to match.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const MESSAGES_DIR = path.join(__dirname, '..', '..', 'messages');
const LOCALES = ['en', 'en-gb', 'fr', 'es', 'pt', 'de', 'it', 'zh', 'ja', 'hi', 'pl'];
const SITE_URL = process.env.SITE_URL || 'https://www.colhybri.vision';
const SKIP_KEYS = new Set(['common', 'meta', 'cta']);

const TARGET_TOKENS = 400; // aim inside the 300-500 token window
const MIN_TOKENS = 60;     // do not emit trivially small tail chunks on their own
const approxTokens = (text) => Math.ceil(text.trim().split(/\s+/).filter(Boolean).length * 1.33);

// ---- corpus -------------------------------------------------------------

function pageText(entry) {
  const parts = [];
  if (entry.snippet) parts.push(String(entry.snippet));
  if (Array.isArray(entry.sections)) {
    for (const s of entry.sections) {
      if (s && s.h2 && s.body) parts.push(`${s.h2}. ${s.body}`);
    }
  }
  if (Array.isArray(entry.faq)) {
    for (const f of entry.faq) {
      if (f && f.q && f.a) parts.push(`${f.q} ${f.a}`);
    }
  }
  if (entry.comparison && Array.isArray(entry.comparison.rows)) {
    const cols = entry.comparison.columns || [];
    for (const row of entry.comparison.rows) {
      if (Array.isArray(row) && row.length) {
        const label = row[0];
        const rest = row.slice(1).map((cell, i) => `${cols[i + 1] || ''}: ${cell}`.trim()).join('; ');
        parts.push(`${label}. ${rest}`);
      }
    }
  }
  return parts;
}

function buildCorpus({ locale } = {}) {
  const docs = [];
  for (const loc of LOCALES) {
    if (locale && loc !== locale) continue;
    const json = JSON.parse(fs.readFileSync(path.join(MESSAGES_DIR, `${loc}.json`), 'utf8'));
    const cocon = json.cocon || {};
    for (const [slug, entry] of Object.entries(cocon)) {
      if (SKIP_KEYS.has(slug) || !entry || typeof entry !== 'object') continue;
      const blocks = pageText(entry);
      if (!blocks.length) continue;
      docs.push({
        url: `${SITE_URL}/${loc}/${slug}`,
        locale: loc,
        title: entry.title || slug,
        blocks,
      });
    }
  }
  return docs;
}

// Greedy pack natural blocks toward TARGET_TOKENS. Split an oversized block by sentence.
function chunkBlocks(blocks) {
  const units = [];
  for (const b of blocks) {
    if (approxTokens(b) <= TARGET_TOKENS) {
      units.push(b);
    } else {
      let buf = '';
      for (const sentence of b.split(/(?<=[.!?])\s+/)) {
        if (buf && approxTokens(buf + ' ' + sentence) > TARGET_TOKENS) {
          units.push(buf.trim());
          buf = sentence;
        } else {
          buf = buf ? `${buf} ${sentence}` : sentence;
        }
      }
      if (buf.trim()) units.push(buf.trim());
    }
  }
  const chunks = [];
  let buf = '';
  for (const u of units) {
    if (buf && approxTokens(buf + ' ' + u) > TARGET_TOKENS) {
      chunks.push(buf.trim());
      buf = u;
    } else {
      buf = buf ? `${buf} ${u}` : u;
    }
  }
  if (buf.trim()) {
    // fold a tiny tail into the previous chunk
    if (chunks.length && approxTokens(buf) < MIN_TOKENS) {
      chunks[chunks.length - 1] = `${chunks[chunks.length - 1]} ${buf.trim()}`;
    } else {
      chunks.push(buf.trim());
    }
  }
  return chunks;
}

const hash = (s) => crypto.createHash('sha256').update(s).digest('hex');

function planChunks({ locale } = {}) {
  const rows = [];
  for (const doc of buildCorpus({ locale })) {
    chunkBlocks(doc.blocks).forEach((chunk_text, chunk_index) => {
      rows.push({
        url: doc.url,
        locale: doc.locale,
        title: doc.title,
        chunk_index,
        chunk_text,
        token_count: approxTokens(chunk_text),
        content_hash: hash(`${doc.locale}|${doc.url}|${chunk_index}|${chunk_text}`),
      });
    });
  }
  return rows;
}

// ---- providers ----------------------------------------------------------

function requireEnv(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing required env ${name}. See the header of this file.`);
    process.exit(1);
  }
  return v;
}

async function embed(texts) {
  const url = process.env.EMBEDDINGS_API_URL || 'https://api.openai.com/v1/embeddings';
  const model = process.env.EMBEDDING_MODEL || 'text-embedding-3-small';
  const key = requireEnv('EMBEDDINGS_API_KEY');
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({ model, input: texts }),
  });
  if (!res.ok) throw new Error(`Embeddings API ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return json.data.map((d) => d.embedding);
}

function supabaseClient(needService) {
  const { createClient } = require('@supabase/supabase-js');
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
    || 'https://isuzbpzwxcagtnbosgjl.supabase.co';
  const key = needService
    ? requireEnv('SUPABASE_SERVICE_ROLE_KEY')
    : (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || requireEnv('SUPABASE_ANON_KEY'));
  return createClient(url, key, { auth: { persistSession: false } });
}

// ---- commands -----------------------------------------------------------

async function cmdEmbed(args) {
  const dryRun = args.includes('--dry-run');
  const locale = argValue(args, '--locale');
  const limit = Number(argValue(args, '--limit') || 0);
  let rows = planChunks({ locale });
  if (limit) rows = rows.slice(0, limit);

  const pages = new Set(rows.map((r) => `${r.locale} ${r.url}`)).size;
  console.log(`Planned ${rows.length} chunks across ${pages} page+locale docs`
    + `${locale ? ` (locale=${locale})` : ''}. Avg tokens/chunk: `
    + `${Math.round(rows.reduce((a, r) => a + r.token_count, 0) / Math.max(rows.length, 1))}.`);

  if (dryRun) {
    for (const r of rows.slice(0, 8)) {
      console.log(`\n[${r.locale}] ${r.url} #${r.chunk_index} (${r.token_count}t)\n  ${r.chunk_text.slice(0, 160)}...`);
    }
    console.log(`\n--dry-run: no API calls, no writes. ${rows.length} chunks would be embedded.`);
    return;
  }

  const supabase = supabaseClient(true);

  // Skip chunks whose content_hash is already stored (idempotent re-runs).
  const { data: existing, error: exErr } = await supabase
    .from('content_embeddings')
    .select('url, locale, chunk_index, content_hash');
  if (exErr) throw exErr;
  const seen = new Map((existing || []).map((e) => [`${e.url}|${e.locale}|${e.chunk_index}`, e.content_hash]));
  const todo = rows.filter((r) => seen.get(`${r.url}|${r.locale}|${r.chunk_index}`) !== r.content_hash);
  console.log(`${todo.length} chunks new or changed, ${rows.length - todo.length} unchanged (skipped).`);

  const BATCH = 64;
  for (let i = 0; i < todo.length; i += BATCH) {
    const batch = todo.slice(i, i + BATCH);
    const vectors = await embed(batch.map((r) => r.chunk_text));
    const payload = batch.map((r, j) => ({ ...r, embedding: vectors[j], updated_at: new Date().toISOString() }));
    const { error } = await supabase
      .from('content_embeddings')
      .upsert(payload, { onConflict: 'url,locale,chunk_index' });
    if (error) throw error;
    console.log(`Upserted ${Math.min(i + BATCH, todo.length)}/${todo.length}`);
  }
  console.log('Done.');
}

async function cmdSearch(args) {
  const query = args.find((a) => !a.startsWith('--') && a !== 'search');
  const locale = args.filter((a) => !a.startsWith('--'))[1] || null;
  if (!query) { console.error('Usage: search "query text" [locale]'); process.exit(1); }
  const [vector] = await embed([query]);
  const supabase = supabaseClient(false);
  const { data, error } = await supabase.rpc('match_content_embeddings', {
    query_embedding: vector, match_count: 8, filter_locale: locale,
  });
  if (error) throw error;
  for (const r of data) {
    console.log(`${r.similarity.toFixed(3)}  [${r.locale}] ${r.url}\n   ${r.chunk_text.slice(0, 120)}...`);
  }
}

async function cmdLinks(args) {
  const positional = args.filter((a) => !a.startsWith('--'));
  const sourceUrl = positional[1];
  const sourceLocale = positional[2];
  if (!sourceUrl || !sourceLocale) { console.error('Usage: links <url> <locale>'); process.exit(1); }
  const supabase = supabaseClient(false);
  const { data, error } = await supabase.rpc('suggest_internal_links', {
    source_url: sourceUrl, source_locale: sourceLocale, match_count: 8,
  });
  if (error) throw error;
  console.log(`Suggested internal links from ${sourceUrl}:`);
  for (const r of data) console.log(`  ${r.similarity.toFixed(3)}  ${r.url}  (${r.title})`);
}

function argValue(args, flag) {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
}

async function main() {
  const [cmd, ...args] = process.argv.slice(2);
  switch (cmd) {
    case 'embed': return cmdEmbed(args);
    case 'search': return cmdSearch([cmd, ...args]);
    case 'links': return cmdLinks([cmd, ...args]);
    default:
      console.log('Commands: embed [--dry-run] [--locale xx] [--limit N] | search "q" [locale] | links <url> <locale>');
  }
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
