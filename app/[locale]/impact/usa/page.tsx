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
  const t = await getTranslations({ locale, namespace: 'impactPages.usa' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'impact',
    title: t('title'),
    description: t('subtitle'),
    semanticPrimary: 'downtown revitalization USA Main Street Opportunity Zones',
    semanticSecondary: 'OZ 2.0, Rust Belt, Canton Ohio, historic tax credits, RAISE grants',
    chunkType: 'page',
    audience: 'US cities, Main Street America, Opportunity Zone investors',
  });
}

export default function ImpactUsaPage({ params: { locale } }: PageProps) {
  const t = useTranslations('impactPages.usa');
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
      ctaLabel={common('bookDemo')}
      ctaRouteKey="for-cities"
    >
      {/* Miami sub-section (moved here from Sprint 1 homepage per spec) */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-colhybri-dark mb-6">
            {t('miami.title')}
          </h2>
          <p className="font-sans text-lg text-colhybri-dark/80 mb-6">{t('miami.intro')}</p>
          <ul className="space-y-3">
            {(['reason1', 'reason2', 'reason3', 'reason4'] as const).map((k) => (
              <li key={k} className="flex items-start gap-3 font-sans text-colhybri-dark/80">
                <span className="mt-2 h-2 w-2 rounded-full bg-colhybri-teal flex-shrink-0" />
                <span>{t(`miami.${k}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ImpactRegionTemplate>
  );
}
