// Playwright scanner: iterates url-matrix.json, records HTTP status,
// blank-page detection, raw i18n keys, internal links, and doctrine
// regressions. Concurrency 5; 15s per page with 1 retry.

import { chromium, Browser, BrowserContext } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

interface Entry {
  locale: string;
  canonical_route: string;
  expected_url: string;
  type: string;
  should_return?: number;
}

interface Result extends Entry {
  status: number | 'timeout' | 'error';
  title: string;
  body_chars: number;
  issues: string[];
  doctrine_flags: string[];
  internal_links: string[];
  error?: string;
}

const MATRIX_PATH = path.join(__dirname, 'url-matrix.json');
const REPORT_PATH = path.join(__dirname, 'audit-report.json');
const SCREENSHOT_DIR = path.join(__dirname, 'audit-screenshots');
const CONCURRENCY = Number(process.env.AUDIT_CONCURRENCY ?? 5);
const TIMEOUT_MS = Number(process.env.AUDIT_TIMEOUT_MS ?? 15000);

if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

const matrix: Entry[] = JSON.parse(fs.readFileSync(MATRIX_PATH, 'utf8'));

// Pattern for raw i18n keys: dotted-word chains like "problem.headline", "common.bookDemo"
// Exclude domains, versions, filenames.
const RAW_KEY_REGEX = /\b[a-z][a-zA-Z]{2,}(?:\.[a-z][a-zA-Z]{2,}){1,3}\b/g;

// Doctrine regression flags — any occurrence on a live page is a P0
const DOCTRINE_PATTERNS: Array<{ pattern: RegExp; flag: string }> = [
  { pattern: /\bfree pilot\b/i, flag: 'DOCTRINE_free_pilot' },
  { pattern: /\bpilote gratuit\b/i, flag: 'DOCTRINE_pilote_gratuit' },
  { pattern: /\bpiloto gratuito\b/i, flag: 'DOCTRINE_piloto_gratuito' },
  { pattern: /\bcontact@colhybri\.vision\b/i, flag: 'DOCTRINE_old_email' },
  { pattern: /\bStéphane Picard[^.]{0,80}\bCTO\b/i, flag: 'DOCTRINE_stephane_CTO' },
  { pattern: /\bStephane Picard[^.]{0,80}\bCTO\b/i, flag: 'DOCTRINE_stephane_CTO' },
  { pattern: /\bOrléans\b/i, flag: 'DOCTRINE_wrong_city_orleans' },
  { pattern: /\bNîmes\b/i, flag: 'DOCTRINE_wrong_city_nimes' },
];

// Known false positives for the RAW_KEY_REGEX (strings that naturally have a dot-word shape)
const RAW_KEY_EXCLUDE = /(?:colhybri\.com|colhybri\.vision|gmail\.com|colhybri\.co|www\.|\.tsx|\.ts|\.js|onlymore2024|google\.com|playwright\.dev|goo\.gl|next\.js|react\.dev|vercel\.app|\.json|\.png|\.jpg|\.svg|\.pdf|\.webp|\.avif|\.xml|\.md|\.html)/i;

async function auditOne(context: BrowserContext, entry: Entry): Promise<Result> {
  const result: Result = {
    ...entry,
    status: 'error',
    title: '',
    body_chars: 0,
    issues: [],
    doctrine_flags: [],
    internal_links: [],
  };

  const page = await context.newPage();
  try {
    const response = await page.goto(entry.expected_url, {
      waitUntil: 'networkidle',
      timeout: TIMEOUT_MS,
    });

    result.status = response ? response.status() : 'error';

    if (typeof result.status === 'number' && result.status >= 400) {
      // For traps we *expect* 404; flag only if trap got <400 (= blank render)
      if (entry.type === 'cross_slug_trap' && entry.should_return === 404 && result.status === 404) {
        // good
      } else {
        result.issues.push(`HTTP_${result.status}`);
      }
    }

    // Even on 404/500, grab body (Next.js may render an error page)
    result.title = await page.title().catch(() => '');
    const bodyText = await page.evaluate(() => document.body?.innerText ?? '').catch(() => '');
    result.body_chars = bodyText.length;

    // Blank-page detection (skip for traps that correctly 404)
    if (
      result.body_chars < 100 &&
      !(entry.type === 'cross_slug_trap' && result.status === 404)
    ) {
      result.issues.push('BLANK_PAGE');
    }

    // Cross-slug trap that returned 200 = confirmed bug
    if (entry.type === 'cross_slug_trap' && result.status === 200) {
      result.issues.push('CROSS_SLUG_RENDERED_200');
    }

    // Raw i18n keys
    const raw = Array.from(new Set((bodyText.match(RAW_KEY_REGEX) ?? []).filter((k) => !RAW_KEY_EXCLUDE.test(k))));
    if (raw.length > 0) result.issues.push(`I18N_RAW_KEYS:${raw.slice(0, 8).join(',')}`);

    // Doctrine regressions
    for (const { pattern, flag } of DOCTRINE_PATTERNS) {
      if (pattern.test(bodyText)) result.doctrine_flags.push(flag);
    }
    if (result.doctrine_flags.length > 0) result.issues.push(`DOCTRINE_REGRESSION`);

    // Internal links (for cross-link validation)
    if (typeof result.status === 'number' && result.status === 200) {
      const links = await page.evaluate(() =>
        Array.from(document.querySelectorAll('a[href]'))
          .map((a) => (a as HTMLAnchorElement).getAttribute('href') ?? '')
          .filter((h) => h.startsWith('/') || h.includes('colhybri.vision') || h.includes('localhost'))
      ).catch(() => []);
      result.internal_links = Array.from(new Set(links));
    }

    // Screenshot only on real issues (not for correct 404 traps)
    if (result.issues.length > 0) {
      const safe = entry.expected_url.replace(/[^a-z0-9]/gi, '_').slice(-120);
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, `${safe}.png`), fullPage: false }).catch(() => {});
    }
  } catch (e: any) {
    result.status = 'timeout';
    result.error = String(e?.message ?? e).slice(0, 200);
    result.issues.push(`FETCH_${result.status}`);
  } finally {
    await page.close().catch(() => {});
  }

  return result;
}

async function runPool<T, U>(items: T[], n: number, worker: (t: T) => Promise<U>): Promise<U[]> {
  const out: U[] = new Array(items.length);
  let cursor = 0;
  const lanes = Array.from({ length: Math.min(n, items.length) }, async () => {
    while (true) {
      const i = cursor++;
      if (i >= items.length) break;
      out[i] = await worker(items[i]);
      const r = out[i] as unknown as Result;
      const mark = r.issues.length === 0 ? 'OK' : 'XX';
      process.stdout.write(`[${i + 1}/${items.length}] ${mark} ${r.status} ${r.expected_url}\n`);
    }
  });
  await Promise.all(lanes);
  return out;
}

(async () => {
  console.log(`Launching Chromium… (concurrency=${CONCURRENCY}, timeout=${TIMEOUT_MS}ms, ${matrix.length} URLs)`);
  const browser: Browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'COLHYBRI-Audit/1.0 Playwright',
  });
  const start = Date.now();
  const results = await runPool(matrix, CONCURRENCY, (entry) => auditOne(context, entry));
  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  await browser.close();

  fs.writeFileSync(REPORT_PATH, JSON.stringify(results, null, 2));

  const ok = results.filter((r) => r.issues.length === 0).length;
  const p0 = results.filter(
    (r) => r.issues.some((i) => i.startsWith('HTTP_5') || i === 'BLANK_PAGE' || i === 'CROSS_SLUG_RENDERED_200' || i === 'DOCTRINE_REGRESSION')
  ).length;
  const p1 = results.filter((r) => r.issues.some((i) => i.startsWith('I18N_RAW_KEYS'))).length;
  const p2 = results.filter((r) => r.issues.some((i) => i.startsWith('HTTP_4') && i !== 'HTTP_404')).length;

  console.log(`\nDone in ${elapsed}s`);
  console.log(`  OK : ${ok}/${results.length}`);
  console.log(`  P0 : ${p0}`);
  console.log(`  P1 : ${p1}`);
  console.log(`  P2 : ${p2}`);
  console.log(`Report: ${REPORT_PATH}`);
})();
