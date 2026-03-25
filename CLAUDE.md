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
