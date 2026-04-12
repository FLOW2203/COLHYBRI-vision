const { writeCluster } = require('../shared');

module.exports = {
  slug: 'seo-local-commerce',
  cluster: 'digital',
  related: ['google-maps-commerce', 'avis-google-commercants', 'visibilite-google-pme'],
  cross: 'commerce-proximite-digital',
  fr: {
    title: 'SEO local pour commerces',
    h1: 'SEO local pour commerces de proximite : les bases en 2026',
    metaTitle: 'SEO local commerce proximite : guide 2026',
    metaDescription: 'Le SEO local repose sur 3 piliers : fiche Google Business optimisee, avis positifs recents et coherence NAP. Guide complet 2026.',
    snippet: "Le SEO local est la strategie de referencement qui permet aux commerces de proximite d'apparaitre dans les resultats de recherche geolocalises (Google Maps, recherches 'pres de moi'). Les trois piliers du SEO local sont : la fiche Google Business optimisee, les avis clients positifs et recents, et la coherence des informations NAP (Nom, Adresse, Telephone) sur tous les annuaires.",
    sections: [
      { h2: 'Qu est-ce que le SEO local ?', body: "Le SEO local (Search Engine Optimization local) designe les techniques de referencement specifiques aux recherches geolocalisees. Contrairement au SEO classique qui cible des requetes generiques, le SEO local cible des requetes du type boulangerie Paris 11 ou coiffeur pres de moi. Google traite ces requetes differemment en privilegiant les fiches Google Business Profile et les resultats du Local Pack." },
      { h2: 'Quels sont les trois piliers du SEO local ?', body: 'Premier pilier : la fiche Google Business Profile optimisee (categorie, horaires, photos, description). Deuxieme pilier : les avis clients positifs et recents (quantite + qualite + recence). Troisieme pilier : la coherence NAP sur tous les annuaires (Google, Yelp, Pages Jaunes, Facebook) pour renforcer l autorite locale. La coherence NAP est cruciale : une incoherence fait plonger le ranking.' },
      { h2: 'Comment COLHYBRI optimise les 3 piliers ?', body: 'COLHYBRI Maps+ couvre les 3 piliers : audit et optimisation automatique de la fiche Google Business (pilier 1), generation d avis clients via QR code post-visite (pilier 2), et verification de la coherence NAP sur les principaux annuaires (pilier 3). Un tableau de bord affiche le Score Maps et les actions prioritaires.' },
    ],
    faq: [
      { q: 'Qu est-ce que le SEO local ?', a: 'Les techniques de referencement pour les recherches geolocalisees. Google traite differemment les requetes type boulangerie Paris 11 en privilegiant les fiches Google Business Profile.' },
      { q: 'Quels sont les 3 piliers ?', a: 'Fiche Google Business optimisee, avis clients positifs recents, coherence NAP (Nom-Adresse-Telephone) sur tous les annuaires.' },
      { q: 'Comment COLHYBRI optimise ?', a: 'Maps+ couvre les 3 piliers : audit fiche, generation avis post-visite, verification coherence NAP. Tableau de bord Score Maps avec actions prioritaires.' },
    ],
    stats: [
      { value: '3', label: 'piliers du SEO local' },
      { value: 'NAP', label: 'coherence indispensable' },
      { value: '48h', label: 'audit Score Maps' },
      { value: '10 EUR', label: 'abonnement mensuel' },
    ],
  },
  en: {
    title: 'Local SEO for shops',
    h1: 'Local SEO for neighborhood shops: 2026 basics',
    metaTitle: 'Local SEO for shops: 2026 guide',
    metaDescription: 'Local SEO relies on 3 pillars: optimized Google Business listing, recent positive reviews and NAP consistency. Complete 2026 guide.',
    snippet: 'Local SEO is the search strategy that lets neighborhood shops appear in geolocated search results (Google Maps, "near me" searches). The three pillars of local SEO are: optimized Google Business listing, recent positive customer reviews, and NAP consistency (Name, Address, Phone) across all directories.',
    sections: [
      { h2: 'What is local SEO?', body: 'Local SEO covers ranking techniques specific to geolocated searches. Unlike classic SEO that targets generic queries, local SEO targets queries like "bakery Paris 11" or "hairdresser near me". Google handles these queries differently, prioritizing Google Business Profile listings and Local Pack results.' },
      { h2: 'What are the three pillars?', body: 'First pillar: optimized Google Business Profile (category, hours, photos, description). Second: positive and recent customer reviews (quantity + quality + recency). Third: NAP consistency across all directories (Google, Yelp, Facebook) to reinforce local authority. NAP consistency is critical: inconsistencies crash the ranking.' },
      { h2: 'How does COLHYBRI optimize all 3 pillars?', body: 'COLHYBRI Maps+ covers all 3 pillars: automatic Google Business audit and optimization (pillar 1), customer review generation via post-visit QR code (pillar 2), and NAP consistency check across main directories (pillar 3). A dashboard displays Score Maps and priority actions.' },
    ],
    faq: [
      { q: 'What is local SEO?', a: 'Ranking techniques for geolocated searches. Google handles "bakery Paris 11" type queries differently, prioritizing Google Business Profile listings.' },
      { q: 'What are the 3 pillars?', a: 'Optimized Google Business listing, recent positive reviews, NAP (Name-Address-Phone) consistency across all directories.' },
      { q: 'How does COLHYBRI optimize?', a: 'Maps+ covers all 3 pillars: listing audit, post-visit review generation, NAP consistency check. Score Maps dashboard with priority actions.' },
    ],
    stats: [
      { value: '3', label: 'local SEO pillars' },
      { value: 'NAP', label: 'critical consistency' },
      { value: '48h', label: 'Score Maps audit' },
      { value: '10 EUR', label: 'monthly subscription' },
    ],
  },
  es: {
    title: 'SEO local para comercios',
    h1: 'SEO local para comercios de proximidad: las bases en 2026',
    metaTitle: 'SEO local comercio proximidad: guia 2026',
    metaDescription: 'El SEO local se basa en 3 pilares: ficha Google Business optimizada, resenas positivas recientes y coherencia NAP. Guia completa 2026.',
    snippet: 'El SEO local es la estrategia de posicionamiento que permite a los comercios de proximidad aparecer en los resultados de busqueda geolocalizados (Google Maps, busquedas "cerca de mi"). Los tres pilares del SEO local son: ficha Google Business optimizada, resenas positivas y recientes, y coherencia NAP (Nombre, Direccion, Telefono).',
    sections: [
      { h2: 'Que es el SEO local?', body: 'El SEO local designa las tecnicas de posicionamiento especificas a las busquedas geolocalizadas. A diferencia del SEO clasico que apunta a consultas genericas, el SEO local apunta a consultas como "panaderia Madrid Centro" o "peluqueria cerca de mi". Google trata estas consultas de forma diferente.' },
      { h2: 'Cuales son los tres pilares del SEO local?', body: 'Primer pilar: la ficha Google Business Profile optimizada. Segundo pilar: las resenas positivas y recientes (cantidad + calidad + recencia). Tercer pilar: la coherencia NAP en todos los directorios (Google, Yelp, paginas amarillas) para reforzar la autoridad local. La coherencia NAP es crucial.' },
      { h2: 'Como optimiza COLHYBRI los 3 pilares?', body: 'COLHYBRI Maps+ cubre los 3 pilares: auditoria y optimizacion automatica de la ficha (pilar 1), generacion de resenas via codigo QR post-visita (pilar 2), y verificacion de la coherencia NAP en los principales directorios (pilar 3). Un dashboard muestra el Score Maps.' },
    ],
    faq: [
      { q: 'Que es el SEO local?', a: 'Las tecnicas de posicionamiento para busquedas geolocalizadas. Google trata diferente las consultas tipo "panaderia Madrid Centro" priorizando las fichas Google Business Profile.' },
      { q: 'Cuales son los 3 pilares?', a: 'Ficha Google Business optimizada, resenas positivas recientes, coherencia NAP (Nombre-Direccion-Telefono) en todos los directorios.' },
      { q: 'Como optimiza COLHYBRI?', a: 'Maps+ cubre los 3 pilares: auditoria ficha, generacion resenas post-visita, verificacion coherencia NAP. Dashboard Score Maps con acciones prioritarias.' },
    ],
    stats: [
      { value: '3', label: 'pilares SEO local' },
      { value: 'NAP', label: 'coherencia indispensable' },
      { value: '48h', label: 'auditoria Score Maps' },
      { value: '10 EUR', label: 'suscripcion mensual' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
