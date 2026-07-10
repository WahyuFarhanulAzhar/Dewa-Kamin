# src/assets/

Drop **high-res source images** here (JPEG/PNG/TIFF, uncompressed originals).

Images in this folder are imported by components and rendered through `astro:assets` (`<Image />` / `<Picture />`), which handles WebP/AVIF conversion, responsive `srcset`, sizing, and lazy loading at build time — never pre-resize or pre-compress.

See [docs/assets-needed.md](../../docs/assets-needed.md) for the full list of required shots.
