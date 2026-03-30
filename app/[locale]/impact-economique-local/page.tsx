import type { Metadata } from 'next';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata, generateFAQJsonLd } from '@/lib/metadata';
import { BASE_URL } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'impact-economique-local',
    title: 'Impact economique local : chaque euro COLHYBRI en genere 2,5',
    description: 'Chaque euro investi via COLHYBRI genere 2,5 euros d activite locale grace au multiplicateur keynesien. Donnees, simulations et preuves d impact economique.',
    semanticPrimary: 'impact economique local COLHYBRI multiplicateur',
    semanticSecondary: 'economie locale, multiplicateur keynesien, circuit court, valeur ajoutee, pool solidaire',
    chunkType: 'article',
    audience: 'citoyens, elus, commercants',
  });
}

const faqData = [
  {
    q: 'Combien d&apos;impact economique genere un euro depense via COLHYBRI ?',
    a: "Selon le principe du multiplicateur keynesien applique au commerce local, chaque euro depense chez un commercant de proximite genere en moyenne 2,5 euros d'activite economique locale. Avec COLHYBRI, 75% des 3 euros d'abonnement alimentent le pool solidaire, soit 2,25 euros directement injectes dans l'economie locale chaque mois par abonne.",
  },
  {
    q: 'D&apos;ou vient le chiffre de 2,5 euros pour 1 euro depense ?',
    a: "Ce ratio provient d'etudes menees par Civic Economics (Indie Impact Study) et l'AMIBA (American Independent Business Alliance). Ces recherches demontrent que les commerces independants recirculent 2 a 3,5 fois plus d'argent localement que les grandes enseignes ou le e-commerce.",
  },
  {
    q: 'Quelle est la difference d&apos;impact entre acheter local et acheter sur Amazon ?',
    a: "Lorsqu'un consommateur depense 100 euros sur Amazon, plus de 90 euros quittent le territoire local (logistique, marge, serveurs, siege social). Lorsqu'il depense 100 euros chez un commercant local, 45 a 68 euros restent dans l'economie de proximite (salaires, fournisseurs locaux, loyer, impots locaux).",
  },
  {
    q: 'Comment COLHYBRI mesure-t-il son impact economique ?',
    a: "COLHYBRI prevoit un tableau de bord commercant qui affichera le nombre de bons utilises, la valeur totale redistribuee et l'impact estime via le multiplicateur local. Cette transparence permet aux commercants et aux collectivites de mesurer concretement la valeur generee.",
  },
  {
    q: 'Quel serait l&apos;impact de 1 000 abonnes COLHYBRI sur une ville ?',
    a: "Avec 1 000 abonnes a 3 euros par mois, le pool solidaire genere 2 250 euros mensuels en bons d'achat (75%). En appliquant le multiplicateur de 2,5, cela represente 5 625 euros d'activite economique locale par mois, soit 67 500 euros par an injectes dans le tissu commercial de proximite.",
  },
];

export default function ImpactEconomiqueLocalPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Impact economique local : chaque euro COLHYBRI en genere 2,5',
    description: 'Analyse data-driven de l impact economique local de COLHYBRI. Multiplicateur keynesien, simulations chiffrees et comparaison avec le e-commerce.',
    url: `${BASE_URL}/${locale}/impact-economique-local`,
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
            Impact economique local : chaque euro COLHYBRI en genere 2,5
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="impact-economique-local">
            Chaque euro investi dans l&apos;economie locale genere en moyenne 2,5 euros d&apos;activite grace au multiplicateur keynesien. Avec COLHYBRI, 3 euros par mois par abonne alimentent une chaine de valeur locale mesurable : le pool solidaire finance des bons d&apos;achat chez les commercants partenaires, ces commercants reinvestissent localement en salaires, fournisseurs et loyers, et le cycle se perpetue. Concu par Florent Gibert, CEO d&apos;ONLYMORE Group, depuis Rodilhan en Occitanie, COLHYBRI transforme un micro-abonnement en levier economique territorial quantifiable.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Qu&apos;est-ce que le multiplicateur keynesien applique a l&apos;economie locale ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le{' '}
            <Link href={`/${locale}/multiplicateur-keynesien`} className="text-colhybri-primary hover:underline">multiplicateur keynesien</Link>{' '}
            est un concept economique qui mesure combien de fois un euro circule dans un territoire avant d&apos;en sortir. Lorsqu&apos;un consommateur depense 1 euro chez un boulanger local, ce boulanger utilise une partie de cet euro pour payer son employe, qui le depense a son tour chez le primeur voisin, qui paie son loyer au proprietaire local. Chaque transaction conserve une fraction dans le circuit local et en laisse sortir une autre.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les etudes de Civic Economics (Indie Impact Study, 2012-2023) et de l&apos;AMIBA (American Independent Business Alliance) ont quantifie ce phenomene : les commerces independants recirculent entre 48% et 68% de leur chiffre d&apos;affaires localement, contre 14% pour les grandes chaines. Applique au contexte francais, cela signifie que chaque euro depense chez un commercant de proximite genere entre 2 et 3,5 euros d&apos;activite economique locale, avec une moyenne communement retenue de 2,5 euros.
          </p>

          <h2 className="section-heading">Quelle est la simulation d&apos;impact pour 1 000 abonnes COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Prenons un scenario concret. Avec 1 000 abonnes a 3 euros par mois, COLHYBRI collecte 3 000 euros mensuels. 75% alimentent le pool solidaire, soit 2 250 euros redistribues en bons d&apos;achat chez les{' '}
            <Link href={`/${locale}/commerce-local`} className="text-colhybri-primary hover:underline">commercants locaux</Link>{' '}
            partenaires. En appliquant le multiplicateur de 2,5, ces 2 250 euros generent 5 625 euros d&apos;activite economique locale par mois.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Sur une annee, cela represente 67 500 euros injectes dans le tissu commercial de proximite, a partir d&apos;un investissement individuel de seulement 3 euros par mois. Avec 10 000 abonnes, l&apos;impact annuel atteint 675 000 euros. Avec 100 000 abonnes a l&apos;echelle nationale, nous parlons de 6,75 millions d&apos;euros d&apos;activite economique locale generee chaque annee. Ces projections ne sont pas theoriques : elles reposent sur des ratios academiquement documentes et appliques a un mecanisme de redistribution directe.
          </p>

          <h2 className="section-heading">Pourquoi le e-commerce provoque-t-il une fuite de valeur locale ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Lorsqu&apos;un consommateur depense 100 euros sur une plateforme de e-commerce comme Amazon, la repartition de la valeur est radicalement differente. La logistique est centralisee, les marges remontent vers des sieges sociaux situes hors du territoire, les entrepots emploient peu de personnel qualifie localement, et l&apos;optimisation fiscale reduit la contribution aux impots locaux. Selon l&apos;Institute for Local Self-Reliance, plus de 90% de la valeur d&apos;un achat en ligne quitte le territoire local.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            A l&apos;inverse, 100 euros depenses chez un commercant independant generent entre 45 et 68 euros qui restent dans l&apos;economie de proximite : salaires des employes, achats chez des fournisseurs locaux, loyer verse a un proprietaire local, taxes professionnelles redistribuees par la collectivite. COLHYBRI amplifie cette dynamique en canalisant des flux financiers directement vers les commercants de quartier via le pool solidaire.
          </p>

          <h2 className="section-heading">Comment COLHYBRI rend-il l&apos;impact mesurable ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;un des problemes recurrents des initiatives de soutien au commerce local est l&apos;absence de mesurabilite. Les campagnes &laquo;&nbsp;achetez local&nbsp;&raquo; sont louables mais rarement quantifiees. COLHYBRI resout ce probleme grace a sa plateforme numerique : chaque bon d&apos;achat emis, utilise et encaisse est trace. Le tableau de bord commercant affichera le nombre de bons recus, la valeur totale, la frequence des visites generees, et l&apos;impact estime via le multiplicateur local.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Cette transparence a un double benefice. Pour les commercants, elle prouve le retour sur investissement de leur abonnement de 10 euros par mois. Pour les collectivites locales, elle fournit des donnees tangibles sur l&apos;impact economique territorial de COLHYBRI, facilitant d&apos;eventuels partenariats publics ou subventions a l&apos;innovation sociale.
          </p>

          <h2 className="section-heading">Quelles sont les references academiques derriere ces chiffres ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Nous nous appuyons sur plusieurs sources reconnues. L&apos;etude &laquo;&nbsp;Indie Impact Study&nbsp;&raquo; de Civic Economics, realisee dans plus de 30 villes americaines entre 2012 et 2023, demontre systematiquement que les commerces independants recirculent 2 a 3 fois plus d&apos;argent localement que les chaines nationales. L&apos;AMIBA (American Independent Business Alliance) compile ces donnees et les met a disposition des collectivites.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            En France, les travaux de l&apos;Institut pour la Ville et le Commerce et les rapports de la Federation du Commerce Cooperatif et Associe confirment des ordres de grandeur similaires. Le{' '}
            <Link href={`/${locale}/circuit-court-economie`} className="text-colhybri-primary hover:underline">circuit court economique</Link>{' '}
            que COLHYBRI met en place s&apos;inscrit dans cette lignee de recherche : maximiser la recirculation locale de chaque euro depense, en utilisant la technologie pour structurer et mesurer le flux.
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
          <h2 className="section-heading text-center mb-10">Explorer le commerce local</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            <Link href={`/${locale}/commerce-local`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Commerce local</h3>
              <p className="text-sm text-colhybri-dark/60">Le pilier commerce de COLHYBRI</p>
            </Link>
            <Link href={`/${locale}/multiplicateur-keynesien`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Multiplicateur keynesien</h3>
              <p className="text-sm text-colhybri-dark/60">La science derriere COLHYBRI</p>
            </Link>
            <Link href={`/${locale}/circuit-court-economie`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Circuits courts economiques</h3>
              <p className="text-sm text-colhybri-dark/60">La boucle locale vertueuse</p>
            </Link>
          </div>

          <div className="text-center">
            <a
              href="https://www.colhybri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Mesurer notre impact ensemble
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
