import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const titles = {"fr":"COLHYBRI pour les collectivites : dashboard vitalite","en":"COLHYBRI for Cities: Vitality Dashboard","es":"COLHYBRI para colectividades: dashboard vitalidad"};
  const descs = {"fr":"Déploiement clé en main sur 50 commerces. Score Maps, dashboard, rapport d'impact. Financé par les habitants à 3€/mois.","en":"Turnkey rollout for 50 businesses. Score Maps, dashboard, impact report.","es":"Despliegue llave en mano. Score Maps, dashboard, informe de impacto."};
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
          <Link href={`/${locale}/solution`} className="hover:text-colhybri-teal">solution</Link>
          {' > '}
          <span className="text-colhybri-dark">{t('pour-les-collectivites.title')}</span>
        </nav>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-colhybri-dark mb-6 leading-[1.1]">
          {t('pour-les-collectivites.title')}
        </h1>
        <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed mb-12">
          {t('pour-les-collectivites.desc')}
        </p>
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-colhybri-teal/10 mb-12">
          <h2 className="font-display text-2xl font-semibold text-colhybri-dark mb-4">Pour aller plus loin</h2>
          <div className="flex flex-wrap gap-4 font-sans">
            <Link href={`/${locale}/solution`} className="px-6 py-3 bg-colhybri-teal text-white rounded-full hover:bg-colhybri-gold transition-all">
              Retour au dossier
            </Link>
            <Link href="/tarifs-colhybri" className="px-6 py-3 border-2 border-[#008080]/20 rounded-full hover:bg-[#008080]/5 transition-all">tarifs colhybri</Link>
            <Link href="/score-maps-audit" className="px-6 py-3 border-2 border-[#008080]/20 rounded-full hover:bg-[#008080]/5 transition-all">score maps audit</Link>
            <Link href={`/${locale}/action-coeur-de-ville`} className="px-6 py-3 border-2 border-colhybri-gold/30 rounded-full hover:bg-colhybri-gold/10 transition-all">
              action coeur de ville
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
        "headline": "COLHYBRI for Cities: Vitality Dashboard",
        "author": { "@type": "Organization", "name": "COLHYBRI" },
        "publisher": { "@type": "Organization", "name": "ONLYMORE Group" }
      }) }} />
    </main>
  );
}
