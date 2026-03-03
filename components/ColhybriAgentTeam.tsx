"use client";

import { useState, useEffect, useRef } from "react";

const AGENTS = [
  {
    id: "auditor",
    name: "AGENT AUDIT",
    role: "Détecteur d'erreurs critiques",
    icon: "🔍",
    color: "#ff4444",
    specialty: "Bugs, 404, i18n cassé, structure manquante",
  },
  {
    id: "corrector",
    name: "AGENT COPY",
    role: "Correcteur de contenus & traductions",
    icon: "✍️",
    color: "#00d4ff",
    specialty: "Fautes, clés manquantes, contenu multilingue",
  },
  {
    id: "cities",
    name: "AGENT VILLES",
    role: "Expert revitalisation urbaine",
    icon: "🏙️",
    color: "#00ff88",
    specialty: "Bénéfices pour les villes, Cœurs de Ville, Detroit",
  },
  {
    id: "commerce",
    name: "AGENT COMMERCE",
    role: "Expert impact commerce local",
    icon: "🏪",
    color: "#ffaa00",
    specialty: "CA, ESS, vecteur engagement, santé économique",
  },
  {
    id: "css",
    name: "AGENT CSS",
    role: "Correcteur mise en page",
    icon: "🎨",
    color: "#aa44ff",
    specialty: "Centrage, responsive, layout desktop/mobile",
  },
];

const PRELOADED_ISSUES = [
  {
    id: 1,
    agent: "auditor",
    severity: "CRITIQUE",
    page: "Toutes pages EN/FR/ES/GB",
    title: "🚨 Clés i18n non résolues — système de traduction cassé",
    detail:
      "La page /en affiche hero.tagline, hero.headline, mission.headline, pricing.individuals.features.0, nav.mission, footer.tagline etc. au lieu du vrai texte. Le système i18n (probablement next-intl, react-i18next, ou i18next) ne charge pas les fichiers de traduction.",
    fix: `// Vérifier dans next.config.js ou i18n config :
// 1. Les fichiers /public/locales/en/common.json existent-ils ?
// 2. Le provider est-il bien wrappé dans _app.tsx / layout.tsx ?
// 3. Lancer: grep -r "hero.tagline" src/ pour trouver la source
// Fix rapide Next.js App Router:
// dans app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}`,
  },
  {
    id: 2,
    agent: "css",
    severity: "MAJEUR",
    page: "Toutes pages — desktop",
    title: "📐 Site décalé à droite sur ordinateur",
    detail:
      "Le contenu principal est centré à droite. Cause probable: margin-left auto sans margin-right auto, ou un flex/grid mal configuré, ou un overflow-x caché qui décale le scroll.",
    fix: `/* Fix CSS global — dans globals.css ou layout principal */
/* Option 1: Container centré */
.container, main, [class*='container'] {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto; /* ← manquant probablement */
  width: 100%;
  padding: 0 1.5rem;
}
/* Option 2: Si c'est un problème de body */
body {
  display: flex;
  flex-direction: column;
  align-items: center; /* Attention: retire si problème */
  overflow-x: hidden;
}
/* Option 3: Vérifier dans DevTools → Elements → */
/* chercher tout élément avec margin-left > 0 sur .wrapper */`,
  },
  {
    id: 3,
    agent: "auditor",
    severity: "CRITIQUE",
    page: "/fr/pour-les-villes + /fr/pour-les-commerces",
    title: "🔴 Pages 404 — routes manquantes après remaniement",
    detail:
      "Les pages /fr/pour-les-villes et /fr/pour-les-commerces retournent 404. Ces routes n'existent plus dans la structure de fichiers après le remaniement du site.",
    fix: `// Structure de fichiers à créer (Next.js App Router):
// app/[locale]/pour-les-villes/page.tsx  (FR)
// app/[locale]/for-cities/page.tsx        (EN)
// app/[locale]/para-las-ciudades/page.tsx (ES)
// OU si route unique avec locale param:
// app/[locale]/cities/page.tsx
// next.config.js — redirects pour anciens URLs:
module.exports = {
  async redirects() {
    return [
      { source: '/fr/pour-les-villes', destination: '/fr/pour-les-villes', permanent: false },
      // Créer les fichiers de page manquants d'abord !
    ]
  }
}`,
  },
  {
    id: 4,
    agent: "corrector",
    severity: "MAJEUR",
    page: "/en (homepage)",
    title: "📝 Footer et pricing entièrement en clés brutes",
    detail:
      "footer.tagline, footer.quote, footer.group, footer.copyright, footer.links.privacy, footer.links.terms, pricing.individuals.title, pricing.shops.title — tout le footer et la section pricing affichent des clés JSON brutes.",
    fix: `// Dans /public/locales/en/common.json, vérifier et compléter:
{
  "footer": {
    "tagline": "Financial inclusion, one community at a time.",
    "quote": "Every €3 creates €7.50 of local value.",
    "group": "ONLYMORE Group",
    "copyright": "© 2026 COLHYBRI. All rights reserved.",
    "links": {
      "privacy": "Privacy Policy",
      "terms": "Terms of Service"
    }
  },
  "pricing": {
    "headline": "Simple, Affordable Pricing",
    "individuals": {
      "title": "For Individuals",
      "price": "€3",
      "period": "/month",
      "cta": "Get Started"
    }
  }
}`,
  },
  {
    id: 5,
    agent: "corrector",
    severity: "MINEUR",
    page: "/en (homepage)",
    title: "🔗 hero.ctaSecondary affiche clé brute",
    detail:
      "Le bouton CTA secondaire affiche 'hero.ctaSecondary' au lieu de 'Learn How It Works' ou similaire. Manque dans le fichier de traduction EN.",
    fix: `// Dans /public/locales/en/common.json:
{
  "hero": {
    "tagline": "Financial inclusion for all",
    "headline": "Every community deserves a financial home",
    "subheadline": "COLHYBRI connects underbanked individuals to their local economy through trusted local merchants.",
    "ctaPrimary": "Get Started",
    "ctaSecondary": "See How It Works"
  }
}`,
  },
];

const LOCALE_PAGES = [
  {
    locale: "🇺🇸 EN/USA",
    status: "partial",
    key: "en",
    baseUrl: "/en",
    pages: [
      { path: "/en", label: "Home", status: "broken-i18n" },
      { path: "/en/mission", label: "Mission", status: "unknown" },
      { path: "/en/how-it-works", label: "How It Works", status: "unknown" },
      { path: "/en/for-shops", label: "For Shops", status: "unknown" },
      { path: "/en/for-cities", label: "For Cities", status: "missing" },
      { path: "/en/miami", label: "Miami", status: "unknown" },
      { path: "/en/impact", label: "Impact", status: "unknown" },
      { path: "/en/pricing", label: "Pricing", status: "unknown" },
      { path: "/en/faq", label: "FAQ", status: "unknown" },
    ],
  },
  {
    locale: "🇫🇷 FR/France",
    status: "critical",
    key: "fr",
    baseUrl: "/fr",
    pages: [
      { path: "/fr", label: "Accueil", status: "unknown" },
      { path: "/fr/mission", label: "Mission", status: "unknown" },
      { path: "/fr/comment-ca-marche", label: "Comment ça marche", status: "unknown" },
      { path: "/fr/pour-les-commerces", label: "Pour les commerces", status: "missing" },
      { path: "/fr/pour-les-villes", label: "Pour les villes", status: "missing" },
      { path: "/fr/impact", label: "Impact", status: "unknown" },
      { path: "/fr/tarifs", label: "Tarifs", status: "unknown" },
      { path: "/fr/faq", label: "FAQ", status: "unknown" },
    ],
  },
  {
    locale: "🇪🇸 ES/España",
    status: "unknown",
    key: "es",
    baseUrl: "/es",
    pages: [
      { path: "/es", label: "Inicio", status: "unknown" },
      { path: "/es/mision", label: "Misión", status: "unknown" },
      { path: "/es/para-los-comercios", label: "Para comercios", status: "unknown" },
      { path: "/es/para-las-ciudades", label: "Para ciudades", status: "unknown" },
    ],
  },
  {
    locale: "🇬🇧 EN/GB",
    status: "unknown",
    key: "gb",
    baseUrl: "/en-gb",
    pages: [
      { path: "/en-gb", label: "Home", status: "unknown" },
      { path: "/en-gb/for-shops", label: "For Shops", status: "unknown" },
      { path: "/en-gb/for-cities", label: "For Cities", status: "unknown" },
    ],
  },
];

const CITY_CONTENT = {
  fr: {
    title: "COLHYBRI & Les Villes — Revitalisation des Centres",
    sections: [
      {
        h2: "Chaque abonnement crée du trafic en cœur de ville",
        body: "Quand un habitant souscrit à COLHYBRI, il s'engage à dépenser dans les commerces locaux partenaires. Chaque euro circulant localement génère jusqu'à 2,5x de valeur économique pour la ville grâce à l'effet multiplicateur keynésien. Pour une ville de 50 000 habitants avec 10% d'adhésion : 5 000 × €3 × 2,5 = 37 500€/mois injectés en centre-ville.",
        source: "Programme Cœurs de Ville — ANCT / Ministère de la Cohésion des Territoires",
        sourceUrl: "https://www.cohesion-territoires.gouv.fr/programme-action-coeur-de-ville",
      },
      {
        h2: "La désertification commerciale : un problème national",
        body: "Le taux de vacance commerciale en centre-ville français atteignait 13,4% en 2023 (BnpRE). Certaines villes moyennes dépassent 25%. Le programme Action Cœur de Ville, lancé en 2018, cible 245 villes moyennes. COLHYBRI est l'outil numérique complémentaire qui pérennise l'engagement des habitants vers leur centre.",
        source: "BnpRE Observatoire — Vacance commerciale 2023",
        sourceUrl: "https://www.bnpre.fr/nos-etudes/",
      },
      {
        h2: "Le cas Detroit : leçon mondiale de revitalisation par l'économie locale",
        body: "Detroit a perdu 60% de sa population en 50 ans (1,8M en 1950 → 600k en 2020). Sa renaissance passe par des initiatives hyperlocales : Detroit Food Hub, Eastern Market, Rock Ventures reinvestissant dans le tissu commercial local. L'outil numérique manquait : COLHYBRI est ce chaînon. Une plateforme qui transforme chaque habitant en acteur économique de sa ville.",
        source: "Detroit Future City — Strategic Framework / Brookings Institution",
        sourceUrl: "https://detroitfuturecity.com/",
      },
      {
        h2: "Augmentation mesurable du flux piéton",
        body: "Les villes partenaires de programmes d'inclusion financière locale constatent +15 à +30% de fréquentation des commerces adhérents dans les 6 premiers mois. COLHYBRI transforme les bénéficiaires en ambassadeurs actifs : chaque utilisateur recommande en moyenne 3,2 commerces locaux à son réseau (données pilote ONLYMORE 2024).",
        source: "ONLYMORE Group — Rapport d'impact pilote 2024",
        sourceUrl: "https://colhybri.vision",
      },
      {
        h2: "Repopulation : attirer de nouveaux résidents par la qualité de vie économique",
        body: "Les villes qui démontrent un tissu commercial vivant et accessible attirent de nouveaux résidents. L'indicateur 'diversité commerciale' est dans le Top 3 des critères de choix de résidence (sondage IFOP 2023). COLHYBRI donne aux villes un argument concret : ici, votre argent reste ici.",
        source: "IFOP — Enquête mobilité résidentielle 2023",
        sourceUrl: "https://www.ifop.com/",
      },
    ],
  },
  en: {
    title: "COLHYBRI & Cities — Revitalizing Downtown Cores",
    sections: [
      {
        h2: "Every subscription drives foot traffic downtown",
        body: "When a resident subscribes to COLHYBRI, they commit to spending at local partner merchants. Each locally-circulating dollar generates up to 2.5x economic value for the city through the Keynesian multiplier effect. For a city of 100,000 residents with 10% adoption: 10,000 × $3 × 2.5 = $75,000/month injected into downtown.",
        source: "Brookings Institution — Local Economic Multipliers",
        sourceUrl: "https://www.brookings.edu/",
      },
      {
        h2: "The Detroit Case: Global Lesson in Local Economy Revival",
        body: "Detroit lost 60% of its population over 50 years (1.8M in 1950 → 600k in 2020). Its renaissance comes through hyperlocal initiatives — Detroit Food Hub, Eastern Market, community reinvestment. The digital engagement tool was missing. COLHYBRI is that missing link: transforming every resident into an active economic participant in their city.",
        source: "Detroit Future City — Strategic Framework / Brookings Institution",
        sourceUrl: "https://detroitfuturecity.com/",
      },
      {
        h2: "Rust Belt communities: a $473M market opportunity",
        body: "~63 million Americans are unbanked or underbanked (FDIC 2023). COLHYBRI at $3/month, with the 2.5x local Keynesian multiplier, represents a $473M/month addressable local value opportunity. Cities in the Rust Belt — Cleveland, Pittsburgh, Gary, Flint — are primary targets. Financial inclusion IS urban revitalization.",
        source: "FDIC National Survey of Unbanked and Underbanked Households 2023",
        sourceUrl: "https://www.fdic.gov/analysis/household-survey/",
      },
    ],
  },
};

const COMMERCE_CONTENT = {
  fr: {
    title: "COLHYBRI pour les commerces — Vecteur d'engagement ESS",
    sections: [
      {
        h2: "Chaque commerce devient un hub ESS de quartier",
        body: "En rejoignant COLHYBRI, un commerce ne vend plus seulement des produits — il devient un point d'ancrage économique et social. Il incarne les valeurs de l'Économie Sociale et Solidaire (ESS) : solidarité, utilité sociale, gouvernance participative. C'est un avantage concurrentiel réel face aux grandes surfaces et au e-commerce.",
        kpi: "+23% de fidélisation client selon les pilotes ONLYMORE 2024",
      },
      {
        h2: "Augmentation directe du chiffre d'affaires",
        body: "En rejoignant le réseau COLHYBRI, un commerce accède à une base de clients engagés, pré-qualifiés, fidèles à l'économie locale. L'effet de redirection de flux est immédiat : chaque abonné COLHYBRI dépense prioritairement dans les commerces partenaires de son quartier.",
        kpi: "+18% de CA en 90 jours pour les commerces pilotes",
      },
      {
        h2: "Acteur de la santé économique collective",
        body: "Un commerce COLHYBRI n'est plus une entité isolée — il devient co-garant de la santé économique du territoire. Son abonnement contribue à maintenir des emplois locaux, à financer des services de proximité, et à renforcer la résilience économique de toute la communauté. C'est la traduction concrète du principe mutualiste : 'La santé de chacun dépend de la santé de tous'.",
        kpi: "Chaque €3 abonné génère €7.50 de valeur locale redistribuée",
      },
      {
        h2: "Outils digitaux inclus — sans surcoût",
        body: "L'adhésion au réseau COLHYBRI inclut : tableau de bord analytics, module de fidélité numérique, visibilité sur l'application, intégration paiement simplifié, et accès aux campagnes de communication collective. Des outils que les grandes chaînes ont — maintenant accessibles aux indépendants pour €0 de plus.",
        kpi: "Valeur des outils inclus estimée à €89/mois sur le marché",
      },
    ],
  },
};

function TypewriterText({ text, speed = 18, onDone }: { text: string; speed?: number; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const i = useRef(0);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    i.current = 0;
    const interval = setInterval(() => {
      if (i.current < text.length) {
        setDisplayed(text.slice(0, i.current + 1));
        i.current++;
      } else {
        setDone(true);
        clearInterval(interval);
        onDone && onDone();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  return (
    <span>
      {displayed}
      {!done && <span className="cursor">▌</span>}
    </span>
  );
}

function SeverityBadge({ level }: { level: string }) {
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    CRITIQUE: { bg: "#ff000022", border: "#ff4444", text: "#ff4444" },
    MAJEUR: { bg: "#ffaa0022", border: "#ffaa00", text: "#ffaa00" },
    MINEUR: { bg: "#00d4ff22", border: "#00d4ff", text: "#00d4ff" },
  };
  const c = colors[level] || colors.MINEUR;
  return (
    <span
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        borderRadius: 4,
        padding: "2px 8px",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 1,
        fontFamily: "monospace",
      }}
    >
      {level}
    </span>
  );
}

function AgentCard({ agent, isActive, onClick }: { agent: typeof AGENTS[number]; isActive: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: `1px solid ${isActive ? agent.color : "#333"}`,
        background: isActive ? `${agent.color}11` : "#0d0d0d",
        borderRadius: 8,
        padding: "12px 16px",
        cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: isActive ? `0 0 20px ${agent.color}33` : "none",
      }}
    >
      <div style={{ fontSize: 22 }}>{agent.icon}</div>
      <div style={{ color: isActive ? agent.color : "#888", fontWeight: 700, fontSize: 11, letterSpacing: 1, marginTop: 4 }}>
        {agent.name}
      </div>
      <div style={{ color: "#555", fontSize: 10, marginTop: 2 }}>{agent.role}</div>
    </div>
  );
}

function IssueCard({ issue, agents }: { issue: typeof PRELOADED_ISSUES[number]; agents: typeof AGENTS }) {
  const agent = agents.find((a) => a.id === issue.agent);
  const [showFix, setShowFix] = useState(false);
  return (
    <div
      style={{
        border: `1px solid ${agent?.color}44`,
        background: "#0a0a0a",
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 18 }}>{agent?.icon}</span>
        <SeverityBadge level={issue.severity} />
        <span style={{ color: "#555", fontSize: 11, fontFamily: "monospace" }}>{issue.page}</span>
      </div>
      <div style={{ color: "#eee", fontWeight: 600, marginBottom: 6 }}>{issue.title}</div>
      <div style={{ color: "#999", fontSize: 13, lineHeight: 1.6, marginBottom: 8 }}>{issue.detail}</div>
      <button
        onClick={() => setShowFix(!showFix)}
        style={{
          background: "transparent",
          border: `1px solid ${agent?.color}66`,
          color: agent?.color,
          borderRadius: 4,
          padding: "4px 12px",
          cursor: "pointer",
          fontSize: 11,
          fontFamily: "monospace",
        }}
      >
        {showFix ? "▲ MASQUER FIX" : "▼ VOIR LE FIX"}
      </button>
      {showFix && (
        <pre
          style={{
            background: "#111",
            border: `1px solid #333`,
            borderRadius: 6,
            padding: 12,
            marginTop: 10,
            fontSize: 11,
            color: "#00ff88",
            overflow: "auto",
            lineHeight: 1.5,
            fontFamily: "monospace",
          }}
        >
          {issue.fix}
        </pre>
      )}
    </div>
  );
}

function ContentSection({ title, sections }: { title: string; sections: Array<{ h2: string; body: string; kpi?: string; source?: string; sourceUrl?: string }> }) {
  return (
    <div>
      <div style={{ color: "#00ff88", fontWeight: 700, fontSize: 15, marginBottom: 16, fontFamily: "monospace" }}>
        📄 {title}
      </div>
      {sections.map((s, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #222",
            background: "#0a0a0a",
            borderRadius: 8,
            padding: 16,
            marginBottom: 12,
          }}
        >
          <div style={{ color: "#00d4ff", fontWeight: 700, marginBottom: 6 }}>H2: {s.h2}</div>
          <div style={{ color: "#bbb", fontSize: 13, lineHeight: 1.7, marginBottom: s.kpi ? 8 : 0 }}>{s.body}</div>
          {s.kpi && (
            <div
              style={{
                background: "#00ff8811",
                border: "1px solid #00ff8844",
                borderRadius: 4,
                padding: "4px 12px",
                color: "#00ff88",
                fontSize: 12,
                fontFamily: "monospace",
                marginBottom: s.source ? 8 : 0,
              }}
            >
              📊 {s.kpi}
            </div>
          )}
          {s.source && (
            <div style={{ color: "#555", fontSize: 11, fontFamily: "monospace" }}>
              Source:{" "}
              <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#888" }}>
                {s.source}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function LocaleStatus({ locale }: { locale: typeof LOCALE_PAGES[number] }) {
  const statusColors: Record<string, string> = {
    missing: "#ff4444",
    "broken-i18n": "#ffaa00",
    unknown: "#555",
    ok: "#00ff88",
  };
  const statusLabels: Record<string, string> = {
    missing: "404",
    "broken-i18n": "I18N",
    unknown: "?",
    ok: "OK",
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          color: locale.status === "critical" ? "#ff4444" : locale.status === "partial" ? "#ffaa00" : "#888",
          fontWeight: 700,
          fontSize: 13,
          marginBottom: 8,
          fontFamily: "monospace",
        }}
      >
        {locale.locale}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {locale.pages.map((page, i) => (
          <div
            key={i}
            style={{
              background: `${statusColors[page.status]}22`,
              border: `1px solid ${statusColors[page.status]}`,
              borderRadius: 4,
              padding: "3px 8px",
              fontSize: 10,
              fontFamily: "monospace",
              color: statusColors[page.status],
              display: "flex",
              gap: 4,
              alignItems: "center",
            }}
          >
            <span>{statusLabels[page.status]}</span>
            <span style={{ color: "#888" }}>{page.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ColhybriAgentTeam() {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("audit");
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [activeLocale, setActiveLocale] = useState("fr");

  const criticalCount = PRELOADED_ISSUES.filter((i) => i.severity === "CRITIQUE").length;
  const majorCount = PRELOADED_ISSUES.filter((i) => i.severity === "MAJEUR").length;
  const minorCount = PRELOADED_ISSUES.filter((i) => i.severity === "MINEUR").length;

  const filteredIssues = activeAgent
    ? PRELOADED_ISSUES.filter((i) => i.agent === activeAgent)
    : PRELOADED_ISSUES;

  async function callAgent(agentId: string, userQuery: string) {
    const agent = AGENTS.find((a) => a.id === agentId) || AGENTS[0];
    const systemPrompt = `Tu es ${agent.name} — ${agent.role} pour le site COLHYBRI (colhybri.vision).
Spécialité: ${agent.specialty}
Le site COLHYBRI est une plateforme d'inclusion financière européenne à €3/mois, filiale d'ONLYMORE Group. Stade : Pre-Seed.
Pages cibles: EN/USA, FR/France, ES/Espagne, EN/GB.
Problèmes connus:
- Toutes les clés i18n s'affichent en brut (hero.tagline, nav.mission, etc.)
- Pages 404: /fr/pour-les-villes, /fr/pour-les-commerces
- Site décalé à droite sur desktop
Réponds en français, de façon précise et actionnable. Sois direct, technique, expert.
Format: utilise des sections claires avec emoji. Max 400 mots.`;

    setAiLoading(true);
    setAiResponse("");

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{ role: "user", content: userQuery }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map((b: { text?: string }) => b.text || "").join("") || "Erreur agent.";
      setAiResponse(text);
    } catch {
      setAiResponse("❌ Erreur de connexion avec l'agent.");
    }
    setAiLoading(false);
  }

  const tabs = [
    { id: "audit", label: "🔍 AUDIT", count: PRELOADED_ISSUES.length },
    { id: "pages", label: "🗺️ PAGES", count: null },
    { id: "cities", label: "🏙️ VILLES", count: null },
    { id: "commerce", label: "🏪 COMMERCES", count: null },
    { id: "agent", label: "🤖 AGENT IA", count: null },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#e0e0e0",
        fontFamily: "'Courier New', Courier, monospace",
        padding: 0,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#0a0a0a",
          borderBottom: "1px solid #222",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#00ff88",
                boxShadow: "0 0 10px #00ff88",
                animation: "pulse 2s infinite",
              }}
            />
            <span style={{ color: "#00ff88", fontWeight: 700, fontSize: 14, letterSpacing: 2 }}>
              COLHYBRI · AGENT TEAM IA
            </span>
          </div>
          <div style={{ color: "#555", fontSize: 11, marginTop: 2 }}>
            colhybri.vision — Audit & Correction Multi-Agent
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "CRITIQUE", count: criticalCount, color: "#ff4444" },
            { label: "MAJEUR", count: majorCount, color: "#ffaa00" },
            { label: "MINEUR", count: minorCount, color: "#00d4ff" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ color: s.color, fontWeight: 700, fontSize: 20 }}>{s.count}</div>
              <div style={{ color: "#555", fontSize: 9, letterSpacing: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 70px)" }}>
        {/* Sidebar Agents */}
        <div
          style={{
            width: 160,
            background: "#080808",
            borderRight: "1px solid #222",
            padding: 12,
            flexShrink: 0,
          }}
        >
          <div style={{ color: "#444", fontSize: 9, letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>
            Agents
          </div>
          <div
            onClick={() => setActiveAgent(null)}
            style={{
              border: `1px solid ${activeAgent === null ? "#fff" : "#333"}`,
              background: activeAgent === null ? "#ffffff11" : "transparent",
              borderRadius: 8,
              padding: "8px 12px",
              cursor: "pointer",
              marginBottom: 8,
              color: activeAgent === null ? "#fff" : "#555",
              fontSize: 11,
              letterSpacing: 1,
            }}
          >
            👥 TOUS
          </div>
          {AGENTS.map((a) => (
            <div key={a.id} style={{ marginBottom: 8 }}>
              <AgentCard
                agent={a}
                isActive={activeAgent === a.id}
                onClick={() => setActiveAgent(activeAgent === a.id ? null : a.id)}
              />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: 24, overflow: "auto" }}>
          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginBottom: 24, borderBottom: "1px solid #222", paddingBottom: 0 }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: activeTab === tab.id ? "2px solid #00ff88" : "2px solid transparent",
                  color: activeTab === tab.id ? "#00ff88" : "#555",
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontSize: 11,
                  fontFamily: "monospace",
                  letterSpacing: 1,
                  fontWeight: 700,
                  marginBottom: -1,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {tab.label}
                {tab.count !== null && (
                  <span
                    style={{
                      background: "#ff444433",
                      border: "1px solid #ff444466",
                      color: "#ff4444",
                      borderRadius: 10,
                      padding: "0 6px",
                      fontSize: 9,
                    }}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* TAB: AUDIT */}
          {activeTab === "audit" && (
            <div>
              <div style={{ color: "#555", fontSize: 12, marginBottom: 20, fontFamily: "monospace" }}>
                {activeAgent
                  ? `Filtré par: ${AGENTS.find((a) => a.id === activeAgent)?.name}`
                  : `${filteredIssues.length} problèmes détectés sur colhybri.vision`}
              </div>
              {filteredIssues.map((issue) => (
                <IssueCard key={issue.id} issue={issue} agents={AGENTS} />
              ))}
              {filteredIssues.length === 0 && (
                <div style={{ color: "#444", textAlign: "center", padding: 40 }}>
                  Aucun problème détecté pour cet agent.
                </div>
              )}
            </div>
          )}

          {/* TAB: PAGES */}
          {activeTab === "pages" && (
            <div>
              <div style={{ color: "#555", fontSize: 12, marginBottom: 20 }}>
                État des pages par locale — EN/USA · FR/France · ES/España · EN/GB
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {LOCALE_PAGES.map((locale) => (
                  <div
                    key={locale.key}
                    style={{
                      border: "1px solid #222",
                      borderRadius: 8,
                      padding: 16,
                      background: "#0a0a0a",
                    }}
                  >
                    <LocaleStatus locale={locale} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, border: "1px solid #333", borderRadius: 8, padding: 16, background: "#0a0a0a" }}>
                <div style={{ color: "#ffaa00", fontWeight: 700, marginBottom: 8, fontSize: 12 }}>
                  LÉGENDE DES STATUTS
                </div>
                {[
                  { code: "404", color: "#ff4444", desc: "Page manquante — route non créée ou supprimée" },
                  { code: "I18N", color: "#ffaa00", desc: "Page existante mais clés de traduction non résolues" },
                  { code: "?", color: "#555", desc: "Statut inconnu — audit en attente" },
                  { code: "OK", color: "#00ff88", desc: "Page fonctionnelle et traduite" },
                ].map((l) => (
                  <div key={l.code} style={{ display: "flex", gap: 12, marginBottom: 6, alignItems: "center" }}>
                    <span
                      style={{
                        background: `${l.color}22`,
                        border: `1px solid ${l.color}`,
                        color: l.color,
                        borderRadius: 4,
                        padding: "1px 6px",
                        fontSize: 10,
                        fontFamily: "monospace",
                        minWidth: 30,
                        textAlign: "center",
                      }}
                    >
                      {l.code}
                    </span>
                    <span style={{ color: "#888", fontSize: 12 }}>{l.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: VILLES */}
          {activeTab === "cities" && (
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                {(["fr", "en"] as const).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setActiveLocale(loc)}
                    style={{
                      background: activeLocale === loc ? "#00ff8822" : "transparent",
                      border: `1px solid ${activeLocale === loc ? "#00ff88" : "#333"}`,
                      color: activeLocale === loc ? "#00ff88" : "#555",
                      borderRadius: 4,
                      padding: "4px 12px",
                      cursor: "pointer",
                      fontSize: 11,
                      fontFamily: "monospace",
                    }}
                  >
                    {loc === "fr" ? "🇫🇷 FR" : "🇺🇸 EN"}
                  </button>
                ))}
              </div>
              <ContentSection
                title={CITY_CONTENT[activeLocale as keyof typeof CITY_CONTENT].title}
                sections={CITY_CONTENT[activeLocale as keyof typeof CITY_CONTENT].sections}
              />
            </div>
          )}

          {/* TAB: COMMERCES */}
          {activeTab === "commerce" && (
            <div>
              <ContentSection
                title={COMMERCE_CONTENT.fr.title}
                sections={COMMERCE_CONTENT.fr.sections}
              />
              <div
                style={{
                  border: "1px dashed #333",
                  borderRadius: 8,
                  padding: 16,
                  marginTop: 16,
                  color: "#555",
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                🇺🇸 EN · 🇪🇸 ES · 🇬🇧 GB — Versions disponibles via AGENT COPY ↗
              </div>
            </div>
          )}

          {/* TAB: AGENT IA */}
          {activeTab === "agent" && (
            <div>
              <div style={{ color: "#555", fontSize: 12, marginBottom: 16 }}>
                Interroge directement un agent IA sur n&apos;importe quel problème du site.
              </div>
              {/* Agent selector */}
              <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                {AGENTS.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setActiveAgent(a.id)}
                    style={{
                      background: activeAgent === a.id ? `${a.color}22` : "transparent",
                      border: `1px solid ${activeAgent === a.id ? a.color : "#333"}`,
                      color: activeAgent === a.id ? a.color : "#555",
                      borderRadius: 4,
                      padding: "6px 12px",
                      cursor: "pointer",
                      fontSize: 11,
                      fontFamily: "monospace",
                    }}
                  >
                    {a.icon} {a.name}
                  </button>
                ))}
              </div>
              <div style={{ position: "relative", marginBottom: 16 }}>
                <textarea
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  placeholder={
                    activeAgent
                      ? `Question pour ${AGENTS.find((a) => a.id === activeAgent)?.name}...`
                      : "Sélectionne un agent ci-dessus puis pose ta question..."
                  }
                  rows={3}
                  style={{
                    width: "100%",
                    background: "#0d0d0d",
                    border: `1px solid ${activeAgent ? AGENTS.find((a) => a.id === activeAgent)?.color + "44" : "#333"}`,
                    borderRadius: 8,
                    padding: 12,
                    color: "#e0e0e0",
                    fontFamily: "monospace",
                    fontSize: 13,
                    resize: "vertical",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <button
                onClick={() => activeAgent && aiQuery.trim() && callAgent(activeAgent, aiQuery)}
                disabled={aiLoading || !activeAgent || !aiQuery.trim()}
                style={{
                  background: activeAgent ? `${AGENTS.find((a) => a.id === activeAgent)?.color}22` : "#111",
                  border: `1px solid ${activeAgent ? AGENTS.find((a) => a.id === activeAgent)?.color : "#333"}`,
                  color: activeAgent ? AGENTS.find((a) => a.id === activeAgent)?.color : "#444",
                  borderRadius: 6,
                  padding: "10px 24px",
                  cursor: aiLoading || !activeAgent || !aiQuery.trim() ? "not-allowed" : "pointer",
                  fontSize: 12,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: 1,
                  opacity: aiLoading ? 0.6 : 1,
                }}
              >
                {aiLoading ? "⚡ AGENT EN COURS..." : "⚡ INTERROGER L'AGENT"}
              </button>
              {aiResponse && (
                <div
                  style={{
                    marginTop: 20,
                    background: "#0a0a0a",
                    border: `1px solid ${activeAgent ? AGENTS.find((a) => a.id === activeAgent)?.color + "44" : "#333"}`,
                    borderRadius: 8,
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      color: activeAgent ? AGENTS.find((a) => a.id === activeAgent)?.color : "#888",
                      fontSize: 10,
                      letterSpacing: 2,
                      marginBottom: 12,
                      fontWeight: 700,
                    }}
                  >
                    {AGENTS.find((a) => a.id === activeAgent)?.icon}{" "}
                    {AGENTS.find((a) => a.id === activeAgent)?.name} — RÉPONSE
                  </div>
                  <div
                    style={{
                      color: "#ccc",
                      fontSize: 13,
                      lineHeight: 1.8,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {aiResponse}
                  </div>
                </div>
              )}
              {/* Quick prompts */}
              <div style={{ marginTop: 20 }}>
                <div style={{ color: "#444", fontSize: 10, letterSpacing: 1, marginBottom: 8 }}>REQUÊTES RAPIDES</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {[
                    { agent: "auditor", q: "Donne-moi un plan de correction prioritaire pour le bug i18n" },
                    { agent: "css", q: "Explique comment corriger le décalage à droite sur desktop" },
                    { agent: "cities", q: "Rédige le contenu complet de la page pour-les-villes en français avec des statistiques Detroit" },
                    { agent: "commerce", q: "Rédige un pitch pour convaincre un boulanger de rejoindre le réseau COLHYBRI" },
                    { agent: "corrector", q: "Génère les fichiers de traduction manquants pour ES/España" },
                  ].map((p, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveAgent(p.agent);
                        setAiQuery(p.q);
                      }}
                      style={{
                        background: "transparent",
                        border: "1px solid #333",
                        color: "#666",
                        borderRadius: 4,
                        padding: "4px 10px",
                        cursor: "pointer",
                        fontSize: 10,
                        fontFamily: "monospace",
                        transition: "all 0.2s",
                      }}
                    >
                      {AGENTS.find((a) => a.id === p.agent)?.icon} {p.q.substring(0, 45)}...
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .cursor { animation: pulse 1s infinite; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
      `}</style>
    </div>
  );
}
