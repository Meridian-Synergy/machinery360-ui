# CLAUDE.md — machinery360-ui

Design system Machinery360 (Vue 3 + Storybook). Les règles transverses vivent dans la skill
`poc-playbook` et `POC_PLAYBOOK/02-DS-UI.md` — ce fichier ne porte que le **spécifique repo**.

## Préfixe et charte

- Composants préfixés **`Mc*`**, un dossier par composant (`src/components/McButton/`).
- Tokens **`--mc-*`** dans `src/tokens/tokens.css`, couche de base dans `base.css`.
- Charte : **ambre (action) sur acier (structure)**.

⚠️ **L'ambre est une déclinaison délibérée, pas la couleur de marque Rippa.** Rippa est une
marque tierce ; tant qu'il n'y a pas d'accord écrit, jamais la valeur exacte ni le logotype.
Cf. `docs/MACHINERY360_CADRAGE.md` §3.1.

## Tokens sémantiques du métier

`--mc-bucket-overdue` / `-due` / `-soon` / `-done` portent les **trois seaux** (en retard /
maintenant / bientôt) qui sont le cœur du produit. Toute surface qui affiche une échéance les
utilise — web, app et emails doivent dire la même chose avec la même couleur.

## Garde-fous automatiques (`test/tokens-fallback.spec.ts`)

Quatre guards tournent en CI, chacun encodant une règle qui a coûté un bug ailleurs :

1. **Fallbacks** — tout `var(--mc-*)` d'un composant a un littéral de repli.
2. **Props collection** — toute prop tableau/objet optionnelle a un défaut `() => []`.
3. **Icônes** — ni emoji ni glyphe détourné (`✓ ✕ → ★`) dans le rendu.
4. **Export** — tout dossier de composant est exporté par `src/index.ts`.

Les commentaires de code sont exclus du scan : un `⚠️` en commentaire est de la doc, pas une icône.

## Thèmes

`[data-theme='dark']` ne surcharge que les tokens **sémantiques**. **Vérifier toute modif UI dans
les deux thèmes** (bascule dans la barre d'outils Storybook) — un build vert ne prouve rien sur
le rendu, et la plupart des bugs de thème n'apparaissent que dans celui où l'on n'a pas développé.

## Propagation vers les consommateurs

Le DS est consommé en **tarball GitHub épinglé au commit**. Après un merge ici :
`pnpm update machinery360-ui` côté app/web + rebuild, sinon le déployé garde l'ancien commit.

## Régime CI — valider sur le poste, livrer par la CI

Denis travaille seul : une CI de PR ne protège personne d'un collègue, elle répète
ce que le poste sait déjà, plus lentement. Depuis le 2026-08-07 (alignement sur
waypoint360, cf. `POC_PLAYBOOK/15-CI-SOLO.md`) :

- **Validation** — `pnpm verify`, accroché à `.githooks/pre-push`.
  À installer une fois par clone : `git config core.hooksPath .githooks`.
- **Filet** — `ci-light.yml` sur les PR : **tests unitaires seuls**, pour le cas où
  le hook a été contourné. Ce n'est pas une validation.
- **CI complète** — `ci-full.yml`, en sommeil (`workflow_dispatch`), contenu intact,
  lançable à la main depuis l'onglet Actions.
- **Livraison** — reste entièrement en CI. Ne jamais la déplacer sur le poste : une
  production qui dépend de l'état d'une machine un mardi soir n'est pas une production.
