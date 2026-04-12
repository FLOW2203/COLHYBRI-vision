const { writeCluster } = require('../shared');

module.exports = {
  slug: 'zrcv-zones-revitalisation',
  cluster: 'france',
  related: ['revitalisation-centres-villes', 'vacance-commerciale-france', 'municipales-2026-commerce'],
  cross: 'opportunity-zones',
  fr: {
    title: 'ZRCV zones de revitalisation',
    h1: 'ZRCV : les zones de revitalisation des centres-villes expliquees',
    metaTitle: 'ZRCV 2026 : 1 732 communes classees, exoneration fiscale',
    metaDescription: "Les zones de revitalisation des centres-villes (ZRCV) permettent d'exonerer de CFE et de taxe fonciere les commerces du centre. 1 732 communes classees en 2026.",
    snippet: "Les zones de revitalisation des centres-villes (ZRCV) permettent aux collectivites d'exonerer de CFE et de taxe fonciere les commerces de leur centre-ville. En 2026, 1 732 communes sont classees ZRCV selon l'arrete du 26 decembre 2025. Le dispositif reste sous-utilise : de nombreuses communes ignorent qu'elles y sont eligibles.",
    sections: [
      { h2: "Qu'est-ce qu'une ZRCV ?", body: "Une zone de revitalisation des centres-villes est un perimetre fiscal delimite par la commune. A l'interieur de la zone, les commerces peuvent beneficier d'exonerations de Cotisation Fonciere des Entreprises (CFE) et de taxe fonciere sur les proprietes baties. La loi Pinel a etendu le dispositif en 2018 et l'arrete du 26 decembre 2025 a actualise la liste." },
      { h2: 'Comment savoir si ma commune est en ZRCV ?', body: "La liste officielle est publiee au Journal Officiel. L'arrete du 26 decembre 2025 classe 1 732 communes. Les criteres incluent : la taille de la commune, le taux de vacance commerciale, la tension demographique, l'appartenance a un programme ACV ou PVD. La DGE publie la carte interactive." },
      { h2: 'Comment COLHYBRI aide une commune ZRCV ?', body: "COLHYBRI complete le dispositif fiscal par un outil de pilotage : audit Google des commerces du perimetre en 48 heures, dashboard de vitalite commerciale, rapport d'impact pour le conseil municipal. Le combine exoneration fiscale + outil digital maximise les chances de reussite de la revitalisation." },
    ],
    faq: [
      { q: "Qu'est-ce qu'une ZRCV ?", a: "Une zone de revitalisation des centres-villes : perimetre fiscal ou les commerces sont exoneres de CFE et de taxe fonciere pendant 5 ans. Encadree par la loi Pinel de 2018." },
      { q: 'Ma commune est-elle en ZRCV ?', a: "1 732 communes sont classees selon l'arrete du 26 decembre 2025. La liste officielle est disponible au Journal Officiel et sur le site de la DGE." },
      { q: 'Quels commerces sont eligibles ?', a: 'Tout commerce situe dans le perimetre ZRCV delimite par la commune, sous conditions de chiffre d affaires et d activite definies par la loi Pinel.' },
    ],
    stats: [
      { value: '1 732', label: 'communes ZRCV 2026' },
      { value: '5 ans', label: 'duree exoneration' },
      { value: 'CFE + TF', label: 'impots exoneres' },
      { value: '26/12/2025', label: 'date arrete' },
    ],
  },
  en: {
    title: 'ZRCV downtown revitalization zones',
    h1: 'ZRCV: French downtown revitalization tax zones explained',
    metaTitle: 'ZRCV 2026: 1,732 towns with tax exemption',
    metaDescription: "France's ZRCV tax zones exempt downtown shops from local business tax and property tax. 1,732 towns classified in 2026.",
    snippet: "Downtown revitalization zones (ZRCV) let French municipalities exempt their downtown shops from local business tax (CFE) and property tax. In 2026, 1,732 towns are classified ZRCV under the December 26, 2025 decree. The tool remains underused: many towns are unaware they are eligible.",
    sections: [
      { h2: 'What is a ZRCV?', body: 'A downtown revitalization zone is a fiscal perimeter defined by the municipality. Inside the zone, shops benefit from exemption on Cotisation Fonciere des Entreprises (CFE) and property tax for 5 years. The 2018 Pinel law extended the scheme, and the December 26, 2025 decree updated the list.' },
      { h2: 'How to know if my town is a ZRCV?', body: 'The official list is published in the French Journal Officiel. The December 26, 2025 decree classifies 1,732 towns. Criteria include population, commercial vacancy rate, demographic pressure and belonging to an ACV or PVD program. The DGE publishes the interactive map.' },
      { h2: 'How does COLHYBRI help a ZRCV town?', body: 'COLHYBRI complements the fiscal tool with operational measurement: 48-hour Google audit of shops in the perimeter, vitality dashboard, city council impact report. Combining tax exemption with a digital tool maximizes revitalization success.' },
    ],
    faq: [
      { q: 'What is a ZRCV?', a: 'A French downtown revitalization zone: a fiscal perimeter where shops are exempt from CFE and property tax for 5 years, created by the 2018 Pinel law.' },
      { q: 'Is my town a ZRCV?', a: '1,732 French towns are classified under the December 26, 2025 decree. The official list is in the Journal Officiel and on the DGE website.' },
      { q: 'Which shops are eligible?', a: 'Any shop inside the ZRCV perimeter defined by the municipality, subject to revenue and activity conditions set by the 2018 Pinel law.' },
    ],
    stats: [
      { value: '1,732', label: '2026 ZRCV towns' },
      { value: '5 years', label: 'exemption length' },
      { value: 'CFE + TF', label: 'taxes exempted' },
      { value: '26 Dec 2025', label: 'decree date' },
    ],
  },
  es: {
    title: 'ZRCV zonas de revitalizacion',
    h1: 'ZRCV: las zonas fiscales de revitalizacion francesas',
    metaTitle: 'ZRCV 2026: 1.732 municipios con exoneracion fiscal',
    metaDescription: 'Las zonas ZRCV exoneran de CFE y de impuesto sobre bienes inmuebles a los comercios del centro. 1.732 municipios clasificados en 2026.',
    snippet: 'Las zonas de revitalizacion de centros urbanos (ZRCV) permiten a los municipios franceses exonerar de CFE y de impuesto sobre bienes inmuebles a los comercios de su centro urbano. En 2026, 1.732 municipios estan clasificados ZRCV segun el decreto del 26 de diciembre de 2025.',
    sections: [
      { h2: 'Que es una ZRCV?', body: 'Una zona de revitalizacion del centro urbano es un perimetro fiscal delimitado por el municipio. Dentro de la zona, los comercios pueden beneficiarse de exoneraciones de CFE y del impuesto sobre bienes inmuebles durante 5 anos. La ley Pinel de 2018 extendio el dispositivo.' },
      { h2: 'Como saber si mi municipio esta en ZRCV?', body: 'La lista oficial se publica en el Journal Officiel. El decreto del 26 de diciembre de 2025 clasifica 1.732 municipios. Los criterios incluyen el tamano del municipio, la tasa de vacancia comercial y la pertenencia a ACV o PVD.' },
      { h2: 'Como ayuda COLHYBRI a un municipio ZRCV?', body: 'COLHYBRI complementa el dispositivo fiscal con una herramienta de pilotaje: auditoria Google de los comercios en 48 horas, dashboard de vitalidad, informe de impacto para el consejo municipal.' },
    ],
    faq: [
      { q: 'Que es una ZRCV?', a: 'Una zona de revitalizacion del centro urbano: perimetro fiscal donde los comercios estan exonerados de CFE y del impuesto sobre bienes inmuebles durante 5 anos.' },
      { q: 'Esta mi municipio en ZRCV?', a: '1.732 municipios estan clasificados segun el decreto del 26 de diciembre de 2025. Lista oficial en el Journal Officiel.' },
      { q: 'Que comercios son elegibles?', a: 'Cualquier comercio en el perimetro ZRCV delimitado por el municipio, bajo condiciones de ingresos y actividad definidas por la ley Pinel.' },
    ],
    stats: [
      { value: '1.732', label: 'municipios ZRCV 2026' },
      { value: '5 anos', label: 'duracion exoneracion' },
      { value: 'CFE + TF', label: 'impuestos exonerados' },
      { value: '26/12/2025', label: 'decreto' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
