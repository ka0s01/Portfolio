# Product

## Register

brand

## Users

Primary: recruiters and hiring managers screening Aaron Varghese for developer roles (full-time or internship, AI/ML-leaning engineering). They land with limited time and attention, scanning for "can this person build real things, and can I picture hiring them."

Secondary: other technical people (peers, potential collaborators) who land via GitHub/LinkedIn and want a fast read on what Aaron builds and how he thinks.

Job to be done: quickly understand Aaron's skills and shipped work, come away with credibility, and have an obvious, low-friction way to reach out (contact, résumé) or follow the trail to his actual code.

## Product Purpose

A personal-brand portfolio that exists to get Aaron Varghese hired as a developer. It showcases real projects (Echo, RxLens-FDA-Drug-Label-RAG-System, Nexus, plus a project shelf), experience, and skills, and closes on a clear contact/résumé path. Success looks like: a recruiter forms a strong impression in under a minute and reaches out, or forwards the site internally.

## Brand Personality

Earnest, warm, technical.

First-person, human copy — no corporate filler, no resume-speak — carried by a precise, technical visual language (the "signal/transit-board" instrument-panel world: near-black grounds, teal/cyan/spring signal colors, bold but purposeful motion). The interface's precision is itself part of the pitch: the rigor of the build should read as the rigor Aaron brings to engineering. Warmth lives in the voice and in touches of Aaron's real self; it should not read as sterile SaaS confidence or as a diary.

Note: the site currently ships with lorem-ipsum placeholder copy in hero/about/contact, pending Aaron's real writing pass. Real copy should land in this earnest/warm/technical register, first-person.

## Anti-references

- **The current site's own visual execution is itself an anti-reference — this is a live trigger, not a hypothetical.** Confirmed directly with Aaron on 2026-07-04: he finds the current build "very SaaS website, AI-generated looking." Specifically named:
  - The **dark near-black + teal/cyan neon-glow combo** (blurred aurora blobs, glow accents) as its own genre cliché — dark-mode neon-glow is just as saturated an AI-generated tell in 2025/26 as cream/beige is for light themes. The base theme needs to change, not just get refined.
  - **Gradient text** on headings/CTAs (`bg-clip-text` + `text-transparent`, currently in `hero.jsx` and `contact.jsx`) — also a standing impeccable-wide ban, doubly confirmed here.
  - **Overall section layout/structure** (hero → about → cards → contact flow) reading as templated regardless of color.
  - **Explicitly liked and to be kept**: the Aceternity `glowing-effect` project-card treatment — do not throw this out in a redesign; it's the one visual element Aaron called out as working.
  - Any future `/impeccable document`, `craft`, or `live` session on this codebase should treat this as a **departure-mode trigger** (per the live-mode identity rules): don't scan-and-preserve the current base theme/layout as-is. Extract and keep the liked pieces (glow-card effect, the self-hosted type choices unless Aaron says otherwise) but propose a genuinely different visual direction for the base theme and structure.
- **Generic AI-template / corporate SaaS look** (the general form, beyond this specific site): navy-and-cream palettes, hero-metric templates, tiny tracked eyebrows above every section, identical icon-grid cards.
- **Cutesy portfolio tropes**: illustrated avatars, comic-style fonts, emoji-heavy copy, mascot energy. Undermines the "hire me as an engineer" purpose.
- **Boring minimalism**: flat black-and-white "résumé rendered in a browser," no motion, no distinct identity. The opposite failure mode from corporate-SaaS/AI-glow — equally wrong.
- Standing color rule carried from Aaron's general taste: no yellow, no pink, anywhere (belongs in DESIGN.md as a hard constraint on the palette, noted here because it shaped the anti-reference discussion).

## Design Principles

1. **Optimize for the first 30 seconds.** A recruiter should get "what Aaron builds and how good he is at it" almost immediately — clarity and credibility beat cleverness every time there's a conflict.
2. **Show, don't tell.** Real shipped projects, concrete outcomes, and working links carry more weight than adjectives or self-description. Avoid copy that asserts skill instead of demonstrating it.
3. **Precision as personality.** The signal-board rigor of the interface (exact motion, tight type, no visual slop) is not decoration — it's evidence of the same care Aaron brings to code. A build with rough edges undercuts the pitch.
4. **Warm in voice, exact in execution.** Copy stays first-person and human even while the surrounding build is technically flawless — no console errors, no placeholder rot, no broken links, by the time it ships.
5. **Never bury the ask.** Bold identity and motion are welcome, but the résumé download and contact path must stay the easiest, most obvious actions on the page — the site is a means to being hired, not an art piece.

## Accessibility & Inclusion

Standard WCAG AA target; no unusual accessibility requirements stated beyond that.

Reduced motion is already implemented globally (`app/globals.css` collapses animation/transition durations under `prefers-reduced-motion: reduce`) — preserve this in all future motion work rather than re-solving it per component.

Maintain contrast for the `ink`/`mist` text ramp against the `abyss`/`panel`/`card` grounds as new sections are added. The teal/cyan/spring signal colors are decorative accents, not carriers of unique meaning, so color-blind safety is a secondary concern here — but avoid using teal-vs-cyan alone to distinguish meaningfully different states (e.g. success vs. info) if that pattern is ever introduced.
