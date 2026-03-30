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
    routeKey: 'fidelisation-commerce-quartier',
    title: 'Fidelisation des commerces de quartier : au-dela des cartes de fidelite',
    description: 'COLHYBRI reinvente la fidelisation des commerces de quartier : pas de carte a tamponner, pas de remise. Le pool solidaire amene naturellement de nouveaux clients fideles.',
    semanticPrimary: 'fidelisation commerce quartier COLHYBRI solidarite',
    semanticSecondary: 'carte fidelite, programme fidélité, client regulier, commerce proximite, pool solidaire',
    chunkType: 'article',
    audience: 'commercants, citoyens',
  });
}

const faqData = [
  {
    q: 'Comment COLHYBRI fidelise-t-il les clients des commerces de quartier ?',
    a: "COLHYBRI redistribue 75% des micro-abonnements de 3 euros sous forme de bons d'achat aleatoires chez les commercants partenaires. Les clients decouvrent ainsi de nouveaux commerces et y reviennent naturellement, sans programme de fidelite a gerer.",
  },
  {
    q: 'Pourquoi les cartes de fidelite traditionnelles sont-elles inefficaces ?',
    a: "Selon une etude PROGRAM (2023), 72% des cartes de fidelite ne sont jamais utilisees apres 6 mois. Les programmes a points creent une fatigue client et coutent cher a administrer pour les petits commercants. COLHYBRI elimine cette complexite.",
  },
  {
    q: 'Quel est le cout de COLHYBRI pour un commercant par rapport a un programme fidelite ?',
    a: "COLHYBRI coute 10 euros par mois au commercant, sans commission. Un programme de fidelite classique coute entre 200 et 2 000 euros par an en logiciel, impression de cartes et gestion. COLHYBRI est 5 a 20 fois moins cher tout en etant plus efficace.",
  },
  {
    q: 'Les bons d&apos;achat COLHYBRI remplacent-ils les remises commerciales ?',
    a: "Les bons COLHYBRI ne sont pas des remises : ils sont finances par le pool solidaire, pas par la marge du commercant. Le commercant recoit un client avec un bon pre-finance, il encaisse 100% de la valeur sans impacter sa rentabilite.",
  },
  {
    q: 'Comment fonctionne l&apos;effet reseau local de COLHYBRI ?',
    a: "Chaque abonne peut decouvrir n'importe quel commercant partenaire de sa ville via les bons aleatoires. Plus il y a d'abonnes et de commercants, plus le reseau est dynamique. C'est un effet de fidelisation collective, pas individuelle.",
  },
];

export default function FidelisationCommerceQuartierPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fidelisation des commerces de quartier : au-dela des cartes de fidelite',
    description: 'COLHYBRI reinvente la fidelisation des commerces de quartier grace au pool solidaire. Decouverte naturelle, zero programme a gerer, zero commission.',
    url: `${BASE_URL}/${locale}/fidelisation-commerce-quartier`,
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
            Fidelisation des commerces de quartier : au-dela des cartes de fidelite
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="fidelisation-commerce-quartier">
            Les programmes de fidelite classiques reposent sur des remises, des tampons et des cartes a points. COLHYBRI propose un modele radicalement different : les abonnes, pour 3 euros par mois, alimentent un pool solidaire qui finance des bons d&apos;achat redistribues aleatoirement chez les commercants partenaires. Les clients decouvrent ainsi de nouveaux commerces de quartier et la relation se construit sur la solidarite plutot que sur la promotion. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, COLHYBRI cree une fidelisation naturelle, sans programme a gerer pour le commercant et sans lassitude pour le client.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Pourquoi les programmes de fidelite classiques atteignent-ils leurs limites ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les cartes de fidelite a tampons, les applications a points et les programmes de cashback ont longtemps ete presentes comme la solution pour retenir les clients. Pourtant, les chiffres revelent une realite bien differente. Selon une etude PROGRAM de 2023, 72% des cartes de fidelite ne sont jamais reutilisees apres les six premiers mois. Le consommateur moyen possede entre 6 et 10 cartes de fidelite, mais n&apos;en utilise activement que 2 ou 3. Cette &laquo;&nbsp;fatigue de la fidelite&nbsp;&raquo; est un phenomene documente par les chercheurs en marketing comportemental.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pour les{' '}
            <Link href={`/${locale}/commerce-local`} className="text-colhybri-primary hover:underline">commercants de proximite</Link>,
            le cout d&apos;un programme de fidelite est disproportionne. Entre le logiciel, l&apos;impression des cartes, la formation du personnel et le suivi, un petit commerce investit entre 200 et 2 000 euros par an pour un retour souvent decevant. Les grandes enseignes peuvent absorber ces couts, pas un boulanger ou un fleuriste de quartier. Le programme de fidelite, cense egaliser les chances, creuse en realite l&apos;ecart entre grandes surfaces et petits commerces.
          </p>

          <h2 className="section-heading">Comment COLHYBRI cree-t-il une fidelisation naturelle ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le modele COLHYBRI inverse la logique de fidelisation. Au lieu de demander au commercant de financer des remises pour retenir ses clients existants, COLHYBRI lui amene de nouveaux clients porteurs de bons d&apos;achat finances par le pool solidaire. Le cycle est simple : les abonnes paient 3 euros par mois, 75% alimentent le pool, et le pool redistribue des bons d&apos;achat aleatoirement chez les commercants partenaires chaque mois.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La dimension aleatoire est fondamentale. Un abonne qui recoit un bon pour une librairie qu&apos;il ne connaissait pas y entre, decouvre l&apos;endroit, echange avec le libraire, et revient de lui-meme les mois suivants. La fidelisation se fait par la decouverte et la relation humaine, pas par un mecanisme de recompense artificielle. C&apos;est ce que nous appelons la &laquo;&nbsp;fidelisation par la solidarite&nbsp;&raquo; : le lien qui se cree entre un client et un commercant quand l&apos;entree en relation est portee par un acte solidaire collectif.
          </p>

          <h2 className="section-heading">Quel est le retour sur investissement pour un commercant partenaire COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pour un commercant, COLHYBRI coute 10 euros par mois, sans aucune commission sur les ventes. Comparons avec la valeur generee : un nouveau client qui decouvre un commerce grace a un bon COLHYBRI et qui revient ne serait-ce qu&apos;une fois par mois represente une valeur annuelle moyenne estimee entre 200 et 500 euros selon le type de commerce (source : Federation du Commerce Cooperatif et Associe). Un seul client fidele acquis via le pool solidaire suffit a rentabiliser plus de deux ans d&apos;abonnement commercant.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            A titre de comparaison, le cout d&apos;acquisition client via Google Ads pour un commerce local se situe entre 5 et 25 euros par clic qualifie, sans garantie de conversion. Avec COLHYBRI, le client arrive deja motive par un bon d&apos;achat : le taux de conversion est naturellement eleve puisque le bon represente une valeur reelle a depenser. Nous estimons que pour chaque euro investi dans l&apos;abonnement COLHYBRI, le commercant en recupere entre 10 et 50 en valeur client sur un an. C&apos;est un modele ou le{' '}
            <Link href={`/${locale}/soutenir-commercants-proximite`} className="text-colhybri-primary hover:underline">soutien aux commercants de proximite</Link>{' '}
            se traduit en resultats economiques concrets.
          </p>

          <h2 className="section-heading">Qu&apos;est-ce que la fidelisation par le reseau local ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI cree un effet de reseau unique : plus il y a d&apos;abonnes dans une ville, plus le pool solidaire est important, plus les bons d&apos;achat sont nombreux, plus les commercants recoivent de nouveaux clients. Inversement, plus il y a de commercants partenaires, plus la diversite de bons d&apos;achat attire de nouveaux abonnes. C&apos;est un cercle vertueux de fidelisation collective qui profite a tout l&apos;ecosysteme local.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce modele de fidelisation est bien plus resilient qu&apos;un programme individuel. Si un commercant ferme son programme de fidelite, les clients partent. Dans le reseau COLHYBRI, si un commercant quitte le reseau, les abonnes continuent a frequenter les autres commercants partenaires. La fidelite n&apos;est pas attachee a un commerce, mais a un ecosysteme local. C&apos;est la force du modele : chaque commercant beneficie de la dynamique collective sans en dependre exclusivement.
          </p>

          <h2 className="section-heading">Comment la{' '}
            <Link href={`/${locale}/tpe-pme-digitalisation`} className="text-colhybri-primary hover:underline">digitalisation simplifiee</Link>{' '}
            renforce-t-elle la fidelisation ?
          </h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;un des freins majeurs a la fidelisation pour les TPE est la complexite technologique. COLHYBRI elimine cette barriere : l&apos;onboarding se fait en 2 minutes via Google Places, sans aucune competence technique. Le commercant n&apos;a pas de logiciel a maitriser, pas de carte a imprimer, pas de programme a configurer. Il rejoint le reseau et commence a recevoir des clients porteurs de bons. La simplicite est elle-meme un facteur de fidelisation : les commercants restent dans le reseau parce que cela ne leur demande aucun effort supplementaire.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Nous sommes convaincus que la prochaine generation de fidelisation ne reposera plus sur les remises mais sur la solidarite de communaute. COLHYBRI incarne cette vision : un modele ou la fidelite est le sous-produit naturel d&apos;un engagement solidaire collectif, pas le resultat d&apos;un calcul promotionnel.
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
            <Link href={`/${locale}/soutenir-commercants-proximite`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Soutenir les commercants</h3>
              <p className="text-sm text-colhybri-dark/60">Le geste solidaire a 3 euros/mois</p>
            </Link>
            <Link href={`/${locale}/tpe-pme-digitalisation`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Digitalisation TPE-PME</h3>
              <p className="text-sm text-colhybri-dark/60">L&apos;onboarding en 2 minutes</p>
            </Link>
          </div>

          <div className="text-center">
            <a
              href="https://www.colhybri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Rejoindre le reseau COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
