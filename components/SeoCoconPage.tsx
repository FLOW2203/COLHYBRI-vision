import type { Locale } from '@/i18n';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { CoconFaq } from './cocon/CoconFaq';

export interface CoconPageShape {
  title: string;
  h1: string;
  snippet: string;
  intro?: string;
  sections: Array<{ h2: string; body: string }>;
  faq: Array<{ q: string; a: string }>;
  stats: Array<{ value: string; label: string }>;
  tableTitle?: string;
  tableHeader?: [string, string];
  tableRows?: Array<[string, string]>;
}

interface SeoCoconPageProps {
  slug: string;
  locale: Locale;
  cluster: string;
  pillarHref: string;
  pillarLabel: string;
  relatedLinks: Array<{ href: string; slug: string }>;
  crossLink: { href: string; slug: string };
}

/**
 * Server component template used by every SEO cocon page.
 * All copy is pulled from the `cocon.<slug>` i18n namespace,
 * so one render path serves FR/EN/ES via next-intl.
 */
export async function SeoCoconPage({
  slug,
  locale,
  cluster,
  pillarHref,
  pillarLabel,
  relatedLinks,
  crossLink,
}: SeoCoconPageProps) {
  const t = await getTranslations({ locale, namespace: `cocon.${slug}` });
  const tCommon = await getTranslations({ locale, namespace: 'cocon.common' });
  const tMeta = await getTranslations({ locale, namespace: 'cocon.meta' });

  // Read raw for list-shaped entries. Wrap with try/catch to tolerate
  // optional fields (not every page ships a data table).
  const safeRaw = <T,>(key: string, fallback: T): T => {
    try {
      const v = t.raw(key);
      return (v ?? fallback) as T;
    } catch {
      return fallback;
    }
  };

  const sections = safeRaw<CoconPageShape['sections']>('sections', []);
  const faq = safeRaw<CoconPageShape['faq']>('faq', []);
  const stats = safeRaw<CoconPageShape['stats']>('stats', []);
  const tableRows = safeRaw<Array<[string, string]>>('tableRows', []);
  const tableHeader = safeRaw<[string, string] | null>('tableHeader', null);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('h1'),
    description: t('snippet'),
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: 'https://colhybri.vision',
    },
    publisher: {
      '@type': 'Organization',
      name: 'COLHYBRI',
      url: 'https://colhybri.vision',
    },
    articleSection: cluster,
  };

  const faqSchema = faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-colhybri-dark/60 font-sans">
          <li>
            <Link href={`/${locale}`} className="hover:text-colhybri-teal">
              {tCommon('home')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={pillarHref} className="hover:text-colhybri-teal">
              {cluster}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-colhybri-dark/80 font-medium">{t('title')}</li>
        </ol>
      </nav>

      {/* Hero snippet - 40/60 words cite-friendly */}
      <section className="bg-colhybri-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-colhybri-dark mb-6 leading-[1.1]">
            {t('h1')}
          </h1>
          <p className="font-sans text-lg sm:text-xl text-colhybri-dark/80 leading-relaxed max-w-3xl">
            {t('snippet')}
          </p>
        </div>
      </section>

      {/* Stats grid */}
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

      {/* Main article body */}
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

            {tableHeader && tableRows.length > 0 && (
              <section>
                {t.has('tableTitle') && (
                  <h2 className="font-display text-2xl font-semibold text-colhybri-dark mb-4">
                    {t('tableTitle')}
                  </h2>
                )}
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
                          <td className="py-3 px-4 font-mono text-colhybri-teal font-semibold">
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
              {tCommon('faqTitle')}
            </h2>
            <CoconFaq items={faq} />
          </div>
        </section>
      )}

      {/* Internal linking cluster */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-display text-2xl font-semibold text-colhybri-dark mb-6">
            {tCommon('relatedTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href={pillarHref}
              className="p-5 rounded-2xl border-2 border-colhybri-teal bg-colhybri-teal/5 hover:bg-colhybri-teal/10 transition-colors"
            >
              <div className="font-mono text-xs text-colhybri-teal uppercase tracking-wider mb-2">
                {tCommon('pillarBadge')}
              </div>
              <div className="font-display font-semibold text-colhybri-dark">{pillarLabel}</div>
            </Link>
            {relatedLinks.map((link) => (
              <Link
                key={link.slug}
                href={link.href}
                className="p-5 rounded-2xl border border-colhybri-dark/10 bg-white hover:border-colhybri-teal hover:bg-colhybri-cream transition-colors"
              >
                <div className="font-mono text-xs text-colhybri-dark/50 uppercase tracking-wider mb-2">
                  {tCommon('relatedBadge')}
                </div>
                <div className="font-display font-semibold text-colhybri-dark">
                  {tMeta(`${link.slug}.title`)}
                </div>
              </Link>
            ))}
            <Link
              href={crossLink.href}
              className="p-5 rounded-2xl border border-colhybri-gold/30 bg-colhybri-gold/5 hover:bg-colhybri-gold/10 transition-colors sm:col-span-2"
            >
              <div className="font-mono text-xs text-colhybri-gold uppercase tracking-wider mb-2">
                {tCommon('crossBadge')}
              </div>
              <div className="font-display font-semibold text-colhybri-dark">
                {tMeta(`${crossLink.slug}.title`)}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-colhybri-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-8">
            {tCommon('ctaTitle')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.colhybri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-colhybri-teal font-semibold text-lg hover:bg-colhybri-cream transition-colors"
            >
              {tCommon('ctaApp')}
            </a>
            <Link
              href={`/${locale}/for-cities`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              {tCommon('ctaDemo')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
