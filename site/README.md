# aaronvarghese — portfolio

Personal-brand portfolio for **Aaron Varghese**. Dark graphite instrument-panel
world, one warm ember signal color, Clash Display + Satoshi + JetBrains Mono.
Built with Next.js 16 (App Router, JS), Tailwind v4, and `motion`.

## Run it

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Before you ship — drop these in

1. **`public/resume.pdf`** — every "Résumé ↓" button points at `/resume.pdf`.
   Export your résumé as PDF and drop it in `public/` with that exact name.
2. **LinkedIn URL** — placeholder in `components/contact.jsx` (marked `TODO`).
3. **Instagram handle** — placeholder in `components/contact.jsx` (marked `TODO`).
4. **Domain** — `metadataBase` in `app/layout.js` currently says
   `aaronvarghese.dev`; change it to whatever domain you buy.
5. **Email** — a plain `mailto:` link in the contact dock (no reveal-on-click,
   no obfuscation — the address is visible in the page source).

## Where things live

| Thing | File |
|---|---|
| Colors, grain, schematic grid, keyframes | `app/globals.css` (design tokens in `@theme`) |
| Fonts (Clash Display, Satoshi — self-hosted) | `app/fonts/` + `app/layout.js` |
| Glowing project cards (Aceternity, re-skinned) | `components/glowing-effect.jsx` |
| Contact icon dock (Aceternity, re-skinned) | `components/floating-dock.jsx` |
| Decoder/scramble text + section eyebrows | `components/scramble.jsx` |
| Projects & the shelf | `components/projects.jsx` |
| Everything else | one component per section in `components/` |

## Deploy

Push to GitHub → import on [Vercel](https://vercel.com/new) → done.
Zero config needed; the site is fully static.
