import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n';
import { locales } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { ImpactRegionTemplate } from '@/components/ImpactRegionTemplate';

interface PageProps {
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'impactPages.latam' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'impact',
    title: t('title'),
    description: t('subtitle'),
    semanticPrimary: 'Latin America informal commerce formalization digital mutual',
    semanticSecondary: 'IDB, World Bank, informal employment, mobile-first',
    chunkType: 'page',
    audience: 'IDB, Latin American cities, informal commerce institutions',
  });
}

export default function ImpactLatamPage({ params: { locale } }: PageProps) {
  const t = useTranslations('impactPages.latam');
  const common = useTranslations('common');
  const l = locale as Locale;

  const stats = [
    { value: t('stats.0.value'), label: t('stats.0.label') },
    { value: t('stats.1.value'), label: t('stats.1.label') },
    { value: t('stats.2.value'), label: t('stats.2.label') },
    { value: t('stats.3.value'), label: t('stats.3.label') },
  ];

  return (
    <ImpactRegionTemplate
      locale={l}
      badge={t('badge')}
      title={t('title')}
      subtitle={t('subtitle')}
      stats={stats}
      contextParagraphs={[t('context.0'), t('context.1'), t('context.2')]}
      propositionTitle={t('proposition.title')}
      propositionBody={t('proposition.body')}
      ctaLabel={common('institutionalPartnership')}
      ctaRouteKey="contact"
    />
  );
}
