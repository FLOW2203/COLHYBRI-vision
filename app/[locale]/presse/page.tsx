import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'pressePage' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'presse',
    title: t('meta.title'),
    description: t('meta.description'),
    semanticPrimary: 'COLHYBRI press kit media resources',
    semanticSecondary: 'founder bio, logos, key figures, media contact',
    chunkType: 'page',
    audience: 'journalists, media, press',
  });
}

export default function PressePage({ params: { locale } }: PageProps) {
  const t = useTranslations('pressePage');
  const figures = ['0', '1', '2', '3', '4'] as const;

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
          <p className="font-sans text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-container max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">{t('logo.title')}</h2>
            <p className="font-sans text-colhybri-dark/70 mb-4">{t('logo.body')}</p>
            <a
              href="/logo.svg"
              download
              className="btn-secondary inline-flex"
            >
              {t('logo.download')}
            </a>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">{t('figures.title')}</h2>
            <ul className="space-y-3">
              {figures.map((i) => (
                <li key={i} className="font-sans text-colhybri-dark/80 flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-colhybri-teal flex-shrink-0" />
                  <span>{t(`figures.items.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-colhybri-cream">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-4">{t('founder.title')}</h2>
          <p className="font-sans text-colhybri-dark/80 leading-relaxed">{t('founder.bio')}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold mb-4">{t('releases.title')}</h2>
          <p className="font-sans text-colhybri-dark/70 mb-6">{t('releases.body')}</p>
          <h3 className="font-display text-xl font-semibold mb-2">{t('contact.title')}</h3>
          <a
            href="mailto:onlymore2024@gmail.com?subject=Demande%20presse%20COLHYBRI"
            className="font-mono text-lg text-colhybri-teal hover:underline"
          >
            onlymore2024@gmail.com
          </a>
        </div>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: t('meta.title'),
          description: t('meta.description'),
        }}
      />
    </>
  );
}
