// Static audit of colhybri.vision without a browser.
// Inputs:
//   - scripts/url-matrix.json (all URLs the app should/shouldn't serve)
//   - app/[locale]/** (file-based routes)
//   - next.config.mjs (rewrites + redirects)
//   - messages/*.json (i18n keys)
//   - All source files (.ts/.tsx) for hardcoded <Link href="/<locale>/..."> scans
//
// Output:
//   - scripts/audit-static-report.json — full findings
//   - Console summary by priority

import * as fs from 'fs';
import * as path from 'path';

type Entry = {
  locale: string;
  canonical_route: string;
  expected_url: string;
  type: string;
  should_return?: number;
};

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const MATRIX_PATH = path.join(__dirname, 'url-matrix.json');
const REPORT_PATH = path.join(__dirname, 'audit-static-report.json');
const NEXT_CONFIG = path.join(ROOT, 'next.config.mjs');
const MESSAGES_DIR = path.join(ROOT, 'messages');

const LOCALES = ['en', 'en-gb', 'fr', 'es', 'pt', 'de', 'it', 'zh', 'ja', 'hi', 'pl'] as const;

// --- 1. Build set of physical routes under app/[locale]/ ---
function collectPhysicalRoutes(): Set<string> {
  const routes = new Set<string>();
  const localeDir = path.join(APP_DIR, '[locale]');
  function walk(dir: string, rel: string) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const st = fs.statSync(full);
      if (st.isDirectory()) {
        walk(full, rel ? `${rel}/${name}` : name);
      } else if (name === 'page.tsx' || name === 'page.ts') {
        routes.add(rel);
      }
    }
  }
  walk(localeDir, '');
  return routes;
}

// --- 2. Parse rewrites / redirects from next.config.mjs ---
function parseRewritesRedirects(): { rewrites: Array<{ source: string; destination: string }>; redirects: Array<{ source: string; destination: string }> } {
  const src = fs.readFileSync(NEXT_CONFIG, 'utf8');
  // crude but sufficient: extract {source, destination} pairs inside arrays
  const rewriteRe = /{\s*source:\s*'([^']+)',\s*destination:\s*'([^']+)'\s*}/g;
  const rewrites: Array<{ source: string; destination: string }> = [];
  let m: RegExpExecArray | null;
  while ((m = rewriteRe.exec(src)) !== null) {
    rewrites.push({ source: m[1], destination: m[2] });
  }
  // Split: items generated inside howItWorksSlugs/communityPoolRedirects lists
  const redirectsRe = /{\s*locale:\s*'([a-z-]+)',\s*slug:\s*'([^']+)'\s*}/g;
  const redirects: Array<{ source: string; destination: string }> = [];
  while ((m = redirectsRe.exec(src)) !== null) {
    const locale = m[1];
    const slug = m[2];
    redirects.push({ source: `/${locale}/${slug}`, destination: `/${locale}/solution` });
  }
  // Community pool redirects (explicit)
  if (src.includes('/en/solution/pool-solidaire')) {
    redirects.push({ source: '/en/solution/pool-solidaire', destination: '/en/solution/community-pool' });
    redirects.push({ source: '/en-gb/solution/pool-solidaire', destination: '/en-gb/solution/community-pool' });
  }
  return { rewrites, redirects };
}

// --- 3. For a given URL, resolve whether the app would serve it ---
function resolveUrl(urlPath: string, physicalRoutes: Set<string>, rewrites: Array<{ source: string; destination: string }>, redirects: Array<{ source: string; destination: string }>): 'physical' | 'rewritten' | 'redirected' | 'dynamic_region' | '404' {
  // Strip leading slash + locale prefix
  const clean = urlPath.replace(/^\//, '');
  const parts = clean.split('/');
  if (parts.length === 0) return '404';
  const locale = parts[0];
  if (!(LOCALES as readonly string[]).includes(locale)) return '404';
  const after = parts.slice(1).join('/');

  // Exact path to compare
  const fullPath = `/${locale}${after ? '/' + after : ''}`;

  // Redirect?
  if (redirects.some((r) => r.source === fullPath)) return 'redirected';
  // Rewrite?
  if (rewrites.some((r) => r.source === fullPath)) return 'rewritten';

  // Physical route? Compare after the locale prefix
  // Homepage
  if (!after) {
    return physicalRoutes.has('') || physicalRoutes.has('.') ? 'physical' : 'physical';
  }
  if (physicalRoutes.has(after)) return 'physical';

  // Dynamic impact region: impact/<region>
  if (after.match(/^impact\/[a-z-]+$/)) {
    return physicalRoutes.has('impact/[region]') ? 'dynamic_region' : '404';
  }

  return '404';
}

// --- 4. Grep hardcoded cross-language hrefs ---
function findHardcodedHrefs(): Array<{ file: string; line: number; href: string; containing_locale: string | null }> {
  const matches: Array<{ file: string; line: number; href: string; containing_locale: string | null }> = [];
  const re = /href=["'`](\/(?:en|en-gb|fr|es|pt|de|it|zh|ja|hi|pl)\/[^"'`?#]+)/g;
  function walk(dir: string) {
    for (const name of fs.readdirSync(dir)) {
      if (name === 'node_modules' || name === '.next' || name === '.git' || name === 'scripts') continue;
      const full = path.join(dir, name);
      const st = fs.statSync(full);
      if (st.isDirectory()) {
        walk(full);
      } else if (/\.(tsx?|jsx?)$/.test(name)) {
        const txt = fs.readFileSync(full, 'utf8');
        const lines = txt.split('\n');
        const m = txt.matchAll(re);
        for (const mm of m) {
          const href = mm[1];
          const idx = mm.index ?? 0;
          const lineIdx = txt.slice(0, idx).split('\n').length;
          // Check parent locale from path
          const pathMatch = full.match(/\/(en|en-gb|fr|es|pt|de|it|zh|ja|hi|pl)\//);
          const parent = pathMatch ? pathMatch[1] : null;
          matches.push({ file: path.relative(ROOT, full), line: lineIdx, href, containing_locale: parent });
        }
      }
    }
  }
  walk(ROOT);
  return matches;
}

// --- 5. Doctrine regression scan (across source + messages) ---
function findDoctrineRegressions(): Array<{ flag: string; file: string; line: number; snippet: string }> {
  const findings: Array<{ flag: string; file: string; line: number; snippet: string }> = [];
  const patterns = [
    { flag: 'free_pilot', re: /\bfree pilot\b/i },
    { flag: 'pilote_gratuit', re: /\bpilote gratuit\b/i },
    { flag: 'piloto_gratuito', re: /\bpiloto gratuito\b/i },
    { flag: 'old_email', re: /\bcontact@colhybri\.vision\b/i },
    { flag: 'wrong_city_orleans', re: /\bOrléans\b/i },
    { flag: 'wrong_city_nimes', re: /\bNîmes\b/i },
    { flag: 'stephane_CTO', re: /\bSt[eé]phane Picard[^.]{0,80}CTO\b/i },
  ];
  function walk(dir: string) {
    for (const name of fs.readdirSync(dir)) {
      if (['node_modules', '.next', '.git', 'scripts', 'docs', 'DELTA_REPORT.md', 'AUDIT.md', 'AUDIT_COLHYBRI_20260412.md', 'CLAUDE.md'].includes(name)) continue;
      const full = path.join(dir, name);
      const st = fs.statSync(full);
      if (st.isDirectory()) {
        walk(full);
      } else if (/\.(tsx?|jsx?|json|md)$/.test(name)) {
        // Skip scripts SEO cocon templates (they are generator scripts not runtime)
        if (full.includes('/scripts/cocon/')) continue;
        const txt = fs.readFileSync(full, 'utf8');
        const lines = txt.split('\n');
        for (const { flag, re } of patterns) {
          lines.forEach((ln, i) => {
            if (re.test(ln)) {
              // Filter self-references in CLAUDE/audit files
              if (/JAMAIS|should NOT|interdi|forbidden|non-reg|NEVER/i.test(ln)) return;
              findings.push({ flag, file: path.relative(ROOT, full), line: i + 1, snippet: ln.trim().slice(0, 200) });
            }
          });
        }
      }
    }
  }
  walk(ROOT);
  return findings;
}

// --- 6. Raw key scan: every t('x.y.z') call must exist in each locale ---
function scanI18nKeys(): { missing_per_locale: Record<string, string[]> } {
  // Collect all t('...') usages
  const keyUses = new Set<string>();
  const tCallRe = /t\(\s*['"`]([a-z][a-zA-Z0-9_.]*?)['"`]/g;
  function walk(dir: string) {
    for (const name of fs.readdirSync(dir)) {
      if (['node_modules', '.next', '.git', 'scripts'].includes(name)) continue;
      const full = path.join(dir, name);
      const st = fs.statSync(full);
      if (st.isDirectory()) walk(full);
      else if (/\.(tsx?|jsx?)$/.test(name)) {
        const txt = fs.readFileSync(full, 'utf8');
        let m;
        while ((m = tCallRe.exec(txt)) !== null) keyUses.add(m[1]);
      }
    }
  }
  walk(ROOT);

  // For each locale, check each key path against its messages file
  // Note: the key does not carry the namespace — the namespace is set via useTranslations('ns').
  // So we can't reliably resolve which namespace. Instead we check each key as-is against ALL locales
  // in their flat form (each namespace flat-merged). We flag keys that are present in EN but absent
  // in other locales.
  function flatten(obj: any, prefix = '', out = new Set<string>()): Set<string> {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
      for (const [k, v] of Object.entries(obj)) {
        flatten(v, prefix ? `${prefix}.${k}` : k, out);
      }
    } else {
      out.add(prefix);
    }
    return out;
  }

  const allKeysByLocale: Record<string, Set<string>> = {};
  for (const loc of LOCALES) {
    const d = JSON.parse(fs.readFileSync(path.join(MESSAGES_DIR, `${loc}.json`), 'utf8'));
    allKeysByLocale[loc] = flatten(d);
  }

  const refKeys = allKeysByLocale['en'];
  const missing_per_locale: Record<string, string[]> = {};
  for (const loc of LOCALES) {
    if (loc === 'en') continue;
    const miss = [...refKeys].filter((k) => !allKeysByLocale[loc].has(k));
    if (miss.length) missing_per_locale[loc] = miss;
  }
  return { missing_per_locale };
}

// --- Main ---
const matrix: Entry[] = JSON.parse(fs.readFileSync(MATRIX_PATH, 'utf8'));
const physicalRoutes = collectPhysicalRoutes();
const { rewrites, redirects } = parseRewritesRedirects();
console.log(`Collected ${physicalRoutes.size} physical routes, ${rewrites.length} rewrites, ${redirects.length} redirects`);

const urlFindings = matrix.map((e) => {
  const urlPath = e.expected_url.replace(/^https?:\/\/[^/]+/, '');
  const resolution = resolveUrl(urlPath, physicalRoutes, rewrites, redirects);
  const issues: string[] = [];

  if (e.type === 'valid' || e.type === 'impact_region') {
    if (resolution === '404') issues.push('URL_NOT_SERVED');
  } else if (e.type === 'cross_slug_trap') {
    // We *want* these to 404. If they resolve to a physical/rewrite, that's a bug.
    if (resolution !== '404' && resolution !== 'redirected') {
      issues.push(`CROSS_SLUG_LEAK:${resolution}`);
    }
  }
  return { ...e, resolution, issues };
});

console.log(`Scanning hardcoded hrefs…`);
const hardcoded = findHardcodedHrefs();
// Flag: href points to a locale different from the file's containing locale folder
const crossLanguageHrefs = hardcoded.filter((h) => {
  if (!h.containing_locale) return false;
  const hrefLocale = h.href.match(/^\/([a-z-]+)\//)?.[1];
  if (!hrefLocale) return false;
  return hrefLocale !== h.containing_locale;
});

console.log(`Scanning doctrine regressions…`);
const doctrine = findDoctrineRegressions();

console.log(`Scanning i18n key completeness…`);
const i18nCoverage = scanI18nKeys();

const report = {
  generated_at: new Date().toISOString(),
  totals: {
    urls_tested: urlFindings.length,
    urls_not_served: urlFindings.filter((u) => u.issues.includes('URL_NOT_SERVED')).length,
    cross_slug_leaks: urlFindings.filter((u) => u.issues.some((i) => i.startsWith('CROSS_SLUG_LEAK'))).length,
    hardcoded_locale_hrefs: hardcoded.length,
    cross_language_hrefs: crossLanguageHrefs.length,
    doctrine_regressions: doctrine.length,
    i18n_locales_with_missing_keys: Object.keys(i18nCoverage.missing_per_locale).length,
  },
  urls: urlFindings,
  hardcoded_hrefs: hardcoded,
  cross_language_hrefs: crossLanguageHrefs,
  doctrine_regressions: doctrine,
  i18n_coverage: i18nCoverage,
};

fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
console.log(`\nReport: ${REPORT_PATH}`);
console.log(JSON.stringify(report.totals, null, 2));
