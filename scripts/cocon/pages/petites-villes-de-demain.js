const { writeCluster } = require('../shared');

module.exports = {
  slug: 'petites-villes-de-demain',
  cluster: 'france',
  related: ['revitalisation-centres-villes', 'action-coeur-de-ville', 'vacance-commerciale-france'],
  cross: 'community-development',
  fr: {
    title: 'Petites Villes de Demain',
    h1: 'Petites Villes de Demain : revitaliser les communes de moins de 20 000 habitants',
    metaTitle: 'Petites Villes de Demain : 1 646 communes, 4 Mds EUR',
    metaDescription: "Le programme Petites Villes de Demain accompagne 1 646 communes avec 4 Mds EUR. Pilote par l'ANCT, il couvre l'habitat, le commerce et les services.",
    snippet: "Le programme Petites Villes de Demain (PVD), pilote par l'ANCT, accompagne 1 646 communes de moins de 20 000 habitants dans leur revitalisation. Avec 4 milliards d'euros engages jusqu'en 2026, il soutient les projets d'infrastructure, de services et de qualite de vie pour plus de 7 millions d'habitants (source : ANCT, 2026).",
    sections: [
      { h2: "Qu'est-ce que le programme Petites Villes de Demain ?", body: "PVD est un dispositif national lance en 2020 qui vise 1 646 communes centres de bassin de vie. Il s'articule avec Action Coeur de Ville pour former une chaine complete de revitalisation des territoires. Chaque commune signe une convention ORT (Operation de Revitalisation de Territoire) avec son intercommunalite et l'ANCT." },
      { h2: 'Comment candidater a PVD ?', body: "Les communes ont ete selectionnees par l'ANCT et les prefets de region sur criteres de centralite et de fragilite. Une commune deja classee peut acceder aux aides en signant la convention ORT. Les nouveaux appels sont rares : PVD est desormais dans sa phase de deploiement operationnel jusqu'a fin 2026." },
      { h2: 'Comment COLHYBRI complete PVD ?', body: "COLHYBRI est l outil operationnel de mesure de la vitalite commerciale pour les chefs de projet PVD. Déploiement clé en main sur 50 commerces, dashboard municipal, rapport d'impact pour le conseil municipal. Particulièrement adapté aux petites communes qui n'ont pas de manager de commerce dédié." },
    ],
    faq: [
      { q: "Qu'est-ce que le programme Petites Villes de Demain ?", a: "Un programme national lance en 2020 qui accompagne 1 646 communes de moins de 20 000 habitants avec 4 Mds EUR jusqu'en 2026, pilote par l'ANCT." },
      { q: 'Comment une commune est-elle selectionnee ?', a: "Par l'ANCT et les prefets sur criteres de centralite et de fragilite. La liste est arretee depuis 2021 ; les appels a candidature sont rares." },
      { q: 'Comment COLHYBRI aide une commune PVD ?', a: "Déploiement clé en main : audit Google de 50 commerces, dashboard de vitalité en temps réel, rapport d'impact pour le conseil municipal." },
    ],
    stats: [
      { value: '1 646', label: 'communes PVD' },
      { value: '4 Mds EUR', label: 'budget engage' },
      { value: '7M', label: 'habitants concernes' },
      { value: '2020', label: 'annee de lancement' },
    ],
  },
  en: {
    title: 'Petites Villes de Demain',
    h1: 'Petites Villes de Demain: revitalizing French small towns',
    metaTitle: 'Petites Villes de Demain: 1,646 towns, 4B EUR',
    metaDescription: 'The Petites Villes de Demain program supports 1,646 small towns with 4B EUR. Led by ANCT, covering housing, commerce and services.',
    snippet: 'The Petites Villes de Demain program (PVD), led by ANCT, supports 1,646 French towns under 20,000 inhabitants in their revitalization. With 4 billion EUR committed through 2026, it funds infrastructure, services and quality of life projects reaching over 7 million inhabitants (ANCT, 2026).',
    sections: [
      { h2: 'What is the Petites Villes de Demain program?', body: 'PVD is a national initiative launched in 2020 targeting 1,646 small towns at the center of their local living area. It complements Action Coeur de Ville to form a complete territorial revitalization chain. Each town signs an ORT convention with its inter-municipal body and ANCT.' },
      { h2: 'How to apply for PVD?', body: 'Towns were selected by ANCT and regional prefects on centrality and fragility criteria. The list has been fixed since 2021 and new calls are rare. PVD is now in its operational deployment phase through end-2026.' },
      { h2: 'How does COLHYBRI complement PVD?', body: 'COLHYBRI is the operational tool for measuring commercial vitality for PVD project leads. Turnkey rollout on 50 shops, municipal dashboard, impact report. Especially suited to small towns without a dedicated commerce manager.' },
    ],
    faq: [
      { q: 'What is the Petites Villes de Demain program?', a: 'A French national program launched in 2020 supporting 1,646 small towns with 4B EUR through 2026, led by ANCT.' },
      { q: 'How is a town selected?', a: 'By ANCT and regional prefects on centrality and fragility criteria. The list has been fixed since 2021; new calls are rare.' },
      { q: 'How does COLHYBRI help a PVD town?', a: 'Turnkey deployment: Google audit of 50 shops, real-time vitality dashboard, city council impact report.' },
    ],
    stats: [
      { value: '1,646', label: 'PVD towns' },
      { value: '4B EUR', label: 'committed budget' },
      { value: '7M', label: 'inhabitants' },
      { value: '2020', label: 'launch year' },
    ],
  },
  es: {
    title: 'Petites Villes de Demain',
    h1: 'Petites Villes de Demain: revitalizacion de pequenos municipios franceses',
    metaTitle: 'Petites Villes de Demain: 1.646 municipios, 4.000M EUR',
    metaDescription: 'El programa Petites Villes de Demain acompana 1.646 municipios con 4.000M EUR. Pilotado por la ANCT, cubre vivienda, comercio y servicios.',
    snippet: 'El programa Petites Villes de Demain (PVD), pilotado por la ANCT, acompana 1.646 municipios franceses de menos de 20.000 habitantes en su revitalizacion. Con 4.000 millones de euros comprometidos hasta 2026, financia infraestructuras, servicios y proyectos de calidad de vida para mas de 7 millones de habitantes (ANCT, 2026).',
    sections: [
      { h2: 'Que es el programa Petites Villes de Demain?', body: 'PVD es un dispositivo nacional lanzado en 2020 que apunta a 1.646 municipios centro de cuenca de vida. Se articula con Action Coeur de Ville para formar una cadena completa de revitalizacion territorial. Cada municipio firma una convencion ORT con su intermunicipalidad y la ANCT.' },
      { h2: 'Como postular a PVD?', body: 'Los municipios han sido seleccionados por la ANCT y los prefectos regionales segun criterios de centralidad y fragilidad. La lista esta fijada desde 2021 y las nuevas convocatorias son raras. PVD esta en su fase de despliegue operacional hasta finales de 2026.' },
      { h2: 'Como complementa COLHYBRI a PVD?', body: 'COLHYBRI es la herramienta operativa de medicion de la vitalidad comercial para los jefes de proyecto PVD. Despliegue llave en mano sobre 50 comercios, dashboard municipal, informe de impacto.' },
    ],
    faq: [
      { q: 'Que es el programa Petites Villes de Demain?', a: 'Un programa nacional frances lanzado en 2020 que acompana 1.646 pequenos municipios con 4.000M EUR hasta 2026, pilotado por la ANCT.' },
      { q: 'Como se selecciona un municipio?', a: 'Por la ANCT y los prefectos regionales segun criterios de centralidad y fragilidad. La lista esta fijada desde 2021.' },
      { q: 'Como ayuda COLHYBRI a un municipio PVD?', a: 'Despliegue llave en mano: auditoría Google de 50 comercios, dashboard de vitalidad en tiempo real, informe de impacto.' },
    ],
    stats: [
      { value: '1.646', label: 'municipios PVD' },
      { value: '4.000M EUR', label: 'presupuesto' },
      { value: '7M', label: 'habitantes' },
      { value: '2020', label: 'lanzamiento' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
