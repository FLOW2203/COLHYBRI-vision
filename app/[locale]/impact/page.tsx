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
  const t = await getTranslations({ locale, namespace: 'impact' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'impact',
    title: t('title'),
    description: t('description'),
    semanticPrimary: 'downtown revitalization ZRCV Opportunity Zones ECoSR EUI',
    semanticSecondary: 'Action Coeur de Ville, Petites Villes de Demain, Main Street America',
    chunkType: 'page',
    audience: 'investors, city officials, institutional partners',
  });
}

const REGION_CARDS = [
  { id: 'france', flag: '\u{1F1EB}\u{1F1F7}' },
  { id: 'usa', flag: '\u{1F1FA}\u{1F1F8}' },
  { id: 'europe', flag: '\u{1F1EA}\u{1F1FA}' },
  { id: 'latam', flag: '\u{1F1E7}\u{1F1F7}' },
  { id: 'africa', flag: '\u{1F30D}' },
] as const;

const PROGRAM_KEYS = [0, 1, 2, 3, 4, 5] as const;

export default function ImpactPage({ params: { locale } }: PageProps) {
  const t = useTranslations('impact');
  const l = locale as Locale;

  const impactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('title'),
    description: t('description'),
    about: {
      '@type': 'Thing',
      name: 'Downtown revitalization programs',
      description: 'ZRCV France, Opportunity Zones USA, ECoSR Europe, Main Street America',
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: 'https://colhybri.vision',
    },
  };

  return (
    <>
      <JsonLd data={impactJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-colhybri-cream">
        <div className="section-container text-center">
          <p className="text-colhybri-teal font-sans font-semibold text-sm tracking-widest uppercase mb-4">
            {t('heroBadge')}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-[1.08]">
            {t('heroTitle')}
          </h1>
          <p className="font-sans text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Section 1: Global key figures */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-colhybri-cream border border-colhybri-teal/10"
              >
                <div className="font-mono font-bold text-3xl sm:text-4xl text-colhybri-teal mb-3 leading-none">
                  {t(`globalStats.${i}.value`)}
                </div>
                <p className="font-sans text-sm text-colhybri-dark/70">
                  {t(`globalStats.${i}.label`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: 5 region cards */}
      <section className="bg-colhybri-cream">
        <div className="section-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="section-heading">{t('regionsTitle')}</h2>
            <p className="section-subheading mx-auto">{t('regionsSubtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGION_CARDS.map(({ id, flag }) => (
              <Link
                key={id}
                href={`${getLocalizedPath('impact', l)}/${id}`}
                className="group card text-left hover:border-colhybri-teal hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl" aria-hidden="true">
                    {flag}
                  </span>
                  <h3 className="font-display text-2xl font-semibold group-hover:text-colhybri-teal transition-colors">
                    {t(`regions.${id}.title`)}
                  </h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {[0, 1, 2].map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 font-sans text-sm text-colhybri-dark/70 leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-colhybri-teal flex-shrink-0" />
                      <span>{t(`regions.${id}.lines.${i}`)}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-colhybri-teal">
                  {t('regions.cta')}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Reference programs banner */}
      <section className="bg-white">
        <div className="section-container max-w-6xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-colhybri-dark text-center mb-10">
            {t('programsTitle')}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {PROGRAM_KEYS.map((i) => (
              <span
                key={i}
                className="inline-block border-2 border-colhybri-teal/20 rounded-full px-5 py-2 font-sans font-medium text-colhybri-dark bg-colhybri-cream"
              >
                {t(`programs.${i}`)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="bg-colhybri-teal text-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-8">
            {t('ctaTitle')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={getLocalizedPath('for-cities', l)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-colhybri-teal font-semibold text-lg hover:bg-colhybri-cream transition-colors"
            >
              {t('ctaDemo')}
            </Link>
            <Link
              href={getLocalizedPath('investors', l)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              {t('ctaInvestors')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
