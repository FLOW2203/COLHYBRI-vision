const { writeCluster } = require('../shared');

module.exports = {
  slug: 'pool-solidaire-quartier',
  cluster: 'solidaire',
  related: ['mutualisme-digital', 'economie-solidaire', 'caffe-sospeso'],
  cross: 'comment-ca-marche',
  fr: {
    title: 'Pool solidaire de quartier',
    h1: 'Le pool solidaire COLHYBRI : comment ca marche concretement',
    metaTitle: 'Pool solidaire COLHYBRI : 4 etapes simples',
    metaDescription: "Le pool solidaire COLHYBRI fonctionne en 4 etapes : cotisation, mutualisation, distribution aleatoire, service offert. 3 EUR/mois, 75% redistribues.",
    snippet: "Le pool solidaire COLHYBRI fonctionne en 4 etapes. Etape 1 : chaque abonne paie 3 EUR/mois. Etape 2 : 75% des abonnements (2,25 EUR) alimentent le pool solidaire communautaire. Etape 3 : chaque mois, le pool est distribue de maniere aleatoire sous forme de bons. Etape 4 : les beneficiaires profitent de services offerts chez les commercants partenaires.",
    sections: [
      { h2: 'Qu est-ce qu un pool solidaire ?', body: "Un pool solidaire est une caisse commune alimentee par les contributions de plusieurs membres et redistribuee selon une regle transparente. COLHYBRI a choisi une regle simple : chaque mois, les beneficiaires sont tires au sort parmi les abonnes du quartier. Tous ont les memes chances, tous contribuent au meme niveau. C est l opposite d une logique de privilege ou de clientelisme." },
      { h2: 'Comment sont selectionnes les beneficiaires ?', body: "Les beneficiaires sont tires au sort par un algorithme transparent et verifiable chaque mois. Un abonne peut etre tire plusieurs fois dans l annee, ou jamais. Cette aleatoire assure l equite et cree un effet de surprise positif. La selection est publique : chaque abonne peut verifier que le tirage a bien eu lieu." },
      { h2: 'Pourquoi 75% et pas 100% ?', body: "75% des abonnements alimentent le pool redistribue. Les 25% restants couvrent les frais techniques de la plateforme (hosting, support, developpement), les frais operationnels (comptabilite, legal) et la marge de COLHYBRI. C est un ratio transparent qui permet au modele de fonctionner durablement sans subvention ni don." },
    ],
    faq: [
      { q: 'Qu est-ce qu un pool solidaire ?', a: 'Une caisse commune alimentee par les contributions de plusieurs membres et redistribuee selon une regle transparente. Chez COLHYBRI, les beneficiaires sont tires au sort chaque mois.' },
      { q: 'Comment sont selectionnes les beneficiaires ?', a: 'Tires au sort par un algorithme transparent et verifiable. Un abonne peut etre tire plusieurs fois ou jamais. La selection est publique.' },
      { q: 'Pourquoi 75% et pas 100% ?', a: '75% alimentent le pool redistribue. 25% couvrent les frais techniques, operationnels et la marge. Ratio transparent, modele durable sans subvention.' },
    ],
    stats: [
      { value: '4 etapes', label: 'mecanisme du pool' },
      { value: '75%', label: 'au pool redistribue' },
      { value: '3 EUR', label: 'cotisation mensuelle' },
      { value: 'aleatoire', label: 'selection mensuelle' },
    ],
  },
  en: {
    title: 'Neighborhood solidarity pool',
    h1: 'COLHYBRI solidarity pool: how it works in practice',
    metaTitle: 'COLHYBRI solidarity pool: 4 simple steps',
    metaDescription: 'The COLHYBRI solidarity pool works in 4 steps: contribution, mutualization, random distribution, gifted service. 3 EUR/month, 75% redistributed.',
    snippet: 'The COLHYBRI solidarity pool works in 4 steps. Step 1: each subscriber pays 3 EUR/month. Step 2: 75% of subscriptions (2.25 EUR) feed the community solidarity pool. Step 3: each month the pool is randomly distributed as vouchers. Step 4: beneficiaries enjoy services gifted at partner shops.',
    sections: [
      { h2: 'What is a solidarity pool?', body: 'A solidarity pool is a common fund fed by several members contributions and redistributed according to a transparent rule. COLHYBRI chose a simple rule: each month, beneficiaries are drawn at random from neighborhood subscribers. All have equal chances, all contribute at the same level. It is the opposite of a privilege or clientelism logic.' },
      { h2: 'How are beneficiaries selected?', body: 'Beneficiaries are drawn at random by a transparent and verifiable algorithm each month. A subscriber can be drawn multiple times per year, or never. This randomness ensures fairness and creates a positive surprise effect. The selection is public: every subscriber can verify the draw took place.' },
      { h2: 'Why 75% and not 100%?', body: '75% of subscriptions feed the redistributed pool. The remaining 25% cover platform technical costs (hosting, support, development), operational costs (accounting, legal) and COLHYBRI margin. It is a transparent ratio that lets the model run sustainably without subsidies or donations.' },
    ],
    faq: [
      { q: 'What is a solidarity pool?', a: 'A common fund fed by multiple member contributions and redistributed by a transparent rule. At COLHYBRI, beneficiaries are drawn at random each month.' },
      { q: 'How are beneficiaries selected?', a: 'Drawn at random by a transparent, verifiable algorithm. A subscriber can be drawn multiple times or never. The selection is public.' },
      { q: 'Why 75% and not 100%?', a: '75% feed the redistributed pool. 25% cover technical and operational costs plus COLHYBRI margin. Transparent ratio, sustainable model without subsidies.' },
    ],
    stats: [
      { value: '4 steps', label: 'pool mechanism' },
      { value: '75%', label: 'to redistributed pool' },
      { value: '3 EUR', label: 'monthly fee' },
      { value: 'random', label: 'monthly selection' },
    ],
  },
  es: {
    title: 'Pool solidario de barrio',
    h1: 'El pool solidario COLHYBRI: como funciona concretamente',
    metaTitle: 'Pool solidario COLHYBRI: 4 pasos simples',
    metaDescription: 'El pool solidario COLHYBRI funciona en 4 pasos: cotizacion, mutualizacion, distribucion aleatoria, servicio ofrecido. 3 EUR/mes, 75% redistribuido.',
    snippet: 'El pool solidario COLHYBRI funciona en 4 pasos. Paso 1: cada suscriptor paga 3 EUR/mes. Paso 2: el 75% de las cotizaciones (2,25 EUR) alimenta el pool solidario comunitario. Paso 3: cada mes, el pool se distribuye de manera aleatoria en forma de bonos. Paso 4: los beneficiarios disfrutan de servicios ofrecidos en comercios asociados.',
    sections: [
      { h2: 'Que es un pool solidario?', body: 'Un pool solidario es una caja comun alimentada por las contribuciones de varios miembros y redistribuida segun una regla transparente. COLHYBRI eligio una regla simple: cada mes, los beneficiarios son elegidos al azar entre los suscriptores del barrio. Todos tienen las mismas oportunidades.' },
      { h2: 'Como se seleccionan los beneficiarios?', body: 'Los beneficiarios se eligen al azar por un algoritmo transparente y verificable cada mes. Un suscriptor puede ser elegido varias veces al ano, o nunca. Este azar asegura la equidad y crea un efecto de sorpresa positiva. La seleccion es publica.' },
      { h2: 'Por que 75% y no 100%?', body: 'El 75% de las cotizaciones alimenta el pool redistribuido. El 25% restante cubre los costes tecnicos de la plataforma, los costes operativos (contabilidad, legal) y el margen de COLHYBRI. Es un ratio transparente que permite al modelo funcionar de forma sostenible.' },
    ],
    faq: [
      { q: 'Que es un pool solidario?', a: 'Una caja comun alimentada por las contribuciones de varios miembros y redistribuida segun una regla transparente. En COLHYBRI, los beneficiarios son elegidos al azar cada mes.' },
      { q: 'Como se seleccionan los beneficiarios?', a: 'Al azar por un algoritmo transparente y verificable. Un suscriptor puede ser elegido varias veces o nunca. La seleccion es publica.' },
      { q: 'Por que 75% y no 100%?', a: '75% alimenta el pool redistribuido. 25% cubre costes tecnicos, operativos y el margen. Ratio transparente, modelo sostenible sin subvencion.' },
    ],
    stats: [
      { value: '4 pasos', label: 'mecanismo del pool' },
      { value: '75%', label: 'al pool redistribuido' },
      { value: '3 EUR', label: 'cuota mensual' },
      { value: 'aleatorio', label: 'seleccion mensual' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
