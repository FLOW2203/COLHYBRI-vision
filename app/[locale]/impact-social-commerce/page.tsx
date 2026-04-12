import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const titles = {"fr":"L'impact social du commerce de proximite : chiffres 2026","en":"Social Impact of Local Commerce: 2026 Facts and Figures","es":"El impacto social del comercio de proximidad: cifras 2026"};
  const descs = {"fr":"Le commerce de proximite genere 13.2% du PIB a Barcelona, 152 000 emplois, et 90.9% de locaux actifs.","en":"Local commerce generates 13.2% of GDP in Barcelona, 152,000 jobs, and 90.9% active premises.","es":"El comercio de proximidad genera el 13.2% del PIB en Barcelona."};
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
          <span className="text-colhybri-dark">{t('impact-social-commerce.title')}</span>
        </nav>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-colhybri-dark mb-6 leading-[1.1]">
          {t('impact-social-commerce.title')}
        </h1>
        <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed mb-12">
          {t('impact-social-commerce.desc')}
        </p>
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-colhybri-teal/10 mb-12">
          <h2 className="font-display text-2xl font-semibold text-colhybri-dark mb-4">Pour aller plus loin</h2>
          <div className="flex flex-wrap gap-4 font-sans">
            <Link href={`/${locale}/impact`} className="px-6 py-3 bg-colhybri-teal text-white rounded-full hover:bg-colhybri-gold transition-all">
              Retour au dossier
            </Link>
            <Link href="/commerce-informel" className="px-6 py-3 border-2 border-[#008080]/20 rounded-full hover:bg-[#008080]/5 transition-all">commerce informel</Link>
            <Link href="/keynesian-multiplier-local" className="px-6 py-3 border-2 border-[#008080]/20 rounded-full hover:bg-[#008080]/5 transition-all">keynesian multiplier local</Link>
            <Link href={`/${locale}/ecosr-european-capital-small-retail`} className="px-6 py-3 border-2 border-colhybri-gold/30 rounded-full hover:bg-colhybri-gold/10 transition-all">
              ecosr european capital small retail
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
        "headline": "Social Impact of Local Commerce: 2026 Facts and Figures",
        "author": { "@type": "Organization", "name": "COLHYBRI" },
        "publisher": { "@type": "Organization", "name": "ONLYMORE Group" }
      }) }} />
    </main>
  );
}
