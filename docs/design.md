# Design system — Dewa Kamin Interior Design

Tokens are defined once in `src/styles/global.css` (Tailwind v4 `@theme` block) and used everywhere as Tailwind utilities (`bg-accent`, `font-display`, …). **Never hardcode color values or font names in components.** All values are close approximations of the client PDF, to be fine-tuned against the design later.

## Color tokens

| Token | Value | Usage |
| --- | --- | --- |
| `accent` | `#9b2d1f` | Deep brick red — announcement bar, hero headline, video band, contact subheading, footer copyright bar |
| `charcoal` | `#1e1e1b` | Navbar, footer, gallery & projects backgrounds |
| `mist-light` | `#e8e8e8` | Gray gradient start — Philosophy, Services, Process, Hero, Contact backgrounds |
| `mist-dark` | `#cfcfcf` | Gray gradient end |
| `ink` | `#1a1a18` | Near-black body text on light sections |
| `paper` | `#faf9f7` | Off-white page background |
| white / `white/xx` | — | Text on dark sections; divider lines on charcoal use `white/20` |

Gradients: light sections use `bg-gradient-to-b` or `bg-gradient-to-br` from `mist-light` to `mist-dark`.

## Typography

Self-hosted variable fonts via `@fontsource-variable/*`. These are **visual approximations** of the client's fonts and are easy to swap: change the `@fontsource` imports in `src/layouts/BaseLayout.astro` and the three `--font-*` tokens in `global.css`.

| Role | Token | Font | Usage |
| --- | --- | --- | --- |
| Display | `font-display` | Bodoni Moda (fallback: Playfair Display) | Section headings (`PHILOSOPHY`, `services`, `DESIGN PROCESS`, …), hero headline, service/step subheadings, contact labels |
| Logo & nav | `font-logo` | Cormorant Garamond | Logo wordmark, nav links, project labels, red contact subheading |
| Body | `font-body` | EB Garamond | Paragraphs, lists, announcement bar, small utility text |

### Responsive type scale (Tailwind steps)

| Element | Mobile | Tablet (sm) | Desktop (lg) |
| --- | --- | --- | --- |
| Hero headline | `text-3xl` | `text-4xl` | `~text-5xl` |
| Section headings (h2) | `text-4xl` | `text-5xl` | `text-6xl` (`services`: up to `text-7xl`) |
| Sub-headings (h3) | `text-xl`–`text-2xl` | `text-2xl`–`text-3xl` | — |
| Logo | `text-2xl` | `text-3xl` | `text-4xl` |
| Nav links | `text-lg` | — | `text-xl` |
| Body | `text-lg` | `text-xl` | — |

Headings use `tracking-wide`/letterspaced uppercase (exception: `services` is lowercase per the design). Nav/logo use wider tracking (`0.06em`–`0.12em`).

## Spacing

- Section vertical padding: `py-16` mobile → `lg:py-24` desktop (gallery sub-groups: `py-12`/`py-16`).
- Content container: `max-w-7xl mx-auto` with `px-4 sm:px-6 lg:px-10` gutters.
- Collage gaps: `gap-4`–`gap-6` when stacked; overlaps via grid column overlap + margin offsets at `lg:`.
- Body copy measure: `max-w-prose`.

## Per-section design notes

1. **Announcement bar** — `accent` background, centered white uppercase body-font line. Static (not sticky).
2. **Navbar** — `charcoal`, `sticky top-0 z-50`. Two-line logo (constrained to ~15ch) left, uppercase Cormorant links right. Below `md`: hamburger toggling a full-width dropdown panel (only client JS on the site). Anchor links scroll smoothly (CSS `scroll-behavior`), sections have `scroll-margin-top` so the sticky bar never covers them.
3. **Hero** — light mist gradient. Red display headline top-left; 4-photo collage: staircase interior tucked behind the headline, tall cabinet portrait center (overlapping), fireplace shot offset lower right, large home exterior bottom-left. On mobile everything stacks: headline, then photos in order.
4. **Philosophy** — `bg-gradient-to-br` mist. Left: B&W portrait letterboxed on a black panel (portrait pushed down from the heading line). Right: display heading + three body paragraphs + two-line signoff. Stacks portrait-first on mobile.
5. **Gallery** — `charcoal` background, six collage groups separated by `hr` lines (`white/20`). Groups mix centered single photos with overlapping 2–3 photo collages (grid column overlap + top-margin offsets at `lg:`). On mobile every collage flattens to a single stacked column with even gaps.
6. **Video** — full-bleed `accent` band; centered 16:9 embed placeholder with play glyph. Final: YouTube/Vimeo iframe, lazy-loaded.
7. **Services** — mist gradient. Huge lowercase `services` display heading; three service blocks (display sub-heading + plain body list) left, portrait photo right. Single column on mobile, photo last.
8. **Design Process** — flat `mist-light`. Display heading; six steps in a 2-column staggered grid (even steps pushed down at `md:`), each step = image placeholder + `NN. TITLE` + paragraph. Single column mobile.
9. **Projects** — `charcoal`. Display heading; four project rows, each a tight strip of 3–4 images (`gap-1`) with a Cormorant label beneath; rows alternate left/right alignment on desktop, stack full-width on mobile.
10. **Contact** — mist gradient. Display `CONTACT` heading; centered red Cormorant subheading; thin divider; 2-column icon grid (address, phone, email, Instagram, LinkedIn, website) with inline SVG icons left, portrait photo right. Phone is `tel:`, emails are `mailto:`.
11. **Footer** — `charcoal`; centered `BACK TO TOP` link (chevron, scrolls to `#top`), logo left + nav links right below it, then full-width `accent` bar with the copyright line.
