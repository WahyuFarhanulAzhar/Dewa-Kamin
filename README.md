# Dewa Kamin Interior Design

One-page marketing website for **Dewa Kamin Interior Design**, a Toronto-based interior design studio. Static, fully responsive, SEO-optimized.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), self-hosted fonts, zero unnecessary client JavaScript.

## Quick start

```sh
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build
```

## Project layout

```text
/
├── CLAUDE.md              # context file for Claude Code (rules & conventions)
├── docs/                  # brief, design system, stack notes, asset checklist
├── public/                # robots.txt, favicon — copied as-is
├── src/
│   ├── assets/            # high-res source images (optimized via astro:assets)
│   ├── components/        # one component per page section
│   ├── layouts/           # BaseLayout.astro (head, SEO, fonts)
│   ├── styles/            # global.css — Tailwind + design tokens
│   └── pages/
│       └── index.astro    # assembles all sections in order
└── astro.config.mjs
```

## Status

First working version with **placeholder image blocks** — real photography and the studio video will be dropped in later. See [docs/assets-needed.md](docs/assets-needed.md) for the full list of assets still needed, and [docs/brief.md](docs/brief.md) for scope and open items.
