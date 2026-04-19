import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata, generateOrganizationJsonLd } from '@/lib/metadata';
import { getLocalizedPath } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'ecosystem' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'ecosystem',
    title: t('title'),
    description: t('description'),
    semanticPrimary: 'COLHYBRI ecosystem financial inclusion local commerce',
    semanticSecondary: 'individuals, local shops, city governments, community finance, digital third place',
    chunkType: 'page',
    audience: 'general, investors',
  });
}

export default function EcosystemPage({ params: { locale } }: PageProps) {
  const t = useTranslations('ecosystem');
  const common = useTranslations('common');
  const nav = useTranslations('nav');
  const l = locale as Locale;

  const orgJsonLd = generateOrganizationJsonLd(l);

  return (
    <>
      <JsonLd data={orgJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-light via-white to-colhybri-primary/5">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-tight">
            {t('headline')}
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Individuals */}
            <Link href={getLocalizedPath('for-individuals', l)} className="card text-center group hover:border-colhybri-primary/30 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-colhybri-primary transition-colors">
                {t('pillars.individuals.title')}
              </h2>
              <p className="text-colhybri-dark/60">
                {t('pillars.individuals.description')}
              </p>
            </Link>

            {/* Shops */}
            <Link href={getLocalizedPath('for-shops', l)} className="card text-center group hover:border-colhybri-secondary/30 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-secondary/10 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-colhybri-secondary transition-colors">
                {t('pillars.shops.title')}
              </h2>
              <p className="text-colhybri-dark/60">
                {t('pillars.shops.description')}
              </p>
            </Link>

            {/* Cities */}
            <Link href={getLocalizedPath('for-cities', l)} className="card text-center group hover:border-colhybri-primary/30 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <path d="M9 22V10h6v12" />
                  <path d="M8 6h.01M12 6h.01M16 6h.01" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-colhybri-primary transition-colors">
                {t('pillars.cities.title')}
              </h2>
              <p className="text-colhybri-dark/60">
                {t('pillars.cities.description')}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* COLHYBRI Launch */}
      <section className="bg-colhybri-dark text-white">
        <div className="section-container max-w-4xl mx-auto text-center">
          <p className="text-colhybri-primary font-semibold text-sm tracking-wide uppercase mb-4">
            {t('colhybri.title')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">
            {t('colhybri.subtitle')}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            {locale === 'fr'
              ? "COLHYBRI construit l'inclusion financière par le commerce local, une communauté à la fois. Lancé le 26/02/2026."
              : 'COLHYBRI is building financial inclusion through local commerce, one community at a time. Launched 26/02/2026.'}
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-colhybri-light">
        <div className="section-container text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('investors', l)} className="btn-primary">
              {nav('investors')}
            </Link>
            <Link href={getLocalizedPath('mission', l)} className="btn-secondary">
              {nav('mission')}
            </Link>
            <Link href={getLocalizedPath('impact', l)} className="btn-accent">
              {nav('impact')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
