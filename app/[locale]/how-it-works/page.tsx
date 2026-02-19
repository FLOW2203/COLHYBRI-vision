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
  const t = await getTranslations({ locale, namespace: 'howItWorks' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'how-it-works',
    title: t('title'),
    description: t('headline'),
    semanticPrimary: 'how COLHYBRI works subscribe connect thrive',
    semanticSecondary: 'financial inclusion steps, local commerce onboarding, community financial network',
    chunkType: 'page',
    audience: 'underbanked individuals, local shop owners',
  });
}

export default function HowItWorksPage({ params: { locale } }: PageProps) {
  const t = useTranslations('howItWorks');
  const common = useTranslations('common');
  const l = locale as Locale;

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t('title'),
    description: t('headline'),
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: t('steps.subscribe.title'),
        text: t('steps.subscribe.description'),
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: t('steps.connect.title'),
        text: t('steps.connect.description'),
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: t('steps.thrive.title'),
        text: t('steps.thrive.description'),
      },
    ],
  };

  const steps = ['subscribe', 'connect', 'thrive'] as const;

  const stepIcons = [
    // Subscribe icon
    <svg key="subscribe" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="23" y1="11" x2="17" y2="11" />
    </svg>,
    // Connect icon
    <svg key="connect" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>,
    // Thrive icon
    <svg key="thrive" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>,
  ];

  return (
    <>
      <JsonLd data={howToJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-light via-white to-colhybri-primary/5">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-tight">
            {t('headline')}
          </h1>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={step} className="relative">
                <div className="card text-center">
                  <div className="w-14 h-14 rounded-full bg-colhybri-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 text-colhybri-primary flex items-center justify-center mx-auto mb-4">
                    {stepIcons[index]}
                  </div>
                  <h2 className="text-xl font-bold mb-3">{t(`steps.${step}.title`)}</h2>
                  <p className="text-colhybri-dark/60 leading-relaxed">{t(`steps.${step}.description`)}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-colhybri-primary/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Blocks */}
      <section className="bg-colhybri-light">
        <div className="section-container max-w-4xl mx-auto space-y-12">
          {/* Subscribe Detail */}
          <div className="card">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-colhybri-primary text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-colhybri-dark">
                  {t('steps.subscribe.title')}
                </h3>
                <p className="text-colhybri-dark/70 leading-relaxed mb-4">
                  {t('steps.subscribe.description')}
                </p>
                <Link href={getLocalizedPath('for-individuals', l)} className="text-colhybri-primary font-semibold hover:underline">
                  {common('learnMore')} &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Connect Detail */}
          <div className="card">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-colhybri-secondary text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-colhybri-dark">
                  {t('steps.connect.title')}
                </h3>
                <p className="text-colhybri-dark/70 leading-relaxed mb-4">
                  {t('steps.connect.description')}
                </p>
                <Link href={getLocalizedPath('for-shops', l)} className="text-colhybri-secondary font-semibold hover:underline">
                  {common('learnMore')} &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Thrive Detail */}
          <div className="card">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-colhybri-primary text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-colhybri-dark">
                  {t('steps.thrive.title')}
                </h3>
                <p className="text-colhybri-dark/70 leading-relaxed mb-4">
                  {t('steps.thrive.description')}
                </p>
                <Link href={getLocalizedPath('impact', l)} className="text-colhybri-primary font-semibold hover:underline">
                  {common('learnMore')} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Internal Links */}
      <section className="bg-white">
        <div className="section-container text-center">
          <h2 className="section-heading mb-6">
            {common('getStarted')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('pricing', l)} className="btn-primary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('mission', l)} className="btn-secondary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('contact', l)} className="btn-accent">
              {common('contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
