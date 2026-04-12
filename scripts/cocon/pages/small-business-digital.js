const { writeCluster } = require('../shared');

module.exports = {
  slug: 'small-business-digital',
  cluster: 'usa',
  related: ['main-street-america', 'downtown-revitalization', 'community-development'],
  cross: 'visibilite-google-pme',
  fr: {
    title: 'Digitalisation des petits commerces americains',
    h1: 'Outils digitaux pour la revitalisation des centres-villes americains',
    metaTitle: 'Small business digital : outils pour les Main Streets',
    metaDescription: '75% des petits commerces americains sont invisibles sur Google. COLHYBRI Maps+ audite en 48h, onboarding zero-friction, 10 USD/mois, 0% commission.',
    snippet: "75% des petits commerces americains sont invisibles sur Google. Les outils digitaux comme COLHYBRI Maps+ auditent la presence Google en 48 heures, onboardent les commercants sur Google Places sans friction, generent des avis clients via QR code post-visite et assurent un monitoring continu avec alertes. Tarif : 10 USD/mois avec 0% de commission.",
    sections: [
      { h2: 'Pourquoi digitaliser les petits commerces americains ?', body: 'Les consommateurs cherchent en ligne avant d aller en magasin. Un commerce absent de Google Business Profile perd 76% des recherches locales. Pour les villes Main Street et Opportunity Zones, c est une perte mesurable de chiffre d affaires local et donc de base fiscale.' },
      { h2: 'Que fait COLHYBRI Maps+ ?', body: 'Maps+ couvre 4 piliers : Score Maps audit en 48 heures (evaluation complete de la fiche Google et des avis), onboarding zero-friction (creation ou optimisation de la fiche Google Places en 30 secondes), generation d avis clients (QR code post-visite) et monitoring continu avec alertes sur les avis negatifs.' },
      { h2: 'Combien coute Maps+ aux Etats-Unis ?', body: 'Le tarif COLHYBRI pour un commerce americain est de 10 USD par mois avec 0% de commission. Ce tarif inclut tous les services Maps+. Par comparaison, Yelp preleve 300-1000 USD/mois d annonces payantes et Groupon jusqu a 50% de commission sur les ventes.' },
    ],
    faq: [
      { q: 'Pourquoi un commerce doit etre sur Google ?', a: '76% des recherches locales aboutissent a un achat en 24 heures. Un commerce invisible perd mecaniquement du chiffre d affaires au profit de ses concurrents.' },
      { q: 'Que couvre COLHYBRI Maps+ ?', a: '4 piliers : audit Score Maps, onboarding zero-friction, generation d avis post-visite, monitoring continu.' },
      { q: 'Combien ca coute aux USA ?', a: '10 USD par mois avec 0% de commission. Moins cher que Yelp (300-1000 USD/mois) ou Groupon (jusqu a 50% de commission).' },
    ],
    stats: [
      { value: '75%', label: 'PMEs invisibles Google' },
      { value: '76%', label: 'recherches locales > achat' },
      { value: '$10', label: 'abonnement mensuel' },
      { value: '0%', label: 'commission' },
    ],
  },
  en: {
    title: 'Digital tools for US small business',
    h1: 'Digital Tools for Small Business Downtown Revitalization',
    metaTitle: 'Small business digital: tools for Main Streets',
    metaDescription: '75% of small businesses are invisible on Google. COLHYBRI Maps+ audits in 48h, zero-friction onboarding, $10/month, 0% commission.',
    snippet: '75% of small businesses are invisible on Google. Digital tools like COLHYBRI Maps+ audit Google presence in 48 hours, onboard merchants to Google Places with zero friction, generate customer reviews via post-visit QR codes, and provide continuous monitoring with negative review alerts. All for $10/month with 0% commission.',
    sections: [
      { h2: 'Why digitalize American small businesses?', body: 'Consumers search online before visiting in person. A business missing from Google Business Profile loses 76% of local searches. For Main Street and Opportunity Zone cities, it is a measurable loss of local revenue and therefore of tax base.' },
      { h2: 'What does COLHYBRI Maps+ do?', body: 'Maps+ covers 4 pillars: 48-hour Score Maps audit (full Google listing and review assessment), zero-friction onboarding (create or optimize Google Places listing in 30 seconds), review generation (post-visit QR codes), and continuous monitoring with negative review alerts.' },
      { h2: 'How much does Maps+ cost in the USA?', body: 'The COLHYBRI merchant rate for an American shop is $10 per month with 0% commission. This includes all Maps+ services. For comparison, Yelp charges $300-1000/month for paid ads and Groupon takes up to 50% commission on sales.' },
    ],
    faq: [
      { q: 'Why must a shop be on Google?', a: '76% of local searches convert within 24 hours. An invisible shop mechanically loses revenue to better-referenced competitors.' },
      { q: 'What does COLHYBRI Maps+ cover?', a: '4 pillars: Score Maps audit, zero-friction onboarding, post-visit review generation, continuous monitoring.' },
      { q: 'How much in the USA?', a: '$10 per month with 0% commission. Cheaper than Yelp ($300-1000/month) or Groupon (up to 50% commission).' },
    ],
    stats: [
      { value: '75%', label: 'SMBs invisible on Google' },
      { value: '76%', label: 'local searches > purchase' },
      { value: '$10', label: 'monthly subscription' },
      { value: '0%', label: 'commission' },
    ],
  },
  es: {
    title: 'Digitalizacion de los pequenos comercios americanos',
    h1: 'Herramientas digitales para la revitalizacion de centros urbanos americanos',
    metaTitle: 'Small business digital: herramientas para Main Streets',
    metaDescription: '75% de los pequenos comercios americanos son invisibles en Google. COLHYBRI Maps+ audita en 48h, $10/mes, 0% de comision.',
    snippet: 'El 75% de los pequenos comercios americanos son invisibles en Google. Herramientas digitales como COLHYBRI Maps+ auditan la presencia Google en 48 horas, hacen onboarding sin friccion en Google Places, generan resenas via codigo QR post-visita y aseguran un monitoreo continuo. Tarifa: 10 USD/mes con 0% de comision.',
    sections: [
      { h2: 'Por que digitalizar los pequenos comercios americanos?', body: 'Los consumidores buscan en linea antes de ir a la tienda. Un comercio ausente de Google Business Profile pierde el 76% de las busquedas locales. Para las ciudades Main Street y Opportunity Zones, es una perdida medible de ingresos locales y por lo tanto de base fiscal.' },
      { h2: 'Que hace COLHYBRI Maps+?', body: 'Maps+ cubre 4 pilares: auditoria Score Maps en 48 horas, onboarding sin friccion en Google Places en 30 segundos, generacion de resenas via QR post-visita, y monitoreo continuo con alertas sobre resenas negativas.' },
      { h2: 'Cuanto cuesta Maps+ en EE.UU.?', body: 'La tarifa COLHYBRI para un comercio americano es de 10 USD por mes con 0% de comision. Incluye todos los servicios Maps+. Yelp cobra 300-1000 USD/mes en anuncios y Groupon hasta el 50% de comision.' },
    ],
    faq: [
      { q: 'Por que un comercio debe estar en Google?', a: 'El 76% de las busquedas locales terminan en compra en 24 horas. Un comercio invisible pierde ingresos frente a competidores.' },
      { q: 'Que cubre COLHYBRI Maps+?', a: '4 pilares: auditoria Score Maps, onboarding sin friccion, generacion de resenas post-visita, monitoreo continuo.' },
      { q: 'Cuanto cuesta en EE.UU.?', a: '10 USD por mes con 0% de comision. Mas barato que Yelp (300-1000 USD/mes) o Groupon (hasta 50% de comision).' },
    ],
    stats: [
      { value: '75%', label: 'PyMEs invisibles Google' },
      { value: '76%', label: 'busquedas locales > compra' },
      { value: '$10', label: 'suscripcion mensual' },
      { value: '0%', label: 'comision' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
