const { writeCluster } = require('../shared');

module.exports = {
  slug: 'fidelisation-communautaire',
  cluster: 'solidaire',
  related: ['commerce-equitable-local', 'economie-solidaire', 'pool-solidaire-quartier'],
  cross: 'pour-les-commercants',
  fr: {
    title: 'Fidelisation communautaire',
    h1: 'Fidelisation communautaire : comment COLHYBRI retient les clients locaux',
    metaTitle: 'Fidelisation communautaire : pool, gamification, reseau',
    metaDescription: 'COLHYBRI combine pool solidaire, gamification (26 mini-jeux) et effet reseau pour atteindre plus de 60% de retention client.',
    snippet: "La fidelisation communautaire COLHYBRI repose sur trois leviers : le pool solidaire (les abonnes recoivent des services offerts), la gamification (26 mini-jeux, defis de quartier, classements) et l'effet reseau (plus il y a d'abonnes, plus il y a de services disponibles). Le taux de retention attendu depasse 60%, contre moins de 30% pour les programmes de fidelite classiques.",
    sections: [
      { h2: 'Qu est-ce que la fidelisation communautaire ?', body: "La fidelisation communautaire se distingue de la fidelisation individuelle classique (carte de fidelite, points cagnottes) par son dimensionnement collectif. Au lieu de recompenser un client pour ses achats repetes, elle recompense la participation a une communaute de quartier. L engagement est social plutot que transactionnel, ce qui cree une relation plus durable." },
      { h2: 'Quels sont les trois leviers de COLHYBRI ?', body: "Premier levier : le pool solidaire qui redistribue 75% des cotisations sous forme de services offerts. Deuxieme levier : la gamification avec 26 mini-jeux locaux, defis de quartier et classements par rue commercante. Troisieme levier : l effet reseau qui augmente la valeur percue a mesure que de nouveaux abonnes rejoignent la communaute (reseau a externalite positive)." },
      { h2: 'Pourquoi le taux de retention est superieur ?', body: "Les programmes de fidelite classiques atteignent 20-30% de retention annuelle. COLHYBRI cible plus de 60% grace a trois effets cumules : l addiction aux mini-jeux gamifies (similaire a Duolingo), la surprise positive des services offerts aleatoirement, et l effet reseau qui rend le desabonnement couteux en termes sociaux. Un abonne qui se desabonne quitte sa communaute de quartier." },
    ],
    faq: [
      { q: 'Qu est-ce que la fidelisation communautaire ?', a: 'Un modele qui recompense la participation a une communaute de quartier plutot que les achats repetes. L engagement est social plutot que transactionnel.' },
      { q: 'Quels sont les trois leviers ?', a: 'Pool solidaire (services offerts), gamification (26 mini-jeux, defis), effet reseau (valeur croissante avec le nombre d abonnes).' },
      { q: 'Pourquoi le taux de retention est superieur ?', a: 'Cible plus de 60% grace a l addiction aux mini-jeux, la surprise des services offerts, et l effet reseau qui rend le desabonnement couteux socialement.' },
    ],
    stats: [
      { value: '60%+', label: 'retention cible' },
      { value: '26', label: 'mini-jeux' },
      { value: '3 leviers', label: 'fidelisation' },
      { value: '20-30%', label: 'retention classique' },
    ],
  },
  en: {
    title: 'Community-driven loyalty',
    h1: 'Community-driven loyalty: how COLHYBRI retains local customers',
    metaTitle: 'Community loyalty: pool, gamification, network effect',
    metaDescription: 'COLHYBRI combines the solidarity pool, gamification (26 mini-games) and network effect to reach over 60% retention.',
    snippet: 'COLHYBRI community-driven loyalty relies on three levers: the solidarity pool (subscribers receive gifted services), gamification (26 mini-games, neighborhood challenges, rankings) and network effect (more subscribers = more services available). Expected retention exceeds 60%, versus less than 30% for standard loyalty programs.',
    sections: [
      { h2: 'What is community-driven loyalty?', body: 'Community-driven loyalty differs from classic individual loyalty (punch cards, points) by its collective dimension. Instead of rewarding a customer for repeat purchases, it rewards participation in a neighborhood community. Engagement is social rather than transactional, creating a more durable relationship.' },
      { h2: 'What are COLHYBRI three levers?', body: 'First lever: the solidarity pool redistributing 75% of fees as gifted services. Second: gamification with 26 local mini-games, neighborhood challenges and commercial-street rankings. Third: network effect that raises perceived value as new subscribers join (positive-externality network).' },
      { h2: 'Why is retention higher?', body: 'Classic loyalty programs reach 20-30% annual retention. COLHYBRI targets over 60% thanks to three cumulative effects: mini-game addiction (similar to Duolingo), positive surprise of randomly gifted services, and network effect that makes unsubscribing socially costly. An unsubscriber leaves their neighborhood community.' },
    ],
    faq: [
      { q: 'What is community-driven loyalty?', a: 'A model that rewards participation in a neighborhood community rather than repeat purchases. Engagement is social, not transactional.' },
      { q: 'What are the three levers?', a: 'Solidarity pool (gifted services), gamification (26 mini-games, challenges), network effect (value growing with number of subscribers).' },
      { q: 'Why is retention higher?', a: 'Targets over 60% thanks to mini-game addiction, the surprise of gifted services, and network effect that makes unsubscribing socially costly.' },
    ],
    stats: [
      { value: '60%+', label: 'target retention' },
      { value: '26', label: 'mini-games' },
      { value: '3 levers', label: 'loyalty stack' },
      { value: '20-30%', label: 'classic retention' },
    ],
  },
  es: {
    title: 'Fidelizacion comunitaria',
    h1: 'Fidelizacion comunitaria: como COLHYBRI retiene a los clientes locales',
    metaTitle: 'Fidelizacion comunitaria: pool, gamificacion, efecto red',
    metaDescription: 'COLHYBRI combina pool solidario, gamificacion (26 mini-juegos) y efecto red para alcanzar mas del 60% de retencion.',
    snippet: 'La fidelizacion comunitaria COLHYBRI se basa en tres palancas: el pool solidario (los suscriptores reciben servicios ofrecidos), la gamificacion (26 mini-juegos, desafios de barrio, rankings) y el efecto red (mas suscriptores = mas servicios disponibles). La tasa de retencion esperada supera el 60%, frente a menos del 30% de los programas clasicos.',
    sections: [
      { h2: 'Que es la fidelizacion comunitaria?', body: 'La fidelizacion comunitaria se distingue de la fidelizacion individual clasica (tarjetas de puntos) por su dimension colectiva. En lugar de recompensar las compras repetidas, recompensa la participacion en una comunidad de barrio. El compromiso es social en lugar de transaccional.' },
      { h2: 'Cuales son las tres palancas de COLHYBRI?', body: 'Primera palanca: el pool solidario que redistribuye el 75% de las cotizaciones. Segunda: la gamificacion con 26 mini-juegos locales, desafios y rankings. Tercera: el efecto red que aumenta el valor percibido a medida que nuevos suscriptores se unen a la comunidad.' },
      { h2: 'Por que la retencion es superior?', body: 'Los programas clasicos alcanzan el 20-30% de retencion anual. COLHYBRI apunta a mas del 60% gracias a tres efectos acumulados: la adiccion a los mini-juegos (similar a Duolingo), la sorpresa positiva de los servicios ofrecidos, y el efecto red que hace costoso socialmente darse de baja.' },
    ],
    faq: [
      { q: 'Que es la fidelizacion comunitaria?', a: 'Un modelo que recompensa la participacion en una comunidad de barrio en lugar de las compras repetidas. El compromiso es social en lugar de transaccional.' },
      { q: 'Cuales son las tres palancas?', a: 'Pool solidario (servicios ofrecidos), gamificacion (26 mini-juegos, desafios), efecto red (valor creciente con el numero de suscriptores).' },
      { q: 'Por que la retencion es superior?', a: 'Apunta a mas del 60% gracias a la adiccion a los mini-juegos, la sorpresa de los servicios ofrecidos, y el efecto red.' },
    ],
    stats: [
      { value: '60%+', label: 'retencion objetivo' },
      { value: '26', label: 'mini-juegos' },
      { value: '3 palancas', label: 'fidelizacion' },
      { value: '20-30%', label: 'retencion clasica' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
