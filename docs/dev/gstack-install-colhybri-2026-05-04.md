# gstack — install/config sur COLHYBRI.vision

## Métadonnées

- **Date** : 2026-05-04 (timezone Europe/Paris)
- **Heure d'install** : ~21:16 UTC (sandbox container)
- **Mode** : INSTALL FRESH (gstack absent avant cette session)
- **Environnement** : sandbox container Claude Code on the web (NON la workstation locale Florent)
- **Branche Git** : `claude/install-gstack-colhybri-lSIBA`
- **Repo** : FLOW2203/COLHYBRI-vision

## Source

- Upstream : https://github.com/garrytan/gstack
- Auteur : Garry Tan (YC President)
- Commit hash installé : `db9447c3339950bb0506c547e5b3225f5def3854`
- Version gstack (VERSION file) : `1.26.3.0`

## Commandes exécutées

```bash
# Backup atomique
cp -r ~/.claude ~/.claude.backup-colhybri-20260504-211640

# Clone
git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack

# Setup global avec préfixe
cd ~/.claude/skills/gstack && ./setup --prefix
```

## Métriques

| Métrique                                  | Valeur                  |
|-------------------------------------------|-------------------------|
| Skills custom AVANT install               | 1 (`session-start-hook`)|
| Skills `gstack-*` enregistrés (.gbrain)   | 46                      |
| Skills custom APRÈS install               | 2 (`session-start-hook` + `gstack`) |
| Skills custom disparus                    | 0                       |
| `colhybri-deploy` préservé                | N/A — absent en pré-vol (sandbox, voir note ci-dessous) |
| `colhybri-security` préservé              | N/A — absent en pré-vol (sandbox, voir note ci-dessous) |

## Liste exhaustive des 46 skills `gstack-*` enregistrés

```
gstack
gstack-autoplan
gstack-benchmark
gstack-benchmark-models
gstack-browse
gstack-canary
gstack-careful
gstack-claude
gstack-context-restore
gstack-context-save
gstack-cso
gstack-design-consultation
gstack-design-html
gstack-design-review
gstack-design-shotgun
gstack-devex-review
gstack-document-release
gstack-freeze
gstack-guard
gstack-health
gstack-investigate
gstack-land-and-deploy
gstack-landing-report
gstack-learn
gstack-make-pdf
gstack-office-hours
gstack-open-gstack-browser
gstack-pair-agent
gstack-plan-ceo-review
gstack-plan-design-review
gstack-plan-devex-review
gstack-plan-eng-review
gstack-plan-tune
gstack-qa
gstack-qa-only
gstack-retro
gstack-review
gstack-scrape
gstack-setup-browser-cookies
gstack-setup-deploy
gstack-setup-gbrain
gstack-ship
gstack-skillify
gstack-sync-gbrain
gstack-unfreeze
gstack-upgrade
```

Localisation : `~/.claude/skills/gstack/.gbrain/skills/`

## Note importante — Bypass pré-vol acté

Le pré-vol initial a détecté l'absence de `colhybri-deploy` et `colhybri-security`
dans `~/.claude/skills/`. Conformément aux instructions, l'install s'est arrêtée
et a remonté l'anomalie. Florent a confirmé le bypass volontaire en répondant
"ok go" : cet environnement est un sandbox Claude Code on the web fraîchement
provisionné, distinct de la workstation locale ONLYMORE qui héberge réellement
les 130+ skills custom.

**Conséquence** : aucun skill custom à préserver dans cet environnement.
La règle de coexistence (`colhybri-deploy` / `colhybri-security` priorité
absolue) reste écrite dans `CLAUDE.md` et s'appliquera quand la session
s'exécutera sur la workstation locale.

## Limitation Playwright Chromium

Le `./setup --prefix` a réussi (exit 0) mais le téléchargement du binaire
Playwright Chromium 145.0.7632.6 a été bloqué par l'allowlist réseau du
sandbox (`cdn.playwright.dev` retourne `403 Host not in allowlist`).

**Impact** : les skills browser-dépendants (`/gstack-qa`, `/gstack-browse`,
`/gstack-open-gstack-browser`, `/gstack-scrape`, `/gstack-design-html`)
seront inopérants tant que le binaire n'est pas installé. Sur la workstation
locale Florent, le download passera normalement et ces skills seront actifs.

Tous les autres skills (review, plan-*, retro, cso, office-hours, etc.) sont
opérationnels.

## Coexistence avec les skills custom COLHYBRI

`CLAUDE.md` a été étendu (APPEND, pas overwrite) avec une section
`## gstack integration` qui formalise :

- `colhybri-deploy` reste **primary tool** pour le ship Vercel.
- `colhybri-security` reste **base de référence** pour l'audit sécurité,
  exécuté EN PREMIER avant tout `/gstack-cso` qui ne fait que compléter.
- `/gstack-ship` et `/gstack-land-and-deploy` ne doivent PAS être lancés
  sur COLHYBRI tant qu'un audit comparatif n'a pas été fait.

## Procédure de rollback

```bash
rm -rf ~/.claude
mv ~/.claude.backup-colhybri-20260504-211640 ~/.claude
```

Et côté repo, pour défaire le commit (si pas encore push) :

```bash
git reset --hard HEAD~1
```

## Action recommandée post-install

1. Sur la workstation locale Florent, refaire le pré-vol pour vérifier que
   `colhybri-deploy` et `colhybri-security` sont bien présents avant
   l'install gstack.
2. Une fois sur la workstation, tester `/gstack-qa` sur **1 seule locale**
   (ex: `fr`) avant de scaler aux 13 locales — pour calibrer le coût/temps.
3. Ne jamais lancer `/gstack-ship` ou `/gstack-land-and-deploy` sur COLHYBRI
   sans avoir audité au préalable ce que ces skills font vs. `colhybri-deploy`.
