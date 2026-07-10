# Stack — choices & rationale

## Astro (static output, TypeScript strict)

- **Zero-JS by default** — every section is plain HTML/CSS; the only shipped script is the mobile menu toggle. Ideal for the "fast loading" priority.
- **SEO-friendly** — fully rendered static HTML, first-class `<head>` control, official sitemap integration.
- **Built-in image optimization** — `astro:assets` (`<Image />` / `<Picture />`) converts to WebP/AVIF, generates responsive `srcset`, sets width/height (no CLS), and lazy-loads by default. No extra tooling needed when real photos arrive.
- Scaffolded from the official minimal template; `tsconfig.json` extends `astro/tsconfigs/strict`.

## Tailwind CSS v4

- Added with the official `npx astro add tailwind` (installs the `@tailwindcss/vite` plugin — Tailwind v4 has no `tailwind.config.js`; theme lives in CSS).
- Design tokens defined once in `src/styles/global.css` under `@theme` → generates `bg-accent`, `font-display`, etc. Components never hardcode values.

## Fonts — self-hosted via Fontsource

- `@fontsource-variable/bodoni-moda`, `@fontsource-variable/playfair-display`, `@fontsource-variable/cormorant-garamond`, `@fontsource-variable/eb-garamond`.
- Imported in `src/layouts/BaseLayout.astro`; served from our own origin (no Google Fonts CDN — better privacy, no third-party request, GDPR-safe).
- Variable fonts = one file per family for all weights.
- These approximate the client's fonts; to swap: change the imports in `BaseLayout.astro` and the `--font-*` tokens in `global.css`.

## Integrations

- `@astrojs/sitemap` — emits `sitemap-index.xml` at build (requires `site` in `astro.config.mjs`, set to `https://www.dewakamin.com`). Referenced from `robots.txt` and a `<link rel="sitemap">`.

## Deployment options (not decided yet)

Any static host works — the build output is plain files in `dist/`:

| Host | Notes |
| --- | --- |
| **Cloudflare Pages** | Fastest global edge, generous free tier. Build command `npm run build`, output `dist` |
| **Netlify** | Simple Git-based deploys, form handling if a contact form is ever added |
| **Vercel** | Same Git workflow, good preview deploys |

All three: connect the repo → set build command `npm run build`, publish directory `dist` → point the `dewakamin.com` DNS at the host.

## Setup / run

```sh
npm install       # Node >= 22.12 (see package.json engines)
npm run dev       # http://localhost:4321
npm run build     # outputs static site + sitemap to dist/
npm run preview   # serve dist/ locally
```
