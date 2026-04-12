import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'poolSolidaire' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'solution-pool-solidaire',
    title: t('meta.title'),
    description: t('meta.description'),
    semanticPrimary: 'neighborhood pool digital mutual community support',
    semanticSecondary: 'caffe sospeso, French mutualism, solidarity neighborhood',
    chunkType: 'page',
    audience: 'general, residents, local institutions',
  });
}

export default function PoolSolidairePage({ params: { locale } }: PageProps) {
  const t = useTranslations('poolSolidaire');
  const steps = ['step1', 'step2', 'step3', 'step4'] as const;

  return (
    <>
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

      {/* 4-step infographic */}
      <section className="bg-white">
        <div className="section-container max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((k, i) => (
              <div
                key={k}
                className="relative p-6 rounded-2xl bg-colhybri-cream border border-colhybri-teal/10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-colhybri-teal text-white font-display font-semibold text-xl flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{t(`steps.${k}.title`)}</h3>
                <p className="font-sans text-sm text-colhybri-dark/70">{t(`steps.${k}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not charity */}
      <section className="bg-colhybri-cream">
        <div className="section-container max-w-3xl mx-auto">
          <div className="card border-l-4 border-colhybri-gold bg-colhybri-gold/5">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">{t('notCharity.title')}</h2>
            <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed">
              {t('notCharity.body')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-colhybri-teal text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">{t('cta.title')}</h2>
          <a
            href="https://www.colhybri.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-colhybri-teal font-semibold text-lg hover:bg-colhybri-cream transition-colors"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: t('hero.title'),
          step: steps.map((k, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: t(`steps.${k}.title`),
            text: t(`steps.${k}.body`),
          })),
        }}
      />
    </>
  );
}
