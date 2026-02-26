# COLHYBRI.VISION — Audit Initial Structure

**Date** : 2026-02-25
**Auteur** : Agent 1 — Architect
**Repo** : DOJUKU-SHINGI- (colhybri.vision)

---

## 1. Stack Technique

| Composant | Version |
|-----------|---------|
| Next.js | ^14.2.0 |
| React | ^18.3.0 |
| TypeScript | ^5.4.0 |
| Tailwind CSS | ^3.4.0 |
| next-intl | ^3.22.0 |
| Framer Motion | ^11.0.0 |

## 2. Structure du Projet

```
/ (racine — pas de src/)
├── app/
│   ├── layout.tsx (root layout)
│   ├── globals.css
│   ├── sitemap.ts
│   └── [locale]/
│       ├── layout.tsx (locale layout + NextIntlClientProvider)
│       ├── page.tsx (homepage)
│       ├── mission/page.tsx
│       ├── how-it-works/page.tsx
│       ├── pricing/page.tsx
│       ├── impact/
│       │   ├── page.tsx (impact hub)
│       │   └── [region]/page.tsx (pages regionales dynamiques)
│       ├── for-individuals/page.tsx
│       ├── for-shops/page.tsx
│       ├── for-cities/page.tsx
│       ├── miami/page.tsx
│       ├── ecosystem/page.tsx
│       ├── investors/page.tsx
│       ├── blog/
│       │   ├── page.tsx (listing)
│       │   └── [slug]/page.tsx (articles dynamiques)
│       ├── faq/page.tsx
│       └── contact/page.tsx
├── components/
│   ├── AnimatedCounter.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HreflangTags.tsx
│   ├── JsonLd.tsx
│   ├── LanguageSwitcher.tsx
│   ├── GeoLegendSwitcher.tsx
│   ├── LegendHero.tsx
│   ├── LegendCard.tsx
│   ├── LocalStats.tsx
│   ├── StatCard.tsx
│   ├── ThirdPlaceHero.tsx
│   └── trust/
│       ├── index.ts
│       ├── GlobalImpactCounter.tsx
│       ├── RegionHero.tsx
│       ├── TrustMapSection.tsx
│       └── WorldTrustMap.tsx
├── data/
│   ├── trust-data.ts (9 regions, donnees centralisees)
│   ├── geo-legends.ts (12 legendes culturelles)
│   └── countries.json (donnees marche par locale)
├── lib/
│   ├── metadata.ts (Schema.org + SEO)
│   ├── navigation.ts (routes localisees + hreflang)
│   └── culturalMapping.ts (locale → region → legende)
├── messages/ (11 fichiers i18n)
│   ├── en.json, en-gb.json, fr.json, es.json, pt.json
│   ├── de.json, it.json, zh.json, ja.json, hi.json, pl.json
├── public/
│   ├── robots.txt
│   ├── llms.txt, llms-full.txt
│   └── .well-known/ai-context.json
├── i18n.ts
├── middleware.ts
├── next.config.mjs
└── tailwind.config.ts
```

## 3. Locales Supportees (11)

| Locale | Langue | Fichier messages |
|--------|--------|------------------|
| en | English (US) | messages/en.json |
| en-gb | English (UK) | messages/en-gb.json |
| fr | Francais | messages/fr.json |
| es | Espanol | messages/es.json |
| pt | Portugues (BR) | messages/pt.json |
| de | Deutsch | messages/de.json |
| it | Italiano | messages/it.json |
| zh | Zhongwen | messages/zh.json |
| ja | Nihongo | messages/ja.json |
| hi | Hindi | messages/hi.json |
| pl | Polski | messages/pl.json |

## 4. Regions trust-data.ts (9)

| Region | Solitude | Confiance | Non-bancarise | Potentiel |
|--------|----------|-----------|---------------|-----------|
| france | 55% | 22% | 5% | 5/5 |
| usa | 30% | 55% | 5% | 4/5 |
| brazil | 50% | 25% | 30% | 5/5 |
| japan | 40% | 50% | 2% | 4/5 |
| india | 43% | 40% | 11% | 5/5 |
| eastern-europe | 35% | 38% | 22% | 3/5 |
| uk | 38% | 40% | 3% | 4/5 |
| canada | 33% | 48% | 4% | 4/5 |
| africa | 45% | 35% | 42% | 5/5 |

## 5. Composants Trust UI

- **StatCard.tsx** : Affiche stat individuelle (value + label + source)
- **GlobalImpactCounter.tsx** : 3 stats mondiales animees (count-up au scroll)
- **RegionHero.tsx** : headline + 3 StatCards + insight + colhybriAnswer
- **WorldTrustMap.tsx** : SVG interactif, regions cliquables, couleur par potentiel
- **TrustMapSection.tsx** : Section wrapper pour le trust map

## 6. Schema.org / JSON-LD

Fonctions existantes dans `lib/metadata.ts` :
- `generateOrganizationJsonLd()` — FinancialService + areaServed mondial
- `generateWebSiteJsonLd()` — WebSite avec SearchAction
- `generateFAQJsonLd()` — FAQ dynamique
- `generateBreadcrumbJsonLd()` — Breadcrumb
- `generateProductJsonLd()` — Offres produit
- `generateMythologyJsonLd()` — CreativeWork legendes
- `generateLocalBusinessJsonLd()` — LocalBusiness Miami

## 7. Sitemap & Robots

- `app/sitemap.ts` : Genere dynamiquement routes + regions + articles
- `public/robots.txt` : Allow all, Disallow /api/ /admin/, Sitemap: colhybri.vision

## 8. Configuration i18n

- **Middleware** : next-intl, localePrefix: 'always'
- **Routes localisees** : 20+ routes avec slugs traduits (routeMap)
- **Hreflang** : Generation automatique pour toutes les locales + x-default
- **BASE_URL** : https://colhybri.vision

## 9. Articles Blog Existants (5)

1. `financial-inclusion-why-it-matters` (en, es, fr)
2. `miami-capital-financial-inclusion` (en, es, fr)
3. `keynesian-multiplier-local-value` (en, es, fr)
4. `hummingbird-economy` (en, es, fr)
5. `local-shops-financial-hubs` (en, es, fr)

## 10. Lacunes Identifiees

- [ ] 7 articles SEO manquants (tiers-lieu-numerique, crise-confiance, etc.)
- [ ] Sitemap ne reference pas les nouveaux articles
- [ ] Build validation requise

---

**Statut** : Audit complet. Transmission aux agents 2-5.
