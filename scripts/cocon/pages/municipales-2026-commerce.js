const { writeCluster } = require('../shared');

module.exports = {
  slug: 'municipales-2026-commerce',
  cluster: 'france',
  related: ['vacance-commerciale-france', 'manager-commerce-cci', 'revitalisation-centres-villes'],
  cross: 'pour-les-collectivites',
  fr: {
    title: 'Municipales 2026 et commerce',
    h1: 'Municipales 2026 : la revitalisation commerciale comme enjeu electoral',
    metaTitle: 'Municipales 2026 : commerce et centre-ville, enjeu numero 1',
    metaDescription: "Les municipales 2026 placent la revitalisation commerciale au premier rang des enjeux. La Confederation des Commercants de France a publie un Livre blanc.",
    snippet: "A l'approche des elections municipales de 2026, la revitalisation des centres-villes s'impose comme l'enjeu central des projets de mandat. La Confederation des Commercants de France (CDF) a publie un Livre blanc proposant des solutions articulees autour de quatre axes : commerces vacants, mobilites douces, animation commerciale et securite.",
    sections: [
      { h2: "Pourquoi le commerce est-il l'enjeu des municipales 2026 ?", body: "Apres 15 ans de hausse continue de la vacance commerciale, les centres-villes sont devenus le symbole visible du declin territorial. Les candidats aux municipales 2026 doivent repondre a une attente forte des habitants : voir leur rue commercante revivre. Selon plusieurs sondages, le commerce arrive en tete des preoccupations locales devant la securite et la mobilite." },
      { h2: 'Que propose la Confederation des Commercants de France ?', body: "La CDF a publie un Livre blanc pour les municipales 2026 articule autour de quatre axes : reduire la vacance commerciale (via ZRCV et encadrement des loyers), favoriser les mobilites douces (pietonnisation ciblee), animer les centres-villes (evenements, marches), et renforcer la securite (presence policiere, eclairage). Le document est disponible sur le site de la CDF." },
      { h2: 'Comment COLHYBRI aide un candidat a construire son programme ?', body: "COLHYBRI fournit aux candidats aux municipales un diagnostic objectif de la vitalite commerciale de leur centre-ville : taux de vacance, Score Maps moyen, fiches Google incompletes, commerces sans avis recents. Le déploiement clé en main permet de présenter un plan d'action concret avec des métriques avant / après." },
    ],
    faq: [
      { q: 'Pourquoi le commerce est-il central aux municipales 2026 ?', a: "Apres 15 ans de hausse de la vacance commerciale, le commerce est devenu le symbole visible du declin territorial. Il arrive en tete des preoccupations locales selon plusieurs sondages." },
      { q: 'Que propose la CDF pour les municipales ?', a: 'Un Livre blanc articule autour de 4 axes : vacance commerciale, mobilites douces, animation et securite. Disponible sur le site de la Confederation des Commercants de France.' },
      { q: 'Comment COLHYBRI aide un candidat ?', a: 'Diagnostic objectif de la vitalite commerciale, Score Maps par commerce, déploiement clé en main pour construire un plan d'action avec métriques avant / après.' },
    ],
    stats: [
      { value: '2026', label: 'annee electorale' },
      { value: '#1', label: 'enjeu local' },
      { value: '4 axes', label: 'Livre blanc CDF' },
      { value: '90j', label: 'déploiement' },
    ],
  },
  en: {
    title: '2026 French municipal elections',
    h1: '2026 French municipal elections: downtown as the top issue',
    metaTitle: '2026 French municipal elections: downtown, issue number 1',
    metaDescription: 'The 2026 French municipal elections put downtown revitalization at the top of the agenda. The Confederation of French Merchants published a White Paper.',
    snippet: 'Ahead of the 2026 French municipal elections, downtown revitalization has become the central issue for mandate programs. The Confederation of French Merchants (CDF) published a White Paper proposing solutions around four axes: vacant shops, soft mobility, commercial animation and security.',
    sections: [
      { h2: 'Why is commerce the top issue for the 2026 municipals?', body: 'After 15 years of rising commercial vacancy, French downtowns have become the visible symbol of territorial decline. Candidates in the 2026 municipals must answer a strong voter demand: bring the main street back to life. Polls rank commerce first among local concerns, ahead of security and mobility.' },
      { h2: 'What does the Confederation of French Merchants propose?', body: 'The CDF published a 2026 municipal elections White Paper with four axes: reduce commercial vacancy (via ZRCV and rent oversight), encourage soft mobility (targeted pedestrianization), animate downtowns (events, markets) and reinforce security (police presence, lighting). Available on the CDF website.' },
      { h2: 'How does COLHYBRI help a candidate build a program?', body: 'COLHYBRI provides candidates with an objective diagnosis of downtown commercial vitality: vacancy rate, average Score Maps, incomplete Google listings, shops without recent reviews. The turnkey 4-week rollout lets candidates present a concrete action plan with before/after metrics.' },
    ],
    faq: [
      { q: 'Why is commerce central to the 2026 municipals?', a: 'After 15 years of rising commercial vacancy, commerce has become the visible symbol of territorial decline. It tops local concerns in polls.' },
      { q: 'What does the CDF propose?', a: 'A White Paper with 4 axes: vacancy, soft mobility, animation, security. Available on the CDF website.' },
      { q: 'How does COLHYBRI help a candidate?', a: 'Objective vitality diagnosis, per-shop Score Maps, turnkey deployment to build an action plan with before/after metrics.' },
    ],
    stats: [
      { value: '2026', label: 'election year' },
      { value: '#1', label: 'local issue' },
      { value: '4 axes', label: 'CDF White Paper' },
      { value: '90d', label: 'deployment' },
    ],
  },
  es: {
    title: 'Municipales 2026 y comercio',
    h1: 'Municipales 2026: la revitalizacion comercial como tema electoral',
    metaTitle: 'Municipales 2026: comercio y centro urbano, tema numero 1',
    metaDescription: 'Las municipales francesas de 2026 colocan la revitalizacion comercial en el primer plano. La Confederacion de Comerciantes de Francia publico un Libro Blanco.',
    snippet: 'A las puertas de las elecciones municipales francesas de 2026, la revitalizacion de los centros urbanos se impone como el tema central de los programas. La Confederacion de Comerciantes de Francia (CDF) publico un Libro Blanco con cuatro ejes: comercios vacantes, movilidades blandas, animacion comercial y seguridad.',
    sections: [
      { h2: 'Por que el comercio es central en las municipales 2026?', body: 'Tras 15 anos de alza continua de la vacancia comercial, los centros urbanos se han convertido en el simbolo visible del declive territorial. Los candidatos deben responder a una fuerte demanda de los habitantes: ver revivir su calle comercial. El comercio encabeza las preocupaciones locales segun varios sondeos.' },
      { h2: 'Que propone la Confederacion de Comerciantes de Francia?', body: 'La CDF publico un Libro Blanco con cuatro ejes: reducir la vacancia comercial (ZRCV y control de alquileres), favorecer las movilidades blandas, animar los centros urbanos y reforzar la seguridad. Disponible en el sitio de la CDF.' },
      { h2: 'Como ayuda COLHYBRI a un candidato?', body: 'COLHYBRI ofrece a los candidatos un diagnostico objetivo de la vitalidad comercial de su centro urbano: tasa de vacancia, Score Maps medio, fichas Google incompletas. Despliegue llave en mano para presentar un plan de acción con métricas antes/después.' },
    ],
    faq: [
      { q: 'Por que el comercio es central en las municipales 2026?', a: 'Tras 15 anos de alza de la vacancia comercial, el comercio es el simbolo visible del declive territorial. Encabeza las preocupaciones locales.' },
      { q: 'Que propone la CDF?', a: 'Un Libro Blanco con 4 ejes: vacancia, movilidades blandas, animacion, seguridad. Disponible en el sitio de la CDF.' },
      { q: 'Como ayuda COLHYBRI a un candidato?', a: 'Diagnostico objetivo, Score Maps por comercio, despliegue llave en mano con métricas antes/después.' },
    ],
    stats: [
      { value: '2026', label: 'ano electoral' },
      { value: '#1', label: 'tema local' },
      { value: '4 ejes', label: 'Libro Blanco CDF' },
      { value: '90d', label: 'despliegue' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
