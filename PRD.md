# Portfolio Website — Product Requirements Document

**Owner:** Aaron George Varghese (displayed as **Aaron Varghese**)
**Author:** drafted with Claude · **Date:** 2026-07-03
**Status:** Wireframe / theme-selection phase → final build in Fable 5

---

## 1. Who this is for (the person)

Aaron is a Computer Science undergrad (VIT Chennai, B.Tech CSE, Class of 2028, CGPA 9.27) who builds **AI/ML systems** — LLM agents, RAG pipelines, and full-stack products — and is currently pushing into **ML + a SaaS of his own**. He is a **multi-hyphenate**: the site should make it obvious he is a person, not a résumé.

**The slashes (identity thesis):** developer / ML engineer / audiophile / photographer / lifter / builder.

**Voice & tone:** earnest and warm, first-person, lightly playful. Confident but not arrogant. No corporate filler, no "passionate about leveraging synergies." Sounds like a real 20-year-old who is genuinely good at this and genuinely into his hobbies.

**Off the clock:** music (Frank Ocean, Red Hot Chili Peppers, Led Zeppelin, rock; self-described **audiophile**), film & TV (**Entergalactic**, *Avatar: The Last Airbender*, *Game of Thrones*), photography, video games, lifting weights, and time with friends.

**Primary goal:** **Personal brand.** A memorable place that is unmistakably him. Secondary: showcase projects + make it easy to grab his résumé and GitHub.

---

## 2. Goals & non-goals

**Goals**
- Feel human and specific — anti-generic, anti-"AI template."
- Communicate range (AI/ML depth **and** a real personality) in the first 10 seconds.
- Make the résumé and GitHub one click away from anywhere.
- Bold, alive motion that rewards scrolling and cursor movement (à la itssharl.ee) without hurting performance.

**Non-goals**
- Not a blog engine or CMS (static content is fine).
- Not a client/freelance funnel (no pricing, no services grid).
- No dark-pattern lead capture.

---

## 3. Design direction

**Aesthetic:** playful & bold, dark-forward, motion-rich. Reference vibe: [itssharl.ee/fr](https://itssharl.ee/fr) — tactile, big type, cursor-reactive — bent toward a **developer** identity.

**Color rules (hard constraints):**
- Palette lives in **vibrant bluish-greens**: teal, cyan, emerald, jade, aqua.
- **No yellow, no pink.**
- Dark grounds with one saturated accent doing the heavy lifting; neutrals biased slightly toward teal, never flat grey.

**Theme candidates (pick one in wireframe):**
1. **Nebula Teal** — near-black with an aurora of teal→cyan→emerald glows.
2. **Deep Jade** — refined deep-emerald, glassy, grown-up.
3. **Electric Aqua** — charcoal + high-energy aqua/electric-blue, most playful.
4. **Phosphor Terminal** — CRT phosphor green-cyan, monospace, ties to the CLI agent + audiophile side.
5. **Arctic Mint (light)** — off-white with teal, for a lighter option.

**Typography (final build — Fable 5, real webfonts):**
- Display: a characterful bold grotesque — e.g. **Clash Display**, **Space Grotesk**, or **General Sans**.
- Body: a clean humanist sans — e.g. **Satoshi** or **Inter Tight**.
- Utility/mono: **JetBrains Mono** or **Berkeley Mono** (used for the encrypted-text, code, and labels).
- Large type scale, tight display tracking, generous body line-height (~1.6), ~65ch measure for reading.
- (Wireframe uses tuned system stacks since the Artifact sandbox blocks font CDNs.)

**Motion principles:** one orchestrated page-load moment, scroll-triggered reveals, cursor-reactive glow, `prefers-reduced-motion` fully respected.

---

## 4. The three Aceternity components — where each is used

| Component | Job on the site |
|---|---|
| **`text-flipping-board`** | Hero — the split-flap board cycles the **slashes** (developer / ML engineer / audiophile / photographer / lifter). Also optional on the skills marquee. |
| **`encrypted-text`** | Hero tagline + section labels **decode/scramble** into place on load and on scroll into view. |
| **`glowing-effect`** | Project cards (Echo, RxLens, Nexus) — a cursor-following glow border on hover. Also the primary CTA buttons. |

---

## 5. Sitemap / sections (single-page, scroll)

1. **Nav** — "AV" monogram, anchor links (Work · Projects · Beyond · Contact), résumé download, theme (final: light/dark or fixed).
2. **Hero** — name, flip-board slashes, encrypted tagline, CTAs (View work · Download résumé · GitHub), ambient glow background.
3. **About / the human** — short earnest first-person intro + a "Currently" snapshot (ML + building a SaaS).
4. **Experience** — timeline: **Sion Healthcare** (AI Full-Stack Intern, Mar 2026–ongoing), **Nexrova** (AI/LLM Intern, Oct 2025), **Daira Edtech** (Business Research Intern, Apr–Jul 2025).
5. **Projects** — feature cards with glowing-effect: **Echo**, **RxLens**, **Nexus** (each: one-liner, stack chips, GitHub link).
6. **Skills** — grouped/marquee: Languages, Frameworks, AI/ML, Databases, Tools.
7. **Beyond the code** — music / film / photography / gym / audiophile. The personality section; specific names, not categories.
8. **Contact** — reveal-on-click email (spam-safe), GitHub, LinkedIn, résumé download. (Final: consider Formspree contact form or an email alias — see §7.)
9. **Footer** — small mark, "built by Aaron," year.

---

## 6. Content (canonical copy source)

**Name (display):** Aaron Varghese · **Full:** Aaron George Varghese
**Role line:** CS undergrad @ VIT Chennai · building AI/ML systems
**Slashes:** developer / ML engineer / audiophile / photographer / lifter
**Links:** GitHub `https://github.com/ka0s01` · LinkedIn (URL TBD — provide) · Email `varghese.aaron13@gmail.com` (see §7)

**Education:** B.Tech Computer Science Engineering, Vellore Institute of Technology, Chennai — May 2028 · CGPA 9.27

**Experience**
- **Sion Healthcare — AI Full-Stack Intern** (Mar 2026 – ongoing): AI service turning transcribed doctor speech into structured, normalized prescription JSON; validation/normalization pipelines for LLM outputs (medical unit conversions, schema enforcement); secure admin dashboard in Next.js + Supabase.
- **Nexrova — AI/LLM Intern** (Oct 2025): FastAPI backend for a WhatsApp chatbot via Twilio webhooks; message-processing pipeline for context-aware responses; LLM API integration (prompt construction, response parsing); ngrok for local webhook testing.
- **Daira Edtech — Business Research Intern** (Apr – Jul 2025): market/competitor research for data-driven decisions; growth-opportunity analysis; structured insights supporting pipeline expansion & GTM.

**Projects**
- **Echo** — *Python, Ollama, Qwen2.5-Coder, Textual, LLMs.* CLI coding agent with local LLM inference for autonomous code gen & debugging; two-stage token-aware context-compression pipeline; background-threaded event-driven agent loop; prompt-engineered tool-calling with a custom JSON parser.
- **RxLens** — *Python, Flask, RAG, REST APIs, Streamlit.* Local RAG pipeline from scratch over FDA drug-label data; ingestion/preprocessing/overlap chunking; semantic retrieval via vector embeddings + cosine similarity; local inference with Ollama-Mistral; modular ingestion→retrieval→generation stages.
- **Nexus** — *Python, LangGraph, FastAPI, ChromaDB, PostgreSQL.* Hybrid BI agent combining Text-to-SQL + RAG over structured & unstructured e-commerce data; Text-to-SQL benchmarked on BIRD; multi-node LangGraph workflow (routing, SQL gen, retrieval, synthesis); HyDE-based RAG with ChromaDB.

**Skills** — Languages: Python, JavaScript, C, C++, Java, HTML, CSS, React · Frameworks: Flask, FastAPI, Next.js, REST APIs · AI/ML: RAG, Embeddings, LLM Integration, Agentic Systems · Databases: ChromaDB, MySQL, PostgreSQL, Supabase · Tools: System Design, API Integration, Data Pipelines, Twilio, LangGraph, Ollama.

**Achievements** — 5th Overall, BitWars 2.0 (VIT Chennai hackathon) · Active member, OSPC (Open Source Programming Club) & CodeYGen.

**Beyond the code** — Music: Frank Ocean, Red Hot Chili Peppers, Led Zeppelin, rock; audiophile. Film/TV: Entergalactic, Avatar: The Last Airbender, Game of Thrones. Also: photography, video games, lifting, friends.

**Tagline candidates (earnest/warm, pick/edit):**
- "I build AI that feels a little more human — then go chase good sound, good light, and a heavier bar."
- "I teach machines to talk, and spend the rest of my time on music, photos, and the gym."
- "Computer science student. I like hard problems, good speakers, and shipping small things that work."

---

## 7. Open decisions (need Aaron's input)

- **Email exposure:** primary Gmail is personal. Recommend one of: (a) Formspree/Web3Forms **contact form**, (b) dedicated **alias**, or (c) **reveal-on-click + obfuscation** (wireframe default). Decide before launch.
- **LinkedIn URL** — provide exact link.
- **Résumé file** — supply the PDF to wire the download button.
- **Photo of Aaron?** — optional but strengthens "personal brand." Provide if wanted.
- **Domain** — buy a custom domain (e.g. `aaronvarghese.dev`) for credibility + email alias.
- **Chosen theme** — select from wireframe.

---

## 8. Technical notes for the Fable 5 build

- **Stack:** Next.js + React + Tailwind (matches his skills and the Aceternity/shadcn install path).
- **Components:** `npx shadcn@latest add @aceternity/glowing-effect | text-flipping-board | encrypted-text`.
- **Fonts:** self-hosted webfonts (see §3) via `next/font` for zero layout shift.
- **Motion:** Framer Motion for reveals; keep bundle lean; lazy-load heavy effects; honor `prefers-reduced-motion`.
- **Perf/SEO:** static export, OpenGraph card, meta description, semantic headings, alt text, Lighthouse ≥ 95.
- **Accessibility:** visible focus states, sufficient contrast on the chosen accent, keyboard-navigable nav + theme switch.

---

## 9. Success = 

A visitor lands, immediately gets "this is Aaron — sharp AI/ML builder, real human with taste," finds the work and résumé without thinking, and remembers the site afterward.
