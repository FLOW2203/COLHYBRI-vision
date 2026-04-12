const { writeCluster } = require('../shared');

module.exports = {
  slug: 'action-coeur-de-ville',
  cluster: 'france',
  related: ['revitalisation-centres-villes', 'petites-villes-de-demain', 'manager-commerce-cci'],
  cross: 'main-street-america',
  fr: {
    title: 'Action Coeur de Ville',
    h1: 'Action Coeur de Ville : le programme de revitalisation des villes moyennes',
    metaTitle: 'Action Coeur de Ville : 244 villes, 5 Mds EUR, 2023-2026',
    metaDescription: "Action Coeur de Ville mobilise 5 Mds EUR pour revitaliser 244 villes moyennes. Pilote par l'ANCT, Banque des Territoires, Action Logement et Anah.",
    snippet: "Action Coeur de Ville est un programme national lance en 2018 qui mobilise 5 milliards d'euros sur 2023-2026 pour revitaliser 244 villes moyennes francaises. Pilote par l'ANCT avec Banque des Territoires (2,5 Mds EUR), Action Logement (1,7 Md EUR) et l'Anah (1 Md EUR), il couvre la renovation de l'habitat, le retour des commerces et la transition numerique.",
    sections: [
      { h2: "Qu'est-ce que le programme Action Coeur de Ville ?", body: "Action Coeur de Ville (ACV) est le programme phare de l'Etat pour redynamiser les villes moyennes. Lance en 2018, il regroupe desormais 244 communes et 20 millions d'habitants. Le perimetre couvre cinq axes : habitat, commerces, accessibilite, mise en valeur de l'espace public et transition numerique. Le financement croise Banque des Territoires, Action Logement et Anah." },
      { h2: 'Quelles villes beneficient de ACV ?', body: 'Les 244 villes ACV incluent des chefs-lieux departementaux et des sous-prefectures confrontes a la devitalisation commerciale. Parmi les laureates emblematiques : Nimes, Chalon-sur-Saone, Draguignan, Montlucon, Roanne, Saint-Brieuc. Chaque commune beneficie d une convention pluriannuelle avec un chef de projet dedie et un acces prioritaire aux credits ANCT.' },
      { h2: 'Comment un commerce beneficie-t-il de ACV ?', body: "Un commerce situe dans le perimetre ACV peut beneficier d aides a la renovation de vitrine, de subventions au loyer, de la prime numerique, ou du dispositif Petites Villes de Demain s il est complementaire. COLHYBRI permet au manager de commerce ACV de piloter la visibilite digitale de l ensemble des commerces du perimetre via un dashboard municipal unique." },
    ],
    faq: [
      { q: "Qu'est-ce que le programme Action Coeur de Ville ?", a: "Un programme national lance en 2018 qui mobilise 5 Mds EUR pour revitaliser 244 villes moyennes. Il est pilote par l'ANCT avec Banque des Territoires, Action Logement et Anah." },
      { q: 'Quelles villes sont classees ACV ?', a: '244 communes, dont Nimes, Chalon-sur-Saone, Roanne, Saint-Brieuc, Montlucon. Liste complete disponible sur le site ANCT.' },
      { q: 'Comment COLHYBRI complete le programme ?', a: 'COLHYBRI fournit au manager de commerce ACV un dashboard municipal de vitalite commerciale en temps reel et audite la presence Google de chaque commerce en 48 heures.' },
    ],
    stats: [
      { value: '244', label: 'villes moyennes' },
      { value: '5 Mds EUR', label: 'budget 2023-2026' },
      { value: '20M', label: 'habitants concernes' },
      { value: '2018', label: 'annee de lancement' },
    ],
  },
  en: {
    title: 'Action Coeur de Ville',
    h1: 'Action Coeur de Ville: revitalizing French midsize towns',
    metaTitle: 'Action Coeur de Ville: 244 towns, 5B EUR, 2023-2026',
    metaDescription: "France's Action Coeur de Ville program mobilizes 5B EUR to revitalize 244 midsize towns. Led by ANCT with Banque des Territoires, Action Logement and Anah.",
    snippet: "Action Coeur de Ville is a national program launched in 2018 mobilizing 5 billion EUR over 2023-2026 to revitalize 244 French midsize towns. Led by ANCT with Banque des Territoires (2.5B EUR), Action Logement (1.7B EUR) and Anah (1B EUR), it covers housing renovation, commercial return and digital transition.",
    sections: [
      { h2: 'What is the Action Coeur de Ville program?', body: 'Action Coeur de Ville (ACV) is the flagship French program for revitalizing midsize towns. Launched in 2018, it now includes 244 towns and 20 million inhabitants. Scope covers five axes: housing, commerce, accessibility, public space, digital transition. Financing crosses Banque des Territoires, Action Logement and Anah.' },
      { h2: 'Which towns benefit from ACV?', body: 'The 244 ACV towns include departmental capitals and sub-prefectures facing commercial decline. Flagship beneficiaries include Nimes, Chalon-sur-Saone, Draguignan, Montlucon, Roanne and Saint-Brieuc. Each town gets a multi-year agreement, dedicated project lead and priority access to ANCT funding.' },
      { h2: 'How does a shop benefit from ACV?', body: 'A shop in the ACV perimeter can access storefront renovation grants, rent subsidies, digital premiums and complementary Petites Villes de Demain support. COLHYBRI lets the ACV commerce manager pilot digital visibility of every shop through a single municipal dashboard.' },
    ],
    faq: [
      { q: 'What is Action Coeur de Ville?', a: 'A French national program launched in 2018 mobilizing 5B EUR to revitalize 244 midsize towns, led by ANCT with Banque des Territoires, Action Logement and Anah.' },
      { q: 'Which towns are ACV-classified?', a: '244 towns including Nimes, Chalon-sur-Saone, Roanne, Saint-Brieuc, Montlucon. Full list available on the ANCT website.' },
      { q: 'How does COLHYBRI complement ACV?', a: 'COLHYBRI provides ACV commerce managers with a real-time municipal vitality dashboard and audits every shop Google presence in 48 hours.' },
    ],
    stats: [
      { value: '244', label: 'midsize towns' },
      { value: '5B EUR', label: '2023-2026 budget' },
      { value: '20M', label: 'inhabitants' },
      { value: '2018', label: 'launch year' },
    ],
  },
  es: {
    title: 'Action Coeur de Ville',
    h1: 'Action Coeur de Ville: revitalizacion de ciudades medianas francesas',
    metaTitle: 'Action Coeur de Ville: 244 ciudades, 5.000M EUR, 2023-2026',
    metaDescription: 'Action Coeur de Ville moviliza 5.000M EUR para revitalizar 244 ciudades medianas. Pilotado por la ANCT con Banque des Territoires, Action Logement y Anah.',
    snippet: 'Action Coeur de Ville es un programa nacional lanzado en 2018 que moviliza 5.000 millones de euros en 2023-2026 para revitalizar 244 ciudades medianas francesas. Pilotado por la ANCT con Banque des Territoires (2.500M EUR), Action Logement (1.700M EUR) y Anah (1.000M EUR).',
    sections: [
      { h2: 'Que es el programa Action Coeur de Ville?', body: 'Action Coeur de Ville (ACV) es el programa insignia de Francia para revitalizar ciudades medianas. Lanzado en 2018, agrupa ahora 244 municipios y 20 millones de habitantes. Cubre cinco ejes: vivienda, comercio, accesibilidad, espacio publico, transicion digital.' },
      { h2: 'Que ciudades se benefician de ACV?', body: 'Las 244 ciudades ACV incluyen capitales departamentales y subprefecturas afectadas por la desvitalizacion comercial. Beneficiarias emblematicas: Nimes, Chalon-sur-Saone, Draguignan, Montlucon, Roanne, Saint-Brieuc.' },
      { h2: 'Como se beneficia un comercio de ACV?', body: 'Un comercio en el perimetro ACV puede acceder a ayudas para renovar el escaparate, subvenciones de alquiler, primas digitales y el dispositivo Petites Villes de Demain. COLHYBRI permite al gestor de comercio ACV pilotar la visibilidad digital de todos los comercios.' },
    ],
    faq: [
      { q: 'Que es Action Coeur de Ville?', a: 'Un programa nacional frances lanzado en 2018 que moviliza 5.000M EUR para revitalizar 244 ciudades medianas, pilotado por la ANCT.' },
      { q: 'Que ciudades estan clasificadas ACV?', a: '244 municipios, incluidos Nimes, Chalon-sur-Saone, Roanne, Saint-Brieuc, Montlucon. Lista completa en el sitio de la ANCT.' },
      { q: 'Como complementa COLHYBRI a ACV?', a: 'COLHYBRI ofrece a los gestores de comercio ACV un dashboard municipal de vitalidad en tiempo real y audita la presencia Google de cada comercio en 48 horas.' },
    ],
    stats: [
      { value: '244', label: 'ciudades medianas' },
      { value: '5.000M EUR', label: 'presupuesto 2023-2026' },
      { value: '20M', label: 'habitantes' },
      { value: '2018', label: 'ano de lanzamiento' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
