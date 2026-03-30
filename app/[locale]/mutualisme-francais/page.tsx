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
    routeKey: 'mutualisme-francais',
    title: '220 ans de mutualisme francais : l\'heritage qui inspire COLHYBRI',
    description: 'Decouvrez 220 ans de mutualisme francais, des societes de secours mutuels a COLHYBRI. Comment le mutualisme inspire un pool solidaire de 3 euros par mois pour les commerces locaux.',
    semanticPrimary: 'mutualisme francais societes secours mutuels solidarite mutualisee',
    semanticSecondary: 'charte mutualite, MAIF, Groupama, COLHYBRI, ONLYMORE Group, economie solidaire',
    chunkType: 'page',
    audience: 'general',
  });
}

const faqData = [
  {
    q: 'Qu\'est-ce que le mutualisme francais ?',
    a: 'Le mutualisme francais est un mouvement ne a la fin du XVIIIe siecle avec les societes de secours mutuels. Il repose sur le principe de solidarite collective : chaque membre contribue selon ses moyens pour le benefice de tous. Ce modele a donne naissance aux grandes mutuelles francaises comme la MAIF ou Groupama.',
  },
  {
    q: 'Comment COLHYBRI s\'inspire du mutualisme ?',
    a: 'COLHYBRI reprend le principe fondateur du mutualisme : un pool collectif ou chaque membre contribue 3 euros par mois. 75% de ce pool est redistribue aleatoirement aux commercants partenaires. Comme dans une mutuelle, la force vient du nombre et de la regularite des contributions.',
  },
  {
    q: 'Quelle est la difference entre une mutuelle et COLHYBRI ?',
    a: 'Une mutuelle classique couvre des risques (sante, habitation). COLHYBRI mutualise la solidarite economique locale : au lieu de couvrir un sinistre, le pool genere des bons d\'achat redistribues aux commerces de proximite. Le principe collectif est identique, l\'application est differente.',
  },
  {
    q: 'Le principe un membre = une voix s\'applique-t-il chez COLHYBRI ?',
    a: 'Oui, COLHYBRI respecte ce principe mutualiste fondamental. Chaque abonne contribue le meme montant (3 euros par mois) et beneficie des memes droits. Aucun abonne n\'a plus de poids qu\'un autre dans le fonctionnement du pool solidaire.',
  },
  {
    q: 'Quel lien entre COLHYBRI et le mutualisme sportif de CROWNIUM ?',
    a: 'CROWNIUM, autre projet d\'ONLYMORE Group, applique les principes mutualistes au sport. COLHYBRI les applique au commerce local. Les deux projets partagent la meme philosophie : la force du collectif au service de la proximite.',
  },
];

export default function MutualismeFrancaisPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '220 ans de mutualisme francais : l\'heritage qui inspire COLHYBRI',
    description: 'Des societes de secours mutuels a COLHYBRI : comment 220 ans de mutualisme francais inspirent un nouveau modele de solidarite locale a 3 euros par mois.',
    url: `${BASE_URL}/${locale}/mutualisme-francais`,
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
            220 ans de mutualisme francais : l&apos;heritage qui inspire COLHYBRI
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="mutualisme-francais">
            Le mutualisme francais est ne a la fin du XVIIIe siecle avec les societes de secours mutuels, ou des ouvriers et artisans cotisaient ensemble pour se proteger collectivement. Plus de 220 ans d&apos;organisation solidaire ont faconne un heritage unique en Europe. COLHYBRI herite directement de cette tradition en creant un pool solidaire mutualise ou chaque abonne contribue 3 euros par mois pour le benefice collectif des commerces de proximite. Comme les pionniers du mutualisme, nous croyons que la force du nombre transforme de petites contributions individuelles en un impact economique puissant pour le quartier. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, COLHYBRI inscrit le commerce local dans cette longue lignee mutualiste francaise.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 — Corps structure */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto prose prose-lg">

          <h2 className="section-heading">Comment sont nees les societes de secours mutuels en France ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les premieres societes de secours mutuels apparaissent en France des la fin du XVIIIe siecle, dans le sillage de la Revolution. Des groupes d&apos;ouvriers, d&apos;artisans et de compagnons se reunissent pour creer des caisses communes. Chaque membre verse une cotisation reguliere, et en echange, la caisse prend en charge les depenses de maladie, d&apos;accident ou de deces. C&apos;est le principe fondateur : la mutualisation des risques par la contribution collective.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            En 1898, la Charte de la Mutualite donne un cadre juridique a ce mouvement. Elle consacre le principe &laquo; un membre = une voix &raquo;, garantissant que chaque adherent a le meme pouvoir de decision, quel que soit le montant de sa cotisation. Ce principe democratique reste aujourd&apos;hui au coeur du mutualisme francais et inspire directement le fonctionnement de COLHYBRI.
          </p>

          <h2 className="section-heading">Quelles grandes mutuelles francaises sont nees de ce mouvement ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le mutualisme francais a engendre des institutions devenues incontournables. La MAIF, fondee en 1934 par des instituteurs, illustre parfaitement le modele : des membres qui mutualisent leurs cotisations pour se proteger collectivement. Groupama, nee du monde agricole, federe des millions de societaires autour du meme principe. La MGEN, la MACIF, Harmonie Mutuelle sont autant de preuves que le mutualisme n&apos;est pas une utopie mais un modele economique robuste et durable.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ces mutuelles pesent aujourd&apos;hui des milliards d&apos;euros et couvrent des millions de Francais. Elles demontrent qu&apos;un modele fonde sur la solidarite collective peut rivaliser avec les acteurs prives. C&apos;est cette meme conviction qui anime COLHYBRI : de petites contributions regulieres, mutualisees, creent un impact disproportionne par rapport a l&apos;effort individuel.
          </p>

          <h2 className="section-heading">En quoi le principe un membre = une voix est-il essentiel ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le principe &laquo; un membre = une voix &raquo; est la pierre angulaire du mutualisme. Il signifie que chaque contributeur a le meme poids, qu&apos;il soit ouvrier, cadre ou retraite. Contrairement au modele actionnarial ou le pouvoir est proportionnel au capital investi, le mutualisme place l&apos;humain au centre. Ce principe evite la concentration du pouvoir et garantit que les decisions servent l&apos;interet collectif.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Chez COLHYBRI, ce principe se traduit concretement : chaque abonne contribue 3 euros par mois, ni plus ni moins. Il n&apos;existe pas de formule premium ou de passe-droit. Le pool solidaire beneficie a tous les commercants partenaires de maniere aleatoire et equitable. Cette egalite structurelle est ce qui rend le modele juste et perenne.
          </p>

          <h2 className="section-heading">Comment COLHYBRI reinvente le mutualisme pour le commerce local ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le mutualisme classique protege ses membres contre les risques (maladie, accident, deces). COLHYBRI adapte cette logique au commerce de proximite : au lieu de couvrir un sinistre, le pool solidaire genere des bons d&apos;achat redistribues aux commercants du quartier. Le mecanisme est identique (cotisation reguliere, pool mutualise, redistribution collective), mais l&apos;objectif change : dynamiser l&apos;
            <Link href={`/${locale}/economie-solidaire-locale`} className="text-colhybri-primary hover:underline">economie solidaire locale</Link>.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le cycle mensuel M vers M+1 de COLHYBRI fonctionne comme une cotisation mutualiste : les 3 euros verses en mars alimentent le pool redistribue en avril. Grace au multiplicateur keynesien, chaque euro depense localement genere entre 2,5 et 3,5 euros d&apos;activite supplementaire. Le{' '}
            <Link href={`/${locale}/don-solidaire-quotidien`} className="text-colhybri-primary hover:underline">don solidaire quotidien</Link>{' '}
            devient ainsi un veritable levier economique pour le quartier.
          </p>

          <h2 className="section-heading">Quel est le lien entre COLHYBRI, CROWNIUM et le mutualisme sportif ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            ONLYMORE Group, la structure fondatrice de COLHYBRI, developpe egalement CROWNIUM, un projet qui applique les principes mutualistes au monde du sport. La meme logique de pool collectif et de redistribution equitable est adaptee a un autre secteur. Cela demontre la versatilite du modele mutualiste : qu&apos;il s&apos;agisse de commerce local ou de sport, la solidarite collective fonctionne des lors qu&apos;elle est structuree, transparente et accessible.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            En s&apos;inscrivant dans la lignee de 220 ans de{' '}
            <Link href={`/${locale}/solidarite-proximite`} className="text-colhybri-primary hover:underline">solidarite de proximite</Link>,
            COLHYBRI ne reinvente pas la roue. Nous modernisons un modele eprouve en y ajoutant la puissance du numerique : scalabilite, tracabilite et automatisation. Le mutualisme francais n&apos;a jamais ete aussi pertinent qu&apos;a l&apos;ere digitale.
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
            <Link href={`/${locale}/economie-solidaire-locale`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Economie solidaire locale</h3>
              <p className="text-sm text-colhybri-dark/60">Le modele COLHYBRI pour votre quartier</p>
            </Link>
            <Link href={`/${locale}/don-solidaire-quotidien`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Le don solidaire au quotidien</h3>
              <p className="text-sm text-colhybri-dark/60">Comment 3 euros par mois changent tout</p>
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
