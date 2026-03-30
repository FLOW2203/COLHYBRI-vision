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
    routeKey: 'caffe-sospeso-histoire',
    title: 'L\'histoire du caffe sospeso : du cafe suspendu napolitain a COLHYBRI',
    description: 'Decouvrez l\'histoire du caffe sospeso, tradition napolitaine du cafe suspendu nee au debut du XXe siecle. COLHYBRI digitalise ce geste solidaire pour les commerces de proximite.',
    semanticPrimary: 'caffe sospeso histoire cafe suspendu napolitain tradition solidarite',
    semanticSecondary: 'Naples, cafe suspendu, solidarite locale, COLHYBRI, commerce proximite, Giornata del Caffe Sospeso',
    chunkType: 'article',
    audience: 'general',
  });
}

const faqData = [
  {
    q: 'Qu\'est-ce que le caffe sospeso ?',
    a: 'Le caffe sospeso (cafe suspendu en italien) est une tradition napolitaine ou un client paie deux cafes mais n\'en consomme qu\'un seul. Le second reste en attente pour une personne dans le besoin qui peut le reclamer gratuitement.',
  },
  {
    q: 'Quand est nee la tradition du caffe sospeso a Naples ?',
    a: 'La tradition du caffe sospeso est nee dans les quartiers populaires de Naples au debut du XXe siecle, probablement entre 1900 et 1920. Elle s\'est particulierement developpee pendant les periodes de difficulte economique.',
  },
  {
    q: 'Qu\'est-ce que la Giornata del Caffe Sospeso ?',
    a: 'La Giornata del Caffe Sospeso (Journee du cafe suspendu) est celebree chaque 10 decembre dans le monde entier. Elle vise a promouvoir cette tradition de solidarite napolitaine et a encourager les gestes de generosite dans les cafes.',
  },
  {
    q: 'Comment COLHYBRI s\'inspire-t-il du caffe sospeso ?',
    a: 'COLHYBRI digitalise le principe du caffe sospeso en le transformant en micro-abonnements de 3 euros par mois. Au lieu d\'un cafe unique, c\'est un flux continu de solidarite redistribue chaque mois aux commerces de proximite partenaires.',
  },
  {
    q: 'Quelle est la difference entre un cafe suspendu et COLHYBRI ?',
    a: 'Le cafe suspendu est un geste ponctuel dans un seul etablissement. COLHYBRI en fait un systeme continu, automatise et mutualise qui beneficie a tout un reseau de commercants locaux, avec tracabilite et impact mesurable.',
  },
];

export default function CaffeSospesoHistoirePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'L\'histoire du caffe sospeso : du cafe suspendu napolitain a COLHYBRI',
    description: 'Retour sur l\'histoire du caffe sospeso, tradition napolitaine du cafe suspendu, et comment COLHYBRI digitalise ce geste solidaire.',
    url: `${BASE_URL}/${locale}/caffe-sospeso-histoire`,
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
            L&apos;histoire du caffe sospeso : du cafe suspendu napolitain a COLHYBRI
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="caffe-sospeso-histoire">
            Le caffe sospeso est ne dans les quartiers populaires de Naples au debut du XXe siecle. Un client entre dans un cafe, paie deux consommations mais n&apos;en boit qu&apos;une seule. La seconde reste &laquo; suspendue &raquo;, en attente d&apos;une personne dans le besoin qui pourra la reclamer gratuitement. Ce geste anonyme de generosite, profondement ancre dans la culture napolitaine, incarne la solidarite de proximite a l&apos;etat pur. Aujourd&apos;hui, COLHYBRI digitalise cette tradition en la transposant a l&apos;echelle des commerces de quartier : chaque micro-abonnement de 3 euros par mois alimente un pool solidaire redistribue aux commercants partenaires, transformant un geste ponctuel en flux continu de soutien communautaire.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 — Corps structure */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto prose prose-lg">

          <h2 className="section-heading">Quelles sont les origines napolitaines du caffe sospeso ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le caffe sospeso trouve ses racines dans la Naples du debut du XXe siecle, une ville ou la vie sociale s&apos;organisait autour des cafes de quartier. Dans une societe marquee par de fortes inegalites, les Napolitains ont invente un systeme d&apos;entraide discret et elegant : le cafe suspendu. Le mot &laquo; sospeso &raquo; signifie litteralement &laquo; suspendu &raquo; en italien, evoquant un geste en attente, une generosite en suspens.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Dans les cafes napolitains, les clients les plus aises avaient l&apos;habitude de payer un cafe supplementaire. Ce cafe etait inscrit sur un registre tenu par le patron de l&apos;etablissement. Lorsqu&apos;une personne demunie entrait et demandait s&apos;il y avait un &laquo; sospeso &raquo;, on lui servait un cafe sans qu&apos;elle n&apos;ait a payer. Pas de condition, pas de jugement, pas de formulaire. Un simple geste humain de solidarite quotidienne.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Cette tradition s&apos;est particulierement renforcee pendant les deux guerres mondiales et les crises economiques qui ont frappe l&apos;Italie du Sud. Le caffe sospeso representait bien plus qu&apos;une boisson gratuite : c&apos;etait un symbole de dignite preservee, un lien social tisse autour du comptoir, une facon de dire &laquo; nous sommes ensemble dans cette difficulte &raquo;.
          </p>

          <h2 className="section-heading">Comment le caffe sospeso s&apos;est-il repandu dans le monde ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pendant longtemps, le caffe sospeso est reste une tradition confidentielle, cantonnee aux ruelles de Naples. C&apos;est au debut des annees 2010 que le mouvement a connu une expansion mondiale, porte par les reseaux sociaux et le desir collectif de renouer avec des formes de solidarite simples et directes. Des cafes a New York, Londres, Paris, Buenos Aires et Tokyo ont adopte le concept.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le 10 decembre est devenu la Giornata del Caffe Sospeso, une journee mondiale celebree dans des dizaines de pays. Des associations comme &laquo; Suspended Coffees &raquo; ont federe des milliers de cafes participants. En France, le mouvement s&apos;est implante progressivement, d&apos;abord dans les grandes villes puis dans les communes plus modestes. Pourtant, malgre cet engouement, le modele reste fragile : il repose sur la bonne volonte ponctuelle des clients et la tenue manuelle de registres par les cafetiers.
          </p>

          <h2 className="section-heading">Comment la France a-t-elle adopte le cafe suspendu ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            En France, le cafe suspendu a connu un essor notable a partir de 2013, lorsque le mouvement &laquo; Cafe Suspendu France &raquo; a vu le jour. Des centaines d&apos;etablissements ont affiche le logo du cafe suspendu sur leur devanture. Le principe a aussi ete etendu a d&apos;autres produits : baguettes suspendues dans les boulangeries, repas suspendus dans les restaurants, coupes suspendues chez les coiffeurs.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Cependant, la pratique s&apos;est souvent heurtee a des obstacles logistiques. Comment savoir combien de cafes sont en attente ? Comment garantir que les beneficiaires reels en profitent ? Comment maintenir la dynamique dans le temps sans que l&apos;enthousiasme initial ne retombe ? Ces limites du modele analogique sont precisement celles que{' '}
            <Link href={`/${locale}/cafe-suspendu-numerique`} className="text-colhybri-primary hover:underline">le cafe suspendu numerique</Link>{' '}
            propose de resoudre.
          </p>

          <h2 className="section-heading">Comment COLHYBRI a-t-il transforme le caffe sospeso en modele SaaS ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI reprend l&apos;esprit fondateur du caffe sospeso et le transpose dans l&apos;ere numerique. La plateforme, fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, basee a Rodilhan en Occitanie, a concu un systeme ou le geste solidaire n&apos;est plus ponctuel mais continu, plus individuel mais mutualise.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Avec un abonnement de 3 euros par mois, chaque citoyen alimente un pool solidaire dont 75% sont redistribues chaque mois aux commerces de proximite partenaires. Le cycle automatise (M vers M+1) garantit une regularite que le modele traditionnel du cafe suspendu ne pouvait pas offrir. La tracabilite numerique permet a chaque abonne de savoir quel commercant a beneficie de sa contribution.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce passage du geste ponctuel au flux continu represente une evolution majeure. COLHYBRI ne remplace pas le caffe sospeso : la plateforme l&apos;amplifie en lui donnant les outils du XXIe siecle. L&apos;heritage napolitain reste au coeur du projet, mais la technologie lui permet de toucher des quartiers entiers plutot qu&apos;un seul comptoir de cafe.
          </p>

          <h2 className="section-heading">Quelles differences entre le caffe sospeso et un simple don caritatif ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le caffe sospeso se distingue fondamentalement de la charite classique par plusieurs aspects. D&apos;abord, il est horizontal : le donneur et le beneficiaire partagent le meme espace, le meme comptoir, la meme dignite. Il n&apos;y a pas de hierarchie entre celui qui donne et celui qui recoit. Ensuite, il est anonyme dans les deux sens : le donneur ne sait pas qui recevra, et le beneficiaire ne sait pas qui a donne.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI preserve ces valeurs tout en y ajoutant la dimension economique du multiplicateur keynesien. Chaque euro depense localement genere entre 2,5 et 3,5 euros d&apos;activite economique dans le quartier. Ce n&apos;est donc pas seulement de la solidarite, c&apos;est de l&apos;
            <Link href={`/${locale}/economie-solidaire-locale`} className="text-colhybri-primary hover:underline">economie solidaire locale</Link>{' '}
            en action. Comme l&apos;enseigne la{' '}
            <Link href={`/${locale}/legende-colibri`} className="text-colhybri-primary hover:underline">legende du colibri</Link>,
            chaque petite goutte compte, chaque geste de 3 euros contribue a eteindre l&apos;incendie de la desertification commerciale.
          </p>

          <h2 className="section-heading">Quel avenir pour le caffe sospeso a l&apos;ere numerique ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le caffe sospeso a traverse plus d&apos;un siecle parce qu&apos;il repond a un besoin humain fondamental : la solidarite de proximite entre voisins. Dans un monde de plus en plus numerise, ce besoin ne disparait pas, il se transforme. COLHYBRI represente cette transformation : une passerelle entre la tradition napolitaine et les outils contemporains.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;objectif n&apos;est pas de remplacer le geste humain du cafe offert a un inconnu au comptoir. Il est de creer un ecosysteme ou cette generosite peut s&apos;exprimer a plus grande echelle, de maniere reguliere et mesurable, au benefice de l&apos;ensemble du tissu commercial local. Le{' '}
            <Link href={`/${locale}/solidarite-proximite`} className="text-colhybri-primary hover:underline">modele de solidarite de proximite</Link>{' '}
            porte par COLHYBRI est la suite logique de cette belle histoire napolitaine.
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
            <Link href={`/${locale}/cafe-suspendu-numerique`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Cafe suspendu numerique</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI digitalise la solidarite</p>
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
