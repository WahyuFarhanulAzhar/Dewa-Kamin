# Design system — Dewa Kamin Interior Design

Tokens are defined once in `src/styles/global.css` (Tailwind v4 `@theme` block) and used everywhere as Tailwind utilities (`bg-accent`, `font-display`, …). **Never hardcode color values or font names in components.** Colors are sampled directly from the client PDF (`Copy_of_DEWAKAMINWEBSITE.pdf`); fonts are the exact families embedded in it.

## Color tokens

| Token | Value | Usage |
| --- | --- | --- |
| `accent` | `#aa1212` | Announcement bar, hero headline, contact subheading, copyright bar |
| `rust` | `#8c371f` | Video band background |
| `charcoal` | `#252626` | Navbar, footer |
| `espresso` | `#1f1c17` | Gallery + projects overview backgrounds |
| `cocoa` | `#201712` | Project showcase backgrounds (Farmhouse / Downtown) |
| `taupe` | `#4a4641` | Renovations showcase background |
| `mist-light` | `#e7e6e6` | Design process flat background |
| `fog` | `#9c9c9c` | Dark edge of the light gradients (philosophy/contact/hero) |
| `umber` | `#4b3e3e` | Dark corner of the services gradient; contact icons |
| `hairline` | `#d9cbae` | Thin warm rule lines (process, contact) |
| `bone` | `#d8d5d0` | Muted white headings on dark sections |
| `ink` | `#1a1a18` | Near-black text on light sections |
| `paper` | `#faf9f7` | Off-white page background |

Gradients: philosophy & contact use `bg-gradient-to-r from-white to-fog`; hero `to-b from-white to-fog/60`; services `to-br from-white via-fog to-umber`.

## Typography

Exact families extracted from the PDF. FoglihtenNo06 and CMU Serif are self-hosted woff2 in `src/assets/fonts/` (both SIL OFL, license files included); Arapey / EB Garamond / Montserrat come from Fontsource. Gilroy Light and Gotham Book in the PDF are commercial — Montserrat substitutes for both.

| Role | Token | Font | Usage (PDF size -> site size at lg) |
| --- | --- | --- | --- |
| Display | `font-display` | **FoglihtenNo06** | Logo (40->44px nav, 32->40px footer), section headings (`PHILOSOPHY` 49->61, `services`/`DESIGN PROCESS` 80->100, `PROJECTS` 73->91, `CONTACT` 64->80), red contact subheading (31->39), step titles (21->27), contact labels (14->18), showcase titles (47-54 -> ~4vw) |
| Hero | `font-hero` | **Arapey** | Hero headline only (35.6 -> 3.45vw) |
| Body | `font-body` | **EB Garamond** | Paragraphs (16->20), top-nav links (19.7->24), announcement bar (18->22), project labels (22->28) |
| Services | `font-services` | **CMU Serif** | Services block titles (25-27 -> 31) and items (19 -> 24, tight 1.3 leading) |
| Sans | `font-sans` | **Montserrat** (sub for Gilroy/Gotham) | Contact values (13->16 light), footer links (14.5->18), BACK TO TOP (10->13), copyright (12->15) |

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
5. **Gallery** — `charcoal` background, nine collage groups separated by `hr` lines (`white/20`), following the full PDF page order: exteriors → full-width exterior → entrance & person collage → office/living → staircase & dining → kitchens → bedrooms & staircase details → bathrooms & wellness → living rooms & outdoors. Groups mix centered single photos with overlapping 2–3 photo collages (grid column overlap + top-margin offsets at `lg:`). On mobile every collage flattens to a single stacked column with even gaps.
6. **Video** — full-bleed `accent` band; centered 16:9 embed placeholder with play glyph. Final: YouTube/Vimeo iframe, lazy-loaded.
7. **Services** — mist gradient. Huge lowercase `services` display heading; three service blocks (display sub-heading + plain body list) left, portrait photo right. Single column on mobile, photo last.
8. **Design Process** — flat `mist-light`. Display heading; six steps in a 2-column staggered grid (even steps pushed down at `md:`), each step = image placeholder + `NN. TITLE` + paragraph. Single column mobile.
9. **Projects** — `charcoal`. Display heading; four project rows, each a tight strip of 3–4 images (`gap-1`) with a Cormorant label beneath; rows alternate left/right alignment on desktop, stack full-width on mobile.
10. **Contact** — mist gradient. Display `CONTACT` heading; centered red Cormorant subheading; thin divider; 2-column icon grid (address, phone, email, Instagram, LinkedIn, website) with inline SVG icons left, portrait photo right. Phone is `tel:`, emails are `mailto:`.
11. **Footer** — `charcoal`; centered `BACK TO TOP` link (chevron, scrolls to `#top`), logo left + nav links right below it, then full-width `accent` bar with the copyright line.

## Imagery

All photos render through `src/components/Photo.astro` → `astro:assets` `<Image />` with `format="avif"`, `quality={60}`, `widths={[640, 1024, 1600]}` and per-slot `sizes`. The wrapper div carries the slot's `aspect-ratio` with `object-cover`, so collage compositions hold regardless of source crop. Hero images load eagerly; everything else lazy-loads.

## Motion

- **Fade-ins (GSAP + ScrollTrigger, `src/scripts/animations.ts`)** — elements tagged `data-fade` fade/rise in once when scrolled into view; `data-fade-group` staggers its direct children (used for collages, service blocks, contact grid). Fully disabled under `prefers-reduced-motion`.
- **Microinteractions** — nav/footer links have an animated growing underline (`.link-underline` in `global.css`); photos zoom subtly on hover (scale 1.03 inside the clipped wrapper); the `BACK TO TOP` chevron nudges upward on hover. All CSS-only and reduced-motion-safe.
