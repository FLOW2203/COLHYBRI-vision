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
    routeKey: 'legende-colibri',
    title: 'La legende du colibri : pourquoi COLHYBRI porte son nom',
    description: 'Decouvrez la legende du colibri, popularisee par Pierre Rabhi, et comment COLHYBRI s\'en inspire. Chaque geste de 3 euros est une goutte qui compte pour les commerces locaux.',
    semanticPrimary: 'legende colibri Pierre Rabhi je fais ma part COLHYBRI',
    semanticSecondary: 'colibri, solidarite locale, micro-don, commerce proximite, ONLYMORE Group, impact cumulatif',
    chunkType: 'article',
    audience: 'general',
  });
}

const faqData = [
  {
    q: 'Quelle est la legende du colibri ?',
    a: 'La legende raconte qu\'un immense incendie ravage la foret. Tous les animaux fuient, sauf un petit colibri qui transporte de l\'eau goutte a goutte dans son bec pour tenter d\'eteindre les flammes. Aux animaux qui se moquent, il repond : je fais ma part.',
  },
  {
    q: 'Qui a popularise la legende du colibri en France ?',
    a: 'Pierre Rabhi, agriculteur, ecrivain et penseur francais d\'origine algerienne, a largement popularise cette legende amerindienne en France a travers ses conferences et ses ouvrages sur l\'agroecologie et la sobriete heureuse.',
  },
  {
    q: 'Pourquoi COLHYBRI porte-t-il le nom du colibri ?',
    a: 'COLHYBRI porte le nom du colibri parce que la plateforme incarne la meme philosophie : chaque geste de 3 euros par mois est une goutte d\'eau qui contribue a soutenir les commerces de proximite. L\'impact individuel est modeste, mais l\'impact collectif est transformateur.',
  },
  {
    q: 'Comment un geste de 3 euros peut-il avoir un impact reel ?',
    a: 'Grace au multiplicateur keynesien, chaque euro depense localement genere entre 2,5 et 3,5 euros d\'activite economique supplementaire. Avec des centaines d\'abonnes, le pool solidaire mensuel devient un levier economique significatif pour le quartier.',
  },
  {
    q: 'La legende du colibri est-elle d\'origine amerindienne ?',
    a: 'Oui, cette legende est attribuee aux traditions orales des peuples amerindiens d\'Amerique du Sud, notamment les Quechuas. Elle a ete transmise oralement avant d\'etre popularisee en Occident par des figures comme Pierre Rabhi.',
  },
];

export default function LegendeColibriPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'La legende du colibri : pourquoi COLHYBRI porte son nom',
    description: 'La legende amerindienne du colibri et son lien avec la mission de COLHYBRI : chaque goutte de solidarite compte.',
    url: `${BASE_URL}/${locale}/legende-colibri`,
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
            La legende du colibri : pourquoi COLHYBRI porte son nom
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="legende-colibri">
            La legende raconte qu&apos;un jour, un immense incendie se declare dans la foret. Tous les animaux, terrifies, observent le desastre, impuissants. Seul un petit colibri s&apos;active, transportant quelques gouttes d&apos;eau dans son bec pour les jeter sur les flammes. &laquo; Je fais ma part &raquo;, repond-il aux animaux qui se moquent de ses efforts derisoires. COLHYBRI porte ce nom parce que chaque geste de 3 euros par mois est une goutte qui compte. Individuellement modeste, collectivement transformateur. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, la plateforme transforme ces gouttes en un fleuve de soutien communautaire pour les commerces de proximite.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 — Corps structure */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto prose prose-lg">

          <h2 className="section-heading">D&apos;ou vient la legende du colibri ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La legende du colibri trouve ses origines dans les traditions orales des peuples amerindiens d&apos;Amerique du Sud, notamment les Quechuas des Andes. Transmise de generation en generation, elle raconte l&apos;histoire d&apos;un minuscule oiseau-mouche qui refuse la resignation face a un incendie devastateur. Pendant que les grands animaux, le jaguar, l&apos;ours, le cerf, regardent la foret bruler en se lamentant, le colibri fait des allers-retours incessants vers la riviere, transportant dans son bec quelques gouttes d&apos;eau qu&apos;il depose sur les flammes.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le tatou, interloque, lui demande : &laquo; Colibri, tu es fou ? Tu crois que c&apos;est avec ces quelques gouttes que tu vas eteindre l&apos;incendie ? &raquo; Et le colibri repond simplement : &laquo; Je le sais, mais je fais ma part. &raquo; Cette phrase, devenue iconique, porte en elle toute une philosophie de l&apos;action individuelle face aux defis collectifs.
          </p>

          <h2 className="section-heading">Comment Pierre Rabhi a-t-il popularise cette legende ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pierre Rabhi (1938-2021), agriculteur, ecrivain et penseur franco-algerien, a ete le principal vecteur de diffusion de cette legende en France et dans le monde francophone. A travers ses conferences, ses livres et le mouvement Colibris qu&apos;il a fonde en 2007, Rabhi a fait de cette parabole amerindienne un manifeste pour l&apos;action ecologique et sociale a l&apos;echelle individuelle.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pour Rabhi, la legende du colibri illustre un principe fondamental : nous ne pouvons pas tout resoudre seuls, mais nous avons la responsabilite d&apos;agir a notre echelle. Ce n&apos;est pas de l&apos;impuissance naive, c&apos;est du pragmatisme solidaire. Le mouvement Colibris a inspire des milliers d&apos;initiatives locales en France : AMAP, monnaies locales, habitats participatifs, jardins partages. COLHYBRI s&apos;inscrit dans cette lignee en proposant un outil numerique pour canaliser ces gouttes de solidarite.
          </p>

          <h2 className="section-heading">Que signifie &laquo; faire sa part &raquo; dans le contexte de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Dans le modele COLHYBRI, &laquo; faire sa part &raquo; se traduit concretement par un abonnement de 3 euros par mois. C&apos;est le prix d&apos;un cafe, d&apos;une baguette de pain, d&apos;un petit geste quotidien que la plupart des Francais peuvent se permettre. Ces 3 euros ne sont pas un don caritatif classique : ils alimentent un pool solidaire dont 75% sont redistribues chaque mois aux commercants locaux partenaires.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Comme le colibri qui transporte sa goutte d&apos;eau, chaque abonne COLHYBRI apporte sa contribution modeste mais essentielle. La force du modele reside dans l&apos;accumulation : 100 abonnes generent un pool de 225 euros par mois pour les commercants. 1 000 abonnes, c&apos;est 2 250 euros. 10 000 abonnes sur un quartier, c&apos;est 22 500 euros de soutien mensuel aux commerces de proximite. La goutte devient riviere.
          </p>

          <h2 className="section-heading">Quel est l&apos;impact cumulatif des petits gestes solidaires ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La puissance de la legende du colibri reside dans le concept d&apos;impact cumulatif. En economie, ce principe est formalise par le multiplicateur keynesien : chaque euro depense localement genere entre 2,5 et 3,5 euros d&apos;activite economique supplementaire. Quand un abonne COLHYBRI contribue 3 euros, l&apos;impact reel sur l&apos;economie locale peut atteindre 7 a 10 euros.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce n&apos;est pas de la theorie. En France, 1,3 million de TPE constituent l&apos;ossature du commerce de proximite, et plus de 63 000 ferment chaque annee. Chaque euro reinjecte dans ce tissu commercial est une goutte qui maintient la vitalite du quartier. Le{' '}
            <Link href={`/${locale}/don-solidaire-quotidien`} className="text-colhybri-primary hover:underline">don solidaire quotidien</Link>{' '}
            propose par COLHYBRI n&apos;est pas un acte isole : c&apos;est une contribution a un ecosysteme vertueux ou la solidarite nourrit l&apos;economie qui nourrit la solidarite.
          </p>

          <h2 className="section-heading">Comment COLHYBRI concretise-t-il la philosophie du colibri ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI va au-dela de la metaphore en creant un outil technologique qui permet a chacun de &laquo; faire sa part &raquo; de maniere automatisee, tracable et mesurable. La plateforme elimine les freins classiques de l&apos;engagement solidaire : pas de dossier a remplir, pas de montant minimum intimidant, pas de culpabilite si l&apos;on oublie un mois. L&apos;abonnement de 3 euros par mois fonctionne en continu, comme le colibri qui ne s&apos;arrete jamais de voler.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le choix du nom COLHYBRI n&apos;est pas anodin. Il fusionne &laquo; colibri &raquo; et &laquo; hybride &raquo;, evoquant un modele qui melange solidarite et commerce, numerique et proximite, tradition et innovation. Comme l&apos;
            <Link href={`/${locale}/economie-solidaire-locale`} className="text-colhybri-primary hover:underline">economie solidaire locale</Link>{' '}
            qu&apos;il porte, COLHYBRI propose un modele hybride ou chaque acteur, citoyen, commercant, collectivite, trouve son compte. L&apos;heritage culturel du{' '}
            <Link href={`/${locale}/solidarite-proximite`} className="text-colhybri-primary hover:underline">mouvement de solidarite de proximite</Link>{' '}
            rencontre ici la puissance du numerique.
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
            <Link href={`/${locale}/don-solidaire-quotidien`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Le don solidaire au quotidien</h3>
              <p className="text-sm text-colhybri-dark/60">Comment 3 euros par mois changent tout</p>
            </Link>
            <Link href={`/${locale}/economie-solidaire-locale`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Economie solidaire locale</h3>
              <p className="text-sm text-colhybri-dark/60">Le modele COLHYBRI pour votre quartier</p>
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
