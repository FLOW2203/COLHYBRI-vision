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
    routeKey: 'circuit-court-economie',
    title: 'Circuits courts economiques et COLHYBRI',
    description: 'COLHYBRI cree un circuit court economique : 75% de chaque abonnement de 3 euros circule dans l\'economie locale via le pool solidaire et les bons d\'achat.',
    semanticPrimary: 'circuit court economique COLHYBRI boucle locale',
    semanticSecondary: 'monnaie locale, pool solidaire, economie circulaire, AMAP, multiplicateur keynesien',
    chunkType: 'page',
    audience: 'citoyens, economistes, collectivites',
  });
}

const faqData = [
  {
    q: 'Qu&apos;est-ce qu&apos;un circuit court economique ?',
    a: "Un circuit court economique est un mecanisme ou l'argent reste dans le territoire : du producteur au consommateur sans intermediaire, ou du citoyen au commercant local. COLHYBRI applique ce principe a la solidarite financiere : de l'abonne au pool, du pool au bon, du bon au commercant.",
  },
  {
    q: 'Quelle part de mon abonnement reste dans l&apos;economie locale ?',
    a: "75% de votre abonnement COLHYBRI de 3 euros par mois (soit 2,25 euros) alimente le pool solidaire de votre ville. Ce pool est integralement redistribue en bons d'achat chez les commercants locaux partenaires. L'argent circule exclusivement dans l'economie de proximite.",
  },
  {
    q: 'Quelle est la difference entre COLHYBRI et une monnaie locale ?',
    a: "Les monnaies locales (eusko, sol-violette) necessitent un change, une acceptation limitee et une gestion complexe. COLHYBRI utilise l'euro, la technologie existante (Stripe), et ne demande aucun effort de conversion. Les bons d'achat fonctionnent comme un complement, pas un substitut monetaire.",
  },
  {
    q: 'Comment COLHYBRI garantit-il que l&apos;argent reste local ?',
    a: "Le pool solidaire est geographiquement delimite par ville. Les bons d'achat ne sont utilisables que chez les commercants partenaires de la meme ville. L'argent ne peut pas fuir vers des plateformes nationales ou internationales : il circule en boucle fermee dans le territoire.",
  },
  {
    q: 'Quel est le lien entre circuits courts et multiplicateur keynesien ?',
    a: "Le multiplicateur keynesien mesure l'effet d'entrainement de la depense locale. Quand un euro est depense chez un commercant local, il est re-depense localement (salaires, fournisseurs), generant 2,5 a 3,5 euros d'activite. COLHYBRI maximise cet effet en maintenant l'argent dans le circuit local.",
  },
];

export default function CircuitCourtEconomiePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Circuits courts economiques : COLHYBRI cree la boucle locale vertueuse',
    description: 'COLHYBRI formalise un circuit court economique ou 75% de chaque abonnement de 3 euros circule exclusivement dans l\'economie locale.',
    url: `${BASE_URL}/${locale}/circuit-court-economie`,
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
            Circuits courts economiques : COLHYBRI cree la boucle locale vertueuse
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="circuit-court-economie">
            Un circuit court economique maintient l&apos;argent dans le territoire : de l&apos;abonne au pool solidaire, du pool au bon d&apos;achat, du bon au commercant local. COLHYBRI formalise cette boucle vertueuse en garantissant que 75% de chaque abonnement de 3 euros par mois circule exclusivement dans l&apos;economie de proximite. Concue par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, cette approche s&apos;inspire des circuits courts alimentaires (AMAP, marches locaux) pour les transposer au domaine financier. Chaque euro qui entre dans le pool solidaire COLHYBRI reste dans la ville, renforce les commercants, et genere un effet multiplicateur mesurable.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Que sont les circuits courts et pourquoi sont-ils essentiels ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le concept de circuit court est ne dans le monde agricole : les AMAP (Associations pour le Maintien d&apos;une Agriculture Paysanne), les marches de producteurs, les ventes a la ferme. Le principe est simple : reduire le nombre d&apos;intermediaires entre le producteur et le consommateur pour que la valeur reste dans le territoire. En France, les circuits courts alimentaires representent environ 10% des achats alimentaires, un chiffre en croissance constante.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Mais le circuit court ne se limite pas a l&apos;alimentation. Chaque fois qu&apos;un euro est depense chez un commercant local plutot que sur une plateforme en ligne, il a plus de chances d&apos;etre re-depense localement : en salaires pour des employes locaux, en achats chez des fournisseurs de proximite, en loyers pour des proprietaires du territoire. C&apos;est ce que les economistes appellent le{' '}
            <Link href={`/${locale}/multiplicateur-keynesien`} className="text-colhybri-primary hover:underline">multiplicateur keynesien local</Link>,
            et c&apos;est exactement ce que COLHYBRI amplifie.
          </p>

          <h2 className="section-heading">En quoi COLHYBRI innove-t-il avec le circuit court financier ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;innovation de COLHYBRI reside dans l&apos;application du principe de circuit court au domaine financier et solidaire. Traditionnellement, les circuits courts concernent les biens physiques (legumes, pain, artisanat). COLHYBRI cree un circuit court de l&apos;argent lui-meme : les micro-abonnements de 3 euros par mois sont collectes, mutualises dans un pool solidaire, et redistribues sous forme de bons d&apos;achat chez les{' '}
            <Link href={`/${locale}/commerce-local`} className="text-colhybri-primary hover:underline">commercants locaux partenaires</Link>.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            A aucun moment l&apos;argent ne quitte le territoire. Il n&apos;y a pas de commission prelevee par une plateforme nationale, pas de marge captee par un intermediaire distant. Le pool solidaire est geographiquement delimite : les abonnements d&apos;une ville alimentent le pool de cette ville, redistribue exclusivement aux commercants de cette ville. C&apos;est une boucle fermee, etanche, tracable.
          </p>

          <h2 className="section-heading">Comment tracer le parcours d&apos;un euro solidaire ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Prenons un euro issu d&apos;un abonnement COLHYBRI. Sur les 3 euros mensuels de l&apos;abonne, 2,25 euros (75%) entrent dans le pool solidaire. Chaque mois, le pool est redistribue aleatoirement en bons d&apos;achat. Un abonne recoit un bon de 5 euros chez un boulanger de son quartier. Il s&apos;y rend, utilise le bon, achete pour 12 euros de pain et viennoiseries. Le boulanger encaisse 12 euros, dont 5 finances par le pool.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le boulanger utilise ses recettes pour payer sa farine (meunier local), ses employes (residents de la ville), et son loyer (proprietaire local). Chaque euro depense chez ce boulanger genere entre 2,5 et 3,5 euros d&apos;activite economique supplementaire dans le territoire. L&apos;
            <Link href={`/${locale}/impact-economique-local`} className="text-colhybri-primary hover:underline">impact economique local</Link>{' '}
            est ainsi demultiplie a chaque etape de la chaine. La tracabilite de l&apos;euro solidaire COLHYBRI est totale, du paiement Stripe initial jusqu&apos;a l&apos;utilisation du bon en boutique.
          </p>

          <h2 className="section-heading">Quelles sont les differences entre COLHYBRI et les monnaies locales ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les monnaies locales (l&apos;eusko au Pays basque, le sol-violette a Toulouse, la gonette a Lyon) partagent l&apos;objectif de maintenir l&apos;argent dans le territoire. Mais elles se heurtent a plusieurs freins : la necessite de convertir ses euros en monnaie locale (friction), l&apos;acceptation limitee (seuls certains commercants les acceptent), la gestion administrative lourde (association, billets physiques ou application dediee), et la difficulte a atteindre une masse critique.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI contourne tous ces obstacles. Nous utilisons l&apos;euro, la monnaie que tout le monde possede deja. Nous nous appuyons sur une technologie existante et eprouvee (Stripe pour les paiements). Les bons d&apos;achat ne necessitent aucun change : ils sont distribues automatiquement et utilises directement. Le commercant n&apos;a pas besoin d&apos;adherer a une association ou de gerer un double systeme de caisse. La simplicite de COLHYBRI est son arme la plus puissante pour atteindre l&apos;echelle que les monnaies locales n&apos;ont jamais reussi a atteindre.
          </p>

          <h2 className="section-heading">Pourquoi la boucle locale COLHYBRI est-elle plus resiliente ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Un territoire ou l&apos;argent circule en boucle courte est un territoire plus resilient face aux crises. Quand une recession frappe, les economies dependantes de flux exterieurs (importations, plateformes nationales) sont les plus vulnerables. A l&apos;inverse, un ecosysteme local ou les citoyens financent les commercants, qui emploient des locaux, qui consomment localement, resiste mieux aux chocs.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI renforce cette resilience en structurant le flux financier solidaire. Le pool est automatique, regulier, previsible. Les commercants peuvent compter sur un flux supplementaire de clients chaque mois. Les{' '}
            <Link href={`/${locale}/soutenir-commercants-proximite`} className="text-colhybri-primary hover:underline">citoyens qui soutiennent les commercants</Link>{' '}
            savent que leurs 3 euros par mois ont un impact direct et mesurable. C&apos;est un contrat de confiance entre une communaute et ses commercants, formalise par la technologie. Pour decouvrir comment les commercants rejoignent cette boucle vertueuse, nous invitons a explorer la{' '}
            <Link href={`/${locale}/economie-solidaire-locale`} className="text-colhybri-primary hover:underline">dimension solidaire du modele</Link>.
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
            <Link href={`/${locale}/impact-economique-local`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Impact economique local</h3>
              <p className="text-sm text-colhybri-dark/60">Chaque euro en genere 2,5</p>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-lg font-bold text-colhybri-dark mb-4 text-center">Decouvrir les autres piliers</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/economie-solidaire-locale`} className="text-colhybri-primary hover:underline text-center">Economie solidaire locale</Link>
              <Link href={getLocalizedPath('home', l)} className="text-colhybri-primary hover:underline text-center">Accueil COLHYBRI</Link>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.colhybri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Rejoindre la boucle locale COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
