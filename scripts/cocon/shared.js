/**
 * COLHYBRI SEO/GEO cocon generator - shared helpers.
 *
 * Each cluster script (cluster1-france.js ... cluster7-international.js)
 * imports `writeCluster` from this module and calls it with its array of
 * page definitions. The helper:
 *
 *   1. Writes one app/[locale]/<slug>/page.tsx per page that delegates
 *      rendering to the shared SeoCoconPage template.
 *   2. Merges the page copy into messages/{fr,en,es}.json under the
 *      `cocon.<slug>` namespace (plus `cocon.common` and `cocon.meta`).
 *   3. Appends the page URL to scripts/cocon/sitemap-entries.json so the
 *      build-time sitemap can pick them up.
 *
 * Running a cluster script twice is safe: all writes are idempotent.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const MESSAGES_DIR = path.join(ROOT, 'messages');
const APP_LOCALE_DIR = path.join(ROOT, 'app', '[locale]');
const SITEMAP_BUFFER = path.join(__dirname, 'sitemap-entries.json');

// Pages that already exist on main as hand-written cocon satellites.
// The generator must never overwrite them even if a matching slug is
// declared inside a cluster file.
const EXISTING_SLUGS = new Set([
  'solidarite-proximite',
  'inclusion-financiere',
]);

const CLUSTERS = {
  france: {
    id: 'france',
    labelFr: 'Revitalisation France',
    labelEn: 'France Revitalization',
    labelEs: 'Revitalizacion Francia',
    pillar: '/impact/france',
    pillarLabelFr: 'Impact France',
    pillarLabelEn: 'France Impact',
    pillarLabelEs: 'Impacto Francia',
  },
  usa: {
    id: 'usa',
    labelFr: 'Revitalisation USA',
    labelEn: 'USA Revitalization',
    labelEs: 'Revitalizacion USA',
    pillar: '/impact/usa',
    pillarLabelFr: 'Impact Etats-Unis',
    pillarLabelEn: 'USA Impact',
    pillarLabelEs: 'Impacto EE.UU.',
  },
  solidaire: {
    id: 'solidaire',
    labelFr: 'Commerce solidaire',
    labelEn: 'Community Commerce',
    labelEs: 'Comercio solidario',
    pillar: '/solution/pool-solidaire',
    pillarLabelFr: 'Pool solidaire',
    pillarLabelEn: 'Community pool',
    pillarLabelEs: 'Pool solidario',
  },
  digital: {
    id: 'digital',
    labelFr: 'Digitalisation commerce',
    labelEn: 'Commerce Digitalization',
    labelEs: 'Digitalizacion comercio',
    pillar: '/solution/maps-plus',
    pillarLabelFr: 'Maps+',
    pillarLabelEn: 'Maps+',
    pillarLabelEs: 'Maps+',
  },
  impact: {
    id: 'impact',
    labelFr: 'Impact social',
    labelEn: 'Social Impact',
    labelEs: 'Impacto social',
    pillar: '/impact',
    pillarLabelFr: 'Impact global',
    pillarLabelEn: 'Global impact',
    pillarLabelEs: 'Impacto global',
  },
  product: {
    id: 'product',
    labelFr: 'Produit COLHYBRI',
    labelEn: 'COLHYBRI Product',
    labelEs: 'Producto COLHYBRI',
    pillar: '/solution',
    pillarLabelFr: 'Solution',
    pillarLabelEn: 'Solution',
    pillarLabelEs: 'Solucion',
  },
  international: {
    id: 'international',
    labelFr: 'International',
    labelEn: 'International',
    labelEs: 'Internacional',
    pillar: '/impact/europe',
    pillarLabelFr: 'Impact Europe',
    pillarLabelEn: 'Europe Impact',
    pillarLabelEs: 'Impacto Europa',
  },
};

// Shared strings used by every rendered cocon page (nav, badges, CTA, FAQ).
const COMMON = {
  fr: {
    home: 'Accueil',
    faqTitle: 'Questions frequentes',
    relatedTitle: 'Pour aller plus loin',
    pillarBadge: 'Dossier principal',
    relatedBadge: 'Sur le meme theme',
    crossBadge: 'Transversal',
    ctaTitle: 'Pret a revitaliser votre centre-ville ?',
    ctaApp: "Ouvrir l'app",
    ctaDemo: 'Planifier une demo',
  },
  en: {
    home: 'Home',
    faqTitle: 'Frequently asked questions',
    relatedTitle: 'Go further',
    pillarBadge: 'Main topic',
    relatedBadge: 'Related',
    crossBadge: 'Cross-topic',
    ctaTitle: 'Ready to revitalize your downtown?',
    ctaApp: 'Open the app',
    ctaDemo: 'Book a demo',
  },
  es: {
    home: 'Inicio',
    faqTitle: 'Preguntas frecuentes',
    relatedTitle: 'Profundizar',
    pillarBadge: 'Tema principal',
    relatedBadge: 'Relacionado',
    crossBadge: 'Transversal',
    ctaTitle: 'Listo para revitalizar tu centro urbano?',
    ctaApp: 'Abrir la app',
    ctaDemo: 'Reservar una demo',
  },
};

function readJson(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function ensureCommonBlock(messages) {
  if (!messages.cocon) messages.cocon = {};
  // Populate cocon.common + cocon.meta lazily so multiple cluster runs
  // converge to the same result.
  return messages.cocon;
}

/**
 * Render the Next.js page.tsx that delegates to SeoCoconPage.
 */
function renderPageTsx({ slug, cluster, related, cross }) {
  const relatedLiteral = related
    .map((r) => `{ href: \`/\${l}/${r}\`, slug: ${JSON.stringify(r)} }`)
    .join(',\n        ');

  return `import type { Locale } from '@/i18n';
import { locales } from '@/i18n';
import { getTranslations } from 'next-intl/server';
import { SeoCoconPage } from '@/components/SeoCoconPage';
import { generatePageMetadata } from '@/lib/metadata';
import { CLUSTERS, getClusterLabel, getPillarLabel } from '@/lib/cocon-clusters';

interface PageProps {
  params: { locale: string };
}

const SLUG = ${JSON.stringify(slug)};
const CLUSTER_ID = ${JSON.stringify(cluster)} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: \`cocon.\${SLUG}\` });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: SLUG,
    title: t('metaTitle'),
    description: t('metaDescription'),
    chunkType: 'article',
  });
}

export default function CoconPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;
  const cluster = CLUSTERS[CLUSTER_ID];

  return (
    <SeoCoconPage
      slug={SLUG}
      locale={l}
      cluster={getClusterLabel(cluster, l)}
      pillarHref={\`/\${l}\${cluster.pillar}\`}
      pillarLabel={getPillarLabel(cluster, l)}
      relatedLinks={[
        ${relatedLiteral}
      ]}
      crossLink={{ href: \`/\${l}/${cross}\`, slug: ${JSON.stringify(cross)} }}
    />
  );
}
`;
}

// Which localized content bucket to use for each supported locale.
// FR/EN/ES get native content; the 8 other locales fall back to EN so
// next-intl never logs MISSING_MESSAGE at build time.
const LOCALE_SOURCE = {
  fr: 'fr',
  en: 'en',
  'en-gb': 'en',
  es: 'es',
  pt: 'en',
  de: 'en',
  it: 'en',
  zh: 'en',
  ja: 'en',
  hi: 'en',
  pl: 'en',
};

/**
 * Patch every messages/<locale>.json with the content for the given pages.
 * FR/EN/ES use their native translations. Other locales get the EN fallback.
 */
function patchI18n(pages) {
  for (const [locale, source] of Object.entries(LOCALE_SOURCE)) {
    const file = path.join(MESSAGES_DIR, `${locale}.json`);
    if (!fs.existsSync(file)) continue;
    const messages = readJson(file);
    const cocon = ensureCommonBlock(messages);

    // Common namespace (shared by all pages, idempotent overwrite)
    cocon.common = { ...(cocon.common || {}), ...(COMMON[source] || COMMON.en) };

    // Meta map lets related/cross links show a readable title on hover.
    cocon.meta = cocon.meta || {};

    for (const page of pages) {
      if (EXISTING_SLUGS.has(page.slug)) continue;

      const localized = page[source];
      if (!localized) {
        throw new Error(
          `[cocon] page "${page.slug}" is missing the "${source}" translation`
        );
      }

      cocon[page.slug] = {
        title: localized.title,
        h1: localized.h1,
        metaTitle: localized.metaTitle,
        metaDescription: localized.metaDescription,
        snippet: localized.snippet,
        sections: localized.sections,
        faq: localized.faq,
        stats: localized.stats,
        ...(localized.tableTitle && { tableTitle: localized.tableTitle }),
        ...(localized.tableHeader && { tableHeader: localized.tableHeader }),
        ...(localized.tableRows && { tableRows: localized.tableRows }),
      };

      // Short title exposed to the related-link panel of OTHER pages.
      cocon.meta[page.slug] = { title: localized.title };
    }

    writeJson(file, messages);
  }
}

/**
 * Write one page.tsx per page under app/[locale]/<slug>/page.tsx.
 */
function writePageFiles(pages) {
  for (const page of pages) {
    if (EXISTING_SLUGS.has(page.slug)) {
      console.log(`[cocon] skip "${page.slug}" (already on main)`);
      continue;
    }
    const dir = path.join(APP_LOCALE_DIR, page.slug);
    fs.mkdirSync(dir, { recursive: true });
    const tsx = renderPageTsx({
      slug: page.slug,
      cluster: page.cluster,
      related: page.related,
      cross: page.cross,
    });
    fs.writeFileSync(path.join(dir, 'page.tsx'), tsx, 'utf8');
  }
}

/**
 * Append slug to the sitemap buffer used by app/sitemap.ts at build time.
 */
function appendSitemapEntries(pages) {
  let existing = [];
  if (fs.existsSync(SITEMAP_BUFFER)) {
    existing = JSON.parse(fs.readFileSync(SITEMAP_BUFFER, 'utf8'));
  }
  const slugs = new Set(existing);
  for (const page of pages) {
    if (!EXISTING_SLUGS.has(page.slug)) slugs.add(page.slug);
  }
  fs.writeFileSync(
    SITEMAP_BUFFER,
    JSON.stringify([...slugs].sort(), null, 2) + '\n',
    'utf8'
  );
}

function writeCluster(clusterId, pages) {
  console.log(`[cocon] cluster=${clusterId} pages=${pages.length}`);
  writePageFiles(pages);
  patchI18n(pages);
  appendSitemapEntries(pages);
  console.log(`[cocon] cluster=${clusterId} done`);
}

module.exports = {
  CLUSTERS,
  COMMON,
  EXISTING_SLUGS,
  writeCluster,
};
