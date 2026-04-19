# COLHYBRI-VISION — Claude Code Project Config

## Identite
- Projet: COLHYBRI-VISION (site vitrine)
- Groupe: ONLYMORE Group
- CEO: Florent Gibert
- GitHub: FLOW2203/COLHYBRI-vision

## Regles absolues
- Supabase ref COLHYBRI = `isuzbpzwxcagtnbosgjl` UNIQUEMENT
- JAMAIS `ydzuywqzzbpwytwwfmeq` nulle part
- git config: user.email "onlymore2024@gmail.com" / user.name "Florent Gibert"
- Jamais "solidarity" dans contenu US — utiliser "community support"
- Si un fix echoue 2x → STOP, cat le fichier complet, demander diagnostic

## Stack
- Next.js 14 + React 18 + TypeScript + Tailwind 3
- next-intl 3.22 (i18n FR/EN)
- framer-motion 11 (animations)
- Vercel (deploy): prj_7yIiCGVa2tFW4AyLZ04LyMTiQVZs

## COMMANDE /dream
Quand l'utilisateur tape /dream, executer :

1. **ORIENT** — cat .claude/memory.md + ls .claude/session/
2. **SIGNAL** — grep -r "ERROR\|WARN\|obsolete\|TODO" .claude/session/*.jsonl 2>/dev/null | head -50
3. **CONSOLIDATE** — Fusionner doublons, convertir dates relatives en absolues, resoudre contradictions
4. **PRUNE** — Supprimer entrees obsoletes, maintenir memory.md < 200 lignes
5. **UPDATE** — Mettre a jour last_dream avec date absolue (ex: 25 Mars 2026 19h)

## Règles de non-régression colhybri.vision (audit 2026-04-19)

### Doctrine ONLYMORE
- Slogan FR : "Chaque geste compte. Le vôtre aussi." (accent OBLIGATOIRE sur vôtre)
- Slogan EN : "Own Your Neighborhood. Own Your Future."
- Stéphane Picard = Fundraising Partner (Winvesty). JAMAIS CTO.
- Zéro free pilot. Modèle 100% subscription. Utiliser "turnkey deployment" / "déploiement clé en main".
- CTA : "Réserver un rendez-vous" / "Book a meeting". JAMAIS "Souscrire" / "Sign up".
- Pricing : Basic 3€/$3, Standard 10€/$10, Premium/Maps+ 15€/$15, Carte Cadeau solidaire.
- Email : onlymore2024@gmail.com UNIQUEMENT (JAMAIS contact@colhybri.vision).
- Ville : Rodilhan (30230), Occitanie.

### i18n
- 11 locales : en, en-gb, fr, es, pt, de, it, zh, ja, hi, pl.
- Script `npm run i18n:check` doit retourner 0 missing avant tout commit sur main.
- Accents FR obligatoires dans TOUS les titres, slogans, footer, CTAs (voir scripts/i18n-check.js).

### Routing
- `/solution` = source de vérité (pas `/how-it-works`). Redirects 301 configurés dans next.config.mjs.
- `/en/solution/community-pool` = alias anglais de `/fr/solution/pool-solidaire` (doctrine "community support" en US).
- `/fr/pour-les-villes` et autres slugs localisés gérés par rewrites.

### Git
- Commits avec onlymore2024@gmail.com / Florent Gibert.
- Conventional commits (fix/feat/chore + scope).

