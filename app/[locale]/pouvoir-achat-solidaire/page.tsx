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
    routeKey: 'pouvoir-achat-solidaire',
    title: 'Pouvoir d\'achat solidaire COLHYBRI : 3 euros/mois pour acheter local',
    description: 'COLHYBRI augmente votre pouvoir d\'achat grace a un abonnement solidaire a 3 euros/mois. Pool mutualise, bons d\'achat locaux, zero promotions trompeuses.',
    semanticPrimary: 'pouvoir achat solidaire COLHYBRI 3 euros mois',
    semanticSecondary: 'inflation France, capacite achat local, mutualisation, bons achat, promotion piege',
    chunkType: 'page',
    audience: 'general',
  });
}

const faqData = [
  {
    q: "Comment 3 euros par mois peuvent-ils augmenter mon pouvoir d\u2019achat ?",
    a: "Grace a la mutualisation du pool solidaire COLHYBRI, chaque abonne a 3 euros par mois a la possibilite de recevoir des bons d\u2019achat d\u2019une valeur de 15 a 30 euros chez les commercants partenaires. Le mecanisme repose sur la solidarite collective, pas sur la chance individuelle.",
  },
  {
    q: "Est-ce comparable a des promotions ou des cartes de fidelite ?",
    a: "Non. Les promotions classiques augmentent souvent le prix de reference avant de l\u2019abaisser artificiellement. COLHYBRI fonctionne sur un modele mutualiste transparent : 75 % des abonnements alimentent le pool redistribue en bons d\u2019achat reels, sans manipulation de prix.",
  },
  {
    q: "Pourquoi le seuil de 3 euros par mois est-il strategique ?",
    a: "3 euros representent environ 10 centimes par jour, soit le prix d\u2019un cafe. Ce seuil psychologique permet a la quasi-totalite des menages francais de participer, y compris les personnes en fragilite financiere. L\u2019accessibilite est au coeur du modele COLHYBRI.",
  },
  {
    q: "COLHYBRI est-il un jeu de hasard ou une loterie ?",
    a: "Non. COLHYBRI repose sur un mecanisme mutualiste, pas sur un jeu de hasard. La redistribution suit des regles transparentes et equitables. Chaque abonne contribue au pool solidaire et chaque abonne peut en beneficier selon un cycle mensuel defini.",
  },
  {
    q: "Ou puis-je depenser les bons d\u2019achat COLHYBRI ?",
    a: "Les bons d\u2019achat sont valables exclusivement chez les commercants partenaires de votre quartier. Restaurants, boulangeries, coiffeurs, librairies : COLHYBRI cible les commerces de proximite pour maximiser l\u2019impact economique local.",
  },
];

export default function PouvoirAchatSolidairePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Pouvoir d\u2019achat solidaire : comment 3 euros/mois augmentent votre capacite d\u2019achat local",
    description: "COLHYBRI augmente le pouvoir d\u2019achat grace a un abonnement solidaire a 3 euros par mois. Mutualisation, bons d\u2019achat locaux, zero promotions trompeuses.",
    url: `${BASE_URL}/${locale}/pouvoir-achat-solidaire`,
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
            Pouvoir d&apos;achat solidaire : comment 3 euros/mois augmentent votre capacite d&apos;achat local
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="pouvoir-achat-solidaire">
            En France, l&apos;inflation grignote le budget des menages mois apres mois. Les promotions illusoires ne compensent pas la hausse des prix reels. COLHYBRI propose une alternative concrete : un{' '}
            <Link href={`/${locale}/abonnement-solidaire`} className="text-colhybri-primary hover:underline">abonnement solidaire a 3 euros par mois</Link>{' '}
            qui mutualise les contributions de tous les abonnes pour redistribuer des bons d&apos;achat chez les commercants de quartier. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, la plateforme COLHYBRI transforme chaque euro verse en levier de pouvoir d&apos;achat local. Pas de marketing trompeur, pas de fausses remises : un mecanisme transparent au service de la communaute.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
          <Link href={`/${locale}/inclusion-financiere`} className="text-colhybri-primary hover:underline text-sm">
            &larr; Retour au pilier Inclusion financiere
          </Link>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Quel est l&apos;etat du pouvoir d&apos;achat en France en 2026 ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Selon l&apos;INSEE, l&apos;inflation cumulee depuis 2021 a erode le pouvoir d&apos;achat des menages francais de maniere significative. Les prix alimentaires ont augmente de plus de 20 % en quatre ans. Les loyers, l&apos;energie et les transports suivent la meme trajectoire. Pour les menages modestes, chaque euro compte et les arbitrages budgetaires deviennent quotidiens : faut-il privilegier l&apos;alimentation ou le chauffage, la sante ou les loisirs ?
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les mecanismes traditionnels de soutien au pouvoir d&apos;achat (cheques inflation, boucliers tarifaires, gels de prix) sont temporaires et couteux pour les finances publiques. COLHYBRI propose une solution structurelle, decentralisee et perenne. Chaque abonne investit 3 euros par mois dans un pool solidaire local qui genere de la valeur pour l&apos;ensemble de la communaute.
          </p>

          <h2 className="section-heading">Pourquoi les promotions classiques sont-elles un piege pour le consommateur ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le systeme promotionnel de la grande distribution repose sur des mecanismes bien documentes : prix de reference gonfles avant la &laquo;&nbsp;promotion&nbsp;&raquo;, lots forçant la surconsommation, dates de peremption courtes sur les produits en tete de gondole, et programmes de fidelite qui captent les donnees personnelles sans reel benefice pour le consommateur. La DGCCRF releve chaque annee des milliers d&apos;infractions liees aux pratiques commerciales trompeuses.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI prend le contre-pied de ce modele. Il n&apos;y a pas de prix barre, pas de fausse urgence, pas de manipulation psychologique. Le modele est transparent : 75 % des abonnements alimentent le pool solidaire, 25 % couvrent les frais operationnels. Les bons d&apos;achat sont utilisables chez des commercants de proximite qui pratiquent leurs prix habituels. L&apos;
            <Link href={`/${locale}/economie-sociale-solidaire`} className="text-colhybri-primary hover:underline">economie sociale et solidaire</Link>{' '}
            remplace la manipulation commerciale.
          </p>

          <h2 className="section-heading">Comment fonctionne le mecanisme COLHYBRI pour augmenter le pouvoir d&apos;achat ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le principe est simple et puissant. Chaque abonne verse 3 euros par mois. Ces contributions sont mutualisees dans un pool solidaire. Chaque mois, COLHYBRI redistribue 75 % du pool sous forme de bons d&apos;achat d&apos;une valeur de 15 a 30 euros, utilisables chez les commercants partenaires du quartier. Un abonne qui recoit un bon de 20 euros a donc multiplie sa mise par plus de six.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce mecanisme s&apos;apparente a un{' '}
            <Link href={`/${locale}/multiplicateur-keynesien`} className="text-colhybri-primary hover:underline">multiplicateur keynesien local</Link>{' '}
            : l&apos;euro depense chez un commercant local circule en moyenne 2,5 fois plus longtemps dans l&apos;economie de proximite qu&apos;un euro depense dans une grande enseigne. COLHYBRI amplifie cet effet en concentrant les flux sur les commerces de quartier.
          </p>

          <h2 className="section-heading">La redistribution COLHYBRI releve-t-elle du hasard ou de la solidarite ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La question est legitime et nous y repondons avec transparence. COLHYBRI n&apos;est pas une loterie. Le mecanisme repose sur la mutualisation solidaire : chaque abonne contribue a un pot commun dont les benefices sont redistribues selon des regles definies et transparentes. La part d&apos;aleatoire dans la selection des beneficiaires mensuels ne transforme pas le modele en jeu de hasard, car il n&apos;y a ni mise en jeu, ni perte possible au-dela de l&apos;abonnement de 3 euros par mois.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le mutualisme est un pilier de l&apos;
            <Link href={`/${locale}/inclusion-financiere`} className="text-colhybri-primary hover:underline">inclusion financiere</Link>{' '}
            depuis des siecles. Les mutuelles de sante, les tontines africaines, les cooperatives agricoles fonctionnent sur le meme principe : chacun contribue selon ses moyens et beneficie selon les regles communes. COLHYBRI numerise et democratise ce modele ancestral grace a la technologie.
          </p>

          <h2 className="section-heading">Pourquoi le seuil de 3 euros par mois change tout ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le prix de 3 euros par mois n&apos;a pas ete choisi au hasard. En economie comportementale, le seuil psychologique de resistance se situe autour de 5 euros pour un abonnement sans benefice immediat garanti. A 3 euros, COLHYBRI se positionne sous ce seuil. C&apos;est le prix d&apos;un cafe, de dix centimes par jour, d&apos;un geste quasi imperceptible dans un budget mensuel.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Cette accessibilite est strategique pour l&apos;
            <Link href={`/${locale}/inclusion-financiere`} className="text-colhybri-primary hover:underline">inclusion financiere</Link>. Meme les menages en fragilite budgetaire peuvent participer. COLHYBRI ne demande aucun justificatif de revenus, aucun scoring credit, aucune condition prealable. Le modele est universel par conception : un prix unique, des droits egaux, une solidarite partagee. C&apos;est la force du systeme COLHYBRI.
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
          <h2 className="section-heading text-center mb-10">Explorer le pouvoir d&apos;achat solidaire</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            <Link href={`/${locale}/inclusion-financiere`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Inclusion financiere</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI rend la solidarite accessible a tous</p>
            </Link>
            <Link href={`/${locale}/abonnement-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Abonnement solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">3 euros/mois pour changer votre quartier</p>
            </Link>
            <Link href={`/${locale}/economie-sociale-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Economie Sociale et Solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI, acteur de la nouvelle economie</p>
            </Link>
            <Link href={`/${locale}/multiplicateur-keynesien`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Multiplicateur keynesien local</h3>
              <p className="text-sm text-colhybri-dark/60">L&apos;effet levier de la depense locale</p>
            </Link>
          </div>

          <div className="text-center">
            <a href="https://www.colhybri.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Rejoindre COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
