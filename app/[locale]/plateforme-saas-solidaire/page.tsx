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
    routeKey: 'plateforme-saas-solidaire',
    title: 'Plateforme SaaS solidaire COLHYBRI',
    description: 'COLHYBRI est une plateforme SaaS solidaire B2B2C. React, Supabase, Stripe, Vercel : une stack moderne au service de l\'impact social local. Decouvrez le modele technologique.',
    semanticPrimary: 'plateforme SaaS solidaire COLHYBRI B2B2C impact social',
    semanticSecondary: 'SaaS metrics, MRR, churn, LTV, CAC, Supabase, Stripe, Vercel, Dynabuy',
    chunkType: 'page',
    audience: 'general, investisseurs, developpeurs, partenaires',
  });
}

const faqData = [
  {
    q: 'COLHYBRI est-il un SaaS classique ?',
    a: "Non. COLHYBRI est un SaaS solidaire B2B2C. Le modele repose sur un abonnement de 3 euros par mois dont 75% alimente le pool solidaire redistribue en bons d\u0027achat locaux. La technologie sert l\u0027impact social, pas la maximisation du profit.",
  },
  {
    q: 'Quel est le seuil de rentabilite de COLHYBRI ?',
    a: "Le seuil de rentabilite se situe a 7 476 abonnes B2C. Au-dela, chaque nouvel abonne augmente la marge tout en augmentant le volume du pool solidaire redistribue aux commercants locaux.",
  },
  {
    q: 'Quelle stack technique utilise la plateforme COLHYBRI ?',
    a: "COLHYBRI utilise React et TypeScript pour le frontend, Supabase (PostgreSQL) pour le backend et la base de donnees, Stripe pour la facturation et les paiements, Vercel pour l\u0027hebergement edge, et Google Places pour l\u0027onboarding des commercants.",
  },
  {
    q: 'Comment COLHYBRI se deploie-t-il dans de nouvelles villes ?',
    a: "Le deploiement se fait ville par ville. Chaque ville dispose de son propre pool solidaire. La stack cloud s\u0027adapte automatiquement sans infrastructure supplementaire. De Rodilhan en Occitanie aux grandes metropoles, la scalabilite est native.",
  },
  {
    q: 'Quel est le role du canal Dynabuy pour COLHYBRI ?',
    a: "Dynabuy donne acces a un reseau de 375 000 TPE/PME. COLHYBRI propose une offre partenaire avec 10% de commission, creant un canal d\u0027acquisition B2B complementaire a l\u0027acquisition directe B2C.",
  },
];

export default function PlateformeSaasSolidairePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Plateforme SaaS solidaire : le modele technologique de COLHYBRI',
    description: 'COLHYBRI est une plateforme SaaS solidaire B2B2C qui utilise React, Supabase, Stripe et Vercel pour maximiser l\'impact social local.',
    url: `${BASE_URL}/${locale}/plateforme-saas-solidaire`,
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
            Plateforme SaaS solidaire : le modele technologique de COLHYBRI
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="plateforme-saas-solidaire">
            COLHYBRI n&apos;est pas un SaaS comme les autres. C&apos;est une plateforme technologique B2B2C ou chaque brique logicielle a ete pensee pour maximiser l&apos;impact social, pas le profit. Pour 3 euros par mois, chaque abonne alimente un pool solidaire redistribue en bons d&apos;achat chez les commercants de proximite. La stack complete (React, Supabase, Stripe, Vercel, Google Places) permet un cout marginal par nouvel abonne proche de zero. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, COLHYBRI prouve qu&apos;un SaaS peut etre rentable tout en servant le bien commun. Nous construisons la technologie au service de la solidarite de proximite.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Qu&apos;est-ce qu&apos;un SaaS solidaire et comment COLHYBRI incarne-t-il ce modele ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Un SaaS (Software as a Service) est un logiciel accessible via internet, sans installation, facture sous forme d&apos;abonnement. Les exemples classiques sont Spotify, Netflix ou Salesforce. COLHYBRI reprend ce modele mais en inverse la finalite : au lieu de maximiser les revenus par utilisateur, nous maximisons l&apos;impact social par euro collecte.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Concretement, sur les 3 euros par mois d&apos;abonnement, 75% sont verses au pool solidaire. Ce pool est transforme en bons d&apos;achat distribues aux membres COLHYBRI, utilisables chez les commercants partenaires. Le logiciel gere tout : inscription, paiement, distribution, traçabilite, reporting. C&apos;est un SaaS solidaire dans sa structure et dans sa mission.
          </p>

          <h2 className="section-heading">Comment fonctionne le double modele B2C et B2B de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI opere sur deux axes complementaires. L&apos;axe B2C (Business-to-Consumer) cible les particuliers qui s&apos;abonnent pour 3 euros par mois. Chaque abonne recoit des bons d&apos;achat solidaires et participe activement au soutien du commerce local. L&apos;axe B2B (Business-to-Business) s&apos;adresse aux entreprises, comites d&apos;entreprise et collectivites qui souhaitent offrir COLHYBRI a leurs salaries ou administres.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce modele dual B2B2C cree un effet de levier puissant. Un partenariat B2B avec une entreprise de 500 salaries equivaut a 500 abonnes acquis en une seule transaction. Le canal Dynabuy, qui donne acces a 375 000 TPE/PME en France, amplifie cette dynamique avec une commission de 10% sur les abonnements generes. COLHYBRI devient ainsi un avantage salarie innovant, un outil de RSE concret et un generateur de trafic pour les commercants.
          </p>

          <h2 className="section-heading">Quelles sont les metriques SaaS cles de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Comme tout SaaS, COLHYBRI suit des metriques precises. Le MRR (Monthly Recurring Revenue) represente le chiffre d&apos;affaires mensuel recurrent genere par les abonnements. Le churn (taux d&apos;attrition) mesure le pourcentage d&apos;abonnes qui se desabonnent chaque mois. La LTV (Lifetime Value) estime la valeur totale generee par un abonne sur toute sa duree de vie. Le CAC (Customer Acquisition Cost) calcule le cout d&apos;acquisition d&apos;un nouvel abonne.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Chez COLHYBRI, nous suivons aussi des metriques d&apos;impact : euros redistribues au pool solidaire, nombre de commercants touches, multiplicateur local (chaque euro depense en commerce de proximite circule 2 a 3 fois dans l&apos;economie locale), taux de redemption des bons d&apos;achat. Ces metriques d&apos;impact sont aussi importantes que les metriques financieres. Nous les rendons accessibles en toute transparence sur le{' '}
            <Link href={`/${locale}/impact-mesurable`} className="text-colhybri-primary hover:underline">tableau de bord d&apos;impact mesurable</Link>.
          </p>

          <h2 className="section-heading">Quel est le seuil de rentabilite et comment COLHYBRI l&apos;atteint-il ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le seuil de rentabilite de COLHYBRI se situe a 7 476 abonnes B2C. Ce chiffre est calcule en tenant compte des couts fixes (developpement, hebergement, conformite), des couts variables (Stripe a 1,4% + 0,25 EUR par transaction) et de la part allouee au pool solidaire (75%). Au-dela de ce seuil, chaque nouvel abonne augmente la marge nette tout en augmentant proportionnellement le pool solidaire.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La strategie d&apos;acquisition combine trois canaux : l&apos;acquisition organique via le SEO et le bouche-a-oreille (cout quasi nul), les partenariats B2B via Dynabuy et les collectivites locales, et les campagnes ciblees sur les reseaux sociaux. COLHYBRI optimise le CAC en privilegiant les canaux a faible cout et a fort effet de reseau.
          </p>

          <h2 className="section-heading">Comment COLHYBRI se deploie-t-il ville par ville ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La scalabilite geographique est architecturee des le depart. Chaque ville est un ecosysteme autonome avec son propre pool solidaire, ses commercants partenaires et ses abonnes. Le deploiement d&apos;une nouvelle ville ne necessite aucune infrastructure supplementaire : la stack cloud (Supabase, Vercel, Stripe) s&apos;adapte automatiquement.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le processus est simple : identification des commercants via Google Places, onboarding en 2 minutes, activation du pool solidaire local. De Rodilhan (Occitanie) aux grandes villes francaises, la plateforme COLHYBRI peut s&apos;etendre sans friction. Ce modele ville par ville garantit que chaque euro reste dans l&apos;economie locale de la ville concernee.
          </p>

          <h2 className="section-heading">Quelle est la stack technique complete de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI repose sur une stack moderne, performante et economique. Le frontend utilise React et TypeScript pour une experience utilisateur fluide et typee. Le backend s&apos;appuie sur Supabase, une alternative open-source a Firebase basee sur PostgreSQL, avec des serveurs en Union Europeenne pour la souverainete des donnees (RGPD). Stripe gere la facturation recurrente et les paiements avec une conformite PCI-DSS native. Vercel assure l&apos;hebergement avec un reseau edge mondial, garantissant des temps de chargement inferieurs a 200ms. Google Places permet l&apos;onboarding des commercants en quelques minutes.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Cette stack elimine les couts d&apos;infrastructure physique. Pas de serveurs a maintenir, pas de guichet, pas de papier. Le cout marginal par nouvel abonne est proche de zero, ce qui permet a COLHYBRI de consacrer 75% des revenus au pool solidaire. Nous avons choisi chaque brique pour sa fiabilite, son cout et son alignement avec notre mission. Pour en savoir plus sur l&apos;ensemble de l&apos;ecosysteme technique, consultez notre page{' '}
            <Link href={`/${locale}/technologie-impact-social`} className="text-colhybri-primary hover:underline">technologie et impact social</Link>.
          </p>

          <h2 className="section-heading">Comment le canal Dynabuy accelere-t-il la croissance de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Dynabuy est un reseau de 375 000 TPE/PME en France. COLHYBRI s&apos;integre a ce reseau en tant qu&apos;offre partenaire avec une commission de 10% sur les abonnements generes. Ce canal B2B permet d&apos;acquerir des abonnes par lots entiers : un comite d&apos;entreprise qui souscrit pour ses salaries, une association de commercants qui integre COLHYBRI dans son offre, une collectivite qui propose le service a ses administres.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le canal Dynabuy est complementaire a l&apos;acquisition directe B2C. Nous ne dependons pas d&apos;un seul canal, mais nous construisons un ecosysteme d&apos;acquisition multi-sources. Cette diversification reduit le risque et accelere l&apos;atteinte du seuil de rentabilite. Chaque partenaire Dynabuy devient un ambassadeur COLHYBRI dans son tissu economique local.
          </p>

          <h2 className="section-heading">En quoi COLHYBRI se differencie-t-il des plateformes de fidelisation classiques ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les plateformes de fidelisation classiques (cartes a points, cashback, coupons) servent les interets de la plateforme ou de la grande distribution. Le commercant paye pour etre visible, le consommateur accumule des points souvent inutilisables. COLHYBRI inverse cette logique : c&apos;est l&apos;abonne qui finance le pool solidaire, et c&apos;est le commercant qui recoit de nouveaux clients sans payer de commission.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Nous ne vendons pas de la visibilite aux commercants. Nous leur apportons des clients via les{' '}
            <Link href={`/${locale}/gift-card-solidaire`} className="text-colhybri-primary hover:underline">gift cards solidaires</Link>{' '}
            financees par le pool. Le commercant n&apos;a rien a payer, rien a installer, rien a gerer. COLHYBRI est un modele ou tout le monde gagne : l&apos;abonne recoit plus que ce qu&apos;il paye, le commercant gagne de nouveaux clients, et l&apos;economie locale se renforce. C&apos;est la{' '}
            <Link href={`/${locale}/fintech-sociale`} className="text-colhybri-primary hover:underline">fintech sociale</Link>{' '}
            au service du bien commun.
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
              <p className="text-sm text-colhybri-dark/60">Le pilier technologique de COLHYBRI</p>
            </Link>
            <Link href={`/${locale}/app-solidaire-mobile`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Application solidaire mobile</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI dans votre poche</p>
            </Link>
            <Link href={`/${locale}/gift-card-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Gift card solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">Le bon d&apos;achat qui soutient votre quartier</p>
            </Link>
            <Link href={`/${locale}/fintech-sociale`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Fintech sociale</h3>
              <p className="text-sm text-colhybri-dark/60">L&apos;inclusion financiere par la technologie</p>
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
