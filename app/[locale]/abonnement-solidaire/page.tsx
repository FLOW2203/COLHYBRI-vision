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
    routeKey: 'abonnement-solidaire',
    title: 'Abonnement solidaire COLHYBRI : 3 euros/mois pour votre quartier',
    description: 'L\'abonnement COLHYBRI a 3 euros/mois : inscription, paiement Stripe, tirage, bon d\'achat, utilisation chez les commercants. Sans engagement, sans conditions.',
    semanticPrimary: 'abonnement solidaire COLHYBRI 3 euros mois quartier',
    semanticSecondary: 'Stripe paiement, bon achat, commercant partenaire, sans engagement, pool solidaire',
    chunkType: 'page',
    audience: 'general',
  });
}

const faqData = [
  {
    q: "Comment fonctionne l\u2019abonnement COLHYBRI a 3 euros par mois ?",
    a: "L\u2019abonne s\u2019inscrit en ligne, renseigne un moyen de paiement Stripe (carte bancaire ou prepayee) et est preleve de 3 euros chaque mois. 75 % des abonnements alimentent le pool solidaire redistribue en bons d\u2019achat chez les commercants partenaires. Sans engagement, resiliable a tout moment.",
  },
  {
    q: "Peut-on resilier l\u2019abonnement COLHYBRI a tout moment ?",
    a: "Oui. L\u2019abonnement COLHYBRI est sans engagement. Nous pouvons le resilier a tout moment depuis notre espace personnel. Le prelevement s\u2019arrete immediatement et il n\u2019y a aucun frais de resiliation.",
  },
  {
    q: "Comment les commercants rejoignent-ils COLHYBRI ?",
    a: "Les commercants s\u2019inscrivent via Google Places verification, paient 10 euros par mois (abonnement B2B) et ne versent aucune commission sur les bons d\u2019achat utilises. Ils recoivent un flux de clients oriente par la plateforme COLHYBRI.",
  },
  {
    q: "A partir de combien d\u2019abonnes COLHYBRI est-il rentable ?",
    a: "Le seuil de rentabilite est fixe a 7 476 abonnes B2C. A ce niveau, les revenus d\u2019abonnement couvrent les couts operationnels tout en maintenant la redistribution de 75 % du pool aux abonnes sous forme de bons d\u2019achat.",
  },
  {
    q: "3 euros par mois, cela vaut-il vraiment le coup ?",
    a: "3 euros representent 10 centimes par jour, le prix d\u2019un cafe par mois. En retour, chaque abonne a la possibilite de recevoir des bons d\u2019achat de 15 a 30 euros chez les commercants de son quartier. C\u2019est un investissement solidaire a impact local immediat.",
  },
];

export default function AbonnementSolidairePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "L\u2019abonnement solidaire COLHYBRI : 3 euros/mois pour changer votre quartier",
    description: "Tout savoir sur l\u2019abonnement COLHYBRI a 3 euros par mois : inscription, paiement, tirage, bon d\u2019achat, utilisation chez les commercants de quartier.",
    url: `${BASE_URL}/${locale}/abonnement-solidaire`,
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
            L&apos;abonnement solidaire COLHYBRI : 3 euros/mois pour changer votre quartier
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="abonnement-solidaire">
            L&apos;abonnement COLHYBRI est le coeur du systeme : 3 euros par mois, sans engagement, sans conditions de revenus, resiliable a tout moment. Chaque contribution alimente un pool solidaire dont 75 % sont redistribues en bons d&apos;achat chez les commercants de votre quartier. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, la plateforme COLHYBRI rend la solidarite locale aussi simple qu&apos;un prelevement mensuel. Un geste a 10 centimes par jour qui transforme la dynamique economique de votre rue.
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

          <h2 className="section-heading">Quel est le parcours d&apos;un abonne COLHYBRI de l&apos;inscription au bon d&apos;achat ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le parcours abonne COLHYBRI a ete concu pour etre le plus simple possible. Premiere etape : l&apos;inscription en ligne, qui prend moins de deux minutes. Nous renseignons une adresse email, un code postal (pour identifier les commercants de proximite) et un moyen de paiement via Stripe. Aucun justificatif de revenus, aucun scoring credit, aucune verification complexe. Une carte bancaire classique ou prepayee suffit.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Deuxieme etape : le prelevement automatique de 3 euros par mois via Stripe. Le paiement est securise, chiffre et conforme aux standards europeens. Troisieme etape : l&apos;attente du tirage mensuel. Chaque mois, COLHYBRI redistribue 75 % du pool solidaire sous forme de bons d&apos;achat. Les beneficiaires sont selectionnes selon des regles transparentes et equitables. Quatrieme etape : la reception du bon d&apos;achat (15 a 30 euros) utilisable chez les commercants partenaires du quartier.
          </p>

          <h2 className="section-heading">Comment fonctionne le cycle mensuel M a M+1 ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le mecanisme COLHYBRI suit un cycle mensuel rigoureux. Au debut du mois M, les prelevements de 3 euros sont collectes aupres de tous les abonnes actifs. Ces fonds alimentent le pool solidaire du mois. En fin de mois M, COLHYBRI calcule la redistribution : 75 % du pool total est alloue aux bons d&apos;achat, 25 % couvrent les frais operationnels (infrastructure technique, paiements Stripe, support).
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Au debut du mois M+1, les bons d&apos;achat sont distribues aux beneficiaires selectionnes. Ces bons sont valables chez les commercants partenaires COLHYBRI du quartier de l&apos;abonne. Le commercant encaisse le bon comme un paiement classique et est rembourse par COLHYBRI. Ce cycle vertueux se repete chaque mois, creant un flux continu de valeur vers les commerces de proximite.
          </p>

          <h2 className="section-heading">Pourquoi la repartition 75/25 est-elle optimale ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La repartition 75/25 est le resultat d&apos;un equilibre calcule. 75 % du pool redistribue en bons d&apos;achat garantit un impact maximal pour les abonnes et les commercants. Les 25 % restants couvrent strictement les couts operationnels : frais Stripe (environ 1,4 % + 0,25 euro par transaction), hebergement Supabase et Vercel, support client, et marge operationnelle minimale.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Cette transparence est un pilier du modele COLHYBRI. Contrairement aux intermediaires financiers traditionnels qui prelevent 30 a 50 % en frais divers, COLHYBRI maximise la part qui arrive aux beneficiaires. C&apos;est un engagement concret d&apos;
            <Link href={`/${locale}/economie-sociale-solidaire`} className="text-colhybri-primary hover:underline">economie sociale et solidaire</Link>{' '}
            qui distingue COLHYBRI des modeles classiques.
          </p>

          <h2 className="section-heading">3 euros par mois : comment se situe ce prix ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Mettons le prix en perspective. 3 euros par mois, c&apos;est 10 centimes par jour. C&apos;est le prix d&apos;un cafe dans un bar de quartier. C&apos;est moins qu&apos;un abonnement a une application de meditation (4,99 euros), moins qu&apos;un service de streaming musical (10,99 euros), moins qu&apos;une seule course en VTC. C&apos;est un montant que la quasi-totalite des menages francais peut assumer sans impact sur le budget quotidien.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce prix strategique est au coeur du{' '}
            <Link href={`/${locale}/pouvoir-achat-solidaire`} className="text-colhybri-primary hover:underline">pouvoir d&apos;achat solidaire</Link>{' '}
            de COLHYBRI. En maintenant l&apos;abonnement a 3 euros par mois, la plateforme garantit l&apos;accessibilite universelle tout en generant un pool solidaire suffisant pour creer un impact reel. L&apos;abonnement est sans engagement : nous pouvons le resilier a tout moment, sans frais, sans justification.
          </p>

          <h2 className="section-heading">Comment un commercant rejoint-il le reseau COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le parcours commercant est tout aussi simple. Le commerce est verifie via Google Places pour garantir son existence physique et sa localisation. Le commercant souscrit un abonnement B2B a 10 euros par mois. En contrepartie, il recoit un flux de clients orientes par la plateforme COLHYBRI, sans aucune commission sur les bons d&apos;achat utilises dans son etablissement.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Zero commission, c&apos;est un engagement fort. Les plateformes de livraison ou de reservation prelevent habituellement 15 a 30 % du panier. COLHYBRI inverse ce modele : le commercant paie un forfait fixe et previsible, et conserve 100 % du chiffre d&apos;affaires genere par les bons d&apos;achat. C&apos;est un outil de{' '}
            <Link href={`/${locale}/fidelisation-commerce-quartier`} className="text-colhybri-primary hover:underline">fidelisation pour les commerces de quartier</Link>{' '}
            sans les inconvenients des plateformes predatrices.
          </p>

          <h2 className="section-heading">Quel est le seuil de rentabilite de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le modele economique de COLHYBRI atteint l&apos;equilibre a 7 476 abonnes B2C. Ce chiffre a ete calcule sur la base des couts fixes (infrastructure technique, equipe, support) et variables (frais Stripe, remboursement des bons d&apos;achat aux commercants). Au-dela de ce seuil, chaque nouvel abonne renforce le pool solidaire et augmente l&apos;impact pour l&apos;ensemble de la communaute.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La levee pre-seed de 200 000 a 350 000 euros permettra de financer la phase d&apos;acquisition des premiers abonnes et d&apos;atteindre ce seuil. La strategie de deploiement est geographique : ville par ville, en commençant par l&apos;Occitanie, pour creer des ecosystemes locaux autonomes avant de s&apos;etendre aux grandes metropoles francaises. Chaque ville forme un pool independant qui beneficie exclusivement a ses commercants locaux.
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
          <h2 className="section-heading text-center mb-10">Explorer l&apos;abonnement solidaire</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            <Link href={`/${locale}/inclusion-financiere`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Inclusion financiere</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI rend la solidarite accessible a tous</p>
            </Link>
            <Link href={`/${locale}/pouvoir-achat-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Pouvoir d&apos;achat solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">3 euros/mois augmentent votre capacite d&apos;achat</p>
            </Link>
            <Link href={`/${locale}/economie-sociale-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Economie Sociale et Solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI, acteur de la nouvelle economie</p>
            </Link>
            <Link href={`/${locale}/fidelisation-commerce-quartier`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Fidelisation commerce de quartier</h3>
              <p className="text-sm text-colhybri-dark/60">Un outil pour les commercants locaux</p>
            </Link>
          </div>

          <div className="text-center">
            <a href="https://www.colhybri.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              S&apos;abonner a COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
