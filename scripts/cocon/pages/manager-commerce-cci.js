const { writeCluster } = require('../shared');

module.exports = {
  slug: 'manager-commerce-cci',
  cluster: 'france',
  related: ['action-coeur-de-ville', 'vacance-commerciale-france', 'commerce-proximite-digital'],
  cross: 'main-street-america',
  fr: {
    title: 'Manager de commerce CCI',
    h1: 'Manager de commerce : le metier qui revitalise les centres-villes',
    metaTitle: 'Manager de commerce CCI : mission et outils 2026',
    metaDescription: "Les managers de commerce, finances par les CCI, sont les chevilles ouvrieres de la revitalisation commerciale. Le gouvernement a annonce leur co-financement en 2025.",
    snippet: "Les managers de commerce, finances par les Chambres de Commerce et d'Industrie (CCI), sont les chevilles ouvrieres de la revitalisation commerciale des centres-villes francais. En 2025, le gouvernement a annonce le co-financement de postes de managers de commerce dans le cadre de la lutte contre la vacance commerciale.",
    sections: [
      { h2: "Qu'est-ce qu'un manager de commerce ?", body: "Un manager de commerce est un professionnel municipal ou intercommunal dont la mission est d'animer et de coordonner le tissu commercial d'une ville. Ses taches incluent : le recensement des locaux vacants, l'accompagnement des porteurs de projets, l'organisation d'evenements commerciaux, le suivi de la frequentation et la relation avec les bailleurs prives." },
      { h2: 'Qui finance le manager de commerce ?', body: "Historiquement, les managers de commerce etaient finances par les CCI sur fonds propres. Depuis 2025, un co-financement Etat-CCI-commune a ete mis en place dans le cadre du plan commerce. Les villes Action Coeur de Ville et Petites Villes de Demain beneficient d'un acces prioritaire a ce dispositif de co-financement." },
      { h2: 'Comment un manager de commerce utilise COLHYBRI ?', body: "COLHYBRI est l outil numerique du manager de commerce. Le dashboard municipal lui permet de suivre en temps reel le Score Maps de chaque commerce, de reperer les fiches Google incompletes, de relancer les commercants sans avis recents, et de mesurer l impact de ses actions sur la vitalite commerciale. Audit automatise en 48 heures." },
    ],
    faq: [
      { q: "Qu'est-ce qu'un manager de commerce ?", a: 'Un professionnel municipal ou intercommunal qui anime et coordonne le tissu commercial. Ses missions couvrent la gestion des locaux vacants, l accompagnement de porteurs de projet et le suivi de la frequentation.' },
      { q: 'Qui finance le manager de commerce ?', a: "Historiquement les CCI ; depuis 2025 un co-financement Etat-CCI-commune. Les villes ACV et PVD ont un acces prioritaire au dispositif." },
      { q: 'Comment COLHYBRI aide un manager de commerce ?', a: 'COLHYBRI fournit un dashboard municipal de vitalite commerciale, un audit Google automatise en 48 heures et un rapport d impact pour le conseil municipal.' },
    ],
    stats: [
      { value: '2025', label: 'annee co-financement' },
      { value: 'Etat-CCI', label: 'financement partage' },
      { value: '48h', label: 'audit Maps' },
      { value: '10 EUR', label: 'abonnement commercant' },
    ],
  },
  en: {
    title: 'Commerce manager (CCI)',
    h1: 'Commerce manager: the job that revitalizes French downtowns',
    metaTitle: 'Commerce manager CCI: mission and tools 2026',
    metaDescription: 'Commerce managers funded by French Chambers of Commerce are the operational backbone of downtown revitalization. The government co-funds the role since 2025.',
    snippet: 'Commerce managers, funded by French Chambers of Commerce and Industry (CCI), are the operational backbone of downtown revitalization. In 2025, the French government announced co-funding for commerce manager positions as part of the national commerce plan.',
    sections: [
      { h2: 'What is a commerce manager?', body: 'A commerce manager is a municipal or inter-municipal professional whose mission is to animate and coordinate the commercial fabric of a town. Tasks include: identifying vacant units, supporting new project leaders, organizing commercial events, tracking foot traffic and engaging with private landlords.' },
      { h2: 'Who funds the commerce manager?', body: 'Historically, CCI funded the role on their own budget. Since 2025, a State-CCI-city co-funding scheme has been launched as part of the national commerce plan. Action Coeur de Ville and Petites Villes de Demain cities get priority access.' },
      { h2: 'How does a commerce manager use COLHYBRI?', body: 'COLHYBRI is the commerce manager digital toolkit. The municipal dashboard tracks each shop Score Maps in real time, flags incomplete Google listings, prompts shops lacking recent reviews and measures the impact of actions on commercial vitality.' },
    ],
    faq: [
      { q: 'What is a commerce manager?', a: 'A municipal or inter-municipal professional who animates and coordinates the commercial fabric. Missions cover vacant units, new project support and foot traffic tracking.' },
      { q: 'Who funds the commerce manager?', a: 'Historically CCI; since 2025 a State-CCI-city co-funding scheme. ACV and PVD cities get priority access.' },
      { q: 'How does COLHYBRI help a commerce manager?', a: 'A municipal vitality dashboard, 48-hour automated Google audit and a city council impact report.' },
    ],
    stats: [
      { value: '2025', label: 'co-funding year' },
      { value: 'State-CCI', label: 'shared funding' },
      { value: '48h', label: 'Maps audit' },
      { value: '10 EUR', label: 'shop subscription' },
    ],
  },
  es: {
    title: 'Gestor de comercio CCI',
    h1: 'Gestor de comercio: el oficio que revitaliza los centros urbanos',
    metaTitle: 'Gestor de comercio CCI: mision y herramientas 2026',
    metaDescription: 'Los gestores de comercio financiados por las CCI son los pilares operativos de la revitalizacion comercial. El gobierno los cofinancia desde 2025.',
    snippet: 'Los gestores de comercio, financiados por las Camaras de Comercio e Industria (CCI) francesas, son los pilares operativos de la revitalizacion comercial de los centros urbanos. En 2025, el gobierno anuncio la cofinanciacion de puestos de gestor de comercio en el marco del plan nacional de comercio.',
    sections: [
      { h2: 'Que es un gestor de comercio?', body: 'Un gestor de comercio es un profesional municipal o intermunicipal cuya mision es animar y coordinar el tejido comercial de una ciudad. Sus tareas incluyen: recensar los locales vacantes, acompanar a los nuevos emprendedores, organizar eventos comerciales, hacer seguimiento de la afluencia.' },
      { h2: 'Quien financia al gestor de comercio?', body: 'Historicamente las CCI financiaban el puesto con fondos propios. Desde 2025, se ha establecido una cofinanciacion Estado-CCI-municipio en el marco del plan nacional de comercio. Las ciudades ACV y PVD tienen acceso prioritario.' },
      { h2: 'Como usa un gestor de comercio COLHYBRI?', body: 'COLHYBRI es el kit digital del gestor de comercio. El dashboard municipal permite seguir en tiempo real el Score Maps de cada comercio, detectar fichas Google incompletas y medir el impacto de sus acciones.' },
    ],
    faq: [
      { q: 'Que es un gestor de comercio?', a: 'Un profesional municipal o intermunicipal que anima y coordina el tejido comercial. Sus misiones cubren los locales vacantes, el apoyo a emprendedores y el seguimiento de la afluencia.' },
      { q: 'Quien financia al gestor de comercio?', a: 'Historicamente las CCI; desde 2025 una cofinanciacion Estado-CCI-municipio. Las ciudades ACV y PVD tienen acceso prioritario.' },
      { q: 'Como ayuda COLHYBRI a un gestor de comercio?', a: 'COLHYBRI ofrece un dashboard municipal de vitalidad, una auditoria Google automatizada en 48 horas y un informe de impacto.' },
    ],
    stats: [
      { value: '2025', label: 'ano de cofinanciacion' },
      { value: 'Estado-CCI', label: 'financiacion compartida' },
      { value: '48h', label: 'auditoria Maps' },
      { value: '10 EUR', label: 'suscripcion comercio' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
