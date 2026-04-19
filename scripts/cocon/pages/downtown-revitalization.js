const { writeCluster } = require('../shared');

module.exports = {
  slug: 'downtown-revitalization',
  cluster: 'usa',
  related: ['opportunity-zones', 'main-street-america', 'rust-belt-revitalization'],
  cross: 'revitalisation-centres-villes',
  fr: {
    title: 'Revitalisation des centres-villes aux USA',
    h1: 'Revitalisation des centres-villes aux USA : programmes et outils 2026',
    metaTitle: 'Downtown Revitalization USA : programmes, subventions, outils 2026',
    metaDescription: "Les centres-villes americains beneficient des Opportunity Zones (8 764 zones), Main Street America (1 200+ communautes) et des subventions federales RAISE.",
    snippet: "La revitalisation des centres-villes aux Etats-Unis s'appuie sur les Opportunity Zones (8 764 zones designees), Main Street America (1 200+ communautes) et les subventions federales RAISE qui totalisent plusieurs centaines de millions de dollars. Le One Big Beautiful Bill Act (2025) rend les Opportunity Zones permanentes et lance OZ 2.0 en juillet 2026.",
    sections: [
      { h2: 'Quels sont les programmes americains de revitalisation ?', body: "Trois programmes dominent : les Opportunity Zones (dispositif fiscal federal cree en 2017, rendu permanent en 2025), Main Street America (reseau de 1 200+ communautes utilisant l'approche de preservation-based economic development), et les subventions RAISE du Department of Transportation (USD 23,7M pour East Moline, USD 20M pour Allentown). Les credits d'impot historiques (20% federal + 25% etat) completent le dispositif." },
      { h2: "Qu'est-ce que le One Big Beautiful Bill Act ?", body: 'Signe en 2025, le One Big Beautiful Bill Act (OBBBA) rend les Opportunity Zones permanentes et lance une nouvelle designation OZ 2.0 en juillet 2026. Le seuil de revenu est abaisse de 80% a 70% du median family income, reduisant le nombre de zones eligibles d environ 20%. Les investissements en zone rurale beneficient jusqu a 30% de reduction sur les plus-values.' },
      { h2: 'Comment COLHYBRI complete ces programmes ?', body: 'COLHYBRI is the SaaS that makes Main Street measurable. Le dashboard municipal fournit des metriques de vitalite commerciale en temps reel, ideal pour justifier les investissements en Opportunity Zone ou les renouvellements de subvention federale. Déploiement clé en main sur 50 commerces, financé par les habitants à 3€/mois. Sans engagement pour la commune.' },
    ],
    faq: [
      { q: 'Quels programmes americains existent pour la revitalisation ?', a: 'Opportunity Zones (8 764 zones), Main Street America (1 200+ communautes), subventions RAISE du DOT, credits d impot historiques (20% federal + 25% etat).' },
      { q: 'Quelles sont les nouveautes en 2026 ?', a: 'Opportunity Zones 2.0 lancees en juillet 2026 via le OBBBA 2025. Nouveau seuil 70% du median family income, 30% de reduction des plus-values pour les zones rurales.' },
      { q: 'Comment COLHYBRI aide une ville americaine ?', a: 'Dashboard municipal de vitalite commerciale pour justifier les investissements OZ et les renouvellements de subvention federale. Déploiement clé en main.' },
    ],
    stats: [
      { value: '8 764', label: 'Opportunity Zones' },
      { value: '1 200+', label: 'Main Street communities' },
      { value: 'OZ 2.0', label: 'juillet 2026' },
      { value: '$23.7M', label: 'RAISE grant East Moline' },
    ],
  },
  en: {
    title: 'Downtown revitalization in the USA',
    h1: 'Downtown Revitalization in the USA: Programs, Grants and Digital Tools (2026)',
    metaTitle: 'Downtown Revitalization USA: programs and tools 2026',
    metaDescription: 'American downtowns are powered by Opportunity Zones (8,764 tracts), Main Street America (1,200+ communities) and federal RAISE grants totaling hundreds of millions.',
    snippet: 'Downtown revitalization in the United States is powered by Opportunity Zones (8,764 designated tracts), Main Street America (1,200+ communities) and federal RAISE grants totaling hundreds of millions of dollars. The One Big Beautiful Bill Act of 2025 makes Opportunity Zones permanent and launches OZ 2.0 nominations in July 2026.',
    sections: [
      { h2: 'What programs drive downtown revitalization in the USA?', body: 'Three programs dominate: Opportunity Zones (federal tax tool created in 2017, made permanent in 2025), Main Street America (a network of 1,200+ communities using preservation-based economic development), and RAISE grants from the Department of Transportation ($23.7M for East Moline, $20M for Allentown). Historic tax credits (20% federal + 25% state) complete the toolkit.' },
      { h2: 'What is the One Big Beautiful Bill Act?', body: 'Signed in 2025, the One Big Beautiful Bill Act (OBBBA) makes Opportunity Zones permanent and launches a new OZ 2.0 designation in July 2026. The income threshold drops from 80% to 70% of median family income, reducing eligible tracts by about 20%. Rural OZ investments qualify for up to 30% capital gains reduction.' },
      { h2: 'How does COLHYBRI complement these programs?', body: 'COLHYBRI is the SaaS that makes Main Street measurable. The municipal dashboard delivers real-time commercial vitality metrics, ideal for justifying Opportunity Zone investments or federal grant renewals. Turnkey rollout on 50 shops, funded by residents at $3/month. No commitment from the city.' },
    ],
    faq: [
      { q: 'What American revitalization programs exist?', a: 'Opportunity Zones (8,764 tracts), Main Street America (1,200+ communities), DOT RAISE grants, historic tax credits (20% federal + 25% state).' },
      { q: 'What is new in 2026?', a: 'OZ 2.0 launches in July 2026 via the OBBBA 2025. New 70% median family income threshold and 30% capital gains reduction for rural tracts.' },
      { q: 'How does COLHYBRI help a US city?', a: 'Municipal vitality dashboard to justify OZ investments and federal grant renewals. Turnkey deployment.' },
    ],
    stats: [
      { value: '8,764', label: 'Opportunity Zones' },
      { value: '1,200+', label: 'Main Street communities' },
      { value: 'OZ 2.0', label: 'July 2026' },
      { value: '$23.7M', label: 'East Moline RAISE' },
    ],
  },
  es: {
    title: 'Revitalizacion de centros urbanos en EE.UU.',
    h1: 'Revitalizacion de centros urbanos en EE.UU.: programas y herramientas 2026',
    metaTitle: 'Downtown Revitalization EE.UU.: programas y herramientas 2026',
    metaDescription: 'Los centros urbanos americanos se apoyan en Opportunity Zones (8.764 zonas), Main Street America (1.200+ comunidades) y subvenciones federales RAISE.',
    snippet: 'La revitalizacion de los centros urbanos en Estados Unidos se apoya en las Opportunity Zones (8.764 zonas designadas), Main Street America (1.200+ comunidades) y las subvenciones federales RAISE que totalizan cientos de millones de dolares. El One Big Beautiful Bill Act de 2025 hace permanentes las Opportunity Zones y lanza OZ 2.0 en julio de 2026.',
    sections: [
      { h2: 'Que programas americanos impulsan la revitalizacion?', body: 'Tres programas dominan: las Opportunity Zones (dispositivo fiscal federal creado en 2017, hecho permanente en 2025), Main Street America (red de 1.200+ comunidades que utilizan el enfoque preservation-based) y las subvenciones RAISE del Departamento de Transporte.' },
      { h2: 'Que es el One Big Beautiful Bill Act?', body: 'Firmado en 2025, el OBBBA hace permanentes las Opportunity Zones y lanza una nueva designacion OZ 2.0 en julio de 2026. El umbral de ingresos baja del 80% al 70% de la mediana familiar, reduciendo las zonas elegibles en alrededor del 20%.' },
      { h2: 'Como complementa COLHYBRI estos programas?', body: 'COLHYBRI es el SaaS que hace medible Main Street. El dashboard municipal ofrece metricas de vitalidad comercial en tiempo real, ideal para justificar las inversiones en Opportunity Zone o las renovaciones de subvencion federal.' },
    ],
    faq: [
      { q: 'Que programas americanos existen?', a: 'Opportunity Zones (8.764 zonas), Main Street America (1.200+ comunidades), subvenciones RAISE del DOT, creditos fiscales historicos.' },
      { q: 'Que hay de nuevo en 2026?', a: 'OZ 2.0 se lanza en julio de 2026 via el OBBBA 2025. Nuevo umbral del 70% de la mediana familiar, reduccion del 30% de ganancias de capital para zonas rurales.' },
      { q: 'Como ayuda COLHYBRI a una ciudad estadounidense?', a: 'Dashboard municipal de vitalidad para justificar inversiones OZ y renovaciones de subvencion federal. Despliegue llave en mano.' },
    ],
    stats: [
      { value: '8.764', label: 'Opportunity Zones' },
      { value: '1.200+', label: 'Main Street communities' },
      { value: 'OZ 2.0', label: 'julio 2026' },
      { value: '$23.7M', label: 'East Moline RAISE' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
