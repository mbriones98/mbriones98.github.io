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

**Data:** All content (projects list, skills, contact links) is hardcoded as typed arrays/objects in each section component's `<script>` block — no CMS, no API, no stores.

**Adapter:** Currently uses `svelte-adapter-bun`. To deploy to Vercel/Netlify/Cloudflare, swap it for the matching adapter in `svelte.config.js` and `package.json`.
