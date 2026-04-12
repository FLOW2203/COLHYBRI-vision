const { writeCluster } = require('../shared');

module.exports = {
  slug: 'onboarding-digital-commerce',
  cluster: 'digital',
  related: ['google-maps-commerce', 'score-maps-audit', 'maps-plus-outil'],
  cross: 'pour-les-commercants',
  fr: {
    title: 'Onboarding digital commercant',
    h1: 'Onboarding digital zero-friction pour commercants : la methode COLHYBRI',
    metaTitle: 'Onboarding digital commercant : 30 secondes, QR code',
    metaDescription: 'COLHYBRI permet a un commercant de devenir visible sur Google en 30 secondes. QR code, pas de compte, aucune competence technique requise.',
    snippet: "L'onboarding digital zero-friction de COLHYBRI permet a n'importe quel commercant de devenir visible sur Google en moins de 30 secondes. Le processus : scanner un QR code, confirmer les informations pre-remplies (nom, adresse, telephone), et accepter la creation ou l'optimisation de la fiche Google Business. Aucune competence technique requise.",
    sections: [
      { h2: 'Pourquoi un onboarding zero-friction ?', body: "Les plateformes digitales demandent en general aux commercants de creer un compte, remplir un formulaire long, uploader des documents, verifier une adresse postale. Un commercant de 55 ans sans bagage technique abandonne en moyenne a l etape 3. L onboarding zero-friction de COLHYBRI elimine ces frictions : un scan de QR code, une confirmation, et c est fait." },
      { h2: 'Quelles sont les 3 etapes de l onboarding ?', body: 'Etape 1 : le commercant scanne un QR code distribue par le manager de commerce municipal ou par un commercant voisin. Etape 2 : il arrive sur une page web pre-remplie avec les informations issues du SIRENE, de Google Business ou d une base de donnees municipale. Etape 3 : il valide en 1 clic et la fiche Google Business est creee ou optimisee automatiquement.' },
      { h2: 'Comment les donnees sont pre-remplies ?', body: 'COLHYBRI interroge automatiquement plusieurs sources publiques : la base SIRENE (nom, adresse, statut), Google Business Profile existant (si present), et la base de donnees municipale du programme ACV ou PVD (si la commune est partenaire). Le commercant n a qu a verifier et corriger si necessaire, pas a tout saisir.' },
    ],
    faq: [
      { q: 'Pourquoi un onboarding zero-friction ?', a: 'Les plateformes classiques abandonnent en moyenne a l etape 3. Un onboarding en 30 secondes elimine les frictions techniques et permet aux commercants sans bagage technique de se digitaliser.' },
      { q: 'Quelles sont les 3 etapes ?', a: 'Scan QR code, confirmation des informations pre-remplies, validation en 1 clic. Aucun compte a creer, aucun document a uploader.' },
      { q: 'Comment les donnees sont pre-remplies ?', a: 'COLHYBRI interroge SIRENE, Google Business existant et la base municipale ACV/PVD si la commune est partenaire. Le commercant n a qu a verifier.' },
    ],
    stats: [
      { value: '30s', label: 'duree onboarding' },
      { value: 'QR code', label: 'methode d acces' },
      { value: '1 clic', label: 'validation finale' },
      { value: 'SIRENE', label: 'source principale' },
    ],
  },
  en: {
    title: 'Zero-friction merchant onboarding',
    h1: 'Zero-friction digital onboarding for merchants: the COLHYBRI method',
    metaTitle: 'Zero-friction merchant onboarding: 30 seconds, QR code',
    metaDescription: 'COLHYBRI lets a merchant become visible on Google in 30 seconds. QR code, no account, no technical skills required.',
    snippet: 'COLHYBRI zero-friction digital onboarding lets any merchant become visible on Google in under 30 seconds. The process: scan a QR code, confirm pre-filled information (name, address, phone), and accept creation or optimization of the Google Business listing. No technical skills required.',
    sections: [
      { h2: 'Why zero-friction onboarding?', body: 'Digital platforms usually ask merchants to create an account, fill a long form, upload documents and verify a postal address. A 55-year-old merchant without a tech background typically abandons at step 3. COLHYBRI zero-friction onboarding removes these frictions: one QR scan, one confirmation, done.' },
      { h2: 'What are the 3 onboarding steps?', body: 'Step 1: the merchant scans a QR code distributed by the municipal commerce manager or by a neighbor merchant. Step 2: they land on a web page pre-filled with information from public registries, existing Google Business, or the municipal ACV/PVD database. Step 3: they validate in 1 click and the listing is created or optimized automatically.' },
      { h2: 'How is data pre-filled?', body: 'COLHYBRI automatically queries several public sources: public business registries (name, address, status), existing Google Business Profile (if present), and the municipal database of the ACV or PVD program (if the city is a partner). The merchant just has to verify and correct if needed.' },
    ],
    faq: [
      { q: 'Why zero-friction onboarding?', a: 'Classic platforms lose merchants at step 3. 30-second onboarding removes friction and lets non-technical merchants go digital.' },
      { q: 'What are the 3 steps?', a: 'QR code scan, confirmation of pre-filled info, 1-click validation. No account to create, no documents to upload.' },
      { q: 'How is data pre-filled?', a: 'COLHYBRI queries public registries, existing Google Business and the municipal ACV/PVD database. The merchant just verifies.' },
    ],
    stats: [
      { value: '30s', label: 'onboarding time' },
      { value: 'QR code', label: 'access method' },
      { value: '1 click', label: 'final validation' },
      { value: 'SIRENE', label: 'main source' },
    ],
  },
  es: {
    title: 'Onboarding digital comerciante',
    h1: 'Onboarding digital sin friccion para comerciantes: el metodo COLHYBRI',
    metaTitle: 'Onboarding digital comerciante: 30 segundos, QR',
    metaDescription: 'COLHYBRI permite a un comerciante ser visible en Google en 30 segundos. Codigo QR, sin cuenta, sin competencias tecnicas.',
    snippet: 'El onboarding digital sin friccion de COLHYBRI permite a cualquier comerciante ser visible en Google en menos de 30 segundos. El proceso: escanear un codigo QR, confirmar la informacion pre-rellenada (nombre, direccion, telefono) y aceptar la creacion u optimizacion de la ficha Google Business. Sin competencias tecnicas requeridas.',
    sections: [
      { h2: 'Por que un onboarding sin friccion?', body: 'Las plataformas digitales generalmente piden a los comerciantes crear una cuenta, rellenar un formulario largo, subir documentos y verificar una direccion postal. Un comerciante de 55 anos sin bagaje tecnico abandona en promedio en el paso 3. El onboarding sin friccion de COLHYBRI elimina estas fricciones.' },
      { h2: 'Cuales son los 3 pasos del onboarding?', body: 'Paso 1: el comerciante escanea un codigo QR distribuido por el gestor de comercio municipal. Paso 2: llega a una pagina web pre-rellenada con la informacion de registros publicos. Paso 3: valida con 1 clic y la ficha Google Business se crea o se optimiza automaticamente.' },
      { h2: 'Como se pre-rellena la informacion?', body: 'COLHYBRI consulta automaticamente varias fuentes publicas: los registros de empresas, el Google Business Profile existente y la base de datos municipal del programa ACV o PVD si el municipio es socio. El comerciante solo debe verificar y corregir si es necesario.' },
    ],
    faq: [
      { q: 'Por que un onboarding sin friccion?', a: 'Las plataformas clasicas pierden comerciantes en el paso 3. Un onboarding de 30 segundos elimina las fricciones tecnicas.' },
      { q: 'Cuales son los 3 pasos?', a: 'Escaneo de codigo QR, confirmacion de informacion pre-rellenada, validacion con 1 clic. Sin cuenta que crear, sin documentos que subir.' },
      { q: 'Como se pre-rellenan los datos?', a: 'COLHYBRI consulta los registros publicos, el Google Business existente y la base municipal ACV/PVD. El comerciante solo verifica.' },
    ],
    stats: [
      { value: '30s', label: 'tiempo onboarding' },
      { value: 'QR', label: 'metodo de acceso' },
      { value: '1 clic', label: 'validacion final' },
      { value: 'Publicos', label: 'registros fuente' },
    ],
  },
};

if (require.main === module) {
  writeCluster(module.exports.cluster, [module.exports]);
}
