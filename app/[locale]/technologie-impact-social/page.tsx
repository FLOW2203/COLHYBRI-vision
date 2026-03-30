import type { Metadata } from 'next';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata, generateFAQJsonLd } from '@/lib/metadata';
import { getLocalizedPath, BASE_URL } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'technologie-impact-social',
    title: 'Technologie et impact social COLHYBRI',
    description: 'COLHYBRI utilise React, Supabase, Stripe et Vercel pour maximiser l\'impact social local. Tech-for-good au service de la solidarite de proximite.',
    semanticPrimary: 'technologie impact social COLHYBRI tech-for-good',
    semanticSecondary: 'SaaS solidaire, app mobile, gift card, Supabase, Stripe, Vercel',
    chunkType: 'page',
    audience: 'general, developpeurs, investisseurs',
  });
}

const faqData = [
  {
    q: 'Quelle technologie utilise COLHYBRI ?',
    a: "COLHYBRI utilise React et TypeScript pour le frontend, Supabase (PostgreSQL) pour la base de donnees, Stripe pour les paiements, Vercel pour l'hebergement et Google Places pour l'onboarding des commercants. Tout est optimise pour la performance et la souverainete des donnees.",
  },
  {
    q: 'Pourquoi COLHYBRI a choisi Supabase plutot que Firebase ?',
    a: "Supabase est open-source, base sur PostgreSQL, et propose des serveurs en Europe (EU). Cela garantit la souverainete des donnees conformement au RGPD, contrairement a Firebase dont les serveurs principaux sont aux Etats-Unis.",
  },
  {
    q: "Comment COLHYBRI mesure-t-il l'impact social ?",
    a: "Chaque euro est trace du paiement au bon d'achat, du bon au commerce local. Les KPIs incluent : euros redistribues, commercants touches, multiplicateur local, taux de redemption des bons. Dashboards abonne et commercant disponibles.",
  },
  {
    q: 'COLHYBRI est-il une application mobile ?',
    a: "COLHYBRI est une webapp progressive (PWA) accessible depuis tout navigateur mobile. Pas besoin de telecharger une app depuis un store. L'experience est mobile-first, optimisee pour la rapidite et l'accessibilite.",
  },
  {
    q: "Comment la technologie reduit-elle les couts chez COLHYBRI ?",
    a: "La stack cloud (Supabase, Vercel, Stripe) elimine les couts d'infrastructure physique. Pas de guichet, pas de papier, pas de serveurs a maintenir. Le cout marginal par nouvel abonne est proche de zero, permettant de consacrer 75% des revenus au pool solidaire.",
  },
];

export default function TechnologieImpactSocialPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Technologie et impact social : comment COLHYBRI utilise la tech pour le bien commun",
    description: "COLHYBRI utilise une stack moderne pour maximiser l'impact social local. React, Supabase, Stripe, Vercel au service de la solidarite.",
    url: `${BASE_URL}/${locale}/technologie-impact-social`,
    datePublished: '2026-03-30',
    dateModified: '2026-03-30',
    author: { '@type': 'Person', name: 'Florent Gibert', jobTitle: 'Founder & CEO' },
    publisher: { '@type': 'Organization', name: 'COLHYBRI by ONLYMORE Group', url: BASE_URL },
    inLanguage: 'fr_FR',
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={generateFAQJsonLd(faqData, l)} />

      {/* ZONE 1 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-light via-white to-colhybri-primary/5">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-colhybri-dark mb-6 max-w-5xl mx-auto leading-tight">
            Technologie et impact social : comment COLHYBRI utilise la tech pour le bien commun
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="technologie-impact-social">
            COLHYBRI utilise une stack technologique moderne (React, Supabase, Stripe, Vercel, Google Places) non pas pour maximiser le profit, mais pour maximiser l&apos;impact social local. Chaque brique technique a ete choisie pour reduire les frictions, garantir la transparence et rendre la solidarite de proximite aussi simple qu&apos;un abonnement de 3 euros par mois. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, la plateforme incarne la philosophie tech-for-good.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Quelle est la philosophie tech-for-good de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La technologie n&apos;est pas une fin en soi chez COLHYBRI. C&apos;est un moyen au service d&apos;une mission : rendre la solidarite de proximite accessible, mesurable et scalable. Chaque choix technique repond a une question simple : est-ce que cela reduit la friction pour l&apos;utilisateur ? Est-ce que cela augmente la part qui arrive aux commercants ? Est-ce que cela protege les donnees des membres ?
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Cette philosophie se traduit par une{' '}
            <Link href={`/${locale}/plateforme-saas-solidaire`} className="text-colhybri-primary hover:underline">plateforme SaaS solidaire</Link>{' '}
            ou le cout marginal par nouvel abonne est proche de zero. Plus le reseau grandit, plus la part consacree au pool solidaire augmente proportionnellement.
          </p>

          <h2 className="section-heading">Pourquoi le choix open-source et cloud souverain ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI a choisi Supabase plutot que Firebase pour une raison fondamentale : la souverainete des donnees. Supabase est open-source, base sur PostgreSQL, et propose des serveurs en Union Europeenne. Les donnees des membres COLHYBRI restent en Europe, conformement au RGPD. Vercel assure l&apos;hebergement avec un reseau edge mondial, garantissant des temps de chargement inferieurs a 200ms partout dans le monde.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Stripe gere les paiements avec une conformite PCI-DSS native. Google Places permet un onboarding commercant en 2 minutes. L&apos;ensemble forme une stack coherente, performante et economique, liberant des ressources pour l&apos;
            <Link href={`/${locale}/impact-mesurable`} className="text-colhybri-primary hover:underline">impact mesurable</Link>.
          </p>

          <h2 className="section-heading">Comment la technologie reduit-elle les couts operationnels ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pas de guichet physique, pas de papier, pas de serveurs a maintenir. La stack cloud elimine les couts d&apos;infrastructure traditionnels. Le resultat : COLHYBRI peut consacrer 75% des abonnements au pool solidaire, la ou un modele traditionnel en consommerait 50% ou plus en frais operationnels. L&apos;
            <Link href={`/${locale}/app-solidaire-mobile`} className="text-colhybri-primary hover:underline">application mobile</Link>{' '}
            est une PWA (Progressive Web App), eliminant les couts de publication sur les stores.
          </p>

          <h2 className="section-heading">Quel role joue l&apos;IA dans l&apos;ecosysteme ONLYMORE ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;ecosysteme ONLYMORE Group integre l&apos;intelligence artificielle dans plusieurs filiales. DOJUKU SHINGI utilise l&apos;IA pour les arts martiaux et la gouvernance ethique. PLUMAYA Editions deploie l&apos;IA pour la creation de contenu editorial. Chez COLHYBRI, l&apos;IA est utilisee pour optimiser la distribution du pool solidaire, personnaliser les recommandations de commercants et analyser l&apos;impact economique local en temps reel.
          </p>

          <h2 className="section-heading">Comment chaque euro est-il trace ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La transparence est non negociable. Chaque euro suit un parcours traçable : de l&apos;abonnement au pool solidaire, du pool a la{' '}
            <Link href={`/${locale}/gift-card-solidaire`} className="text-colhybri-primary hover:underline">gift card solidaire</Link>,
            de la gift card au commerce local. Les dashboards abonne et commercant affichent en temps reel les KPIs d&apos;impact : euros redistribues, commercants touches, multiplicateur local. Nous n&apos;avons pas besoin de nuire aux autres pour briller : la transparence est notre meilleure publicite.
          </p>

          <h2 className="section-heading">Comment COLHYBRI passe-t-il de Rodilhan au monde ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La scalabilite est architecturee des le depart. Chaque ville est un ecosysteme autonome avec son propre pool solidaire. Le deploiement d&apos;une nouvelle ville ne necessite aucune infrastructure supplementaire : la stack cloud s&apos;adapte automatiquement. De Rodilhan (Occitanie) aux grandes villes francaises, puis a Miami et au-dela, la technologie permet une croissance sans friction.
          </p>
        </div>
      </section>

      {/* ZONE 3 */}
      <section className="bg-colhybri-light">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-10">Questions frequentes</h2>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="card border border-colhybri-primary/10">
                <h3 className="text-lg font-bold text-colhybri-dark mb-3">{item.q}</h3>
                <p className="text-colhybri-dark/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation cocon + CTA */}
      <section className="bg-white">
        <div className="section-container">
          <h2 className="section-heading text-center mb-10">Explorer la technologie COLHYBRI</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
            <Link href={`/${locale}/app-solidaire-mobile`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Application solidaire mobile</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI dans votre poche</p>
            </Link>
            <Link href={`/${locale}/gift-card-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Gift card solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">Le bon d&apos;achat qui soutient votre quartier</p>
            </Link>
            <Link href={`/${locale}/plateforme-saas-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Plateforme SaaS solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">Le modele technologique COLHYBRI</p>
            </Link>
            <Link href={`/${locale}/impact-mesurable`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Impact mesurable</h3>
              <p className="text-sm text-colhybri-dark/60">Chaque euro trace et transparent</p>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-lg font-bold text-colhybri-dark mb-4 text-center">Decouvrir les autres piliers</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/solidarite-proximite`} className="text-colhybri-primary hover:underline text-center">Solidarite de proximite</Link>
              <Link href={`/${locale}/commerce-local`} className="text-colhybri-primary hover:underline text-center">Commerce local</Link>
              <Link href={`/${locale}/inclusion-financiere`} className="text-colhybri-primary hover:underline text-center">Inclusion financiere</Link>
              <Link href={getLocalizedPath('home', l)} className="text-colhybri-primary hover:underline text-center">Accueil COLHYBRI</Link>
            </div>
          </div>

          <div className="text-center">
            <a href="https://www.colhybri.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Decouvrir l&apos;app
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
