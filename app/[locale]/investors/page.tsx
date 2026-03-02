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
  const t = await getTranslations({ locale, namespace: 'investors' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'investors',
    title: t('title'),
    description: t('description'),
    semanticPrimary: 'COLHYBRI investors financial inclusion social impact',
    semanticSecondary: 'pre-seed, Keynesian multiplier, ONLYMORE Group, financial inclusion investment',
    chunkType: 'landing',
    audience: 'investors',
  });
}

export default function InvestorsPage({ params: { locale } }: PageProps) {
  const t = useTranslations('investors');
  const common = useTranslations('common');
  const l = locale as Locale;

  const investorJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('title'),
    description: t('description'),
    about: {
      '@type': 'Thing',
      name: 'Financial Inclusion Investment',
      description: 'Pre-seed investment opportunity combining social impact with financial inclusion.',
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: 'https://colhybri.vision',
    },
  };

  return (
    <>
      <JsonLd data={investorJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-colhybri-dark text-white">
        <div className="section-container text-center">
          <p className="text-colhybri-primary font-semibold text-sm tracking-wide uppercase mb-4">
            {locale === 'fr' ? 'Investisseurs' : 'Investors'}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 max-w-4xl mx-auto leading-tight">
            {t('headline')}
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Pre-seed Stage */}
      <section className="bg-gradient-to-br from-colhybri-dark to-colhybri-dark/95 text-white">
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card bg-white/5 border border-white/10 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-colhybri-primary mb-3">
                Pre-seed
              </div>
              <p className="text-white/60">
                {locale === 'fr' ? 'Phase actuelle' : 'Current Stage'}
              </p>
            </div>
            <div className="card bg-white/5 border border-white/10 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-colhybri-secondary mb-3">
                Affordable
              </div>
              <p className="text-white/60">
                {locale === 'fr' ? 'Abonnement accessible pour tous' : 'Subscription accessible to all'}
              </p>
            </div>
            <div className="card bg-white/5 border border-white/10 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-colhybri-primary mb-3">
                Millions
              </div>
              <p className="text-white/60">
                {locale === 'fr' ? 'De personnes sous-bancarisées (marché cible)' : 'Of underbanked individuals (target market)'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <div className="card bg-gradient-to-br from-colhybri-primary/5 to-colhybri-secondary/5 border border-colhybri-primary/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-colhybri-dark mb-4">
                {locale === 'fr' ? 'Pourquoi investir dans COLHYBRI' : 'Why Invest in COLHYBRI'}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-colhybri-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-colhybri-dark mb-1">
                    {locale === 'fr' ? 'Unit economics éprouvés' : 'Proven Unit Economics'}
                  </h3>
                  <p className="text-colhybri-dark/60 text-sm">
                    {locale === 'fr'
                      ? 'Modèle SaaS éprouvé par le groupe ONLYMORE, à faible churn.'
                      : 'SaaS model proven by ONLYMORE Group, low-churn subscription.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-colhybri-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-colhybri-dark mb-1">
                    {locale === 'fr' ? 'Impact social massif' : 'Massive Social Impact'}
                  </h3>
                  <p className="text-colhybri-dark/60 text-sm">
                    {locale === 'fr'
                      ? 'Des millions de personnes sous-bancarisées. Un marché mondial massif.'
                      : 'Millions of underbanked individuals. A massive global market.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-colhybri-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-colhybri-dark mb-1">
                    {locale === 'fr' ? 'Lancement Miami H1 2026' : 'Miami Launch H1 2026'}
                  </h3>
                  <p className="text-colhybri-dark/60 text-sm">
                    {locale === 'fr'
                      ? 'Premier marché cible : Miami-Dade County, une communauté diverse.'
                      : 'First target market: Miami-Dade County, a diverse community.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-colhybri-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-colhybri-dark mb-1">
                    {locale === 'fr' ? 'Effet multiplicateur' : 'Multiplier Effect'}
                  </h3>
                  <p className="text-colhybri-dark/60 text-sm">
                    {locale === 'fr'
                      ? 'Chaque abonnement génère une valeur économique locale multipliée.'
                      : 'Every subscription generates multiplied local economic value.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-colhybri-primary">
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {locale === 'fr' ? 'Intéressé par COLHYBRI ?' : 'Interested in COLHYBRI?'}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <Link
            href={getLocalizedPath('contact', l)}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-colhybri-primary font-bold text-lg hover:bg-white/90 transition-colors"
          >
            {common('contactUs')}
          </Link>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-colhybri-light">
        <div className="section-container text-center">
          <h2 className="section-heading mb-10">
            {common('learnMore')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('ecosystem', l)} className="btn-primary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('impact', l)} className="btn-secondary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('mission', l)} className="btn-accent">
              {common('learnMore')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
