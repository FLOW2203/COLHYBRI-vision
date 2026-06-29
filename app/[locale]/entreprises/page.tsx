import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { getLocalizedPath } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';
import { CoconFaq } from '@/components/cocon/CoconFaq';

interface PageProps {
  params: { locale: string };
}

// FR-only SEO/GEO solution page. Other locales 404 (no EN twin authored).
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'fr' }];
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  if (locale !== 'fr') return {};
  const t = await getTranslations({ locale: 'fr', namespace: 'entreprisesPage' });
  const base = generatePageMetadata({
    locale: 'fr',
    routeKey: 'entreprises',
    title: t('meta.title'),
    description: t('meta.description'),
    semanticPrimary: 'outil ESRS S3 impact territorial communautés affectées CSRD',
    semanticSecondary: 'DR S3-4, DR S3-5, reporting CSRD, RSE, impact social mesurable, double matérialité',
    chunkType: 'landing',
    audience: 'entreprises, directions RSE, directions développement durable, CSRD',
  });
  // FR-only page: self-referential hreflang (fr + x-default), no broken EN alternate.
  const url = 'https://www.colhybri.vision/fr/entreprises';
  return {
    ...base,
    alternates: {
      canonical: url,
      languages: { fr: url, 'x-default': url },
    },
  };
}

export default async function EntreprisesPage({ params: { locale } }: PageProps) {
  if (locale !== 'fr') notFound();
  const t = await getTranslations({ locale: 'fr', namespace: 'entreprisesPage' });

  const safeArray = <T,>(key: string): T[] => {
    try {
      const v = t.raw(key);
      return Array.isArray(v) ? (v as T[]) : [];
    } catch {
      return [];
    }
  };

  const stats = safeArray<{ value: string; label: string }>('stats');
  const sections = safeArray<{ h2: string; body: string }>('sections');
  const faq = safeArray<{ q: string; a: string }>('faq');
  const tableHeader = safeArray<string>('tableHeader');
  const tableRows = safeArray<[string, string]>('tableRows');

  const contactHref = getLocalizedPath('contact', 'fr');

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'COLHYBRI',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'ESG, CSRD, ESRS S3',
    operatingSystem: 'Web, iOS, Android',
    url: 'https://colhybri.vision/fr/entreprises',
    description: t('meta.description'),
    inLanguage: 'fr',
    publisher: {
      '@type': 'Organization',
      name: 'COLHYBRI',
      url: 'https://colhybri.vision',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Abonnement particulier',
        price: '3',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        name: 'Abonnement commerçant',
        price: '10',
        priceCurrency: 'EUR',
      },
    ],
  };

  const faqSchema = faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={softwareSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-colhybri-dark/60 font-sans">
          <li>
            <Link href="/fr" className="hover:text-colhybri-teal">
              {t('home')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-colhybri-dark/80 font-medium">{t('breadcrumb')}</li>
        </ol>
      </nav>

      {/* Hero + cite-friendly definition (GEO marker) */}
      <section className="bg-colhybri-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <p className="text-colhybri-teal font-sans font-semibold text-sm tracking-widest uppercase mb-4">
            {t('cluster')}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-colhybri-dark mb-6 leading-[1.1]">
            {t('h1')}
          </h1>
          <div data-type="definition" data-concept="Outil ESRS S3" lang="fr">
            <p className="font-sans text-lg sm:text-xl text-colhybri-dark/80 leading-relaxed max-w-3xl">
              {t('intro')}
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-colhybri-teal text-white font-semibold text-lg hover:bg-colhybri-teal/90 transition-colors"
            >
              {t('cta.primary')}
            </Link>
            <Link
              href="/fr/esrs-s3"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-colhybri-teal text-colhybri-teal font-semibold text-lg hover:bg-colhybri-teal/5 transition-colors"
            >
              {t('cta.secondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats (confirmed product facts only) */}
      {stats.length > 0 && (
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="text-center p-5 rounded-2xl bg-colhybri-cream border border-colhybri-teal/10"
                >
                  <div className="font-mono font-bold text-2xl sm:text-3xl text-colhybri-teal mb-1 leading-none">
                    {s.value}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-colhybri-dark/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article body */}
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="font-sans text-colhybri-dark/80 leading-relaxed space-y-10">
            {sections.map((section, i) => (
              <section key={i}>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-colhybri-dark mb-4">
                  {section.h2}
                </h2>
                <p className="text-lg leading-relaxed">{section.body}</p>
              </section>
            ))}

            {tableHeader.length === 2 && tableRows.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-semibold text-colhybri-dark mb-4">
                  {t('tableTitle')}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-colhybri-teal/20">
                        <th className="text-left py-3 px-4 font-sans font-semibold text-colhybri-dark">
                          {tableHeader[0]}
                        </th>
                        <th className="text-left py-3 px-4 font-sans font-semibold text-colhybri-dark">
                          {tableHeader[1]}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableRows.map((row, i) => (
                        <tr key={i} className="border-b border-colhybri-dark/10">
                          <td className="py-3 px-4 font-sans text-colhybri-teal font-semibold">
                            {row[0]}
                          </td>
                          <td className="py-3 px-4 font-sans text-colhybri-dark/80">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </div>
        </div>
      </article>

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="bg-colhybri-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="font-display text-3xl font-semibold text-colhybri-dark mb-8 text-center">
              {t('faqTitle')}
            </h2>
            <CoconFaq items={faq} />
          </div>
        </section>
      )}

      {/* Internal linking */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-display text-2xl font-semibold text-colhybri-dark mb-4">
            {t('links.title')}
          </h2>
          <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed mb-6">
            {t('links.lead')}
            <Link
              href="/fr/esrs-s3"
              className="text-colhybri-teal font-semibold underline underline-offset-2 hover:text-colhybri-teal/80"
            >
              {t('links.leadAnchor')}
            </Link>
            {t('links.leadAfter')}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/fr/esrs-s3"
              className="p-5 rounded-2xl border-2 border-colhybri-teal bg-colhybri-teal/5 hover:bg-colhybri-teal/10 transition-colors"
            >
              <div className="font-mono text-xs text-colhybri-teal uppercase tracking-wider mb-2">
                {t('links.badgePillar')}
              </div>
              <div className="font-display font-semibold text-colhybri-dark">
                {t('links.pillarTitle')}
              </div>
              <p className="font-sans text-sm text-colhybri-dark/70 mt-1">{t('links.pillarDesc')}</p>
            </Link>
            <Link
              href={contactHref}
              className="p-5 rounded-2xl border border-colhybri-gold/30 bg-colhybri-gold/5 hover:bg-colhybri-gold/10 transition-colors"
            >
              <div className="font-mono text-xs text-colhybri-gold uppercase tracking-wider mb-2">
                {t('links.badgeConversion')}
              </div>
              <div className="font-display font-semibold text-colhybri-dark">
                {t('links.conversionTitle')}
              </div>
              <p className="font-sans text-sm text-colhybri-dark/70 mt-1">
                {t('links.conversionDesc')}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-colhybri-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">{t('cta.title')}</h2>
          <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto mb-8">{t('cta.body')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-colhybri-teal font-semibold text-lg hover:bg-colhybri-cream transition-colors"
            >
              {t('cta.primary')}
            </Link>
            <Link
              href="/fr/esrs-s3"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              {t('cta.secondary')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
