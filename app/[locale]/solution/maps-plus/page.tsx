import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/JsonLd';
import { ScoreMapsDemo } from '@/components/ScoreMapsDemo';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'mapsPlus' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'solution-maps-plus',
    title: t('meta.title'),
    description: t('meta.description'),
    semanticPrimary: 'Google Maps audit PME SEO local visibility',
    semanticSecondary: 'Google Business Profile, zero friction onboarding, Maps audit, small business digital',
    chunkType: 'page',
    audience: 'merchants, local shops, city managers',
  });
}

export default function MapsPlusPage({ params: { locale } }: PageProps) {
  const t = useTranslations('mapsPlus');

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'COLHYBRI Maps+',
    applicationCategory: 'BusinessApplication',
    description: t('meta.description'),
  };

  const features = ['audit', 'onboarding', 'reviews', 'monitoring'] as const;

  return (
    <>
      <JsonLd data={productJsonLd} />

      <section className="bg-colhybri-cream">
        <div className="section-container text-center">
          <p className="text-colhybri-teal font-sans font-semibold text-sm tracking-widest uppercase mb-4">
            Maps+
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-[1.08]">
            {t('hero.title')}
          </h1>
          <p className="font-sans text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((k) => (
              <div key={k} className="card text-left">
                <h2 className="font-display text-xl font-semibold mb-2">{t(`features.${k}.title`)}</h2>
                <p className="font-sans text-colhybri-dark/70">{t(`features.${k}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-colhybri-cream">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-heading">{t('demo.title')}</h2>
            <p className="section-subheading mx-auto">{t('demo.subtitle')}</p>
          </div>
          <ScoreMapsDemo />
        </div>
      </section>

      <section className="bg-colhybri-teal text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">{t('cta.title')}</h2>
          <a
            href="https://www.colhybri.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-colhybri-teal font-semibold text-lg hover:bg-colhybri-cream transition-colors"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>
    </>
  );
}
