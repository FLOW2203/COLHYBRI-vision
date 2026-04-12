const { writeCluster } = require('../shared');

module.exports = {
  slug: 'economie-solidaire',
  cluster: 'solidaire',
  related: ['mutualisme-digital', 'pool-solidaire-quartier', 'fidelisation-communautaire'],
  cross: 'community-development',
  fr: {
    title: 'Economie solidaire de quartier',
    h1: 'L economie solidaire de quartier : comment COLHYBRI reinvente le lien local',
    metaTitle: 'Economie solidaire quartier : le modele COLHYBRI',
    metaDescription: "L economie solidaire de quartier combine mutualisation, digitalisation et engagement. COLHYBRI active les trois mecanismes pour 3 EUR/mois.",
    snippet: "L'economie solidaire de quartier combine trois mecanismes : la mutualisation des ressources (pool solidaire), la digitalisation des commerces (Maps+) et l'engagement communautaire (gamification). Pour 3 EUR/mois par habitant et 10 EUR/mois par commercant, COLHYBRI cree un ecosysteme ou la solidarite genere du chiffre d'affaires pour les commercants.",
    sections: [
      { h2: 'Qu est-ce que l economie solidaire ?', body: "L economie sociale et solidaire (ESS) regroupe les associations, mutuelles, cooperatives et fondations qui placent l humain avant le profit. En France, elle represente 14% de l emploi prive et 10% du PIB (source : Confederation francaise de l ESS, 2025). Le mouvement moderne cherche a digitaliser ses outils pour toucher de nouveaux publics." },
      { h2: 'Comment COLHYBRI s inscrit dans l ESS ?', body: "COLHYBRI est une initiative privee qui applique les principes de l ESS au commerce de proximite : gouvernance participative, redistribution equitable, transparence. Le pool solidaire redistribue 75% des cotisations ; les 25% restants couvrent les frais techniques et operationnels. Aucun profit n est extrait du pool." },
      { h2: 'Quels sont les trois mecanismes d activation ?', body: "Premier mecanisme : la mutualisation (pool solidaire qui redistribue 75% des abonnements). Deuxieme mecanisme : la digitalisation (Maps+ rend les commerces visibles sur Google). Troisieme mecanisme : l engagement (26 mini-jeux locaux, defis de quartier, classements par rue commercante). Les trois agissent ensemble pour creer un cercle vertueux." },
    ],
    faq: [
      { q: 'Qu est-ce que l economie solidaire ?', a: 'L economie sociale et solidaire (ESS) regroupe les associations, mutuelles, cooperatives et fondations. En France : 14% de l emploi prive et 10% du PIB selon la Confederation francaise de l ESS.' },
      { q: 'Comment COLHYBRI s inscrit dans l ESS ?', a: 'COLHYBRI applique les principes de l ESS au commerce de proximite : gouvernance participative, redistribution equitable, transparence. 75% des cotisations vont au pool solidaire.' },
      { q: 'Quels sont les trois mecanismes d activation ?', a: 'Mutualisation (pool solidaire), digitalisation (Maps+) et engagement (26 mini-jeux, defis de quartier). Les trois agissent ensemble pour creer un cercle vertueux.' },
    ],
    stats: [
      { value: '14%', label: 'emploi prive ESS France' },
      { value: '10%', label: 'PIB ESS France' },
      { value: '75%', label: 'redistribution pool' },
      { value: '3 mecanismes', label: 'cercle vertueux' },
    ],
  },
  en: {
    title: 'Neighborhood solidarity economy',
    h1: 'Neighborhood solidarity economy: how COLHYBRI reinvents local ties',
    metaTitle: 'Neighborhood solidarity economy: the COLHYBRI model',
    metaDescription: 'Neighborhood solidarity economy combines mutualization, digitalization and engagement. COLHYBRI activates all three for 3 EUR/month.',
    snippet: 'Neighborhood solidarity economy combines three mechanisms: resource pooling (solidarity pool), shop digitalization (Maps+) and community engagement (gamification). For 3 EUR/month per resident and 10 EUR/month per merchant, COLHYBRI creates an ecosystem where solidarity generates revenue for merchants.',
    sections: [
      { h2: 'What is the solidarity economy?', body: 'The social and solidarity economy (SSE) includes associations, mutuelles, cooperatives and foundations that put people before profit. In France, it represents 14% of private employment and 10% of GDP (Confederation francaise de l ESS, 2025). The modern movement digitalizes its tools to reach new audiences.' },
      { h2: 'How does COLHYBRI fit into SSE?', body: 'COLHYBRI is a private initiative that applies SSE principles to local commerce: participatory governance, fair redistribution, transparency. The solidarity pool redistributes 75% of subscriber fees; the remaining 25% covers technical and operational costs. No profit is extracted from the pool.' },
      { h2: 'What are the three activation mechanisms?', body: 'First mechanism: mutualization (solidarity pool redistributes 75% of subscriptions). Second: digitalization (Maps+ makes shops visible on Google). Third: engagement (26 local mini-games, neighborhood challenges, commercial street rankings). The three work together to create a virtuous cycle.' },
    ],
    faq: [
      { q: 'What is the solidarity economy?', a: 'SSE includes associations, mutuelles, cooperatives and foundations. In France: 14% of private employment and 10% of GDP per Confederation francaise de l ESS.' },
      { q: 'How does COLHYBRI fit into SSE?', a: 'COLHYBRI applies SSE principles to local commerce: participatory governance, fair redistribution, transparency. 75% of fees go to the solidarity pool.' },
      { q: 'What are the three mechanisms?', a: 'Mutualization (pool), digitalization (Maps+) and engagement (mini-games, challenges). The three work together to create a virtuous cycle.' },
    ],
    stats: [
      { value: '14%', label: 'SSE private employment FR' },
      { value: '10%', label: 'SSE share of GDP FR' },
      { value: '75%', label: 'pool redistribution' },
      { value: '3 levers', label: 'virtuous cycle' },
    ],
  },
  es: {
    title: 'Economia solidaria de barrio',
    h1: 'La economia solidaria de barrio: como COLHYBRI reinventa el vinculo local',
    metaTitle: 'Economia solidaria de barrio: el modelo COLHYBRI',
    metaDescription: 'La economia solidaria de barrio combina mutualizacion, digitalizacion y compromiso. COLHYBRI activa los tres mecanismos por 3 EUR/mes.',
    snippet: 'La economia solidaria de barrio combina tres mecanismos: la mutualizacion de recursos (pool solidario), la digitalizacion de los comercios (Maps+) y el compromiso comunitario (gamificacion). Por 3 EUR/mes por habitante y 10 EUR/mes por comercio, COLHYBRI crea un ecosistema donde la solidaridad genera facturacion para los comerciantes.',
    sections: [
      { h2: 'Que es la economia solidaria?', body: 'La economia social y solidaria (ESS) agrupa asociaciones, mutuelles, cooperativas y fundaciones que ponen al ser humano antes que al beneficio. En Francia, representa el 14% del empleo privado y el 10% del PIB (Confederation francaise de l ESS, 2025).' },
      { h2: 'Como se inscribe COLHYBRI en la ESS?', body: 'COLHYBRI es una iniciativa privada que aplica los principios de la ESS al comercio de proximidad: gobernanza participativa, redistribucion equitativa, transparencia. El pool solidario redistribuye el 75% de las cotizaciones; el 25% restante cubre costes tecnicos.' },
      { h2: 'Cuales son los tres mecanismos de activacion?', body: 'Primer mecanismo: la mutualizacion (pool solidario que redistribuye el 75%). Segundo: la digitalizacion (Maps+ hace visibles los comercios en Google). Tercer: el compromiso (26 mini-juegos locales, desafios de barrio, rankings por calle comercial).' },
    ],
    faq: [
      { q: 'Que es la economia solidaria?', a: 'La ESS agrupa asociaciones, mutuelles, cooperativas y fundaciones. En Francia: 14% del empleo privado y 10% del PIB.' },
      { q: 'Como se inscribe COLHYBRI en la ESS?', a: 'COLHYBRI aplica los principios de la ESS al comercio de proximidad: gobernanza participativa, redistribucion equitativa, transparencia.' },
      { q: 'Cuales son los tres mecanismos?', a: 'Mutualizacion (pool), digitalizacion (Maps+) y compromiso (mini-juegos, desafios). Los tres crean un circulo virtuoso.' },
    ],
    stats: [
      { value: '14%', label: 'empleo privado ESS FR' },
      { value: '10%', label: 'PIB ESS FR' },
      { value: '75%', label: 'redistribucion pool' },
      { value: '3 palancas', label: 'circulo virtuoso' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
