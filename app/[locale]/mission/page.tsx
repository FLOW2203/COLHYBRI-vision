import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { getLocalizedPath } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'missionPage' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'mission',
    title: t('meta.title'),
    description: t('meta.description'),
    semanticPrimary: 'COLHYBRI mission hummingbird legend downtown revitalization',
    semanticSecondary: 'French mutualism, caffe sospeso, Florent Gibert, neighborhood community',
    chunkType: 'page',
    audience: 'general',
  });
}

export default function MissionPage({ params: { locale } }: PageProps) {
  const t = useTranslations('missionPage');
  const common = useTranslations('common');
  const l = locale as Locale;

  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: t('meta.title'),
    description: t('meta.description'),
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: 'https://colhybri.vision',
    },
  };

  return (
    <>
      <JsonLd data={aboutJsonLd} />

      {/* Hero: WHY */}
      <section className="bg-colhybri-cream">
        <div className="section-container text-center">
          <p className="text-colhybri-teal font-sans font-semibold text-sm tracking-widest uppercase mb-4">
            {t('hero.badge')}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-[1.08]">
            {t('hero.why')}
          </h1>
        </div>
      </section>

      {/* Hummingbird legend */}
      <section className="bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-6">{t('legend.title')}</h2>
          <div className="space-y-5">
            <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed">{t('legend.para1')}</p>
            <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed">{t('legend.para2')}</p>
            <blockquote className="font-display italic text-2xl text-colhybri-teal border-l-4 border-colhybri-teal pl-6 my-6">
              {t('legend.quote')}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="bg-colhybri-cream">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-6">{t('heritage.title')}</h2>
          <div className="space-y-5">
            <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed">{t('heritage.mutualism')}</p>
            <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed">{t('heritage.sospeso')}</p>
            <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed font-semibold">
              {t('heritage.synthesis')}
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-6">{t('founder.title')}</h2>
          <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed mb-4">{t('founder.body')}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-colhybri-teal text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-8">{t('cta.title')}</h2>
          <Link
            href={getLocalizedPath('solution', l)}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-colhybri-teal font-semibold text-lg hover:bg-colhybri-cream transition-colors"
          >
            {common('discoverSolution')}
          </Link>
        </div>
      </section>
    </>
  );
}
