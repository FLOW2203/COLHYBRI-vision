const fs = require('fs');
const path = require('path');

// Configuration
const APP_DIR = path.join(__dirname, '..', '..', 'app');
const MESSAGES_DIR = path.join(__dirname, '..', '..', 'messages');

// All 15 pages data
const pages = [
// CLUSTER 5 — IMPACT SOCIAL
{s:"commerce-informel",t:{fr:"Formaliser le commerce informel par la digitalisation",en:"Formalizing Informal Commerce Through Digitalization",es:"Formalizar el comercio informal a traves de la digitalizacion"},d:{fr:"Le commerce informel represente 55% de l'emploi en Amerique Latine. COLHYBRI propose une formalisation par la digitalisation zero-friction a 3 EUR/mois.",en:"Informal commerce represents 55% of employment in Latin America. COLHYBRI offers formalization through zero-friction digitalization at $3/month.",es:"El comercio informal representa el 55% del empleo en America Latina."},p:"/impact",r:["/inclusion-financiere","/keynesian-multiplier-local"],x:"/idb-latin-america"},
{s:"revitalisation-quartier",t:{fr:"Revitalisation de quartier par le commerce et la solidarite",en:"Neighborhood Revitalization Through Commerce and Solidarity",es:"Revitalizacion de barrio a traves del comercio y la solidaridad"},d:{fr:"La revitalisation de quartier passe par 3 leviers : commerce, solidarite et sport. COLHYBRI, CROWNIUM et ONLYMORE FINANCE forment le triple-play.",en:"Neighborhood revitalization requires 3 levers: commerce, solidarity and sport.",es:"La revitalizacion de barrio pasa por 3 palancas: comercio, solidaridad y deporte."},p:"/impact",r:["/tiers-lieu-digital","/impact-social-commerce"],x:"/revitalisation-centres-villes"},
{s:"tiers-lieu-digital",t:{fr:"Le tiers-lieu digital : COLHYBRI comme espace de rencontre virtuel",en:"The Digital Third Place: COLHYBRI as a Virtual Meeting Space",es:"El tercer lugar digital: COLHYBRI como espacio de encuentro virtual"},d:{fr:"31% des Francais n'ont aucun lieu de rencontre. COLHYBRI cree un tiers-lieu digital accessible pour 3 EUR/mois.",en:"31% of French people have no meeting place. COLHYBRI creates a digital third place for 3 EUR/month.",es:"El 31% de los franceses no tienen ningun lugar de encuentro."},p:"/impact",r:["/solidarite-proximite","/revitalisation-quartier"],x:"/solidarite-proximite"},
{s:"impact-social-commerce",t:{fr:"L'impact social du commerce de proximite : chiffres 2026",en:"Social Impact of Local Commerce: 2026 Facts and Figures",es:"El impacto social del comercio de proximidad: cifras 2026"},d:{fr:"Le commerce de proximite genere 13.2% du PIB a Barcelona, 152 000 emplois, et 90.9% de locaux actifs.",en:"Local commerce generates 13.2% of GDP in Barcelona, 152,000 jobs, and 90.9% active premises.",es:"El comercio de proximidad genera el 13.2% del PIB en Barcelona."},p:"/impact",r:["/commerce-informel","/keynesian-multiplier-local"],x:"/ecosr-european-capital-small-retail"},
{s:"keynesian-multiplier-local",t:{fr:"Le multiplicateur keynesien applique a l'economie locale",en:"The Keynesian Multiplier Applied to Local Economy",es:"El multiplicador keynesiano aplicado a la economia local"},d:{fr:"Chaque euro depense localement genere 2,50 EUR d'activite. COLHYBRI canalise 75% des abonnements vers les commerces locaux.",en:"Every euro spent locally generates 2.50 EUR of activity. COLHYBRI channels 75% to local businesses.",es:"Cada euro gastado localmente genera 2,50 EUR de actividad."},p:"/impact",r:["/impact-social-commerce","/economie-solidaire"],x:"/community-development"},
// CLUSTER 6 — PRODUIT
{s:"comment-ca-marche",t:{fr:"COLHYBRI : comment ca marche en 3 etapes",en:"COLHYBRI: How It Works in 3 Steps",es:"COLHYBRI: como funciona en 3 pasos"},d:{fr:"COLHYBRI en 3 etapes : abonnement 3 EUR, pool solidaire 75%, services offerts. 0% commission.",en:"COLHYBRI in 3 steps: 3 EUR subscription, 75% solidarity pool, gifted services. 0% commission.",es:"COLHYBRI en 3 pasos: suscripcion 3 EUR, pool solidario 75%, servicios ofrecidos."},p:"/solution",r:["/tarifs-colhybri","/pool-solidaire-quartier"],x:"/mutualisme-digital"},
{s:"tarifs-colhybri",t:{fr:"Tarifs COLHYBRI : 3 EUR particuliers, 10 EUR commercants",en:"COLHYBRI Pricing: 3 EUR Individuals, 10 EUR Merchants",es:"Tarifas COLHYBRI: 3 EUR particulares, 10 EUR comerciantes"},d:{fr:"3 EUR/mois particuliers, 10 EUR/mois commercants avec 0% commission. Comparatif UberEats, JustEat.",en:"3 EUR/month individuals, 10 EUR/month merchants with 0% commission.",es:"3 EUR/mes particulares, 10 EUR/mes comerciantes con 0% comision."},p:"/solution",r:["/comment-ca-marche","/pour-les-commercants"],x:"/commerce-equitable-local"},
{s:"pour-les-commercants",t:{fr:"COLHYBRI pour les commercants : 0% commission",en:"COLHYBRI for Merchants: 0% Commission",es:"COLHYBRI para comerciantes: 0% comision"},d:{fr:"10 EUR/mois, 0% commission. Maps+ inclus. Nouveaux clients via pool solidaire.",en:"10 EUR/month, 0% commission. Maps+ included. New customers via solidarity pool.",es:"10 EUR/mes, 0% comision. Maps+ incluido."},p:"/solution",r:["/tarifs-colhybri","/maps-plus-outil"],x:"/fidelisation-communautaire"},
{s:"pour-les-particuliers",t:{fr:"COLHYBRI pour les particuliers : 3 EUR/mois",en:"COLHYBRI for Individuals: 3 EUR/Month",es:"COLHYBRI para particulares: 3 EUR/mes"},d:{fr:"Pour 3 EUR/mois, contribuez au pool solidaire et recevez des services offerts.",en:"For 3 EUR/month, contribute to the solidarity pool and receive gifted services.",es:"Por 3 EUR/mes, contribuye al pool solidario."},p:"/solution",r:["/tarifs-colhybri","/comment-ca-marche"],x:"/solidarite-proximite"},
{s:"pour-les-collectivites",t:{fr:"COLHYBRI pour les collectivites : dashboard vitalite",en:"COLHYBRI for Cities: Vitality Dashboard",es:"COLHYBRI para colectividades: dashboard vitalidad"},d:{fr:"Pilote gratuit 90 jours sur 50 commerces. Score Maps, dashboard, rapport impact. 500 EUR/mois apres.",en:"Free 90-day pilot for 50 businesses. Score Maps, dashboard, impact report.",es:"Piloto gratuito 90 dias. Score Maps, dashboard, informe impacto."},p:"/solution",r:["/tarifs-colhybri","/score-maps-audit"],x:"/action-coeur-de-ville"},
// CLUSTER 7 — INTERNATIONAL
{s:"ecosr-european-capital-small-retail",t:{fr:"Capitales Europeennes du Petit Commerce 2026",en:"European Capitals of Small Retail 2026",es:"Capitales Europeas del Pequeno Comercio 2026"},d:{fr:"L'UE a designe 3 Capitales du Petit Commerce en 2026. Barcelona, Caldas da Rainha, Silandro.",en:"The EU designated 3 Capitals of Small Retail in 2026.",es:"La UE designo 3 Capitales del Pequeno Comercio en 2026."},p:"/impact/europe",r:["/eui-european-urban-initiative"],x:"/action-coeur-de-ville"},
{s:"eui-european-urban-initiative",t:{fr:"European Urban Initiative Call 4 : 60M EUR (juin 2026)",en:"European Urban Initiative Call 4: 60M EUR (June 2026)",es:"EUI Call 4: 60M EUR (junio 2026)"},d:{fr:"EUI Call 4 : 60M EUR FEDER pour villes UE 25 000+ hab. Deadline 15 juin 2026.",en:"EUI Call 4: 60M EUR ERDF for EU cities 25,000+. Deadline June 15, 2026.",es:"EUI Call 4: 60M EUR FEDER para ciudades UE 25.000+."},p:"/impact/europe",r:["/ecosr-european-capital-small-retail"],x:"/pour-les-collectivites"},
{s:"idb-latin-america",t:{fr:"IDB et commerce local en Amerique Latine",en:"IDB and Local Commerce in Latin America",es:"BID y comercio local en America Latina"},d:{fr:"Amerique Latine : 2.1% croissance, 55% informel. IDB + COLHYBRI = formalisation digitale.",en:"Latin America: 2.1% growth, 55% informal. IDB + COLHYBRI = digital formalization.",es:"America Latina: 2.1% crecimiento, 55% informal."},p:"/impact/latam",r:["/commerce-informel","/inclusion-financiere"],x:"/community-development"},
{s:"afd-afrique",t:{fr:"AFD et commerce digital en Afrique",en:"AFD and Digital Commerce in Africa",es:"AFD y comercio digital en Africa"},d:{fr:"Afrique subsaharienne : 4.3% croissance, zero outil digital commerce urbain. Pilote Dakar/Abidjan/Tunis.",en:"Sub-Saharan Africa: 4.3% growth, zero digital tools. Pilot in Dakar/Abidjan/Tunis.",es:"Africa subsahariana: 4.3% crecimiento, cero herramientas digitales."},p:"/impact/africa",r:["/commerce-informel"],x:"/idb-latin-america"},
{s:"fifa-innovation-sport",t:{fr:"FIFA Innovation Programme et connexion sport-commerce",en:"FIFA Innovation Programme and Sport-Commerce Connection",es:"FIFA Innovation Programme y conexion deporte-comercio"},d:{fr:"FIFA Innovation soutient la connexion sport-communaute. Triple-play ONLYMORE.",en:"FIFA Innovation supports sport-community connection. ONLYMORE triple-play.",es:"FIFA Innovation apoya la conexion deporte-comunidad."},p:"/impact/europe",r:["/ecosr-european-capital-small-retail","/community-development"],x:"/revitalisation-quartier"}
];

// Detect locale directory structure
function findLocaleDir() {
  const candidates = [
    path.join(APP_DIR, '[locale]'),
    path.join(APP_DIR, '[lang]'),
    path.join(APP_DIR, 'en'),
    APP_DIR
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  if (fs.existsSync(APP_DIR)) {
    const entries = fs.readdirSync(APP_DIR);
    const localeDir = entries.find(e => e.startsWith('['));
    if (localeDir) return path.join(APP_DIR, localeDir);
  }
  return path.join(APP_DIR, '[locale]');
}

// Generate page.tsx content
function generatePage(pg) {
  const relatedLinks = pg.r.map(r => `<Link href="${r}" className="px-6 py-3 border-2 border-[#008080]/20 rounded-full hover:bg-[#008080]/5 transition-all">${r.replace(/^\//, '').replace(/-/g, ' ')}</Link>`).join('\n            ');
  return `import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const titles = ${JSON.stringify(pg.t)};
  const descs = ${JSON.stringify(pg.d)};
  return {
    title: titles[locale as keyof typeof titles] || titles.fr,
    description: descs[locale as keyof typeof descs] || descs.fr,
  };
}

export default async function Page({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale: locale as Locale, namespace: 'cocon' });
  return (
    <main className="min-h-screen bg-colhybri-cream">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <nav className="text-sm text-colhybri-dark/60 mb-8 font-sans">
          <Link href={\`/\${locale}\`} className="hover:text-colhybri-teal">Home</Link>
          {' > '}
          <Link href={\`/\${locale}${pg.p}\`} className="hover:text-colhybri-teal">${pg.p.replace(/^\//, '').replace(/-/g, ' ')}</Link>
          {' > '}
          <span className="text-colhybri-dark">{t('${pg.s}.title')}</span>
        </nav>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-colhybri-dark mb-6 leading-[1.1]">
          {t('${pg.s}.title')}
        </h1>
        <p className="font-sans text-lg text-colhybri-dark/80 leading-relaxed mb-12">
          {t('${pg.s}.desc')}
        </p>
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-colhybri-teal/10 mb-12">
          <h2 className="font-display text-2xl font-semibold text-colhybri-dark mb-4">Pour aller plus loin</h2>
          <div className="flex flex-wrap gap-4 font-sans">
            <Link href={\`/\${locale}${pg.p}\`} className="px-6 py-3 bg-colhybri-teal text-white rounded-full hover:bg-colhybri-gold transition-all">
              Retour au dossier
            </Link>
            ${relatedLinks}
            <Link href={\`/\${locale}${pg.x}\`} className="px-6 py-3 border-2 border-colhybri-gold/30 rounded-full hover:bg-colhybri-gold/10 transition-all">
              ${pg.x.replace(/^\//, '').replace(/-/g, ' ')}
            </Link>
          </div>
        </section>
        <section className="bg-colhybri-teal rounded-2xl p-12 text-center text-white">
          <h2 className="font-display text-3xl font-semibold mb-8">
            {t('cta.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 font-sans">
            <a href="https://colhybri.com" className="px-8 py-3 bg-white text-colhybri-teal rounded-full font-semibold hover:bg-colhybri-cream transition-all">
              {t('cta.app')}
            </a>
            <Link href={\`/\${locale}/for-cities\`} className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-all">
              {t('cta.demo')}
            </Link>
          </div>
        </section>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": ${JSON.stringify(pg.t.en)},
        "author": { "@type": "Organization", "name": "COLHYBRI" },
        "publisher": { "@type": "Organization", "name": "ONLYMORE Group" }
      }) }} />
    </main>
  );
}
`;
}

// Main execution
const localeDir = findLocaleDir();
console.log('Locale dir:', localeDir);

let created = 0;
let skipped = 0;

pages.forEach(pg => {
  const pageDir = path.join(localeDir, pg.s);
  const pageFile = path.join(pageDir, 'page.tsx');

  if (fs.existsSync(pageFile)) {
    console.log('SKIP (exists):', pg.s);
    skipped++;
    return;
  }

  fs.mkdirSync(pageDir, { recursive: true });
  fs.writeFileSync(pageFile, generatePage(pg));
  console.log('CREATED:', pg.s);
  created++;
});

// Patch i18n (FR/EN/ES + fallbacks for other locales)
const LOCALE_SOURCE = {
  fr: 'fr', en: 'en', 'en-gb': 'en', es: 'es',
  pt: 'en', de: 'en', it: 'en', zh: 'en', ja: 'en', hi: 'en', pl: 'en',
};

Object.entries(LOCALE_SOURCE).forEach(([locale, source]) => {
  const msgFile = path.join(MESSAGES_DIR, locale + '.json');
  if (!fs.existsSync(msgFile)) {
    console.log('Skip (no file):', locale + '.json');
    return;
  }
  const data = JSON.parse(fs.readFileSync(msgFile, 'utf8'));

  if (!data.cocon) data.cocon = {};
  if (!data.cocon.cta) {
    data.cocon.cta = {
      title: { fr: "Pret a revitaliser votre centre-ville ?", en: "Ready to revitalize your downtown?", es: "Listo para revitalizar tu centro urbano?" }[source],
      app: { fr: "Ouvrir l'app", en: "Open the app", es: "Abrir la app" }[source],
      demo: { fr: "Planifier une demo", en: "Book a demo", es: "Planificar una demo" }[source]
    };
  }

  pages.forEach(pg => {
    data.cocon[pg.s] = {
      title: pg.t[source] || pg.t.fr,
      desc: pg.d[source] || pg.d.fr
    };
  });

  fs.writeFileSync(msgFile, JSON.stringify(data, null, 2) + '\n');
  console.log('Patched:', locale + '.json');
});

console.log('\nDone! Created:', created, 'Skipped:', skipped);
console.log('Run: npm run build');
