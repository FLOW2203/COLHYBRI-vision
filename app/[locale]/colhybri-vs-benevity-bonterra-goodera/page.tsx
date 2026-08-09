import type { Locale } from '@/i18n';
import { locales } from '@/i18n';
import { getTranslations } from 'next-intl/server';
import { SeoCoconPage } from '@/components/SeoCoconPage';
import { generatePageMetadata } from '@/lib/metadata';
import { CLUSTERS, getClusterLabel, getPillarLabel } from '@/lib/cocon-clusters';

interface PageProps {
  params: { locale: string };
}

const SLUG = "colhybri-vs-benevity-bonterra-goodera";
const CLUSTER_ID = "usa" as const;

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
    semanticPrimary: 'place-based community impact platform for companies',
    semanticSecondary: 'local economic vitality, employer brand, talent retention, belonging, corporate giving alternative',
    chunkType: 'article',
    audience: 'companies',
  });
}

export default function CoconPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;
  const cluster = CLUSTERS[CLUSTER_ID];

  // US corporate / place-based track only. Per doctrine, this page never links
  // the FR community-support vocabulary to the US corporate vocabulary, so every
  // related and cross link stays inside the USA cluster.
  return (
    <SeoCoconPage
      slug={SLUG}
      locale={l}
      cluster={getClusterLabel(cluster, l)}
      pillarHref={`/${l}${cluster.pillar}`}
      pillarLabel={getPillarLabel(cluster, l)}
      relatedLinks={[
        { href: `/${l}/downtown-revitalization`, slug: "downtown-revitalization" },
        { href: `/${l}/opportunity-zones`, slug: "opportunity-zones" },
        { href: `/${l}/small-business-digital`, slug: "small-business-digital" }
      ]}
      crossLink={{ href: `/${l}/community-development`, slug: "community-development" }}
    />
  );
}
