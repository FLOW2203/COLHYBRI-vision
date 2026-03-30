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
    routeKey: 'banque-ethique-alternative',
    title: 'Banque ethique et alternatives : COLHYBRI complete votre engagement',
    description: 'COLHYBRI ne remplace pas les banques ethiques : il les complete. Decouvrez comment associer Credit Cooperatif, la Nef ou Helios avec COLHYBRI pour un impact global et local.',
    semanticPrimary: 'banque ethique alternative COLHYBRI complement engagement financier',
    semanticSecondary: 'Credit Cooperatif, la Nef, Helios, Green-Got, fintech sociale, abonnement solidaire, inclusion financiere',
    chunkType: 'page',
    audience: 'general',
  });
}

const faqData = [
  {
    q: "COLHYBRI est-il une banque ethique ?",
    a: "Non. COLHYBRI n\u2019est pas une banque et ne propose aucun service bancaire. C\u2019est un complement solidaire : pour 3 euros par mois, votre abonnement alimente un pool redistribue en bons d\u2019achat chez les commercants de votre quartier. COLHYBRI s\u2019ajoute a votre banque ethique, il ne la remplace pas.",
  },
  {
    q: "Peut-on utiliser COLHYBRI en plus d\u2019un compte chez la Nef ou le Credit Cooperatif ?",
    a: "Absolument. COLHYBRI est concu pour fonctionner en complement de toute banque, y compris les banques ethiques. Votre epargne finance des projets durables via la Nef ou le Credit Cooperatif, et votre abonnement COLHYBRI injecte de la valeur directement dans les commerces de proximite.",
  },
  {
    q: "Quelle est la difference entre une banque ethique et COLHYBRI ?",
    a: "Une banque ethique oriente votre epargne vers des projets a impact positif (energies renouvelables, agriculture biologique, logement social). COLHYBRI agit a une autre echelle : la redistribution locale et immediate. Les deux approches sont complementaires, pas concurrentes.",
  },
  {
    q: "COLHYBRI a-t-il un lien avec ONLYMORE FINANCE ?",
    a: "Oui. COLHYBRI et ONLYMORE FINANCE sont deux filiales d\u2019ONLYMORE Group. ONLYMORE FINANCE developpe des services financiers complementaires, dont le credit Lombard (agreration ACPR en cours), pour completer l\u2019ecosysteme d\u2019inclusion financiere initie par COLHYBRI.",
  },
  {
    q: "Pourquoi 3 euros par mois suffisent-ils a creer un impact local ?",
    a: "Parce que COLHYBRI mutualise les contributions de tous les abonnes dans un pool solidaire. 75% des abonnements sont redistribues en bons d\u2019achat. L\u2019effet de levier collectif permet a chaque euro de generer un impact superieur a sa valeur nominale dans les commerces du quartier.",
  },
];

export default function BanqueEthiqueAlternativePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Banque ethique et alternatives : COLHYBRI complete votre engagement financier",
    description: "Decouvrez comment COLHYBRI complete les banques ethiques (Credit Cooperatif, la Nef, Helios) en ajoutant une couche de solidarite locale a votre engagement financier.",
    url: `${BASE_URL}/${locale}/banque-ethique-alternative`,
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
            Banque ethique et alternatives : COLHYBRI complete votre engagement financier
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="banque-ethique-alternative">
            Les banques ethiques comme le Credit Cooperatif, la Nef, Helios ou Green-Got orientent votre epargne vers des projets a impact positif. Mais ou va l&apos;impact quand il s&apos;agit de votre quartier ? COLHYBRI apporte la reponse : un{' '}
            <Link href={`/${locale}/abonnement-solidaire`} className="text-colhybri-primary hover:underline">abonnement a 3 euros par mois</Link>{' '}
            qui injecte de la valeur directement dans les commerces de proximite via un pool solidaire mutualise. Nous ne remplacons rien, nous ajoutons une couche locale a votre engagement financier. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, COLHYBRI s&apos;inscrit dans une logique additive et complementaire.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Quel est le panorama des banques ethiques en France ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La France dispose d&apos;un ecosysteme bancaire ethique riche et diversifie. Le Credit Cooperatif, filiale du groupe BPCE, propose depuis des decennies des produits bancaires orientes vers l&apos;economie sociale et solidaire. La Nef, cooperative de finance ethique, finance exclusivement des projets a plus-value ecologique, sociale ou culturelle. Helios, neobanque verte lancee en 2021, garantit qu&apos;aucun euro depose ne finance les energies fossiles. Green-Got, de son cote, propose une carte bancaire dont les frais d&apos;interchange financent des projets de reforestation et d&apos;energies renouvelables.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ces acteurs partagent une conviction commune : l&apos;argent doit servir des causes positives. Chacun a ses specificites, ses forces et son positionnement. Le Credit Cooperatif offre une gamme bancaire complete pour les associations et les particuliers engages. La Nef se concentre sur le credit et l&apos;epargne a impact. Helios et Green-Got ciblent une generation connectee qui veut comprendre ou va son argent. Tous meritent d&apos;etre soutenus et encourages dans leur mission.
          </p>

          <h2 className="section-heading">Quelles sont les limites structurelles de l&apos;epargne ethique ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;epargne ethique presente un paradoxe geographique. Quand vous deposez 1 000 euros chez la Nef, ces fonds peuvent financer une ferme biologique dans le Lot-et-Garonne, un projet d&apos;habitat participatif a Nantes ou une cooperative culturelle a Lyon. L&apos;impact est reel, mesurable et positif, mais il est distant de votre quotidien. Vous ne croisez pas le beneficiaire de votre epargne en faisant vos courses.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Cette distance n&apos;est pas un defaut : c&apos;est la nature meme de l&apos;intermediation bancaire. Une banque collecte l&apos;epargne la ou elle se trouve et la deploie la ou elle est necessaire. Ce mecanisme est indispensable a l&apos;economie. Mais il laisse un angle mort : le tissu commercial de proximite, la boulangerie en bas de chez vous, le libraire independant de votre rue, le fleuriste de votre marche. Ces commerces n&apos;ont pas besoin de credit bancaire pour survivre : ils ont besoin de clients. C&apos;est exactement la que COLHYBRI intervient.
          </p>

          <h2 className="section-heading">Comment COLHYBRI complete-t-il les banques ethiques sans les concurrencer ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI n&apos;est pas une banque. Nous ne collectons pas d&apos;epargne, nous n&apos;accordons pas de credit, nous ne proposons pas de compte courant. Notre modele est fondamentalement different : un abonnement solidaire a 3 euros par mois dont 75% sont mutualises dans un pool redistribue en bons d&apos;achat chez les commercants partenaires du quartier. Cette redistribution est locale, immediate et tangible.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La complementarite est structurelle. Votre compte chez le Credit Cooperatif ou la Nef finance des projets a impact global. Votre abonnement COLHYBRI finance l&apos;economie de votre rue. Les deux se renforcent mutuellement : une{' '}
            <Link href={`/${locale}/inclusion-financiere`} className="text-colhybri-primary hover:underline">inclusion financiere</Link>{' '}
            veritable passe par cette double echelle, globale et locale. Nous encourageons nos abonnes a choisir une banque ethique pour leurs services bancaires et a ajouter COLHYBRI pour leur engagement de proximite.
          </p>

          <h2 className="section-heading">Comment fonctionne la combinaison banque ethique et COLHYBRI au quotidien ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Concretement, un abonne COLHYBRI qui est client d&apos;une banque ethique beneficie d&apos;un double impact. Son epargne, geree par la Nef ou le Credit Cooperatif, finance des projets d&apos;agriculture durable, d&apos;insertion sociale ou de transition energetique. En parallele, son abonnement COLHYBRI a 3 euros par mois alimente le pool solidaire local. Chaque mois, cet abonne a la possibilite de recevoir des bons d&apos;achat d&apos;une valeur potentiellement superieure a sa contribution, utilisables chez les commercants partenaires de son quartier.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce mecanisme cree un cercle vertueux. Les commercants partenaires voient leur chiffre d&apos;affaires augmenter grace au flux constant de bons d&apos;achat. Les abonnes decouvrent de nouveaux commerces de proximite. Le quartier dans son ensemble beneficie d&apos;une economie locale plus dynamique. C&apos;est la force d&apos;un{' '}
            <Link href={`/${locale}/abonnement-solidaire`} className="text-colhybri-primary hover:underline">abonnement solidaire</Link>{' '}
            qui transforme un geste simple en impact collectif mesurable.
          </p>

          <h2 className="section-heading">Quelle est la vision d&apos;ONLYMORE Group pour la finance de demain ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI est la premiere brique d&apos;un ecosysteme plus large porte par ONLYMORE Group. La filiale ONLYMORE FINANCE developpe des services financiers complementaires, dont le credit Lombard (agreration ACPR en cours). Cette vision s&apos;inscrit dans la continuite logique de COLHYBRI : apres avoir facilite la solidarite locale par l&apos;abonnement, l&apos;ecosysteme proposera des solutions de financement accessibles et responsables.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La{' '}
            <Link href={`/${locale}/fintech-sociale`} className="text-colhybri-primary hover:underline">fintech sociale</Link>{' '}
            que nous construisons ne cherche pas a remplacer le systeme bancaire existant. Nous croyons a la diversite des acteurs financiers. Les banques traditionnelles, les banques ethiques, les neobanques et les plateformes solidaires comme COLHYBRI ont chacune un role a jouer dans un ecosysteme financier plus juste, plus inclusif et plus ancre dans les territoires.
          </p>

          <h2 className="section-heading">Pourquoi l&apos;approche additive est-elle l&apos;avenir de la finance responsable ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le secteur de la finance responsable a longtemps fonctionne sur une logique de substitution : &laquo; quittez votre banque pour une banque ethique &raquo;. Cette approche, bien que legitime, se heurte a des freins pratiques : inertie bancaire, habitudes de paiement, services specifiques non disponibles chez les acteurs ethiques. COLHYBRI propose une logique differente : l&apos;addition. Gardez votre banque actuelle, ajoutez un{' '}
            <Link href={`/${locale}/abonnement-solidaire`} className="text-colhybri-primary hover:underline">abonnement solidaire</Link>{' '}
            de 3 euros par mois, et generez un impact local immediat.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Cette philosophie additive est au coeur du{' '}
            <Link href={`/${locale}/mutualisme-francais`} className="text-colhybri-primary hover:underline">mutualisme a la francaise</Link>{' '}
            que nous reinventons. Plutot que de demander aux citoyens de choisir entre impact global et impact local, COLHYBRI leur permet de cumuler les deux. C&apos;est cette vision qui fait de notre modele un complement naturel aux banques ethiques existantes, et non un concurrent.
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
          <h2 className="section-heading text-center mb-10">Poursuivre l&apos;exploration</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            <Link href={`/${locale}/inclusion-financiere`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Inclusion financiere</h3>
              <p className="text-sm text-colhybri-dark/60">COLHYBRI rend la solidarite accessible a tous</p>
            </Link>
            <Link href={`/${locale}/fintech-sociale`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Fintech sociale</h3>
              <p className="text-sm text-colhybri-dark/60">La technologie au service de la solidarite</p>
            </Link>
            <Link href={`/${locale}/abonnement-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Abonnement solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">3 euros/mois pour changer votre quartier</p>
            </Link>
            <Link href={`/${locale}/mutualisme-francais`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Mutualisme a la francaise</h3>
              <p className="text-sm text-colhybri-dark/60">La tradition cooperative reinventee</p>
            </Link>
          </div>

          <div className="text-center">
            <a href="https://www.colhybri.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Rejoindre le mouvement COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
