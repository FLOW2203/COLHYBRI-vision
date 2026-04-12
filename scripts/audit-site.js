#!/usr/bin/env node
/**
 * SHIELD audit — 3 levels for every COLHYBRI URL.
 *
 *   Level 1  HTTP status (200/301/404/500)
 *   Level 2  SEO technicals (title, meta, H1, canonical, hreflang, OG, JSON-LD)
 *   Level 3  GEO readiness (snippet, FAQ/Article schema, tables, H2 questions)
 *
 * Usage:
 *   AUDIT_BASE=http://localhost:3000 node scripts/audit-site.js
 *   AUDIT_BASE=https://colhybri.vision node scripts/audit-site.js
 *
 * Writes AUDIT_COLHYBRI_YYYYMMDD.md at the repo root.
 */

const https = require('https');
const http = require('http');
const fs = require('fs');

const BASE = (process.env.AUDIT_BASE || 'https://colhybri.vision').replace(/\/$/, '');
const LOCALES = (process.env.AUDIT_LOCALES || 'fr,en,es').split(',');

const MAIN_PAGES = [
  '/', '/mission', '/solution', '/solution/maps-plus', '/solution/pool-solidaire',
  '/impact', '/impact/france', '/impact/usa', '/impact/europe', '/impact/latam',
  '/impact/africa', '/for-cities', '/investors', '/presse', '/contact', '/faq',
];

const COCON_PAGES = [
  // C1 France
  '/revitalisation-centres-villes', '/action-coeur-de-ville',
  '/petites-villes-de-demain', '/zrcv-zones-revitalisation',
  '/manager-commerce-cci', '/vacance-commerciale-france',
  '/municipales-2026-commerce', '/commerce-proximite-digital',
  // C2 USA
  '/downtown-revitalization', '/opportunity-zones', '/main-street-america',
  '/rust-belt-revitalization', '/small-business-digital', '/community-development',
  // C3 Solidaire
  '/mutualisme-digital', '/caffe-sospeso', '/economie-solidaire',
  '/pool-solidaire-quartier', '/solidarite-proximite', '/commerce-equitable-local',
  '/cooperative-quartier', '/fidelisation-communautaire',
  // C4 Digital
  '/google-maps-commerce', '/visibilite-google-pme', '/seo-local-commerce',
  '/avis-google-commercants', '/onboarding-digital-commerce',
  '/score-maps-audit', '/maps-plus-outil',
  // C5 Impact
  '/commerce-informel', '/revitalisation-quartier', '/tiers-lieu-digital',
  '/impact-social-commerce', '/keynesian-multiplier-local', '/inclusion-financiere',
  // C6 Produit
  '/comment-ca-marche', '/tarifs-colhybri', '/pour-les-commercants',
  '/pour-les-particuliers', '/pour-les-collectivites',
  // C7 International
  '/ecosr-european-capital-small-retail', '/eui-european-urban-initiative',
  '/idb-latin-america', '/afd-afrique', '/fifa-innovation-sport',
];

// FORGE i18n namespaces — 500s on pages using these get classified
// as "PENDING FORGE" rather than as critical audit failures.
const FORGE_NAMESPACES = [
  'impactPages', 'forCitiesPage', 'investorsPage', 'solutionHub',
  'mapsPlus', 'poolSolidaire', 'pressePage', 'missionPage',
  'forms', 'worldMap',
];

function fetch(url, maxRedirects = 3) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(
      url,
      {
        headers: {
          'User-Agent': 'COLHYBRI-Shield-Audit/2.0',
          'Accept-Language': 'fr,en,es',
          Accept: 'text/html',
        },
      },
      (res) => {
        if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location && maxRedirects > 0) {
          const newUrl = res.headers.location.startsWith('http')
            ? res.headers.location
            : new URL(res.headers.location, url).toString();
          fetch(newUrl, maxRedirects - 1).then((r) =>
            resolve({ ...r, redirectedFrom: url, redirectStatus: res.statusCode })
          );
          return;
        }

        let body = '';
        res.on('data', (d) => (body += d));
        res.on('end', () => {
          const status = res.statusCode;

          // Level 2 — SEO
          const titleM = body.match(/<title[^>]*>([^<]+)<\/title>/i);
          const metaM = body.match(
            /<meta\s+(?:name="description"\s+content="([^"]*)"|content="([^"]*)"\s+name="description")/i
          );
          const h1M = body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
          const canonicalM = body.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
          const hreflangs = body.match(/<link\s+rel="alternate"\s+hreflang="[^"]+"\s+href="[^"]+"/gi) || [];
          const ogTitle = body.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i);
          const ogDesc = body.match(/<meta\s+property="og:description"\s+content="([^"]*)"/i);
          const ogImage = body.match(/<meta\s+property="og:image"\s+content="([^"]*)"/i);
          const jsonLdBlocks =
            body.match(/<script[^>]*application\/ld\+json[^>]*>[\s\S]*?<\/script>/gi) || [];
          const internalLinks = (body.match(/href="\/((?!_next|api)[^"]*?)"/g) || []).length;
          const missingMsgLine = body.match(/MISSING_MESSAGE/g) || [];

          // Level 3 — GEO
          const snippetP =
            body.match(/<p[^>]*class="[^"]*snippet[^"]*"[^>]*>([\s\S]*?)<\/p>/i) ||
            body.match(/<p[^>]*>([\s\S]{100,250})<\/p>/i);
          const jsonLdJoined = jsonLdBlocks.join(' ');
          const hasFaqSchema = /"@type"\s*:\s*"FAQPage"/i.test(jsonLdJoined);
          const hasArticleSchema = /"@type"\s*:\s*"Article"/i.test(jsonLdJoined);
          const hasHowTo = /"@type"\s*:\s*"HowTo"/i.test(jsonLdJoined);
          const tables = (body.match(/<table/gi) || []).length;
          const h2Questions = (
            body.match(
              /<h2[^>]*>[^<]*(?:comment|pourquoi|qu'est|how|what|why|como|que|por\s*que)[^<]*\??<\/h2>/gi
            ) || []
          ).length;

          // Likely FORGE-pending: page body contains the namespace key as literal text
          // (next-intl renders the key path when the namespace is missing).
          const forgePending = FORGE_NAMESPACES.some((ns) => body.includes(`${ns}.`));

          resolve({
            url,
            status,
            title: titleM ? titleM[1].trim() : null,
            titleLen: titleM ? titleM[1].trim().length : 0,
            metaDesc: metaM ? ((metaM[1] || metaM[2]) || '').trim() : null,
            metaDescLen: metaM ? ((metaM[1] || metaM[2]) || '').trim().length : 0,
            h1: h1M ? h1M[1].replace(/<[^>]+>/g, '').trim() : null,
            canonical: canonicalM ? canonicalM[1] : null,
            hreflangCount: hreflangs.length,
            ogTitle: !!ogTitle,
            ogDesc: !!ogDesc,
            ogImage: !!ogImage,
            jsonLdCount: jsonLdBlocks.length,
            internalLinks,
            missingI18n: missingMsgLine.length,
            snippetFound: !!snippetP,
            faqSchema: hasFaqSchema,
            articleSchema: hasArticleSchema,
            howToSchema: hasHowTo,
            tables,
            h2Questions,
            bodySize: body.length,
            forgePending,
          });
        });
      }
    );
    req.on('error', (e) => resolve({ url, status: 'ERROR', error: e.message }));
    req.setTimeout(20000, () => {
      req.destroy();
      resolve({ url, status: 'TIMEOUT' });
    });
  });
}

async function audit() {
  const ALL = [...MAIN_PAGES, ...COCON_PAGES];
  const total = ALL.length * LOCALES.length;
  console.log(`\n[SHIELD] Auditing ${total} URLs against ${BASE}`);
  console.log(`[SHIELD] Locales: ${LOCALES.join(', ')}\n`);

  const results = [];
  let tested = 0;

  for (const locale of LOCALES) {
    for (const page of ALL) {
      const slug = page === '/' ? '' : page;
      const url = `${BASE}/${locale}${slug}`;
      tested++;
      process.stdout.write(`[${String(tested).padStart(3, ' ')}/${total}] ${locale}${slug || '/'} ... `);
      // eslint-disable-next-line no-await-in-loop
      const r = await fetch(url);
      r.locale = locale;
      r.slug = slug || '/';
      r.type = MAIN_PAGES.includes(page) ? 'MAIN' : 'COCON';
      results.push(r);
      process.stdout.write(`${r.status}\n`);
      // eslint-disable-next-line no-await-in-loop
      await new Promise((res) => setTimeout(res, 100));
    }
  }

  const report = [];
  report.push('# AUDIT COLHYBRI.VISION');
  report.push(`**Date**  ${new Date().toISOString().split('T')[0]}`);
  report.push(`**Base**  ${BASE}`);
  report.push(`**URLs tested**  ${tested}`);
  report.push(`**Locales**  ${LOCALES.join(', ')}`);
  report.push('');

  const ok = results.filter((r) => r.status === 200);
  const redirects = results.filter((r) => r.redirectedFrom);
  const hardErrors = results.filter((r) => {
    if (r.status === 'TIMEOUT' || r.status === 'ERROR') return true;
    if (typeof r.status === 'number' && r.status >= 400) return true;
    return false;
  });
  const forgePending = ok.filter((r) => r.forgePending);
  const nonForgeOk = ok.filter((r) => !r.forgePending);
  const warnings = ok.filter((r) => r.missingI18n > 0);

  report.push('## Resume');
  report.push('| Metric | Count |');
  report.push('|---|---|');
  report.push(`| 200 OK (total) | ${ok.length} |`);
  report.push(`| 200 OK (FORGE-pending) | ${forgePending.length} |`);
  report.push(`| 200 OK (clean) | ${nonForgeOk.length} |`);
  report.push(`| Redirects | ${redirects.length} |`);
  report.push(`| Hard errors (4xx/5xx/timeout) | ${hardErrors.length} |`);
  report.push(`| Pages with i18n warnings | ${warnings.length} |`);
  report.push('');

  if (hardErrors.length > 0) {
    report.push('## CRITICAL — Hard errors');
    report.push('| Status | Locale | Slug | Type | Diagnosis |');
    report.push('|---|---|---|---|---|');
    hardErrors.forEach((r) => {
      const diag =
        r.status === 500
          ? r.forgePending
            ? 'PENDING FORGE (Sprint 2b i18n namespace missing)'
            : 'Server error - check i18n or import'
          : r.status === 404
            ? 'Missing page file or routing'
            : r.error || 'Unknown';
      report.push(`| ${r.status} | ${r.locale || '?'} | ${r.slug || '?'} | ${r.type || '?'} | ${diag} |`);
    });
    report.push('');
  }

  report.push('## SEO Scorecard');
  const denom = ok.length || 1;
  const pct = (n) => `${n}/${ok.length} (${Math.round((n * 100) / denom)}%)`;
  const withTitle = ok.filter((r) => r.title).length;
  const titleLenOk = ok.filter((r) => r.titleLen >= 30 && r.titleLen <= 65).length;
  const withMeta = ok.filter((r) => r.metaDesc).length;
  const metaLenOk = ok.filter((r) => r.metaDescLen >= 70 && r.metaDescLen <= 160).length;
  const withH1 = ok.filter((r) => r.h1).length;
  const withCanonical = ok.filter((r) => r.canonical).length;
  const withHreflang = ok.filter((r) => r.hreflangCount >= 2).length;
  const withOG = ok.filter((r) => r.ogTitle && r.ogDesc).length;
  const withJsonLd = ok.filter((r) => r.jsonLdCount > 0).length;
  const withLinks3 = ok.filter((r) => r.internalLinks >= 3).length;

  report.push('| Check | Score |');
  report.push('|---|---|');
  report.push(`| Title present | ${pct(withTitle)} |`);
  report.push(`| Title 30-65 chars | ${pct(titleLenOk)} |`);
  report.push(`| Meta description | ${pct(withMeta)} |`);
  report.push(`| Meta 70-160 chars | ${pct(metaLenOk)} |`);
  report.push(`| H1 unique | ${pct(withH1)} |`);
  report.push(`| Canonical | ${pct(withCanonical)} |`);
  report.push(`| Hreflang (2+) | ${pct(withHreflang)} |`);
  report.push(`| Open Graph | ${pct(withOG)} |`);
  report.push(`| JSON-LD schema | ${pct(withJsonLd)} |`);
  report.push(`| 3+ internal links | ${pct(withLinks3)} |`);
  report.push('');

  report.push('## GEO Readiness (AI answer-engine optimization)');
  const coconOk = ok.filter((r) => r.type === 'COCON');
  const coconDenom = coconOk.length || 1;
  const pctC = (n) => `${n}/${coconOk.length} (${Math.round((n * 100) / coconDenom)}%)`;
  const cArt = coconOk.filter((r) => r.articleSchema).length;
  const cFaq = coconOk.filter((r) => r.faqSchema).length;
  const cTbl = coconOk.filter((r) => r.tables > 0).length;
  const cQ = coconOk.filter((r) => r.h2Questions > 0).length;
  const cSnip = coconOk.filter((r) => r.snippetFound).length;

  report.push('| Criterion | Cocon Score | Impact |');
  report.push('|---|---|---|');
  report.push(`| Article schema | ${pctC(cArt)} | Perplexity/ChatGPT citation |`);
  report.push(`| FAQPage schema | ${pctC(cFaq)} | Google AI Overviews |`);
  report.push(`| Data table | ${pctC(cTbl)} | LLM extraction |`);
  report.push(`| H2 as question | ${pctC(cQ)} | AI query match |`);
  report.push(`| Snippet paragraph | ${pctC(cSnip)} | Cite-friendly lead |`);
  report.push('');

  if (warnings.length > 0) {
    report.push('## i18n warnings (MISSING_MESSAGE)');
    report.push('| Locale | Slug | Count |');
    report.push('|---|---|---|');
    warnings
      .sort((a, b) => b.missingI18n - a.missingI18n)
      .slice(0, 30)
      .forEach((r) => {
        report.push(`| ${r.locale} | ${r.slug} | ${r.missingI18n} |`);
      });
    if (warnings.length > 30) report.push(`_... and ${warnings.length - 30} more_`);
    report.push('');
  }

  report.push('## Detail (all URLs)');
  report.push('| St | Loc | Type | Slug | Tit | Met | H1 | Can | Hfl | OG | JLD | Lnk | i18 | FP |');
  report.push('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
  results.forEach((r) => {
    if (r.status === 'ERROR' || r.status === 'TIMEOUT') {
      report.push(
        `| ${r.status} | ${r.locale || '?'} | ${r.type || '?'} | ${r.slug || '?'} | - | - | - | - | - | - | - | - | - | - |`
      );
      return;
    }
    const tf = (b) => (b ? 'Y' : '-');
    report.push(
      `| ${r.status} | ${r.locale} | ${r.type} | ${r.slug} | ${r.title ? 'Y' : '-'} | ${r.metaDesc ? 'Y' : '-'} | ${r.h1 ? 'Y' : '-'} | ${r.canonical ? 'Y' : '-'} | ${r.hreflangCount} | ${tf(r.ogTitle)} | ${r.jsonLdCount} | ${r.internalLinks} | ${r.missingI18n} | ${tf(r.forgePending)} |`
    );
  });
  report.push('');

  report.push('## Recommended actions');
  const actions = [];
  hardErrors.forEach((r) => {
    if (r.status === 500 && !r.forgePending) {
      actions.push(`- FIX 500: /${r.locale}${r.slug} - investigate server render`);
    } else if (r.status === 404) {
      actions.push(`- FIX 404: /${r.locale}${r.slug} - check app/[locale]${r.slug}/page.tsx exists`);
    }
  });
  if (forgePending.length > 0) {
    actions.push(
      `- DEFER (FORGE Sprint 2b): ${forgePending.length} pages render key paths because 10 Sprint 2 i18n namespaces are not yet in messages/*.json`
    );
  }
  if (withCanonical < ok.length) actions.push(`- SEO: add canonical on ${ok.length - withCanonical} pages`);
  if (withHreflang < ok.length) actions.push(`- SEO: add hreflang FR/EN/ES on ${ok.length - withHreflang} pages`);
  if (withOG < ok.length) actions.push(`- SEO: add Open Graph on ${ok.length - withOG} pages`);
  if (withJsonLd < ok.length) actions.push(`- SEO: add JSON-LD on ${ok.length - withJsonLd} pages`);
  if (cFaq < coconOk.length) actions.push(`- GEO: add FAQPage schema on ${coconOk.length - cFaq} cocon pages`);
  if (cTbl < coconOk.length) actions.push(`- GEO: add data table on ${coconOk.length - cTbl} cocon pages`);
  if (actions.length === 0) actions.push('- No critical action required. Ship it.');
  report.push(...actions);
  report.push('');

  const reportText = report.join('\n');
  const date = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const reportPath = `AUDIT_COLHYBRI_${date}.md`;
  fs.writeFileSync(reportPath, reportText);
  console.log(`\n[SHIELD] Report saved: ${reportPath}`);
  console.log(`[SHIELD] Summary: ${ok.length} OK, ${hardErrors.length} errors, ${forgePending.length} FORGE-pending, ${warnings.length} with i18n warnings\n`);
}

audit().catch((e) => {
  console.error('[SHIELD] Audit failed:', e);
  process.exit(1);
});
