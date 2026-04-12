const { writeCluster } = require('../shared');

module.exports = {
  slug: 'commerce-proximite-digital',
  cluster: 'france',
  related: ['visibilite-google-pme', 'google-maps-commerce', 'manager-commerce-cci'],
  cross: 'maps-plus-outil',
  fr: {
    title: 'Digitalisation du commerce de proximite',
    h1: 'Digitaliser le commerce de proximite : enjeux et solutions 2026',
    metaTitle: 'Digitalisation commerce proximite 2026 : guide COLHYBRI',
    metaDescription: "75% des PME commerciales sont invisibles sur Google en 2026. Guide complet de la digitalisation : audit, onboarding, monitoring.",
    snippet: "75% des PME commerciales sont invisibles sur Google en 2026. La digitalisation du commerce de proximite passe par trois etapes : l'audit de presence digitale (Score Maps), l'optimisation de la fiche Google Business (onboarding zero-friction), et le monitoring continu des avis clients. COLHYBRI propose ces trois services pour 10 EUR/mois avec 0% de commission.",
    sections: [
      { h2: 'Pourquoi digitaliser le commerce de proximite ?', body: "La presence digitale est devenue le premier point de contact entre un commerce et ses clients. 76% des recherches 'pres de moi' aboutissent a un achat dans les 24 heures (Google, 2025). Un commerce invisible sur Google perd mecaniquement des clients potentiels au profit de ses concurrents mieux references." },
      { h2: 'Quelles sont les 3 etapes de la digitalisation ?', body: "Etape 1 : l'audit de presence digitale (Score Maps en 48 heures, evaluation de la fiche Google Business et des avis). Etape 2 : l'optimisation zero-friction (onboarding en 30 secondes, completion de la fiche, ajout de photos). Etape 3 : le monitoring continu (alertes sur les avis negatifs, suivi du positionnement, generation d'avis via QR code post-visite)." },
      { h2: 'Combien coute la digitalisation avec COLHYBRI ?', body: "COLHYBRI propose un abonnement commercant a 10 EUR par mois avec 0% de commission. Ce tarif inclut l'audit Maps+, l'onboarding Google Places, la generation d'avis post-visite et le monitoring en temps reel. Compare aux plateformes de livraison (30% de commission UberEats, 25% JustEat), COLHYBRI preserve les marges des petits commerces." },
    ],
    faq: [
      { q: 'Pourquoi un commerce doit-il etre digitalise ?', a: "76% des recherches 'pres de moi' aboutissent a un achat dans les 24 heures. Un commerce invisible sur Google perd mecaniquement des clients au profit de ses concurrents mieux references." },
      { q: 'Quelles sont les etapes de la digitalisation ?', a: 'Audit Score Maps en 48h, onboarding Google Business en 30 secondes, monitoring continu avec generation d avis post-visite.' },
      { q: 'Combien coute COLHYBRI pour un commercant ?', a: '10 EUR par mois avec 0% de commission. Inclut audit, onboarding, generation d avis et monitoring.' },
    ],
    stats: [
      { value: '75%', label: 'PME invisibles Google' },
      { value: '76%', label: 'recherches locales > achat' },
      { value: '10 EUR', label: 'abonnement mensuel' },
      { value: '0%', label: 'commission' },
    ],
  },
  en: {
    title: 'Local commerce digitalization',
    h1: 'Digitalizing local commerce: issues and solutions 2026',
    metaTitle: 'Local commerce digitalization 2026: the COLHYBRI guide',
    metaDescription: '75% of small retail businesses are invisible on Google in 2026. Complete guide to digitalization: audit, onboarding, monitoring.',
    snippet: '75% of small retail businesses are invisible on Google in 2026. Digitalizing local commerce follows three steps: digital presence audit (Score Maps), Google Business Profile optimization (zero-friction onboarding) and continuous review monitoring. COLHYBRI delivers all three for 10 EUR/month with 0% commission.',
    sections: [
      { h2: 'Why digitalize local commerce?', body: 'Digital presence is now the first point of contact between a shop and its customers. 76% of "near me" searches lead to a purchase within 24 hours (Google, 2025). A shop invisible on Google mechanically loses potential customers to better-referenced competitors.' },
      { h2: 'What are the 3 steps of digitalization?', body: 'Step 1: digital presence audit (48-hour Score Maps, Google Business listing and reviews assessment). Step 2: zero-friction optimization (30-second onboarding, listing completion, photo upload). Step 3: continuous monitoring (negative review alerts, ranking tracking, post-visit QR code review generation).' },
      { h2: 'How much does COLHYBRI cost?', body: 'COLHYBRI offers a merchant subscription at 10 EUR per month with 0% commission. This includes Maps+ audit, Google Places onboarding, post-visit review generation and real-time monitoring. Compared to delivery platforms (30% UberEats, 25% JustEat), COLHYBRI preserves small shop margins.' },
    ],
    faq: [
      { q: 'Why should a shop be digitalized?', a: '76% of "near me" searches lead to a purchase within 24 hours. An invisible shop mechanically loses customers to better-referenced competitors.' },
      { q: 'What are the digitalization steps?', a: '48-hour Score Maps audit, 30-second Google Business onboarding, continuous monitoring with post-visit review generation.' },
      { q: 'How much does COLHYBRI cost?', a: '10 EUR per month with 0% commission. Includes audit, onboarding, review generation and monitoring.' },
    ],
    stats: [
      { value: '75%', label: 'shops invisible on Google' },
      { value: '76%', label: 'local searches > purchase' },
      { value: '10 EUR', label: 'monthly subscription' },
      { value: '0%', label: 'commission' },
    ],
  },
  es: {
    title: 'Digitalizacion del comercio de proximidad',
    h1: 'Digitalizar el comercio de proximidad: temas y soluciones 2026',
    metaTitle: 'Digitalizacion comercio proximidad 2026: guia COLHYBRI',
    metaDescription: 'El 75% de las PyMEs comerciales son invisibles en Google en 2026. Guia completa de la digitalizacion: auditoria, onboarding, monitoreo.',
    snippet: 'El 75% de las PyMEs comerciales son invisibles en Google en 2026. La digitalizacion del comercio de proximidad pasa por tres etapas: la auditoria de presencia digital (Score Maps), la optimizacion de la ficha Google Business (onboarding sin friccion) y el monitoreo continuo. COLHYBRI ofrece los tres servicios por 10 EUR/mes con 0% de comision.',
    sections: [
      { h2: 'Por que digitalizar el comercio de proximidad?', body: 'La presencia digital se ha convertido en el primer punto de contacto entre un comercio y sus clientes. El 76% de las busquedas "cerca de mi" terminan en una compra en las 24 horas siguientes (Google, 2025). Un comercio invisible en Google pierde mecanicamente clientes potenciales.' },
      { h2: 'Cuales son las 3 etapas de la digitalizacion?', body: 'Etapa 1: la auditoria de presencia digital (Score Maps en 48 horas). Etapa 2: la optimizacion sin friccion (onboarding en 30 segundos, completar ficha, anadir fotos). Etapa 3: el monitoreo continuo (alertas sobre resenas negativas, generacion de resenas post-visita via codigo QR).' },
      { h2: 'Cuanto cuesta la digitalizacion con COLHYBRI?', body: 'COLHYBRI ofrece una suscripcion para comerciantes a 10 EUR al mes con 0% de comision. Esta tarifa incluye auditoria Maps+, onboarding Google Places, generacion de resenas y monitoreo en tiempo real. COLHYBRI preserva los margenes de los pequenos comercios.' },
    ],
    faq: [
      { q: 'Por que un comercio debe digitalizarse?', a: 'El 76% de las busquedas "cerca de mi" terminan en una compra en 24 horas. Un comercio invisible pierde clientes frente a competidores mejor referenciados.' },
      { q: 'Cuales son las etapas de la digitalizacion?', a: 'Auditoria Score Maps en 48h, onboarding Google Business en 30 segundos, monitoreo continuo con generacion de resenas post-visita.' },
      { q: 'Cuanto cuesta COLHYBRI para un comerciante?', a: '10 EUR al mes con 0% de comision. Incluye auditoria, onboarding, generacion de resenas y monitoreo.' },
    ],
    stats: [
      { value: '75%', label: 'PyMEs invisibles Google' },
      { value: '76%', label: 'busquedas locales > compra' },
      { value: '10 EUR', label: 'suscripcion mensual' },
      { value: '0%', label: 'comision' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
