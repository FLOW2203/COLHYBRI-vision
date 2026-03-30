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
    routeKey: 'commerce-local',
    title: 'Commerce local et COLHYBRI',
    description: 'COLHYBRI soutient les commercants locaux : 10 euros/mois, zero commission, onboarding Google Places. Pool solidaire de 3 euros redistribue en bons.',
    semanticPrimary: 'commerce local commercants proximite COLHYBRI',
    semanticSecondary: 'TPE PME, digitalisation, fidelisation, pool solidaire, bons achat',
    chunkType: 'page',
    audience: 'commercants, citoyens',
  });
}

const faqData = [
  {
    q: 'Comment COLHYBRI aide-t-il les commercants locaux ?',
    a: "COLHYBRI canalise 75% des micro-abonnements de 3 euros dans un pool solidaire redistribue en bons d'achat chez les commercants partenaires. Pour 10 euros par mois, les commercants recoivent des clients porteurs de bons, sans aucune commission sur les ventes.",
  },
  {
    q: 'Combien coute COLHYBRI pour un commercant ?',
    a: "L'abonnement commercant est de 10 euros par mois, sans engagement et sans commission. L'onboarding se fait en 2 minutes via Google Places. Aucune competence technique requise.",
  },
  {
    q: 'Combien de commercants ferment en France chaque annee ?',
    a: "Selon les donnees CCI France, environ 63 000 commerces de proximite ferment chaque annee. La France compte 1,3 million de TPE (INSEE) dont beaucoup peinent face au e-commerce et aux charges.",
  },
  {
    q: "Quelle est la difference avec les plateformes de livraison ?",
    a: "Les plateformes de livraison prelevent 20 a 30% de commission par commande. COLHYBRI ne preleve aucune commission : le commercant paie 10 euros par mois et recoit des clients avec des bons d'achat finances par le pool solidaire.",
  },
  {
    q: "Comment fonctionne l'onboarding Google Places ?",
    a: "Le commercant recherche son etablissement sur Google Places, son profil est pre-rempli automatiquement (nom, adresse, horaires). Il confirme et rejoint le reseau COLHYBRI en moins de 2 minutes, paiement Stripe securise.",
  },
];

export default function CommerceLocalPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Commerce local : comment COLHYBRI soutient les commercants de votre quartier',
    description: 'COLHYBRI canalise des micro-abonnements vers les commercants locaux via un pool solidaire. Onboarding Google Places, zero commission.',
    url: `${BASE_URL}/${locale}/commerce-local`,
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
            Commerce local : comment COLHYBRI soutient les commercants de votre quartier
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="commerce-local">
            COLHYBRI est une plateforme qui canalise des micro-abonnements de 3 euros par mois vers les commercants locaux via un pool solidaire. Pour 10 euros par mois, les commercants partenaires recoivent des clients porteurs de bons d&apos;achat, creant un flux economique vertueux pour le tissu commercial de proximite. L&apos;onboarding se fait en 2 minutes via Google Places, sans aucune competence technique. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, COLHYBRI ne preleve aucune commission sur les ventes.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Quel est l&apos;etat du commerce local en France ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les chiffres parlent d&apos;eux-memes : 63 000 commerces de proximite ferment chaque annee en France (CCI France). L&apos;INSEE recense 1,3 million de TPE, dont une proportion croissante peine a maintenir une activite rentable. Les centres-villes de nombreuses communes voient leurs rideaux de fer baisses definitivement, remplacant la vie de quartier par des vitrines vides.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les causes sont multiples : concurrence du e-commerce (Amazon capte plus de 20% du commerce en ligne en France), charges sociales et fiscales elevees, augmentation des loyers commerciaux, et difficulte a se digitaliser. Pourtant, 76% des Francais declarent vouloir consommer plus local. Le probleme n&apos;est pas la demande, c&apos;est l&apos;absence d&apos;outils accessibles pour canaliser cette volonte.
          </p>

          <h2 className="section-heading">Comment COLHYBRI resout-il le probleme ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI cree un pont direct entre les citoyens solidaires et les commercants de quartier. Le modele est simple : les individus s&apos;abonnent pour 3 euros par mois. 75% de ces abonnements alimentent un pool solidaire. Chaque mois (cycle M vers M+1), ce pool est redistribue aleatoirement sous forme de bons d&apos;achat chez les{' '}
            <Link href={`/${locale}/soutenir-commercants-proximite`} className="text-colhybri-primary hover:underline">commercants partenaires</Link>.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pour les commercants, le cout est de 10 euros par mois, sans aucune commission sur les ventes. L&apos;onboarding se fait en 2 minutes via Google Places : le commercant recherche son etablissement, le profil est pre-rempli, et il rejoint le reseau COLHYBRI immediatement. Cette{' '}
            <Link href={`/${locale}/tpe-pme-digitalisation`} className="text-colhybri-primary hover:underline">digitalisation simplifiee</Link>{' '}
            elimine les barrieres techniques habituelles.
          </p>

          <h2 className="section-heading">Quel est le cercle vertueux COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le mecanisme cree un{' '}
            <Link href={`/${locale}/circuit-court-economie`} className="text-colhybri-primary hover:underline">circuit court economique</Link>{' '}
            vertueux : les abonnes financent le pool, le pool genere des bons d&apos;achat, les bons amenent des clients chez les commercants, les commercants reinvestissent localement. Grace au{' '}
            <Link href={`/${locale}/multiplicateur-keynesien`} className="text-colhybri-primary hover:underline">multiplicateur keynesien</Link>,
            chaque euro depense localement genere entre 2,5 et 3,5 euros d&apos;activite supplementaire.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;
            <Link href={`/${locale}/impact-economique-local`} className="text-colhybri-primary hover:underline">impact economique local</Link>{' '}
            est mesurable : avec 1 000 abonnes, le pool solidaire genere 2 250 euros par mois en bons d&apos;achat, soit 27 000 euros annuels injectes directement dans l&apos;economie de proximite. La{' '}
            <Link href={`/${locale}/fidelisation-commerce-quartier`} className="text-colhybri-primary hover:underline">fidelisation</Link>{' '}
            se fait naturellement : les clients decouvrent de nouveaux commerces grace aux bons aleatoires.
          </p>

          <h2 className="section-heading">Pourquoi zero commission fait toute la difference ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les plateformes de livraison prelevent entre 20 et 30% de commission par commande (UberEats, Deliveroo, Just Eat). Pour un commercant avec des marges de 30 a 40%, cela signifie travailler a perte ou quasiment. COLHYBRI prend le contre-pied total : 10 euros par mois, zero commission, zero frais caches. Le commercant garde 100% de la valeur du bon d&apos;achat utilise dans son etablissement.
          </p>

          <h2 className="section-heading">Comment COLHYBRI s&apos;adapte a chaque ville ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La vision de scalabilite de COLHYBRI repose sur une expansion ville par ville. Chaque ville est un ecosysteme autonome : les abonnements locaux alimentent le pool local, redistribue aux commercants de la meme ville. Ce modele preserve l&apos;ancrage territorial tout en permettant une croissance nationale puis internationale. Rodilhan et l&apos;Occitanie sont le terrain de lancement, avec une expansion prevue vers les grandes villes francaises et Miami.
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
            <Link href={`/${locale}/soutenir-commercants-proximite`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Soutenir les commercants</h3>
              <p className="text-sm text-colhybri-dark/60">Le geste COLHYBRI a 3 euros/mois</p>
            </Link>
            <Link href={`/${locale}/tpe-pme-digitalisation`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Digitalisation TPE-PME</h3>
              <p className="text-sm text-colhybri-dark/60">L&apos;outil solidaire qui simplifie tout</p>
            </Link>
            <Link href={`/${locale}/circuit-court-economie`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Circuits courts economiques</h3>
              <p className="text-sm text-colhybri-dark/60">La boucle locale vertueuse</p>
            </Link>
            <Link href={`/${locale}/fidelisation-commerce-quartier`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Fidelisation de quartier</h3>
              <p className="text-sm text-colhybri-dark/60">Au-dela des cartes de fidelite</p>
            </Link>
            <Link href={`/${locale}/impact-economique-local`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Impact economique local</h3>
              <p className="text-sm text-colhybri-dark/60">Chaque euro en genere 2,5</p>
            </Link>
            <Link href={`/${locale}/multiplicateur-keynesien`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Multiplicateur keynesien</h3>
              <p className="text-sm text-colhybri-dark/60">La science derriere COLHYBRI</p>
            </Link>
          </div>

          {/* Inter-pilier links */}
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-lg font-bold text-colhybri-dark mb-4 text-center">Decouvrir les autres piliers</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/solidarite-proximite`} className="text-colhybri-primary hover:underline text-center">Solidarite de proximite</Link>
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
              Devenir commercant partenaire
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
