import type { Locale } from '@/i18n';
import { locales } from '@/i18n';
import { getTranslations } from 'next-intl/server';
import { SeoCoconPage } from '@/components/SeoCoconPage';
import { generatePageMetadata } from '@/lib/metadata';
import { CLUSTERS, getClusterLabel, getPillarLabel } from '@/lib/cocon-clusters';

interface PageProps {
  params: { locale: string };
}

const SLUG = "avis-google-commercants";
const CLUSTER_ID = "digital" as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: `cocon.${SLUG}` });
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
      pillarHref={`/${l}${cluster.pillar}`}
      pillarLabel={getPillarLabel(cluster, l)}
      relatedLinks={[
        { href: `/${l}/google-maps-commerce`, slug: "google-maps-commerce" },
        { href: `/${l}/seo-local-commerce`, slug: "seo-local-commerce" },
        { href: `/${l}/visibilite-google-pme`, slug: "visibilite-google-pme" }
      ]}
      crossLink={{ href: `/${l}/fidelisation-communautaire`, slug: "fidelisation-communautaire" }}
    />
  );
}
