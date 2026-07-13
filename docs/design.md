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

- The PDF canvas is 1024px wide; site sizes scale it by 1.25 to a 1280px container (`max-w-[1280px]`), except full-bleed sections (hero, showcases) which span the viewport.
- Section vertical padding: `py-16` mobile → `lg:py-14`–`lg:py-20` desktop, matching each PDF page's own margins.
- Collage gaps: `gap-4`–`gap-6` when stacked on mobile; at `lg:` collages use measured percentage positions/overlaps instead of gaps.

## Per-section design notes (PDF page refs)

1. **Announcement bar** (p1) — `accent` background, centered white uppercase EB Garamond line. Static (not sticky).
2. **Navbar** (p2) — `charcoal`, `sticky top-0 z-50`. Two-line FoglihtenNo06 logo left, uppercase EB Garamond links right. Below `md`: hamburger toggling a full-width dropdown panel. Anchor links scroll smoothly (CSS `scroll-behavior`), sections have `scroll-margin-top`.
3. **Hero** — full-bleed background video (client feedback 2026-07-14, replaces the PDF p3 collage): the compressed studio video autoplays muted/looped behind a white->transparent legibility scrim, with the Arapey red headline overlaid vertically centered in the left half. Autoplay is disabled under `prefers-reduced-motion` (poster shows instead). Sized so announcement bar + navbar + hero fit in 100svh.
4. **Philosophy** (p4) — `bg-gradient-to-r from-white to-fog`. Left: B&W portrait letterboxed on a black panel (~34% wide, pushed below the heading line). Right: FoglihtenNo06 heading + three EB Garamond paragraphs + two-line signoff. Stacks portrait-first on mobile.
5. **Gallery** (p5–45) — `espresso` background, nine collage groups separated by `hr` lines (`white/20`), following the PDF page order: exteriors → full-width exterior → entrance & person collage → office/living → staircase & dining → kitchens → bedrooms & staircase details → bathrooms & wellness → living rooms & outdoors. On mobile every collage flattens to a single stacked column.
6. **Video** (p52) — full-bleed `rust` band; centered 16:9 embed placeholder with play glyph. Final: YouTube/Vimeo iframe, lazy-loaded.
7. **Services** (p53) — `to-br from-white via-fog to-umber` gradient. Huge lowercase FoglihtenNo06 `services`; three CMU Serif blocks (nowrap titles, tight 1.3-leading lists) left, 2:3 photo right. Single column on mobile, photo last.
8. **Design Process** (p54–55) — flat `mist-light`. Two "page" blocks, each repeating the FoglihtenNo06 heading like the PDF, with a hairline rule beneath and 3-column collage rows (image/text mixes with `border-hairline` vertical rules). Single column mobile.
9. **Projects** (p56) — `espresso`, `bone` heading. Four photo strips at measured widths (72% / 55% / 53% / 47%, alternating left/right) with uniform row height and per-image width fractions; EB Garamond label beneath each strip.
10. **Project showcases** (p57 / p62 / p65) — full-bleed `aspect-[1024/586]` collages for MODERN FARMHOUSE (`cocoa`), RENOVATIONS (`taupe`), DOWNTOWN CORPORATE (`cocoa`), each with a `bone` FoglihtenNo06 title overlaid top-right. Stacked cards on mobile.
11. **Contact** (p66) — `to-r from-white to-fog` gradient. FoglihtenNo06 `CONTACT`; red FoglihtenNo06 subheading offset left-of-center; hairline rules above and below the body. Left column: address / phone / email / website; right column: Instagram / LinkedIn — labels in FoglihtenNo06, values in light Montserrat, `umber` icons. 2:3 photo right. Phone is `tel:`, emails are `mailto:`.
12. **Footer** (p67–68) — `charcoal`; centered Montserrat `BACK TO TOP` (chevron, scrolls to `#top`), FoglihtenNo06 logo left + Montserrat nav links, then full-width `accent` copyright bar.

## Imagery

All photos render through `src/components/Photo.astro` → `astro:assets` `<Image />` with `format="avif"`, `quality={60}`, `widths={[640, 1024, 1600]}` and per-slot `sizes`. The wrapper div carries the slot's `aspect-ratio` (or `ratio="fill"` to fill an absolutely-positioned box) with `object-cover`, so collage compositions hold regardless of source crop. Hero images load eagerly; everything else lazy-loads.

## Motion

- **Fade-ins (GSAP + ScrollTrigger, `src/scripts/animations.ts`)** — elements tagged `data-fade` fade/rise in once when scrolled into view; `data-fade-group` staggers its direct children (used for collages, service blocks, contact grid). Fully disabled under `prefers-reduced-motion`.
- **Microinteractions** — nav/footer links have an animated growing underline (`.link-underline` in `global.css`); photos zoom subtly on hover (scale 1.03 inside the clipped wrapper); the `BACK TO TOP` chevron nudges upward on hover. All CSS-only and reduced-motion-safe.
