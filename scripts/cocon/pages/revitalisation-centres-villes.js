const { writeCluster } = require('../shared');

module.exports = {
  slug: 'revitalisation-centres-villes',
  cluster: 'france',
  related: ['action-coeur-de-ville', 'petites-villes-de-demain', 'zrcv-zones-revitalisation'],
  cross: 'downtown-revitalization',
  fr: {
    title: 'Revitalisation des centres-villes',
    h1: 'Revitalisation des centres-villes en France : programmes 2026',
    metaTitle: 'Revitalisation des centres-villes : programmes 2026',
    metaDescription:
      "9 Mds EUR mobilises par Action Coeur de Ville et Petites Villes de Demain pour 1 890 communes. Guide complet de la revitalisation commerciale en France.",
    snippet:
      "La revitalisation des centres-villes francais mobilise 9 milliards d'euros via Action Coeur de Ville (244 communes, 5 Mds EUR) et Petites Villes de Demain (1 646 communes, 4 Mds EUR). En 2026, 1 732 communes sont classees en zone de revitalisation (ZRCV) selon l'arrete du 26 decembre 2025 (ANCT).",
    sections: [
      {
        h2: "Qu'est-ce que la revitalisation des centres-villes ?",
        body: "La revitalisation des centres-villes designe l'ensemble des politiques publiques qui redynamisent les coeurs commercants frappes par la vacance et la devitalisation. Elle s'articule autour de trois leviers : l'habitat, le commerce de proximite et les services publics. L'Agence Nationale de la Cohesion des Territoires (ANCT) pilote les programmes nationaux en lien avec la Banque des Territoires.",
      },
      {
        h2: 'Quels sont les programmes nationaux en France ?',
        body: "Deux programmes dominent : Action Coeur de Ville (244 villes moyennes, 5 Mds EUR sur 2023-2026) et Petites Villes de Demain (1 646 communes de moins de 20 000 habitants, 4 Mds EUR). S'y ajoute le dispositif fiscal ZRCV qui exonere de CFE et de taxe fonciere les commerces du centre. En 2026, 1 732 communes sont classees ZRCV selon l'arrete du 26 decembre 2025.",
      },
      {
        h2: 'Comment COLHYBRI contribue-t-il a la revitalisation ?',
        body: "COLHYBRI apporte le maillon manquant : un outil SaaS de mesure de la vitalite commerciale en temps reel. Le module Maps+ audite la presence Google de chaque commerce en 48 heures, le pool solidaire genere du trafic vers les commercants partenaires et le dashboard municipal fournit au conseil municipal des metriques verifiables. Un pilote gratuit de 90 jours permet a une commune de tester le dispositif sur 50 commerces avant tout engagement.",
      },
    ],
    faq: [
      {
        q: "Qu'est-ce que la revitalisation des centres-villes ?",
        a: "Des politiques publiques qui redynamisent les coeurs commercants via trois leviers : habitat, commerce et services. En France elle est pilotee par l'ANCT a travers les programmes Action Coeur de Ville et Petites Villes de Demain.",
      },
      {
        q: 'Quels sont les programmes nationaux en France ?',
        a: 'Action Coeur de Ville (244 villes, 5 Mds EUR, 2023-2026), Petites Villes de Demain (1 646 communes, 4 Mds EUR) et le dispositif fiscal ZRCV qui couvre 1 732 communes en 2026.',
      },
      {
        q: 'Comment COLHYBRI aide-t-il une commune concretement ?',
        a: "Pilote gratuit de 90 jours : audit Google de 50 commerces, dashboard municipal de vitalite, rapport d'impact pour le conseil municipal et accompagnement au deploiement terrain.",
      },
    ],
    stats: [
      { value: '1 732', label: 'communes ZRCV 2026' },
      { value: '244', label: 'Action Coeur de Ville' },
      { value: '1 646', label: 'Petites Villes de Demain' },
      { value: '9 Mds EUR', label: 'mobilises 2023-2026' },
    ],
    tableTitle: 'Les programmes de revitalisation en chiffres',
    tableHeader: ['Programme', 'Budget et perimetre'],
    tableRows: [
      ['Action Coeur de Ville', '244 villes moyennes, 5 Mds EUR, 2023-2026 (ANCT)'],
      ['Petites Villes de Demain', '1 646 communes, 4 Mds EUR, 2020-2026 (ANCT)'],
      ['ZRCV 2026', '1 732 communes classees, exoneration CFE et foncier (arrete 26/12/2025)'],
    ],
  },
  en: {
    title: 'Downtown revitalization in France',
    h1: 'Downtown revitalization in France: 2026 programs',
    metaTitle: 'Downtown revitalization in France: 2026 programs',
    metaDescription:
      '9B EUR mobilized by Action Coeur de Ville and Petites Villes de Demain for 1,890 towns. Complete guide to commercial revitalization in France.',
    snippet:
      "France mobilizes 9 billion EUR for downtown revitalization through Action Coeur de Ville (244 midsize towns, 5B EUR) and Petites Villes de Demain (1,646 small towns, 4B EUR). In 2026, 1,732 towns are classified as downtown revitalization zones (ZRCV) per the December 26, 2025 decree (ANCT).",
    sections: [
      {
        h2: 'What is downtown revitalization?',
        body: "Downtown revitalization refers to public policies and operational tools that revive commercial cores of towns suffering from vacancy, population decline and service loss. It is built around three levers: housing, local commerce and public services. France's ANCT coordinates national programs alongside Banque des Territoires.",
      },
      {
        h2: 'What are the national programs in France?',
        body: 'Two programs dominate: Action Coeur de Ville (244 midsize towns, 5B EUR over 2023-2026) and Petites Villes de Demain (1,646 towns under 20,000 inhabitants, 4B EUR). A third tool, ZRCV tax zones, exempts downtown merchants from local business and property taxes. 1,732 towns are classified ZRCV in 2026.',
      },
      {
        h2: 'How does COLHYBRI contribute to revitalization?',
        body: "COLHYBRI provides the missing layer: a SaaS tool to measure downtown vitality in real time. Maps+ audits every shop Google presence in 48 hours, the community pool drives foot traffic to partner merchants and the municipal dashboard delivers verifiable metrics to the city council. A free 90-day pilot lets a city test the setup on 50 shops before committing.",
      },
    ],
    faq: [
      {
        q: 'What is downtown revitalization?',
        a: 'Public policies that revive commercial cores through housing, commerce and services. In France it is coordinated by ANCT through the Action Coeur de Ville and Petites Villes de Demain programs.',
      },
      {
        q: 'What are the national programs in France?',
        a: 'Action Coeur de Ville (244 towns, 5B EUR, 2023-2026), Petites Villes de Demain (1,646 towns, 4B EUR), and the ZRCV tax zones covering 1,732 towns in 2026.',
      },
      {
        q: 'How does COLHYBRI help a city in practice?',
        a: 'Free 90-day pilot: Google audit of 50 shops, municipal vitality dashboard, city council impact report and deployment support.',
      },
    ],
    stats: [
      { value: '1,732', label: '2026 ZRCV towns' },
      { value: '244', label: 'Action Coeur de Ville' },
      { value: '1,646', label: 'Petites Villes de Demain' },
      { value: '9B EUR', label: 'mobilized 2023-2026' },
    ],
    tableTitle: 'Revitalization programs at a glance',
    tableHeader: ['Program', 'Budget and scope'],
    tableRows: [
      ['Action Coeur de Ville', '244 midsize towns, 5B EUR, 2023-2026 (ANCT)'],
      ['Petites Villes de Demain', '1,646 towns, 4B EUR, 2020-2026 (ANCT)'],
      ['ZRCV 2026', '1,732 towns, local tax exemption (decree 26 Dec 2025)'],
    ],
  },
  es: {
    title: 'Revitalizacion de centros urbanos en Francia',
    h1: 'Revitalizacion de centros urbanos en Francia: programas 2026',
    metaTitle: 'Revitalizacion de centros urbanos en Francia 2026',
    metaDescription:
      '9.000M EUR movilizados por Action Coeur de Ville y Petites Villes de Demain para 1.890 municipios. Guia completa.',
    snippet:
      'Francia moviliza 9.000 millones de euros para la revitalizacion de centros urbanos a traves de Action Coeur de Ville (244 ciudades medianas, 5.000M EUR) y Petites Villes de Demain (1.646 municipios, 4.000M EUR). En 2026, 1.732 municipios estan clasificados como zonas ZRCV segun el decreto del 26 de diciembre de 2025 (ANCT).',
    sections: [
      {
        h2: 'Que es la revitalizacion de centros urbanos?',
        body: 'La revitalizacion de centros urbanos designa el conjunto de politicas publicas que reactivan los nucleos comerciales mediante tres palancas: vivienda, comercio de proximidad y servicios publicos. En Francia esta coordinada por la Agencia Nacional de Cohesion Territorial (ANCT) junto con Banque des Territoires.',
      },
      {
        h2: 'Cuales son los programas nacionales en Francia?',
        body: 'Dos programas dominan: Action Coeur de Ville (244 ciudades medianas, 5.000M EUR en 2023-2026) y Petites Villes de Demain (1.646 municipios de menos de 20.000 habitantes, 4.000M EUR). A esto se anade el dispositivo fiscal ZRCV que cubre 1.732 municipios en 2026 y exonera impuestos locales.',
      },
      {
        h2: 'Como contribuye COLHYBRI a la revitalizacion?',
        body: 'COLHYBRI aporta una herramienta SaaS de medicion de la vitalidad comercial en tiempo real. Maps+ audita la presencia Google de cada comercio en 48 horas y el dashboard municipal ofrece metricas verificables al consejo municipal. Piloto gratuito de 90 dias sobre 50 comercios antes de cualquier compromiso.',
      },
    ],
    faq: [
      {
        q: 'Que es la revitalizacion de centros urbanos?',
        a: 'Politicas publicas que reactivan los nucleos comerciales mediante vivienda, comercio y servicios. Coordinada por la ANCT a traves de Action Coeur de Ville y Petites Villes de Demain.',
      },
      {
        q: 'Cuales son los programas nacionales en Francia?',
        a: 'Action Coeur de Ville (244 ciudades, 5.000M EUR, 2023-2026), Petites Villes de Demain (1.646 municipios, 4.000M EUR) y las zonas fiscales ZRCV (1.732 municipios en 2026).',
      },
      {
        q: 'Como ayuda COLHYBRI a un municipio?',
        a: 'Piloto gratuito de 90 dias: auditoria Google de 50 comercios, dashboard municipal de vitalidad, informe para el consejo municipal y acompanamiento en el despliegue.',
      },
    ],
    stats: [
      { value: '1.732', label: 'municipios ZRCV 2026' },
      { value: '244', label: 'Action Coeur de Ville' },
      { value: '1.646', label: 'Petites Villes de Demain' },
      { value: '9.000M EUR', label: 'movilizados 2023-2026' },
    ],
    tableTitle: 'Programas de revitalizacion en cifras',
    tableHeader: ['Programa', 'Presupuesto y alcance'],
    tableRows: [
      ['Action Coeur de Ville', '244 ciudades medianas, 5.000M EUR, 2023-2026 (ANCT)'],
      ['Petites Villes de Demain', '1.646 municipios, 4.000M EUR, 2020-2026 (ANCT)'],
      ['ZRCV 2026', '1.732 municipios, exoneracion fiscal (decreto 26/12/2025)'],
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
