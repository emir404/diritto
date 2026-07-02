# Contributing components back to the library

`/create` builds client-specific sections freely. When a piece turns out to be
genuinely reusable, it gets generalized into the library — that is how the
library grows. One to three contributions per project is the healthy rate.

## Qualifies

- Solves a **recurring shape** (a proof wall, a team grid, a photo treatment),
  not a one-off layout for this client.
- Works with **any** palette/typeface via `--dl-*` custom properties — no
  hardcoded client colors, copy, or asset paths.
- Zero dependencies beyond React + Tailwind utilities + library CSS.

## Checklist

1. Strip client specifics: copy → props, colors → `var(--dl-*)`, images → `src` props.
2. Add the header comment: what it is, when to use it, `Origin: <client-domain>, <year-month>`.
3. `'use client'` only if it truly needs state/effects.
4. Handle `prefers-reduced-motion` if it animates.
5. Any CSS goes in `treatments/*.css` (prefixed `.dl-`) and gets imported in `index.css`.
6. Add one line to the component index in `design-library/README.md`.

## Naming

Components describe **what they do, not who they were built for**:
`SketchPortrait`, not `AcmeTeamPhoto`.
