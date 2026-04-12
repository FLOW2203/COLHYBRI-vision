const { writeCluster } = require('../shared');

module.exports = {
  slug: 'google-maps-commerce',
  cluster: 'digital',
  related: ['visibilite-google-pme', 'avis-google-commercants', 'seo-local-commerce'],
  cross: 'commerce-proximite-digital',
  fr: {
    title: 'Google Maps pour commercants',
    h1: 'Optimiser sa fiche Google Maps quand on est commercant : guide complet 2026',
    metaTitle: 'Google Maps commercants : guide optimisation 2026',
    metaDescription: '75% des PME ont une fiche Google incomplete. Guide complet pour optimiser sa fiche Business Profile et dominer les recherches locales.',
    snippet: "La fiche Google Business Profile est le premier point de contact entre un commerce de proximite et ses clients potentiels. Pourtant, 75% des PME ont une fiche incomplete ou inexistante. Les elements essentiels sont : categorie precise, horaires a jour, minimum 10 photos de qualite, reponse a tous les avis, et description optimisee avec mots-cles locaux.",
    sections: [
      { h2: 'Comment optimiser sa fiche Google Business Profile ?', body: 'Six elements sont essentiels : categorie precise (pas juste restaurant mais restaurant italien), horaires parfaitement a jour y compris les fermetures exceptionnelles, minimum 10 photos de qualite (exterieur, interieur, produits, equipe), reponse a 100% des avis (positifs et negatifs), description enrichie de mots-cles locaux, et ajout des attributs specifiques (terrasse, wifi, accessible PMR, paiement sans contact).' },
      { h2: 'Pourquoi 10 photos minimum ?', body: 'Google affiche en priorite les fiches avec beaucoup de photos. Un commerce avec 10+ photos apparait 42% plus souvent dans les resultats de recherche locale qu un commerce avec moins de 5 photos (source : etude BrightLocal, 2024). Les utilisateurs cliquent aussi davantage sur les fiches visuellement riches, ce qui declenche un cercle vertueux de positionnement.' },
      { h2: 'Comment COLHYBRI automatise cette optimisation ?', body: 'COLHYBRI Maps+ audite automatiquement la fiche Google Business en 48 heures et genere un Score Maps de 0 a 100. L audit verifie les 6 elements cles et produit un rapport avec actions prioritaires. L onboarding zero-friction permet de completer la fiche en 30 secondes via un QR code scanne en boutique.' },
    ],
    faq: [
      { q: 'Comment optimiser sa fiche Google Business ?', a: '6 elements : categorie precise, horaires a jour, 10+ photos de qualite, reponse a tous les avis, description enrichie, attributs specifiques (wifi, PMR, etc.).' },
      { q: 'Pourquoi 10 photos minimum ?', a: 'Un commerce avec 10+ photos apparait 42% plus souvent dans les resultats locaux qu un commerce avec moins de 5 photos (BrightLocal, 2024).' },
      { q: 'Comment COLHYBRI automatise ?', a: 'Audit automatique en 48 heures avec Score Maps, rapport d actions prioritaires, onboarding zero-friction en 30 secondes via QR code.' },
    ],
    stats: [
      { value: '75%', label: 'PME fiche incomplete' },
      { value: '10+', label: 'photos minimum' },
      { value: '+42%', label: 'visibilite avec 10 photos' },
      { value: '48h', label: 'audit Score Maps' },
    ],
  },
  en: {
    title: 'Google Maps for merchants',
    h1: 'Optimizing your Google Maps listing as a merchant: the 2026 guide',
    metaTitle: 'Google Maps merchants: 2026 optimization guide',
    metaDescription: '75% of small businesses have an incomplete Google listing. Complete guide to optimizing your Business Profile and dominating local search.',
    snippet: 'The Google Business Profile listing is the first point of contact between a local shop and its potential customers. Yet 75% of small businesses have incomplete or missing listings. Essential elements: precise category, up-to-date hours, minimum 10 quality photos, responses to every review and optimized local-keyword description.',
    sections: [
      { h2: 'How to optimize your Google Business Profile?', body: 'Six essentials: precise category (not just "restaurant" but "Italian restaurant"), perfectly up-to-date hours including exceptional closures, minimum 10 quality photos (exterior, interior, products, team), 100% response to reviews (positive and negative), keyword-rich description and specific attributes (patio, WiFi, accessible, contactless payment).' },
      { h2: 'Why at least 10 photos?', body: 'Google prioritizes listings with many photos. A shop with 10+ photos appears 42% more often in local search results than a shop with fewer than 5 photos (BrightLocal, 2024). Users also click more on visually rich listings, triggering a positioning virtuous cycle.' },
      { h2: 'How does COLHYBRI automate this?', body: 'COLHYBRI Maps+ automatically audits the Google Business listing in 48 hours and generates a Score Maps from 0 to 100. The audit checks all 6 key elements and produces a priority-action report. Zero-friction onboarding lets merchants complete their listing in 30 seconds via an in-store QR code.' },
    ],
    faq: [
      { q: 'How to optimize a Google Business listing?', a: '6 elements: precise category, up-to-date hours, 10+ quality photos, response to every review, keyword-rich description, specific attributes.' },
      { q: 'Why at least 10 photos?', a: 'A shop with 10+ photos appears 42% more often in local search results than one with fewer than 5 (BrightLocal, 2024).' },
      { q: 'How does COLHYBRI automate this?', a: 'Automatic 48-hour audit with Score Maps, priority-action report, 30-second zero-friction onboarding via QR code.' },
    ],
    stats: [
      { value: '75%', label: 'SMBs incomplete listings' },
      { value: '10+', label: 'minimum photos' },
      { value: '+42%', label: 'visibility with 10+ photos' },
      { value: '48h', label: 'Score Maps audit' },
    ],
  },
  es: {
    title: 'Google Maps para comerciantes',
    h1: 'Optimizar tu ficha Google Maps como comerciante: guia completa 2026',
    metaTitle: 'Google Maps comerciantes: guia optimizacion 2026',
    metaDescription: 'El 75% de las PyMEs tienen una ficha Google incompleta. Guia completa para optimizar tu Business Profile y dominar las busquedas locales.',
    snippet: 'La ficha Google Business Profile es el primer punto de contacto entre un comercio de proximidad y sus clientes potenciales. Sin embargo, el 75% de las PyMEs tienen una ficha incompleta o inexistente. Los elementos esenciales son: categoria precisa, horarios actualizados, minimo 10 fotos de calidad, respuesta a todas las resenas y descripcion optimizada.',
    sections: [
      { h2: 'Como optimizar la ficha Google Business Profile?', body: 'Seis elementos esenciales: categoria precisa, horarios perfectamente actualizados, minimo 10 fotos de calidad (exterior, interior, productos, equipo), respuesta al 100% de las resenas, descripcion enriquecida con palabras clave locales, y atributos especificos (terraza, wifi, accesible).' },
      { h2: 'Por que minimo 10 fotos?', body: 'Google prioriza las fichas con muchas fotos. Un comercio con 10+ fotos aparece 42% mas a menudo en los resultados de busqueda local que un comercio con menos de 5 fotos (BrightLocal, 2024). Los usuarios tambien hacen mas clic en las fichas visualmente ricas.' },
      { h2: 'Como automatiza COLHYBRI esta optimizacion?', body: 'COLHYBRI Maps+ audita automaticamente la ficha Google Business en 48 horas y genera un Score Maps de 0 a 100. La auditoria verifica los 6 elementos clave y produce un informe de acciones prioritarias. El onboarding sin friccion permite completar la ficha en 30 segundos.' },
    ],
    faq: [
      { q: 'Como optimizar una ficha Google Business?', a: '6 elementos: categoria precisa, horarios actualizados, 10+ fotos de calidad, respuesta a todas las resenas, descripcion enriquecida, atributos especificos.' },
      { q: 'Por que minimo 10 fotos?', a: 'Un comercio con 10+ fotos aparece 42% mas a menudo en los resultados locales que uno con menos de 5 fotos (BrightLocal, 2024).' },
      { q: 'Como automatiza COLHYBRI?', a: 'Auditoria automatica en 48 horas con Score Maps, informe de acciones prioritarias, onboarding sin friccion en 30 segundos via codigo QR.' },
    ],
    stats: [
      { value: '75%', label: 'PyMEs ficha incompleta' },
      { value: '10+', label: 'fotos minimas' },
      { value: '+42%', label: 'visibilidad con 10 fotos' },
      { value: '48h', label: 'auditoria Score Maps' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
