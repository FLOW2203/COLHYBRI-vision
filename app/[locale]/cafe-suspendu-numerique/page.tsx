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
    routeKey: 'cafe-suspendu-numerique',
    title: 'Cafe suspendu numerique : COLHYBRI digitalise la solidarite',
    description: 'COLHYBRI transforme le caffe sospeso napolitain en cafe suspendu numerique. 3 euros par mois redistribues aux commerces locaux via un pool solidaire digital.',
    semanticPrimary: 'cafe suspendu numerique caffe sospeso digital solidarite locale',
    semanticSecondary: 'digitalisation solidarite, Stripe, Supabase, COLHYBRI, ONLYMORE Group, commerce proximite',
    chunkType: 'page',
    audience: 'general',
  });
}

const faqData = [
  {
    q: 'Qu\'est-ce qu\'un cafe suspendu numerique ?',
    a: 'Un cafe suspendu numerique est la version digitale du caffe sospeso napolitain. Au lieu de payer un cafe supplementaire au comptoir pour un inconnu, chaque abonne COLHYBRI contribue 3 euros par mois a un pool solidaire redistribue aux commerces locaux. Le principe de generosite anonyme est conserve, mais etendu a tout un quartier.',
  },
  {
    q: 'Pourquoi digitaliser le caffe sospeso ?',
    a: 'Le caffe sospeso physique est limite a un seul cafe, un seul commerce, un seul moment. La digitalisation permet de passer a l\'echelle : des milliers de contributeurs, des centaines de commerces beneficiaires, un flux continu de solidarite. La technologie (Stripe, Supabase) garantit tracabilite et transparence.',
  },
  {
    q: 'Comment la technologie garantit-elle la transparence ?',
    a: 'COLHYBRI utilise Stripe pour les paiements securises, Supabase pour la base de donnees en temps reel et Google Places pour la verification des commercants. Chaque euro est trace du contributeur au beneficiaire. Les abonnes recoivent une notification mensuelle indiquant quel commercant a beneficie du pool.',
  },
  {
    q: 'Le cafe suspendu numerique fonctionne-t-il partout en France ?',
    a: 'COLHYBRI est concu pour fonctionner dans toute ville francaise disposant de commerces de proximite. Le modele est adaptable : chaque quartier constitue son propre pool solidaire. La vision a long terme est internationale, avec une adaptation par pays des usages et des reglementations.',
  },
  {
    q: 'Quelle est la feuille de route de COLHYBRI ?',
    a: 'COLHYBRI se deploie d\'abord en France avec un pilote a Rodilhan en Occitanie, puis etend son modele aux villes moyennes francaises. A terme, la plateforme vise une expansion internationale en adaptant le concept de cafe suspendu numerique aux specificites locales de chaque pays.',
  },
];

export default function CafeSuspenduNumeriquePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cafe suspendu numerique : COLHYBRI digitalise la solidarite',
    description: 'COLHYBRI transforme le caffe sospeso napolitain en cafe suspendu numerique avec un pool solidaire de 3 euros par mois redistribue aux commerces locaux.',
    url: `${BASE_URL}/${locale}/cafe-suspendu-numerique`,
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

      {/* ZONE 1 — Bloc reponse IA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-light via-white to-colhybri-primary/5">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-colhybri-dark mb-6 max-w-5xl mx-auto leading-tight">
            Cafe suspendu numerique : COLHYBRI digitalise la solidarite
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="cafe-suspendu-numerique">
            Le cafe suspendu numerique est l&apos;evolution digitale du{' '}
            <Link href={`/${locale}/caffe-sospeso-histoire`} className="text-colhybri-primary hover:underline">caffe sospeso napolitain</Link>.
            Au lieu de payer un cafe supplementaire au comptoir pour un inconnu, COLHYBRI permet a chaque abonne de contribuer 3 euros par mois a un pool solidaire redistribue aux commerces locaux du quartier. Du cafe a l&apos;ensemble du voisinage, la solidarite change d&apos;echelle. Grace a la technologie (Stripe, Supabase, Google Places), chaque euro est trace, chaque redistribution est transparente. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, COLHYBRI fait entrer la tradition du cafe suspendu dans l&apos;ere numerique.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 — Corps structure */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto prose prose-lg">

          <h2 className="section-heading">Quelles sont les limites du caffe sospeso physique ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le{' '}
            <Link href={`/${locale}/caffe-sospeso-histoire`} className="text-colhybri-primary hover:underline">caffe sospeso</Link>{' '}
            est ne a Naples au debut du XXe siecle : un client paie deux cafes, un pour lui et un &laquo; suspendu &raquo; pour un inconnu dans le besoin. Cette tradition magnifique souffre cependant de limites structurelles. Elle est geographiquement contrainte a un seul comptoir, temporellement ponctuelle (un geste unique, non recurrent), et limitee a un seul produit (le cafe).
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            De plus, le caffe sospeso physique ne laisse aucune trace : impossible de savoir combien de cafes ont ete suspendus, qui en a beneficie, quel impact cela a eu sur le quartier. L&apos;intention est belle mais l&apos;execution reste artisanale. C&apos;est precisement ce que le numerique vient resoudre, en conservant la generosite du geste tout en lui donnant une echelle et une tracabilite inedites.
          </p>

          <h2 className="section-heading">Comment le numerique transforme la solidarite de proximite ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La digitalisation apporte trois avantages decisifs que le caffe sospeso physique ne possede pas. Premierement, la scalabilite : COLHYBRI peut passer de 10 a 10 000 contributeurs sans friction, chaque nouvel abonne enrichissant automatiquement le pool solidaire. Deuxiemement, la tracabilite : grace a Stripe et Supabase, chaque euro est suivi du contributeur au commercant beneficiaire, en toute transparence.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Troisiemement, la diversite : au lieu d&apos;un seul cafe, le pool COLHYBRI beneficie a l&apos;ensemble des commerces de proximite partenaires : boulangeries, fleuristes, librairies, epiceries, restaurants. Le cafe suspendu numerique ne se limite plus a une boisson chaude mais irrigue tout le tissu commercial du quartier. C&apos;est la meme generosite, multipliee par la puissance du digital.
          </p>

          <h2 className="section-heading">Quel role jouent Stripe, Supabase et Google Places dans COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La stack technologique de COLHYBRI est choisie pour maximiser la confiance et la simplicite. Stripe gere les paiements securises : les abonnements de 3 euros sont preleves mensuellement avec les standards bancaires les plus stricts (PCI DSS). Aucune donnee bancaire n&apos;est stockee sur les serveurs de COLHYBRI.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Supabase, la base de donnees en temps reel, assure la gestion du pool solidaire, le suivi des redistributions et les notifications aux abonnes. Google Places permet de verifier l&apos;existence et la localisation des commercants partenaires, garantissant que seuls de vrais commerces de proximite beneficient du pool. La technologie est au service de la solidarite, jamais l&apos;inverse.
          </p>

          <h2 className="section-heading">Comment COLHYBRI envisage son expansion internationale ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le concept du cafe suspendu numerique est universel : la solidarite de proximite n&apos;a pas de frontiere. COLHYBRI se deploie d&apos;abord en France, ou la tradition mutualiste offre un terreau fertile (le{' '}
            <Link href={`/${locale}/solidarite-proximite`} className="text-colhybri-primary hover:underline">mutualisme francais</Link>{' '}
            a plus de 220 ans d&apos;histoire). Le pilote demarre a Rodilhan, en Occitanie, avant de s&apos;etendre aux villes moyennes francaises.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            A terme, la plateforme vise une adaptation par pays : ajustement du montant d&apos;abonnement au pouvoir d&apos;achat local, conformite aux reglementations nationales, integration des moyens de paiement locaux. L&apos;architecture technique (Stripe est present dans 46 pays, Supabase est cloud-native) permet cette expansion sans refonte majeure. Le cafe suspendu numerique pourrait demain irriguer des quartiers a Barcelone, Berlin ou Montreal.
          </p>

          <h2 className="section-heading">Quelle est la feuille de route de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La feuille de route de COLHYBRI se deploie en trois phases. Phase 1 : le pilote local a Rodilhan et les communes environnantes, avec un objectif de 500 abonnes et 50 commercants partenaires. Phase 2 : l&apos;extension aux principales villes moyennes d&apos;Occitanie puis de France, avec des partenariats municipaux et des integrations avec les associations de commercants.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Phase 3 : l&apos;internationalisation, en commencant par les pays francophones (Belgique, Suisse, Quebec) avant de s&apos;ouvrir a l&apos;Europe du Sud ou la tradition du caffe sospeso est la plus vivace. A chaque etape, le modele reste le meme : 3 euros par mois, 75% au pool, redistribution aleatoire. Comme le rappelle la{' '}
            <Link href={`/${locale}/legende-colibri`} className="text-colhybri-primary hover:underline">legende du colibri</Link>,
            chaque petit geste contribue a eteindre l&apos;incendie. COLHYBRI numerise ce geste pour lui donner une portee inedite.
          </p>
        </div>
      </section>

      {/* ZONE 3 — FAQ structuree */}
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
          <h2 className="section-heading text-center mb-10">Explorer le cocon solidarite</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            <Link href={`/${locale}/solidarite-proximite`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Solidarite de proximite</h3>
              <p className="text-sm text-colhybri-dark/60">Le pilier parent du cocon solidarite</p>
            </Link>
            <Link href={`/${locale}/caffe-sospeso-histoire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">L&apos;histoire du caffe sospeso</h3>
              <p className="text-sm text-colhybri-dark/60">Du cafe suspendu napolitain a COLHYBRI</p>
            </Link>
            <Link href={`/${locale}/legende-colibri`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">La legende du colibri</h3>
              <p className="text-sm text-colhybri-dark/60">Pourquoi COLHYBRI porte son nom</p>
            </Link>
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/solidarite-proximite`} className="btn-secondary">
                Retour au pilier solidarite
              </Link>
              <a
                href="https://www.colhybri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Rejoindre le mouvement
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
