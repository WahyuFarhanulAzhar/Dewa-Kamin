# Dewa Kamin Interior Design — website

One-page static marketing site for a Toronto interior design studio, built with Astro + Tailwind CSS. Fast loading and strong SEO are the top priorities.

## Stack

- **Astro** (static output, TypeScript strict) — see [docs/stack.md](docs/stack.md)
- **Tailwind CSS v4** via `@tailwindcss/vite` — tokens live in `src/styles/global.css` (`@theme` block)
- **Self-hosted fonts** via `@fontsource-variable/*` (imported in `BaseLayout.astro`, no CDN)
- **`astro:assets`** for all image optimization (`<Image />` / `<Picture />`)
- **@astrojs/sitemap** — `site` is set to `https://www.dewakamin.com` in `astro.config.mjs`

## Commands

- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

## Folder conventions

- `src/components/` — one `.astro` component per page section, assembled in order in `src/pages/index.astro`
- `src/layouts/BaseLayout.astro` — `<head>` (SEO meta, Open Graph, JSON-LD LocalBusiness), font imports
- `src/styles/global.css` — Tailwind import + design tokens + base styles
- `src/assets/` — high-res source images (optimized through `astro:assets` at build time)
- `docs/` — project brief, design system, stack notes, asset checklist
- `Copy_of_DEWAKAMINWEBSITE.pdf` and `ScreenShot Design from PDF/` — client design reference (gitignored, do not delete)

## Hard rules

1. **All images go through `astro:assets`** — always via `src/components/Photo.astro`, which enforces AVIF output (`format="avif"`), responsive `srcset`, and lazy loading. Every image must have descriptive `alt` text. Source photos live in `src/assets/photos/` (pre-sized to ≤2560px, JPEG q90; the AVIF encode happens at build/request time).
2. **Every section must be fully responsive** (mobile / tablet / desktop). Collages must reflow cleanly on small screens.
3. **Copy is final.** Never paraphrase, "improve", correct, or re-case any client copy. It is used verbatim from [docs/brief.md](docs/brief.md).
4. **Use the design tokens** from [docs/design.md](docs/design.md) (defined in `src/styles/global.css`). Never hardcode colors or font names in components.
5. **Keep client JS minimal.** Allowed scripts: the mobile menu toggle and the GSAP fade-in animations in `src/scripts/animations.ts` (elements opt in via `data-fade` / `data-fade-group`; disabled under `prefers-reduced-motion`). Smooth scroll is CSS-only. Do not add other client JS without need.

## Detail docs

- [docs/brief.md](docs/brief.md) — scope, page structure, requirements, open items
- [docs/design.md](docs/design.md) — color/typography/spacing tokens, per-section design notes
- [docs/stack.md](docs/stack.md) — stack rationale, deployment options
- [docs/assets-needed.md](docs/assets-needed.md) — checklist of real assets the client still needs to deliver
