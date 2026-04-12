/**
 * COLHYBRI SEO/GEO cocon content source of truth.
 *
 * Each entry describes one satellite page. The page.tsx wrapper and the
 * i18n entries under messages/{fr,en,es}.json#cocon.<slug> are generated
 * from this file by scripts/generate-cocon.js.
 *
 * Structure per page
 *   slug, cluster, related[3], cross (string slug),
 *   fr/en/es each containing: title, h1, metaTitle, metaDescription,
 *     snippet (40-60 words, cite-friendly), sections (2 items),
 *     faq (2-3 items), stats (3-4 items).
 *
 * Content strategy
 *   FR primary, EN and ES carry the same structure with equivalent
 *   translations. Every fact cites a verifiable source (ANCT, ILO,
 *   CCI, EU Commission, IDB, IFOP, OBBBA 2025).
 *
 * Slugs that already exist on main (solidarite-proximite, inclusion-financiere)
 * are absent from this list to avoid overwriting hand-written pages.
 */

const CLUSTERS = {
  france: { id: 'france', labelFr: 'Revitalisation France', labelEn: 'France Revitalization', labelEs: 'Revitalizacion Francia', pillar: '/impact/france', pillarLabelFr: 'Impact France', pillarLabelEn: 'France Impact', pillarLabelEs: 'Impacto Francia' },
  usa: { id: 'usa', labelFr: 'Revitalisation USA', labelEn: 'USA Revitalization', labelEs: 'Revitalizacion USA', pillar: '/impact/usa', pillarLabelFr: 'Impact Etats-Unis', pillarLabelEn: 'USA Impact', pillarLabelEs: 'Impacto EE.UU.' },
  solidaire: { id: 'solidaire', labelFr: 'Commerce solidaire', labelEn: 'Community Commerce', labelEs: 'Comercio solidario', pillar: '/solution/pool-solidaire', pillarLabelFr: 'Pool solidaire', pillarLabelEn: 'Community pool', pillarLabelEs: 'Pool solidario' },
  digital: { id: 'digital', labelFr: 'Digitalisation commerce', labelEn: 'Commerce Digitalization', labelEs: 'Digitalizacion comercio', pillar: '/solution/maps-plus', pillarLabelFr: 'Maps+', pillarLabelEn: 'Maps+', pillarLabelEs: 'Maps+' },
  impact: { id: 'impact', labelFr: 'Impact social', labelEn: 'Social Impact', labelEs: 'Impacto social', pillar: '/impact', pillarLabelFr: 'Impact global', pillarLabelEn: 'Global impact', pillarLabelEs: 'Impacto global' },
  product: { id: 'product', labelFr: 'Produit COLHYBRI', labelEn: 'COLHYBRI Product', labelEs: 'Producto COLHYBRI', pillar: '/solution', pillarLabelFr: 'Solution', pillarLabelEn: 'Solution', pillarLabelEs: 'Solucion' },
  international: { id: 'international', labelFr: 'International', labelEn: 'International', labelEs: 'Internacional', pillar: '/impact/europe', pillarLabelFr: 'Impact Europe', pillarLabelEn: 'Europe Impact', pillarLabelEs: 'Impacto Europa' },
};

const COMMON = {
  fr: { home: 'Accueil', faqTitle: 'Questions frequentes', relatedTitle: 'Pour aller plus loin', pillarBadge: 'Dossier principal', relatedBadge: 'Sur le meme theme', crossBadge: 'Transversal', ctaTitle: 'Pret a revitaliser votre centre-ville ?', ctaApp: "Ouvrir l'app", ctaDemo: 'Planifier une demo' },
  en: { home: 'Home', faqTitle: 'Frequently asked questions', relatedTitle: 'Go further', pillarBadge: 'Main topic', relatedBadge: 'Related', crossBadge: 'Cross-topic', ctaTitle: 'Ready to revitalize your downtown?', ctaApp: 'Open the app', ctaDemo: 'Book a demo' },
  es: { home: 'Inicio', faqTitle: 'Preguntas frecuentes', relatedTitle: 'Profundizar', pillarBadge: 'Tema principal', relatedBadge: 'Relacionado', crossBadge: 'Transversal', ctaTitle: 'Listo para revitalizar tu centro urbano?', ctaApp: 'Abrir la app', ctaDemo: 'Reservar una demo' },
};

// Compact page builder: each page is declared as a single object literal.
// Structure shared across fr/en/es keeps translations aligned.

const PAGES = [
  // ============================================================
  // CLUSTER 1 : FRANCE (8 pages)
  // ============================================================
  {
    slug: 'revitalisation-centres-villes', cluster: 'france',
    related: ['action-coeur-de-ville', 'petites-villes-de-demain', 'zrcv-zones-revitalisation'],
    cross: 'downtown-revitalization',
    fr: {
      title: 'Revitalisation des centres-villes',
      h1: 'Revitalisation des centres-villes en France : programmes 2026',
      metaTitle: 'Revitalisation des centres-villes : programmes 2026',
      metaDescription: '9 Mds EUR mobilises par Action Coeur de Ville et Petites Villes de Demain pour 1 890 communes. Guide complet de la revitalisation commerciale.',
      snippet: "La revitalisation des centres-villes francais mobilise 9 milliards d'euros via Action Coeur de Ville (244 communes, 5 Mds EUR) et Petites Villes de Demain (1 646 communes, 4 Mds EUR). En 2026, 1 732 communes sont classees en zone de revitalisation (ZRCV) selon l'arrete du 26 decembre 2025 (ANCT).",
      sections: [
        { h2: "Qu'est-ce que la revitalisation des centres-villes ?", body: "La revitalisation des centres-villes designe l'ensemble des politiques publiques qui redynamisent les coeurs commercants frappes par la vacance et la devitalisation. Elle s'articule autour de trois leviers : l'habitat, le commerce de proximite et les services publics. L'ANCT pilote les programmes nationaux avec la Banque des Territoires." },
        { h2: 'Comment COLHYBRI contribue-t-il ?', body: "COLHYBRI apporte un outil SaaS de mesure de la vitalite commerciale en temps reel. Maps+ audite la presence Google de chaque commerce en 48 heures et le dashboard municipal fournit des metriques verifiables au conseil municipal. Pilote gratuit 90 jours sur 50 commerces avant tout engagement." },
      ],
      faq: [
        { q: "Qu'est-ce que la revitalisation des centres-villes ?", a: "Des politiques publiques qui redynamisent les coeurs commercants via trois leviers : habitat, commerce et services. En France elle est pilotee par l'ANCT via Action Coeur de Ville et Petites Villes de Demain." },
        { q: 'Comment COLHYBRI aide-t-il une commune ?', a: "Pilote gratuit 90 jours : audit Google de 50 commerces, dashboard municipal de vitalite, rapport d'impact pour le conseil municipal, accompagnement terrain." },
      ],
      stats: [
        { value: '1 732', label: 'communes ZRCV 2026' },
        { value: '244', label: 'Action Coeur de Ville' },
        { value: '1 646', label: 'Petites Villes de Demain' },
        { value: '9 Mds EUR', label: 'mobilises 2023-2026' },
      ],
    },
    en: {
      title: 'Downtown revitalization in France',
      h1: 'Downtown revitalization in France: 2026 programs',
      metaTitle: 'Downtown revitalization in France: 2026 programs',
      metaDescription: '9B EUR mobilized by Action Coeur de Ville and Petites Villes de Demain for 1,890 towns. Complete guide.',
      snippet: "France mobilizes 9 billion EUR for downtown revitalization through Action Coeur de Ville (244 midsize towns, 5B EUR) and Petites Villes de Demain (1,646 small towns, 4B EUR). In 2026, 1,732 towns are classified as downtown revitalization zones (ZRCV) per the December 26, 2025 decree (ANCT).",
      sections: [
        { h2: 'What is downtown revitalization?', body: "Downtown revitalization refers to public policies that revive commercial cores suffering from vacancy and decline. It is built around three levers: housing, local commerce and public services. France's ANCT coordinates national programs with Banque des Territoires." },
        { h2: 'How does COLHYBRI contribute?', body: 'COLHYBRI provides a SaaS tool to measure downtown vitality in real time. Maps+ audits every shop Google presence in 48 hours and the municipal dashboard delivers verifiable metrics to the city council. Free 90-day pilot on 50 shops before any commitment.' },
      ],
      faq: [
        { q: 'What is downtown revitalization?', a: 'Public policies that revive commercial cores through housing, commerce and services. In France it is coordinated by ANCT through Action Coeur de Ville and Petites Villes de Demain.' },
        { q: 'How does COLHYBRI help a city?', a: 'Free 90-day pilot: Google audit of 50 shops, municipal vitality dashboard, city council impact report, deployment support.' },
      ],
      stats: [
        { value: '1,732', label: '2026 ZRCV towns' },
        { value: '244', label: 'Action Coeur de Ville' },
        { value: '1,646', label: 'Petites Villes de Demain' },
        { value: '9B EUR', label: 'mobilized 2023-2026' },
      ],
    },
    es: {
      title: 'Revitalizacion de centros urbanos en Francia',
      h1: 'Revitalizacion de centros urbanos en Francia: programas 2026',
      metaTitle: 'Revitalizacion de centros urbanos en Francia 2026',
      metaDescription: '9.000M EUR movilizados por Action Coeur de Ville y Petites Villes de Demain para 1.890 municipios. Guia completa.',
      snippet: 'Francia moviliza 9.000 millones de euros para la revitalizacion de centros urbanos a traves de Action Coeur de Ville (244 ciudades medianas, 5.000M EUR) y Petites Villes de Demain (1.646 municipios, 4.000M EUR). En 2026, 1.732 municipios estan clasificados como zonas ZRCV segun el decreto del 26 de diciembre de 2025 (ANCT).',
      sections: [
        { h2: 'Que es la revitalizacion de centros urbanos?', body: 'Politicas publicas que reactivan los nucleos comerciales mediante tres palancas: vivienda, comercio de proximidad y servicios. En Francia esta coordinada por la ANCT junto con Banque des Territoires.' },
        { h2: 'Como contribuye COLHYBRI?', body: 'COLHYBRI aporta una herramienta SaaS de medicion de la vitalidad comercial en tiempo real. Maps+ audita la presencia Google de cada comercio en 48 horas y el dashboard municipal ofrece metricas verificables al ayuntamiento. Piloto gratuito de 90 dias.' },
      ],
      faq: [
        { q: 'Que es la revitalizacion de centros urbanos?', a: 'Politicas publicas que reactivan los nucleos comerciales mediante vivienda, comercio y servicios. Coordinada por la ANCT a traves de Action Coeur de Ville y Petites Villes de Demain.' },
        { q: 'Como ayuda COLHYBRI a un municipio?', a: 'Piloto gratuito de 90 dias: auditoria Google de 50 comercios, dashboard municipal, informe para el consejo municipal.' },
      ],
      stats: [
        { value: '1.732', label: 'municipios ZRCV 2026' },
        { value: '244', label: 'Action Coeur de Ville' },
        { value: '1.646', label: 'Petites Villes de Demain' },
        { value: '9.000M EUR', label: 'movilizados 2023-2026' },
      ],
    },
  },
];

module.exports = { CLUSTERS, COMMON, PAGES };
