const { writeCluster } = require('../shared');

module.exports = {
  slug: 'cooperative-quartier',
  cluster: 'solidaire',
  related: ['mutualisme-digital', 'economie-solidaire', 'pool-solidaire-quartier'],
  cross: 'pour-les-collectivites',
  fr: {
    title: 'Cooperative de quartier digitale',
    h1: 'La cooperative de quartier digitale : le modele COLHYBRI',
    metaTitle: 'Cooperative de quartier digitale : mutuelle, pas charite',
    metaDescription: "COLHYBRI est une mutuelle de quartier digitale. Auto-finance par les abonnements, sans subvention ni don. Ce n'est pas de la charite.",
    snippet: "COLHYBRI fonctionne comme une cooperative de quartier digitale ou chaque membre (abonne ou commercant) contribue a un bien commun : le pool solidaire. Contrairement a une association ou une ONG, le modele est auto-finance par les abonnements et ne depend d'aucune subvention. C'est une mutuelle, pas de la charite.",
    sections: [
      { h2: 'Qu est-ce qu une cooperative de quartier ?', body: 'Une cooperative de quartier est une structure d echange local basee sur la contribution volontaire de ses membres. Historiquement, les cooperatives de consommation (les Magasins Generaux du 19e siecle) permettaient aux ouvriers d acheter ensemble pour obtenir de meilleurs prix. COLHYBRI transpose ce principe dans le digital avec un outil SaaS.' },
      { h2: 'Quelle est la difference avec une association ?', body: 'Une association vit de dons, de subventions et de cotisations volontaires. Elle depend structurellement de financeurs externes (Etat, mecenes, membres bienveillants). COLHYBRI n a ni dons ni subventions : le modele est auto-finance par les abonnements (3 EUR particuliers, 10 EUR commercants). C est ce qui garantit la perennite et l independance du dispositif.' },
      { h2: 'Pourquoi ce n est pas de la charite ?', body: 'La charite implique une relation asymetrique : un donneur aise et un beneficiaire dans le besoin. COLHYBRI est symmetrique : chaque abonne paie la meme cotisation et a les memes chances de recevoir un service. Personne n est humilie, personne n est designe comme pauvre. C est une mutuelle de quartier, pas une soupe populaire digitale.' },
    ],
    faq: [
      { q: 'Qu est-ce qu une cooperative de quartier ?', a: 'Une structure d echange local basee sur la contribution volontaire de ses membres. COLHYBRI transpose ce principe dans le digital avec un outil SaaS.' },
      { q: 'Quelle est la difference avec une association ?', a: 'Une association depend de dons et de subventions. COLHYBRI est auto-finance par les abonnements, ce qui garantit sa perennite sans dependance externe.' },
      { q: 'Pourquoi ce n est pas de la charite ?', a: 'Charite = relation asymetrique donneur / beneficiaire. COLHYBRI est symmetrique : chaque abonne paie la meme cotisation et a les memes chances de recevoir un service.' },
    ],
    stats: [
      { value: 'Mutuelle', label: 'pas charite' },
      { value: 'Auto-finance', label: 'pas de subvention' },
      { value: 'Symmetrique', label: 'chaque abonne egal' },
      { value: '0 don', label: 'dans le modele' },
    ],
  },
  en: {
    title: 'Digital neighborhood cooperative',
    h1: 'The digital neighborhood cooperative: the COLHYBRI model',
    metaTitle: 'Digital neighborhood cooperative: mutual, not charity',
    metaDescription: 'COLHYBRI is a digital neighborhood mutual. Self-funded by subscriptions, no subsidies or donations. This is not charity.',
    snippet: 'COLHYBRI operates as a digital neighborhood cooperative where each member (subscriber or merchant) contributes to a common good: the solidarity pool. Unlike an association or NGO, the model is self-funded by subscriptions and does not depend on any subsidy. It is a mutual, not charity.',
    sections: [
      { h2: 'What is a neighborhood cooperative?', body: 'A neighborhood cooperative is a local exchange structure based on voluntary contributions from its members. Historically, consumer cooperatives (19th century Magasins Generaux) let workers buy together for better prices. COLHYBRI transposes the principle into the digital space with a SaaS tool.' },
      { h2: 'What is the difference with an NGO?', body: 'An NGO lives off donations, subsidies and voluntary fees. It structurally depends on external funders (State, donors, willing members). COLHYBRI has no donations or subsidies: the model is self-funded by subscriptions (3 EUR residents, 10 EUR merchants). That is what guarantees sustainability and independence.' },
      { h2: 'Why is it not charity?', body: 'Charity implies an asymmetric relationship: a wealthy giver and a needy beneficiary. COLHYBRI is symmetric: every subscriber pays the same fee and has the same chance to receive a service. Nobody is humiliated, nobody is labeled as poor. It is a neighborhood mutual, not a digital soup kitchen.' },
    ],
    faq: [
      { q: 'What is a neighborhood cooperative?', a: 'A local exchange structure based on voluntary member contributions. COLHYBRI transposes this into the digital space with a SaaS tool.' },
      { q: 'What is the difference with an NGO?', a: 'NGOs depend on donations and subsidies. COLHYBRI is self-funded by subscriptions, guaranteeing sustainability without external dependence.' },
      { q: 'Why is it not charity?', a: 'Charity = asymmetric giver/beneficiary relationship. COLHYBRI is symmetric: every subscriber pays the same fee and has equal chances to receive.' },
    ],
    stats: [
      { value: 'Mutual', label: 'not charity' },
      { value: 'Self-funded', label: 'no subsidy' },
      { value: 'Symmetric', label: 'every subscriber equal' },
      { value: '0 donation', label: 'in the model' },
    ],
  },
  es: {
    title: 'Cooperativa de barrio digital',
    h1: 'La cooperativa de barrio digital: el modelo COLHYBRI',
    metaTitle: 'Cooperativa de barrio digital: mutua, no caridad',
    metaDescription: 'COLHYBRI es una mutua de barrio digital. Autofinanciada por las suscripciones, sin subvencion ni donacion. Esto no es caridad.',
    snippet: 'COLHYBRI funciona como una cooperativa de barrio digital donde cada miembro (suscriptor o comerciante) contribuye a un bien comun: el pool solidario. Contrariamente a una asociacion o una ONG, el modelo es autofinanciado por las suscripciones y no depende de ninguna subvencion. Es una mutua, no caridad.',
    sections: [
      { h2: 'Que es una cooperativa de barrio?', body: 'Una cooperativa de barrio es una estructura de intercambio local basada en la contribucion voluntaria de sus miembros. Historicamente, las cooperativas de consumo permitian a los trabajadores comprar juntos para obtener mejores precios. COLHYBRI transpone este principio a lo digital con una herramienta SaaS.' },
      { h2: 'Cual es la diferencia con una asociacion?', body: 'Una asociacion vive de donaciones, subvenciones y cuotas voluntarias. Depende estructuralmente de financiadores externos. COLHYBRI no tiene donaciones ni subvenciones: el modelo es autofinanciado por las suscripciones (3 EUR particulares, 10 EUR comerciantes). Esto garantiza la sostenibilidad y la independencia.' },
      { h2: 'Por que no es caridad?', body: 'La caridad implica una relacion asimetrica: un donante acomodado y un beneficiario en necesidad. COLHYBRI es simetrico: cada suscriptor paga la misma cuota y tiene las mismas oportunidades de recibir un servicio. Nadie es humillado, nadie es etiquetado como pobre.' },
    ],
    faq: [
      { q: 'Que es una cooperativa de barrio?', a: 'Una estructura de intercambio local basada en la contribucion voluntaria de sus miembros. COLHYBRI lo transpone a lo digital con una herramienta SaaS.' },
      { q: 'Cual es la diferencia con una asociacion?', a: 'Las asociaciones dependen de donaciones y subvenciones. COLHYBRI es autofinanciado por las suscripciones, garantizando la sostenibilidad.' },
      { q: 'Por que no es caridad?', a: 'Caridad = relacion asimetrica donante/beneficiario. COLHYBRI es simetrico: cada suscriptor paga la misma cuota y tiene oportunidades iguales.' },
    ],
    stats: [
      { value: 'Mutua', label: 'no caridad' },
      { value: 'Autofinanciado', label: 'sin subvencion' },
      { value: 'Simetrico', label: 'cada suscriptor igual' },
      { value: '0 donacion', label: 'en el modelo' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
