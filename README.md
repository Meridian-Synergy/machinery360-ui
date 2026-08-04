# machinery360-ui

Design system for [Machinery360](https://github.com/Meridian-Synergy) — Vue 3 + Storybook.

Machinery360 helps owners of heavy equipment (mini-excavators, loaders…) know **what to service,
when, where on the machine, and with what**. This repo holds the shared UI layer for its front-ends.

## Install & run

```bash
pnpm install
pnpm storybook       # component workshop on :6006
pnpm verify          # lint + typecheck + test + build-storybook
```

## Consuming it

The DS is a **direct dependency** (GitHub tarball pinned to a commit in the consumer's
lockfile) — it is **not published to npm**.

```jsonc
// consumer package.json
"dependencies": {
  "machinery360-ui": "github:Meridian-Synergy/machinery360-ui"
}
```

```ts
import { McButton, McCard } from 'machinery360-ui'
```

```css
/* once, in the consumer's global stylesheet */
@import "machinery360-ui/tokens/tokens.css";
@import "machinery360-ui/tokens/base.css";
```

> ⚠️ Fixing a defect here is **not** immediately visible downstream. Merge to `main`, then run
> `pnpm update machinery360-ui` in the consumer and rebuild — otherwise the deployed app keeps
> the old commit.

## Conventions

- **Tokens** — every charter value is a CSS var (`--mc-*`). Components always write
  `var(--token, literal-fallback)`; a consumer that hasn't declared the token layer must still
  render. A CI guard enforces this.
- **Themes** — `[data-theme='dark']` overrides semantic tokens only. Check every UI change in
  **both** themes (toolbar switch in Storybook): most theme bugs are visible only to the eye, and
  usually only in the theme you did *not* develop in.
- **One CTA system** — `McButton` with a fixed semantic taxonomy (primary / secondary / warning /
  danger / ghost). Never mix in local `.btn-*` classes.
- **Loading** — `McLoadingState` for a page or section, `McSpinner` inline. Never a text-only
  "Loading…", never a copied spinner SVG.
- **Icons** — SVG only, `currentColor` + `aria-hidden`. No emoji (system-font rendering, and
  screen readers vocalize them). Enforced by a CI guard.

## Charter

Amber (action) on steel (structure). The amber is a **deliberate declination** — Rippa is a
third-party trademark, and until a written agreement exists we use a neighbouring hue and never
the exact brand value or logotype.

## Storybook

Published to GitHub Pages on every `main` push. The pages carry `noindex` meta tags: this repo is
public so Pages is free, but the workshop has no business being indexed.
