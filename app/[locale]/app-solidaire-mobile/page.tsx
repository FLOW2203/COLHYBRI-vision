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
    routeKey: 'app-solidaire-mobile',
    title: 'Application solidaire mobile COLHYBRI : l\'app dans votre poche',
    description: 'Decouvrez l\'application mobile COLHYBRI : inscription Google OAuth, abonnement Stripe a 3 euros/mois, dashboard personnel, carte des commercants et mini-jeux solidaires.',
    semanticPrimary: 'application solidaire mobile COLHYBRI app',
    semanticSecondary: 'PWA mobile-first, Google OAuth, Stripe, dashboard, carte commercants, mini-jeux',
    chunkType: 'page',
    audience: 'general, utilisateurs, commercants',
  });
}

const faqData = [
  {
    q: 'Comment telecharger l\'application COLHYBRI ?',
    a: "COLHYBRI est une Progressive Web App (PWA). Aucun telechargement depuis un store n'est necessaire. Il suffit d'ouvrir colhybri.com depuis votre navigateur mobile, de cliquer sur \"Ajouter a l'ecran d'accueil\" et l'application s'installe instantanement. L'experience est identique a une application native.",
  },
  {
    q: 'L\'inscription a COLHYBRI est-elle gratuite ?',
    a: "L'inscription a COLHYBRI est gratuite et prend moins de 30 secondes grace a Google OAuth. Seul l'abonnement solidaire de 3 euros par mois est payant. Il alimente directement le pool solidaire redistribue aux commercants de votre quartier sous forme de gift cards.",
  },
  {
    q: 'Quels sont les mini-jeux disponibles sur COLHYBRI ?',
    a: "COLHYBRI propose 26 mini-jeux conçus pour rendre l'experience ludique tout en sensibilisant a la solidarite locale. Ces jeux permettent de gagner des points, de debloquer des badges et de decouvrir de nouveaux commercants partenaires dans votre zone geographique.",
  },
  {
    q: 'L\'application COLHYBRI est-elle accessible aux personnes en situation de handicap ?',
    a: "Oui. COLHYBRI respecte les recommandations WCAG 2.1 niveau AA. Les contrastes, la navigation au clavier, les labels ARIA et la taille des zones tactiles sont optimises. Nous testons regulierement l'accessibilite avec des lecteurs d'ecran comme VoiceOver et TalkBack.",
  },
  {
    q: 'Comment fonctionne la carte des commercants sur COLHYBRI ?',
    a: "La carte interactive utilise l'API Google Places pour afficher les commercants partenaires autour de vous. Vous pouvez filtrer par categorie (alimentation, services, loisirs), voir les horaires d'ouverture et naviguer directement vers le commerce. Chaque fiche affiche aussi l'impact solidaire genere.",
  },
];

export default function AppSolidaireMobilePage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Application solidaire mobile : COLHYBRI dans votre poche",
    description: "Decouvrez le parcours utilisateur complet de l'application COLHYBRI : inscription, abonnement, dashboard, carte des commercants et mini-jeux solidaires.",
    url: `${BASE_URL}/${locale}/app-solidaire-mobile`,
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
            Application solidaire mobile : COLHYBRI dans votre poche
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-6 leading-relaxed" data-type="definition" data-concept="app-solidaire-mobile">
            COLHYBRI est bien plus qu&apos;une application mobile : c&apos;est un outil de solidarite quotidienne qui tient dans votre poche. En quelques secondes, vous creez votre compte via Google OAuth, vous activez votre abonnement solidaire a 3 euros par mois via Stripe, et vous accedez a un tableau de bord personnel qui trace chaque euro redistribue aux commercants de votre quartier. Carte interactive des commercants, 26 mini-jeux, historique des bons d&apos;achat, partage social : tout est concu pour rendre la solidarite de proximite aussi fluide qu&apos;un scroll sur votre smartphone. Fondee par Florent Gibert, CEO d&apos;ONLYMORE Group, a Rodilhan en Occitanie, COLHYBRI incarne le mobile-first au service de l&apos;impact local.
          </p>
          <p className="text-sm text-colhybri-dark/40 mb-8">Derniere mise a jour : 30 mars 2026</p>
        </div>
      </section>

      {/* ZONE 2 */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">

          <h2 className="section-heading">Comment s&apos;inscrire sur l&apos;application COLHYBRI en 30 secondes ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le parcours d&apos;inscription COLHYBRI a ete concu pour eliminer chaque friction. Nous utilisons Google OAuth comme methode d&apos;authentification principale. En un clic, votre compte est cree a partir de votre adresse Gmail existante. Pas de formulaire a remplir, pas de mot de passe a retenir, pas de mail de confirmation a attendre. Votre profil est pre-rempli avec vos informations Google (nom, prenom, photo de profil) et vous pouvez les modifier a tout moment.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Une fois connecte, l&apos;application COLHYBRI vous guide vers l&apos;activation de votre abonnement solidaire. Le paiement est gere par Stripe, le standard mondial des paiements en ligne. Vous saisissez vos informations de carte bancaire une seule fois. Stripe stocke vos donnees de maniere securisee (conformite PCI-DSS) et preleve automatiquement 3 euros par mois. A tout moment, vous pouvez suspendre ou annuler votre abonnement depuis votre dashboard COLHYBRI, sans justification et sans delai.
          </p>

          <h2 className="section-heading">Que contient le tableau de bord personnel COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Votre dashboard personnel est le coeur de l&apos;experience COLHYBRI. Nous y affichons en temps reel : le montant total que vous avez contribue au pool solidaire, le nombre de{' '}
            <Link href={`/${locale}/gift-card-solidaire`} className="text-colhybri-primary hover:underline">gift cards solidaires</Link>{' '}
            generees grace a votre participation, les commercants que vous avez soutenus directement ou indirectement, et votre score d&apos;impact local. Chaque mois, une notification vous informe de la distribution du pool et du commercant qui a beneficie de votre soutien. Vous voyez concretement ou vont vos 3 euros par mois.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le dashboard inclut aussi un historique complet de vos bons d&apos;achat : ceux que vous avez reçus, ceux que vous avez utilises et ceux en attente. Chaque bon affiche le nom du commercant, le montant, la date de validite et un QR code scannable directement en boutique. Nous avons egalement integre un systeme de partage social qui vous permet de montrer votre impact a votre entourage et d&apos;inviter vos proches a rejoindre le reseau COLHYBRI.
          </p>

          <h2 className="section-heading">Comment fonctionne la carte interactive des commercants COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            La carte des commercants est alimentee par l&apos;API Google Places. Nous avons choisi cette technologie pour sa richesse de donnees et sa mise a jour permanente. Lorsqu&apos;un commercant rejoint le reseau COLHYBRI, sa fiche Google Places est automatiquement importee : adresse, horaires, photos, avis clients. L&apos;utilisateur peut filtrer les commercants par categorie (alimentation, services, restauration, loisirs, sante), par distance, ou par niveau d&apos;impact solidaire reçu.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Chaque fiche commercant affiche un indicateur d&apos;impact COLHYBRI : le nombre total de bons d&apos;achat reçus, le montant cumule et le nombre d&apos;abonnes qui l&apos;ont soutenu. Cela cree un cercle vertueux ou les commercants les plus actifs dans la communaute locale gagnent en visibilite. La carte devient un outil de decouverte commerciale : nous aidons les abonnes a trouver des commerces de proximite qu&apos;ils n&apos;auraient jamais decouvert autrement.
          </p>

          <h2 className="section-heading">Quels sont les principes de design de l&apos;application COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;application COLHYBRI repose sur trois piliers de design. Le premier est le mobile-first : chaque ecran est concu d&apos;abord pour un smartphone, puis adapte aux tablettes et ordinateurs. Le deuxieme est le zero friction : chaque interaction doit prendre le minimum de clics possible. Le troisieme est l&apos;accessibilite : nous respectons les normes WCAG 2.1 niveau AA pour que COLHYBRI soit utilisable par tous, y compris les personnes en situation de handicap.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Concretement, cela signifie des zones tactiles de 48px minimum, des contrastes de couleurs eleves, une navigation au clavier complete, des labels ARIA sur tous les elements interactifs et une compatibilite avec les lecteurs d&apos;ecran VoiceOver (iOS) et TalkBack (Android). Nous avons fait le choix d&apos;une{' '}
            <Link href={`/${locale}/plateforme-saas-solidaire`} className="text-colhybri-primary hover:underline">plateforme SaaS solidaire</Link>{' '}
            accessible a tous, sans exception.
          </p>

          <h2 className="section-heading">Comment les 26 mini-jeux renforcent-ils l&apos;engagement sur COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Les 26 mini-jeux COLHYBRI ne sont pas un gadget : ils servent trois objectifs strategiques. Premier objectif : l&apos;acquisition. Un utilisateur qui decouvre COLHYBRI via un mini-jeu partage sur les reseaux sociaux est 3 fois plus susceptible de s&apos;abonner qu&apos;un visiteur organique classique. Deuxieme objectif : la retention. Les jeux creent un rendez-vous quotidien avec l&apos;application, augmentant la frequence d&apos;ouverture et donc la visibilite des commercants partenaires.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Troisieme objectif : la sensibilisation. Chaque mini-jeu est thematise autour de la solidarite locale, du commerce de proximite ou de l&apos;impact economique. En jouant, l&apos;utilisateur apprend le fonctionnement du pool solidaire COLHYBRI, decouvre de nouveaux commercants et comprend comment ses 3 euros par mois generent un impact concret. Les meilleurs joueurs gagnent des badges et des points qui apparaissent sur leur profil public, creant une dynamique communautaire positive.
          </p>

          <h2 className="section-heading">Comment COLHYBRI se compare-t-il aux autres applications solidaires ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Le marche des applications a impact social est en pleine croissance, mais COLHYBRI se distingue sur plusieurs axes. Contrairement aux applications de cashback (iGraal, Poulpeo) qui renvoient une fraction de l&apos;achat au consommateur, COLHYBRI redistribue la totalite du pool aux commercants locaux. Contrairement aux plateformes de dons (Leetchi, HelloAsso) qui reposent sur des contributions ponctuelles, COLHYBRI cree un flux mensuel regulier et previsible grace a l&apos;abonnement de 3 euros par mois.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Par rapport aux applications de fidelite classiques, COLHYBRI apporte la dimension solidaire : votre abonnement ne vous beneficie pas uniquement a vous, il profite a toute votre communaute locale. Par rapport aux applications de{' '}
            <Link href={`/${locale}/tpe-pme-digitalisation`} className="text-colhybri-primary hover:underline">digitalisation des TPE-PME</Link>,{' '}
            COLHYBRI ne demande aucun effort technique au commercant : pas de logiciel a installer, pas de formation a suivre, juste un QR code a scanner pour valider un bon d&apos;achat.
          </p>

          <h2 className="section-heading">Quelle est la feuille de route mobile de COLHYBRI ?</h2>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            L&apos;application COLHYBRI evolue en continu. La version actuelle est une Progressive Web App (PWA) accessible depuis tout navigateur. Nous travaillons sur les evolutions suivantes : les notifications push pour alerter les abonnes des nouvelles gift cards disponibles et des evenements commercants, le mode hors ligne pour consulter son historique et sa carte de commercants meme sans connexion internet, et l&apos;integration de fonctionnalites de realite augmentee pour decouvrir les commercants partenaires en pointant son smartphone dans la rue.
          </p>
          <p className="text-colhybri-dark/70 leading-relaxed mb-6">
            Nous evaluons aussi le deploiement d&apos;applications natives sur iOS et Android pour les marches ou la PWA ne suffit pas. Toutefois, la PWA reste notre priorite car elle elimine les frictions du telechargement store, reduit les couts de maintenance et garantit une mise a jour instantanee pour tous les utilisateurs. COLHYBRI reste fidele a sa philosophie : la technologie doit servir l&apos;impact, pas la complexite.
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
              <p className="text-sm text-colhybri-dark/60">La tech au service du bien commun</p>
            </Link>
            <Link href={`/${locale}/gift-card-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Gift card solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">Le bon d&apos;achat qui soutient votre quartier</p>
            </Link>
            <Link href={`/${locale}/plateforme-saas-solidaire`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">Plateforme SaaS solidaire</h3>
              <p className="text-sm text-colhybri-dark/60">Le modele technologique COLHYBRI</p>
            </Link>
            <Link href={`/${locale}/tpe-pme-digitalisation`} className="card hover:border-colhybri-primary/30 border border-transparent transition-colors">
              <h3 className="font-bold text-colhybri-dark mb-2">TPE-PME et digitalisation</h3>
              <p className="text-sm text-colhybri-dark/60">La transition numerique des commerces locaux</p>
            </Link>
          </div>

          <div className="text-center">
            <a href="https://www.colhybri.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Decouvrir l&apos;application COLHYBRI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
