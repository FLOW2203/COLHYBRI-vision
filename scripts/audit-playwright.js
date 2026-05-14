#!/usr/bin/env node
/**
 * SHIELD v3 — Node.js HTTP audit for colhybri.vision (no browser needed).
 * 8 checks per URL (console-error check skipped — needs real browser).
 * 671 URLs across 11 locales.
 *
 * Usage: AUDIT_BASE=http://localhost:3000 node scripts/audit-playwright.js
 * Outputs: /tmp/colhybri-audit/{report.json, report.md, failures.csv}
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = (process.env.AUDIT_BASE || 'http://localhost:3000').replace(/\/$/, '');
const OUT = '/tmp/colhybri-audit';
fs.mkdirSync(OUT, { recursive: true });

const LOCALES = ['en','en-gb','fr','es','pt','de','it','zh','ja','hi','pl'];
const MAIN = ['/','/mission','/solution','/solution/maps-plus','/solution/pool-solidaire','/impact','/impact/france','/impact/usa','/impact/europe','/impact/latam','/impact/africa','/for-cities','/investors','/presse','/contact','/faq'];
const COCON = ['/revitalisation-centres-villes','/action-coeur-de-ville','/petites-villes-de-demain','/zrcv-zones-revitalisation','/manager-commerce-cci','/vacance-commerciale-france','/municipales-2026-commerce','/commerce-proximite-digital','/downtown-revitalization','/opportunity-zones','/main-street-america','/rust-belt-revitalization','/small-business-digital','/community-development','/mutualisme-digital','/caffe-sospeso','/economie-solidaire','/pool-solidaire-quartier','/solidarite-proximite','/commerce-equitable-local','/cooperative-quartier','/fidelisation-communautaire','/google-maps-commerce','/visibilite-google-pme','/seo-local-commerce','/avis-google-commercants','/onboarding-digital-commerce','/score-maps-audit','/maps-plus-outil','/commerce-informel','/revitalisation-quartier','/tiers-lieu-digital','/impact-social-commerce','/keynesian-multiplier-local','/inclusion-financiere','/comment-ca-marche','/tarifs-colhybri','/pour-les-commercants','/pour-les-particuliers','/pour-les-collectivites','/ecosr-european-capital-small-retail','/eui-european-urban-initiative','/idb-latin-america','/afd-afrique','/fifa-innovation-sport'];
const ALL = [...MAIN, ...COCON];

const I18N_LEAK = /(missionPage|solutionHub|mapsPlus|poolSolidaire|impactPages|forCitiesPage|investorsPage|pressePage|forms\.(city|investor|general)|worldMap)\.[a-zA-Z0-9_.]+/g;
const CTA_FORBIDDEN = /pilote gratuit|essai gratuit|freemium|free trial|free pilot|gratuit pendant|30 jours gratuits|90 jours gratuits|zero risque/gi;

function fetch(url) {
  return new Promise(resolve => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'SHIELD/3', Accept: 'text/html' } }, res => {
      if ([301,302,307,308].includes(res.statusCode) && res.headers.location) {
        const loc = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).toString();
        fetch(loc).then(r => resolve({ ...r, redirectedFrom: url }));
        res.resume();
        return;
      }
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.on('error', e => resolve({ status: 'ERROR', body: '', error: e.message }));
    req.setTimeout(30000, () => { req.destroy(); resolve({ status: 'TIMEOUT', body: '' }); });
  });
}

function stripTags(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
}

function auditHtml(html, bodyText, locale, slug) {
  const checks = {};
  const details = {};

  // 2. i18n leak
  const leaks = bodyText.match(I18N_LEAK) || [];
  checks.i18n_leak = leaks.length === 0 ? 'pass' : 'fail';
  if (leaks.length) details.i18n_leak = [...new Set(leaks)].slice(0, 5).join(', ');

  // 3. Locale coherence
  const langM = html.match(/<html[^>]+lang="([^"]+)"/i);
  const htmlLang = langM ? langM[1] : '';
  const langOk = htmlLang === locale || htmlLang.startsWith(locale.split('-')[0]);
  checks.locale_coherence = langOk ? 'pass' : 'fail';
  if (!langOk) details.locale_coherence = `html lang="${htmlLang}" expected "${locale}"`;

  // 4. CTA doctrine
  const ctaBad = bodyText.match(CTA_FORBIDDEN) || [];
  checks.cta_doctrine = ctaBad.length === 0 ? 'pass' : 'fail';
  if (ctaBad.length) details.cta_doctrine = [...new Set(ctaBad.map(s => s.toLowerCase()))].slice(0, 3).join(', ');

  // 5. Slogan (home only)
  if (slug === '/' || slug === '') {
    if (locale === 'fr') {
      const ok = bodyText.includes('Chaque geste compte');
      checks.slogan = ok ? 'pass' : 'warn';
      if (!ok) details.slogan = 'FR slogan missing';
    } else if (locale === 'en' || locale === 'en-gb') {
      const ok = bodyText.includes('Own Your Neighborhood');
      checks.slogan = ok ? 'pass' : 'warn';
      if (!ok) details.slogan = 'EN slogan missing';
    }
  }

  // 6. Pricing (stale)
  const stale = bodyText.match(/\b(5\s*EUR|7\s*EUR|9\s*EUR|12\s*EUR|20\s*EUR|25\s*EUR)\s*\/\s*m/gi) || [];
  checks.pricing = stale.length === 0 ? 'pass' : 'fail';
  if (stale.length) details.pricing = stale.slice(0, 3).join(', ');

  // 7. Meta tags
  const titleM = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleM ? titleM[1].trim() : '';
  const metaM = html.match(/<meta\s+(?:name="description"\s+content="([^"]*)"|content="([^"]*)"\s+name="description")/i);
  const metaDesc = metaM ? (metaM[1] || metaM[2] || '').trim() : '';
  const titleOk = title.length > 0;
  const metaOk = metaDesc.length >= 30;
  checks.meta = titleOk && metaOk ? 'pass' : (!titleOk ? 'fail' : 'warn');
  if (!titleOk) details.meta = 'title missing';
  if (!metaOk) details.meta = (details.meta || '') + ` meta_desc len=${metaDesc.length}`;

  // 8. Images alt
  const imgs = html.match(/<img\b[^>]*>/gi) || [];
  const noAlt = imgs.filter(t => !t.match(/alt="[^"]+"/i) && !t.match(/aria-hidden="true"/i)).length;
  checks.img_alt = noAlt === 0 ? 'pass' : 'warn';
  if (noAlt) details.img_alt = `${noAlt} images without alt`;

  return { checks, details };
}

async function main() {
  const total = ALL.length * LOCALES.length;
  console.log(`[SHIELD] Auditing ${total} URLs against ${BASE}\n`);

  const results = [];
  let done = 0;

  for (const locale of LOCALES) {
    for (const slug of ALL) {
      done++;
      const urlPath = slug === '/' ? '' : slug;
      const url = `${BASE}/${locale}${urlPath}`;
      const type = MAIN.includes(slug) ? 'MAIN' : 'COCON';

      process.stdout.write(`[${String(done).padStart(3)}/${total}] ${locale}${urlPath || '/'} `);

      const resp = await fetch(url);
      const r = { url, locale, slug: slug || '/', type, status: resp.status, checks: {}, details: {} };

      // 1. HTTP
      r.checks.http = resp.status === 200 ? 'pass' : 'fail';
      if (resp.status !== 200) {
        r.details.http = resp.error || `status ${resp.status}`;
        results.push(r);
        process.stdout.write(`${resp.status} FAIL\n`);
        continue;
      }

      const bodyText = stripTags(resp.body);
      const audit = auditHtml(resp.body, bodyText, locale, slug);
      Object.assign(r.checks, audit.checks);
      Object.assign(r.details, audit.details);

      const fails = Object.values(r.checks).filter(v => v === 'fail').length;
      const warns = Object.values(r.checks).filter(v => v === 'warn').length;
      process.stdout.write(`200 ${fails ? 'F:'+fails : ''} ${warns ? 'W:'+warns : ''} ${!fails && !warns ? 'OK' : ''}\n`);
      results.push(r);
    }
  }

  // Build summaries
  const summary = { pass: 0, warn: 0, fail: 0 };
  const byLocale = {};
  const byCheck = {};
  const failures = [];

  for (const r of results) {
    let worst = 'pass';
    for (const [check, verdict] of Object.entries(r.checks)) {
      if (!byCheck[check]) byCheck[check] = { pass: 0, warn: 0, fail: 0 };
      byCheck[check][verdict]++;
      if (verdict === 'fail') worst = 'fail';
      else if (verdict === 'warn' && worst !== 'fail') worst = 'warn';
      if (verdict === 'fail') failures.push({ url: r.url, locale: r.locale, check, detail: r.details[check] || '', severity: 'FAIL' });
    }
    summary[worst]++;
    if (!byLocale[r.locale]) byLocale[r.locale] = { pass: 0, warn: 0, fail: 0 };
    byLocale[r.locale][worst]++;
  }

  // report.json
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify({
    audit_date: new Date().toISOString(), commit_audited: '635508c',
    total_urls: total, summary, by_locale: byLocale, by_check: byCheck, urls: results
  }, null, 2));

  // failures.csv
  const csv = ['url,locale,check_failed,detail,severity'];
  failures.forEach(f => csv.push(`"${f.url}","${f.locale}","${f.check}","${(f.detail||'').replace(/"/g,"'")}","${f.severity}"`));
  fs.writeFileSync(path.join(OUT, 'failures.csv'), csv.join('\n'));

  // report.md
  const verdict = summary.fail === 0 ? (summary.warn <= 20 ? 'GO' : 'GO with warnings') : (summary.fail <= 5 ? 'GO with warnings' : 'NO GO');
  const md = [];
  md.push('# AUDIT COLHYBRI.VISION — Station F Readiness');
  md.push(`**Date** ${new Date().toISOString().split('T')[0]}  **Commit** 635508c  **URLs** ${total}  **Base** ${BASE}`);
  md.push('');
  md.push(`## Verdict: ${verdict}`);
  md.push(`| | Pass | Warn | Fail |`);
  md.push(`|---|---|---|---|`);
  md.push(`| **Total** | ${summary.pass} | ${summary.warn} | ${summary.fail} |`);
  md.push('');
  md.push('## By Check');
  md.push('| Check | Pass | Warn | Fail |');
  md.push('|---|---|---|---|');
  for (const [c,v] of Object.entries(byCheck)) md.push(`| ${c} | ${v.pass} | ${v.warn} | ${v.fail} |`);
  md.push('');
  md.push('## By Locale');
  md.push('| Locale | Pass | Warn | Fail |');
  md.push('|---|---|---|---|');
  for (const [l,v] of Object.entries(byLocale)) md.push(`| ${l} | ${v.pass} | ${v.warn} | ${v.fail} |`);
  md.push('');
  if (failures.length) {
    md.push('## Top Failures');
    md.push('| URL | Locale | Check | Detail |');
    md.push('|---|---|---|---|');
    failures.slice(0, 30).forEach(f => md.push(`| ${f.url.replace(BASE,'')} | ${f.locale} | ${f.check} | ${(f.detail||'').substring(0,80)} |`));
  }
  md.push('');
  fs.writeFileSync(path.join(OUT, 'report.md'), md.join('\n'));

  console.log(`\n[SHIELD] ${summary.pass} pass, ${summary.warn} warn, ${summary.fail} fail`);
  console.log(`[SHIELD] Verdict: ${verdict}`);
  console.log(`[SHIELD] Reports: ${OUT}/`);
}

main().catch(e => { console.error(e); process.exit(1); });
