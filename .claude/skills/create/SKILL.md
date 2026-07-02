---
name: create
description: Build the client's new website (Next.js App Router + TypeScript + Tailwind v4) at the repo root, using our design-library + shadcnblocks blocks + the client's WIKI.md + FEEL.md — reinterpreting their signature motifs with a personalized feeling instead of copying their site. Use after /feel, when the user says "create", or asks to build/rebuild the client's site. Step 3 of the wiki → feel → create pipeline.
argument-hint: [domain]
allowed-tools: Read, Glob, Grep, Write, Edit, Bash(npx create-next-app *), Bash(npx shadcn *), Bash(npm install *), Bash(npm i *), Bash(npm run *), Bash(mv *), Bash(mkdir *), Bash(cp *), Bash(python3 .claude/skills/ui-ux-pro-max/scripts/search.py *), WebFetch
---

# /create — build the site they should have

Their content, our craft. The result must be visibly *theirs* (name, logo, true facts, real copy substance) and visibly *not their old site* (our layout, typography, and treatments, driven by FEEL.md).

## 1. Resolve and require

Resolve the client folder (same rule as /feel: `$ARGUMENTS`, else the single `clients/<domain>/`, else ask). Hard requirements:
- `WIKI.md` + `DESIGN.md` missing → stop: run `/wiki <site>` first.
- `FEEL.md` missing → stop: run `/feel` first. Never improvise the feeling.

If a Next.js app already exists at the repo root (`app/` + `package.json`), this is an **iteration**: skip scaffolding, apply changes incrementally, and confirm with the user before anything destructive.

## 2. Ingest

Read `FEEL.md` (the brief), `DESIGN.md` (brand anchors), `WIKI.md`, the `pages/*.md` you need for content, `design-library/README.md` (component index), and 2–3 screenshots — as the thing to **diverge from**, not copy.

## 3. Creative direction (checkpoint)

First sharpen the direction with our craft skills — mechanics + the guardrails that keep each in its lane are in [references/design-skills.md](references/design-skills.md):

- **`/frontend-design`** — brainstorm a token system + one **Signature**, then critique it against the brief and its three "AI-default" looks. It sharpens *execution*; FEEL.md still owns the motifs, DESIGN.md the palette.
- **`ui-ux-pro-max`** — mine UX rules and structure, never palette: `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<sector> layout ux" --domain ux` and `--stack nextjs`. Ignore its colors/fonts — DESIGN.md wins.

Then draft and show the user before writing code:

- **Concept** — one paragraph: the feeling the new site delivers and how.
- **Keep** — brand anchors from DESIGN.md: logo, name, true brand colors, real copy facts.
- **Change** — what we deliberately drop or invert from their current site (per the say–show gap).
- **Signature moves** — 2–4 reinterpretations chosen from FEEL.md's table, each mapped to a concrete technique from [references/reinterpretation-playbook.md](references/reinterpretation-playbook.md). One carries the frontend-design **Signature**; none should read as a templated default.
- **Pages** — home + 2–4 more (from WIKI.md's structure; less is fine).

Adjust to feedback, then record the final version — concept, keep/change, signature moves — as a comment block at the top of `app/page.tsx` or in the report. Don't proceed while the user objects.

## 4. Scaffold (fresh builds only)

The repo root already has files, and `create-next-app` refuses non-empty dirs — scaffold into a temp dir and move:

```bash
npx create-next-app@latest .scaffold-tmp --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --yes
```

Then from `.scaffold-tmp/`: **discard** its `README.md`; **merge** its `.gitignore` lines into ours; `mv` everything else (including dotfiles) to the repo root; remove `.scaffold-tmp`. Set the package.json `name` to the client slug (dots/invalid chars → dashes). If the scaffold fails (offline/registry), say so and stop rather than hand-rolling a broken app.

The template already ships `components.json`, `.mcp.json`, and `.env.local` (the shadcnblocks registry + key) at the repo root — **keep them**; the scaffold's `mv` must not clobber them. Then wire the library:
- `tsconfig.json` → `compilerOptions.paths`: add `"@library/*": ["./design-library/*"]`.

## 5. Design system: tokens + shadcn bridge

This step is what makes both our components **and** every shadcnblocks block render in the client's design system.

1. Install the shadcn runtime (so blocks and their `ui/*` primitives compile): `npm i class-variance-authority clsx tailwind-merge lucide-react tw-animate-css`. Write `lib/utils.ts` with the standard `cn()` helper (`clsx` + `tailwind-merge`).
2. Rebuild `app/globals.css` in this order:
   ```css
   @import "tailwindcss";
   @import "tw-animate-css";
   @import "../design-library/index.css";   /* --dl-* tokens + treatments */
   /* ...paste design-library/shadcn-tokens.css here (the bridge)... */
   ```
   Then set the client's real values on the `--dl-*` tokens (in a `:root` override): `--dl-ink`, `--dl-paper`, `--dl-paper-soft`, `--dl-ink-soft`, `--dl-accent`, `--dl-radius-md`, `--dl-font-body`, `--dl-font-display` — all from DESIGN.md brand anchors + direction. The bridge feeds those into shadcn's `--primary`/`--background`/`--radius`/etc., so blocks follow automatically. If a brand color fails contrast, adjust and note the divergence in the direction record.
3. Fonts via `next/font` (Google families from DESIGN.md, else a close stack); assign their CSS vars to `--dl-font-body` / `--dl-font-display`.
4. Copy **only the images the direction uses** from `clients/<domain>/assets/images/` into `public/images/`, logo included. Never hotlink the client's live site.

## 6. Blocks (shadcnblocks) for structure

Use blocks to move fast on conventional sections; keep the signature moments ours. Full guide: [references/blocks-workflow.md](references/blocks-workflow.md).

- **Discover** via the `shadcn` MCP server (`mcp__shadcn__*`, natural language scoped to `@shadcnblocks`) or `npx shadcn@latest view @shadcnblocks/<id>`.
- **Add**: `npx shadcn@latest add @shadcnblocks/<id>` (reads `.env.local` for auth; vendors the block + its `ui/*` primitives into `components/`).
- **Re-skin audit** every added block: grep for hardcoded colors/fonts (`bg-white`, `text-gray-*`, `#hex`, `bg-blue-*`, hardcoded font families) and swap to token utilities (`bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `border-border`). The bridge handles well-built blocks automatically — this catches the rest.
- **Never** ship a stock block for a section FEEL.md marks signature. Blocks carry layout; our library components carry the feeling (swap a block's avatar row for `SketchPortrait`, its photo grid for `TreatedImage`, its logo grid for `Marquee`, its stat row for `StatBlock`).

## 7. Build

Order: layout shell → home, section by section → secondary pages → polish.

- `app/layout.tsx`: metadata from WIKI.md (title, description, OG), header with logo + nav, footer with real contact data.
- Each section is either a **re-skinned block** (conventional structure) or a **library composition** (signature moments) — both draw the same tokens, so the page reads as one system. Copy substance comes from `pages/*.md`, tightened in their tone (FEEL.md) — never invent facts, clients, or numbers.
- **Anti-clone rule**: after each section, compare against the client screenshots — if it reads like their old site restyled, redo the section, not the palette.
- **Feel** — apply our exact polish values per section ([references/design-skills.md](references/design-skills.md) → make-interfaces-feel-better): concentric radius (`outer = inner + padding`), press `scale-0.96`, image outlines `rgba(0,0,0,.1)` / `rgba(255,255,255,.1)`, `text-wrap: balance` headings + `pretty` body, `tabular-nums` on `StatBlock` count-ups, stagger ~100ms with exit faster than enter, never `transition: all`. Need a framework pattern? `ui-ux-pro-max --stack nextjs`/`shadcn`.
- Polish: responsive at 390/768/1440, real alt text from the wiki, `prefers-reduced-motion` respected (library components already do).

## 8. Contribute back

Pick 1–3 genuinely reusable new components, generalize them per `design-library/docs/adding-components.md` (props + `--dl-*` vars, origin comment), move them into `design-library/components/`, import via `@library/*`, and add index lines to `design-library/README.md`. This is how the library grows — don't skip it. (Re-skinned shadcnblocks blocks stay in the app; only your own generalized pieces go back to the library.)

## 9. Verify and report

- `npm run build` must exit 0 — fix until it does.
- Start the dev server, confirm `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000` → 200, then stop it.
- Run `/web-design-guidelines app/**/*.tsx components/**/*.tsx` — the automated web-standards / a11y compliance pass (Vercel WIG, `file:line`; needs internet). Fix what it flags.
- Then suggest `/rams` for the broad human accessibility/design review. These two are the pair (automated standards + judgment) — don't stack every overlapping checklist; see [references/design-skills.md](references/design-skills.md).

Report: the concept recap · pages built · each signature move (FEEL.md motif → technique → file) · shadcnblocks blocks used (and re-skinned) · library components used and contributed · design skills applied (direction · polish · audit + any WIG fixes) · build status · `npm run dev` to view.
