import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { getLocalizedPath, BASE_URL } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'blog',
    title: 'Blog',
    description: 'Articles about financial inclusion, local commerce, the Keynesian multiplier, and the hummingbird economy. COLHYBRI insights and updates.',
    semanticPrimary: 'financial inclusion blog articles',
    chunkType: 'page',
  });
}

const blogArticles = [
  {
    slug: 'financial-inclusion-why-it-matters',
    titleKey: 'article1',
    date: '2026-01-15',
    category: 'Financial Inclusion',
  },
  {
    slug: 'miami-capital-financial-inclusion',
    titleKey: 'article2',
    date: '2026-01-22',
    category: 'Miami',
  },
  {
    slug: 'keynesian-multiplier-local-value',
    titleKey: 'article3',
    date: '2026-02-01',
    category: 'Impact',
  },
  {
    slug: 'hummingbird-economy',
    titleKey: 'article4',
    date: '2026-02-08',
    category: 'Story',
  },
  {
    slug: 'local-shops-financial-hubs',
    titleKey: 'article5',
    date: '2026-02-15',
    category: 'Commerce',
  },
  {
    slug: 'tiers-lieu-numerique-definition',
    titleKey: 'article6',
    date: '2026-02-19',
    category: 'Third Place',
  },
  {
    slug: 'crise-confiance-france-2026',
    titleKey: 'article7',
    date: '2026-02-19',
    category: 'Trust',
  },
  {
    slug: 'digital-third-place-concept',
    titleKey: 'article8',
    date: '2026-02-19',
    category: 'Third Place',
  },
  {
    slug: 'global-trust-crisis-2025',
    titleKey: 'article9',
    date: '2026-02-19',
    category: 'Trust',
  },
  {
    slug: 'terceiro-lugar-digital',
    titleKey: 'article10',
    date: '2026-02-19',
    category: 'Third Place',
  },
  {
    slug: 'digital-third-place-japan',
    titleKey: 'article11',
    date: '2026-02-19',
    category: 'Third Place',
  },
  {
    slug: 'cyfrowe-trzecie-miejsce-polska',
    titleKey: 'article12',
    date: '2026-02-19',
    category: 'Third Place',
  },
];

const articleTitles: Record<string, Record<string, string>> = {
  article1: {
    en: 'What Is Financial Inclusion and Why Does It Matter for Main Street America?',
    fr: "Qu'est-ce que l'inclusion financière et pourquoi est-elle essentielle ?",
    es: '¿Qué es la inclusión financiera y por qué importa en comunidades latinas?',
    pt: 'O que é inclusão financeira e por que ela importa para o Brasil?',
    de: 'Was ist finanzielle Inklusion und warum ist sie für Deutschland wichtig?',
    zh: '什么是金融普惠，为什么它对美国社区如此重要？',
    ja: '金融包摂とは何か、そしてなぜそれが地域社会に重要なのか？',
  },
  article2: {
    en: "Why Miami Is America's Capital for Financial Inclusion Innovation",
    fr: "Miami, épicentre de l'inclusion financière pour les Latinos d'Amérique",
    es: 'Miami: La capital de la inclusión financiera para la comunidad hispana',
    pt: 'Miami: o coração da inclusão financeira para brasileiros nos EUA',
    de: 'Miami: Zentrum der finanziellen Inklusion für Migranten in Amerika',
    zh: '迈阿密：美国金融普惠创新的中心',
    ja: 'マイアミ：アメリカの金融包摂イノベーションの中心地',
  },
  article3: {
    en: 'The Keynesian Multiplier: How Small Subscriptions Create Multiplied Local Value',
    fr: "Le multiplicateur keynésien : comment un abonnement accessible génère une valeur locale multipliée",
    es: 'El multiplicador keynesiano: cómo una suscripción accesible genera valor local multiplicado',
    pt: 'O multiplicador keynesiano: como uma assinatura acessível gera valor local multiplicado',
    de: 'Der Keynesianische Multiplikator: Wie ein erschwingliches Abonnement lokale Wertschöpfung vervielfacht',
    zh: '凯恩斯乘数效应：小额订阅如何创造成倍的本地经济价值',
    ja: 'ケインズ乗数：手頃なサブスクリプションが地域経済価値を倍増させる仕組み',
  },
  article4: {
    en: 'The Hummingbird Economy: Small Actions, Massive Community Impact',
    fr: "L'économie du colibri : petites actions, impact collectif immense",
    es: 'La economía del colibrí: pequeñas acciones, impacto masivo en la comunidad',
    pt: 'A economia do beija-flor: pequenas ações, impacto comunitário massivo',
    de: 'Die Kolibri-Wirtschaft: Kleine Aktionen, massive Gemeinschaftswirkung',
    zh: '蜂鸟经济学：微小行动，巨大社区影响',
    ja: 'ハチドリ経済学：小さな行動が生む巨大なコミュニティへの影響',
  },
  article5: {
    en: 'How Local Shops Become Financial Hubs: The COLHYBRI Model',
    fr: 'Comment les commerces de quartier deviennent des hubs financiers locaux',
    es: 'Cómo las tiendas locales se convierten en centros financieros comunitarios',
    pt: 'Como o comércio local se torna um hub financeiro para a comunidade',
    de: 'Wie lokale Läden zu Finanzzentren der Gemeinschaft werden',
    zh: '本地商店如何成为社区金融中心：COLHYBRI模式',
    ja: '地域の店舗が金融ハブになる方法：COLHYBRIモデル',
  },
  article6: {
    fr: "Qu'est-ce qu'un tiers-lieu numerique ? Definition et enjeux pour 2026",
    en: 'What Is a Digital Third Place? Definition and Stakes for 2026',
  },
  article7: {
    fr: 'Crise de confiance en France 2026 : les chiffres alarmants du Barometre IFOP',
    en: 'Trust Crisis in France 2026: Alarming Numbers from the IFOP Barometer',
  },
  article8: {
    en: 'The Digital Third Place: Rebuilding Community Trust in a Lonely World',
    fr: 'Le tiers-lieu numerique : reconstruire la confiance communautaire dans un monde solitaire',
  },
  article9: {
    en: 'The Global Trust Crisis 2025: Why 1.4 Billion Lonely Adults Demand a New Economic Model',
    fr: 'Crise mondiale de la confiance 2025 : pourquoi 1,4 milliard de solitaires exigent un nouveau modele economique',
  },
  article10: {
    pt: 'O terceiro lugar digital: como a tecnologia pode reconstruir lacos comunitarios no Brasil',
    en: 'The Digital Third Place: How Technology Can Rebuild Community Bonds in Brazil',
  },
  article11: {
    ja: 'デジタル・サードプレイス：日本の孤独危機に対する新しい答え',
    en: "The Digital Third Place: A New Answer to Japan's Loneliness Crisis",
  },
  article12: {
    pl: 'Cyfrowe trzecie miejsce: jak Polska moze odbudowac zaufanie spoleczne',
    en: 'The Digital Third Place: How Poland Can Rebuild Social Trust',
  },
};

const categoryColors: Record<string, string> = {
  'Financial Inclusion': 'bg-colhybri-primary/10 text-colhybri-primary',
  Miami: 'bg-colhybri-secondary/10 text-colhybri-secondary',
  Impact: 'bg-blue-50 text-blue-700',
  Story: 'bg-purple-50 text-purple-700',
  Commerce: 'bg-amber-50 text-amber-700',
  'Third Place': 'bg-emerald-50 text-emerald-700',
  Trust: 'bg-rose-50 text-rose-700',
};

export default function BlogPage({ params: { locale } }: PageProps) {
  const l = locale as Locale;

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'COLHYBRI Blog',
    description: 'Articles on financial inclusion, local commerce, and community economics.',
    url: `${BASE_URL}/${locale}/blog`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'COLHYBRI',
      url: BASE_URL,
    },
  };

  return (
    <>
    <JsonLd data={blogJsonLd} />
    <div className="section-container">
      <div className="text-center mb-16">
        <h1 className="section-heading">Blog</h1>
        <p className="section-subheading mx-auto">
          {locale === 'en' && 'Insights on financial inclusion, local commerce, and community economics.'}
          {locale === 'fr' && "Analyses sur l'inclusion financière, le commerce local et l'économie communautaire."}
          {locale === 'es' && 'Perspectivas sobre inclusión financiera, comercio local y economía comunitaria.'}
          {locale === 'pt' && 'Insights sobre inclusão financeira, comércio local e economia comunitária.'}
          {locale === 'de' && 'Einblicke in finanzielle Inklusion, lokalen Handel und Gemeinschaftswirtschaft.'}
          {locale === 'zh' && '关于金融普惠、本地商业和社区经济的洞察分析。'}
          {locale === 'ja' && '金融包摂、地域商業、コミュニティ経済に関するインサイト。'}
        </p>
      </div>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {blogArticles.map((article) => {
          const title = articleTitles[article.titleKey]?.[locale] || articleTitles[article.titleKey]?.['en'] || '';
          const colorClass = categoryColors[article.category] || 'bg-gray-50 text-gray-700';

          return (
            <article key={article.slug} className="card group">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colorClass}`}>
                  {article.category}
                </span>
                <time className="text-sm text-colhybri-dark/40" dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-colhybri-primary transition-colors">
                <Link href={`/${locale}/blog/${article.slug}`}>
                  {title}
                </Link>
              </h2>
              <Link
                href={`/${locale}/blog/${article.slug}`}
                className="text-colhybri-primary font-semibold text-sm hover:underline"
              >
                {locale === 'en' ? 'Read more' : locale === 'fr' ? 'Lire la suite' : locale === 'es' ? 'Leer más' : locale === 'pt' ? 'Ler mais' : locale === 'de' ? 'Weiterlesen' : locale === 'zh' ? '阅读更多' : '続きを読む'}
                {' \u2192'}
              </Link>
            </article>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link href={getLocalizedPath('home', l)} className="btn-secondary">
          {locale === 'en' ? 'Back to Home' : locale === 'fr' ? "Retour à l'accueil" : locale === 'es' ? 'Volver al inicio' : locale === 'pt' ? 'Voltar ao início' : locale === 'de' ? 'Zurück zur Startseite' : locale === 'zh' ? '返回首页' : 'ホームに戻る'}
        </Link>
      </div>
    </div>
    </>
  );
}
