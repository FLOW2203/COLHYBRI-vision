import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n';
import { generatePageMetadata, generateFAQJsonLd } from '@/lib/metadata';
import { JsonLd } from '@/components/JsonLd';
import { Accordion } from '@/components/Accordion';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'faq' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'faq',
    title: t('title'),
    description: 'Frequently asked questions about COLHYBRI, the platform that revitalizes downtowns through neighborhood community support.',
    semanticPrimary: 'COLHYBRI FAQ downtown revitalization neighborhood mutual',
    semanticSecondary: 'questions, pricing, how it works, pool solidaire, Maps+',
    chunkType: 'page',
    audience: 'general',
  });
}

export default function FAQPage({ params: { locale } }: PageProps) {
  const t = useTranslations('faq');
  const l = locale as Locale;

  const questions = t.raw('questions') as Array<{ q: string; a: string }>;
  const faqJsonLd = generateFAQJsonLd(questions, l);

  return (
    <>
      <JsonLd data={faqJsonLd} />

      <section className="bg-colhybri-cream">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-[1.08]">
            {t('title')}
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <Accordion items={questions} />
        </div>
      </section>
    </>
  );
}
