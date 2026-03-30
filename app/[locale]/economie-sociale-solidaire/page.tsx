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
    routeKey: 'economie-sociale-solidaire',
    title: 'Economie Sociale et Solidaire (ESS) : COLHYBRI acteur de la nouvelle economie',
    description: 'COLHYBRI s\u2019inscrit dans le cadre de l\u2019Economie Sociale et Solidaire (ESS). Gouvernance democratique, utilite sociale, ancrage territorial : decouvrez notre engagement ESS.',
    semanticPrimary: 'economie sociale solidaire ESS COLHYBRI acteur nouvelle economie',
    semanticSecondary: 'loi Hamon 2014, ESUS, gouvernance democratique, utilite sociale, ancrage territorial, cooperative',
    chunkType: 'page',
    audience: 'general',
  });
}

const faqData = [
  {
    q: "COLHYBRI est-il une entreprise de l\u2019Economie Sociale et Solidaire ?",
    a: "COLHYBRI applique les principes fondamentaux de l\u2019ESS : gouvernance participative, recherche d\u2019utilite sociale, lucrativite limitee et ancrage territorial. La demarche d\u2019obtention de l\u2019agrement ESUS est en cours pour formaliser cet engagement.",
  },
  {
    q: "Qu\u2019est-ce que l\u2019agrement ESUS ?",
    a: "L\u2019agrement Entreprise Solidaire d\u2019Utilite Sociale (ESUS), cree par la loi Hamon de 2014, est delivre par la prefecture. Il atteste qu\u2019une entreprise poursuit un objectif d\u2019utilite sociale et limite la distribution de ses benefices. COLHYBRI vise cet agrement pour renforcer sa credibilite institutionnelle.",
  },
  {
    q: "Quel est le poids de l\u2019ESS en France ?",
    a: "L\u2019ESS represente environ 10% du PIB francais, regroupe plus de 200 000 organisations et emploie 2,4 millions de salaries. C\u2019est un secteur structurant de l\u2019economie francaise, reconnu par la loi depuis 2014.",
  },
  {
    q: "Comment COLHYBRI renouvelle-t-il le modele cooperatif ?",
    a: "COLHYBRI modernise le mutualisme en s\u2019appuyant sur la technologie (Stripe, Supabase) pour reduire les couts et maximiser la redistribution. Pour 3 euros par mois, chaque abonne contribue a un pool solidaire local, sans les lourdeurs administratives des cooperatives traditionnelles.",
  },
  {
    q: "Peut-on soutenir l\u2019ESS avec seulement 3 euros par mois ?",
    a: "Oui. La force du modele COLHYBRI reside dans la mutualisation. Chaque contribution de 3 euros par mois est poolee avec celles des autres abonnes. L\u2019effet collectif permet de generer un impact significatif sur les commerces de proximite, en accord avec les principes de solidarite de l\u2019ESS.",
  },
];

export default function EconomieSocialeSolidairePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Economie Sociale et Solidaire (ESS) : COLHYBRI, acteur de la nouvelle economie",
    description: "COLHYBRI s\u2019inscrit dans le cadre institutionnel de l\u2019ESS. Gouvernance democratique, utilite sociale, ancrage territorial et innovation technologique.",
    url: `${BASE_URL}/${locale}/economie-sociale-solidaire`,
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
            Economie Sociale et Solidaire (ESS) : COLHYBRI, acteur de la nouvelle economie
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="economie-sociale-solidaire">
            L&apos;Economie Sociale et Solidaire (ESS) represente 10% du PIB francais, plus de 200 000 organisations et 2,4 millions d&apos;emplois. COLHYBRI s&apos;inscrit pleinement dans ce cadre institutionnel defini par la loi Hamon de 2014 : gouvernance democratique, utilite sociale, lucrativite limitee et ancrage territorial. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, notre plateforme propose un{' '}
            <Link href={`/${locale}/abonnement-solidaire`} className="text-colhybri-primary hover:underline">abonnement solidaire a 3 euros par mois</Link>{' '}
            qui materialise les valeurs de l&apos;ESS dans le quotidien des citoyens. COLHYBRI prouve qu&apos;innovation technologique et economie solidaire sont parfaitement compatibles.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Qu&apos;est-ce que l&apos;Economie Sociale et Solidaire au sens de la loi ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La loi du 31 juillet 2014 relative a l&apos;Economie Sociale et Solidaire, dite loi Hamon, a pose pour la premiere fois un cadre legislatif complet pour l&apos;ESS en France. Selon ce texte, l&apos;ESS regroupe les organisations qui poursuivent un but autre que le seul partage des benefices, qui adoptent une gouvernance democratique et participative, et qui consacrent la majorite de leurs benefices au maintien ou au developpement de leur activite.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le perimetre de l&apos;ESS englobe historiquement les cooperatives, les mutuelles, les associations et les fondations. Depuis 2014, la loi reconnait egalement les societes commerciales qui respectent les principes de l&apos;ESS, a condition qu&apos;elles inscrivent dans leurs statuts un objectif d&apos;utilite sociale, une gouvernance participative et une lucrativite encadree. C&apos;est dans cette derniere categorie que COLHYBRI inscrit sa demarche.
          </p>

          <h2 className="section-heading">Quels sont les chiffres cles de l&apos;ESS en France ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;ESS est un pilier de l&apos;economie francaise. Avec environ 10% du PIB, ce secteur genere une activite economique considerable. Plus de 200 000 organisations (associations, cooperatives, mutuelles, fondations et entreprises sociales) composent ce tissu economique. Elles emploient 2,4 millions de salaries, soit environ 14% de l&apos;emploi prive en France.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ces chiffres illustrent une realite souvent meconnue : l&apos;ESS n&apos;est pas un secteur marginal ou militant, c&apos;est un pan structurant de l&apos;economie nationale. Les banques cooperatives (Credit Mutuel, Banques Populaires, Caisses d&apos;Epargne), les mutuelles de sante, les grandes associations d&apos;aide sociale en font partie. COLHYBRI rejoint cet ecosysteme avec une approche renouvelee, numerique et accessible, centree sur l&apos;
            <Link href={`/${locale}/inclusion-financiere`} className="text-colhybri-primary hover:underline">inclusion financiere</Link>{' '}
            et le commerce de proximite.
          </p>

          <h2 className="section-heading">Comment COLHYBRI applique-t-il les principes de l&apos;ESS ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            <strong>Gouvernance democratique.</strong> Chez COLHYBRI, chaque abonne compte de maniere egale dans le pool solidaire. Qu&apos;il contribue 3 euros par mois en formule individuelle ou davantage en formule commerce, le mecanisme de redistribution traite chaque participant sur un pied d&apos;egalite. Cette horizontalite est au coeur de notre fonctionnement.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            <strong>Lucrativite limitee.</strong> 75% des abonnements sont redistribues dans le pool solidaire. Le modele economique de COLHYBRI est concu pour maximiser l&apos;impact social, pas les dividendes. La marge operationnelle couvre les couts technologiques (Stripe, Supabase) et le fonctionnement, pas l&apos;enrichissement d&apos;actionnaires.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            <strong>Utilite sociale.</strong> Le{' '}
            <Link href={`/${locale}/pouvoir-achat-solidaire`} className="text-colhybri-primary hover:underline">pouvoir d&apos;achat solidaire</Link>{' '}
            genere par COLHYBRI beneficie directement aux abonnes et aux commercants locaux. Chaque euro mutualise renforce le tissu commercial de proximite et cree du lien social dans le quartier.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            <strong>Ancrage territorial.</strong> COLHYBRI fonctionne ville par ville. Le pool solidaire de Rodilhan beneficie aux commercants de Rodilhan. Celui de Montpellier beneficiera aux commercants de Montpellier. Cette logique d&apos;
            <Link href={`/${locale}/economie-solidaire-locale`} className="text-colhybri-primary hover:underline">economie solidaire locale</Link>{' '}
            garantit que chaque euro reste ancre dans son territoire d&apos;origine.
          </p>

          <h2 className="section-heading">Ou en est COLHYBRI dans sa demarche d&apos;agrement ESUS ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;agrement Entreprise Solidaire d&apos;Utilite Sociale (ESUS) est delivre par la prefecture pour une duree de cinq ans. Il atteste qu&apos;une entreprise poursuit un objectif d&apos;utilite sociale, applique une gouvernance participative et limite la distribution de ses benefices. COLHYBRI prepare activement son dossier d&apos;agreration. La structure juridique, le modele de redistribution et la mission sociale de la plateforme sont alignes avec les criteres de l&apos;agrement.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;obtention de l&apos;agrement ESUS ouvrira des perspectives supplementaires : acces a l&apos;epargne solidaire (via les fonds 90/10 des plans d&apos;epargne salariale), credibilite institutionnelle renforcee aupres des collectivites territoriales, et visibilite accrue aupres de l&apos;ecosysteme ESS. Cette etape s&apos;inscrit dans la strategie de developpement a moyen terme portee par ONLYMORE Group.
          </p>

          <h2 className="section-heading">En quoi COLHYBRI se distingue-t-il des cooperatives traditionnelles ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les cooperatives traditionnelles ont pose les fondations de l&apos;ESS. Elles fonctionnent sur le principe &laquo; un membre, une voix &raquo; et redistribuent les excedents a leurs societaires. Ce modele, ne au XIXe siecle, a prouve sa resilience et sa pertinence. Mais il presente des limites operationnelles : lourdeur administrative, assemblees generales complexes, barrieres a l&apos;entree pour les nouveaux membres, lenteur de decision.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI conserve l&apos;esprit cooperatif (mutualisation, egalite, redistribution) tout en eliminant ses frictions. L&apos;inscription prend quelques minutes. L&apos;abonnement a 3 euros par mois est preleve automatiquement. La redistribution est instantanee et transparente. La technologie (Stripe pour les paiements, Supabase pour les donnees) remplace les processus administratifs lourds. C&apos;est ce que nous appelons l&apos;ESS 2.0 : les valeurs de l&apos;economie sociale, la fluidite du numerique.
          </p>

          <h2 className="section-heading">Qu&apos;est-ce que l&apos;ESS 2.0 et comment la technologie renouvelle-t-elle le secteur ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;ESS 2.0 designe le renouvellement de l&apos;economie sociale par les outils numeriques. Les{' '}
            <Link href={`/${locale}/fintech-sociale`} className="text-colhybri-primary hover:underline">fintechs sociales</Link>{' '}
            comme COLHYBRI democratisent l&apos;acces a la solidarite en supprimant les intermediaires superflus. La blockchain pourrait a terme garantir la transparence totale des flux. L&apos;intelligence artificielle optimise l&apos;allocation des ressources. Les plateformes numeriques etendent la portee geographique des initiatives solidaires.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI illustre cette convergence entre technologie et solidarite. Notre pool solidaire est un mecanisme de redistribution automatise, transparent et auditable. Chaque abonne peut suivre l&apos;
            <Link href={`/${locale}/impact-economique-local`} className="text-colhybri-primary hover:underline">impact economique local</Link>{' '}
            de sa contribution. Cette transparence, rendue possible par la technologie, repond a une exigence croissante des citoyens : savoir exactement ou va leur argent et quel impact il genere. L&apos;ESS de demain sera numerique, ou ne sera pas.
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
          <h2 className="section-heading text-center mb-10">Poursuivre l&apos;exploration</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            <Link href={`/${locale}/inclusion-financiere`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Inclusion financiere</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI rend la solidarite accessible a tous</p>
            </Link>
            <Link href={`/${locale}/pouvoir-achat-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Pouvoir d&apos;achat solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">3 euros/mois augmentent votre capacite d&apos;achat</p>
            </Link>
            <Link href={`/${locale}/economie-solidaire-locale`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Economie solidaire locale</h3>
              <p className="text-sm text-colhybri-dark/60">L&apos;ancrage territorial au coeur du modele</p>
            </Link>
            <Link href={`/${locale}/impact-economique-local`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Impact economique local</h3>
              <p className="text-sm text-colhybri-dark/60">Mesurer l&apos;effet COLHYBRI sur le territoire</p>
            </Link>
          </div>

          <div className="text-center">
            <a href="https://www.colhybri.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Rejoindre le mouvement COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
