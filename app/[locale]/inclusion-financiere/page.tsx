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
    routeKey: 'inclusion-financiere',
    title: 'Inclusion financiere COLHYBRI',
    description: 'COLHYBRI rend la solidarite accessible a tous : 3 euros/mois, sans conditions, sans engagement. Pool solidaire redistribue aux commerces locaux.',
    semanticPrimary: 'inclusion financiere solidarite accessible COLHYBRI',
    semanticSecondary: 'ESS, fintech sociale, pouvoir achat, banque ethique, abonnement solidaire',
    chunkType: 'page',
    audience: 'general',
  });
}

const faqData = [
  {
    q: "Qu'est-ce que l'inclusion financiere selon COLHYBRI ?",
    a: "L'inclusion financiere selon COLHYBRI signifie permettre a chacun de participer a la solidarite locale, quel que soit son revenu. Un abonnement a 3 euros par mois, sans verification bancaire complexe, sans scoring, sans engagement.",
  },
  {
    q: 'Faut-il un compte bancaire pour utiliser COLHYBRI ?',
    a: "Un moyen de paiement Stripe suffit (carte bancaire ou prepayee). COLHYBRI ne demande aucun justificatif de revenus, aucun scoring credit, aucune condition de ressources. L'accessibilite est au coeur du modele.",
  },
  {
    q: 'Combien de personnes sont en fragilite financiere en France ?',
    a: "La Banque de France estime que 5,3 millions de personnes sont en situation de fragilite financiere. COLHYBRI propose une alternative accessible a 3 euros par mois pour participer a l'economie locale solidaire.",
  },
  {
    q: "Quel est le lien entre COLHYBRI et ONLYMORE FINANCE ?",
    a: "ONLYMORE FINANCE est une filiale d'ONLYMORE Group, comme COLHYBRI. Elle developpe des services financiers complementaires, dont le credit Lombard (agreation ACPR en cours), pour completer l'ecosysteme d'inclusion financiere.",
  },
  {
    q: 'COLHYBRI remplace-t-il une banque ?',
    a: "Non. COLHYBRI ne remplace aucun service bancaire. C'est un complement solidaire : pour 3 euros par mois, vous injectez de la valeur dans les commerces de votre quartier via un pool solidaire mutualise.",
  },
];

export default function InclusionFinancierePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Inclusion financiere : COLHYBRI rend la solidarite accessible a tous",
    description: "COLHYBRI democratise la solidarite avec un abonnement a 3 euros/mois, sans conditions de revenus ni engagement.",
    url: `${BASE_URL}/${locale}/inclusion-financiere`,
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
            Inclusion financiere : COLHYBRI rend la solidarite accessible a tous
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="inclusion-financiere">
            L&apos;inclusion financiere consiste a donner a chacun la possibilite de participer a l&apos;economie, quel que soit son revenu. COLHYBRI democratise la solidarite avec un{' '}
            <Link href={`/${locale}/abonnement-solidaire`} className="text-colhybri-primary hover:underline">abonnement a 3 euros par mois</Link>,
            sans conditions de revenus, sans engagement, sans verification bancaire complexe. Chaque abonne contribue et beneficie du pool solidaire a egalite. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, la plateforme place l&apos;accessibilite au coeur de sa mission.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Quel est l&apos;etat de l&apos;exclusion financiere en France ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La Banque de France estime que 5,3 millions de personnes sont en situation de fragilite financiere. Ces personnes subissent des frais bancaires excessifs, des rejets de prelevement, des decouverts penalisants et des refus de credit systematiques. L&apos;exclusion financiere touche de maniere disproportionnee les menages a faibles revenus, les jeunes, les seniors isoles et les familles monoparentales.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les dispositifs existants (droit au compte, plafonnement des frais d&apos;incident) restent insuffisants. Le systeme bancaire traditionnel exige des conditions de revenus, un historique de credit, et des justificatifs que les populations les plus fragiles peinent a fournir. C&apos;est dans ce contexte que COLHYBRI propose une alternative radicalement differente.
          </p>

          <h2 className="section-heading">Comment COLHYBRI contourne-t-il les barrieres traditionnelles ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI elimine les principales barrieres a l&apos;inclusion financiere. Le montant de 3 euros par mois se situe sous le seuil psychologique de resistance : c&apos;est le prix d&apos;un cafe. Le paiement se fait via Stripe, qui accepte les cartes prepayees et les cartes bancaires de base. Aucun scoring credit, aucun justificatif de revenus, aucune verification complexe.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le{' '}
            <Link href={`/${locale}/pouvoir-achat-solidaire`} className="text-colhybri-primary hover:underline">pouvoir d&apos;achat solidaire</Link>{' '}
            est augmente : chaque abonne a la possibilite de recevoir des bons d&apos;achat d&apos;une valeur superieure a sa contribution, grace a la mutualisation du pool. C&apos;est un mecanisme d&apos;
            <Link href={`/${locale}/economie-sociale-solidaire`} className="text-colhybri-primary hover:underline">economie sociale et solidaire</Link>{' '}
            qui beneficie a tous les participants.
          </p>

          <h2 className="section-heading">Quel role joue le pool solidaire comme filet de securite ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le pool solidaire COLHYBRI fonctionne comme un filet de securite economique local. 75% des abonnements sont mutualises et redistribues en bons d&apos;achat chez les commercants partenaires. Ce mecanisme cree un flux constant de valeur vers les commerces de proximite, renforçant le tissu economique local et creant des opportunites pour les populations fragiles.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La{' '}
            <Link href={`/${locale}/fintech-sociale`} className="text-colhybri-primary hover:underline">fintech sociale</Link>{' '}
            au service de la solidarite : la technologie (Stripe, Supabase) permet de reduire les couts operationnels a leur minimum, garantissant que la quasi-totalite des fonds arrive aux beneficiaires. Contrairement aux{' '}
            <Link href={`/${locale}/banque-ethique-alternative`} className="text-colhybri-primary hover:underline">banques ethiques</Link>{' '}
            qui financent des projets distants, COLHYBRI injecte la valeur directement dans le quartier de l&apos;abonne.
          </p>

          <h2 className="section-heading">Quel est l&apos;ecosysteme ONLYMORE pour l&apos;inclusion ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI est la premiere brique d&apos;un ecosysteme plus large. ONLYMORE Group, fonde par Florent Gibert, comprend cinq filiales complementaires. ONLYMORE FINANCE developpe des services financiers accessibles, dont le credit Lombard (agreration ACPR en cours), qui permettra aux membres de l&apos;ecosysteme d&apos;acceder a du credit garanti par des actifs numeriques. Cette vision globale place l&apos;inclusion financiere au coeur de chaque filiale.
          </p>

          <h2 className="section-heading">Quels sont les objectifs d&apos;accessibilite de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;objectif de COLHYBRI est d&apos;atteindre le seuil de rentabilite de 7 476 abonnes B2C, puis de s&apos;etendre ville par ville. Chaque ville forme un ecosysteme autonome ou le pool local beneficie exclusivement aux commercants locaux. La levee pre-seed de 200 000 a 350 000 euros permettra d&apos;accelerer le deploiement en Occitanie puis dans les grandes villes francaises.
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
          <h2 className="section-heading text-center mb-10">Explorer l&apos;inclusion financiere</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            <Link href={`/${locale}/pouvoir-achat-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Pouvoir d&apos;achat solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">3 euros/mois augmentent votre capacite d&apos;achat</p>
            </Link>
            <Link href={`/${locale}/fintech-sociale`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Fintech sociale</h3>
              <p className="text-sm text-colhybri-dark/60">La technologie au service de la solidarite</p>
            </Link>
            <Link href={`/${locale}/abonnement-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Abonnement solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">3 euros/mois pour changer votre quartier</p>
            </Link>
            <Link href={`/${locale}/banque-ethique-alternative`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Banque ethique et alternatives</h3>
              <p className="text-sm text-colhybri-dark/60">Completez votre engagement financier</p>
            </Link>
            <Link href={`/${locale}/economie-sociale-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Economie Sociale et Solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI, acteur de la nouvelle economie</p>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-lg font-bold text-colhybri-dark mb-4 text-center">Decouvrir les autres piliers</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/solidarite-proximite`} className="text-colhybri-primary hover:underline text-center">Solidarite de proximite</Link>
              <Link href={`/${locale}/commerce-local`} className="text-colhybri-primary hover:underline text-center">Commerce local</Link>
              <Link href={`/${locale}/technologie-impact-social`} className="text-colhybri-primary hover:underline text-center">Technologie et impact</Link>
              <Link href={getLocalizedPath('home', l)} className="text-colhybri-primary hover:underline text-center">Accueil COLHYBRI</Link>
            </div>
          </div>

          <div className="text-center">
            <a href="https://www.colhybri.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Rejoindre le mouvement
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
