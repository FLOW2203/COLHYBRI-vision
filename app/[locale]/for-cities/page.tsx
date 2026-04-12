import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/JsonLd';
import { CityContactForm } from '@/components/forms/CityContactForm';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'forCitiesPage' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'for-cities',
    title: t('meta.title'),
    description: t('meta.description'),
    semanticPrimary: 'downtown vitality dashboard cities revitalization pilot',
    semanticSecondary: 'ZRCV, Action Coeur de Ville, Petites Villes de Demain, Main Street America, manager commerce',
    chunkType: 'landing',
    audience: 'mayors, city officials, municipal leaders, CCI',
  });
}

export default function ForCitiesPage({ params: { locale } }: PageProps) {
  const t = useTranslations('forCitiesPage');
  const l = locale as Locale;

  const landingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('meta.title'),
    description: t('meta.description'),
    audience: {
      '@type': 'Audience',
      audienceType: 'City Officials and Municipal Leaders',
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: 'https://colhybri.vision',
    },
  };

  const contextStats = [
    { value: t('context.stats.0.value'), label: t('context.stats.0.label') },
    { value: t('context.stats.1.value'), label: t('context.stats.1.label') },
    { value: t('context.stats.2.value'), label: t('context.stats.2.label') },
    { value: t('context.stats.3.value'), label: t('context.stats.3.label') },
  ];

  const features = [
    { icon: 'radar', key: 'feature1' },
    { icon: 'chart', key: 'feature2' },
    { icon: 'doc', key: 'feature3' },
    { icon: 'hand', key: 'feature4' },
  ] as const;

  const pilotBullets = [
    t('pilot.bullet1'),
    t('pilot.bullet2'),
    t('pilot.bullet3'),
  ];

  const barcelonaStats = [
    { value: t('barcelona.stats.0.value'), label: t('barcelona.stats.0.label') },
    { value: t('barcelona.stats.1.value'), label: t('barcelona.stats.1.label') },
    { value: t('barcelona.stats.2.value'), label: t('barcelona.stats.2.label') },
  ];

  return (
    <>
      <JsonLd data={landingJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-colhybri-cream">
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

      {/* Context grid: 4 counters */}
      <section className="bg-white">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">{t('context.title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contextStats.map((s, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-colhybri-cream border border-colhybri-teal/10"
              >
                <div className="font-mono font-bold text-3xl sm:text-4xl text-colhybri-teal mb-2">
                  {s.value}
                </div>
                <p className="font-sans text-sm text-colhybri-dark/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="bg-colhybri-cream">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">{t('features.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((f) => (
              <div key={f.key} className="card text-left h-full">
                <div className="w-14 h-14 rounded-2xl bg-colhybri-teal/10 flex items-center justify-center mb-5">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{t(`features.${f.key}.title`)}</h3>
                <p className="font-sans text-sm text-colhybri-dark/70 leading-relaxed">
                  {t(`features.${f.key}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot offer */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <div className="bg-colhybri-teal/5 border-2 border-colhybri-teal rounded-2xl p-8 sm:p-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-colhybri-dark mb-6 text-center">
              {t('pilot.title')}
            </h2>
            <ul className="space-y-4 max-w-2xl mx-auto mb-8">
              {pilotBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-colhybri-dark/80">
                  <svg className="w-6 h-6 text-colhybri-teal flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-lg">{b}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <p className="font-mono text-2xl text-colhybri-dark mb-2">{t('pilot.price')}</p>
              <p className="font-sans text-sm text-colhybri-dark/60 italic">{t('pilot.note')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Barcelona model */}
      <section className="bg-colhybri-cream">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
            <div>
              <p className="text-colhybri-teal font-sans font-semibold text-sm tracking-widest uppercase mb-4">
                {t('barcelona.badge')}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
                {t('barcelona.title')}
              </h2>
              <p className="font-sans text-colhybri-dark/80 leading-relaxed">{t('barcelona.body')}</p>
            </div>
            <div className="grid gap-4">
              {barcelonaStats.map((s, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-colhybri-teal/10 flex items-baseline justify-between gap-4"
                >
                  <span className="font-mono font-bold text-2xl text-colhybri-teal">{s.value}</span>
                  <span className="font-sans text-sm text-colhybri-dark/70 text-right">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-white">
        <div className="section-container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">{t('form.title')}</h2>
            <p className="section-subheading mx-auto">{t('form.subtitle')}</p>
          </div>
          <CityContactForm />
        </div>
      </section>
    </>
  );
}

function FeatureIcon({ name }: { name: 'radar' | 'chart' | 'doc' | 'hand' }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: '#008080', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'radar':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="12" x2="20" y2="4" />
          <circle cx="12" cy="12" r="1.5" fill="#008080" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...common} aria-hidden="true">
          <line x1="3" y1="20" x2="21" y2="20" />
          <rect x="5" y="12" width="3" height="8" />
          <rect x="10" y="8" width="3" height="12" />
          <rect x="15" y="4" width="3" height="16" />
        </svg>
      );
    case 'doc':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="14" y2="17" />
        </svg>
      );
    case 'hand':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M7 11V7a2 2 0 014 0v4" />
          <path d="M11 11V5a2 2 0 014 0v6" />
          <path d="M15 11V8a2 2 0 014 0v5a7 7 0 01-7 7H9a5 5 0 01-5-5v-2l2-2" />
        </svg>
      );
  }
}
