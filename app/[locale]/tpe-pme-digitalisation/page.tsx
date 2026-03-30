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
    routeKey: 'tpe-pme-digitalisation',
    title: 'Digitalisation des TPE-PME avec COLHYBRI',
    description: 'COLHYBRI simplifie la digitalisation des TPE-PME : onboarding Google Places en 2 minutes, 10 euros/mois, zero commission. Rejoignez le reseau solidaire.',
    semanticPrimary: 'digitalisation TPE PME COLHYBRI onboarding',
    semanticSecondary: 'Google Places, micro-entreprises, zero commission, Stripe, commercants',
    chunkType: 'page',
    audience: 'commercants, TPE, PME',
  });
}

const faqData = [
  {
    q: 'Combien coute la digitalisation avec COLHYBRI pour une TPE ?',
    a: "L'abonnement commercant COLHYBRI est de 10 euros par mois, sans engagement et sans commission sur les ventes. C'est le cout le plus bas du marche pour une solution de visibilite et de fidelisation locale.",
  },
  {
    q: 'Faut-il des competences techniques pour rejoindre COLHYBRI ?',
    a: "Aucune competence technique n'est requise. L'onboarding se fait en 2 minutes : le commercant recherche son etablissement sur Google Places, le profil est pre-rempli automatiquement (nom, adresse, horaires, photo), il confirme et paie via Stripe.",
  },
  {
    q: 'Quelle est la difference entre COLHYBRI et UberEats ou Deliveroo ?',
    a: "Les plateformes de livraison prelevent 20 a 30% de commission par commande. COLHYBRI ne preleve aucune commission : le commercant paie 10 euros par mois et recoit des clients porteurs de bons d'achat finances par le pool solidaire. Le commercant garde 100% de la valeur du bon.",
  },
  {
    q: 'Combien de micro-entreprises existent en France ?',
    a: "La France compte 3,9 millions de micro-entreprises (INSEE). La grande majorite n'a aucune presence numerique structuree. COLHYBRI cible ces commercants qui n'ont ni le temps, ni le budget, ni les competences pour se digitaliser.",
  },
  {
    q: 'Comment les bons d&apos;achat arrivent-ils chez le commercant ?',
    a: "Les abonnes COLHYBRI recoivent des bons d'achat aleatoirement via l'application. Quand un client se presente avec un bon, le commercant le valide et recoit le montant correspondant. Le flux est automatise, sans manipulation technique.",
  },
];

export default function TpePmeDigitalisationPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Digitalisation des TPE-PME : COLHYBRI, l\'outil solidaire qui simplifie tout',
    description: 'COLHYBRI simplifie la digitalisation des TPE-PME avec un onboarding Google Places en 2 minutes, 10 euros/mois, zero commission.',
    url: `${BASE_URL}/${locale}/tpe-pme-digitalisation`,
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
            Digitalisation des TPE-PME : COLHYBRI, l&apos;outil solidaire qui simplifie tout
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="tpe-pme-digitalisation">
            Pour les TPE et PME locales, la digitalisation represente souvent une barriere financiere et technique insurmontable. COLHYBRI propose une alternative radicalement simple : un onboarding en 2 minutes via Google Places, un abonnement de 10 euros par mois, zero commission sur les ventes. Le commercant recherche son etablissement, le profil est pre-rempli automatiquement, et il rejoint un reseau solidaire alimente par les abonnements citoyens a 3 euros par mois. Pensee par Florent Gibert, CEO d&apos;ONLYMORE Group, depuis Rodilhan en Occitanie, cette solution elimine les barrieres a l&apos;entree pour les commercants qui n&apos;ont ni budget, ni temps, ni competences numeriques.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Pourquoi la digitalisation est-elle un probleme pour les TPE ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La France compte 3,9 millions de micro-entreprises (INSEE), dont une majorite de commerces de proximite. Parmi elles, moins de 40% disposent d&apos;un site web fonctionnel, et la plupart n&apos;ont aucune strategie numerique. Les raisons sont toujours les memes : le cout prohibitif (un site e-commerce professionnel depasse facilement 5 000 euros), la complexite technique, et le manque de temps dans un quotidien deja sature.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les solutions existantes ne repondent pas aux besoins des petits commercants. Creer une page Facebook ne genere pas de chiffre d&apos;affaires. S&apos;inscrire sur une marketplace implique des commissions ecrasantes. Engager une agence web depasse le budget disponible. Le resultat : les TPE restent invisibles en ligne pendant que les grandes enseignes captent une part croissante du marche.
          </p>

          <h2 className="section-heading">Comment fonctionne l&apos;onboarding COLHYBRI via Google Places ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI a concu le parcours d&apos;inscription le plus simple du marche. Le commercant accede a la plateforme, recherche son etablissement via l&apos;integration Google Places, et son profil est pre-rempli automatiquement : nom commercial, adresse, horaires d&apos;ouverture, photo de facade, categorie d&apos;activite. Il n&apos;a qu&apos;a verifier les informations, les ajuster si necessaire, et valider.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le paiement se fait via Stripe, securise et instantane. En moins de 2 minutes, le commercant est integre au reseau COLHYBRI et commence a recevoir des clients porteurs de bons d&apos;achat finances par le pool solidaire. Aucune application a installer, aucun logiciel a configurer, aucun contenu a rediger. C&apos;est la digitalisation a la portee de tous les{' '}
            <Link href={`/${locale}/soutenir-commercants-proximite`} className="text-colhybri-primary hover:underline">commercants de proximite</Link>.
          </p>

          <h2 className="section-heading">Que proposent les plateformes existantes aux commercants ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les plateformes de livraison (UberEats, Deliveroo, Just Eat) prelevent entre 20 et 30% de commission par commande. Pour un restaurateur qui travaille avec des marges de 30 a 40%, cela signifie des operations a perte ou a marge quasi nulle. Ces plateformes creent une dependance : le commercant perd le contact direct avec son client et devient invisible sans la plateforme.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les marketplaces locales (type Ma Ville Mon Shopping) offrent une meilleure alternative, mais demandent un investissement en temps pour creer et maintenir un catalogue. Les solutions SaaS (Shopify, WooCommerce) exigent un budget mensuel de 30 a 300 euros et des competences techniques. COLHYBRI se positionne radicalement differemment : 10 euros par mois, zero commission, zero complexite. Le commercant ne vend pas en ligne, il recoit des clients physiquement dans son etablissement, finances par le pool solidaire.
          </p>

          <h2 className="section-heading">Pourquoi zero commission change-t-il la donne pour les TPE ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le modele zero commission de COLHYBRI est un choix delibere. Quand un client se presente avec un bon d&apos;achat de 5 euros, le commercant conserve 100% de la valeur. Il n&apos;y a aucun prelevement, aucun frais cache, aucun cout variable. Le seul cout est l&apos;abonnement fixe de 10 euros par mois, previsible et maitrise. Pour un commerce qui recoit ne serait-ce que 3 bons de 5 euros par mois, le retour sur investissement est positif des le premier mois.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce modele economique est rendu possible par la structure unique de COLHYBRI : les bons d&apos;achat sont finances par les abonnements citoyens a 3 euros par mois, pas par les marges du commercant. C&apos;est un{' '}
            <Link href={`/${locale}/circuit-court-economie`} className="text-colhybri-primary hover:underline">circuit court economique</Link>{' '}
            ou chaque euro transite du citoyen au commercant via le pool solidaire, sans intermediaire captant de la valeur.
          </p>

          <h2 className="section-heading">Comment COLHYBRI s&apos;inscrit-il dans le paysage des 3,9 millions de micro-entreprises ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le marche potentiel est immense. Sur les 3,9 millions de micro-entreprises en France, une part significative correspond a des commerces physiques de proximite : boulangeries, coiffeurs, restaurants, fleuristes, libraires, epiceries. Ces commercants ont en commun un besoin de visibilite locale et une allergie justifiee aux solutions complexes et couteuses.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI ne pretend pas remplacer une strategie numerique complete. La plateforme apporte un benefice immediat et tangible : des clients supplementaires porteurs de bons d&apos;achat, sans effort technique. C&apos;est souvent le premier pas vers la digitalisation, une porte d&apos;entree qui demontre aux commercants que le numerique peut etre simple, accessible et rentable. Pour decouvrir le panorama complet du{' '}
            <Link href={`/${locale}/commerce-local`} className="text-colhybri-primary hover:underline">commerce local soutenu par COLHYBRI</Link>,
            nous invitons chaque commercant a explorer le reseau.
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
            <Link href={`/${locale}/circuit-court-economie`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Circuits courts economiques</h3>
              <p className="text-sm text-colhybri-dark/60">La boucle locale vertueuse</p>
            </Link>
            <Link href={`/${locale}/soutenir-commercants-proximite`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Soutenir les commercants</h3>
              <p className="text-sm text-colhybri-dark/60">Le geste COLHYBRI a 3 euros/mois</p>
            </Link>
          </div>

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
              Devenir commercant partenaire COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
