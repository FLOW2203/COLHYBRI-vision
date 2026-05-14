#!/usr/bin/env node
/**
 * FORGE V2 — Complete Sprint 2 i18n patch.
 * Adds all missing namespaces to messages/{fr,en,es,en-gb,pt,de,it,zh,ja,hi,pl}.json.
 * FR is primary content, EN is translated, ES is translated, rest get EN fallback.
 */
const fs = require('fs');
const path = require('path');
const MESSAGES = path.join(__dirname, '..', 'messages');

const LOCALE_SOURCE = {
  fr:'fr', en:'en', 'en-gb':'en', es:'es',
  pt:'en', de:'en', it:'en', zh:'en', ja:'en', hi:'en', pl:'en',
};

// ═══════════════════════════════════════════════════
// NAMESPACE DATA — FR / EN / ES
// ═══════════════════════════════════════════════════

const NS = {};

// ── missionPage ──
NS.missionPage = {
  fr: {
    meta: { title: "Mission COLHYBRI", description: "Que chacun puisse vivre et prosperer la ou il a grandi. 220 ans de mutualisme francais digitalises pour le 21eme siecle." },
    hero: { badge: "NOTRE MISSION", why: "Que chacun puisse vivre et prosperer la ou il a grandi." },
    legend: { title: "La legende du colibri", para1: "Un jour, un immense incendie ravage la foret. Tous les animaux fuient, terrifies. Seul le petit colibri s'active, portant quelques gouttes d'eau dans son bec pour les jeter sur les flammes.", para2: "Le tatou, agace, lui dit : Colibri, tu es fou ! Tu crois que c'est avec ces quelques gouttes que tu vas eteindre le feu ?", quote: "Je le sais, mais je fais ma part." },
    heritage: { title: "L'heritage", mutualism: "Le mutualisme francais est ne en 1806 avec les premieres societes de secours mutuels. 220 ans plus tard, la Securite sociale et les grandes mutuelles structurent le paysage social francais. COLHYBRI prolonge cette tradition dans l'economie numerique.", sospeso: "Le caffe sospeso est une tradition napolitaine du debut du 20eme siecle : un client paie deux cafes, un pour lui et un suspendu au bar pour un inconnu. COLHYBRI etend ce principe a tous les services du quartier.", synthesis: "COLHYBRI digitalise ces traditions pour le 21eme siecle : mutualisation, solidarite anonyme, pas d'intermediaire." },
    founder: { title: "Le fondateur", body: "Florent Gibert. Autodidacte. De la construction et la livraison a la fintech. De Marseille a l'Occitanie. La vision est nee d'un constat simple : les centres-villes se vident alors que leurs habitants aspirent a plus de fraternite. COLHYBRI est la reponse." },
    cta: { title: "Decouvrir la solution" },
  },
  en: {
    meta: { title: "COLHYBRI Mission", description: "That everyone can live and thrive where they grew up. 220 years of French mutualism digitized for the 21st century." },
    hero: { badge: "OUR MISSION", why: "That everyone can live and thrive where they grew up." },
    legend: { title: "The hummingbird legend", para1: "One day, a massive fire ravages the forest. All animals flee in terror. Only the tiny hummingbird stays, carrying a few drops of water in its beak to throw on the flames.", para2: "The armadillo, annoyed, says: Hummingbird, you are crazy! Do you really think those few drops will put out the fire?", quote: "I know, but I am doing my part." },
    heritage: { title: "The heritage", mutualism: "French mutualism was born in 1806 with the first mutual aid societies. 220 years later, Social Security and the large mutuelles shape the French social landscape. COLHYBRI extends this tradition into the digital economy.", sospeso: "The caffe sospeso is a Neapolitan tradition from the early 20th century: a customer pays for two coffees, one for themselves and one suspended at the bar for a stranger. COLHYBRI extends this principle to every neighborhood service.", synthesis: "COLHYBRI digitizes these traditions for the 21st century: mutualization, anonymous solidarity, no intermediary." },
    founder: { title: "The founder", body: "Florent Gibert. Self-taught. From construction and delivery to fintech. From Marseille to Occitanie. The vision was born from a simple observation: downtowns are emptying while their residents aspire to more community. COLHYBRI is the answer." },
    cta: { title: "Discover the solution" },
  },
  es: {
    meta: { title: "Mision COLHYBRI", description: "Que cada uno pueda vivir y prosperar donde crecio. 220 anos de mutualismo frances digitalizados para el siglo XXI." },
    hero: { badge: "NUESTRA MISION", why: "Que cada uno pueda vivir y prosperar donde crecio." },
    legend: { title: "La leyenda del colibri", para1: "Un dia, un inmenso incendio arrasa el bosque. Todos los animales huyen, aterrorizados. Solo el pequeno colibri se activa, llevando unas gotas de agua en su pico para lanzarlas sobre las llamas.", para2: "El armadillo, irritado, le dice: Colibri, estas loco! Crees que con esas gotas vas a apagar el fuego?", quote: "Lo se, pero hago mi parte." },
    heritage: { title: "El legado", mutualism: "El mutualismo frances nacio en 1806 con las primeras sociedades de socorro mutuo. 220 anos despues, la Seguridad Social y las grandes mutuelles estructuran el paisaje social frances. COLHYBRI prolonga esta tradicion en la economia digital.", sospeso: "El caffe sospeso es una tradicion napolitana de principios del siglo XX: un cliente paga dos cafes, uno para el y otro suspendido en el bar para un desconocido. COLHYBRI extiende este principio a todos los servicios del barrio.", synthesis: "COLHYBRI digitaliza estas tradiciones para el siglo XXI: mutualizacion, solidaridad anonima, sin intermediario." },
    founder: { title: "El fundador", body: "Florent Gibert. Autodidacta. De la construccion y la entrega a la fintech. De Marsella a Occitania. La vision nacio de una observacion simple: los centros urbanos se vacian mientras sus habitantes aspiran a mas fraternidad." },
    cta: { title: "Descubrir la solucion" },
  },
};

// ── solutionHub ──
NS.solutionHub = {
  fr: {
    meta: { title: "Solution COLHYBRI", description: "Pool solidaire, Maps+ et gamification : les 3 piliers qui revitalisent votre centre-ville." },
    hero: { badge: "SOLUTION", title: "Comment COLHYBRI revitalise votre centre-ville", subtitle: "Trois piliers, un meme objectif : faire revivre la rue commercante." },
    pillars: {
      pool: { title: "Solidarite de quartier", body: "3 EUR par mois. 75% au pool solidaire. Des services offerts aleatoirement a un voisin, un commercant, une cause locale. C'est une mutuelle de quartier digitale.", cta: "Decouvrir" },
      maps: { title: "Visibilite digitale", body: "Audit Google automatise en 48 heures. Onboarding zero-friction pour les commercants. Monitoring continu de la presence en ligne. 10 EUR/mois, 0% commission.", cta: "Decouvrir" },
      gamification: { title: "Engagement communautaire", body: "26 mini-jeux locaux. Defis de quartier. Classements par rue commercante. La rue devient un terrain de jeu collectif.", cta: "Bientot" },
    },
    gamification: { title: "Gamification de quartier", body: "L'engagement communautaire passe par le jeu. 26 mini-jeux ancres dans le territoire transforment chaque geste solidaire en une experience ludique et collective.", tags: { challenges: "Defis de quartier", rankings: "Classements", minigames: "26 mini-jeux", streetRankings: "Rankings par rue" } },
  },
  en: {
    meta: { title: "COLHYBRI Solution", description: "Community pool, Maps+ and gamification: the 3 pillars revitalizing your downtown." },
    hero: { badge: "SOLUTION", title: "How COLHYBRI revitalizes your downtown", subtitle: "Three pillars, one goal: bring your main street back to life." },
    pillars: {
      pool: { title: "Neighborhood community support", body: "3 EUR per month. 75% to the community pool. Services gifted at random to a neighbor, a merchant, a local cause. A digital neighborhood mutual.", cta: "Discover" },
      maps: { title: "Digital visibility", body: "Automated Google audit in 48 hours. Zero-friction onboarding for merchants. Continuous online monitoring. 10 EUR/month, 0% commission.", cta: "Discover" },
      gamification: { title: "Community engagement", body: "26 hyperlocal mini-games. Neighborhood challenges. Rankings by main street. The street becomes a collective playground.", cta: "Coming soon" },
    },
    gamification: { title: "Neighborhood gamification", body: "Community engagement through play. 26 territory-anchored mini-games turn every solidarity gesture into a fun collective experience.", tags: { challenges: "Neighborhood challenges", rankings: "Rankings", minigames: "26 mini-games", streetRankings: "Street rankings" } },
  },
  es: {
    meta: { title: "Solucion COLHYBRI", description: "Pool solidario, Maps+ y gamificacion: los 3 pilares que revitalizan tu centro urbano." },
    hero: { badge: "SOLUCION", title: "Como COLHYBRI revitaliza tu centro urbano", subtitle: "Tres pilares, un mismo objetivo: devolver la vida a tu calle comercial." },
    pillars: {
      pool: { title: "Solidaridad de barrio", body: "3 EUR al mes. 75% al pool solidario. Servicios ofrecidos al azar a un vecino, un comerciante, una causa local. Una mutua de barrio digital.", cta: "Descubrir" },
      maps: { title: "Visibilidad digital", body: "Auditoria Google automatizada en 48 horas. Onboarding sin friccion para comerciantes. Monitoreo continuo. 10 EUR/mes, 0% comision.", cta: "Descubrir" },
      gamification: { title: "Compromiso comunitario", body: "26 mini-juegos hiperlocales. Desafios de barrio. Rankings por calle comercial. La calle se convierte en un tablero colectivo.", cta: "Proximamente" },
    },
    gamification: { title: "Gamificacion de barrio", body: "El compromiso comunitario pasa por el juego. 26 mini-juegos anclados en el territorio transforman cada gesto solidario en una experiencia ludica.", tags: { challenges: "Desafios de barrio", rankings: "Rankings", minigames: "26 mini-juegos", streetRankings: "Rankings por calle" } },
  },
};

// ── mapsPlus ──
NS.mapsPlus = {
  fr: {
    meta: { title: "Maps+ par COLHYBRI", description: "75% des PME sont invisibles sur Google. Maps+ audite, onboarde et monitore en 48h pour 10 EUR/mois." },
    hero: { title: "75% des PME sont invisibles sur Google. Pas les votres.", subtitle: "Maps+ digitalise chaque commerce en 48 heures avec onboarding zero-friction." },
    features: {
      audit: { title: "Audit automatise", body: "Le Score Maps evalue la presence Google de chaque commerce sur une echelle 0-100 en 48 heures. 4 criteres : fiche, avis, photos, coherence NAP." },
      onboarding: { title: "Onboarding zero-friction", body: "Le commercant scanne un QR code, confirme ses informations pre-remplies et valide en 1 clic. 30 secondes, aucune competence technique requise." },
      reviews: { title: "Generation d'avis", body: "Un QR code post-visite simplifie le depot d'avis : le client scanne en sortant, note en 1 clic. Un commerce avec 10+ avis recents recoit 50% de clics en plus." },
      monitoring: { title: "Monitoring continu", body: "Alertes par SMS ou email sur les avis negatifs ou les baisses de positionnement. Temps de reaction : moins de 2 heures." },
    },
    demo: { title: "Testez votre Score Maps", subtitle: "Entrez le nom de votre commerce et decouvrez votre score de visibilite Google.", placeholder: "Nom de votre commerce", audit: "Auditer", scoreLabel: "Score Maps sur 100", profile: "Fiche Google", reviews: "Avis Google", photos: "Photos", hours: "Horaires", improvement: "Potentiel d'amelioration : {value}%", "status": { incomplete: "Incomplete", missing: "Non renseigne" } },
    cta: { title: "Optimisez votre commerce", button: "S'inscrire sur colhybri.com" },
  },
  en: {
    meta: { title: "Maps+ by COLHYBRI", description: "75% of small businesses are invisible on Google. Maps+ audits, onboards and monitors in 48h for 10 EUR/month." },
    hero: { title: "75% of small businesses are invisible on Google. Not yours.", subtitle: "Maps+ digitizes each business in 48 hours with zero-friction onboarding." },
    features: {
      audit: { title: "Automated audit", body: "Score Maps evaluates every shop Google presence on a 0-100 scale in 48 hours. 4 criteria: listing, reviews, photos, NAP consistency." },
      onboarding: { title: "Zero-friction onboarding", body: "The merchant scans a QR code, confirms pre-filled information and validates in 1 click. 30 seconds, no technical skills required." },
      reviews: { title: "Review generation", body: "A post-visit QR code simplifies review submission: the customer scans on the way out, rates in 1 click. A shop with 10+ recent reviews gets 50% more clicks." },
      monitoring: { title: "Continuous monitoring", body: "SMS or email alerts on negative reviews or ranking drops. Reaction time: under 2 hours." },
    },
    demo: { title: "Test your Score Maps", subtitle: "Enter your business name and discover your Google visibility score.", placeholder: "Your business name", audit: "Audit", scoreLabel: "Score Maps out of 100", profile: "Google listing", reviews: "Google reviews", photos: "Photos", hours: "Hours", improvement: "Improvement potential: {value}%", "status": { incomplete: "Incomplete", missing: "Not listed" } },
    cta: { title: "Optimize your business", button: "Sign up on colhybri.com" },
  },
  es: {
    meta: { title: "Maps+ por COLHYBRI", description: "El 75% de las PyMEs son invisibles en Google. Maps+ audita, hace onboarding y monitorea en 48h por 10 EUR/mes." },
    hero: { title: "El 75% de las PyMEs son invisibles en Google. Las tuyas no.", subtitle: "Maps+ digitaliza cada comercio en 48 horas con onboarding sin friccion." },
    features: {
      audit: { title: "Auditoria automatizada", body: "El Score Maps evalua la presencia Google de cada comercio en una escala 0-100 en 48 horas. 4 criterios: ficha, resenas, fotos, coherencia NAP." },
      onboarding: { title: "Onboarding sin friccion", body: "El comerciante escanea un codigo QR, confirma la informacion pre-rellenada y valida con 1 clic. 30 segundos, sin competencias tecnicas." },
      reviews: { title: "Generacion de resenas", body: "Un codigo QR post-visita simplifica el deposito de resenas: el cliente escanea al salir, puntua con 1 clic." },
      monitoring: { title: "Monitoreo continuo", body: "Alertas por SMS o email sobre resenas negativas o caidas de posicionamiento. Tiempo de reaccion: menos de 2 horas." },
    },
    demo: { title: "Prueba tu Score Maps", subtitle: "Ingresa el nombre de tu comercio y descubre tu puntuacion de visibilidad Google.", placeholder: "Nombre de tu comercio", audit: "Auditar", scoreLabel: "Score Maps sobre 100", profile: "Ficha Google", reviews: "Resenas Google", photos: "Fotos", hours: "Horarios", improvement: "Potencial de mejora: {value}%", "status": { incomplete: "Incompleta", missing: "No registrado" } },
    cta: { title: "Optimiza tu comercio", button: "Inscribete en colhybri.com" },
  },
};

// ── poolSolidaire ──
NS.poolSolidaire = {
  fr: {
    meta: { title: "Pool solidaire COLHYBRI", description: "La mutuelle de quartier du 21eme siecle. 3 EUR/mois, 75% redistribues en services offerts chez les commercants." },
    hero: { badge: "POOL SOLIDAIRE", title: "La mutuelle de quartier du 21eme siecle", subtitle: "3 EUR par mois, 75% redistribues en services offerts aleatoirement chez les commercants de votre quartier." },
    steps: {
      step1: { title: "Abonnez-vous (3 EUR)", body: "L'inscription prend 30 secondes. Scanner un QR code ou telecharger l'app sur colhybri.com. Sans engagement." },
      step2: { title: "75% va au pool solidaire", body: "Chaque mois, 2,25 EUR de votre cotisation alimentent le pool solidaire communautaire de votre quartier." },
      step3: { title: "Distribution aleatoire", body: "Le pool est redistribue sous forme de bons. Les beneficiaires sont tires au sort par un algorithme transparent et verifiable." },
      step4: { title: "Un voisin profite d'un service offert", body: "Les beneficiaires profitent d'un service gratuit chez un commercant partenaire : cafe, coiffeur, pressing, boulangerie." },
    },
    notCharity: { title: "Ce n'est PAS de la charite", body: "COLHYBRI est une mutuelle de quartier digitale. Comme la Securite sociale est nee du mutualisme, COLHYBRI fait naitre la solidarite de proximite. Chaque abonne paie la meme cotisation et a les memes chances de recevoir. Personne n'est humilie. C'est symetrique." },
    cta: { title: "Rejoindre la mutuelle", button: "S'inscrire sur colhybri.com" },
  },
  en: {
    meta: { title: "COLHYBRI Community Pool", description: "The neighborhood mutual of the 21st century. 3 EUR/month, 75% redistributed as gifted services at local shops." },
    hero: { badge: "COMMUNITY POOL", title: "The neighborhood mutual of the 21st century", subtitle: "3 EUR per month, 75% redistributed as services randomly gifted at your neighborhood shops." },
    steps: {
      step1: { title: "Subscribe (3 EUR)", body: "Signup takes 30 seconds. Scan a QR code or download the app at colhybri.com. No commitment." },
      step2: { title: "75% goes to the community pool", body: "Each month, 2.25 EUR of your fee feeds your neighborhood community pool." },
      step3: { title: "Random distribution", body: "The pool is redistributed as vouchers. Beneficiaries are drawn at random by a transparent, verifiable algorithm." },
      step4: { title: "A neighbor enjoys a gifted service", body: "Beneficiaries enjoy a free service at a partner shop: coffee, hairdresser, dry cleaning, bakery." },
    },
    notCharity: { title: "This is NOT charity", body: "COLHYBRI is a digital neighborhood mutual. Just as Social Security was born from mutualism, COLHYBRI creates local community support. Every subscriber pays the same fee and has equal chances to receive. Nobody is humiliated. It is symmetric." },
    cta: { title: "Join the mutual", button: "Sign up on colhybri.com" },
  },
  es: {
    meta: { title: "Pool solidario COLHYBRI", description: "La mutua de barrio del siglo XXI. 3 EUR/mes, 75% redistribuidos en servicios ofrecidos en los comercios." },
    hero: { badge: "POOL SOLIDARIO", title: "La mutua de barrio del siglo XXI", subtitle: "3 EUR al mes, 75% redistribuidos en servicios ofrecidos aleatoriamente en los comercios de tu barrio." },
    steps: {
      step1: { title: "Suscribete (3 EUR)", body: "La inscripcion toma 30 segundos. Escanea un codigo QR o descarga la app en colhybri.com. Sin compromiso." },
      step2: { title: "75% va al pool solidario", body: "Cada mes, 2,25 EUR de tu cuota alimentan el pool solidario comunitario de tu barrio." },
      step3: { title: "Distribucion aleatoria", body: "El pool se redistribuye en forma de bonos. Los beneficiarios son elegidos al azar por un algoritmo transparente y verificable." },
      step4: { title: "Un vecino disfruta de un servicio ofrecido", body: "Los beneficiarios disfrutan de un servicio gratuito en un comercio asociado: cafe, peluquero, tintoreria, panaderia." },
    },
    notCharity: { title: "Esto NO es caridad", body: "COLHYBRI es una mutua de barrio digital. Asi como la Seguridad Social nacio del mutualismo, COLHYBRI crea solidaridad de proximidad. Cada suscriptor paga la misma cuota y tiene las mismas oportunidades. Nadie es humillado. Es simetrico." },
    cta: { title: "Unirse a la mutua", button: "Inscribete en colhybri.com" },
  },
};

// ── impactPages (5 regions) ──
function mkImpact(fr, en, es) { return { fr, en, es }; }
NS['impactPages'] = {
  fr: {
    france: { badge: "IMPACT FRANCE", title: "La France reinvente ses centres-villes", subtitle: "1 732 ZRCV, 244 Action Coeur de Ville, 1 646 Petites Villes de Demain.", stats: [{value:"1 732",label:"communes ZRCV 2026"},{value:"244",label:"Action Coeur de Ville"},{value:"1 646",label:"Petites Villes de Demain"},{value:"5 Mds EUR",label:"mobilises 2023-2026"}], context: ["La devitalisation des centres-villes est le premier enjeu des municipales 2026. 55% des villes moyennes ont un taux de vacance commerciale superieur a 10%.","Le gouvernement a lance des managers de commerce finances par les CCI et un groupe de travail au Conseil National du Commerce.","Les programmes nationaux (ACV, PVD, ZRCV) couvrent 1 890 communes mais manquent d'outils de mesure numerique."], proposition: {title:"La proposition COLHYBRI",body:"COLHYBRI est le modele Barcelona en SaaS, accessible a toute commune de 25 000 habitants. Pilote gratuit 90 jours."}, barometer: {title:"Barometre Confiance et Fraternite",subtitle:"Donnees IFOP / Labo de la Fraternite 2026",quote:"COLHYBRI est le tiers-lieu digital qui comble ce vide.","0":{value:"79%",label:"aspirent a la fraternite"},"1":{value:"55%",label:"vivent la solitude"},"2":{value:"31%",label:"n'ont aucun lieu de rencontre"}} },
    usa: { badge: "IMPACT USA", title: "Revitaliser le Rust Belt, une Main Street a la fois", subtitle: "8 764 Opportunity Zones. 1 200+ Main Street America communities.", stats: [{value:"8 764",label:"Opportunity Zones (OZ 1.0)"},{value:"6 544",label:"nouvelles OZ 2.0 (juillet 2026)"},{value:"1 200+",label:"communautes Main Street America"},{value:"$23.7M",label:"RAISE grant East Moline"}], context: ["Le Rust Belt traverse une transformation historique. Pittsburgh, Cleveland, Canton et Allentown passent de l'industrie lourde a la tech et au developpement mixte de centre-ville.","Le One Big Beautiful Bill Act (2025) rend les Opportunity Zones permanentes et lance OZ 2.0 en juillet 2026.","Canton (Ohio) est le blueprint : un developpeur a restaure 42 batiments en centre-ville grace aux credits d'impot historiques (20% federal + 25% etat)."], proposition: {title:"La proposition COLHYBRI",body:"COLHYBRI is the SaaS that makes Main Street measurable. Vous avez les incitations OZ. Nous avons le dashboard digital."}, miami: {title:"Miami, ville pilote US",intro:"Miami-Dade combine un ecosysteme dense de commerces locaux, une population bilingue et un agenda de revitalisation des centres-villes.",reason1:"Un tissu de commerces de proximite dense le long des Main Streets",reason2:"Une population bilingue alignee avec notre produit multilingue",reason3:"Une porte d'entree vers l'Amerique Latine pour l'expansion regionale",reason4:"Des institutions locales engagees dans la revitalisation"} },
    europe: { badge: "IMPACT EUROPE", title: "Barcelona montre la voie. COLHYBRI la rend accessible.", subtitle: "ECoSR 2026. EUI Call 4 : 60M EUR FEDER. 28 villes candidates.", stats: [{value:"Barcelona",label:"Capitale Europeenne du Petit Commerce 2026"},{value:"60M EUR",label:"EUI Call 4 FEDER"},{value:"28 villes",label:"candidates ECoSR dans 13 pays"},{value:"40+",label:"initiatives digitales a Barcelona"}], context: ["L'UE a cree en 2026 le label Capitale Europeenne du Petit Commerce avec 3 laureates : Barcelona, Caldas da Rainha, Silandro.","Les 4 criteres : durabilite, digitalisation, entrepreneuriat, vitalite urbaine.","L'EU Agenda for Cities (decembre 2025) structure 3 piliers : dialogue territorial, simplification, investissement strategique."], proposition: {title:"La proposition COLHYBRI",body:"COLHYBRI rend le modele Barcelona accessible en SaaS a toute ville UE de 25 000+ habitants. Les 4 criteres ECoSR sont les 4 piliers de COLHYBRI."} },
    latam: { badge: "IMPACT AMERIQUE LATINE", title: "Formaliser le commerce informel par la solidarite digitale", subtitle: "55% d'emploi informel. 2,1% de croissance 2026.", stats: [{value:"55%",label:"d'emploi informel en Amerique Latine"},{value:"2,1%",label:"croissance 2026 (plus faible au monde)"},{value:"67M",label:"travailleurs informels"},{value:"$3/mois",label:"abonnement COLHYBRI"}], context: ["L'Amerique Latine a la croissance la plus faible au monde en 2026. 55% des travailleurs sont informels, un taux stable depuis 2018.","La formalisation du commerce de proximite est la priorite de l'IDB et de la Banque Mondiale pour elargir l'assiette fiscale.","Le mobile-first est le seul canal d'acces viable pour cette population."], proposition: {title:"La proposition COLHYBRI",body:"COLHYBRI formalise le commerce informel par la digitalisation zero-friction. 3 USD/mois. Pas de credit check, pas de banque requise."} },
    africa: { badge: "IMPACT AFRIQUE", title: "La premiere data commerce locale pour l'Afrique", subtitle: "4,3% de croissance 2026. Zero outil digital dedie.", stats: [{value:"4,3%",label:"croissance 2026"},{value:"4,5%",label:"croissance 2027"},{value:"0",label:"outils digitaux commerce informel urbain"},{value:"Mobile-first",label:"seul canal viable"}], context: ["L'Afrique subsaharienne connait la croissance la plus rapide au monde mais insuffisante pour absorber l'expansion de la force de travail.","Le commerce informel urbain est le premier employeur mais n'a aucun outil digital.","L'urbanisation rapide cree un besoin immediat de structuration du commerce de proximite."], proposition: {title:"La proposition COLHYBRI",body:"COLHYBRI mobile-first pour le commerce informel urbain africain. Premiere data commerce locale. Pilote cible : Dakar, Abidjan, Tunis."} },
  },
  en: {
    france: { badge: "FRANCE IMPACT", title: "France is reinventing its downtowns", subtitle: "1,732 ZRCV, 244 Action Coeur de Ville, 1,646 Petites Villes de Demain.", stats: [{value:"1,732",label:"2026 ZRCV towns"},{value:"244",label:"Action Coeur de Ville"},{value:"1,646",label:"Petites Villes de Demain"},{value:"5B EUR",label:"mobilized 2023-2026"}], context: ["Downtown devitalization is the top issue for the 2026 municipal elections. 55% of midsize towns have commercial vacancy rates above 10%.","The government has launched commerce managers funded by Chambers of Commerce and a working group at the National Commerce Council.","National programs (ACV, PVD, ZRCV) cover 1,890 towns but lack digital measurement tools."], proposition: {title:"The COLHYBRI proposition",body:"COLHYBRI is the Barcelona model as SaaS, accessible to any town of 25,000 inhabitants. Free 90-day pilot."}, barometer: {title:"Trust and Fraternity Barometer",subtitle:"IFOP / Fraternity Lab 2026 data",quote:"COLHYBRI is the digital third place that fills this void.","0":{value:"79%",label:"aspire to fraternity"},"1":{value:"55%",label:"experience loneliness"},"2":{value:"31%",label:"have no meeting place"}} },
    usa: { badge: "USA IMPACT", title: "Revitalizing the Rust Belt, one Main Street at a time", subtitle: "8,764 Opportunity Zones. 1,200+ Main Street America communities.", stats: [{value:"8,764",label:"Opportunity Zones (OZ 1.0)"},{value:"6,544",label:"new OZ 2.0 (July 2026)"},{value:"1,200+",label:"Main Street America communities"},{value:"$23.7M",label:"East Moline RAISE grant"}], context: ["The Rust Belt is undergoing a historic transformation. Pittsburgh, Cleveland, Canton and Allentown are pivoting from heavy manufacturing to tech and mixed-use downtown development.","The One Big Beautiful Bill Act (2025) makes Opportunity Zones permanent and launches OZ 2.0 in July 2026.","Canton (Ohio) is the blueprint: one developer restored 42 buildings using historic tax credits (20% federal + 25% state)."], proposition: {title:"The COLHYBRI proposition",body:"COLHYBRI is the SaaS that makes Main Street measurable. You have the OZ incentives. We have the digital dashboard."}, miami: {title:"Miami, US pilot city",intro:"Miami-Dade combines a dense local commerce ecosystem, a bilingual population and a downtown revitalization agenda.",reason1:"A dense network of neighborhood shops along Main Streets",reason2:"A bilingual population aligned with our multilingual product",reason3:"A gateway to Latin America for regional expansion",reason4:"Local institutions engaged in downtown revitalization"} },
    europe: { badge: "EUROPE IMPACT", title: "Barcelona leads the way. COLHYBRI makes it accessible.", subtitle: "ECoSR 2026. EUI Call 4: 60M EUR ERDF. 28 candidate cities.", stats: [{value:"Barcelona",label:"European Capital of Small Retail 2026"},{value:"60M EUR",label:"EUI Call 4 ERDF"},{value:"28 cities",label:"ECoSR candidates in 13 countries"},{value:"40+",label:"digital initiatives in Barcelona"}], context: ["The EU created the European Capital of Small Retail label in 2026 with 3 laureates: Barcelona, Caldas da Rainha, Silandro.","The 4 criteria: sustainability, digitalization, entrepreneurship, urban vitality.","The EU Agenda for Cities (December 2025) structures 3 pillars: territorial dialogue, simplification, strategic investment."], proposition: {title:"The COLHYBRI proposition",body:"COLHYBRI makes the Barcelona model accessible as SaaS to any EU city of 25,000+ inhabitants. The 4 ECoSR criteria are the 4 pillars of COLHYBRI."} },
    latam: { badge: "LATIN AMERICA IMPACT", title: "Formalizing informal commerce through digital community support", subtitle: "55% informal employment. 2.1% growth 2026.", stats: [{value:"55%",label:"informal employment in Latin America"},{value:"2.1%",label:"growth 2026 (lowest worldwide)"},{value:"67M",label:"informal workers"},{value:"$3/mo",label:"COLHYBRI subscription"}], context: ["Latin America has the lowest growth worldwide in 2026. 55% of workers are informal, a rate stable since 2018.","Commerce formalization is the priority of the IDB and World Bank to broaden the tax base.","Mobile-first is the only viable access channel for this population."], proposition: {title:"The COLHYBRI proposition",body:"COLHYBRI formalizes informal commerce through zero-friction digitalization. $3/month. No credit check, no bank account required."} },
    africa: { badge: "AFRICA IMPACT", title: "The first local commerce data for Africa", subtitle: "4.3% growth 2026. Zero dedicated digital tool.", stats: [{value:"4.3%",label:"growth 2026"},{value:"4.5%",label:"growth 2027"},{value:"0",label:"digital tools for urban informal commerce"},{value:"Mobile-first",label:"only viable channel"}], context: ["Sub-Saharan Africa has the fastest growth worldwide but insufficient to absorb the expanding workforce.","Urban informal commerce is the top employer but has no digital tool.","Rapid urbanization creates an immediate need for local commerce structuring."], proposition: {title:"The COLHYBRI proposition",body:"COLHYBRI mobile-first for African urban informal commerce. First local commerce data. Target pilot: Dakar, Abidjan, Tunis."} },
  },
  es: {
    france: { badge: "IMPACTO FRANCIA", title: "Francia reinventa sus centros urbanos", subtitle: "1.732 ZRCV, 244 Action Coeur de Ville, 1.646 Petites Villes de Demain.", stats: [{value:"1.732",label:"municipios ZRCV 2026"},{value:"244",label:"Action Coeur de Ville"},{value:"1.646",label:"Petites Villes de Demain"},{value:"5.000M EUR",label:"movilizados 2023-2026"}], context: ["La desvitalizacion de los centros urbanos es el primer tema de las municipales 2026. El 55% de las ciudades medianas tiene una tasa de vacancia comercial superior al 10%.","El gobierno ha lanzado gestores de comercio financiados por las CCI.","Los programas nacionales (ACV, PVD, ZRCV) cubren 1.890 municipios pero carecen de herramientas de medicion digital."], proposition: {title:"La propuesta COLHYBRI",body:"COLHYBRI es el modelo Barcelona en SaaS, accesible a cualquier municipio de 25.000 habitantes. Piloto gratuito de 90 dias."}, barometer: {title:"Barometro de Confianza y Fraternidad",subtitle:"Datos IFOP / Laboratorio de la Fraternidad 2026",quote:"COLHYBRI es el tercer lugar digital que llena este vacio.","0":{value:"79%",label:"aspiran a la fraternidad"},"1":{value:"55%",label:"viven la soledad"},"2":{value:"31%",label:"no tienen lugar de encuentro"}} },
    usa: { badge: "IMPACTO EE.UU.", title: "Revitalizar el Rust Belt, una Main Street a la vez", subtitle: "8.764 Opportunity Zones. 1.200+ comunidades Main Street America.", stats: [{value:"8.764",label:"Opportunity Zones (OZ 1.0)"},{value:"6.544",label:"nuevas OZ 2.0 (julio 2026)"},{value:"1.200+",label:"comunidades Main Street America"},{value:"$23.7M",label:"RAISE grant East Moline"}], context: ["El Rust Belt atraviesa una transformacion historica.","El One Big Beautiful Bill Act (2025) hace permanentes las Opportunity Zones y lanza OZ 2.0 en julio de 2026.","Canton (Ohio) es el modelo: un desarrollador restauro 42 edificios con creditos fiscales historicos (20% federal + 25% estatal)."], proposition: {title:"La propuesta COLHYBRI",body:"COLHYBRI es el SaaS que hace medible Main Street."}, miami: {title:"Miami, ciudad piloto US",intro:"Miami-Dade combina un ecosistema denso de comercios locales, una poblacion bilingue y una agenda de revitalizacion.",reason1:"Un tejido denso de comercios de proximidad",reason2:"Una poblacion bilingue alineada con nuestro producto",reason3:"Una puerta de entrada a America Latina",reason4:"Instituciones locales comprometidas con la revitalizacion"} },
    europe: { badge: "IMPACTO EUROPA", title: "Barcelona muestra el camino. COLHYBRI lo hace accesible.", subtitle: "ECoSR 2026. EUI Call 4: 60M EUR FEDER. 28 ciudades candidatas.", stats: [{value:"Barcelona",label:"Capital Europea del Pequeno Comercio 2026"},{value:"60M EUR",label:"EUI Call 4 FEDER"},{value:"28 ciudades",label:"candidatas ECoSR en 13 paises"},{value:"40+",label:"iniciativas digitales en Barcelona"}], context: ["La UE creo en 2026 el sello Capital Europea del Pequeno Comercio.","Los 4 criterios: sostenibilidad, digitalizacion, emprendimiento, vitalidad urbana.","La EU Agenda for Cities (diciembre 2025) estructura 3 pilares."], proposition: {title:"La propuesta COLHYBRI",body:"COLHYBRI hace accesible el modelo Barcelona en SaaS a cualquier ciudad UE de 25.000+ habitantes."} },
    latam: { badge: "IMPACTO AMERICA LATINA", title: "Formalizar el comercio informal a traves de la solidaridad digital", subtitle: "55% de empleo informal. Crecimiento 2,1% en 2026.", stats: [{value:"55%",label:"de empleo informal en America Latina"},{value:"2,1%",label:"crecimiento 2026"},{value:"67M",label:"trabajadores informales"},{value:"$3/mes",label:"suscripcion COLHYBRI"}], context: ["America Latina tiene el crecimiento mas bajo del mundo en 2026.","La formalizacion del comercio es la prioridad del BID y el Banco Mundial.","El mobile-first es el unico canal de acceso viable."], proposition: {title:"La propuesta COLHYBRI",body:"COLHYBRI formaliza el comercio informal por la digitalizacion sin friccion. 3 USD/mes."} },
    africa: { badge: "IMPACTO AFRICA", title: "La primera data de comercio local para Africa", subtitle: "Crecimiento 4,3% en 2026. Cero herramienta digital dedicada.", stats: [{value:"4,3%",label:"crecimiento 2026"},{value:"4,5%",label:"crecimiento 2027"},{value:"0",label:"herramientas digitales comercio informal"},{value:"Mobile-first",label:"unico canal viable"}], context: ["Africa subsahariana tiene el crecimiento mas rapido del mundo pero insuficiente.","El comercio informal urbano es el primer empleador pero no tiene herramienta digital.","La urbanizacion rapida crea una necesidad inmediata."], proposition: {title:"La propuesta COLHYBRI",body:"COLHYBRI mobile-first para el comercio informal urbano africano. Piloto: Dakar, Abidjan, Tunez."} },
  },
};

// ── forCitiesPage ──
NS.forCitiesPage = {
  fr: {
    meta: { title: "COLHYBRI pour les collectivites", description: "Le dashboard de vitalite commerciale dont votre centre-ville a besoin. Pilote gratuit 90 jours sur 50 commerces." },
    hero: { badge: "COLLECTIVITES", title: "Le dashboard de vitalite commerciale dont votre centre-ville a besoin", subtitle: "Pilote gratuit 90 jours sur 50 commerces de votre commune" },
    context: { title: "Le contexte", stats: [{value:"1 732",label:"communes ZRCV 2026"},{value:"244",label:"communes Action Coeur de Ville"},{value:"1 646",label:"communes Petites Villes de Demain"},{value:"Barcelona",label:"Capitale EU Petit Commerce 2026"}] },
    features: { title: "Ce que vous recevez", feature1: {title:"Score Maps en 48h",body:"Audit automatise de la presence Google de tous les commerces de votre zone."}, feature2: {title:"Dashboard mensuel",body:"Visualisez l'evolution de la vitalite commerciale de votre centre-ville en temps reel."}, feature3: {title:"Rapport d'impact municipal",body:"Document pret pour le conseil municipal avec metriques, tendances et recommandations."}, feature4: {title:"Accompagnement terrain",body:"Deploiement assiste, formation des managers de commerce, onboarding des commercants."} },
    pilot: { title: "90 jours gratuits. Zero risque.", bullet1: "50 commerces audites et digitalises", bullet2: "Dashboard operationnel des le premier mois", bullet3: "Zero engagement, zero cout pendant le pilote", price: "Apres le pilote : 500 EUR/mois (10 EUR x 50 commerces)", note: "Moins qu'un demi-poste de stagiaire." },
    barcelona: { badge: "ECOSR 2026", title: "Le modele Barcelona", body: "En 2026, Barcelona a ete nommee Capitale Europeenne du Petit Commerce. 40+ initiatives de digitalisation, durabilite et entrepreneuriat. COLHYBRI rend ce modele accessible a toute ville de 25 000 habitants, en SaaS.", stats: [{value:"13,2%",label:"du PIB = commerce local"},{value:"152 000",label:"emplois directs"},{value:"90,9%",label:"de locaux actifs"}] },
    form: { title: "Planifier une demo pour votre commune", subtitle: "Nous revenons vers vous sous 48 heures." },
  },
  en: {
    meta: { title: "COLHYBRI for Cities", description: "The downtown vitality dashboard your city needs. Free 90-day pilot on 50 businesses." },
    hero: { badge: "FOR CITIES", title: "The downtown vitality dashboard your city needs", subtitle: "Free 90-day pilot on 50 businesses in your city" },
    context: { title: "Context", stats: [{value:"1,732",label:"2026 ZRCV towns"},{value:"244",label:"Action Coeur de Ville"},{value:"1,646",label:"Petites Villes de Demain"},{value:"Barcelona",label:"EU Capital Small Retail 2026"}] },
    features: { title: "What you receive", feature1: {title:"Score Maps in 48h",body:"Automated audit of Google presence for every business in your zone."}, feature2: {title:"Monthly dashboard",body:"Visualize the evolution of your downtown commercial vitality in real time."}, feature3: {title:"Municipal impact report",body:"Document ready for city council with metrics, trends and recommendations."}, feature4: {title:"Field support",body:"Assisted deployment, commerce manager training, merchant onboarding."} },
    pilot: { title: "90 days free. Zero risk.", bullet1: "50 businesses audited and digitized", bullet2: "Operational dashboard from month one", bullet3: "Zero commitment, zero cost during the pilot", price: "After the pilot: 500 EUR/month (10 EUR x 50 businesses)", note: "Less than half an intern's salary." },
    barcelona: { badge: "ECOSR 2026", title: "The Barcelona model", body: "In 2026, Barcelona was named European Capital of Small Retail. 40+ digitalization, sustainability and entrepreneurship initiatives. COLHYBRI makes this model accessible to any city of 25,000 inhabitants, as SaaS.", stats: [{value:"13.2%",label:"of GDP = local commerce"},{value:"152,000",label:"direct jobs"},{value:"90.9%",label:"active premises"}] },
    form: { title: "Book a demo for your city", subtitle: "We get back to you within 48 hours." },
  },
  es: {
    meta: { title: "COLHYBRI para colectividades", description: "El dashboard de vitalidad comercial que tu centro urbano necesita. Piloto gratuito 90 dias." },
    hero: { badge: "COLECTIVIDADES", title: "El dashboard de vitalidad comercial que tu centro urbano necesita", subtitle: "Piloto gratuito de 90 dias sobre 50 comercios de tu municipio" },
    context: { title: "El contexto", stats: [{value:"1.732",label:"municipios ZRCV 2026"},{value:"244",label:"Action Coeur de Ville"},{value:"1.646",label:"Petites Villes de Demain"},{value:"Barcelona",label:"Capital EU Pequeno Comercio 2026"}] },
    features: { title: "Que recibes", feature1: {title:"Score Maps en 48h",body:"Auditoria automatizada de la presencia Google de todos los comercios de tu zona."}, feature2: {title:"Dashboard mensual",body:"Visualiza la evolucion de la vitalidad comercial en tiempo real."}, feature3: {title:"Informe de impacto municipal",body:"Documento listo para el consejo municipal."}, feature4: {title:"Acompanamiento en terreno",body:"Despliegue asistido, formacion de gestores, onboarding de comerciantes."} },
    pilot: { title: "90 dias gratis. Cero riesgo.", bullet1: "50 comercios auditados y digitalizados", bullet2: "Dashboard operacional desde el primer mes", bullet3: "Cero compromiso, cero coste durante el piloto", price: "Despues del piloto: 500 EUR/mes (10 EUR x 50 comercios)", note: "Menos que medio puesto de becario." },
    barcelona: { badge: "ECOSR 2026", title: "El modelo Barcelona", body: "En 2026, Barcelona fue nombrada Capital Europea del Pequeno Comercio. COLHYBRI hace este modelo accesible a cualquier ciudad de 25.000 habitantes.", stats: [{value:"13,2%",label:"del PIB = comercio local"},{value:"152.000",label:"empleos directos"},{value:"90,9%",label:"de locales activos"}] },
    form: { title: "Planificar una demo para tu municipio", subtitle: "Te contactamos en 48 horas." },
  },
};

// ── investorsPage ──
NS.investorsPage = {
  fr: {
    meta: { title: "Investir dans COLHYBRI", description: "Pre-seed 200K-350K EUR. Valorisation 500K-800K EUR. ARR projete Y3 : 2,31M EUR." },
    hero: { badge: "INVESTISSEURS", title: "Investir dans la revitalisation des centres-villes", subtitle: "Pre-seed | 200K - 350K EUR" },
    keyNumbers: { title: "Chiffres cles", "0":{value:"500K-800K EUR",label:"Valorisation pre-money (3 methodes)"},"1":{value:"2,31M EUR",label:"ARR projete Y3"},"2":{value:"450 000",label:"commerces proximite France (TAM)"},"3":{value:"25+ pays",label:"expansion internationale Y5"},"4":{value:"1,3M-2,15M EUR",label:"ONLYMORE Group consolide"},"5":{value:"211K EUR",label:"actifs techniques developpes"} },
    flywheel: { title: "Le modele", subtitle: "Un ecosysteme qui boucle.", step1: "COLHYBRI (B2C 3 EUR)", step2: "Pool solidaire", step3: "Commercants (B2B 10 EUR)", step4: "CROWNIUM (sport)", step5: "ONLYMORE FINANCE (credit)", quote: "Les abonnements B2C financent le B2B. Le B2B finance les investissements sportifs. Le credit boucle le cycle." },
    useOfFunds: { title: "Use of funds", product: {title:"Produit",desc:"Developpement plateforme, Maps+, gamification"}, gtm: {title:"Go-to-market",desc:"Lancement France, premiers pilotes villes"}, ops: {title:"Operations",desc:"Equipe, legal, comptabilite"} },
    team: { title: "L'equipe", florent: {role:"Fondateur et CEO",bio:"Autodidacte. De la construction a la fintech. 220 ans de mutualisme dans l'ADN."}, joao: {role:"CFO",bio:"Structuration financiere et reporting investisseurs."}, stephane: {role:"Fundraising (Winvesty)",bio:"Levee de fonds et reseau investisseurs."} },
    deck: { title: "Dossier investisseur", body: "Recevez le dossier complet par email.", cta: "Demander le dossier" },
    form: { title: "Prendre rendez-vous", subtitle: "Planifiez un appel avec l'equipe fondatrice." },
  },
  en: {
    meta: { title: "Invest in COLHYBRI", description: "Pre-seed 200K-350K EUR. Valuation 500K-800K EUR. Projected ARR Y3: 2.31M EUR." },
    hero: { badge: "INVESTORS", title: "Invest in downtown revitalization", subtitle: "Pre-seed | 200K - 350K EUR" },
    keyNumbers: { title: "Key numbers", "0":{value:"500K-800K EUR",label:"Pre-money valuation (3 methods)"},"1":{value:"2.31M EUR",label:"Projected ARR Y3"},"2":{value:"450,000",label:"local businesses in France (TAM)"},"3":{value:"25+ countries",label:"international expansion Y5"},"4":{value:"1.3M-2.15M EUR",label:"ONLYMORE Group consolidated"},"5":{value:"211K EUR",label:"technical assets developed"} },
    flywheel: { title: "The model", subtitle: "A self-closing ecosystem.", step1: "COLHYBRI (B2C 3 EUR)", step2: "Community pool", step3: "Merchants (B2B 10 EUR)", step4: "CROWNIUM (sport)", step5: "ONLYMORE FINANCE (credit)", quote: "B2C subscriptions fund B2B. B2B funds sports investments. Credit closes the loop." },
    useOfFunds: { title: "Use of funds", product: {title:"Product",desc:"Platform development, Maps+, gamification"}, gtm: {title:"Go-to-market",desc:"France launch, first city pilots"}, ops: {title:"Operations",desc:"Team, legal, accounting"} },
    team: { title: "The team", florent: {role:"Founder and CEO",bio:"Self-taught. From construction to fintech. 220 years of mutualism in the DNA."}, joao: {role:"CFO",bio:"Financial structuring and investor reporting."}, stephane: {role:"Fundraising (Winvesty)",bio:"Capital raise and investor network."} },
    deck: { title: "Investor deck", body: "Receive the full deck by email.", cta: "Request the deck" },
    form: { title: "Book a meeting", subtitle: "Schedule a call with the founding team." },
  },
  es: {
    meta: { title: "Invertir en COLHYBRI", description: "Pre-seed 200K-350K EUR. Valoracion 500K-800K EUR. ARR proyectado Y3: 2,31M EUR." },
    hero: { badge: "INVERSORES", title: "Invertir en la revitalizacion de los centros urbanos", subtitle: "Pre-seed | 200K - 350K EUR" },
    keyNumbers: { title: "Cifras clave", "0":{value:"500K-800K EUR",label:"Valoracion pre-money (3 metodos)"},"1":{value:"2,31M EUR",label:"ARR proyectado Y3"},"2":{value:"450.000",label:"comercios proximidad Francia (TAM)"},"3":{value:"25+ paises",label:"expansion internacional Y5"},"4":{value:"1,3M-2,15M EUR",label:"ONLYMORE Group consolidado"},"5":{value:"211K EUR",label:"activos tecnicos desarrollados"} },
    flywheel: { title: "El modelo", subtitle: "Un ecosistema que cierra el ciclo.", step1: "COLHYBRI (B2C 3 EUR)", step2: "Pool solidario", step3: "Comerciantes (B2B 10 EUR)", step4: "CROWNIUM (deporte)", step5: "ONLYMORE FINANCE (credito)", quote: "Las suscripciones B2C financian el B2B. El B2B financia las inversiones deportivas. El credito cierra el ciclo." },
    useOfFunds: { title: "Use of funds", product: {title:"Producto",desc:"Desarrollo plataforma, Maps+, gamificacion"}, gtm: {title:"Go-to-market",desc:"Lanzamiento Francia, primeros pilotos"}, ops: {title:"Operaciones",desc:"Equipo, legal, contabilidad"} },
    team: { title: "El equipo", florent: {role:"Fundador y CEO",bio:"Autodidacta. De la construccion a la fintech. 220 anos de mutualismo en el ADN."}, joao: {role:"CFO",bio:"Estructuracion financiera y reporting inversores."}, stephane: {role:"Fundraising (Winvesty)",bio:"Levantamiento de capital y red de inversores."} },
    deck: { title: "Dossier inversor", body: "Recibe el dossier completo por email.", cta: "Solicitar el dossier" },
    form: { title: "Reservar una reunion", subtitle: "Agenda una llamada con el equipo fundador." },
  },
};

// ── pressePage ──
NS.pressePage = {
  fr: {
    meta: { title: "Presse COLHYBRI", description: "Kit presse, chiffres cles, bio fondateur. Contact : onlymore2024@gmail.com" },
    hero: { badge: "PRESSE", title: "Kit presse COLHYBRI", subtitle: "Logos, chiffres, bio fondateur et contact presse." },
    logo: { title: "Logo COLHYBRI", body: "Telechargez le logo SVG haute resolution.", download: "Telecharger le SVG" },
    figures: { title: "Chiffres cles", items: ["3 EUR/mois pour les particuliers, 10 EUR/mois pour les commercants","0% de commission (vs 30% UberEats, 25% JustEat)","75% des abonnements redistribues via le pool solidaire","1 732 communes ZRCV en France en 2026","Expansion prevue dans 25+ pays d'ici 2031"] },
    founder: { title: "Le fondateur", bio: "Florent Gibert, fondateur et CEO d'ONLYMORE Group, est un autodidacte passe de la construction et la livraison a la fintech. Base a Rodilhan en Occitanie, il a concu COLHYBRI pour digitaliser 220 ans de mutualisme francais et revitaliser les centres-villes." },
    releases: { title: "Communiques de presse", body: "Communiques a venir. Inscrivez-vous pour etre notifie." },
    contact: { title: "Contact presse" },
  },
  en: {
    meta: { title: "COLHYBRI Press", description: "Press kit, key figures, founder bio. Contact: onlymore2024@gmail.com" },
    hero: { badge: "PRESS", title: "COLHYBRI Press Kit", subtitle: "Logos, key figures, founder bio and press contact." },
    logo: { title: "COLHYBRI Logo", body: "Download the high-resolution SVG logo.", download: "Download SVG" },
    figures: { title: "Key figures", items: ["3 EUR/month for individuals, 10 EUR/month for merchants","0% commission (vs 30% UberEats, 25% JustEat)","75% of subscriptions redistributed via the community pool","1,732 ZRCV towns in France in 2026","Expansion planned in 25+ countries by 2031"] },
    founder: { title: "The founder", bio: "Florent Gibert, founder and CEO of ONLYMORE Group, is a self-taught entrepreneur who went from construction and delivery to fintech. Based in Rodilhan, Occitanie, he designed COLHYBRI to digitize 220 years of French mutualism and revitalize downtowns." },
    releases: { title: "Press releases", body: "Press releases coming soon. Sign up to be notified." },
    contact: { title: "Press contact" },
  },
  es: {
    meta: { title: "Prensa COLHYBRI", description: "Kit de prensa, cifras clave, bio fundador. Contacto: onlymore2024@gmail.com" },
    hero: { badge: "PRENSA", title: "Kit de prensa COLHYBRI", subtitle: "Logos, cifras clave, bio fundador y contacto de prensa." },
    logo: { title: "Logo COLHYBRI", body: "Descarga el logo SVG en alta resolucion.", download: "Descargar SVG" },
    figures: { title: "Cifras clave", items: ["3 EUR/mes para particulares, 10 EUR/mes para comerciantes","0% comision (vs 30% UberEats, 25% JustEat)","75% de las suscripciones redistribuidas via el pool solidario","1.732 municipios ZRCV en Francia en 2026","Expansion prevista en 25+ paises hasta 2031"] },
    founder: { title: "El fundador", bio: "Florent Gibert, fundador y CEO de ONLYMORE Group, es un autodidacta que paso de la construccion y la entrega a la fintech. Basado en Rodilhan, Occitania, diseno COLHYBRI para digitalizar 220 anos de mutualismo frances." },
    releases: { title: "Comunicados de prensa", body: "Comunicados proximamente. Registrate para ser notificado." },
    contact: { title: "Contacto de prensa" },
  },
};

// ── forms (city, investor, general) ──
NS.forms = {
  fr: {
    city: { firstName:"Prenom", lastName:"Nom", role:"Fonction", rolePlaceholder:"Selectionnez votre fonction", roles: {mayor:"Maire",deputy:"Adjoint.e",dgs:"DGS",manager:"Manager de commerce",cci:"CCI",intercom:"Intercommunalite",other:"Autre"}, city:"Commune", postcode:"Code postal", email:"Email professionnel", phone:"Telephone", message:"Message", submit:"Envoyer la demande", sending:"Envoi en cours...", successTitle:"Merci !", successBody:"Nous vous recontactons sous 48h.", errorBody:"Erreur. Veuillez envoyer un email a onlymore2024@gmail.com" },
    investor: { name:"Nom", organization:"Organisation", email:"Email", phone:"Telephone", message:"Message", submit:"Prendre rendez-vous", sending:"Envoi en cours...", successTitle:"Merci !", successBody:"L'equipe fondatrice vous recontacte sous 48h." },
    general: { name:"Nom", email:"Email", subject:"Sujet", subjectPlaceholder:"Selectionnez un sujet", subjects: {partnership:"Partenariat",press:"Presse",investment:"Investissement",question:"Question generale",other:"Autre"}, message:"Message", submit:"Envoyer", sending:"Envoi en cours...", successTitle:"Merci !", successBody:"Nous repondons sous 48h." },
  },
  en: {
    city: { firstName:"First name", lastName:"Last name", role:"Role", rolePlaceholder:"Select your role", roles: {mayor:"Mayor",deputy:"Deputy Mayor",dgs:"City Manager",manager:"Commerce Manager",cci:"Chamber of Commerce",intercom:"Inter-municipal body",other:"Other"}, city:"City", postcode:"Postal code", email:"Professional email", phone:"Phone", message:"Message", submit:"Submit request", sending:"Sending...", successTitle:"Thank you!", successBody:"We will get back to you within 48h.", errorBody:"Error. Please send an email to onlymore2024@gmail.com" },
    investor: { name:"Name", organization:"Organization", email:"Email", phone:"Phone", message:"Message", submit:"Book a meeting", sending:"Sending...", successTitle:"Thank you!", successBody:"The founding team will contact you within 48h." },
    general: { name:"Name", email:"Email", subject:"Subject", subjectPlaceholder:"Select a subject", subjects: {partnership:"Partnership",press:"Press",investment:"Investment",question:"General question",other:"Other"}, message:"Message", submit:"Send", sending:"Sending...", successTitle:"Thank you!", successBody:"We respond within 48h." },
  },
  es: {
    city: { firstName:"Nombre", lastName:"Apellido", role:"Cargo", rolePlaceholder:"Selecciona tu cargo", roles: {mayor:"Alcalde",deputy:"Teniente de Alcalde",dgs:"Director General",manager:"Gerente de comercio",cci:"Camara de Comercio",intercom:"Intermunicipalidad",other:"Otro"}, city:"Municipio", postcode:"Codigo postal", email:"Email profesional", phone:"Telefono", message:"Mensaje", submit:"Enviar solicitud", sending:"Enviando...", successTitle:"Gracias!", successBody:"Te contactamos en 48h.", errorBody:"Error. Envie un email a onlymore2024@gmail.com" },
    investor: { name:"Nombre", organization:"Organizacion", email:"Email", phone:"Telefono", message:"Mensaje", submit:"Reservar una reunion", sending:"Enviando...", successTitle:"Gracias!", successBody:"El equipo fundador te contactara en 48h." },
    general: { name:"Nombre", email:"Email", subject:"Asunto", subjectPlaceholder:"Selecciona un asunto", subjects: {partnership:"Asociacion",press:"Prensa",investment:"Inversion",question:"Pregunta general",other:"Otro"}, message:"Mensaje", submit:"Enviar", sending:"Enviando...", successTitle:"Gracias!", successBody:"Respondemos en 48h." },
  },
};

// ── worldMap ──
NS.worldMap = {
  fr: { hint: "Cliquez sur un marqueur pour explorer l'impact regional.", markers: { paris:{label:"1 732 ZRCV"}, pittsburgh:{label:"8 764 Opportunity Zones"}, barcelona:{label:"Capitale EU Petit Commerce 2026"}, dakar:{label:"Expansion Afrique"}, saopaulo:{label:"55% emploi informel"} } },
  en: { hint: "Click a marker to explore regional impact.", markers: { paris:{label:"1,732 ZRCV"}, pittsburgh:{label:"8,764 Opportunity Zones"}, barcelona:{label:"EU Capital Small Retail 2026"}, dakar:{label:"Africa Expansion"}, saopaulo:{label:"55% informal employment"} } },
  es: { hint: "Haz clic en un marcador para explorar el impacto regional.", markers: { paris:{label:"1.732 ZRCV"}, pittsburgh:{label:"8.764 Opportunity Zones"}, barcelona:{label:"Capital UE Pequeno Comercio 2026"}, dakar:{label:"Expansion Africa"}, saopaulo:{label:"55% empleo informal"} } },
};

// ── contact.headquarters (single missing key) ──
// handled inline below

// ═══════════════════════════════════════════════════
// PATCH LOGIC
// ═══════════════════════════════════════════════════
function deepMerge(target, source) {
  for (const [k, v] of Object.entries(source)) {
    if (v && typeof v === 'object' && !Array.isArray(v) && typeof target[k] === 'object' && !Array.isArray(target[k])) {
      deepMerge(target[k], v);
    } else {
      target[k] = v;
    }
  }
  return target;
}

for (const [locale, source] of Object.entries(LOCALE_SOURCE)) {
  const file = path.join(MESSAGES, `${locale}.json`);
  if (!fs.existsSync(file)) continue;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));

  for (const [ns, localized] of Object.entries(NS)) {
    const content = localized[source] || localized.en;
    if (!content) continue;
    if (!data[ns]) data[ns] = {};
    deepMerge(data[ns], content);
  }

  // contact.headquarters
  if (!data.contact) data.contact = {};
  if (!data.contact.headquarters) {
    data.contact.headquarters = { fr:'Siege social', en:'Headquarters', es:'Sede social' }[source] || 'Headquarters';
  }

  // common extras
  if (!data.common) data.common = {};
  const extras = { fr: { bookDemo:'Reserver une demo', applyWithColhybri:'Candidater avec COLHYBRI', institutionalPartnership:'Partenariat institutionnel', proposePilot:'Proposer un pilote', discoverSolution:'Decouvrir la solution' }, en: { bookDemo:'Book a demo', applyWithColhybri:'Apply with COLHYBRI', institutionalPartnership:'Institutional partnership', proposePilot:'Propose a pilot', discoverSolution:'Discover the solution' }, es: { bookDemo:'Reservar una demo', applyWithColhybri:'Candidatar con COLHYBRI', institutionalPartnership:'Asociacion institucional', proposePilot:'Proponer un piloto', discoverSolution:'Descubrir la solucion' } };
  deepMerge(data.common, extras[source] || extras.en);

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Patched ${locale}.json`);
}

console.log('\nDone. Run: npm run build');
