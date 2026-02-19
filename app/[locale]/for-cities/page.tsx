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
  const t = await getTranslations({ locale, namespace: 'forCities' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'for-cities',
    title: t('title'),
    description: t('description'),
    semanticPrimary: 'COLHYBRI for cities local economy revitalization',
    semanticSecondary: 'city partnership, Main Street revitalization, local economic activity, financial inclusion goals',
    chunkType: 'landing',
    audience: 'city officials, municipal leaders',
  });
}

export default function ForCitiesPage({ params: { locale } }: PageProps) {
  const t = useTranslations('forCities');
  const impact = useTranslations('impact');
  const common = useTranslations('common');
  const l = locale as Locale;

  const landingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('title'),
    description: t('description'),
    audience: {
      '@type': 'Audience',
      audienceType: 'City Officials and Municipal Leaders',
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: 'https://colhybri.com',
    },
  };

  return (
    <>
      <JsonLd data={landingJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-dark to-colhybri-dark/90 text-white">
        <div className="section-container text-center">
          <p className="text-colhybri-primary font-semibold mb-4 text-sm sm:text-base tracking-wide uppercase">
            {t('title')}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 max-w-4xl mx-auto leading-tight">
            {t('headline')}
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('description')}
          </p>
          <Link href={getLocalizedPath('contact', l)} className="btn-primary text-lg px-8 py-4">
            {common('contactUs')}
          </Link>
        </div>
      </section>

      {/* Impact Metrics for Cities */}
      <section className="bg-white">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">{impact('headline')}</h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="text-4xl font-bold text-colhybri-primary mb-2">
                {impact('metrics.localValue.value')}
              </div>
              <p className="text-colhybri-dark/60">{impact('metrics.localValue.label')}</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-colhybri-secondary mb-2">
                {impact('metrics.jobsCreated.value')}
              </div>
              <p className="text-colhybri-dark/60">{impact('metrics.jobsCreated.label')}</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-colhybri-primary mb-2">
                {impact('metrics.moneyLocal.value')}
              </div>
              <p className="text-colhybri-dark/60">{impact('metrics.moneyLocal.label')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-colhybri-light">
        <div className="section-container max-w-4xl mx-auto">
          <div className="card">
            <h2 className="text-2xl font-bold text-colhybri-dark mb-6 text-center">
              {t('title')}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-colhybri-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-colhybri-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-colhybri-dark/70">Measurable increase in local economic activity through the Keynesian multiplier effect</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-colhybri-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-colhybri-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-colhybri-dark/70">Advance financial inclusion goals for underbanked and unbanked residents</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-colhybri-secondary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-colhybri-secondary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-colhybri-dark/70">Strengthen the commercial fabric of neighborhoods and support local businesses</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-colhybri-secondary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-colhybri-secondary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-colhybri-dark/70">Real-time impact dashboard tracking jobs, spending, and community growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links (Cocon Semantique) */}
      <section className="bg-white">
        <div className="section-container text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href={getLocalizedPath('impact', l)} className="btn-primary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('for-shops', l)} className="btn-secondary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('ecosystem', l)} className="btn-accent">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('contact', l)} className="btn-primary">
              {common('contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
