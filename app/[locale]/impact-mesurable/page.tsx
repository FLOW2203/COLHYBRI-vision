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
    routeKey: 'impact-mesurable',
    title: 'Impact mesurable COLHYBRI',
    description: 'Chaque euro COLHYBRI est trace et transparent. KPIs d\'impact, dashboards abonne et commercant, reporting annuel. Decouvrez comment nous mesurons notre impact social.',
    semanticPrimary: 'impact mesurable COLHYBRI transparence traçabilite',
    semanticSecondary: 'KPI impact social, euros redistribues, dashboard, reporting ESS, multiplicateur local',
    chunkType: 'page',
    audience: 'general, investisseurs, collectivites, ESS',
  });
}

const faqData = [
  {
    q: 'Comment COLHYBRI mesure-t-il son impact social ?',
    a: "COLHYBRI suit quatre KPIs principaux : euros redistribues via le pool solidaire, nombre de commercants touches, multiplicateur local (chaque euro depense en commerce de proximite circule 2 a 3 fois), et taux de redemption des bons d\u0027achat. Tout est visible en temps reel sur les dashboards.",
  },
  {
    q: 'Les abonnes COLHYBRI peuvent-ils voir leur impact individuel ?',
    a: "Oui. Chaque abonne dispose d\u0027un dashboard personnel affichant son historique de bons d\u0027achat, son impact cumule en euros redistribues, et les commercants soutenus. La transparence est au coeur du modele COLHYBRI.",
  },
  {
    q: 'Les commercants ont-ils acces a des donnees de performance ?',
    a: "Oui. Le dashboard commercant affiche le nombre de clients acquis via COLHYBRI, le chiffre d\u0027affaires genere par les bons d\u0027achat solidaires, et l\u0027evolution mois par mois. Aucune donnee personnelle des abonnes n\u0027est partagee.",
  },
  {
    q: 'COLHYBRI publie-t-il un rapport annuel d\'impact ?',
    a: "Oui. COLHYBRI s\u0027engage a publier un rapport annuel detaillant les euros redistribues, les commercants partenaires, le multiplicateur local mesure, et les objectifs pour l\u0027annee suivante. Ce reporting s\u0027inscrit dans les standards de l\u0027ESS (Economie Sociale et Solidaire).",
  },
  {
    q: 'En quoi la mesure d\'impact COLHYBRI differe-t-elle d\'un don classique ?',
    a: "Un don classique genere un recu fiscal mais aucune traçabilite sur l\u0027utilisation finale. Chez COLHYBRI, chaque euro est trace du paiement au bon d\u0027achat, du bon au commerce local. L\u0027abonne voit exactement ou son argent a ete utilise et quel impact il a genere.",
  },
];

export default function ImpactMesurablePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Impact mesurable : chaque euro COLHYBRI est trace et transparent',
    description: 'COLHYBRI trace chaque euro du paiement au commerce local. KPIs d\'impact, dashboards, reporting annuel : la transparence comme valeur fondatrice.',
    url: `${BASE_URL}/${locale}/impact-mesurable`,
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
            Impact mesurable : chaque euro COLHYBRI est trace et transparent
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="impact-mesurable">
            Chez COLHYBRI, la transparence n&apos;est pas un argument marketing. C&apos;est une infrastructure. Chaque euro des 3 euros par mois d&apos;abonnement suit un parcours traçable : du paiement au pool solidaire, du pool au bon d&apos;achat, du bon au commerce de proximite. Nous publions nos KPIs en temps reel, nous ouvrons des dashboards aux abonnes et aux commercants, et nous nous engageons sur un reporting annuel conforme aux standards de l&apos;ESS. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, COLHYBRI fait de la mesure d&apos;impact un pilier central de son modele. Nous n&apos;avons pas besoin de nuire aux autres pour briller.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Pourquoi la mesure d&apos;impact est-elle essentielle pour COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La confiance est le carburant de tout modele solidaire. Sans mesure d&apos;impact, les promesses restent des mots. Avec des KPIs publics et verifiables, COLHYBRI transforme chaque promesse en preuve. La mesure d&apos;impact repond a trois enjeux : la confiance des abonnes (savoir ou va chaque euro), l&apos;engagement des commercants (constater le retour concret), et la conformite ESS (repondre aux exigences de reporting de l&apos;Economie Sociale et Solidaire).
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Dans un monde ou les consommateurs sont de plus en plus mefiants envers les promesses sociales des entreprises (greenwashing, socialwashing), COLHYBRI choisit la voie de la transparence radicale. Chaque euro est trace, chaque impact est mesure, chaque resultat est publie. Nous construisons la confiance par la preuve, pas par le discours.
          </p>

          <h2 className="section-heading">Quels sont les KPIs d&apos;impact suivis par COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI suit quatre indicateurs cles de performance (KPIs) d&apos;impact. Le premier est le volume d&apos;euros redistribues via le pool solidaire : c&apos;est la somme totale des bons d&apos;achat generes et distribues aux membres. Le deuxieme est le nombre de commercants touches : combien de commerces de proximite ont recu des clients via les bons COLHYBRI.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le troisieme KPI est le multiplicateur local. Selon les etudes economiques, chaque euro depense dans un commerce de proximite circule 2 a 3 fois dans l&apos;economie locale avant de quitter le territoire. COLHYBRI mesure ce multiplicateur en suivant les flux. Le quatrieme est le taux de redemption des bons d&apos;achat : le pourcentage de bons effectivement utilises par les abonnes chez les commercants partenaires. Un taux eleve signifie un engagement reel, pas du gaspillage.
          </p>

          <h2 className="section-heading">Comment fonctionne le dashboard abonne COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Chaque abonne COLHYBRI dispose d&apos;un espace personnel affichant son historique complet. Nous y retrouvons les bons d&apos;achat recus, les bons utilises, les commercants chez qui nous avons depense, et l&apos;impact cumule en euros redistribues. Le dashboard permet de visualiser mois par mois l&apos;evolution de sa contribution solidaire.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce n&apos;est pas un gadget. C&apos;est un outil de fidelisation par la preuve. Quand un abonne voit qu&apos;en 12 mois, ses 36 euros d&apos;abonnement ont genere 80 euros de bons d&apos;achat et soutenu 15 commercants locaux, le renouvellement est naturel. COLHYBRI transforme la transparence en moteur d&apos;engagement. L&apos;ensemble repose sur l&apos;infrastructure decrite dans notre page{' '}
            <Link href={`/${locale}/technologie-impact-social`} className="text-colhybri-primary hover:underline">technologie et impact social</Link>.
          </p>

          <h2 className="section-heading">Que voit le commercant sur son tableau de bord COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le dashboard commercant affiche trois informations essentielles : le nombre de clients acquis via COLHYBRI (combien de porteurs de bons sont venus), le chiffre d&apos;affaires genere par les bons d&apos;achat solidaires, et l&apos;evolution mensuelle de ces indicateurs. Aucune donnee personnelle des abonnes n&apos;est partagee avec les commercants, conformement au RGPD.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Pour le commercant, COLHYBRI est un canal d&apos;acquisition client sans cout. Nous ne vendons pas de la visibilite, nous envoyons des clients avec un bon d&apos;achat en poche. Le dashboard permet au commercant de quantifier ce benefice et de le comparer a ses autres canaux d&apos;acquisition. Les{' '}
            <Link href={`/${locale}/gift-card-solidaire`} className="text-colhybri-primary hover:underline">gift cards solidaires</Link>{' '}
            deviennent un generateur mesurable de chiffre d&apos;affaires.
          </p>

          <h2 className="section-heading">Comment la transparence est-elle une valeur fondatrice de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La transparence chez COLHYBRI n&apos;est pas un choix de communication. C&apos;est un choix d&apos;architecture. Chaque transaction passe par Stripe (traçabilite bancaire native), chaque bon est enregistre dans Supabase (base de donnees auditable), chaque redistribution est horodatee et liee a un commerce identifie. Nous publions nos resultats sans filtre.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Cette transparence s&apos;inscrit dans la philosophie de COLHYBRI : nous n&apos;avons pas besoin de nuire aux autres pour briller. Nous ne cachons rien parce que nous n&apos;avons rien a cacher. Le modele fonctionne quand chaque acteur (abonne, commercant, territoire) peut verifier l&apos;impact reel. C&apos;est ce qui distingue COLHYBRI des promesses creuses : la preuve par les chiffres, pas par les slogans.
          </p>

          <h2 className="section-heading">Comment COLHYBRI se compare-t-il aux dons caritatifs classiques ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Un don caritatif classique genere un recu fiscal, mais la traçabilite s&apos;arrete souvent la. L&apos;association collecte, l&apos;association redistribue, et le donateur n&apos;a generalement aucune visibilite sur l&apos;utilisation finale de son euro. Chez COLHYBRI, chaque euro suit un parcours complet et visible : paiement, pool solidaire, bon d&apos;achat, commerce local. L&apos;abonne sait exactement ou son argent a ete utilise.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            De plus, le modele COLHYBRI genere un retour direct pour l&apos;abonne (les bons d&apos;achat), ce qui n&apos;est pas le cas d&apos;un don. C&apos;est une solidarite qui beneficie a tous, pas un sacrifice unilateral. Cette approche s&apos;inscrit dans la lignee de la{' '}
            <Link href={`/${locale}/legende-colibri`} className="text-colhybri-primary hover:underline">legende du colibri</Link>{' '}
            : chaque goutte compte, et chaque goutte est visible.
          </p>

          <h2 className="section-heading">Quel reporting annuel COLHYBRI produit-il ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            COLHYBRI s&apos;engage a publier un rapport annuel d&apos;impact conforme aux standards de l&apos;Economie Sociale et Solidaire (ESS). Ce rapport detaille les euros totaux redistribues, le nombre de commercants partenaires actifs, le multiplicateur local mesure, le taux de redemption des bons, et les objectifs pour l&apos;annee suivante.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Ce reporting est destine a tous les acteurs de l&apos;ecosysteme : abonnes, commercants, partenaires B2B, collectivites, investisseurs. Nous croyons que la transparence alimente la confiance, que la confiance alimente l&apos;engagement, et que l&apos;engagement alimente l&apos;impact. Ce cercle vertueux est au coeur du modele COLHYBRI et s&apos;inscrit dans notre vision de l&apos;
            <Link href={`/${locale}/impact-economique-local`} className="text-colhybri-primary hover:underline">impact economique local</Link>.
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
          <h2 className="section-heading text-center mb-10">Explorer l&apos;ecosysteme COLHYBRI</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
            <Link href={`/${locale}/technologie-impact-social`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Technologie et impact social</h3>
              <p className="text-sm text-colhybri-dark/60">Le pilier technologique de COLHYBRI</p>
            </Link>
            <Link href={`/${locale}/gift-card-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Gift card solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">Le bon d&apos;achat qui soutient votre quartier</p>
            </Link>
            <Link href={`/${locale}/legende-colibri`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">La legende du colibri</h3>
              <p className="text-sm text-colhybri-dark/60">L&apos;histoire qui inspire COLHYBRI</p>
            </Link>
            <Link href={`/${locale}/impact-economique-local`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Impact economique local</h3>
              <p className="text-sm text-colhybri-dark/60">Le multiplicateur keynesien en action</p>
            </Link>
          </div>

          <div className="text-center">
            <a href="https://www.colhybri.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Decouvrir COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
