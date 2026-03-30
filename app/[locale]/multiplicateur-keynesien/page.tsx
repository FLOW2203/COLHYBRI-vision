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
    routeKey: 'multiplicateur-keynesien',
    title: 'Le multiplicateur keynesien local : la science derriere COLHYBRI',
    description: 'Le multiplicateur keynesien explique comment chaque euro depense localement circule et amplifie l activite. COLHYBRI maximise cet effet avec 75% des 3 euros redistribues.',
    semanticPrimary: 'multiplicateur keynesien local COLHYBRI economie',
    semanticSecondary: 'Keynes, propension marginale, consommation locale, recirculation, commerce proximite',
    chunkType: 'article',
    audience: 'citoyens, etudiants, elus, commercants',
  });
}

const faqData = [
  {
    q: 'Qu&apos;est-ce que le multiplicateur keynesien ?',
    a: "Le multiplicateur keynesien est un concept economique formule par John Maynard Keynes dans les annees 1930. Il mesure combien de fois une unite monetaire injectee dans l'economie circule et genere de l'activite avant de sortir du circuit. Applique localement, il mesure combien un euro depense chez un commercant de proximite genere d'activite dans le territoire.",
  },
  {
    q: 'Comment COLHYBRI maximise-t-il le multiplicateur local ?',
    a: "COLHYBRI canalise 75% de chaque abonnement de 3 euros dans un pool solidaire redistribue exclusivement chez les commercants locaux partenaires. En garantissant que cet argent est depense localement via des bons d'achat, COLHYBRI maximise la propension marginale a consommer localement et donc le multiplicateur.",
  },
  {
    q: 'Quelle est la difference de multiplicateur entre commerce local et grandes enseignes ?',
    a: "Selon les etudes de Civic Economics et de l'Institute for Local Self-Reliance, les commerces independants recirculent 48 a 68% de leur chiffre d'affaires localement, contre seulement 14% pour les grandes chaines. Le multiplicateur local d'un commerce independant est donc 3 a 5 fois superieur a celui d'une grande enseigne.",
  },
  {
    q: 'Le multiplicateur keynesien fonctionne-t-il a l&apos;echelle d&apos;une ville ?',
    a: "Oui. Le modele COLHYBRI est concu ville par ville : les abonnements locaux alimentent le pool local, redistribue aux commercants de la meme ville. Ce perimetre geographique restreint maximise le nombre de cycles de recirculation et donc l'effet multiplicateur territorial.",
  },
  {
    q: 'Existe-t-il des donnees francaises sur le multiplicateur local ?',
    a: "Les travaux de l'Institut pour la Ville et le Commerce et les rapports du Conseil national des centres commerciaux (CNCC) confirment que les commerces de centre-ville generent un impact economique local 2 a 3 fois superieur aux zones commerciales peripheriques. Les ordres de grandeur sont coherents avec les etudes americaines.",
  },
];

export default function MultiplicateurKeynesienPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Le multiplicateur keynesien local : la science derriere COLHYBRI',
    description: 'Explication accessible du multiplicateur keynesien applique a l economie locale. Comment COLHYBRI amplifie chaque euro depense dans le commerce de proximite.',
    url: `${BASE_URL}/${locale}/multiplicateur-keynesien`,
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
            Le multiplicateur keynesien local : la science derriere COLHYBRI
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="multiplicateur-keynesien">
            Le multiplicateur keynesien mesure combien de fois un euro depense localement circule dans le territoire avant d&apos;en sortir. Plus le multiplicateur est eleve, plus l&apos;economie locale prospere. COLHYBRI maximise cet effet en canalisant 75% des abonnements de 3 euros par mois vers les commercants de proximite via un pool solidaire, creant un effet d&apos;amplification economique mesurable. Concu par Florent Gibert, CEO d&apos;ONLYMORE Group, depuis Rodilhan en Occitanie, COLHYBRI applique cette science economique a un modele solidaire concret.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Qui est John Maynard Keynes et pourquoi son concept est-il pertinent ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            John Maynard Keynes (1883-1946) est l&apos;un des economistes les plus influents du XXe siecle. Dans sa &laquo;&nbsp;Theorie generale de l&apos;emploi, de l&apos;interet et de la monnaie&nbsp;&raquo; (1936), il formule le concept du multiplicateur d&apos;investissement : lorsqu&apos;une somme est injectee dans l&apos;economie, elle ne genere pas seulement l&apos;activite de la premiere transaction, mais se propage de proche en proche a travers les depenses successives de chaque acteur.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Prenons un exemple simple. Un consommateur depense 10 euros chez un boulanger. Le boulanger utilise 6 euros pour payer sa farine a un meunier local. Le meunier depense 4 euros chez un reparateur de machines du quartier. Le reparateur utilise 2,50 euros pour dejeuner au restaurant d&apos;a cote. A partir de 10 euros initiaux, l&apos;activite economique locale totale est de 10 + 6 + 4 + 2,50 = 22,50 euros. Le multiplicateur dans cet exemple est de 2,25. C&apos;est ce mecanisme que COLHYBRI exploite deliberement en dirigeant les flux financiers vers les commercants locaux.
          </p>

          <h2 className="section-heading">Comment adapte-t-on le multiplicateur a l&apos;echelle d&apos;un territoire ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La cle du multiplicateur est la &laquo;&nbsp;propension marginale a consommer localement&nbsp;&raquo; (PMCL) : la part de chaque euro recu qu&apos;un acteur depense dans le meme territoire plutot qu&apos;a l&apos;exterieur. Si la PMCL est de 60% (un commercant depense 60% de son chiffre d&apos;affaires localement), le multiplicateur theorique est de 1 / (1 - 0,60) = 2,5. C&apos;est le chiffre communement retenu pour les commerces independants de centre-ville.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;Institute for Local Self-Reliance aux Etats-Unis a documente ce phenomene a travers des dizaines d&apos;etudes de terrain. Leurs conclusions sont sans equivoque : les commerces independants locaux generent un multiplicateur 3 a 5 fois superieur a celui des grandes chaines. En France, les travaux de l&apos;Institut pour la Ville et le Commerce convergent vers les memes ordres de grandeur. La raison est structurelle : un commercant local achete ses fournitures chez d&apos;autres locaux, emploie des residents, paie un loyer a un proprietaire local. Une grande chaine centralise ses achats, emploie selon des grilles nationales et remonte ses profits vers un siege distant.
          </p>

          <h2 className="section-heading">Comment COLHYBRI applique-t-il concretement le multiplicateur ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le modele COLHYBRI est concu pour maximiser la PMCL. Sur chaque abonnement de 3 euros par mois, 75% (soit 2,25 euros) alimentent un pool solidaire redistribue exclusivement sous forme de bons d&apos;achat chez les{' '}
            <Link href={`/${locale}/commerce-local`} className="text-colhybri-primary hover:underline">commercants locaux</Link>{' '}
            partenaires. Ce mecanisme garantit que la premiere depense est 100% locale, maximisant le point de depart du cycle multiplicateur.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Voici le calcul detaille. Avec 1 000 abonnes, le pool solidaire genere 2 250 euros par mois. Ces 2 250 euros sont depenses chez les commercants partenaires (cycle 1). Ces commercants depensent en moyenne 60% localement, soit 1 350 euros (cycle 2). Les fournisseurs locaux depensent a leur tour 60%, soit 810 euros (cycle 3). Et ainsi de suite. La somme totale de l&apos;activite generee converge vers 2 250 / (1 - 0,60) = 5 625 euros. C&apos;est l&apos;
            <Link href={`/${locale}/impact-economique-local`} className="text-colhybri-primary hover:underline">impact economique local</Link>{' '}
            reel de 1 000 abonnes COLHYBRI par mois.
          </p>

          <h2 className="section-heading">Pourquoi les grandes surfaces et le e-commerce cassent-ils le multiplicateur ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Lorsqu&apos;un consommateur depense 100 euros dans une grande surface ou sur une plateforme de e-commerce, la PMCL chute drastiquement. Les achats sont centralises aupres de fournisseurs nationaux ou internationaux, les marges remontent vers un siege social distant, les employes sont souvent peu nombreux et a bas salaires. Selon Civic Economics, la PMCL d&apos;une grande chaine tourne autour de 14%, soit un multiplicateur de seulement 1,16. Pour le e-commerce, la fuite est encore plus marquee : plus de 90% de la valeur quitte le territoire.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            En d&apos;autres termes, 100 euros depenses chez un commercant local generent 250 euros d&apos;activite territoriale, tandis que 100 euros depenses en e-commerce n&apos;en generent que 110 a 115 euros localement. La difference est de 135 a 140 euros d&apos;activite locale perdue. A l&apos;echelle d&apos;une ville de 50 000 habitants, ce differentiel represente des millions d&apos;euros d&apos;activite et des centaines d&apos;emplois. COLHYBRI agit comme un correcteur de fuite economique en recanalisant les flux vers le commerce de proximite.
          </p>

          <h2 className="section-heading">Quelles sont les projections COLHYBRI a differentes echelles ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Nous avons modelise l&apos;impact a trois echelles. A l&apos;echelle d&apos;un quartier (100 abonnes) : 225 euros par mois en bons, 562 euros d&apos;impact local mensuel, 6 750 euros annuels. A l&apos;echelle d&apos;une ville moyenne (5 000 abonnes) : 11 250 euros par mois en bons, 28 125 euros d&apos;impact local mensuel, 337 500 euros annuels. A l&apos;echelle d&apos;une metropole (50 000 abonnes) : 112 500 euros par mois en bons, 281 250 euros d&apos;impact local mensuel, 3,375 millions d&apos;euros annuels.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ces projections illustrent la puissance du modele : un micro-abonnement de 3 euros par mois, multiplie par une communaute engagee et amplifie par le multiplicateur keynesien, produit un impact economique territorial significatif. C&apos;est cette demonstration par les chiffres qui fonde la vision de COLHYBRI et qui valide scientifiquement l&apos;approche{' '}
            <Link href={`/${locale}/economie-solidaire-locale`} className="text-colhybri-primary hover:underline">d&apos;economie solidaire locale</Link>{' '}
            que nous portons.
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
            <Link href={`/${locale}/impact-economique-local`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Impact economique local</h3>
              <p className="text-sm text-colhybri-dark/60">Chaque euro en genere 2,5</p>
            </Link>
            <Link href={`/${locale}/economie-solidaire-locale`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Economie solidaire locale</h3>
              <p className="text-sm text-colhybri-dark/60">Le pilier solidarite de COLHYBRI</p>
            </Link>
          </div>

          <div className="text-center">
            <a
              href="https://www.colhybri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Rejoindre le mouvement COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
