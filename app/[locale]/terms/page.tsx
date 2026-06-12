import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'legal' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'terms',
    title: t('terms.title'),
    description: t('terms.intro'),
    chunkType: 'page',
    audience: 'general',
  });
}

export default function TermsPage() {
  const t = useTranslations('legal');
  const sections = t.raw('terms.sections') as Array<{ h: string; p: string }>;

  return (
    <section className="bg-white">
      <div className="section-container max-w-3xl mx-auto">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-colhybri-dark mb-3 leading-tight break-words">
          {t('terms.title')}
        </h1>
        <p className="text-sm text-colhybri-dark/50 mb-8">{t('terms.updated')}</p>
        <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed mb-10 break-words">
          {t('terms.intro')}
        </p>
        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 break-words">{s.h}</h2>
              <p className="font-sans text-colhybri-dark/75 leading-relaxed break-words">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
