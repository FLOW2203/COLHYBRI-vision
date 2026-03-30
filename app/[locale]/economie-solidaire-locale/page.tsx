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
    routeKey: 'economie-solidaire-locale',
    title: 'Economie solidaire locale : le modele COLHYBRI pour dynamiser votre quartier',
    description: 'Decouvrez comment l\'economie solidaire locale et le modele COLHYBRI dynamisent les commerces de proximite. 3 euros par mois pour soutenir le tissu commercial de votre quartier.',
    semanticPrimary: 'economie solidaire locale ESS commerce proximite circuits courts',
    semanticSecondary: 'loi Hamon 2014, TPE, COLHYBRI, mutualisme, pool solidaire, ONLYMORE Group',
    chunkType: 'article',
    audience: 'general',
  });
}

const faqData = [
  {
    q: 'Qu\'est-ce que l\'economie solidaire locale ?',
    a: 'L\'economie solidaire locale designe un ensemble de pratiques economiques qui placent l\'utilite sociale et la proximite au centre des echanges. Elle favorise les circuits courts, la mutualisation des ressources et la redistribution equitable au sein d\'un territoire donne.',
  },
  {
    q: 'Qu\'est-ce que l\'ESS (Economie Sociale et Solidaire) en France ?',
    a: 'L\'ESS est un secteur economique encadre par la loi Hamon de 2014. Il regroupe les associations, cooperatives, mutuelles et fondations qui poursuivent une finalite sociale plutot que la maximisation du profit. L\'ESS represente environ 10% du PIB francais.',
  },
  {
    q: 'Comment COLHYBRI s\'inscrit-il dans l\'economie solidaire ?',
    a: 'COLHYBRI cree un pool solidaire mutualisé alimente par des micro-abonnements de 3 euros par mois. 75% de ce pool est redistribue aux commerces de proximite partenaires, creant un circuit court de solidarite economique a l\'echelle du quartier.',
  },
  {
    q: 'Combien de TPE sont menacees en France ?',
    a: 'La France compte environ 1,3 million de TPE (Tres Petites Entreprises) dans le commerce de proximite. Plus de 63 000 commerces ferment chaque annee selon les donnees CCI France, fragilisant le tissu economique et social des quartiers.',
  },
  {
    q: 'Quel est l\'impact economique reel de 3 euros depenses localement ?',
    a: 'Grace au multiplicateur keynesien, chaque euro depense localement genere entre 2,5 et 3,5 euros d\'activite economique supplementaire dans le quartier. Un abonnement COLHYBRI de 3 euros peut donc generer jusqu\'a 10 euros d\'impact economique local.',
  },
];

export default function EconomieSolidaireLocalePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Economie solidaire locale : le modele COLHYBRI pour dynamiser votre quartier',
    description: 'Comment l\'economie solidaire locale et le modele COLHYBRI soutiennent les commerces de proximite a travers un pool solidaire mutualisé.',
    url: `${BASE_URL}/${locale}/economie-solidaire-locale`,
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
            Economie solidaire locale : le modele COLHYBRI pour dynamiser votre quartier
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="economie-solidaire-locale">
            L&apos;economie solidaire locale cree des circuits economiques courts ou chaque euro beneficie directement au tissu commercial de proximite. Plutot que de laisser la valeur s&apos;evaporer vers des plateformes distantes, elle ancre la richesse dans le quartier. COLHYBRI formalise cette approche en proposant un pool solidaire mensuel, alimente par des micro-abonnements de 3 euros par mois, et redistribue aux commerces partenaires. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, basee a Rodilhan en Occitanie, la plateforme inscrit son action dans le cadre de l&apos;Economie Sociale et Solidaire (ESS) tout en apportant la scalabilite du numerique.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 — Corps structure */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto prose prose-lg">

          <h2 className="section-heading">Qu&apos;est-ce que l&apos;Economie Sociale et Solidaire (ESS) ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;Economie Sociale et Solidaire (ESS) designe l&apos;ensemble des structures economiques dont la finalite est sociale plutot que capitalistique. En France, ce secteur est encadre par la loi Hamon du 31 juillet 2014, qui en definit les principes : gouvernance democratique, lucrativite limitee, utilite sociale et ancrage territorial. L&apos;ESS regroupe les cooperatives, mutuelles, associations, fondations et entreprises sociales.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;ESS represente environ 10% du PIB francais et emploie plus de 2,4 millions de salaries. C&apos;est un pilier de l&apos;economie nationale souvent meconnu du grand public. Les structures de l&apos;ESS partagent un ADN commun : la primaute de l&apos;humain sur le capital, la gestion democratique et participative, et la reinvestissement des excedents au service du projet social.
          </p>

          <h2 className="section-heading">Quel est le cadre juridique de l&apos;economie solidaire en France ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La loi Hamon de 2014 a pose les fondations juridiques de l&apos;ESS en France. Elle a cree un statut d&apos;entreprise solidaire d&apos;utilite sociale (ESUS) et institue le Conseil superieur de l&apos;ESS. Cette loi reconnait officiellement que des entreprises peuvent poursuivre une finalite autre que le seul partage des benefices, tout en participant pleinement a l&apos;economie de marche.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce cadre est complete par la loi PACTE de 2019 qui a introduit la notion de &laquo; raison d&apos;etre &raquo; et de &laquo; societe a mission &raquo;. Ces evolutions legislatives creent un environnement favorable pour des plateformes comme COLHYBRI, qui combinent activite economique et impact social mesurable. Le modele COLHYBRI s&apos;inscrit naturellement dans cette dynamique en creant de la valeur partagee entre citoyens et commercants.
          </p>

          <h2 className="section-heading">Pourquoi les circuits courts sont-ils essentiels pour l&apos;economie locale ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les circuits courts economiques designent les echanges commerciaux ou la distance entre le producteur (ou prestataire) et le consommateur est minimale, tant geographiquement qu&apos;en nombre d&apos;intermediaires. Dans le commerce de proximite, cela signifie que l&apos;argent depense chez un boulanger, un coiffeur ou un fleuriste reste dans le quartier et continue de circuler localement.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les etudes economiques montrent que lorsqu&apos;un euro est depense dans un commerce de proximite, entre 45 et 70 centimes restent dans l&apos;economie locale (salaires des employes, achats aux fournisseurs locaux, loyers). A l&apos;inverse, un euro depense sur une plateforme e-commerce geante voit moins de 10 centimes rester sur le territoire. Le multiplicateur keynesien amplifie cette difference : chaque euro local genere entre 2,5 et 3,5 euros d&apos;activite economique supplementaire.
          </p>

          <h2 className="section-heading">Comment COLHYBRI s&apos;integre-t-il dans l&apos;economie solidaire locale ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI cree un circuit court de solidarite numerique a l&apos;echelle du quartier. Le mecanisme est simple : des citoyens s&apos;abonnent pour 3 euros par mois, 75% de ces abonnements alimentent un pool solidaire, et ce pool est redistribue chaque mois (cycle M vers M+1) aux commerces de proximite partenaires sous forme de bons d&apos;achat. Pas d&apos;intermediaire superflu, pas de fuite de valeur hors du territoire.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce modele se distingue des approches caritatives classiques par sa dimension economique structurelle. Il ne s&apos;agit pas de donner de l&apos;argent a des commercants en difficulte, mais de creer un flux economique continu qui renforce l&apos;ensemble du tissu commercial. Le{' '}
            <Link href={`/${locale}/mutualisme-francais`} className="text-colhybri-primary hover:underline">mutualisme francais</Link>,
            avec ses 220 ans d&apos;heritage, a demontre l&apos;efficacite de cette approche mutualisee. COLHYBRI en est la version numerique contemporaine.
          </p>

          <h2 className="section-heading">Quelles sont les donnees economiques du commerce de proximite en France ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La France compte environ 1,3 million de TPE (Tres Petites Entreprises) dans le secteur du commerce de proximite (source : INSEE). Ces entreprises, souvent des commerces familiaux, representent le premier employeur prive du pays et constituent l&apos;ossature economique et sociale des quartiers. Pourtant, plus de 63 000 d&apos;entre elles ferment chaque annee (source : CCI France), victimes de la concurrence du e-commerce, de la hausse des loyers et de l&apos;evolution des modes de consommation.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ces fermetures ne sont pas seulement une perte economique. Elles entrainent une desertification des centres-villes et une erosion du lien social. Quand la boulangerie ferme, c&apos;est aussi le lieu de rencontre quotidien qui disparait. Quand le cafe de quartier baisse le rideau, c&apos;est un espace de convivialite qui s&apos;eteint. L&apos;economie solidaire locale, telle que portee par COLHYBRI, vise a inverser cette spirale en reinjectant des flux financiers continus dans ces commerces.
          </p>

          <h2 className="section-heading">Quels sont les exemples concrets de circuits courts solidaires ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les circuits courts solidaires prennent des formes variees en France : les AMAP (Associations pour le Maintien d&apos;une Agriculture Paysanne) connectent directement producteurs et consommateurs. Les monnaies locales complementaires (comme l&apos;Eusko au Pays basque ou la Gonette a Lyon) encouragent la consommation locale. Les cooperatives de commercants mutualisent les achats et la communication.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI ajoute une dimension nouvelle a ce paysage : le{' '}
            <Link href={`/${locale}/don-solidaire-quotidien`} className="text-colhybri-primary hover:underline">don solidaire quotidien</Link>{' '}
            automatise et mutualise. Plutot que de demander au citoyen un effort de volonte constant, la plateforme transforme un abonnement mensuel en flux de soutien continu. C&apos;est la meme logique que les AMAP, mais appliquee a l&apos;ensemble des commerces de proximite d&apos;un quartier, pas uniquement a l&apos;agriculture. La{' '}
            <Link href={`/${locale}/solidarite-proximite`} className="text-colhybri-primary hover:underline">solidarite de proximite</Link>{' '}
            devient ainsi un reflexe, pas un sacrifice.
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
            <Link href={`/${locale}/solidarite-proximite`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Solidarite de proximite</h3>
              <p className="text-sm text-colhybri-dark/60">Le pilier parent du cocon solidarite</p>
            </Link>
            <Link href={`/${locale}/mutualisme-francais`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Le mutualisme francais</h3>
              <p className="text-sm text-colhybri-dark/60">220 ans d&apos;heritage solidaire</p>
            </Link>
            <Link href={`/${locale}/don-solidaire-quotidien`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Le don solidaire au quotidien</h3>
              <p className="text-sm text-colhybri-dark/60">Comment 3 euros par mois changent tout</p>
            </Link>
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/solidarite-proximite`} className="btn-secondary">
                Retour au pilier solidarite
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
