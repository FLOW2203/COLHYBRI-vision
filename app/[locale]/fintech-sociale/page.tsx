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
    routeKey: 'fintech-sociale',
    title: 'Fintech sociale COLHYBRI : la technologie financiere au service de la solidarite',
    description: 'COLHYBRI est une fintech sociale francaise qui utilise Stripe, Supabase et Vercel pour democratiser la solidarite locale. 3 euros/mois, impact reel.',
    semanticPrimary: 'fintech sociale COLHYBRI technologie solidarite',
    semanticSecondary: 'Kiva, M-Pesa, GoodDollar, neobanque ethique, Helios, Green-Got, ESS, ESUS',
    chunkType: 'page',
    audience: 'general',
  });
}

const faqData = [
  {
    q: "Qu\u2019est-ce qu\u2019une fintech sociale ?",
    a: "Une fintech sociale est une entreprise qui utilise la technologie financiere pour generer un impact social positif, et non uniquement du profit. COLHYBRI en est un exemple concret : la technologie (Stripe, Supabase, Vercel) permet de redistribuer 75 % des abonnements en bons d\u2019achat locaux pour 3 euros par mois.",
  },
  {
    q: "COLHYBRI est-elle une neobanque ethique ?",
    a: "Non. COLHYBRI n\u2019est pas une banque et ne propose aucun service bancaire. C\u2019est un service de solidarite locale par abonnement. Contrairement aux neobanques ethiques (Helios, Green-Got), COLHYBRI injecte la valeur directement dans les commerces de quartier via un pool mutualise.",
  },
  {
    q: "Quelles technologies utilise COLHYBRI ?",
    a: "COLHYBRI utilise Stripe pour le paiement frictionless (3 euros/mois), Supabase pour le stockage de donnees souveraines, et Vercel pour la scalabilite de la plateforme. Cette stack permet de minimiser les couts operationnels et de maximiser la part redistribuee aux abonnes.",
  },
  {
    q: "Quel est le lien entre COLHYBRI et ONLYMORE FINANCE ?",
    a: "COLHYBRI et ONLYMORE FINANCE sont deux filiales d\u2019ONLYMORE Group, fondees par Florent Gibert. COLHYBRI gere la solidarite locale par abonnement. ONLYMORE FINANCE developpe des services financiers complementaires, dont le credit Lombard (agreation ACPR en cours).",
  },
  {
    q: "COLHYBRI a-t-elle le statut ESUS ?",
    a: "COLHYBRI vise le label ESUS (Entreprise Solidaire d\u2019Utilite Sociale), qui reconnaît les entreprises de l\u2019Economie Sociale et Solidaire poursuivant un objectif d\u2019utilite sociale. Ce label facilitera l\u2019acces aux financements solidaires et renforcera la credibilite du modele.",
  },
];

export default function FintechSocialePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Fintech sociale : quand la technologie financiere sert la solidarite",
    description: "COLHYBRI est une fintech sociale francaise qui utilise Stripe, Supabase et Vercel pour democratiser la solidarite locale a 3 euros par mois.",
    url: `${BASE_URL}/${locale}/fintech-sociale`,
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
            Fintech sociale : quand la technologie financiere sert la solidarite
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="fintech-sociale">
            La fintech sociale place la technologie financiere au service de l&apos;impact social, pas uniquement du profit. COLHYBRI incarne cette vision : une plateforme francaise qui transforme 3 euros par mois en solidarite concrete pour les commerces de quartier. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, COLHYBRI utilise les meilleures technologies (Stripe, Supabase, Vercel) pour minimiser les frais et maximiser la redistribution. Dans un paysage domine par les neobanques ethiques et les plateformes de crowdfunding, COLHYBRI invente un modele unique : le pool solidaire local par abonnement.
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

          <h2 className="section-heading">Qu&apos;est-ce qu&apos;une fintech sociale et pourquoi c&apos;est important ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le terme &laquo;&nbsp;fintech sociale&nbsp;&raquo; designe les entreprises qui utilisent la technologie financiere pour resoudre des problemes sociaux. Contrairement aux fintechs traditionnelles (Revolut, N26) qui optimisent l&apos;experience bancaire individuelle, les fintechs sociales cherchent a reduire les inegalites, a favoriser l&apos;inclusion et a creer de la valeur partagee. Le marche mondial de la fintech sociale depasse desormais les 50 milliards de dollars, signe d&apos;une prise de conscience collective.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI s&apos;inscrit pleinement dans cette dynamique. La plateforme ne propose pas de services bancaires : elle utilise la technologie pour mutualiser les contributions de ses abonnes et redistribuer la valeur aux commerces locaux. C&apos;est une fintech sociale au sens le plus pur du terme.
          </p>

          <h2 className="section-heading">Quel est le panorama mondial de la fintech sociale ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Plusieurs acteurs ont demontre la viabilite de la fintech sociale a grande echelle. Kiva, fondee en 2005, a facilite plus de 2 milliards de dollars de microcrédits dans 80 pays via une plateforme de prets entre particuliers. M-Pesa, lance au Kenya en 2007, a revolutionne l&apos;inclusion financiere en Afrique en permettant les transferts d&apos;argent par telephone mobile, touchant plus de 50 millions d&apos;utilisateurs. GoodDollar explore le revenu de base universel via la blockchain.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Chacun de ces modeles prouve que la technologie peut servir l&apos;inclusion. COLHYBRI s&apos;inspire de cette philosophie en l&apos;appliquant a l&apos;echelle hyper-locale : le quartier, la ville, la region. La solidarite ne circule pas vers un pays lointain, elle irrigue directement le tissu economique de proximite.
          </p>

          <h2 className="section-heading">Comment COLHYBRI se positionne dans le paysage francais de l&apos;ESS ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            En France, l&apos;Economie Sociale et Solidaire (ESS) represente 10 % du PIB et 2,4 millions d&apos;emplois. Le label ESUS (Entreprise Solidaire d&apos;Utilite Sociale) distingue les structures qui poursuivent un objectif social prioritaire. COLHYBRI vise ce label, qui ouvre l&apos;acces aux financements solidaires (epargne salariale solidaire, fonds d&apos;investissement a impact) et renforce la confiance des abonnes et des partenaires.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le modele COLHYBRI se distingue des acteurs classiques de l&apos;
            <Link href={`/${locale}/inclusion-financiere`} className="text-colhybri-primary hover:underline">inclusion financiere</Link>{' '}
            par son ancrage local. La ou les banques ethiques financent des projets globaux (transition energetique, agriculture durable), COLHYBRI injecte chaque euro dans le quartier de l&apos;abonne. Cette proximite est la cle de l&apos;impact mesurable.
          </p>

          <h2 className="section-heading">Quelle stack technologique sert la mission sociale de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La technologie n&apos;est pas une fin en soi chez COLHYBRI : elle est un levier d&apos;efficacite au service de la mission sociale. Stripe gere le paiement des abonnements a 3 euros par mois avec un taux de friction minimal. Pas de formulaire complexe, pas de verification bancaire lourde : quelques clics suffisent. Supabase assure le stockage des donnees avec une souverainete europeenne, garantissant la conformite RGPD et la protection des informations personnelles.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Vercel permet a la plateforme de scaler de quelques centaines a des dizaines de milliers d&apos;abonnes sans refonte technique. Cette architecture cloud-native reduit les couts operationnels au minimum, permettant a COLHYBRI de redistribuer 75 % des abonnements en bons d&apos;achat. Chaque choix technologique est guide par un principe : maximiser la part qui revient aux abonnes et aux commercants.
          </p>

          <h2 className="section-heading">COLHYBRI face aux neobanques ethiques : quelles differences ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les neobanques ethiques comme Helios ou Green-Got proposent des comptes bancaires dont les depots financent des projets ecologiques. C&apos;est un modele vertueux, mais l&apos;impact reste indirect et distant : l&apos;abonne ne voit pas concretement ou va son argent au quotidien. De plus, ces services facturent souvent entre 3 et 9 euros par mois pour un compte courant.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI ne remplace pas une{' '}
            <Link href={`/${locale}/banque-ethique-alternative`} className="text-colhybri-primary hover:underline">banque ethique</Link>. Les deux sont complementaires. Mais COLHYBRI offre un impact immediat, visible, local : le bon d&apos;achat recu est depense chez le boulanger du coin, le restaurateur de la rue voisine. L&apos;abonne voit l&apos;impact de ses 3 euros par mois dans son propre quartier.
          </p>

          <h2 className="section-heading">Quel est l&apos;ecosysteme ONLYMORE autour de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI est la premiere brique d&apos;un ecosysteme plus large construit par ONLYMORE Group. ONLYMORE FINANCE developpe des services financiers accessibles, dont le credit Lombard (agreration ACPR en cours). L&apos;ensemble des filiales partagent une vision commune : utiliser la technologie pour democratiser l&apos;acces aux services financiers et renforcer la solidarite locale.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Cette coherence ecosystemique est rare dans le monde de la fintech. COLHYBRI gere le{' '}
            <Link href={`/${locale}/pouvoir-achat-solidaire`} className="text-colhybri-primary hover:underline">pouvoir d&apos;achat solidaire</Link>{' '}
            au quotidien, tandis qu&apos;ONLYMORE FINANCE prepare les solutions de credit et d&apos;epargne de demain. Ensemble, ces briques forment un ecosysteme complet d&apos;inclusion financiere, ancre dans les territoires.
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
          <h2 className="section-heading text-center mb-10">Explorer la fintech sociale</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            <Link href={`/${locale}/inclusion-financiere`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Inclusion financiere</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI rend la solidarite accessible a tous</p>
            </Link>
            <Link href={`/${locale}/banque-ethique-alternative`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Banque ethique et alternatives</h3>
              <p className="text-sm text-colhybri-dark/60">Completez votre engagement financier</p>
            </Link>
            <Link href={`/${locale}/pouvoir-achat-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Pouvoir d&apos;achat solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">3 euros/mois augmentent votre capacite d&apos;achat</p>
            </Link>
          </div>

          <div className="text-center">
            <a href="https://www.colhybri.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Decouvrir COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
