# Speedy Monograms

Marketing website for **Speedy Monograms** — custom embroidery & printing in
Albany, Auckland. A redesign built with Vite + React, aiming for a timeless,
elegant feel (deep royal navy, warm paper, Cormorant Garamond / EB Garamond).

## Tech

- [Vite](https://vitejs.dev) + React 18
- React Router (Home / Services / Contact)
- Plain CSS design system in `src/index.css` (custom properties, no framework)
- Google Fonts: Cormorant Garamond, EB Garamond, Jost

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
public/
  favicon.svg
  images/store-interior.jpg   # the one authentic photo we had; see "Assets" below
src/
  components/  Logo, Navbar, Footer, Reveal (scroll-in animation)
  pages/       Home, Services, Contact
  data.js      business details + services (single source of truth)
  index.css    the full design system
```

## Assets

- **Logo:** the real Speedy Monograms crest, `public/logo.png`. The original
  export had an opaque white background, so a transparent version was generated
  (white knock-out) — it's rendered white on dark surfaces via a CSS filter
  (`.logo--light`). Swap the file if you get official brand artwork.
- **Photos:** licence-free stock from [Unsplash](https://unsplash.com) (free to
  use, no attribution required), chosen to match the trade — embroidery
  machines, thread spools, screen printing and apparel. They live in
  `public/images/` and are referenced from `src/data.js` and `src/pages/*.jsx`.
  Replace any of them with your own photography by dropping a file in
  `public/images/` and updating the path.
- **Favicon:** `public/favicon.svg` (a small SVG "SM" mark).

## Deploying to Cloudflare Pages

This Vite/React SPA works out of the box on Cloudflare Pages:

1. Push this repo to GitHub/GitLab (a **private** repo is fine — Cloudflare
   Pages supports private repos; you just grant its app access to the repo).
2. In Cloudflare → Workers & Pages → Create → Pages → connect the repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - (Optional) set env var `NODE_VERSION` to `20` or `22`.
4. `public/_redirects` (`/* /index.html 200`) is already included so client-side
   routes like `/services` and `/contact` resolve on direct load / refresh.

## Business details

Contact info, address, hours and the service list live in `src/data.js` — edit
there and it updates everywhere.
