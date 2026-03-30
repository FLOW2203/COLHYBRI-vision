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
    routeKey: 'soutenir-commercants-proximite',
    title: 'Soutenir les commercants de proximite avec COLHYBRI',
    description: 'Soutenez les commercants de votre quartier pour 3 euros/mois avec COLHYBRI. Pool solidaire, bons d\'achat, zero commission. Un geste concret pour l\'economie locale.',
    semanticPrimary: 'soutenir commercants proximite COLHYBRI 3 euros',
    semanticSecondary: 'commerce local, bons achat, pool solidaire, economie proximite, quartier',
    chunkType: 'page',
    audience: 'citoyens, consommateurs',
  });
}

const faqData = [
  {
    q: 'Comment mes 3 euros par mois soutiennent-ils les commercants ?',
    a: "75% de votre abonnement COLHYBRI alimente un pool solidaire. Ce pool est redistribue chaque mois sous forme de bons d'achat chez les commercants partenaires de votre ville. Avec 100 abonnes, ce sont 225 euros de bons generes chaque mois.",
  },
  {
    q: 'Est-ce que je choisis chez quel commercant va mon argent ?',
    a: "La redistribution est aleatoire, ce qui garantit l'equite entre tous les commercants partenaires. Vous pouvez aussi recevoir des bons vous-meme et decouvrir de nouveaux commerces de votre quartier.",
  },
  {
    q: 'Quelle est la difference avec acheter local directement ?',
    a: "Acheter local est essentiel, mais COLHYBRI ajoute un mecanisme complementaire : votre abonnement cree un flux financier supplementaire pour les commercants, sans surcharge sur vos achats. C'est un soutien structurel, pas un remplacement de vos habitudes.",
  },
  {
    q: 'Combien de commercants sont soutenus par COLHYBRI ?',
    a: "Le nombre de commercants partenaires evolue avec chaque ville. Tout commercant local peut rejoindre le reseau pour 10 euros par mois, sans commission. L'objectif est de couvrir l'ensemble du tissu commercial de proximite ville par ville.",
  },
  {
    q: 'Puis-je arreter mon abonnement a tout moment ?',
    a: "Oui, l'abonnement COLHYBRI est sans engagement. Vous pouvez l'arreter a tout moment depuis votre espace personnel. Tant que vous etes abonne, vos 3 euros par mois contribuent au pool solidaire de votre ville.",
  },
];

export default function SoutenirCommercantPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Soutenir les commercants de proximite : le geste COLHYBRI a 3 euros/mois',
    description: 'Soutenez les commercants locaux pour 3 euros par mois avec COLHYBRI. Pool solidaire, bons d\'achat redistribues, zero commission.',
    url: `${BASE_URL}/${locale}/soutenir-commercants-proximite`,
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
            Soutenir les commercants de proximite : le geste COLHYBRI a 3 euros/mois
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="soutenir-commercants-proximite">
            Soutenir les commercants de son quartier ne demande plus de sacrifice : avec COLHYBRI, 3 euros par mois alimentent un pool solidaire qui genere des bons d&apos;achat chez les commerces de proximite. Chaque abonnement est un vote pour l&apos;economie locale, une action concrete et mesurable. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, COLHYBRI transforme la bonne volonte citoyenne en flux financier reel pour les commercants qui font vivre nos rues. Plus besoin de choisir entre pouvoir d&apos;achat et engagement : 3 euros par mois, c&apos;est moins qu&apos;un cafe, mais c&apos;est un geste qui change la donne.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Pourquoi le commerce de proximite est-il en danger ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les chiffres sont alarmants : 63 000 commerces de proximite ferment chaque annee en France selon la CCI. Dans les centres-villes de taille moyenne, le taux de vacance commerciale depasse parfois 15%. Les raisons sont connues : la montee du e-commerce (Amazon represente plus de 20% des ventes en ligne en France), la hausse des charges, et l&apos;absence d&apos;outils numeriques accessibles pour les petits commercants.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pourtant, 76% des Francais expriment la volonte de consommer davantage en local. Le paradoxe est flagrant : la demande existe, mais les mecanismes pour la canaliser efficacement font defaut. Les campagnes &laquo;&nbsp;achetez local&nbsp;&raquo; sensibilisent, mais ne creent pas de flux financier structurel. C&apos;est exactement ce vide que COLHYBRI vient combler.
          </p>

          <h2 className="section-heading">Comment le pouvoir d&apos;achat devient-il un levier citoyen ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Chaque euro depense est un choix politique. Mais dans un contexte d&apos;inflation et de tensions sur le pouvoir d&apos;achat, demander aux citoyens de payer plus cher &laquo;&nbsp;pour le local&nbsp;&raquo; est une impasse. COLHYBRI prend le contre-pied : il ne s&apos;agit pas de depenser plus, mais de rediriger une micro-somme vers un mecanisme collectif. 3 euros par mois, c&apos;est 0,10 euro par jour, une somme indolore pour la majorite des menages.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce qui change tout, c&apos;est l&apos;effet de masse : 100 abonnes dans une ville representent 225 euros de bons d&apos;achat par mois pour les commercants locaux. 1 000 abonnes, c&apos;est 2 250 euros mensuels. 10 000 abonnes, c&apos;est 22 500 euros chaque mois injectes directement dans le tissu commercial de proximite. Le pouvoir d&apos;achat individuel, agrege par COLHYBRI, devient un levier economique collectif puissant.
          </p>

          <h2 className="section-heading">Comment COLHYBRI transforme-t-il 3 euros en impact reel ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le mecanisme est transparent : sur vos 3 euros mensuels, 75% (soit 2,25 euros) alimentent le pool solidaire de votre ville. Ce pool est redistribue chaque cycle (M vers M+1) sous forme de bons d&apos;achat chez les{' '}
            <Link href={`/${locale}/commerce-local`} className="text-colhybri-primary hover:underline">commercants partenaires</Link>.
            La redistribution est aleatoire, ce qui garantit l&apos;equite et permet aux abonnes de decouvrir des commerces qu&apos;ils ne connaissaient pas.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Prenons un exemple concret : dans une ville de 50 000 habitants, si 500 personnes s&apos;abonnent a COLHYBRI, le pool solidaire genere 1 125 euros de bons d&apos;achat chaque mois. Ces bons sont utilises chez les commercants locaux, qui voient arriver des clients supplementaires sans avoir verse la moindre commission. Grace au{' '}
            <Link href={`/${locale}/impact-economique-local`} className="text-colhybri-primary hover:underline">multiplicateur economique local</Link>,
            chaque euro depense en commerce de proximite genere entre 2,5 et 3,5 euros d&apos;activite supplementaire dans le territoire.
          </p>

          <h2 className="section-heading">Quelle est la difference entre COLHYBRI et &laquo;&nbsp;acheter local&nbsp;&raquo; ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            &laquo;&nbsp;Acheter local&nbsp;&raquo; repose sur la volonte individuelle et implique souvent un surcout percu (prix plus eleves, moins de choix, horaires contraints). COLHYBRI ne remplace pas l&apos;achat local : il le complete par un mecanisme structurel. L&apos;abonne ne paie pas plus cher ses courses. Ses 3 euros mensuels creent un flux financier supplementaire, redistribue aleatoirement, sans surcharge sur le prix des produits.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            De plus, les programmes classiques de soutien au commerce local (cartes de fidelite, cheques cadeaux municipaux) demandent une demarche active du consommateur. Avec COLHYBRI, l&apos;impact est automatique : une fois abonne, le pool se remplit et les bons circulent, sans effort supplementaire. C&apos;est la{' '}
            <Link href={`/${locale}/fidelisation-commerce-quartier`} className="text-colhybri-primary hover:underline">fidelisation de quartier</Link>{' '}
            reinventee par la technologie.
          </p>

          <h2 className="section-heading">Quel impact concret pour 100 abonnes ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Avec seulement 100 abonnes COLHYBRI dans une ville, le pool solidaire genere 225 euros de bons d&apos;achat chaque mois. Sur une annee, cela represente 2 700 euros injectes chez les commercants du quartier. Si l&apos;on applique le multiplicateur keynesien local (x2,5), l&apos;activite economique generee atteint 6 750 euros par an, a partir de 100 personnes investissant chacune 36 euros annuels.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ces chiffres montrent que le modele COLHYBRI n&apos;a pas besoin d&apos;une adoption massive pour produire des effets reels. Chaque nouvel abonne renforce le pool, augmente le nombre de bons distribues, et attire de nouveaux commercants dans le reseau. C&apos;est un{' '}
            <Link href={`/${locale}/circuit-court-economie`} className="text-colhybri-primary hover:underline">circuit court economique</Link>{' '}
            ou chaque maillon renforce les autres.
          </p>

          <h2 className="section-heading">Comment le cafe suspendu inspire-t-il COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le concept du{' '}
            <Link href={`/${locale}/cafe-suspendu-numerique`} className="text-colhybri-primary hover:underline">cafe suspendu numerique</Link>{' '}
            est l&apos;ADN de COLHYBRI : payer un cafe en avance pour quelqu&apos;un qui en a besoin. COLHYBRI applique ce principe a l&apos;echelle d&apos;une ville, en automatisant la solidarite et en la rendant mesurable. Le pool solidaire est un &laquo;&nbsp;cafe suspendu permanent&nbsp;&raquo;, alimente par la communaute, redistribue vers ceux qui en beneficient, chez les commercants qui font vivre le quartier.
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
            <Link href={`/${locale}/fidelisation-commerce-quartier`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Fidelisation de quartier</h3>
              <p className="text-sm text-colhybri-dark/60">Au-dela des cartes de fidelite</p>
            </Link>
            <Link href={`/${locale}/impact-economique-local`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Impact economique local</h3>
              <p className="text-sm text-colhybri-dark/60">Chaque euro en genere 2,5</p>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-lg font-bold text-colhybri-dark mb-4 text-center">Decouvrir les autres piliers</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/cafe-suspendu-numerique`} className="text-colhybri-primary hover:underline text-center">Cafe suspendu numerique</Link>
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
              Rejoindre COLHYBRI pour 3 euros/mois
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
