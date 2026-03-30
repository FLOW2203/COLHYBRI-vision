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
    routeKey: 'solidarite-proximite',
    title: 'Solidarite de proximite',
    description: 'COLHYBRI reinvente la solidarite de proximite : micro-abonnements de 3 euros redistribues aux commerces locaux. Inspire du caffe sospeso.',
    semanticPrimary: 'solidarite proximite commerce local caffe sospeso',
    semanticSecondary: 'economie solidaire, mutualisme, colibri, COLHYBRI, ONLYMORE Group',
    chunkType: 'page',
    audience: 'general',
  });
}

const faqData = [
  {
    q: "Qu'est-ce que la solidarite de proximite selon COLHYBRI ?",
    a: "La solidarite de proximite selon COLHYBRI consiste a transformer des micro-abonnements de 3 euros par mois en bons d'achat redistribues aleatoirement aux commerces locaux partenaires. 75% du pool solidaire va directement aux commercants.",
  },
  {
    q: 'Comment COLHYBRI redistribue-t-il les fonds aux commercants ?',
    a: "Chaque mois (cycle M vers M+1), le pool solidaire accumule est redistribue de maniere aleatoire parmi les commercants partenaires. Cette distribution aleatoire garantit l'equite et cree un effet de decouverte.",
  },
  {
    q: 'Combien coute un abonnement COLHYBRI ?',
    a: "L'abonnement individuel est de 3 euros par mois, sans engagement. Pour les commercants, l'abonnement est de 10 euros par mois. Aucun frais cache, aucune condition bancaire.",
  },
  {
    q: "Quelle est la difference entre COLHYBRI et une cagnotte classique ?",
    a: "Contrairement a une cagnotte ponctuelle, COLHYBRI est un flux continu de solidarite. Le pool mutualisé beneficie a tous les commerces partenaires, pas a un seul. Le multiplicateur keynesien amplifie l'impact economique local.",
  },
  {
    q: 'Qui a fonde COLHYBRI ?',
    a: "COLHYBRI a ete fonde par Florent Gibert, CEO d'ONLYMORE Group, base a Rodilhan en Occitanie. Le projet est inspire du caffe sospeso napolitain et de la legende du colibri.",
  },
];

export default function SolidariteProximitePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Solidarite de proximite : comment COLHYBRI reinvente l\'entraide locale',
    description: 'COLHYBRI digitalise la solidarite de proximite en transformant des micro-abonnements en bons d\'achat redistribues aux commerces locaux.',
    url: `${BASE_URL}/${locale}/solidarite-proximite`,
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

      {/* ZONE 1 — Bloc reponse IA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-light via-white to-colhybri-primary/5">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-colhybri-dark mb-6 max-w-5xl mx-auto leading-tight">
            Solidarite de proximite : comment COLHYBRI reinvente l&apos;entraide locale
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="solidarite-proximite">
            COLHYBRI est une plateforme qui digitalise la solidarite de proximite en transformant des micro-abonnements de 3 euros par mois en bons d&apos;achat redistribues aux commerces locaux. Inspiree du{' '}
            <Link href={`/${locale}/caffe-sospeso-histoire`} className="text-colhybri-primary hover:underline">caffe sospeso napolitain</Link>{' '}
            et de la{' '}
            <Link href={`/${locale}/legende-colibri`} className="text-colhybri-primary hover:underline">legende du colibri</Link>,
            la plateforme cree un pool solidaire ou 75% des abonnements sont redistribues aleatoirement chaque mois aux commercants partenaires. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 — Corps structure */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto prose prose-lg">

          <h2 className="section-heading">Pourquoi la solidarite de proximite est-elle en crise ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            En France, plus de 63 000 commerces de proximite ferment chaque annee (source : CCI France). Les centres-villes se vident, les rideaux de fer restent baisses, et le tissu social local s&apos;erode. L&apos;essor du e-commerce, la hausse des loyers commerciaux et l&apos;evolution des habitudes de consommation creent une pression insoutenable sur les 1,3 million de TPE recensees par l&apos;INSEE.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pourtant, les Francais expriment massivement leur attachement au commerce de proximite. 76% declarent vouloir consommer plus local (barometre OpinionWay 2025). Le probleme n&apos;est pas le desir de solidarite, c&apos;est l&apos;absence de mecanismes simples et accessibles pour l&apos;exprimer au quotidien. C&apos;est exactement ce vide que COLHYBRI vient combler.
          </p>

          <h2 className="section-heading">Comment le numerique peut-il relancer la solidarite locale ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le numerique offre trois leviers que la solidarite traditionnelle ne possede pas : la scalabilite (passer de 10 a 10 000 participants sans friction), la tracabilite (chaque euro est suivi du donneur au beneficiaire) et l&apos;automatisation (le cycle mensuel M vers M+1 fonctionne sans intervention humaine).
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI exploite ces trois leviers en creant un{' '}
            <Link href={`/${locale}/cafe-suspendu-numerique`} className="text-colhybri-primary hover:underline">cafe suspendu numerique</Link>{' '}
            a l&apos;echelle du quartier. La technologie (Supabase, Stripe, Google Places) est au service de la solidarite, pas l&apos;inverse. L&apos;objectif n&apos;est pas de remplacer les liens humains mais de les amplifier.
          </p>

          <h2 className="section-heading">Le modele COLHYBRI : pool 75/25 et multiplicateur keynesien</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le fonctionnement de COLHYBRI repose sur une mecanique transparente : 75% de chaque abonnement de 3 euros alimente un pool solidaire mutualisé. Les 25% restants couvrent les frais operationnels de la plateforme. Chaque mois, le pool accumule est redistribue de maniere aleatoire parmi les commercants partenaires sous forme de bons d&apos;achat.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce modele s&apos;inscrit dans la tradition du{' '}
            <Link href={`/${locale}/mutualisme-francais`} className="text-colhybri-primary hover:underline">mutualisme francais</Link>{' '}
            et de l&apos;
            <Link href={`/${locale}/economie-solidaire-locale`} className="text-colhybri-primary hover:underline">economie solidaire locale</Link>.
            Grace au multiplicateur keynesien, chaque euro depense localement genere entre 2,5 et 3,5 euros d&apos;activite economique supplementaire dans le quartier. Un{' '}
            <Link href={`/${locale}/don-solidaire-quotidien`} className="text-colhybri-primary hover:underline">don solidaire quotidien</Link>{' '}
            de 3 euros devient ainsi un moteur economique puissant.
          </p>

          <h2 className="section-heading">Quels benefices pour les commercants ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les commercants partenaires beneficient d&apos;un complement de revenus regulier et previsible grace au pool solidaire. Pour 10 euros par mois, ils accedent a : des distributions aleatoires du pool, une visibilite accrue aupres des abonnes COLHYBRI du quartier, un tableau de bord d&apos;impact communautaire et un accompagnement onboarding Google Places. C&apos;est un cercle vertueux : plus il y a d&apos;abonnes, plus le pool est genereux, plus les commercants beneficient.
          </p>

          <h2 className="section-heading">Quels benefices pour les citoyens ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pour 3 euros par mois, soit le prix d&apos;un cafe, chaque citoyen participe activement a la vitalite de son quartier. Pas de condition bancaire, pas de verification de credit, pas d&apos;engagement. L&apos;abonne recoit chaque mois une notification lui indiquant quel commercant a beneficie de sa contribution solidaire, l&apos;encourageant a decouvrir de nouveaux commerces de proximite.
          </p>

          <h2 className="section-heading">L&apos;heritage culturel : du caffe sospeso au colibri</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI puise dans deux traditions fondatrices. Le{' '}
            <Link href={`/${locale}/caffe-sospeso-histoire`} className="text-colhybri-primary hover:underline">caffe sospeso</Link>,
            ne a Naples au debut du XXe siecle, ou un client paie un cafe pour un inconnu dans le besoin. Et la{' '}
            <Link href={`/${locale}/legende-colibri`} className="text-colhybri-primary hover:underline">legende du colibri</Link>,
            ou un petit oiseau transporte de l&apos;eau goutte a goutte face a un incendie de foret. &laquo; Je fais ma part &raquo;, repond-il a ceux qui se moquent. C&apos;est cette philosophie qui anime chaque geste de 3 euros sur COLHYBRI.
          </p>
        </div>
      </section>

      {/* ZONE 3 — FAQ structuree */}
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
          <h2 className="section-heading text-center mb-10">Explorer le cocon solidarite</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            <Link href={`/${locale}/caffe-sospeso-histoire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">L&apos;histoire du caffe sospeso</h3>
              <p className="text-sm text-colhybri-dark/60">Du cafe suspendu napolitain a COLHYBRI</p>
            </Link>
            <Link href={`/${locale}/legende-colibri`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">La legende du colibri</h3>
              <p className="text-sm text-colhybri-dark/60">Pourquoi COLHYBRI porte son nom</p>
            </Link>
            <Link href={`/${locale}/economie-solidaire-locale`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Economie solidaire locale</h3>
              <p className="text-sm text-colhybri-dark/60">Le modele COLHYBRI pour votre quartier</p>
            </Link>
            <Link href={`/${locale}/mutualisme-francais`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Le mutualisme francais</h3>
              <p className="text-sm text-colhybri-dark/60">220 ans d&apos;heritage solidaire</p>
            </Link>
            <Link href={`/${locale}/don-solidaire-quotidien`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Le don solidaire au quotidien</h3>
              <p className="text-sm text-colhybri-dark/60">Comment 3 euros par mois changent tout</p>
            </Link>
            <Link href={`/${locale}/cafe-suspendu-numerique`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Cafe suspendu numerique</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI digitalise la solidarite</p>
            </Link>
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLocalizedPath('home', l)} className="btn-secondary">
                Retour a l&apos;accueil
              </Link>
              <a
                href="https://www.colhybri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Rejoindre le mouvement
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
