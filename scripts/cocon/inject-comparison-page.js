#!/usr/bin/env node
/**
 * Injects the US-track comparison page `colhybri-vs-benevity-bonterra-goodera`
 * into every locale message file with identical key shapes (so scripts/i18n-check.js
 * stays at 0 missing). EN is canonical; FR and ES are authored; the eight remaining
 * locales fall back to EN until localized (see PR placeholder list).
 *
 * Doctrine: US corporate / place-based register only. Banned on this page:
 * ESG, CSR, RSE, CSRD, ESRS, compliance, solidarity. No em dash anywhere.
 * Idempotent: re-running overwrites the block in place.
 *
 * Usage: node scripts/cocon/inject-comparison-page.js
 */
const fs = require('fs');
const path = require('path');

const SLUG = 'colhybri-vs-benevity-bonterra-goodera';
const MESSAGES_DIR = path.join(__dirname, '..', '..', 'messages');
const LOCALES = ['en', 'en-gb', 'fr', 'es', 'pt', 'de', 'it', 'zh', 'ja', 'hi', 'pl'];

const content = {
  en: {
    title: 'COLHYBRI vs Benevity, Bonterra, Goodera',
    h1: 'COLHYBRI vs Benevity, Bonterra and Goodera: Place-Based Community Impact for Companies',
    metaTitle: 'COLHYBRI vs Benevity, Bonterra, Goodera: Place-Based Impact',
    metaDescription: 'How COLHYBRI compares to Benevity, Bonterra and Goodera. COLHYBRI is a place-based community impact platform that routes company support into the local merchant economy where employees live and work.',
    snippet: 'COLHYBRI is a place-based community impact platform for companies. Unlike Benevity, Bonterra and Goodera, which centralize corporate giving, grants and employee volunteering, COLHYBRI channels company support directly into the local merchant economy of a chosen neighborhood, building employer brand, talent retention and belonging through measurable local economic vitality.',
    sections: [
      {
        h2: 'What is COLHYBRI for companies?',
        body: 'COLHYBRI lets a company adopt a neighborhood and route monthly support into its independent shops, cafes and services. Employees see where the money lands, street by street. The result is local economic vitality they can walk to, not an abstract donation. It runs as a self-serve subscription, with measurement built in.',
      },
      {
        h2: 'How does COLHYBRI differ from Benevity, Bonterra and Goodera?',
        body: 'Benevity, Bonterra and Goodera are enterprise platforms built around corporate giving, grants management and employee volunteering. They are powerful for distributing funds to nonprofits at scale. COLHYBRI starts from a different unit: the street. It concentrates company support inside one local merchant network so impact stays visible, geographic and tied to the places employees already care about.',
      },
      {
        h2: 'Why place-based impact wins on employer brand',
        body: 'Talent increasingly chooses employers that strengthen the places people live. Place-based community impact turns a budget line into a story employees can see on their commute. COLHYBRI gives companies a measurable local footprint, a belonging narrative for recruiting, and a talent retention signal that a generic giving portal cannot match.',
      },
      {
        h2: 'Can COLHYBRI work alongside an existing giving platform?',
        body: 'Yes. Many companies keep a broad giving or volunteering tool and add COLHYBRI for the local layer. COLHYBRI does not replace grants management. It adds the neighborhood economy those tools do not reach, with per shop measurement and a clear map of where company support circulates.',
      },
    ],
    faq: [
      {
        q: 'Is COLHYBRI an alternative to Benevity, Bonterra or Goodera?',
        a: 'COLHYBRI is an alternative for the local, place-based layer of community impact. It is not a full replacement for enterprise grants or volunteering suites. Companies use COLHYBRI to concentrate support inside one neighborhood economy, with per shop measurement that broad giving portals do not provide.',
      },
      {
        q: 'What does COLHYBRI mean by place-based community impact?',
        a: 'Place-based community impact means support is tied to a specific geography: a neighborhood and its independent shops, cafes and services. Instead of spreading funds across many causes, COLHYBRI builds visible local economic vitality where a company employees live and work.',
      },
      {
        q: 'How do employees experience COLHYBRI?',
        a: 'Employees can see the local businesses their company supports, visit them, and follow how support circulates street by street. That visibility strengthens belonging and gives talent retention a concrete local story rather than an abstract reporting dashboard.',
      },
    ],
    comparison: {
      title: 'COLHYBRI vs Benevity vs Bonterra vs Goodera at a glance',
      columns: ['Criterion', 'COLHYBRI', 'Benevity', 'Bonterra', 'Goodera'],
      rows: [
        ['Core model', 'Place-based local merchant support', 'Corporate giving and grants', 'Nonprofit and social good software', 'Employee volunteering'],
        ['Where funds land', 'Independent local shops and services', 'Nonprofits and charities', 'Nonprofits and grantees', 'Volunteering projects and nonprofits'],
        ['Primary buyer', 'Companies, cities, residents', 'Enterprises', 'Nonprofits and enterprises', 'Enterprises'],
        ['Geographic focus', 'A chosen neighborhood', 'Global', 'Global', 'Global'],
        ['Employee experience', 'Visible local impact they can visit', 'Donation and match portal', 'Donor and program tools', 'Volunteering experiences'],
        ['Impact measurement', 'Per shop, per street', 'Aggregate giving reports', 'Program and grant outcomes', 'Volunteering hours'],
        ['Pricing model', 'Self-serve subscription', 'Enterprise contract', 'Enterprise contract', 'Enterprise contract'],
      ],
    },
  },

  fr: {
    title: 'COLHYBRI face à Benevity, Bonterra, Goodera',
    h1: 'COLHYBRI face à Benevity, Bonterra et Goodera : l\'impact local de proximité pour les entreprises',
    metaTitle: 'COLHYBRI vs Benevity, Bonterra, Goodera : impact local',
    metaDescription: 'Comment COLHYBRI se compare à Benevity, Bonterra et Goodera. COLHYBRI est une plateforme d\'impact local de proximité qui dirige le soutien des entreprises vers l\'économie des commerces du quartier où vivent et travaillent les salariés.',
    snippet: 'COLHYBRI est une plateforme d\'impact local de proximité pour les entreprises. Contrairement à Benevity, Bonterra et Goodera, centrées sur le don d\'entreprise et le bénévolat des salariés, COLHYBRI dirige le soutien de l\'entreprise vers l\'économie des commerces d\'un quartier choisi : marque employeur, rétention des talents et appartenance, par une vitalité économique locale mesurable.',
    sections: [
      {
        h2: 'Qu\'est-ce que COLHYBRI pour les entreprises ?',
        body: 'COLHYBRI permet à une entreprise d\'adopter un quartier et d\'y diriger un soutien mensuel vers ses commerces, cafés et services indépendants. Les salariés voient où l\'argent arrive, rue par rue. Le résultat est une vitalité économique locale accessible à pied, pas un don abstrait. Le service fonctionne en abonnement self-serve, avec la mesure intégrée.',
      },
      {
        h2: 'En quoi COLHYBRI diffère de Benevity, Bonterra et Goodera ?',
        body: 'Benevity, Bonterra et Goodera sont des plateformes d\'entreprise construites autour du don, de la gestion de subventions et du bénévolat des salariés. Elles sont puissantes pour distribuer des fonds à des associations à grande échelle. COLHYBRI part d\'une autre unité : la rue. Elle concentre le soutien de l\'entreprise dans un réseau de commerces locaux pour rendre l\'impact visible, géographique et lié aux lieux qui comptent déjà pour les salariés.',
      },
      {
        h2: 'Pourquoi l\'impact de proximité renforce la marque employeur',
        body: 'Les talents choisissent de plus en plus des employeurs qui renforcent les lieux où l\'on vit. L\'impact local de proximité transforme une ligne budgétaire en une histoire que les salariés voient sur leur trajet. COLHYBRI donne aux entreprises une empreinte locale mesurable, un récit d\'appartenance pour le recrutement et un signal de rétention des talents qu\'un portail de don générique ne peut pas offrir.',
      },
      {
        h2: 'COLHYBRI peut-il fonctionner avec une plateforme de don existante ?',
        body: 'Oui. Beaucoup d\'entreprises gardent un outil de don ou de bénévolat large et ajoutent COLHYBRI pour la couche locale. COLHYBRI ne remplace pas la gestion de subventions. Il ajoute l\'économie de quartier que ces outils n\'atteignent pas, avec une mesure par commerce et une carte claire de la circulation du soutien.',
      },
    ],
    faq: [
      {
        q: 'COLHYBRI est-il une alternative à Benevity, Bonterra ou Goodera ?',
        a: 'COLHYBRI est une alternative pour la couche locale et de proximité de l\'impact. Ce n\'est pas un remplacement complet des suites de subventions ou de bénévolat d\'entreprise. Les entreprises utilisent COLHYBRI pour concentrer le soutien dans une économie de quartier, avec une mesure par commerce que les portails de don larges n\'offrent pas.',
      },
      {
        q: 'Que signifie l\'impact local de proximité chez COLHYBRI ?',
        a: 'L\'impact local de proximité signifie que le soutien est lié à une géographie précise : un quartier et ses commerces, cafés et services indépendants. Au lieu de répartir des fonds sur de nombreuses causes, COLHYBRI bâtit une vitalité économique locale visible là où vivent et travaillent les salariés d\'une entreprise.',
      },
      {
        q: 'Comment les salariés vivent-ils COLHYBRI ?',
        a: 'Les salariés voient les commerces locaux que leur entreprise soutient, peuvent s\'y rendre et suivre la circulation du soutien rue par rue. Cette visibilité renforce l\'appartenance et donne à la rétention des talents une histoire locale concrète plutôt qu\'un tableau de bord abstrait.',
      },
    ],
    comparison: {
      title: 'COLHYBRI vs Benevity vs Bonterra vs Goodera en un coup d\'oeil',
      columns: ['Critère', 'COLHYBRI', 'Benevity', 'Bonterra', 'Goodera'],
      rows: [
        ['Modèle central', 'Soutien aux commerces locaux de proximité', 'Don d\'entreprise et subventions', 'Logiciel pour associations et social good', 'Bénévolat des salariés'],
        ['Destination des fonds', 'Commerces et services indépendants', 'Associations et organisations caritatives', 'Associations et bénéficiaires de subventions', 'Projets de bénévolat et associations'],
        ['Acheteur principal', 'Entreprises, villes, résidents', 'Grands comptes', 'Associations et grands comptes', 'Grands comptes'],
        ['Focus géographique', 'Un quartier choisi', 'Mondial', 'Mondial', 'Mondial'],
        ['Expérience salarié', 'Impact local visible et accessible', 'Portail de don et d\'abondement', 'Outils donateurs et programmes', 'Expériences de bénévolat'],
        ['Mesure d\'impact', 'Par commerce, par rue', 'Rapports de don agrégés', 'Résultats de programmes et subventions', 'Heures de bénévolat'],
        ['Modèle tarifaire', 'Abonnement self-serve', 'Contrat entreprise', 'Contrat entreprise', 'Contrat entreprise'],
      ],
    },
  },

  es: {
    title: 'COLHYBRI frente a Benevity, Bonterra, Goodera',
    h1: 'COLHYBRI frente a Benevity, Bonterra y Goodera: impacto local de proximidad para empresas',
    metaTitle: 'COLHYBRI vs Benevity, Bonterra, Goodera: impacto local',
    metaDescription: 'Como se compara COLHYBRI con Benevity, Bonterra y Goodera. COLHYBRI es una plataforma de impacto local de proximidad que dirige el apoyo de las empresas hacia la economia de los comercios del barrio donde viven y trabajan los empleados.',
    snippet: 'COLHYBRI es una plataforma de impacto local de proximidad para empresas. A diferencia de Benevity, Bonterra y Goodera, centradas en la donacion corporativa y el voluntariado de empleados, COLHYBRI dirige el apoyo de la empresa hacia la economia de los comercios de un barrio elegido: marca empleadora, retencion del talento y pertenencia, mediante una vitalidad economica local medible.',
    sections: [
      {
        h2: 'Que es COLHYBRI para empresas?',
        body: 'COLHYBRI permite a una empresa adoptar un barrio y dirigir un apoyo mensual hacia sus comercios, cafes y servicios independientes. Los empleados ven donde llega el dinero, calle por calle. El resultado es una vitalidad economica local a la que se puede ir caminando, no una donacion abstracta. Funciona como una suscripcion self-serve, con la medicion integrada.',
      },
      {
        h2: 'En que se diferencia COLHYBRI de Benevity, Bonterra y Goodera?',
        body: 'Benevity, Bonterra y Goodera son plataformas empresariales construidas en torno a la donacion, la gestion de subvenciones y el voluntariado de empleados. Son potentes para distribuir fondos a organizaciones sin animo de lucro a gran escala. COLHYBRI parte de otra unidad: la calle. Concentra el apoyo de la empresa en una red de comercios locales para que el impacto sea visible, geografico y ligado a los lugares que ya importan a los empleados.',
      },
      {
        h2: 'Por que el impacto de proximidad gana en marca empleadora',
        body: 'El talento elige cada vez mas a empleadores que refuerzan los lugares donde se vive. El impacto local de proximidad convierte una linea de presupuesto en una historia que los empleados ven en su trayecto. COLHYBRI ofrece a las empresas una huella local medible, un relato de pertenencia para el reclutamiento y una senal de retencion del talento que un portal de donacion generico no puede igualar.',
      },
      {
        h2: 'Puede COLHYBRI funcionar junto a una plataforma de donacion existente?',
        body: 'Si. Muchas empresas mantienen una herramienta amplia de donacion o voluntariado y anaden COLHYBRI para la capa local. COLHYBRI no sustituye la gestion de subvenciones. Anade la economia de barrio que esas herramientas no alcanzan, con medicion por comercio y un mapa claro de como circula el apoyo.',
      },
    ],
    faq: [
      {
        q: 'Es COLHYBRI una alternativa a Benevity, Bonterra o Goodera?',
        a: 'COLHYBRI es una alternativa para la capa local y de proximidad del impacto. No es un reemplazo completo de las suites de subvenciones o voluntariado empresarial. Las empresas usan COLHYBRI para concentrar el apoyo en una economia de barrio, con medicion por comercio que los portales de donacion amplios no ofrecen.',
      },
      {
        q: 'Que significa el impacto local de proximidad en COLHYBRI?',
        a: 'El impacto local de proximidad significa que el apoyo esta ligado a una geografia precisa: un barrio y sus comercios, cafes y servicios independientes. En lugar de repartir fondos entre muchas causas, COLHYBRI construye una vitalidad economica local visible donde viven y trabajan los empleados de una empresa.',
      },
      {
        q: 'Como viven los empleados COLHYBRI?',
        a: 'Los empleados ven los comercios locales que su empresa apoya, pueden visitarlos y seguir como circula el apoyo calle por calle. Esa visibilidad refuerza la pertenencia y da a la retencion del talento una historia local concreta en lugar de un panel abstracto.',
      },
    ],
    comparison: {
      title: 'COLHYBRI vs Benevity vs Bonterra vs Goodera de un vistazo',
      columns: ['Criterio', 'COLHYBRI', 'Benevity', 'Bonterra', 'Goodera'],
      rows: [
        ['Modelo central', 'Apoyo a comercios locales de proximidad', 'Donacion corporativa y subvenciones', 'Software para ONG y social good', 'Voluntariado de empleados'],
        ['Destino de los fondos', 'Comercios y servicios independientes', 'ONG y entidades beneficas', 'ONG y beneficiarios de subvenciones', 'Proyectos de voluntariado y ONG'],
        ['Comprador principal', 'Empresas, ciudades, residentes', 'Grandes cuentas', 'ONG y grandes cuentas', 'Grandes cuentas'],
        ['Foco geografico', 'Un barrio elegido', 'Global', 'Global', 'Global'],
        ['Experiencia del empleado', 'Impacto local visible y accesible', 'Portal de donacion y matching', 'Herramientas de donantes y programas', 'Experiencias de voluntariado'],
        ['Medicion de impacto', 'Por comercio, por calle', 'Informes de donacion agregados', 'Resultados de programas y subvenciones', 'Horas de voluntariado'],
        ['Modelo de precios', 'Suscripcion self-serve', 'Contrato empresarial', 'Contrato empresarial', 'Contrato empresarial'],
      ],
    },
  },
};

// Eight locales fall back to EN until localized.
const blockFor = (loc) => content[loc] ? content[loc] : content.en;

let changed = 0;
for (const loc of LOCALES) {
  const file = path.join(MESSAGES_DIR, `${loc}.json`);
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!json.cocon) throw new Error(`${loc}: missing cocon namespace`);

  const block = JSON.parse(JSON.stringify(blockFor(loc)));
  json.cocon[SLUG] = block;

  if (!json.cocon.meta) throw new Error(`${loc}: missing cocon.meta namespace`);
  json.cocon.meta[SLUG] = { title: block.title };

  fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  changed += 1;
  console.log(`${loc}: injected cocon.${SLUG} (${content[loc] ? 'authored' : 'EN fallback'})`);
}
console.log(`\nDone. ${changed} locale files updated.`);
