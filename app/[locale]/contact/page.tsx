import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/JsonLd';
import { GeneralContactForm } from '@/components/forms/GeneralContactForm';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'contact' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'contact',
    title: t('title'),
    description: t('description'),
    semanticPrimary: 'COLHYBRI contact downtown revitalization',
    semanticSecondary: 'partnership, press, investment, cities',
    chunkType: 'page',
    audience: 'general, shops, cities, investors',
  });
}

export default function ContactPage({ params: { locale } }: PageProps) {
  const t = useTranslations('contact');

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: t('title'),
    description: t('description'),
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: 'https://colhybri.vision',
    },
  };

  return (
    <>
      <JsonLd data={contactJsonLd} />

      {/* Hero */}
      <section className="bg-colhybri-cream">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-[1.08]">
            {t('headline')}
          </h1>
          <p className="font-sans text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-5 gap-10 max-w-6xl mx-auto">
            <div className="md:col-span-3">
              <GeneralContactForm />
            </div>
            <aside className="md:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl bg-colhybri-cream border border-colhybri-teal/10">
                <p className="font-sans text-sm text-colhybri-dark/60 uppercase tracking-wide mb-1">Email</p>
                <a
                  href="mailto:onlymore2024@gmail.com"
                  className="font-mono text-lg text-colhybri-teal hover:underline"
                >
                  onlymore2024@gmail.com
                </a>
              </div>
              <div className="p-6 rounded-2xl bg-colhybri-cream border border-colhybri-teal/10">
                <p className="font-sans text-sm text-colhybri-dark/60 uppercase tracking-wide mb-1">{t('headquarters')}</p>
                <p className="font-sans text-colhybri-dark">Rodilhan (30230)</p>
                <p className="font-sans text-colhybri-dark">Occitanie, France</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
