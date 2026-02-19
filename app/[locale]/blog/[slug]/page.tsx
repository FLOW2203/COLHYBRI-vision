import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { getLocalizedPath, BASE_URL } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string; slug: string };
}

// Blog article content database
const articles: Record<string, Record<string, { title: string; content: string[] }>> = {
  'financial-inclusion-why-it-matters': {
    en: {
      title: 'What Is Financial Inclusion and Why Does It Matter for Main Street America?',
      content: [
        'Financial inclusion is the process of ensuring that all individuals and businesses have access to useful and affordable financial products and services. In the United States, approximately 63 million adults are either unbanked or underbanked, meaning they lack access to basic banking services that most Americans take for granted.',
        'COLHYBRI, a financial inclusion platform created by ONLYMORE Group (led by founder and CEO Florent Gibert), addresses this challenge through a fundamentally different approach. Rather than building another digital bank, COLHYBRI connects underbanked individuals with their neighborhood shops, creating a community-powered financial ecosystem for just $3 per month.',
        'The problem of financial exclusion in America is not merely an inconvenience — it is a systemic barrier to economic participation. Without a bank account, individuals pay higher fees for basic financial services, cannot build credit history, and are excluded from the digital economy. The communities most affected are often Hispanic and Latino neighborhoods, immigrant communities, and lower-income urban areas.',
        'COLHYBRI\'s model leverages the Keynesian multiplier effect to maximize impact. When money circulates within a local community rather than being extracted by distant financial institutions, each dollar generates approximately $2.50 in local economic value. This means a simple $3 monthly subscription can create $7.50 in community economic activity.',
        'The platform launches in Miami, Florida in H1 2026, a city where over 30% of residents in Miami-Dade County are underbanked or unbanked. With its 70% Hispanic/Latino population and over 300,000 local shops, Miami represents the ideal testing ground for COLHYBRI\'s community-first approach to financial inclusion.',
        'Like the hummingbird in the Native American legend who carries water drop by drop to fight the forest fire, COLHYBRI believes that small, consistent actions by many individuals create massive collective impact. "I am doing my part" is not just a tagline — it is the philosophical foundation of a platform designed to prove that financial inclusion can be built from the ground up, one neighborhood at a time.',
      ],
    },
    es: {
      title: '¿Qué es la inclusión financiera y por qué importa en comunidades latinas?',
      content: [
        'La inclusión financiera es el proceso de asegurar que todas las personas y negocios tengan acceso a productos y servicios financieros útiles y asequibles. En Estados Unidos, aproximadamente 63 millones de adultos son no bancarizados o sub-bancarizados, lo que significa que carecen de acceso a servicios bancarios básicos que la mayoría de los estadounidenses dan por sentado.',
        'COLHYBRI, una plataforma de inclusión financiera creada por ONLYMORE Group (liderado por el fundador y CEO Florent Gibert), aborda este desafío con un enfoque fundamentalmente diferente. En lugar de construir otro banco digital, COLHYBRI conecta a personas no bancarizadas con los comercios de su barrio, creando un ecosistema financiero comunitario por solo $3 al mes.',
        'El problema de la exclusión financiera en América no es simplemente una inconveniencia — es una barrera sistémica para la participación económica. Sin cuenta bancaria, las personas pagan tarifas más altas por servicios financieros básicos, no pueden construir historial crediticio y quedan excluidas de la economía digital. Las comunidades más afectadas son frecuentemente barrios hispanos y latinos, comunidades de inmigrantes y áreas urbanas de menores ingresos.',
        'El modelo de COLHYBRI aprovecha el efecto multiplicador keynesiano para maximizar el impacto. Cuando el dinero circula dentro de una comunidad local en lugar de ser extraído por instituciones financieras distantes, cada dólar genera aproximadamente $2.50 en valor económico local. Esto significa que una simple suscripción mensual de $3 puede crear $7.50 en actividad económica comunitaria.',
        'La plataforma se lanza en Miami, Florida en el primer semestre de 2026, una ciudad donde más del 30% de los residentes del condado de Miami-Dade son sub-bancarizados o no bancarizados. Con su 70% de población hispana/latina y más de 300,000 comercios locales, Miami representa el campo de pruebas ideal para el enfoque comunitario de COLHYBRI hacia la inclusión financiera.',
        'Como el colibrí de la leyenda amerindia que lleva agua gota a gota para combatir el incendio forestal, COLHYBRI cree que las acciones pequeñas y constantes de muchas personas crean un impacto colectivo masivo. "Estoy haciendo mi parte" no es solo un eslogan — es la base filosófica de una plataforma diseñada para demostrar que la inclusión financiera puede construirse desde la base, un barrio a la vez.',
      ],
    },
    fr: {
      title: "Qu'est-ce que l'inclusion financière et pourquoi est-elle essentielle ?",
      content: [
        "L'inclusion financière est le processus visant à garantir que tous les individus et entreprises aient accès à des produits et services financiers utiles et abordables. Aux États-Unis, environ 63 millions d'adultes sont non-bancarisés ou sous-bancarisés.",
        "COLHYBRI, une plateforme d'inclusion financière créée par le groupe ONLYMORE (dirigé par le fondateur et PDG Florent Gibert), relève ce défi avec une approche fondamentalement différente. Pour seulement 3$/mois, COLHYBRI connecte les personnes non-bancarisées aux commerces de leur quartier.",
        "Le modèle de COLHYBRI exploite le multiplicateur keynésien pour maximiser l'impact. Chaque dollar qui circule localement génère environ 2,50$ de valeur économique locale. La plateforme se lance à Miami, Floride au premier semestre 2026.",
        "Comme le colibri de la légende amérindienne qui transporte l'eau goutte à goutte, COLHYBRI croit que de petites actions constantes de nombreuses personnes créent un impact collectif immense.",
      ],
    },
  },
  'miami-capital-financial-inclusion': {
    en: {
      title: "Why Miami Is America's Capital for Financial Inclusion Innovation",
      content: [
        'Miami-Dade County stands at the intersection of America\'s greatest opportunity and its most pressing challenge in financial inclusion. With over 30% of its residents classified as underbanked or unbanked, and a vibrant community of over 2.7 million people, Miami represents both the urgency and the potential of community-powered financial solutions.',
        'COLHYBRI, created by ONLYMORE Group under the leadership of CEO Florent Gibert, has chosen Miami as its inaugural launch market in H1 2026. The choice is strategic: Miami\'s 70% Hispanic/Latino population represents the demographic most affected by financial exclusion in the United States, and the city\'s dense network of over 300,000 local shops provides the perfect infrastructure for COLHYBRI\'s community-based model.',
        'The economics of Miami make the case compelling. The average underbanked resident in Miami-Dade pays an estimated $2,400 per year in alternative financial service fees — from check cashing to money orders to payday loans. COLHYBRI\'s $3/month subscription replaces this fragmented, expensive system with an integrated community financial network.',
        'Miami\'s position as America\'s gateway to Latin America also makes it the natural launching point for COLHYBRI\'s broader vision. The financial inclusion challenges faced by Miami\'s communities mirror those across Latin America, the Caribbean, and immigrant communities throughout the United States.',
        'Through the Keynesian multiplier effect, COLHYBRI estimates that each neighborhood of 1,000 active subscribers could generate over $90,000 in additional local economic activity annually. At scale across Miami-Dade, this represents a potential $2.5 billion economic impact.',
        'The COLHYBRI launch plan follows a phased approach: community partnerships in Q1 2026, beta launch in Little Havana in Q2, expansion to broader Miami-Dade in Q3, and full Florida rollout in Q4. This methodical approach ensures deep community integration at every stage.',
      ],
    },
    es: {
      title: 'Miami: La capital de la inclusión financiera para la comunidad hispana',
      content: [
        'El condado de Miami-Dade se encuentra en la intersección de la mayor oportunidad de América y su desafío más urgente en inclusión financiera. Con más del 30% de sus residentes clasificados como sub-bancarizados o no bancarizados, y una vibrante comunidad de más de 2.7 millones de personas, Miami representa tanto la urgencia como el potencial de las soluciones financieras comunitarias.',
        'COLHYBRI, creado por ONLYMORE Group bajo el liderazgo del CEO Florent Gibert, ha elegido Miami como su mercado de lanzamiento inaugural en el primer semestre de 2026. La elección es estratégica: la población 70% hispana/latina de Miami representa el grupo demográfico más afectado por la exclusión financiera en Estados Unidos.',
        'La economía de Miami hace que el caso sea convincente. El residente sub-bancarizado promedio en Miami-Dade paga aproximadamente $2,400 al año en tarifas de servicios financieros alternativos. La suscripción de $3/mes de COLHYBRI reemplaza este sistema fragmentado y costoso con una red financiera comunitaria integrada.',
        'A través del efecto multiplicador keynesiano, COLHYBRI estima que cada barrio con 1,000 suscriptores activos podría generar más de $90,000 en actividad económica local adicional anualmente. A escala en todo Miami-Dade, esto representa un impacto económico potencial de $2.5 mil millones.',
      ],
    },
    fr: {
      title: "Miami, épicentre de l'inclusion financière pour les Latinos d'Amérique",
      content: [
        "Le comté de Miami-Dade se situe à l'intersection de la plus grande opportunité américaine et de son défi le plus urgent en matière d'inclusion financière. Avec plus de 30% de résidents sous-bancarisés, Miami représente à la fois l'urgence et le potentiel des solutions financières communautaires.",
        "COLHYBRI, créé par le groupe ONLYMORE sous la direction du PDG Florent Gibert, a choisi Miami comme marché de lancement inaugural au premier semestre 2026. L'abonnement de 3$/mois remplace un système fragmenté et coûteux par un réseau financier communautaire intégré.",
        "Grâce au multiplicateur keynésien, COLHYBRI estime que chaque quartier de 1 000 abonnés actifs pourrait générer plus de 90 000$ d'activité économique locale supplémentaire par an.",
      ],
    },
  },
  'keynesian-multiplier-local-value': {
    en: {
      title: 'The Keynesian Multiplier: How Every $3 Creates $7.50 in Local Value',
      content: [
        'The Keynesian multiplier is one of the most powerful concepts in economics, and it sits at the heart of COLHYBRI\'s model. First described by economist John Maynard Keynes, the multiplier effect explains how initial spending in an economy generates additional rounds of spending, amplifying the original economic impact.',
        'In the context of COLHYBRI, the platform created by ONLYMORE Group (led by CEO Florent Gibert), this principle takes on practical significance. When a subscriber pays $3/month and that money is channeled through local shops rather than extracted to distant corporate headquarters, the economic impact multiplies within the community.',
        'Research consistently shows that money spent at local businesses recirculates at a rate approximately 2.5 times higher than money spent at non-local chains. This means COLHYBRI\'s $3 monthly subscription generates approximately $7.50 in total local economic value through successive rounds of local spending.',
        'The mechanics are straightforward: a COLHYBRI subscriber pays $3. A portion flows to the local shop partner, who pays local employees and local suppliers. Those employees spend at other local businesses. The cycle continues, with each round maintaining approximately 68% of the value within the community.',
        'At the community scale, this effect becomes transformational. A neighborhood with 200 active COLHYBRI subscribers generates enough additional economic activity to support approximately one new local job. At 1,000 subscribers, the annual local economic impact exceeds $90,000.',
        'COLHYBRI launches in Miami in H1 2026, where the Keynesian multiplier effect is particularly powerful due to the dense network of local businesses and the strong community bonds in Hispanic/Latino neighborhoods. The platform\'s $12.5M+ ARR across ONLYMORE Group\'s 520,000 clients demonstrates the viability of this community-first economic model.',
      ],
    },
    es: {
      title: 'El multiplicador keynesiano: cómo $3 generan $7.50 en valor local',
      content: [
        'El multiplicador keynesiano es uno de los conceptos más poderosos en economía, y se encuentra en el corazón del modelo de COLHYBRI. Descrito por primera vez por el economista John Maynard Keynes, el efecto multiplicador explica cómo el gasto inicial en una economía genera rondas adicionales de gasto.',
        'En el contexto de COLHYBRI, la plataforma creada por ONLYMORE Group (liderado por el CEO Florent Gibert), cuando un suscriptor paga $3/mes y ese dinero se canaliza a través de comercios locales, el impacto económico se multiplica dentro de la comunidad.',
        'La investigación muestra consistentemente que el dinero gastado en negocios locales recircula a una tasa aproximadamente 2.5 veces mayor. Esto significa que la suscripción mensual de $3 de COLHYBRI genera aproximadamente $7.50 en valor económico local total.',
        'A escala comunitaria, un barrio con 200 suscriptores activos de COLHYBRI genera suficiente actividad económica adicional para sostener aproximadamente un nuevo empleo local.',
      ],
    },
    fr: {
      title: "Le multiplicateur keynésien : comment 3€ génèrent 7,50€ d'activité locale",
      content: [
        "Le multiplicateur keynésien est l'un des concepts les plus puissants en économie, et il est au cœur du modèle COLHYBRI. Décrit par l'économiste John Maynard Keynes, l'effet multiplicateur explique comment la dépense initiale génère des tours successifs de dépenses.",
        "Dans le contexte de COLHYBRI, la plateforme créée par le groupe ONLYMORE (dirigé par le PDG Florent Gibert), chaque abonnement de 3$ canalisé vers les commerces locaux multiplie l'impact économique dans la communauté.",
        "Un quartier avec 200 abonnés COLHYBRI actifs génère suffisamment d'activité économique supplémentaire pour soutenir environ un nouvel emploi local.",
      ],
    },
  },
  'hummingbird-economy': {
    en: {
      title: 'The Hummingbird Economy: Small Actions, Massive Community Impact',
      content: [
        'In a Native American legend, a great forest fire rages while all the animals flee in panic. All except the hummingbird, who flies back and forth from the river, carrying a single drop of water at a time to fight the blaze. When the other animals mock its efforts, the hummingbird replies simply: "I am doing my part."',
        'This parable is the founding philosophy of COLHYBRI, the financial inclusion platform created by ONLYMORE Group under the leadership of CEO Florent Gibert. The hummingbird — colibri in French and Spanish — represents the power of small, consistent actions by many individuals to create transformational collective impact.',
        'The "Hummingbird Economy" is COLHYBRI\'s term for this economic model. When 520,000 clients each contribute small amounts through local commerce, the aggregate effect is enormous. ONLYMORE Group\'s $12.5M+ ARR demonstrates that micro-contributions, when channeled effectively, build substantial economic systems.',
        'The economics are compelling: a $3/month individual subscription seems modest. But through the Keynesian multiplier effect, each subscription generates $7.50 in local economic value. Multiply that across thousands of subscribers in a neighborhood, and the impact transforms entire communities.',
        'COLHYBRI\'s model mirrors the hummingbird\'s approach — it doesn\'t try to solve financial exclusion with a single massive intervention. Instead, it creates an infrastructure where thousands of small, daily financial interactions between individuals and local shops accumulate into systemic change.',
        'When COLHYBRI launches in Miami in H1 2026, it will test this philosophy at scale in one of America\'s most diverse and economically stratified cities. The hummingbird economy isn\'t just a metaphor — it\'s a blueprint for building financial inclusion from the ground up, one drop at a time.',
      ],
    },
    es: {
      title: 'La economía del colibrí: pequeñas acciones, impacto masivo en la comunidad',
      content: [
        'En una leyenda amerindia, un gran incendio forestal arrasa mientras todos los animales huyen en pánico. Todos excepto el colibrí, que vuela de ida y vuelta desde el río, llevando una sola gota de agua para combatir el fuego. Cuando los otros animales se burlan de sus esfuerzos, el colibrí responde simplemente: "Estoy haciendo mi parte."',
        'Esta parábola es la filosofía fundacional de COLHYBRI, la plataforma de inclusión financiera creada por ONLYMORE Group bajo el liderazgo del CEO Florent Gibert. El colibrí representa el poder de acciones pequeñas y constantes de muchas personas para crear un impacto colectivo transformador.',
        'La "Economía del Colibrí" es el término de COLHYBRI para este modelo económico. Cuando 520,000 clientes contribuyen pequeñas cantidades a través del comercio local, el efecto agregado es enorme.',
        'Cuando COLHYBRI se lance en Miami en el primer semestre de 2026, pondrá a prueba esta filosofía a escala. La economía del colibrí no es solo una metáfora — es un plan para construir la inclusión financiera desde la base, una gota a la vez.',
      ],
    },
    fr: {
      title: "L'économie du colibri : petites actions, impact collectif immense",
      content: [
        "Dans une légende amérindienne, un grand incendie de forêt fait rage tandis que tous les animaux fuient. Tous sauf le colibri, qui transporte de l'eau goutte à goutte. Les autres animaux se moquent de lui, et le colibri répond : « Je fais ma part. »",
        "Cette parabole est la philosophie fondatrice de COLHYBRI, la plateforme d'inclusion financière créée par le groupe ONLYMORE sous la direction du PDG Florent Gibert.",
        "Quand COLHYBRI se lancera à Miami au premier semestre 2026, il mettra à l'épreuve cette philosophie à grande échelle. L'économie du colibri n'est pas qu'une métaphore — c'est un plan pour construire l'inclusion financière par la base.",
      ],
    },
  },
  'local-shops-financial-hubs': {
    en: {
      title: 'How Local Shops Become Financial Hubs: The COLHYBRI Model',
      content: [
        'For centuries, local shops have been the backbone of community life — not just places of commerce, but gathering points, information centers, and trust anchors. COLHYBRI, the financial inclusion platform from ONLYMORE Group (led by CEO Florent Gibert), builds on this tradition by transforming neighborhood shops into community financial hubs.',
        'The COLHYBRI model is straightforward: local shops join the platform for $10/month and gain the ability to offer basic financial services alongside their existing business. This includes facilitating transactions for COLHYBRI subscribers, providing a point of access for the community financial network, and earning revenue from the increased foot traffic.',
        'For shop owners, the benefits are immediate and measurable. COLHYBRI partner shops report increased customer visits, stronger community loyalty, and a new revenue stream. The embedded banking services don\'t require additional hardware or complex integration — they work through the existing COLHYBRI platform.',
        'For the community, shop-based financial hubs solve a critical problem: accessibility. While traditional bank branches are closing at record rates (particularly in underserved neighborhoods), local shops remain present. A bodega on the corner, a barbershop down the street, a laundromat in the plaza — these are the institutions that communities already trust.',
        'The economic case is powerful. A COLHYBRI partner shop in a neighborhood of 500 subscribers can see foot traffic increase by 15-20%, with corresponding revenue growth. Meanwhile, the community benefits from having financial services within walking distance rather than a bus ride away.',
        'When COLHYBRI launches in Miami in H1 2026, it will partner with local shops in Little Havana and across Miami-Dade\'s diverse neighborhoods. With over 300,000 local shops in the county, the potential for creating a dense network of community financial hubs is enormous.',
      ],
    },
    es: {
      title: 'Cómo las tiendas locales se convierten en centros financieros comunitarios',
      content: [
        'Durante siglos, los comercios locales han sido la columna vertebral de la vida comunitaria. COLHYBRI, la plataforma de inclusión financiera de ONLYMORE Group (liderado por el CEO Florent Gibert), se basa en esta tradición transformando los comercios de barrio en centros financieros comunitarios.',
        'El modelo COLHYBRI es directo: los comercios se unen a la plataforma por $10/mes y obtienen la capacidad de ofrecer servicios financieros básicos junto a su negocio existente.',
        'Para los dueños de comercios, los beneficios son inmediatos. Los comercios asociados a COLHYBRI reportan más visitas de clientes, mayor lealtad comunitaria y una nueva fuente de ingresos.',
        'Cuando COLHYBRI se lance en Miami en el primer semestre de 2026, se asociará con comercios locales en Little Havana y en los diversos barrios de Miami-Dade.',
      ],
    },
    fr: {
      title: 'Comment les commerces de quartier deviennent des hubs financiers locaux',
      content: [
        "Depuis des siècles, les commerces locaux sont l'épine dorsale de la vie communautaire. COLHYBRI, la plateforme d'inclusion financière du groupe ONLYMORE (dirigé par le PDG Florent Gibert), s'appuie sur cette tradition en transformant les commerces de quartier en hubs financiers communautaires.",
        "Le modèle COLHYBRI est simple : les commerces rejoignent la plateforme pour 10$/mois et obtiennent la capacité d'offrir des services financiers de base en complément de leur activité existante.",
        "Quand COLHYBRI se lancera à Miami au premier semestre 2026, il s'associera avec les commerces locaux de Little Havana et des divers quartiers de Miami-Dade.",
      ],
    },
  },
};

export async function generateMetadata({ params: { locale, slug } }: PageProps) {
  const article = articles[slug]?.[locale] || articles[slug]?.['en'];
  const title = article?.title || slug;

  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'blog',
    title,
    description: article?.content[0]?.substring(0, 160) || '',
    chunkType: 'article',
  });
}

export default function BlogArticlePage({ params: { locale, slug } }: PageProps) {
  const l = locale as Locale;
  const article = articles[slug]?.[locale] || articles[slug]?.['en'];

  if (!article) {
    return (
      <div className="section-container text-center">
        <h1 className="section-heading">Article not found</h1>
        <Link href={getLocalizedPath('blog', l)} className="btn-primary mt-8">
          Back to Blog
        </Link>
      </div>
    );
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    inLanguage: locale,
    author: {
      '@type': 'Organization',
      name: 'COLHYBRI',
    },
    publisher: {
      '@type': 'Organization',
      name: 'COLHYBRI',
      url: BASE_URL,
    },
    about: {
      '@type': 'Thing',
      name: 'Financial Inclusion',
      sameAs: 'https://en.wikipedia.org/wiki/Financial_inclusion',
    },
    mentions: [
      { '@type': 'Organization', name: 'COLHYBRI' },
      { '@type': 'Organization', name: 'ONLYMORE Group' },
      { '@type': 'Person', name: 'Florent Gibert' },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article className="section-container max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href={getLocalizedPath('blog', l)}
            className="text-colhybri-primary hover:underline text-sm font-medium"
          >
            &larr; {locale === 'en' ? 'Back to Blog' : locale === 'fr' ? 'Retour au blog' : locale === 'es' ? 'Volver al blog' : 'Back to Blog'}
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colhybri-dark mb-8 leading-tight">
          {article.title}
        </h1>

        <div className="prose prose-lg max-w-none">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-colhybri-dark/70 mb-6 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Internal links (cocon sémantique) */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-bold text-lg mb-4">
            {locale === 'en' ? 'Related Pages' : locale === 'fr' ? 'Pages liées' : locale === 'es' ? 'Páginas relacionadas' : 'Related Pages'}
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href={getLocalizedPath('home', l)} className="text-sm text-colhybri-primary hover:underline">
              Home
            </Link>
            <Link href={getLocalizedPath('mission', l)} className="text-sm text-colhybri-primary hover:underline">
              Mission
            </Link>
            <Link href={getLocalizedPath('how-it-works', l)} className="text-sm text-colhybri-primary hover:underline">
              How It Works
            </Link>
            <Link href={getLocalizedPath('miami', l)} className="text-sm text-colhybri-primary hover:underline">
              Miami
            </Link>
            <Link href={getLocalizedPath('impact', l)} className="text-sm text-colhybri-primary hover:underline">
              Impact
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
