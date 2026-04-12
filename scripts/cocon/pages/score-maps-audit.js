const { writeCluster } = require('../shared');

module.exports = {
  slug: 'score-maps-audit',
  cluster: 'digital',
  related: ['visibilite-google-pme', 'google-maps-commerce', 'maps-plus-outil'],
  cross: 'pour-les-collectivites',
  fr: {
    title: 'Score Maps audit',
    h1: 'Score Maps : l audit de presence Google pour les commerces de proximite',
    metaTitle: 'Score Maps COLHYBRI : audit presence Google 0-100',
    metaDescription: 'Le Score Maps mesure la qualite de la presence Google d un commerce sur une echelle de 0 a 100. 4 criteres : fiche, avis, photos, coherence.',
    snippet: "Le Score Maps est un indicateur developpe par COLHYBRI qui mesure la qualite de la presence Google d'un commerce sur une echelle de 0 a 100. Il evalue quatre criteres : completude de la fiche (30%), nombre et qualite des avis (30%), nombre de photos (20%), et coherence des informations (20%). Un score inferieur a 50 signifie que le commerce est quasiment invisible en ligne.",
    sections: [
      { h2: 'Comment est calcule le Score Maps ?', body: "Le Score Maps additionne quatre composantes ponderees : completude de la fiche Google Business (30% - categorie, horaires, description, attributs), nombre et qualite des avis (30% - quantite, note moyenne, recence, taux de reponse), nombre et qualite des photos (20% - exterieur, interieur, produits), coherence des informations NAP sur les principaux annuaires (20%). Chaque composante est notee de 0 a 100." },
      { h2: 'Que signifient les differents niveaux de score ?', body: '0-30 : commerce quasiment invisible, fiche absente ou abandonnee, aucun avis. 30-50 : commerce partiellement visible, fiche existante mais incomplete. 50-70 : commerce visible, marge d amelioration significative. 70-90 : commerce bien reference, positionnement solide dans le Local Pack. 90-100 : commerce optimal, leader dans sa categorie locale.' },
      { h2: 'Comment le Score Maps aide une commune ?', body: 'Au niveau municipal, le Score Maps moyen des commerces du centre-ville est un indicateur de vitalite commerciale. Une commune peut comparer son score moyen a ses voisines et suivre son evolution dans le temps. COLHYBRI fournit un dashboard municipal qui affiche le Score Maps de chaque commerce et le score moyen de la commune avec visualisation par rue commercante.' },
    ],
    faq: [
      { q: 'Comment est calcule le Score Maps ?', a: '4 composantes ponderees : completude fiche (30%), avis (30%), photos (20%), coherence NAP (20%). Chaque composante notee 0-100.' },
      { q: 'Que signifient les differents niveaux ?', a: '0-30 : invisible. 30-50 : incomplet. 50-70 : visible avec marge. 70-90 : bien reference. 90-100 : optimal.' },
      { q: 'Comment aide une commune ?', a: 'Indicateur de vitalite commerciale agrege. Comparaison avec les communes voisines et suivi dans le temps. Dashboard municipal avec vue par rue commercante.' },
    ],
    stats: [
      { value: '0-100', label: 'echelle Score Maps' },
      { value: '4', label: 'composantes' },
      { value: '48h', label: 'duree audit' },
      { value: '< 50', label: 'seuil invisible' },
    ],
  },
  en: {
    title: 'Score Maps audit',
    h1: 'Score Maps: Google presence audit for local shops',
    metaTitle: 'COLHYBRI Score Maps: 0-100 Google presence audit',
    metaDescription: 'Score Maps measures Google presence quality on a 0-100 scale. 4 criteria: listing, reviews, photos, NAP consistency.',
    snippet: 'Score Maps is an indicator developed by COLHYBRI that measures the quality of a shop Google presence on a 0 to 100 scale. It evaluates four criteria: listing completeness (30%), review quantity and quality (30%), number of photos (20%), and NAP consistency (20%). A score below 50 means the shop is nearly invisible online.',
    sections: [
      { h2: 'How is Score Maps calculated?', body: 'Score Maps sums four weighted components: Google Business listing completeness (30% - category, hours, description, attributes), review quantity and quality (30% - count, average rating, recency, response rate), photo count and quality (20% - exterior, interior, products), NAP consistency across main directories (20%). Each component is scored 0-100.' },
      { h2: 'What do the different score levels mean?', body: '0-30: shop nearly invisible, listing missing or abandoned, no reviews. 30-50: partially visible, existing but incomplete listing. 50-70: visible, significant improvement potential. 70-90: well-ranked, solid Local Pack positioning. 90-100: optimal, local category leader.' },
      { h2: 'How does Score Maps help a city?', body: 'At municipal level, the average Score Maps of downtown shops is a commercial vitality indicator. A city can compare its average to neighbors and track its evolution over time. COLHYBRI provides a municipal dashboard displaying every shop Score Maps plus the city average with per-street visualization.' },
    ],
    faq: [
      { q: 'How is Score Maps calculated?', a: '4 weighted components: listing completeness (30%), reviews (30%), photos (20%), NAP consistency (20%). Each scored 0-100.' },
      { q: 'What do the levels mean?', a: '0-30: invisible. 30-50: incomplete. 50-70: visible with potential. 70-90: well-ranked. 90-100: optimal.' },
      { q: 'How does it help a city?', a: 'Aggregated commercial vitality indicator. Comparison with neighbors and time-based tracking. Municipal dashboard with per-street view.' },
    ],
    stats: [
      { value: '0-100', label: 'Score Maps scale' },
      { value: '4', label: 'components' },
      { value: '48h', label: 'audit duration' },
      { value: '< 50', label: 'invisible threshold' },
    ],
  },
  es: {
    title: 'Auditoria Score Maps',
    h1: 'Score Maps: la auditoria de presencia Google para comercios de proximidad',
    metaTitle: 'Score Maps COLHYBRI: auditoria presencia Google 0-100',
    metaDescription: 'Score Maps mide la calidad de la presencia Google de un comercio en una escala de 0 a 100. 4 criterios: ficha, resenas, fotos, coherencia.',
    snippet: 'El Score Maps es un indicador desarrollado por COLHYBRI que mide la calidad de la presencia Google de un comercio en una escala de 0 a 100. Evalua cuatro criterios: completitud de la ficha (30%), cantidad y calidad de las resenas (30%), numero de fotos (20%) y coherencia de la informacion (20%). Una puntuacion inferior a 50 significa que el comercio es casi invisible en linea.',
    sections: [
      { h2: 'Como se calcula el Score Maps?', body: 'Score Maps suma cuatro componentes ponderados: completitud de la ficha Google Business (30% - categoria, horarios, descripcion, atributos), cantidad y calidad de las resenas (30% - cantidad, nota media, recencia, tasa de respuesta), cantidad y calidad de las fotos (20% - exterior, interior, productos), coherencia NAP en los principales directorios (20%). Cada componente se puntua de 0 a 100.' },
      { h2: 'Que significan los diferentes niveles?', body: '0-30: comercio casi invisible, ficha ausente o abandonada, sin resenas. 30-50: parcialmente visible, ficha existente pero incompleta. 50-70: visible con margen de mejora. 70-90: bien referenciado, posicionamiento solido en el Local Pack. 90-100: optimo, lider en su categoria local.' },
      { h2: 'Como ayuda el Score Maps a un municipio?', body: 'A nivel municipal, el Score Maps promedio de los comercios del centro urbano es un indicador de vitalidad comercial. Un municipio puede comparar su promedio con sus vecinos y seguir su evolucion. COLHYBRI ofrece un dashboard municipal que muestra el Score Maps de cada comercio con visualizacion por calle.' },
    ],
    faq: [
      { q: 'Como se calcula el Score Maps?', a: '4 componentes ponderados: completitud ficha (30%), resenas (30%), fotos (20%), coherencia NAP (20%). Cada uno puntuado 0-100.' },
      { q: 'Que significan los niveles?', a: '0-30: invisible. 30-50: incompleto. 50-70: visible con margen. 70-90: bien referenciado. 90-100: optimo.' },
      { q: 'Como ayuda a un municipio?', a: 'Indicador de vitalidad agregado. Comparacion con vecinos y seguimiento temporal. Dashboard municipal con vista por calle.' },
    ],
    stats: [
      { value: '0-100', label: 'escala Score Maps' },
      { value: '4', label: 'componentes' },
      { value: '48h', label: 'duracion auditoria' },
      { value: '< 50', label: 'umbral invisible' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
