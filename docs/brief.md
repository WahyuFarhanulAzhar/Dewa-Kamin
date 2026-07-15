# Project brief — Dewa Kamin Interior Design

## Overview

A one-page marketing website for **Dewa Kamin Interior Design**, an interior design studio in Toronto led by Dewa Patang. The site replicates the client's approved design (see `Copy_of_DEWAKAMINWEBSITE.pdf` and `ScreenShot Design from PDF/` in the repo root, both gitignored) as closely as possible.

## Scope

- Single static page, no CMS, no backend.
- Fully responsive: desktop, tablet, mobile.
- Client copy is **final and used verbatim** — never paraphrased or "improved".
- First version ships with clearly-labeled placeholder blocks where photography and video go; real assets are dropped in later (see [assets-needed.md](assets-needed.md)).

## Stack summary

Astro (static, TypeScript strict) + Tailwind CSS v4 + self-hosted `@fontsource` fonts + `astro:assets` image optimization + `@astrojs/sitemap`. Rationale in [stack.md](stack.md).

## Page structure (top to bottom)

1. **Announcement bar** — red, centered: `SCHEDULE A DESIGN CONSULT TODAY`
2. **Navbar** — charcoal, sticky; logo `DEWA KAMIN INTERIOR DESIGN` left; anchor links `ABOUT`, `SERVICES`, `PORTFOLIO`, `CONTACT` right; hamburger menu on mobile
3. **Hero** (`id="top"`) — red display headline over a collage of interior/exterior photos on a light gradient
4. **Philosophy** (`id="about"`) — heading `PHILOSOPHY`; black-and-white portrait left, three paragraphs + signoff right; gray gradient background
5. **Gallery / Portfolio** (`id="portfolio"`) — overlapping photo collages on dark charcoal, separated by thin divider lines; subjects: home exteriors, person on balcony/entrance, interior living rooms, staircase, dining room, kitchens
6. **Video** — embed placeholder for `DEWA INTERIOR DESIGN VIDEO` on a brick-red band (final: YouTube/Vimeo embed)
7. **Services** (`id="services"`) — heading `services`; three service blocks with sub-items; photo right; gray gradient
8. **Design Process** — heading `DESIGN PROCESS`; six numbered steps (Concept Design, Design Development, Technical Design, Tender, Construction, Project Completion) with images; light gray background
9. **Projects** — heading `PROJECTS`; dark background; one collage per project: `TORONTO RESIDENCE`, `MODERN FARMHOUSE`, `RENOVATIONS`, `DOWNTOWN CORPORATE`
10. **Contact** (`id="contact"`) — heading `CONTACT`; red subheading `Dewa Kamin Interior Design`; contact grid with icons (address, phone, email ×2, Instagram, LinkedIn, website); photo right
11. **Footer** — charcoal; logo, nav links, `BACK TO TOP`; red bottom bar `© 2026 DEWA KAMIN INTERIOR DESIGN`

## Contact details (also used in JSON-LD)

- Office: 121 Forest Heights Blvd, Toronto Canada M2L 2K7
- Phone: (416) 820-8669 (`tel:` link)
- Email: info@dewakamin.com, dewapatang@gmail.com (`mailto:` links)
- Instagram: @DewaKaminInteriorDesign
- LinkedIn: linkedin.com/DewaKaminInteriorDesign
- Website: www.dewakamin.com

## Non-functional requirements

- **Performance** — static HTML, zero unnecessary client JS (only the mobile menu toggle script), self-hosted fonts, all images optimized to WebP/AVIF with responsive `srcset` and lazy loading via `astro:assets`.
- **SEO** — `<title>`, meta description, canonical, Open Graph/Twitter tags, `lang="en"`, sitemap (`@astrojs/sitemap`), `robots.txt`, JSON-LD `LocalBusiness` schema.
- **Responsive** — collages reflow to clean stacks on mobile; type scale steps down at each breakpoint.
- **Accessibility** — semantic landmarks (`header`/`main`/`footer`/`section`), one `h1`, ordered heading levels, descriptive alt text on every image, keyboard-reachable nav, `aria-expanded` on the menu toggle.

## Deliverables

- Working responsive one-page site with placeholder imagery
- Documentation: `CLAUDE.md`, `README.md`, `docs/` (this file, design.md, stack.md, assets-needed.md)
- Git repository with sensible `.gitignore` (client PDF and screenshots excluded)

## Open items (not decided yet)

- [x] High-res photography — received 2026-07-11 and implemented (see [assets-needed.md](assets-needed.md))
- [ ] Final video hosting + link (YouTube/Vimeo preferred; source file `DEWA INTERIOR DESIGN VIDEO-FINAL_Rev8.mp4` is in the photo delivery folder)
- [ ] Exact brand fonts (current fonts are visual approximations — see [design.md](design.md))
- [x] Contact link behavior — announcement bar links to `#contact` (client request 2026-07-14); emails stay `mailto:`
- [ ] Domain & hosting (assumed `www.dewakamin.com`; Cloudflare Pages / Netlify / Vercel all fine — see [stack.md](stack.md))
