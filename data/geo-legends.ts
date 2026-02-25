// data/geo-legends.ts
// Légendes culturelles géo-localisées — chaque région possède un animal/symbole
// emblématique qui incarne la mission COLHYBRI d'inclusion financière et de lien social.
// Sources : traditions orales, mythologie comparée, anthropologie culturelle.

export interface GeoLegend {
  id: string;
  region: string;
  locale: string;
  protagoniste: string;
  titre: string;
  histoire: string;
  symbole: string;
  missionColhybri: string;
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  seoKeywords: string[];
  schemaType: 'Mythology' | 'CulturalHeritage' | 'FolkTale';
}

export const GEO_LEGENDS: Record<string, GeoLegend> = {

  // ═══════════════════════════════════════════════════
  // FRANCE — Le Colibri (légende amérindienne adoptée)
  // ═══════════════════════════════════════════════════
  fr: {
    id: 'fr',
    region: 'france',
    locale: 'fr',
    protagoniste: 'Le Colibri',
    titre: 'La légende du Colibri — chacun fait sa part',
    histoire: "Un jour, dit la légende amérindienne, il y eut un immense incendie de forêt. Tous les animaux terrifiés observaient le désastre, impuissants. Seul le petit colibri s'activait, allant chercher quelques gouttes d'eau dans son bec pour les jeter sur le feu. \"Que fais-tu ?\" lui demanda le tatou. \"Je fais ma part\", répondit le colibri. Cette histoire, popularisée en France par Pierre Rabhi, incarne l'esprit COLHYBRI : chaque geste compte, chaque euro investi localement crée un effet multiplicateur pour la communauté.",
    symbole: 'Le plus petit oiseau du monde qui, goutte après goutte, éteint l\'incendie de l\'exclusion financière.',
    missionColhybri: "Comme le colibri, COLHYBRI prouve que 3€/mois suffisent pour créer 7,50€ de valeur locale. Chacun fait sa part — ensemble, nous éteignons l'incendie de l'exclusion.",
    colorPalette: {
      primary: '#00A878',
      secondary: '#FF6B35',
      accent: '#1B4332',
      gradient: 'from-emerald-600 via-green-500 to-amber-500',
    },
    seoKeywords: ['légende colibri inclusion financière', 'Pierre Rabhi colibri', 'tiers-lieu financier France', 'chacun fait sa part fintech'],
    schemaType: 'FolkTale',
  },

  // ═══════════════════════════════════════════════════
  // ROYAUME-UNI — Le Rouge-gorge (Robin)
  // ═══════════════════════════════════════════════════
  'en-gb': {
    id: 'en-gb',
    region: 'united-kingdom',
    locale: 'en-gb',
    protagoniste: 'The Robin',
    titre: 'The Robin — steadfast guardian of community',
    histoire: "In British folklore, the robin redbreast is the bird that never abandons its territory, singing through the harshest winters when all other birds fall silent. Legend holds that the robin gained its red breast by pulling thorns from Christ's crown, staining its feathers with compassion. In Victorian England, postmen were called 'robins' for their red uniforms — the trusted messengers connecting isolated communities. The robin represents steadfast presence: small, brave, and always there when needed most.",
    symbole: 'The bird that sings through winter — never abandoning its community, however harsh the conditions.',
    missionColhybri: 'Like the robin, COLHYBRI stays present in communities others have abandoned. £2.50/month connects underbanked residents to local commerce, singing through the winter of financial exclusion.',
    colorPalette: {
      primary: '#C41E3A',
      secondary: '#2E5090',
      accent: '#8B4513',
      gradient: 'from-red-700 via-red-500 to-blue-800',
    },
    seoKeywords: ['robin British folklore financial inclusion', 'community finance UK', 'digital third place Britain'],
    schemaType: 'FolkTale',
  },

  // ═══════════════════════════════════════════════════
  // ÉTATS-UNIS — Le Colibri (Hummingbird)
  // ═══════════════════════════════════════════════════
  en: {
    id: 'en',
    region: 'usa',
    locale: 'en',
    protagoniste: 'The Hummingbird',
    titre: 'The Hummingbird — tireless engine of connection',
    histoire: "For the indigenous peoples of the Americas, the hummingbird is the sacred messenger between worlds. The Aztecs believed fallen warriors returned as hummingbirds — Huitzilopochtli, the sun god, wore a hummingbird helmet. In Cherokee tradition, the hummingbird brought tobacco (medicine) to the people when no other creature could make the journey. Despite weighing less than a nickel, hummingbirds migrate thousands of miles, their wings beating 80 times per second. They are nature's proof that the smallest can accomplish the impossible.",
    symbole: 'The smallest bird with the biggest heart — proof that tiny contributions create enormous impact.',
    missionColhybri: "Like the hummingbird, COLHYBRI proves that $3/month can generate $7.50 in local value. Wings beating 80 times per second, we connect underbanked Americans to their local economy — one transaction at a time.",
    colorPalette: {
      primary: '#00A878',
      secondary: '#FF6B35',
      accent: '#1A1A2E',
      gradient: 'from-emerald-500 via-teal-500 to-orange-500',
    },
    seoKeywords: ['hummingbird financial inclusion', 'community finance USA', 'underbanked America fintech', 'local economy multiplier'],
    schemaType: 'Mythology',
  },

  // ═══════════════════════════════════════════════════
  // ESPAGNE — La Golondrina (L'Hirondelle)
  // ═══════════════════════════════════════════════════
  es: {
    id: 'es',
    region: 'spain',
    locale: 'es',
    protagoniste: 'La Golondrina',
    titre: 'La Golondrina — mensajera de la primavera solidaria',
    histoire: "En la tradición española, la golondrina es el ave que siempre regresa. Los marineros se tatuaban golondrinas como promesa de retorno. En la Bécquer romántica, la golondrina simboliza la lealtad que trasciende el tiempo. Cada primavera, estas aves recorren 10.000 km desde África para volver a sus nidos — nunca olvidan su hogar. En los pueblos españoles, la llegada de las golondrinas marca el inicio de la vida comunitaria al aire libre, los mercados y las fiestas patronales.",
    symbole: 'El ave que siempre vuelve — fidelidad a la comunidad y promesa de renovación.',
    missionColhybri: 'Como la golondrina, COLHYBRI siempre vuelve a la comunidad. 3€/mes generan 7,50€ de valor local. Cada transacción es un vuelo de regreso al comercio de proximidad.',
    colorPalette: {
      primary: '#C60B1E',
      secondary: '#FFC400',
      accent: '#1B4332',
      gradient: 'from-red-700 via-yellow-500 to-green-800',
    },
    seoKeywords: ['golondrina inclusión financiera España', 'comercio local España', 'fintech comunitaria'],
    schemaType: 'CulturalHeritage',
  },

  // ═══════════════════════════════════════════════════
  // BRÉSIL — O Beija-Flor (Le Colibri brésilien)
  // ═══════════════════════════════════════════════════
  pt: {
    id: 'pt',
    region: 'brazil',
    locale: 'pt',
    protagoniste: 'O Beija-Flor',
    titre: 'O Beija-Flor — o guerreiro que beija as flores',
    histoire: "Na mitologia Tupi-Guarani, o beija-flor é o mensageiro entre o mundo dos vivos e o dos espíritos. Os Guarani acreditam que o beija-flor carrega as almas dos que partiram. No Brasil moderno, o beija-flor é símbolo da Mangueira — a escola de samba que nasceu nas favelas e se tornou patrimônio cultural. O beija-flor prova que beleza, resiliência e impacto não dependem do tamanho. Pesando menos de 5 gramas, ele é o único pássaro que voa para trás — sempre encontra um caminho.",
    symbole: 'O menor pássaro que beija as flores — transformando cada encontro em polinização social.',
    missionColhybri: 'Como o beija-flor, a COLHYBRI transforma cada R$16/mês em R$40 de valor local. Pequeno, resiliente e incansável — polinizando a economia comunitária.',
    colorPalette: {
      primary: '#009739',
      secondary: '#FFDF00',
      accent: '#002776',
      gradient: 'from-green-600 via-yellow-400 to-blue-800',
    },
    seoKeywords: ['beija-flor inclusão financeira Brasil', 'fintech comunitária Brasil', 'economia local favela'],
    schemaType: 'Mythology',
  },

  // ═══════════════════════════════════════════════════
  // ALLEMAGNE — Das Rotkehlchen (Le Rouge-gorge)
  // ═══════════════════════════════════════════════════
  de: {
    id: 'de',
    region: 'germany',
    locale: 'de',
    protagoniste: 'Das Rotkehlchen',
    titre: 'Das Rotkehlchen — Hüter der Gemeinschaft',
    histoire: "In der deutschen Volkstradition ist das Rotkehlchen der Vogel, der das Feuer zu den Menschen brachte — und dabei seine Brust versengte. Die Brüder Grimm erzählten, wie das Rotkehlchen die Kinder im Wald mit Blättern bedeckte. In der germanischen Mythologie ist es der Vogel Donars (Thor) — mutig, beständig, gemeinschaftstreu. Das Rotkehlchen singt auch im Winter, wenn alle anderen Vögel schweigen. Es verlässt nie sein Revier und verteidigt seine Gemeinschaft mit einem Herz, das größer ist als sein Körper.",
    symbole: 'Der Vogel, der im Winter singt — Treue zur Gemeinschaft in jeder Jahreszeit.',
    missionColhybri: 'Wie das Rotkehlchen bleibt COLHYBRI auch im finanziellen Winter präsent. 3€/Monat erzeugen 7,50€ lokalen Wert. Genossenschaftlich, digital, gemeinschaftstreu.',
    colorPalette: {
      primary: '#DD0000',
      secondary: '#FFCC00',
      accent: '#000000',
      gradient: 'from-red-600 via-yellow-400 to-gray-900',
    },
    seoKeywords: ['Rotkehlchen Finanzinklusion Deutschland', 'Genossenschaft digital', 'lokaler Handel Fintech'],
    schemaType: 'FolkTale',
  },

  // ═══════════════════════════════════════════════════
  // ITALIE — La Rondine (L'Hirondelle)
  // ═══════════════════════════════════════════════════
  it: {
    id: 'it',
    region: 'italy',
    locale: 'it',
    protagoniste: 'La Rondine',
    titre: 'La Rondine — portatrice di primavera e comunità',
    histoire: "Nella tradizione italiana, la rondine è sacra. Uccidere una rondine porta sventura — perché è lei che annuncia la primavera, il ritorno della vita comunitaria nelle piazze. A Firenze, l'arrivo delle rondini segna l'apertura dei mercati all'aperto. Nella poesia di Pascoli, la rondine è il simbolo del ritorno — alla casa, alla famiglia, alla comunità. Come i marinai italiani che tornavano sempre al porto, la rondine non dimentica mai la sua terra.",
    symbole: 'L\'uccello che torna sempre — fedeltà alla comunità e rinascita del legame sociale.',
    missionColhybri: 'Come la rondine, COLHYBRI torna sempre alla comunità. 3€/mese generano 7,50€ di valore locale. Ogni transazione è un volo di ritorno al commercio di vicinato.',
    colorPalette: {
      primary: '#008C45',
      secondary: '#CD212A',
      accent: '#F4F5F0',
      gradient: 'from-green-600 via-white to-red-600',
    },
    seoKeywords: ['rondine inclusione finanziaria Italia', 'commercio locale Italia', 'fintech comunitaria'],
    schemaType: 'CulturalHeritage',
  },

  // ═══════════════════════════════════════════════════
  // JAPON — Le Tsuru (Grue du Japon)
  // ═══════════════════════════════════════════════════
  ja: {
    id: 'ja',
    region: 'japan',
    locale: 'ja',
    protagoniste: '鶴 (ツル)',
    titre: '鶴の恩返し — 感謝と互助の物語',
    histoire: '日本の民話「鶴の恩返し」では、助けられた鶴が人間の姿となり、恩人のために自らの羽で美しい反物を織ります。自己犠牲と互恵の精神 — 受けた恩を必ず返す。千羽鶴は平和と癒しの祈り。鶴は千年を生きるとされ、長寿・繁栄・忠誠の象徴です。商店街の絆、地域の助け合い — 日本の共助精神そのものが鶴に宿っています。',
    symbole: '恩を忘れない鳥 — 互助と共助で織りなすコミュニティの絆。',
    missionColhybri: '鶴のように、COLHYBRIは受けた恩を地域に返します。月¥450が¥1,125の地域価値を生み出す。一羽一羽の折り鶴が、金融包摂という千羽鶴を完成させます。',
    colorPalette: {
      primary: '#BC002D',
      secondary: '#FFFFFF',
      accent: '#2D2D2D',
      gradient: 'from-red-700 via-white to-gray-800',
    },
    seoKeywords: ['鶴の恩返し 金融包摂', 'コミュニティ フィンテック 日本', '商店街 デジタル 互助'],
    schemaType: 'FolkTale',
  },

  // ═══════════════════════════════════════════════════
  // CHINE — La Pie (喜鹊 Xǐquè)
  // ═══════════════════════════════════════════════════
  zh: {
    id: 'zh',
    region: 'china',
    locale: 'zh',
    protagoniste: '喜鹊 (Xǐquè)',
    titre: '喜鹊搭桥 — 连接分离的世界',
    histoire: '在中国传统文化中，喜鹊是吉祥与好运的象征。每年七夕，成千上万的喜鹊在天河上搭建鹊桥，让牛郎织女跨越银河相会。喜鹊的名字本身就包含"喜"字 — 它的叫声预示着好消息的到来。在中国乡村，喜鹊筑巢在村口的大树上，守护着社区的和谐与繁荣。它是连接者、桥梁建造者、好运的使者。',
    symbole: '搭建桥梁的鸟 — 连接被分隔的人们，带来好运与团聚。',
    missionColhybri: '如同喜鹊搭桥，COLHYBRI连接金融排斥的两岸。每月¥22创造¥55的本地价值。每一次交易都是一根鹊桥的羽毛。',
    colorPalette: {
      primary: '#DE2910',
      secondary: '#FFDE00',
      accent: '#1A1A2E',
      gradient: 'from-red-600 via-yellow-400 to-gray-900',
    },
    seoKeywords: ['喜鹊 金融普惠', '社区金融 中国', '本地商业 数字化'],
    schemaType: 'Mythology',
  },

  // ═══════════════════════════════════════════════════
  // INDE — Le Perroquet (तोता Tota)
  // ═══════════════════════════════════════════════════
  hi: {
    id: 'hi',
    region: 'india',
    locale: 'hi',
    protagoniste: 'तोता (Tota)',
    titre: 'तोते की कहानी — ज्ञान और समुदाय का संदेशवाहक',
    histoire: 'भारतीय परंपरा में तोता ज्ञान, वाणी और संवाद का प्रतीक है। शुकदेव महाराज — महाभारत के कथावाचक — का नाम ही तोते (शुक) से आया है। पंचतंत्र की कहानियों में तोता बुद्धिमान सलाहकार है जो राजाओं को सही मार्ग दिखाता है। भारतीय गांवों में तोते नीम के पेड़ पर बैठकर सुबह की आवाज़ बनते हैं — समुदाय को जगाने वाला पहला स्वर। तोता दोहराता नहीं, वह संवाद करता है — और संवाद ही समुदाय की नींव है।',
    symbole: 'ज्ञान और संवाद का पक्षी — समुदाय को जोड़ने वाली आवाज़।',
    missionColhybri: 'तोते की तरह, COLHYBRI समुदाय में संवाद लाता है। ₹270/माह से ₹675 का स्थानीय मूल्य। हर लेन-देन एक नया संवाद है — वित्तीय समावेशन के माध्यम से।',
    colorPalette: {
      primary: '#FF9933',
      secondary: '#138808',
      accent: '#000080',
      gradient: 'from-orange-500 via-white to-green-700',
    },
    seoKeywords: ['तोता वित्तीय समावेशन भारत', 'सामुदायिक फिनटेक', 'स्थानीय अर्थव्यवस्था डिजिटल'],
    schemaType: 'CulturalHeritage',
  },

  // ═══════════════════════════════════════════════════
  // POLOGNE — La Cigogne (Bocian)
  // ═══════════════════════════════════════════════════
  pl: {
    id: 'pl',
    region: 'poland',
    locale: 'pl',
    protagoniste: 'Bocian (Cigogne)',
    titre: 'Bocian — strażnik polskiego domu i wspólnoty',
    histoire: 'W polskiej tradycji bocian jest najświętszym z ptaków. Gniazdo bociana na dachu domu przynosi szczęście, płodność i dobrobyt. Zniszczenie gniazda bociana sprowadza nieszczęście na całą wieś. Polska jest domem dla 25% światowej populacji bocianów białych — to nie przypadek, lecz wyraz głębokiego szacunku. Bocian wraca co wiosnę do tego samego gniazda, do tej samej wspólnoty. W polskiej kulturze bocian symbolizuje wierność, ciągłość i opiekę nad rodziną.',
    symbole: 'Ptak, który wraca do swojego gniazda — wierność wspólnocie i opieka nad rodziną.',
    missionColhybri: 'Jak bocian, COLHYBRI wraca do wspólnoty. 13zł/miesiąc generuje 32,50zł wartości lokalnej. Każda transakcja to powrót do gniazda — do lokalnego handlu i wzajemnej pomocy.',
    colorPalette: {
      primary: '#DC143C',
      secondary: '#FFFFFF',
      accent: '#1B4332',
      gradient: 'from-red-600 via-white to-green-800',
    },
    seoKeywords: ['bocian inkluzja finansowa Polska', 'spółdzielnia cyfrowa', 'lokalny handel fintech'],
    schemaType: 'CulturalHeritage',
  },

  // ═══════════════════════════════════════════════════
  // AFRIQUE — Le Baobab & le Tisserand
  // ═══════════════════════════════════════════════════
  africa: {
    id: 'africa',
    region: 'sub-saharan-africa',
    locale: 'fr',
    protagoniste: 'Le Tisserin (Weaver Bird)',
    titre: 'Le Tisserin et le Baobab — tisser la communauté fil après fil',
    histoire: "Dans toute l'Afrique subsaharienne, le tisserin est l'oiseau bâtisseur. Il construit les nids les plus élaborés du règne animal — tissés fil après fil, branche après branche, avec une patience infinie. Les tisserins construisent en colonies : des centaines de nids sur un même arbre, formant de véritables villages aériens. Le baobab, arbre de vie, est leur cathédrale. En Afrique de l'Ouest, on dit que le village commence là où le tisserin construit. Ubuntu — \"je suis parce que nous sommes\" — le tisserin en est l'incarnation ailée.",
    symbole: "L'oiseau qui tisse la communauté — fil après fil, nid après nid, un village entier naît.",
    missionColhybri: "Comme le tisserin, COLHYBRI tisse l'inclusion financière fil après fil. 3€/mois, une transaction après l'autre — et c'est tout un village financier qui se construit. Ubuntu numérique.",
    colorPalette: {
      primary: '#009639',
      secondary: '#FCD116',
      accent: '#CE1126',
      gradient: 'from-green-600 via-yellow-400 to-red-600',
    },
    seoKeywords: ['tisserin inclusion financière Afrique', 'ubuntu finance numérique', 'baobab communauté fintech'],
    schemaType: 'CulturalHeritage',
  },
};

// ═══════════════════════════════════════════════════
// Thème solidarité — constante partagée entre toutes les légendes
// ═══════════════════════════════════════════════════
export const SOLIDARITY_THEME = {
  core: "Chaque légende incarne le même principe : le plus petit peut accomplir l'impossible quand il agit pour la communauté.",
  keynesian: 'Multiplicateur keynésien local : chaque unité monétaire investie via COLHYBRI génère ×2.5 de valeur dans le commerce de proximité.',
  model: '3€/mois → 7,50€ de valeur locale → emplois, lien social, dignité financière.',
} as const;

// Helper : récupérer la légende pour un locale donné
export function getLegendForLocale(locale: string): GeoLegend {
  return GEO_LEGENDS[locale] || GEO_LEGENDS['en'];
}

// Helper : récupérer la palette couleur pour un locale donné
export function getColorPaletteForLocale(locale: string): GeoLegend['colorPalette'] {
  const legend = getLegendForLocale(locale);
  return legend.colorPalette;
}

// All legend IDs for static generation
export const ALL_LEGEND_IDS = Object.keys(GEO_LEGENDS);
