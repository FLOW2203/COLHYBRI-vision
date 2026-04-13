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
  const t = await getTranslations({ locale, namespace: 'solutionHub' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'solution',
    title: t('meta.title'),
    description: t('meta.description'),
    semanticPrimary: 'COLHYBRI solution pool solidaire Maps plus gamification',
    semanticSecondary: 'digital mutual, downtown revitalization, neighborhood pool, Google Maps audit',
    chunkType: 'landing',
    audience: 'general, shops, cities',
  });
}

export default function SolutionHubPage({ params: { locale } }: PageProps) {
  const t = useTranslations('solutionHub');
  const tImg = useTranslations('images');
  const l = locale as Locale;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'COLHYBRI',
    description: t('meta.description'),
    brand: { '@type': 'Brand', name: 'COLHYBRI' },
    offers: {
      '@type': 'Offer',
      url: 'https://colhybri.com',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  };

  const pillars = [
    {
      key: 'pool',
      href: getLocalizedPath('solution-pool-solidaire', l),
      image: visionImages.solution.poolSolidaire,
      altKey: 'solution.pool.alt',
    },
    {
      key: 'maps',
      href: getLocalizedPath('solution-maps-plus', l),
      image: visionImages.solution.mapsPlus,
      altKey: 'solution.maps.alt',
    },
    {
      key: 'gamification',
      href: getLocalizedPath('solution', l) + '#gamification',
      image: visionImages.solution.gamification,
      altKey: 'solution.gamification.alt',
    },
  ] as const;

  return (
    <>
      <JsonLd data={productJsonLd} />

      {/* Hero */}
      <section className="bg-colhybri-cream">
        <div className="section-container text-center">
          <p className="text-colhybri-teal font-sans font-semibold text-sm tracking-widest uppercase mb-4">
            {t('hero.badge')}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-[1.08]">
            {t('hero.title')}
          </h1>
          <p className="font-sans text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map(({ key, href, image, altKey }, i) => (
              <FadeInOnScroll key={key} delay={i * 0.15}>
                <Link
                  href={href}
                  className="card text-left hover:-translate-y-1 hover:border-colhybri-teal transition-all group block"
                >
                  <VisionImage
                    src={image}
                    alt={tImg(altKey)}
                    aspectRatio="1:1"
                    className="mb-6 group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <h2 className="font-display text-2xl font-semibold mb-3 group-hover:text-colhybri-teal transition-colors">
                    {t(`pillars.${key}.title`)}
                  </h2>
                  <p className="font-sans text-colhybri-dark/70 leading-relaxed mb-6">
                    {t(`pillars.${key}.body`)}
                  </p>
                  <span className="font-sans font-semibold text-colhybri-teal">
                    {t(`pillars.${key}.cta`)} &rarr;
                  </span>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gamification anchor section */}
      <section className="bg-colhybri-cream" id="gamification">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h2 className="section-heading">{t('gamification.title')}</h2>
          <p className="section-subheading mx-auto mb-8">{t('gamification.body')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {(['challenges', 'rankings', 'minigames', 'streetRankings'] as const).map((k) => (
              <span
                key={k}
                className="inline-block px-5 py-2 rounded-full bg-white border border-colhybri-teal/20 font-sans text-sm text-colhybri-dark"
              >
                {t(`gamification.tags.${k}`)}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
