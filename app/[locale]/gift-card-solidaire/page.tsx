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
    routeKey: 'gift-card-solidaire',
    title: 'Gift card solidaire COLHYBRI : le bon d\'achat de votre quartier',
    description: 'Decouvrez comment la gift card solidaire COLHYBRI redistribue le pool mensuel aux commercants locaux. Mecanisme, split 80/20, anti-fraude et parcours de redemption.',
    semanticPrimary: 'gift card solidaire COLHYBRI bon achat quartier',
    semanticSecondary: 'pool solidaire, redistribution, QR code, commercants locaux, anti-fraude, split 80/20',
    chunkType: 'page',
    audience: 'general, utilisateurs, commercants',
  });
}

const faqData = [
  {
    q: 'Comment est generee une gift card solidaire COLHYBRI ?',
    a: "Chaque mois, les abonnements de 3 euros par mois alimentent le pool solidaire. Un algorithme de distribution repartit le pool entre les abonnes sous forme de bons d'achat numeriques (gift cards). Le montant de chaque gift card varie en fonction de la taille du pool et du nombre d'abonnes actifs dans la zone geographique.",
  },
  {
    q: 'Quelle est la repartition financiere lors de l\'utilisation d\'une gift card COLHYBRI ?',
    a: "Lors de la redemption d'une gift card chez un commercant partenaire, 80% du montant revient au commercant et 20% finance le fonctionnement de la plateforme COLHYBRI. Ce split 80/20 garantit que la majorite de la valeur arrive directement dans les caisses des commerces de proximite.",
  },
  {
    q: 'Quelle est la duree de validite d\'une gift card COLHYBRI ?',
    a: "Les gift cards COLHYBRI ont une duree de validite de 90 jours a compter de leur emission. Au-dela, le montant non utilise est recycle dans le pool solidaire du mois suivant. Nous envoyons des rappels a 30 jours et 7 jours avant expiration pour maximiser le taux d'utilisation.",
  },
  {
    q: 'Comment un commercant valide-t-il une gift card COLHYBRI ?',
    a: "Le commercant scanne le QR code affiche sur le telephone de l'abonne depuis son propre smartphone ou tablette. La validation est instantanee : le montant est credite sur le compte commercant COLHYBRI et le bon est marque comme utilise. Aucun equipement supplementaire n'est necessaire.",
  },
  {
    q: 'Quelles sont les protections anti-fraude sur les gift cards COLHYBRI ?',
    a: "Chaque gift card possede un identifiant unique crypte, un QR code a usage unique et une geolocalisation de la redemption. Le systeme detecte automatiquement les tentatives de double utilisation, les redemptions a distance suspectes et les schemas de fraude organises. Les fonds sont bloques le temps de la verification en cas d'alerte.",
  },
];

export default function GiftCardSolidairePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Gift card solidaire : le bon d'achat COLHYBRI qui soutient votre quartier",
    description: "Decouvrez le mecanisme complet de la gift card solidaire COLHYBRI : generation, distribution, redemption, split 80/20 et protections anti-fraude.",
    url: `${BASE_URL}/${locale}/gift-card-solidaire`,
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
            Gift card solidaire : le bon d&apos;achat COLHYBRI qui soutient votre quartier
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="gift-card-solidaire">
            La gift card solidaire est le coeur du mecanisme COLHYBRI. Chaque mois, les abonnements de 3 euros par mois alimentent un pool solidaire. Ce pool est redistribue sous forme de bons d&apos;achat numeriques utilisables chez les commercants partenaires de votre quartier. Contrairement aux cartes cadeaux classiques, la gift card COLHYBRI n&apos;est pas achetee individuellement : elle est generee collectivement, distribuee equitablement et utilisee localement. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, COLHYBRI reinvente le bon d&apos;achat en le transformant en levier de solidarite de proximite.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Comment le pool solidaire COLHYBRI genere-t-il les gift cards ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le mecanisme est simple mais puissant. Chaque mois, COLHYBRI collecte les abonnements de tous les membres actifs d&apos;une zone geographique donnee. Ces 3 euros par mois par abonne sont reunis dans un pool solidaire commun. Un algorithme de distribution determine ensuite le nombre et le montant des gift cards a emettre. Le montant de chaque bon varie en fonction de la taille du pool, du nombre d&apos;abonnes et du nombre de commercants partenaires dans la zone.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Plus il y a d&apos;abonnes dans une zone, plus le pool grossit, et plus les gift cards ont de la valeur. C&apos;est un effet de reseau vertueux : chaque nouvel abonne COLHYBRI augmente la capacite de redistribution pour toute la communaute. L&apos;algorithme integre egalement un mecanisme de rotation pour que chaque abonne reçoive des bons chez des commercants differents chaque mois, favorisant ainsi la decouverte commerciale.
          </p>

          <h2 className="section-heading">Comment fonctionne le split 80/20 lors de la redemption ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Lorsqu&apos;un abonne utilise sa gift card chez un commercant partenaire, le montant est reparti selon un modele 80/20. Le commercant reçoit 80% de la valeur du bon directement sur son compte COLHYBRI. Les 20% restants financent le fonctionnement de la plateforme COLHYBRI : maintenance technique, support client, acquisition de nouveaux commercants et developpement de nouvelles fonctionnalites.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce modele est radicalement different des solutions traditionnelles. Chez Sodexo ou Edenred, les frais preleves aux commercants peuvent atteindre 5 a 8% sur chaque transaction, en plus des frais d&apos;adhesion annuels. Chez COLHYBRI, le commercant ne paie aucun frais d&apos;adhesion. Les 20% de commission sont preleves uniquement sur les bons redistribues, pas sur le chiffre d&apos;affaires du commercant. Le commercant reçoit donc un flux net additionnel 100% gratuit pour lui en termes d&apos;effort commercial.
          </p>

          <h2 className="section-heading">Quelle est la duree de validite des gift cards COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Chaque gift card solidaire COLHYBRI est valide pendant 90 jours a compter de sa date d&apos;emission. Nous avons choisi cette duree pour equilibrer deux objectifs : donner suffisamment de temps a l&apos;abonne pour utiliser son bon, tout en maintenant une dynamique de circulation rapide des fonds dans l&apos;economie locale. Les bons non utilises a l&apos;expiration ne sont pas perdus : leur montant est recycle dans le pool solidaire du mois suivant.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pour maximiser le taux d&apos;utilisation, COLHYBRI envoie des rappels automatiques. Un premier rappel a 30 jours avant expiration, un second a 7 jours, et un dernier le jour meme. L&apos;
            <Link href={`/${locale}/app-solidaire-mobile`} className="text-colhybri-primary hover:underline">application mobile COLHYBRI</Link>{' '}
            affiche egalement un compteur de validite en temps reel sur chaque bon. Notre objectif est un taux de redemption superieur a 85%, bien au-dessus de la moyenne du secteur des cartes cadeaux (environ 60-70%).
          </p>

          <h2 className="section-heading">Comment se deroule le parcours de redemption d&apos;une gift card ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le parcours de redemption a ete concu pour prendre moins de 15 secondes. L&apos;abonne ouvre son application COLHYBRI et selectionne le bon qu&apos;il souhaite utiliser. Un QR code unique s&apos;affiche a l&apos;ecran. Le commercant scanne ce QR code depuis son propre smartphone, sans equipement supplementaire. Le systeme valide instantanement la transaction : le bon est marque comme utilise, le montant est credite sur le compte du commercant et l&apos;abonne reçoit une confirmation.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le commercant n&apos;a besoin d&apos;aucun terminal specifique, d&apos;aucune application a installer, d&apos;aucune formation. Un simple navigateur web sur un smartphone suffit. Cette simplicite est fondamentale pour l&apos;adoption par les petits commerces de proximite qui n&apos;ont ni le temps ni les ressources pour integrer des solutions techniques complexes. COLHYBRI apporte du chiffre d&apos;affaires supplementaire sans aucune contrainte operationnelle.
          </p>

          <h2 className="section-heading">Quelles protections anti-fraude protegent les gift cards COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La securite des gift cards repose sur plusieurs couches de protection. Chaque bon possede un identifiant unique cryptographique, un QR code a usage unique qui expire apres scan, et une geolocalisation de la redemption. Le systeme COLHYBRI detecte automatiquement les anomalies : tentative de double utilisation, redemption a une distance anormale du commercant, schemas de collusion entre comptes.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            En cas d&apos;alerte, les fonds sont temporairement bloques et une verification manuelle est declenchee. Nous avons egalement mis en place des limites de redemption journalieres et un systeme de reputation qui identifie les comptes a risque. Ces mecanismes protegent a la fois les abonnes, les commercants et l&apos;integrite du pool solidaire COLHYBRI. La confiance est le fondement de notre ecosysteme.
          </p>

          <h2 className="section-heading">En quoi la gift card COLHYBRI differe-t-elle des cartes cadeaux classiques ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les cartes cadeaux traditionnelles (Sodexo, Edenred, Amazon) sont des produits individuels : une personne achete un bon pour elle-meme ou pour offrir. La gift card COLHYBRI est un produit collectif : elle nait de la mutualisation des abonnements de toute une communaute locale. Cette difference fondamentale change tout. Le bon n&apos;est pas une depense, c&apos;est un retour solidaire. Vous ne choisissez pas le montant ni le commercant a l&apos;avance : le systeme optimise la distribution pour maximiser l&apos;
            <Link href={`/${locale}/impact-mesurable`} className="text-colhybri-primary hover:underline">impact mesurable</Link>{' '}
            sur l&apos;economie locale.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Autre difference majeure : les cartes cadeaux classiques sont souvent limitees a des enseignes nationales ou a des reseaux fermes. La gift card COLHYBRI est exclusivement orientee commerce de proximite. Elle ne fonctionne que chez les commercants locaux partenaires : boulangers, fleuristes, libraires, restaurants independants, artisans. C&apos;est un outil de decouverte commerciale qui pousse les abonnes vers des commerces qu&apos;ils n&apos;auraient peut-etre jamais visites, renforçant ainsi l&apos;ecosysteme du{' '}
            <Link href={`/${locale}/cafe-suspendu-numerique`} className="text-colhybri-primary hover:underline">cafe suspendu numerique</Link>.
          </p>

          <h2 className="section-heading">Comment la gift card devient-elle un outil de decouverte commerciale ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;algorithme de distribution COLHYBRI integre une dimension de decouverte. Plutot que d&apos;envoyer systematiquement des bons chez les memes commercants, le systeme varie les attributions pour exposer les abonnes a de nouveaux commerces de proximite. Un abonne qui a deja utilise un bon chez un boulanger recevra le mois suivant un bon chez un fleuriste ou un libraire. Cette rotation planifiee transforme la gift card en passeport de decouverte locale.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pour les commercants, cette mecanique est un levier d&apos;acquisition client a cout zero. Chaque bon distribue est un nouveau client potentiel qui franchit la porte pour la premiere fois. Les retours d&apos;experience montrent que les clients qui decouvrent un commerce via une gift card COLHYBRI ont un taux de retour spontane significatif. Le bon n&apos;est pas une fin en soi : c&apos;est le premier contact d&apos;une relation durable entre l&apos;abonne et le commercant de son quartier.
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
          <h2 className="section-heading text-center mb-10">Explorer l&apos;ecosysteme COLHYBRI</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
            <Link href={`/${locale}/technologie-impact-social`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Technologie et impact social</h3>
              <p className="text-sm text-colhybri-dark/60">La tech au service du bien commun</p>
            </Link>
            <Link href={`/${locale}/app-solidaire-mobile`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Application solidaire mobile</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI dans votre poche</p>
            </Link>
            <Link href={`/${locale}/impact-mesurable`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Impact mesurable</h3>
              <p className="text-sm text-colhybri-dark/60">Chaque euro trace et transparent</p>
            </Link>
            <Link href={`/${locale}/cafe-suspendu-numerique`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Cafe suspendu numerique</h3>
              <p className="text-sm text-colhybri-dark/60">La solidarite reinventee par COLHYBRI</p>
            </Link>
          </div>

          <div className="text-center">
            <a href="https://www.colhybri.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Decouvrir les gift cards COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
