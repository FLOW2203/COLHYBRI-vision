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
  const t = await getTranslations({ locale, namespace: 'impactPages.france' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'impact',
    title: t('title'),
    description: t('subtitle'),
    semanticPrimary: 'downtown revitalization France ZRCV Action Coeur de Ville',
    semanticSecondary: 'Petites Villes de Demain, manager commerce, municipales 2026',
    chunkType: 'page',
    audience: 'French cities, ANCT, Banque des Territoires, CCI',
  });
}

export default function ImpactFrancePage({ params: { locale } }: PageProps) {
  const t = useTranslations('impactPages.france');
  const common = useTranslations('common');
  const l = locale as Locale;

  const stats = [
    { value: t('stats.0.value'), label: t('stats.0.label') },
    { value: t('stats.1.value'), label: t('stats.1.label') },
    { value: t('stats.2.value'), label: t('stats.2.label') },
    { value: t('stats.3.value'), label: t('stats.3.label') },
  ];

  const barometerStats: Array<[string, string]> = [
    [t('barometer.0.value'), t('barometer.0.label')],
    [t('barometer.1.value'), t('barometer.1.label')],
    [t('barometer.2.value'), t('barometer.2.label')],
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
      {/* Barometer Trust & Loneliness (moved here from homepage per Sprint 2 spec) */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-colhybri-dark text-center mb-4">
            {t('barometer.title')}
          </h2>
          <p className="font-sans text-colhybri-dark/70 text-center mb-10 max-w-2xl mx-auto">
            {t('barometer.subtitle')}
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {barometerStats.map(([value, label], i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-colhybri-cream border border-colhybri-gold/20"
              >
                <div className="font-mono font-bold text-4xl text-colhybri-gold mb-2">{value}</div>
                <p className="font-sans text-sm text-colhybri-dark/70">{label}</p>
              </div>
            ))}
          </div>
          <p className="font-display italic text-lg text-center text-colhybri-dark/80 mt-10 max-w-2xl mx-auto">
            {t('barometer.quote')}
          </p>
        </div>
      </section>
    </ImpactRegionTemplate>
  );
}
