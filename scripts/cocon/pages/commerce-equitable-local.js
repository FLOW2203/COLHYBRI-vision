const { writeCluster } = require('../shared');

module.exports = {
  slug: 'commerce-equitable-local',
  cluster: 'solidaire',
  related: ['fidelisation-communautaire', 'commerce-proximite-digital', 'pour-les-commercants'],
  cross: 'small-business-digital',
  fr: {
    title: 'Commerce equitable local',
    h1: 'Commerce equitable local : zero commission, 100% solidarite',
    metaTitle: 'Commerce equitable local : modele 0% commission',
    metaDescription: 'UberEats preleve 30%, JustEat 25%, Petitscommerces 15%. COLHYBRI propose 0% de commission, abonnement fixe 10 EUR/mois.',
    snippet: "Alors qu'UberEats preleve 30% de commission, JustEat 25% et Petitscommerces 15%, COLHYBRI propose un modele a 0% de commission pour les commercants. L'abonnement fixe de 10 EUR/mois remplace les commissions variables qui erosent les marges des petits commerces. C'est le modele du commerce equitable applique au local.",
    sections: [
      { h2: 'Qu est-ce que le commerce equitable local ?', body: "Le commerce equitable local est l application des principes du commerce equitable (prix juste, relation directe, pas d intermediaire parasite) aux echanges de proximite. Il vise a preserver les marges des producteurs et des commercants face aux plateformes qui prelevent des commissions elevees. COLHYBRI est le premier outil SaaS a appliquer ce principe au commerce de quartier." },
      { h2: 'Pourquoi 0% de commission ?', body: "Les commissions variables des plateformes (30% UberEats, 25% JustEat) erosent mecaniquement les marges des commerces de proximite, qui tournent deja a 8-15% de marge nette. Un commerce qui vend a 10 EUR via une plateforme a 30% de commission ne garde que 7 EUR brut, soit moins que sa marge nette moyenne. COLHYBRI preserve les marges avec un abonnement fixe a 10 EUR/mois." },
      { h2: 'Comment COLHYBRI est rentable a 0% ?', body: "COLHYBRI est rentable grace a l effet volume de l abonnement. Pour 500 commercants par ville, cela represente 5 000 EUR/mois de revenus recurrents par ville, sans dependre du volume de vente de chaque commercant. C est un modele SaaS classique applique au commerce local, oppose au modele de plateforme qui taxe chaque transaction." },
    ],
    faq: [
      { q: 'Qu est-ce que le commerce equitable local ?', a: 'L application des principes du commerce equitable (prix juste, pas d intermediaire parasite) aux echanges de proximite. Objectif : preserver les marges des commercants.' },
      { q: 'Pourquoi 0% de commission chez COLHYBRI ?', a: 'Les plateformes classiques erosent mecaniquement les marges. COLHYBRI preserve les marges avec un abonnement fixe a 10 EUR/mois.' },
      { q: 'Comment COLHYBRI est rentable a 0% ?', a: 'Effet volume : 500 commercants = 5 000 EUR/mois de revenus recurrents par ville. Modele SaaS classique, oppose au modele de plateforme.' },
    ],
    stats: [
      { value: '0%', label: 'commission COLHYBRI' },
      { value: '30%', label: 'commission UberEats' },
      { value: '10 EUR', label: 'abonnement fixe' },
      { value: '8-15%', label: 'marge nette commerces' },
    ],
  },
  en: {
    title: 'Fair local commerce',
    h1: 'Fair local commerce: zero commission, 100% solidarity',
    metaTitle: 'Fair local commerce: 0% commission model',
    metaDescription: 'UberEats takes 30%, JustEat 25%, Petitscommerces 15%. COLHYBRI offers 0% commission with a flat 10 EUR/month subscription.',
    snippet: 'While UberEats takes 30% commission, JustEat 25% and Petitscommerces 15%, COLHYBRI offers 0% commission for merchants. The flat 10 EUR/month subscription replaces variable commissions that erode small shop margins. It is fair trade applied to local commerce.',
    sections: [
      { h2: 'What is fair local commerce?', body: 'Fair local commerce is the application of fair trade principles (fair price, direct relationship, no parasitic intermediary) to neighborhood exchanges. It aims to preserve margins for producers and merchants facing platforms that take high commissions. COLHYBRI is the first SaaS tool to apply this principle to neighborhood commerce.' },
      { h2: 'Why 0% commission?', body: 'Variable platform commissions (30% UberEats, 25% JustEat) mechanically erode local commerce margins, which already sit at 8-15% net. A shop selling at 10 EUR via a 30%-commission platform keeps only 7 EUR gross, below its average net margin. COLHYBRI preserves margins with a flat 10 EUR/month subscription.' },
      { h2: 'How is COLHYBRI profitable at 0%?', body: 'COLHYBRI is profitable thanks to subscription volume. For 500 merchants per city, that is 5,000 EUR/month of recurring revenue per city, independent of each merchant sales volume. It is a classic SaaS model applied to local commerce, opposite to the platform model that taxes every transaction.' },
    ],
    faq: [
      { q: 'What is fair local commerce?', a: 'The application of fair trade principles (fair price, no parasitic intermediary) to neighborhood exchanges. Goal: preserve merchant margins.' },
      { q: 'Why 0% commission at COLHYBRI?', a: 'Standard platforms mechanically erode margins. COLHYBRI preserves them with a flat 10 EUR/month subscription.' },
      { q: 'How is COLHYBRI profitable at 0%?', a: 'Volume effect: 500 merchants = 5,000 EUR/month recurring revenue per city. Classic SaaS model, opposite to platforms that tax every transaction.' },
    ],
    stats: [
      { value: '0%', label: 'COLHYBRI commission' },
      { value: '30%', label: 'UberEats commission' },
      { value: '10 EUR', label: 'flat subscription' },
      { value: '8-15%', label: 'shop net margin' },
    ],
  },
  es: {
    title: 'Comercio justo local',
    h1: 'Comercio justo local: cero comision, 100% solidaridad',
    metaTitle: 'Comercio justo local: modelo 0% comision',
    metaDescription: 'UberEats cobra 30%, JustEat 25%, Petitscommerces 15%. COLHYBRI ofrece 0% de comision con una cuota fija de 10 EUR/mes.',
    snippet: 'Mientras que UberEats cobra el 30% de comision, JustEat el 25% y Petitscommerces el 15%, COLHYBRI ofrece un modelo de 0% de comision para los comerciantes. La cuota fija de 10 EUR/mes reemplaza las comisiones variables que erosionan los margenes. Es el comercio justo aplicado al local.',
    sections: [
      { h2: 'Que es el comercio justo local?', body: 'El comercio justo local es la aplicacion de los principios del comercio justo (precio justo, relacion directa, sin intermediario parasito) a los intercambios de proximidad. Busca preservar los margenes de los productores y comerciantes frente a las plataformas que cobran altas comisiones.' },
      { h2: 'Por que 0% de comision?', body: 'Las comisiones variables de las plataformas (30% UberEats, 25% JustEat) erosionan mecanicamente los margenes de los comercios, que ya estan entre 8-15% neto. Un comercio que vende a 10 EUR via una plataforma al 30% solo conserva 7 EUR brutos. COLHYBRI preserva los margenes con una cuota fija de 10 EUR/mes.' },
      { h2: 'Como es rentable COLHYBRI al 0%?', body: 'COLHYBRI es rentable gracias al efecto volumen de la suscripcion. Para 500 comerciantes por ciudad, son 5.000 EUR/mes de ingresos recurrentes por ciudad, sin depender del volumen de venta. Es un modelo SaaS clasico aplicado al comercio local.' },
    ],
    faq: [
      { q: 'Que es el comercio justo local?', a: 'La aplicacion de los principios del comercio justo a los intercambios de proximidad. Objetivo: preservar los margenes de los comerciantes.' },
      { q: 'Por que 0% de comision en COLHYBRI?', a: 'Las plataformas clasicas erosionan mecanicamente los margenes. COLHYBRI los preserva con una cuota fija de 10 EUR/mes.' },
      { q: 'Como es rentable COLHYBRI al 0%?', a: 'Efecto volumen: 500 comerciantes = 5.000 EUR/mes de ingresos recurrentes por ciudad. Modelo SaaS clasico.' },
    ],
    stats: [
      { value: '0%', label: 'comision COLHYBRI' },
      { value: '30%', label: 'comision UberEats' },
      { value: '10 EUR', label: 'cuota fija' },
      { value: '8-15%', label: 'margen neto comercios' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
