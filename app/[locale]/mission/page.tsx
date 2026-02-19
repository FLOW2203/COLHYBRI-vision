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
  const t = await getTranslations({ locale, namespace: 'mission' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'mission',
    title: t('title'),
    description: t('description'),
    semanticPrimary: 'financial inclusion mission hummingbird legend',
    semanticSecondary: 'underbanked, community power, local commerce, Keynesian multiplier',
    chunkType: 'page',
    audience: 'general',
  });
}

export default function MissionPage({ params: { locale } }: PageProps) {
  const t = useTranslations('mission');
  const common = useTranslations('common');
  const l = locale as Locale;

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: t('title'),
    description: t('description'),
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: 'https://colhybri.com',
    },
  };

  return (
    <>
      <JsonLd data={orgJsonLd} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-light via-white to-colhybri-primary/5">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-tight">
            {t('headline')}
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Financial Inclusion */}
            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3">{t('pillars.inclusion.title')}</h2>
              <p className="text-colhybri-dark/60">{t('pillars.inclusion.description')}</p>
            </div>

            {/* Local Commerce */}
            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-secondary/10 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3">{t('pillars.commerce.title')}</h2>
              <p className="text-colhybri-dark/60">{t('pillars.commerce.description')}</p>
            </div>

            {/* Community Power */}
            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3">{t('pillars.community.title')}</h2>
              <p className="text-colhybri-dark/60">{t('pillars.community.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hummingbird Legend */}
      <section className="bg-colhybri-light">
        <div className="section-container max-w-4xl mx-auto">
          <div className="card bg-gradient-to-br from-colhybri-primary/5 to-colhybri-secondary/5 border border-colhybri-primary/10">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-8">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <blockquote className="text-xl sm:text-2xl font-medium text-colhybri-dark/80 italic mb-6 leading-relaxed">
                &ldquo;I am doing my part.&rdquo;
              </blockquote>
              <p className="text-colhybri-dark/60 leading-relaxed max-w-2xl mx-auto">
                {t('description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links (Cocon Semantique) */}
      <section className="bg-white">
        <div className="section-container text-center">
          <h2 className="section-heading mb-10">
            {common('learnMore')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('how-it-works', l)} className="btn-primary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('impact', l)} className="btn-secondary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('for-individuals', l)} className="btn-accent">
              {common('getStarted')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
