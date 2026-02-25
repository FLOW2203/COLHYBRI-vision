# DELTA REPORT — COLHYBRI.VISION
## Audit existant vs cible multi-agent | Fevrier 2026

---

## Section A — DEJA PRESENT (ne pas toucher)

### Locales & i18n
- **11 locales** configurees : en, en-gb, fr, es, pt, de, it, zh, ja, hi, pl
- **11 fichiers messages/** JSON complets
- **next-intl** 3.22.0 configure dans `i18n.ts` + `middleware.ts`
- Middleware locale-prefix `always` fonctionnel
- `lib/culturalMapping.ts` : mapping locale -> region/devise/legende

### Pages existantes (17 routes)
- `/[locale]/page.tsx` (home)
- `/[locale]/mission/page.tsx`
- `/[locale]/how-it-works/page.tsx`
- `/[locale]/pricing/page.tsx`
- `/[locale]/impact/page.tsx` (avec GlobalImpactCounter + TrustMapSection)
- `/[locale]/impact/[region]/page.tsx` (dynamique, toutes regions x toutes locales)
- `/[locale]/for-individuals/page.tsx`
- `/[locale]/for-shops/page.tsx`
- `/[locale]/for-cities/page.tsx`
- `/[locale]/miami/page.tsx`
- `/[locale]/ecosystem/page.tsx`
- `/[locale]/investors/page.tsx`
- `/[locale]/blog/page.tsx` + `/[locale]/blog/[slug]/page.tsx` (5 articles)
- `/[locale]/faq/page.tsx`
- `/[locale]/contact/page.tsx`

### Composants existants
| Composant | Fichier | Status |
|-----------|---------|--------|
| StatCard | `components/StatCard.tsx` | Complet (region, locale, statIndex) |
| RegionHero | `components/trust/RegionHero.tsx` | Complet (regionId, locale) |
| GlobalImpactCounter | `components/trust/GlobalImpactCounter.tsx` | Complet (locale, count-up, sources DOM) |
| WorldTrustMap | `components/trust/WorldTrustMap.tsx` | SVG leger, 7 regions, hover+click |
| TrustMapSection | `components/trust/TrustMapSection.tsx` | Wrapper avec navigation |
| LegendHero | `components/LegendHero.tsx` | Complet (locale -> legende -> rendu) |
| LegendCard | `components/LegendCard.tsx` | Complet (legendId, locale, compact) |
| GeoLegendSwitcher | `components/GeoLegendSwitcher.tsx` | Navigation horizontale (currentGeo, locale) |
| AnimatedCounter | `components/AnimatedCounter.tsx` | Complet |
| Header / Footer | `components/Header.tsx` / `Footer.tsx` | Complet multilingue |
| HreflangTags | `components/HreflangTags.tsx` | Complet |
| JsonLd | `components/JsonLd.tsx` | Complet |

### Donnees existantes
- **`data/trust-data.ts`** : 7 regions (france, usa, brazil, japan, india, eastern-europe, africa)
  - Interfaces : `RegionLocaleData`, `RegionData` avec `legendRef`
  - `GLOBAL_STATS` avec sources detaillees
  - Helper `getRegionForLocale()`, `ALL_REGIONS`, `LOCALE_DEFAULT_REGION`
- **`data/geo-legends.ts`** : 12 legendes (fr, en-gb, en, es, pt, de, it, ja, zh, hi, pl, africa)
  - Interface `GeoLegend` avec `colorPalette`, `schemaType`, `seoKeywords`
  - `SOLIDARITY_THEME`, `getLegendForLocale()`, `getColorPaletteForLocale()`

### Schema.org JSON-LD (lib/metadata.ts)
- `generateOrganizationJsonLd()` — FinancialService, 9 pays areaServed
- `generateWebSiteJsonLd()` — SearchAction
- `generateFAQJsonLd()` — FAQ dynamique
- `generateBreadcrumbJsonLd()` — Fil d'Ariane
- `generateProductJsonLd()` — Plans Individual + Shop
- `generateMythologyJsonLd()` — CreativeWork par legende
- `generateLocalBusinessJsonLd()` — Miami
- `generatePageMetadata()` — Metadata + hreflang + semantic tags AI

### SEO
- `app/sitemap.ts` — Dynamique : toutes routes x locales + impact/[region] + blog
- `public/robots.txt` — Allow all + bots IA specifiques
- `public/.well-known/ai-context.json`, `public/llms.txt`, `public/llms-full.txt`

---

## Section B — PARTIELLEMENT PRESENT (enrichir seulement)

### trust-data.ts — Regions manquantes
| Region | Status | Action requise |
|--------|--------|----------------|
| france | Present (fr, en) | Aucune |
| usa | Present (en, fr) | Aucune |
| brazil | Present (pt, en, fr) | Aucune |
| japan | Present (ja, en) | Aucune |
| india | Present (hi, en) | Aucune |
| eastern-europe | Present (pl, en, fr) | Aucune |
| africa | Present (fr, en) | Aucune |
| **uk** | **ABSENT** | **Creer avec locales en, fr** |
| **canada** | **ABSENT** | **Creer avec locales en, fr** |

### WorldTrustMap.tsx — Regions SVG manquantes
- 7 regions presentes (france, usa, brazil, japan, india, eastern-europe, africa)
- **Manquant** : uk, canada

### Blog articles — Slugs manquants
5 articles existants (financial-inclusion, miami, keynesian-multiplier, hummingbird-economy, local-shops)
**Articles a creer** :
| Locale | Slug | Priorite |
|--------|------|----------|
| fr | tiers-lieu-numerique-definition | HIGH |
| fr | crise-confiance-france-2026 | HIGH |
| fr | legende-colibri-solidarite | HIGH |
| en | digital-third-place-concept | HIGH |
| en | global-trust-crisis-2025 | HIGH |
| en | hummingbird-legends-solidarity | HIGH |
| pt | terceiro-lugar-digital | MEDIUM |
| ja | digital-third-place-japan | MEDIUM |
| pl | cyfrowe-trzecie-miejsce-polska | MEDIUM |
| es | colibri-quechua-economia-solidaria | MEDIUM |

### BASE_URL
- Actuel : `https://colhybri.com`
- Cible : `https://colhybri.vision`
- Fichiers impactes : `lib/navigation.ts`, `app/[locale]/layout.tsx`, `public/robots.txt`

---

## Section C — TOTALEMENT ABSENT (creer from scratch)

| Element | Action |
|---------|--------|
| Regions uk + canada dans trust-data.ts | Creer avec donnees completes |
| Regions uk + canada dans WorldTrustMap SVG | Ajouter paths SVG |
| 10 nouveaux articles blog SEO | Ajouter au systeme blog existant |
| URLs articles dans sitemap.ts | Ajouter au tableau blogArticles |

---

## Section D — INCOMPATIBILITES DETECTEES

### 1. Architecture de routage
- **Existant** : `/[locale]/...` via next-intl (locale-based routing)
- **Prompt cible** : `/[geo]/...` (geo-based routing en parallele)
- **Decision** : NE PAS creer de routing `/[geo]` — le systeme existant `/[locale]/impact/[region]` couvre deja tous les cas d'usage. Creer un routing parallele casserait le middleware next-intl.

### 2. Structure des interfaces trust-data.ts
- **Existant** : `stat1Label`, `stat1Value`, `stat1Source` (champs plats)
- **Prompt cible** : `stat1: { label, value, source }` (objets imbriques)
- **Decision** : Conserver la structure existante (plate). Modifier casserait StatCard, RegionHero, et la page impact/[region].

### 3. GLOBAL_STATS structure
- **Existant** : Valeurs directes + objet `sources` separe
- **Prompt cible** : Chaque stat avec `{ value, source }`
- **Decision** : Conserver l'existant. GlobalImpactCounter fonctionne avec.

### 4. geo-legends.ts — cles par locale vs geo-code
- **Existant** : Cles par locale (`fr`, `en`, `ja`)
- **Prompt cible** : Cles par geo-code (`fr`, `uk`, `ca`, `pe`, `ke`)
- **Decision** : Conserver les cles par locale. LegendHero, LegendCard, GeoLegendSwitcher dependent de cette convention.

### 5. Blog systeme
- **Existant** : Articles inline dans `blog/[slug]/page.tsx` (objet JS)
- **Prompt cible** : Articles MDX avec frontmatter
- **Decision** : Conserver le systeme inline existant. Pas d'infrastructure MDX dans le projet. Ajouter les nouveaux articles au systeme existant.

---

## PLAN D'EXECUTION

1. Ajouter regions `uk` + `canada` a `trust-data.ts`
2. Ajouter paths SVG `uk` + `canada` a `WorldTrustMap.tsx`
3. Ajouter 10 articles SEO au systeme blog existant
4. Mettre a jour `sitemap.ts` avec nouveaux articles
5. Mettre a jour `BASE_URL` vers `colhybri.vision`
6. Mettre a jour `robots.txt` avec URL colhybri.vision
7. `npm run build` — zero erreur
8. Commit + push
