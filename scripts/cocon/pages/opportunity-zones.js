const { writeCluster } = require('../shared');

module.exports = {
  slug: 'opportunity-zones',
  cluster: 'usa',
  related: ['downtown-revitalization', 'rust-belt-revitalization', 'community-development'],
  cross: 'zrcv-zones-revitalisation',
  fr: {
    title: 'Opportunity Zones 2.0',
    h1: 'Opportunity Zones 2.0 : ce qui change en 2026',
    metaTitle: 'Opportunity Zones 2.0 : nouveau seuil, OBBBA 2025',
    metaDescription: 'Les Opportunity Zones 2.0, etablies par le OBBBA 2025, redesignent les census tracts en juillet 2026. Nouveau seuil 70%, reduction de 20% des zones eligibles.',
    snippet: "Les Opportunity Zones 2.0, etablies par le One Big Beautiful Bill Act de 2025, redesignent l'ensemble des census tracts en juillet 2026 avec de nouveaux criteres d'eligibilite. Le seuil de revenu passe de 80% a 70% du median family income, reduisant d'environ 20% le nombre de zones eligibles. Les investissements ruraux beneficient jusqu'a 30% de reduction sur les plus-values.",
    sections: [
      { h2: "Qu'est-ce qu'une Opportunity Zone ?", body: "Une Opportunity Zone est un census tract designe comme distressed, dans lequel les investisseurs peuvent placer leurs plus-values en echange d'avantages fiscaux substantiels : report d'impot, reduction de 10-15% si detention 5-7 ans, et exoneration totale sur les plus-values du placement OZ lui-meme si detenu 10+ ans. Le dispositif a ete cree par le Tax Cuts and Jobs Act de 2017." },
      { h2: "Qu'est-ce qui change avec OZ 2.0 ?", body: "Le One Big Beautiful Bill Act (OBBBA) signe en 2025 rend les Opportunity Zones permanentes et lance une redesignation complete en juillet 2026. Le seuil de revenu passe de 80% a 70% du median family income, reduisant le nombre de zones eligibles d environ 20%. Les investissements en zone rurale beneficient jusqu a 30% de reduction des plus-values, contre 10% auparavant." },
      { h2: 'Comment se preparer a OZ 2.0 ?', body: "Les villes doivent identifier leurs census tracts susceptibles d etre redesignes, documenter leur potentiel de revitalisation, et constituer des dossiers d investissement attractifs. COLHYBRI fournit un diagnostic objectif de la vitalite commerciale avec Score Maps par commerce, metrique ideale pour justifier l investissement OZ 2.0." },
    ],
    faq: [
      { q: "Qu'est-ce qu'une Opportunity Zone ?", a: 'Un census tract distressed ou les investisseurs peuvent placer leurs plus-values contre des avantages fiscaux : report d impot, reduction 10-15% et exoneration totale apres 10 ans de detention.' },
      { q: "Qu'est-ce qui change avec OZ 2.0 ?", a: 'Designation en juillet 2026. Seuil abaisse de 80% a 70% du median family income. Reduction de 20% des zones eligibles. 30% de reduction des plus-values pour les zones rurales.' },
      { q: 'Comment une ville peut se preparer ?', a: 'Identifier ses census tracts eligibles, documenter le potentiel de revitalisation. COLHYBRI fournit le diagnostic objectif de vitalite commerciale necessaire au dossier d investissement.' },
    ],
    stats: [
      { value: '8 764', label: 'OZ 1.0 existantes' },
      { value: '6 544', label: 'OZ 2.0 prevues' },
      { value: '70%', label: 'nouveau seuil MFI' },
      { value: 'juillet 2026', label: 'designation OZ 2.0' },
    ],
  },
  en: {
    title: 'Opportunity Zones 2.0',
    h1: 'Opportunity Zones 2.0: What Changes in 2026',
    metaTitle: 'Opportunity Zones 2.0: new threshold, OBBBA 2025',
    metaDescription: 'Opportunity Zones 2.0, established by OBBBA 2025, redesignate census tracts starting July 2026. New 70% threshold, 20% fewer eligible tracts.',
    snippet: 'Opportunity Zones 2.0, established by the One Big Beautiful Bill Act of 2025, redesignate all census tracts starting July 2026 with new eligibility criteria. The income threshold drops from 80% to 70% of median family income, reducing eligible tracts by approximately 20%. Rural OZ investments qualify for up to 30% capital gains reduction.',
    sections: [
      { h2: 'What is an Opportunity Zone?', body: 'An Opportunity Zone is a census tract designated as distressed where investors can place capital gains in exchange for substantial tax benefits: deferral, 10-15% reduction if held 5-7 years, and full exemption on gains from the OZ investment itself if held 10+ years. The tool was created by the Tax Cuts and Jobs Act of 2017.' },
      { h2: 'What changes with OZ 2.0?', body: 'The One Big Beautiful Bill Act (OBBBA) signed in 2025 makes Opportunity Zones permanent and launches a full redesignation in July 2026. The income threshold drops from 80% to 70% of median family income, reducing eligible tracts by about 20%. Rural OZ investments qualify for up to 30% capital gains reduction, up from 10%.' },
      { h2: 'How to prepare for OZ 2.0?', body: 'Cities must identify census tracts likely to be redesignated, document revitalization potential and build attractive investment cases. COLHYBRI provides an objective commercial vitality diagnosis with per-shop Score Maps, an ideal metric to justify OZ 2.0 investment.' },
    ],
    faq: [
      { q: 'What is an Opportunity Zone?', a: 'A distressed census tract where investors can place capital gains for tax benefits: deferral, 10-15% reduction and full exemption after 10-year hold.' },
      { q: 'What changes with OZ 2.0?', a: 'July 2026 designation. Income threshold drops from 80% to 70% of MFI. 20% fewer eligible tracts. 30% capital gains reduction for rural tracts.' },
      { q: 'How can a city prepare?', a: 'Identify eligible census tracts and document revitalization potential. COLHYBRI provides the objective commercial vitality diagnosis needed for investment cases.' },
    ],
    stats: [
      { value: '8,764', label: 'OZ 1.0 existing' },
      { value: '6,544', label: 'OZ 2.0 expected' },
      { value: '70%', label: 'new MFI threshold' },
      { value: 'July 2026', label: 'OZ 2.0 designation' },
    ],
  },
  es: {
    title: 'Opportunity Zones 2.0',
    h1: 'Opportunity Zones 2.0: que cambia en 2026',
    metaTitle: 'Opportunity Zones 2.0: nuevo umbral, OBBBA 2025',
    metaDescription: 'Las Opportunity Zones 2.0, establecidas por el OBBBA 2025, redesignan los census tracts en julio de 2026. Nuevo umbral del 70%, reduccion del 20%.',
    snippet: 'Las Opportunity Zones 2.0, establecidas por el One Big Beautiful Bill Act de 2025, redesignan todos los census tracts a partir de julio de 2026 con nuevos criterios de elegibilidad. El umbral de ingresos baja del 80% al 70% de la mediana familiar, reduciendo las zonas elegibles en aproximadamente un 20%.',
    sections: [
      { h2: 'Que es una Opportunity Zone?', body: 'Una Opportunity Zone es un census tract designado como distressed donde los inversores pueden colocar plusvalias a cambio de ventajas fiscales sustanciales: diferimiento de impuestos, reduccion del 10-15% si se mantienen 5-7 anos, y exoneracion total en la plusvalia OZ si se mantiene 10+ anos.' },
      { h2: 'Que cambia con OZ 2.0?', body: 'El OBBBA firmado en 2025 hace permanentes las Opportunity Zones y lanza una redesignacion completa en julio de 2026. El umbral de ingresos baja del 80% al 70% de la mediana familiar, reduciendo las zonas elegibles en alrededor del 20%. Las inversiones rurales se benefician hasta del 30% de reduccion de plusvalias.' },
      { h2: 'Como prepararse para OZ 2.0?', body: 'Las ciudades deben identificar sus census tracts susceptibles de ser redesignados y documentar su potencial de revitalizacion. COLHYBRI ofrece un diagnostico objetivo de la vitalidad comercial con Score Maps por comercio, metrica ideal para justificar la inversion OZ 2.0.' },
    ],
    faq: [
      { q: 'Que es una Opportunity Zone?', a: 'Un census tract distressed donde los inversores pueden colocar plusvalias a cambio de ventajas fiscales: diferimiento, reduccion del 10-15% y exoneracion total tras 10 anos.' },
      { q: 'Que cambia con OZ 2.0?', a: 'Designacion en julio de 2026. Umbral reducido del 80% al 70% de la mediana familiar. Reduccion del 20% de zonas elegibles. 30% de reduccion para zonas rurales.' },
      { q: 'Como puede prepararse una ciudad?', a: 'Identificar sus census tracts elegibles y documentar el potencial de revitalizacion. COLHYBRI ofrece el diagnostico objetivo de vitalidad comercial.' },
    ],
    stats: [
      { value: '8.764', label: 'OZ 1.0 existentes' },
      { value: '6.544', label: 'OZ 2.0 previstas' },
      { value: '70%', label: 'nuevo umbral MFI' },
      { value: 'julio 2026', label: 'designacion OZ 2.0' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
