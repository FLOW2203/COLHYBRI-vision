// Generates the exhaustive URL matrix for the production audit.
// Reads routeMap from lib/navigation.ts to produce per-locale URLs
// and injects cross-slug traps (e.g. /en/investidores) to verify
// that the app rejects them with a 404 instead of rendering blank.

import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = process.env.AUDIT_BASE_URL ?? 'http://localhost:3000';

const LOCALES = ['en', 'en-gb', 'fr', 'es', 'pt', 'de', 'it', 'zh', 'ja', 'hi', 'pl'] as const;
type Locale = (typeof LOCALES)[number];

// Canonical routes to audit (every locale × every route = valid URLs)
const CANONICAL_ROUTES = [
  'home',
  'mission',
  'solution',
  'solution-maps-plus',
  'solution-pool-solidaire',
  'pricing',
  'impact',
  'for-cities',
  'for-individuals',
  'for-shops',
  'ecosystem',
  'investors',
  'faq',
  'contact',
  'presse',
];

// Regional impact pages
const IMPACT_REGIONS = ['france', 'usa', 'uk', 'espana', 'maroc', 'europe', 'latam', 'africa'];

// Slug matrix mirrors lib/navigation.ts. Post-April-2026 fix: zh/ja/hi use
// the EN canonical ASCII slug (non-Latin scripts broke Next.js routing).
const SLUG_MATRIX: Record<string, Record<string, string>> = {
  home: Object.fromEntries(LOCALES.map((l) => [l, ''])),
  mission: {
    en: 'mission', 'en-gb': 'mission', fr: 'mission', es: 'mision', pt: 'missao',
    de: 'mission', it: 'missione', zh: 'mission', ja: 'mission', hi: 'mission', pl: 'misja',
  },
  solution: Object.fromEntries(LOCALES.map((l) => [l, 'solution'])),
  'solution-maps-plus': Object.fromEntries(LOCALES.map((l) => [l, 'solution/maps-plus'])),
  'solution-pool-solidaire': {
    en: 'solution/community-pool', 'en-gb': 'solution/community-pool',
    fr: 'solution/pool-solidaire', es: 'solution/pool-solidaire', pt: 'solution/pool-solidaire',
    de: 'solution/pool-solidaire', it: 'solution/pool-solidaire', zh: 'solution/pool-solidaire',
    ja: 'solution/pool-solidaire', hi: 'solution/pool-solidaire', pl: 'solution/pool-solidaire',
  },
  pricing: {
    en: 'pricing', 'en-gb': 'pricing', fr: 'tarifs', es: 'precios', pt: 'precos',
    de: 'preise', it: 'prezzi', zh: 'pricing', ja: 'pricing', hi: 'pricing', pl: 'cennik',
  },
  impact: {
    en: 'impact', 'en-gb': 'impact', fr: 'impact', es: 'impacto', pt: 'impacto',
    de: 'wirkung', it: 'impatto', zh: 'impact', ja: 'impact', hi: 'impact', pl: 'wplyw',
  },
  'for-cities': {
    en: 'for-cities', 'en-gb': 'for-cities', fr: 'pour-les-villes', es: 'para-ciudades',
    pt: 'para-cidades', de: 'fuer-staedte', it: 'per-i-comuni', zh: 'for-cities', ja: 'for-cities',
    hi: 'for-cities', pl: 'dla-miast',
  },
  'for-individuals': {
    en: 'for-individuals', 'en-gb': 'for-individuals', fr: 'pour-les-particuliers', es: 'para-individuos',
    pt: 'para-individuos', de: 'fuer-einzelpersonen', it: 'per-i-cittadini', zh: 'for-individuals', ja: 'for-individuals',
    hi: 'for-individuals', pl: 'dla-osob-prywatnych',
  },
  'for-shops': {
    en: 'for-shops', 'en-gb': 'for-shops', fr: 'pour-les-commerces', es: 'para-comercios',
    pt: 'para-comercios', de: 'fuer-geschaefte', it: 'per-le-botteghe', zh: 'for-shops', ja: 'for-shops',
    hi: 'for-shops', pl: 'dla-sklepow',
  },
  ecosystem: {
    en: 'ecosystem', 'en-gb': 'ecosystem', fr: 'ecosysteme', es: 'ecosistema', pt: 'ecossistema',
    de: 'oekosystem', it: 'ecosistema', zh: 'ecosystem', ja: 'ecosystem', hi: 'ecosystem', pl: 'ekosystem',
  },
  investors: {
    en: 'investors', 'en-gb': 'investors', fr: 'investisseurs', es: 'inversores', pt: 'investidores',
    de: 'investoren', it: 'investitori', zh: 'investors', ja: 'investors', hi: 'investors', pl: 'inwestorzy',
  },
  faq: Object.fromEntries(LOCALES.map((l) => [l, 'faq'])),
  contact: {
    en: 'contact', 'en-gb': 'contact', fr: 'contact', es: 'contacto', pt: 'contato',
    de: 'kontakt', it: 'contatti', zh: 'contact', ja: 'contact', hi: 'contact', pl: 'kontakt',
  },
  presse: Object.fromEntries(LOCALES.map((l) => [l, 'presse'])),
};

interface Entry {
  locale: string;
  canonical_route: string;
  expected_url: string;
  type: 'valid' | 'cross_slug_trap' | 'impact_region';
  should_return?: number;
}

const entries: Entry[] = [];

// 1. Valid URLs — each locale × each route
for (const locale of LOCALES) {
  for (const route of CANONICAL_ROUTES) {
    const slug = SLUG_MATRIX[route]?.[locale] ?? route;
    const suffix = slug ? `/${encodeURI(slug)}` : '';
    entries.push({
      locale,
      canonical_route: route,
      expected_url: `${BASE_URL}/${locale}${suffix}`,
      type: 'valid',
    });
  }
  // Impact regions — append to locale impact slug
  const impactSlug = SLUG_MATRIX.impact[locale] ?? 'impact';
  for (const region of IMPACT_REGIONS) {
    entries.push({
      locale,
      canonical_route: `impact/${region}`,
      expected_url: `${BASE_URL}/${locale}/${encodeURI(impactSlug)}/${region}`,
      type: 'impact_region',
    });
  }
}

// 2. Cross-slug traps — slug from locale A pasted onto locale B path
//    Should all return 404 (or at least NOT render a blank page).
const TRAP_ROUTES = ['investors', 'pricing', 'for-cities', 'ecosystem'];
for (const route of TRAP_ROUTES) {
  const slugs = SLUG_MATRIX[route];
  const slugValues = Object.entries(slugs).filter(([, v]) => v);
  for (const targetLocale of LOCALES) {
    const nativeSlug = slugs[targetLocale];
    for (const [sourceLocale, foreignSlug] of slugValues) {
      if (sourceLocale === targetLocale) continue;
      if (foreignSlug === nativeSlug) continue; // same slug shared, not a trap
      entries.push({
        locale: targetLocale,
        canonical_route: route,
        expected_url: `${BASE_URL}/${targetLocale}/${encodeURI(foreignSlug)}`,
        type: 'cross_slug_trap',
        should_return: 404,
      });
    }
  }
}

// Deduplicate (some traps may collide with valid URLs)
const seen = new Set<string>();
const deduped = entries.filter((e) => {
  if (seen.has(e.expected_url)) return false;
  seen.add(e.expected_url);
  return true;
});

const outPath = path.join(__dirname, 'url-matrix.json');
fs.writeFileSync(outPath, JSON.stringify(deduped, null, 2));

const validCount = deduped.filter((e) => e.type !== 'cross_slug_trap').length;
const trapCount = deduped.filter((e) => e.type === 'cross_slug_trap').length;

console.log(`URL matrix written to ${outPath}`);
console.log(`  - valid URLs: ${validCount}`);
console.log(`  - cross-slug traps: ${trapCount}`);
console.log(`  - total: ${deduped.length}`);
