import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const titles = {"fr":"Le tiers-lieu digital : COLHYBRI comme espace de rencontre virtuel","en":"The Digital Third Place: COLHYBRI as a Virtual Meeting Space","es":"El tercer lugar digital: COLHYBRI como espacio de encuentro virtual"};
  const descs = {"fr":"31% des Francais n'ont aucun lieu de rencontre. COLHYBRI cree un tiers-lieu digital accessible pour 3 EUR/mois.","en":"31% of French people have no meeting place. COLHYBRI creates a digital third place for 3 EUR/month.","es":"El 31% de los franceses no tienen ningun lugar de encuentro."};
  return {
    title: titles[locale as keyof typeof titles] || titles.fr,
    description: descs[locale as keyof typeof descs] || descs.fr,
  };
}

export default async function Page({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale: locale as Locale, namespace: 'cocon' });
  return (
    <main className="min-h-screen bg-colhybri-cream">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <nav className="text-sm text-colhybri-dark/60 mb-8 font-sans">
          <Link href={`/${locale}`} className="hover:text-colhybri-teal">Home</Link>
          {' > '}
          <Link href={`/${locale}/impact`} className="hover:text-colhybri-teal">impact</Link>
          {' > '}
          <span className="text-colhybri-dark">{t('tiers-lieu-digital.title')}</span>
        </nav>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-colhybri-dark mb-6 leading-[1.1]">
          {t('tiers-lieu-digital.title')}
        </h1>
        <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed mb-12">
          {t('tiers-lieu-digital.desc')}
        </p>
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-colhybri-teal/10 mb-12">
          <h2 className="font-display text-2xl font-semibold text-colhybri-dark mb-4">Pour aller plus loin</h2>
          <div className="flex flex-wrap gap-4 font-sans">
            <Link href={`/${locale}/impact`} className="px-6 py-3 bg-colhybri-teal text-white rounded-full hover:bg-colhybri-gold transition-all">
              Retour au dossier
            </Link>
            <Link href="/solidarite-proximite" className="px-6 py-3 border-2 border-[#008080]/20 rounded-full hover:bg-[#008080]/5 transition-all">solidarite proximite</Link>
            <Link href="/revitalisation-quartier" className="px-6 py-3 border-2 border-[#008080]/20 rounded-full hover:bg-[#008080]/5 transition-all">revitalisation quartier</Link>
            <Link href={`/${locale}/solidarite-proximite`} className="px-6 py-3 border-2 border-colhybri-gold/30 rounded-full hover:bg-colhybri-gold/10 transition-all">
              solidarite proximite
            </Link>
          </div>
        </section>
        <section className="bg-colhybri-teal rounded-2xl p-12 text-center text-white">
          <h2 className="font-display text-3xl font-semibold mb-8">
            {t('cta.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 font-sans">
            <a href="https://colhybri.com" className="px-8 py-3 bg-white text-colhybri-teal rounded-full font-semibold hover:bg-colhybri-cream transition-all">
              {t('cta.app')}
            </a>
            <Link href={`/${locale}/for-cities`} className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-all">
              {t('cta.demo')}
            </Link>
          </div>
        </section>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Digital Third Place: COLHYBRI as a Virtual Meeting Space",
        "author": { "@type": "Organization", "name": "COLHYBRI" },
        "publisher": { "@type": "Organization", "name": "ONLYMORE Group" }
      }) }} />
    </main>
  );
}
