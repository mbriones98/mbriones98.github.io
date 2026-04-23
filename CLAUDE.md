# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev      # start dev server
bun run build    # production build
bun run check    # TypeScript + Svelte type checking
bun run preview  # preview the production build locally
```

## Architecture

Single-page SvelteKit app using **Svelte 5 runes mode** (enforced project-wide via `svelte.config.js` — `$state`, `$props`, `$derived` only, no legacy reactive syntax).

**Tab navigation pattern:** `+page.svelte` owns `activeTab = $state('about')` and conditionally renders one of three section components. `TabNav` receives `activeTab` and an `onTabChange` callback via props — no stores, no routing, just local state.

**Component locations:**
- `src/lib/components/sections/` — full-page content sections (`About`, `Projects`, `Contact`)
- `src/lib/components/ui/` — reusable UI primitives (`TabNav`)

**Styling:** Plain CSS scoped to each component via `<style>` blocks. Design tokens are CSS custom properties defined in `src/lib/styles/global.css` (colors, spacing, typography, layout). Use those variables (`--accent`, `--surface`, `--space-lg`, etc.) rather than hardcoded values.

**Data:** Hardcoded — no CMS, no API, no stores. Two patterns:
- Section-local data (e.g. `skills`, `projects`) lives inline in the section component's `<script>` block.
- Shared data consumed by multiple components (e.g. `contactLinks`, used by both `About` and `Contact`) lives in `src/lib/constants/` as typed exports. Both consumers iterate via `Object.values(...)` since the export is `Record<Type, Value>` rather than an array, to enforce exhaustiveness against the key union.

**Icons:** Uses `@lucide/svelte` for generic icons (`Mail`, etc.). **Brand icons (`Github`, `Linkedin`) are NOT in `@lucide/svelte` v1+** — they were removed for trademark reasons. Custom Svelte components for brand marks live in `src/lib/assets/` (e.g. `Github.svelte`, `Linkedin.svelte`), built from official brand SVGs and using `currentColor` so they inherit text color for hover states. Don't try to import brand icons from `@lucide/svelte`.

**Adapter:** Currently uses `svelte-adapter-bun`. To deploy to Vercel/Netlify/Cloudflare, swap it for the matching adapter in `svelte.config.js` and `package.json`.

## Workflow notes

Keep `bun run dev` running while editing. SvelteKit generates ambient type declarations into `.svelte-kit/` for `.svelte` files — without the dev server's file watcher, those declarations go stale on rename/move and VSCode's TS server reports phantom "Cannot find module" errors. `bun run check` and `bun run prepare` also regenerate them on demand.
