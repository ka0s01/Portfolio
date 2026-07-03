# aaronvarghese — portfolio

Personal-brand portfolio for **Aaron Varghese**. Dark, split-flap transit-board world,
bluish-green signal palette, Clash Display + Satoshi + JetBrains Mono.
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
3. **Domain** — `metadataBase` in `app/layout.js` currently says
   `aaronvarghese.dev`; change it to whatever domain you buy.
4. **Email** — currently spam-safe reveal-on-click (`components/email-reveal.jsx`),
   assembled from parts so scrapers never see it. If you'd rather use a contact
   form later, swap this component for a Formspree/Web3Forms form.

## Where things live

| Thing | File |
|---|---|
| Colors, grain, aurora, keyframes | `app/globals.css` (design tokens in `@theme`) |
| Fonts (Clash Display, Satoshi — self-hosted) | `app/fonts/` + `app/layout.js` |
| Split-flap board + message rotation | `components/flap-board.jsx` (`MESSAGES` in `components/board-section.jsx`) |
| Glowing project cards (Aceternity, re-skinned) | `components/glowing-effect.jsx` |
| Decoder/scramble text + section eyebrows | `components/scramble.jsx` |
| Projects & the shelf | `components/projects.jsx` |
| Everything else | one component per section in `components/` |

Board messages only support `A–Z 0-9 !@#$()-+&=;:'"%,./?°` and `{T}{C}{G}{B}{W}`
color tiles, max 22 chars × 6 lines.

## Deploy

Push to GitHub → import on [Vercel](https://vercel.com/new) → done.
Zero config needed; the site is fully static.
