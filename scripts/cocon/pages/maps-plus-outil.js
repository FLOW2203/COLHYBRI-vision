const { writeCluster } = require('../shared');

module.exports = {
  slug: 'maps-plus-outil',
  cluster: 'digital',
  related: ['score-maps-audit', 'onboarding-digital-commerce', 'avis-google-commercants'],
  cross: 'commerce-equitable-local',
  fr: {
    title: 'Maps+ outil COLHYBRI',
    h1: 'Maps+ by COLHYBRI : l outil de digitalisation pour les commerces de proximite',
    metaTitle: 'Maps+ COLHYBRI : audit, onboarding, avis, monitoring',
    metaDescription: 'Maps+ est le module de digitalisation COLHYBRI. 4 piliers : audit Score Maps 48h, onboarding zero-friction, generation avis QR, monitoring.',
    snippet: "Maps+ est le module de digitalisation de COLHYBRI qui couvre les 4 piliers de la visibilite en ligne des commerces : audit automatise (Score Maps en 48h), onboarding Google Places zero-friction, generation d'avis via QR code post-visite et monitoring continu avec alertes sur les avis negatifs. Inclus dans l'abonnement commercant a 10 EUR/mois.",
    sections: [
      { h2: 'Que fait Maps+ concretement ?', body: "Maps+ est un module SaaS qui automatise l ensemble des taches digitales d un commerce : audit de la presence Google (avec le Score Maps), creation ou optimisation de la fiche Google Business, generation d avis clients via un QR code imprime sur le ticket de caisse, et monitoring continu avec alertes par SMS ou email sur les avis negatifs ou les baisses de positionnement." },
      { h2: 'Pourquoi Maps+ vaut 10 EUR/mois ?', body: "Le tarif de Maps+ est inclus dans l abonnement commercant COLHYBRI a 10 EUR/mois. En comparaison, les agences de SEO local facturent 200-500 EUR/mois pour des services equivalents, Yelp facture 300-1000 USD/mois pour de la publicite, et les plateformes a commission prelevent 25-30% sur chaque vente. Maps+ est 10 a 50 fois moins cher tout en etant automatise." },
      { h2: 'Comment Maps+ s integre a un programme municipal ?', body: "Pour les communes Action Coeur de Ville, Petites Villes de Demain ou Main Street America, Maps+ s integre au dashboard municipal. Le manager de commerce peut suivre le Score Maps de tous les commerces de son perimetre, detecter les commerces en difficulte (score < 50), et declencher des actions d accompagnement ciblees. Le rapport d impact trimestriel est pret pour le conseil municipal." },
    ],
    faq: [
      { q: 'Que fait Maps+ concretement ?', a: 'Automatisation des 4 piliers : audit Score Maps 48h, creation/optimisation fiche Google Business, generation avis via QR code, monitoring continu avec alertes.' },
      { q: 'Pourquoi 10 EUR/mois ?', a: 'Tarif inclus dans l abonnement commercant. Les agences SEO local facturent 200-500 EUR/mois, Yelp 300-1000 USD/mois. Maps+ est 10-50x moins cher et automatise.' },
      { q: 'Comment s integre a un programme municipal ?', a: 'Dashboard municipal pour ACV, PVD ou Main Street America. Suivi du Score Maps, detection des commerces en difficulte, rapport d impact trimestriel.' },
    ],
    stats: [
      { value: '4 piliers', label: 'couverts par Maps+' },
      { value: '10 EUR', label: 'abonnement mensuel' },
      { value: '48h', label: 'audit Score Maps' },
      { value: '10-50x', label: 'moins cher que concurrents' },
    ],
  },
  en: {
    title: 'Maps+ COLHYBRI tool',
    h1: 'Maps+ by COLHYBRI: the digitalization tool for local shops',
    metaTitle: 'Maps+ COLHYBRI: audit, onboarding, reviews, monitoring',
    metaDescription: 'Maps+ is the COLHYBRI digitalization module. 4 pillars: 48h Score Maps audit, zero-friction onboarding, QR review generation, monitoring.',
    snippet: 'Maps+ is the COLHYBRI digitalization module that covers the 4 pillars of online shop visibility: automated audit (48-hour Score Maps), zero-friction Google Places onboarding, review generation via post-visit QR code, and continuous monitoring with negative review alerts. Included in the 10 EUR/month merchant subscription.',
    sections: [
      { h2: 'What does Maps+ do in practice?', body: 'Maps+ is a SaaS module that automates all digital tasks for a shop: audit of Google presence (with Score Maps), creation or optimization of the Google Business listing, customer review generation via QR code printed on the receipt, and continuous monitoring with SMS or email alerts on negative reviews or ranking drops.' },
      { h2: 'Why is Maps+ worth 10 EUR/month?', body: 'Maps+ is included in the COLHYBRI merchant subscription at 10 EUR/month. For comparison, local SEO agencies charge 200-500 EUR/month for equivalent services, Yelp charges $300-1000/month for advertising, and commission platforms take 25-30% on every sale. Maps+ is 10-50x cheaper while being automated.' },
      { h2: 'How does Maps+ integrate with a municipal program?', body: 'For Action Coeur de Ville, Petites Villes de Demain or Main Street America cities, Maps+ integrates with the municipal dashboard. The commerce manager can track Score Maps of every shop in their perimeter, detect struggling shops (score < 50), and trigger targeted support actions. Quarterly impact report ready for the city council.' },
    ],
    faq: [
      { q: 'What does Maps+ do in practice?', a: '4 pillars: 48-hour Score Maps audit, Google Business listing creation/optimization, QR code review generation, continuous monitoring with alerts.' },
      { q: 'Why 10 EUR/month?', a: 'Included in merchant subscription. Local SEO agencies charge 200-500 EUR/month, Yelp $300-1000/month. Maps+ is 10-50x cheaper and automated.' },
      { q: 'How does it integrate with a municipal program?', a: 'Municipal dashboard for ACV, PVD or Main Street America. Score Maps tracking, struggling shop detection, quarterly impact report.' },
    ],
    stats: [
      { value: '4 pillars', label: 'covered by Maps+' },
      { value: '10 EUR', label: 'monthly subscription' },
      { value: '48h', label: 'Score Maps audit' },
      { value: '10-50x', label: 'cheaper than alternatives' },
    ],
  },
  es: {
    title: 'Maps+ herramienta COLHYBRI',
    h1: 'Maps+ by COLHYBRI: la herramienta de digitalizacion para comercios de proximidad',
    metaTitle: 'Maps+ COLHYBRI: auditoria, onboarding, resenas, monitoreo',
    metaDescription: 'Maps+ es el modulo de digitalizacion COLHYBRI. 4 pilares: auditoria Score Maps 48h, onboarding sin friccion, generacion resenas QR, monitoreo.',
    snippet: 'Maps+ es el modulo de digitalizacion de COLHYBRI que cubre los 4 pilares de la visibilidad en linea de los comercios: auditoria automatizada (Score Maps en 48h), onboarding Google Places sin friccion, generacion de resenas via codigo QR post-visita y monitoreo continuo con alertas sobre resenas negativas. Incluido en la suscripcion comerciante de 10 EUR/mes.',
    sections: [
      { h2: 'Que hace Maps+ concretamente?', body: 'Maps+ es un modulo SaaS que automatiza todas las tareas digitales de un comercio: auditoria de la presencia Google, creacion u optimizacion de la ficha Google Business, generacion de resenas de clientes via codigo QR impreso en el ticket, y monitoreo continuo con alertas por SMS o email sobre resenas negativas.' },
      { h2: 'Por que Maps+ vale 10 EUR/mes?', body: 'La tarifa de Maps+ esta incluida en la suscripcion comerciante COLHYBRI de 10 EUR/mes. Las agencias de SEO local cobran 200-500 EUR/mes por servicios equivalentes, Yelp 300-1000 USD/mes por publicidad, y las plataformas con comision cobran 25-30%. Maps+ es 10-50 veces mas barato.' },
      { h2: 'Como se integra Maps+ a un programa municipal?', body: 'Para los municipios Action Coeur de Ville, Petites Villes de Demain o Main Street America, Maps+ se integra al dashboard municipal. El gestor de comercio puede seguir el Score Maps de todos los comercios, detectar los comercios en dificultad y desencadenar acciones de acompanamiento focalizadas.' },
    ],
    faq: [
      { q: 'Que hace Maps+ concretamente?', a: 'Automatizacion de los 4 pilares: auditoria Score Maps 48h, creacion/optimizacion ficha, generacion resenas via QR, monitoreo continuo con alertas.' },
      { q: 'Por que 10 EUR/mes?', a: 'Incluido en la suscripcion comerciante. Las agencias SEO cobran 200-500 EUR/mes. Maps+ es 10-50 veces mas barato y automatizado.' },
      { q: 'Como se integra a un programa municipal?', a: 'Dashboard municipal para ACV, PVD o Main Street America. Seguimiento Score Maps, deteccion de comercios en dificultad, informe trimestral.' },
    ],
    stats: [
      { value: '4 pilares', label: 'cubiertos por Maps+' },
      { value: '10 EUR', label: 'suscripcion mensual' },
      { value: '48h', label: 'auditoria Score Maps' },
      { value: '10-50x', label: 'mas barato que alternativas' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
