import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { getLocalizedPath } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';
import { VisionImage } from '@/components/ui/VisionImage';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { visionImages } from '@/lib/vision-images';

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
  const tImg = useTranslations('images');
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
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeInOnScroll direction="left">
              <VisionImage
                src={visionImages.mission.colibriFire}
                alt={tImg('mission.colibriFire.alt')}
                aspectRatio="2:3"
                className="max-w-md mx-auto"
              />
            </FadeInOnScroll>
            <FadeInOnScroll direction="right" delay={0.15}>
              <div>
                <h2 className="font-display text-3xl font-semibold mb-6">{t('legend.title')}</h2>
                <div className="space-y-5">
                  <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed">{t('legend.para1')}</p>
                  <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed">{t('legend.para2')}</p>
                  <blockquote className="font-display italic text-2xl text-colhybri-teal border-l-4 border-colhybri-teal pl-6 my-6">
                    {t('legend.quote')}
                  </blockquote>
                </div>
              </div>
            </FadeInOnScroll>
          </div>

          <FadeInOnScroll>
            <div className="max-w-lg mx-auto mt-20">
              <VisionImage
                src={visionImages.mission.colibriHope}
                alt={tImg('mission.colibriHope.alt')}
                aspectRatio="2:3"
              />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Heritage */}
      <section className="bg-colhybri-cream">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-10 text-center">{t('heritage.title')}</h2>

          <FadeInOnScroll>
            <VisionImage
              src={visionImages.heritage.caffeSospeso}
              alt={tImg('heritage.caffe.alt')}
              aspectRatio="16:9"
              className="w-full mb-8"
            />
          </FadeInOnScroll>

          <div className="space-y-5 mb-12">
            <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed">{t('heritage.sospeso')}</p>
          </div>

          <FadeInOnScroll delay={0.15}>
            <VisionImage
              src={visionImages.heritage.mutualisme}
              alt={tImg('heritage.mutualisme.alt')}
              aspectRatio="16:9"
              className="w-full mb-8"
            />
          </FadeInOnScroll>

          <div className="space-y-5">
            <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed">{t('heritage.mutualism')}</p>
            <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed font-semibold">
              {t('heritage.synthesis')}
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl font-semibold mb-6">{t('founder.title')}</h2>
              <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed mb-4">{t('founder.body')}</p>
            </div>
            <FadeInOnScroll direction="right">
              <VisionImage
                src={visionImages.founder}
                alt={tImg('founder.alt')}
                aspectRatio="1:1"
                className="max-w-sm mx-auto !rounded-full"
              />
            </FadeInOnScroll>
          </div>
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
