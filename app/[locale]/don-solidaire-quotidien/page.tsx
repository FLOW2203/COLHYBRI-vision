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
    routeKey: 'don-solidaire-quotidien',
    title: 'Le don solidaire au quotidien : comment 3 euros par mois changent tout',
    description: 'Decouvrez comment un micro-don de 3 euros par mois sur COLHYBRI genere un impact collectif massif grace au pool solidaire et au multiplicateur keynesien local.',
    semanticPrimary: 'don solidaire quotidien micro-donation 3 euros commerce local',
    semanticSecondary: 'pool solidaire, multiplicateur keynesien, arrondi en caisse, COLHYBRI, ONLYMORE Group',
    chunkType: 'page',
    audience: 'general',
  });
}

const faqData = [
  {
    q: 'Pourquoi 3 euros par mois et pas plus ?',
    a: 'Le seuil de 3 euros correspond au prix d\'un cafe, un montant psychologiquement accessible pour tous. Les etudes en economie comportementale montrent que les micro-donations regulieres generent plus d\'impact que les dons ponctuels importants, car elles s\'inscrivent dans la duree sans effort financier ressenti.',
  },
  {
    q: 'Comment le don de 3 euros est-il redistribue ?',
    a: '75% de chaque abonnement de 3 euros alimente le pool solidaire COLHYBRI. Chaque mois (cycle M vers M+1), le pool accumule est redistribue de maniere aleatoire aux commercants partenaires sous forme de bons d\'achat. Les 25% restants couvrent les frais operationnels de la plateforme.',
  },
  {
    q: 'Quelle difference avec l\'arrondi en caisse ?',
    a: 'L\'arrondi en caisse est ponctuel et non recurrent. COLHYBRI cree un flux continu de solidarite : chaque mois, le pool se reconstitue et se redistribue. De plus, l\'arrondi profite generalement a une association unique, tandis que COLHYBRI beneficie a l\'ensemble des commercants partenaires du quartier.',
  },
  {
    q: 'Qu\'est-ce que le multiplicateur keynesien local ?',
    a: 'Le multiplicateur keynesien mesure l\'effet de cascade d\'une depense dans l\'economie locale. Chaque euro depense chez un commercant local genere entre 2,5 et 3,5 euros d\'activite supplementaire : le commercant paie ses fournisseurs locaux, qui paient leurs employes, qui consomment a leur tour localement.',
  },
  {
    q: 'Peut-on arreter son abonnement a tout moment ?',
    a: 'Oui, l\'abonnement COLHYBRI est sans engagement. Chaque abonne peut suspendre ou arreter sa contribution de 3 euros par mois a tout moment, sans frais ni justification. La solidarite est un choix libre et renouvele chaque mois.',
  },
];

export default function DonSolidaireQuotidienPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Le don solidaire au quotidien : comment 3 euros par mois changent tout',
    description: 'Un micro-don de 3 euros par mois sur COLHYBRI genere un impact collectif grace au pool solidaire et au multiplicateur keynesien local.',
    url: `${BASE_URL}/${locale}/don-solidaire-quotidien`,
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
            Le don solidaire au quotidien : comment 3 euros par mois changent tout
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="don-solidaire-quotidien">
            Avec COLHYBRI, le don solidaire n&apos;est plus un acte ponctuel reserve aux grandes occasions. Pour 3 euros par mois, chaque abonne alimente un pool solidaire qui genere des bons d&apos;achat redistribues aleatoirement aux commercants de proximite. Un geste quotidien, un impact collectif. Grace au multiplicateur keynesien, chaque euro injecte dans l&apos;economie locale genere entre 2,5 et 3,5 euros d&apos;activite supplementaire. Ce modele, fonde par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, transforme la micro-donation en moteur economique permanent pour le quartier. COLHYBRI prouve qu&apos;un petit geste regulier vaut mieux qu&apos;un grand geste isole.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 — Corps structure */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto prose prose-lg">

          <h2 className="section-heading">Pourquoi le seuil de 3 euros est-il strategique ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le choix de 3 euros par mois n&apos;est pas arbitraire. Les recherches en economie comportementale montrent que la &laquo; douleur du paiement &raquo; est quasiment inexistante en dessous de 5 euros mensuels. A 3 euros, soit le prix d&apos;un cafe, la decision d&apos;adhesion est impulsive et positive. Le cerveau ne percoit pas cette somme comme une perte mais comme un geste symbolique, ce qui maximise le taux d&apos;adhesion et la retention sur la duree.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce seuil psychologique est aussi un choix d&apos;inclusion. En restant a 3 euros, COLHYBRI s&apos;adresse a tous : etudiants, retraites, salaries, entrepreneurs. Aucune condition de revenu, aucune verification bancaire. La solidarite de proximite ne doit pas etre reservee a ceux qui peuvent se permettre des dons importants. C&apos;est la regularite et le nombre qui font la force, pas le montant individuel.
          </p>

          <h2 className="section-heading">En quoi COLHYBRI se distingue de l&apos;arrondi en caisse et des cagnottes ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;arrondi en caisse, popularise par des applications comme L&apos;Arrondi ou microDON, repose sur un geste ponctuel : arrondir son achat au euro superieur. C&apos;est efficace mais non recurrent. Les cagnottes en ligne (Leetchi, GoFundMe) mobilisent pour une cause unique et ponctuelle. Dans les deux cas, le flux de solidarite est irregulier et imprevisible.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI cree un flux continu et previsible. Chaque mois, le pool se reconstitue avec les abonnements de 3 euros. Chaque mois, il est redistribue aux commercants. Cette regularite permet aux commercants de compter sur un complement de revenus stable. De plus, contrairement a l&apos;arrondi qui profite a une association, le pool COLHYBRI beneficie a l&apos;ensemble du tissu commercial local.
          </p>

          <h2 className="section-heading">Comment fonctionne le cycle M vers M+1 ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le cycle M vers M+1 est le coeur operationnel de COLHYBRI. En mois M, les abonnements de 3 euros sont collectes et 75% alimentent le pool solidaire. En mois M+1, le pool accumule est redistribue de maniere aleatoire parmi les commercants partenaires sous forme de bons d&apos;achat. Cette mecanique garantit que chaque euro contribue est redistribue le mois suivant, sans retention ni capitalisation.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La distribution aleatoire est un choix delibere. Elle evite le favoritisme, cree un effet de surprise positive pour les commercants et encourage les abonnes a decouvrir de nouveaux commerces. C&apos;est la version numerique du{' '}
            <Link href={`/${locale}/caffe-sospeso-histoire`} className="text-colhybri-primary hover:underline">caffe sospeso</Link>{' '}
            : on ne sait pas qui beneficiera de notre geste, et c&apos;est ce qui le rend beau.
          </p>

          <h2 className="section-heading">Qu&apos;est-ce que le multiplicateur keynesien et comment s&apos;applique-t-il ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le multiplicateur keynesien est un concept economique qui mesure l&apos;effet de cascade d&apos;une depense dans une economie locale. Quand un abonne depense son bon d&apos;achat chez un boulanger, le boulanger utilise cette recette pour payer sa farine chez un fournisseur local, qui paie ses employes, qui consomment a leur tour dans le quartier. Chaque euro depense localement genere ainsi entre 2,5 et 3,5 euros d&apos;activite economique supplementaire.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Concretement, si 1 000 abonnes COLHYBRI contribuent 3 euros chacun, cela represente 3 000 euros mensuels. Avec 75% redistribues (2 250 euros) et un multiplicateur de 2,5, l&apos;impact economique reel atteint 5 625 euros par mois dans l&apos;economie locale. En un an, c&apos;est plus de 67 000 euros injectes dans le quartier a partir de micro-donations de 3 euros. L&apos;effet boule de neige est considerable.
          </p>

          <h2 className="section-heading">Quel impact concret pour les commercants et les abonnes ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pour les commercants, COLHYBRI represente un complement de revenus regulier et inattendu. Un fleuriste qui recoit un bon de 15 euros attire un client qui n&apos;aurait peut-etre jamais pousse sa porte. C&apos;est un double benefice : chiffre d&apos;affaires supplementaire et decouverte par de nouveaux clients. Pour les abonnes, c&apos;est la satisfaction de savoir que leurs 3 euros mensuels font vivre le quartier.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce modele s&apos;inscrit dans la tradition du{' '}
            <Link href={`/${locale}/solidarite-proximite`} className="text-colhybri-primary hover:underline">mutualisme et de la solidarite de proximite</Link>.
            Comme le rappelle la{' '}
            <Link href={`/${locale}/legende-colibri`} className="text-colhybri-primary hover:underline">legende du colibri</Link>,
            chaque petit geste compte. Avec COLHYBRI, nous faisons collectivement notre part pour le commerce local, 3 euros a la fois.
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
