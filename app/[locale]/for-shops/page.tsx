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
  const t = await getTranslations({ locale, namespace: 'forShops' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'for-shops',
    title: t('title'),
    description: t('description'),
    semanticPrimary: 'COLHYBRI for local shops $10 community financial hub',
    semanticSecondary: 'local business, foot traffic, customer loyalty, embedded banking, community visibility',
    chunkType: 'landing',
    audience: 'local shop owners',
  });
}

export default function ForShopsPage({ params: { locale } }: PageProps) {
  const t = useTranslations('forShops');
  const pricing = useTranslations('pricing');
  const common = useTranslations('common');
  const l = locale as Locale;

  const landingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('title'),
    description: t('description'),
    audience: {
      '@type': 'Audience',
      audienceType: 'Local Shop Owners',
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
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-secondary/5 via-white to-colhybri-light">
        <div className="section-container text-center">
          <p className="text-colhybri-secondary font-semibold mb-4 text-sm sm:text-base tracking-wide uppercase">
            {t('title')}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-tight">
            {t('headline')}
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('pricing', l)} className="btn-accent text-lg px-8 py-4">
              {pricing('shops.cta')}
            </Link>
            <Link href={getLocalizedPath('how-it-works', l)} className="btn-secondary text-lg px-8 py-4">
              {common('learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-12">{pricing('shops.title')}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="card text-center">
                  <div className="w-10 h-10 rounded-full bg-colhybri-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-colhybri-secondary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-colhybri-dark/70 font-medium">
                    {pricing(`shops.features.${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="bg-colhybri-light">
        <div className="section-container text-center">
          <div className="card max-w-lg mx-auto border-2 border-colhybri-secondary/20">
            <div className="mb-6">
              <span className="text-6xl font-extrabold text-colhybri-secondary">{pricing('shops.price')}</span>
              <span className="text-colhybri-dark/50 text-xl">{pricing('shops.period')}</span>
            </div>
            <p className="text-colhybri-dark/60 mb-6">
              {t('description')}
            </p>
            <Link href={getLocalizedPath('contact', l)} className="btn-accent w-full">
              {pricing('shops.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links (Cocon Semantique) */}
      <section className="bg-white">
        <div className="section-container text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href={getLocalizedPath('pricing', l)} className="btn-primary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('how-it-works', l)} className="btn-secondary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('impact', l)} className="btn-accent">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('for-cities', l)} className="btn-secondary">
              {common('learnMore')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
