import type { Locale } from '@/i18n';
import { locales } from '@/i18n';
import { getTranslations } from 'next-intl/server';
import { SeoCoconPage } from '@/components/SeoCoconPage';
import { generatePageMetadata } from '@/lib/metadata';
import { CLUSTERS, getClusterLabel, getPillarLabel } from '@/lib/cocon-clusters';

interface PageProps {
  params: { locale: string };
}

const SLUG = "zrcv-zones-revitalisation";
const CLUSTER_ID = "france" as const;

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
        { href: `/${l}/revitalisation-centres-villes`, slug: "revitalisation-centres-villes" },
        { href: `/${l}/vacance-commerciale-france`, slug: "vacance-commerciale-france" },
        { href: `/${l}/municipales-2026-commerce`, slug: "municipales-2026-commerce" }
      ]}
      crossLink={{ href: `/${l}/opportunity-zones`, slug: "opportunity-zones" }}
    />
  );
}
