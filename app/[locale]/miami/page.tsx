import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata, generateLocalBusinessJsonLd, generateBreadcrumbJsonLd } from '@/lib/metadata';
import { getLocalizedPath, BASE_URL } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'miami' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'miami',
    title: t('title'),
    description: t('description'),
    semanticPrimary: 'Miami fintech financial inclusion Latino community',
    chunkType: 'landing',
    audience: 'underbanked Miami residents, local shop owners, community organizations',
  });
}

const stats = [
  { value: '30%+', label: 'Miami-Dade underbanked residents' },
  { value: '70%', label: 'Hispanic/Latino population' },
  { value: '300,000+', label: 'Local shops in Miami-Dade' },
  { value: '$2.5B', label: 'Potential local economic impact' },
];

const timeline = [
  { quarter: 'Q1 2026', milestone: 'Community partnerships' },
  { quarter: 'Q2 2026', milestone: 'Beta launch in Little Havana' },
  { quarter: 'Q3 2026', milestone: 'Expansion to Miami-Dade' },
  { quarter: 'Q4 2026', milestone: 'Full Florida rollout' },
];

export default function MiamiPage({ params: { locale } }: PageProps) {
  const t = useTranslations();
  const l = locale as Locale;

  const breadcrumbItems = [
    { name: t('nav.home'), url: `${BASE_URL}${getLocalizedPath('home', l)}` },
    { name: t('nav.miami'), url: `${BASE_URL}${getLocalizedPath('miami', l)}` },
  ];

  return (
    <>
      <JsonLd data={generateLocalBusinessJsonLd()} />
      <JsonLd data={generateBreadcrumbJsonLd(breadcrumbItems, l)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-light via-white to-colhybri-primary/5">
        <div className="section-container text-center">
          <p className="text-colhybri-primary font-semibold mb-4 text-sm sm:text-base tracking-wide uppercase">
            Scale to Miami
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-colhybri-dark mb-6 max-w-5xl mx-auto leading-tight">
            {t('miami.headline')}
          </h1>

          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('miami.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('contact', l)} className="btn-primary text-lg px-8 py-4">
              {t('common.contactUs')}
            </Link>
            <Link href={getLocalizedPath('for-shops', l)} className="btn-secondary text-lg px-8 py-4">
              {t('common.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Miami Section */}
      <section className="bg-white" id="why-miami">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">{t('miami.whyMiami.title')}</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-colhybri-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-colhybri-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-colhybri-dark/70 leading-relaxed">
                    {t(`miami.whyMiami.reasons.${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-colhybri-dark text-white" id="miami-stats">
        <div className="section-container text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Miami by the Numbers
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
            The data behind why Miami-Dade is the ideal launchpad for financial inclusion.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index}>
                <div
                  className={`text-4xl sm:text-5xl font-bold mb-2 ${
                    index % 2 === 0 ? 'text-colhybri-primary' : 'text-colhybri-secondary'
                  }`}
                >
                  {stat.value}
                </div>
                <p className="text-white/60 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-colhybri-light" id="launch-timeline">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Launch Roadmap</h2>
            <p className="section-subheading mx-auto">
              Our phased approach to bringing financial inclusion to South Florida.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-colhybri-primary/20" aria-hidden="true" />

              <div className="space-y-10">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Dot */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                        index === 0
                          ? 'bg-colhybri-primary text-white'
                          : 'bg-white border-2 border-colhybri-primary/30 text-colhybri-dark'
                      }`}
                    >
                      {`Q${index + 1}`}
                    </div>

                    {/* Content */}
                    <div className="card flex-1">
                      <p className="text-colhybri-primary font-semibold text-sm mb-1">
                        {item.quarter}
                      </p>
                      <p className="text-lg font-bold text-colhybri-dark">
                        {item.milestone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-colhybri-primary" id="miami-cta">
        <div className="section-container text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Be Part of Miami&apos;s Financial Inclusion Movement
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Whether you&apos;re a local shop owner, community leader, or Miami resident,
            COLHYBRI is building something for you.
          </p>
          <Link
            href={getLocalizedPath('contact', l)}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-colhybri-primary font-bold text-lg hover:bg-white/90 transition-colors"
          >
            {t('common.contactUs')}
          </Link>
        </div>
      </section>

      {/* Internal Links — Cocon Semantique */}
      <section className="bg-white" id="explore">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Explore COLHYBRI</h2>
            <p className="section-subheading mx-auto">
              Discover how COLHYBRI empowers individuals, shops, and communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link
              href={getLocalizedPath('for-shops', l)}
              className="card text-center hover:border-colhybri-primary/30 border-2 border-transparent transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-colhybri-secondary/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-colhybri-primary transition-colors">
                {t('forShops.title')}
              </h3>
              <p className="text-colhybri-dark/60 text-sm">{t('forShops.description')}</p>
            </Link>

            <Link
              href={getLocalizedPath('for-individuals', l)}
              className="card text-center hover:border-colhybri-primary/30 border-2 border-transparent transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-colhybri-primary transition-colors">
                {t('forIndividuals.title')}
              </h3>
              <p className="text-colhybri-dark/60 text-sm">{t('forIndividuals.description')}</p>
            </Link>

            <Link
              href={getLocalizedPath('impact', l)}
              className="card text-center hover:border-colhybri-primary/30 border-2 border-transparent transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-colhybri-primary transition-colors">
                {t('impact.headline')}
              </h3>
              <p className="text-colhybri-dark/60 text-sm">{t('impact.description')}</p>
            </Link>

            <Link
              href={getLocalizedPath('pricing', l)}
              className="card text-center hover:border-colhybri-primary/30 border-2 border-transparent transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-colhybri-secondary/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-colhybri-primary transition-colors">
                {t('pricing.headline')}
              </h3>
              <p className="text-colhybri-dark/60 text-sm">{t('pricing.individuals.price')} / {t('pricing.individuals.period')}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
