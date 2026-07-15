import { GlowingEffect } from "@/components/glowing-effect";
import { Eyebrow } from "@/components/scramble";
import { Reveal } from "@/components/reveal";

const FEATURED = [
  {
    code: "ECH-01",
    name: "Echo",
    href: "https://github.com/ka0s01/Echo",
    blurb:
      "A coding agent that lives in your terminal. Local LLM inference, a two-stage token-aware context compressor, and a background-threaded agent loop that never blocks the prompt — plus tool-calling on a custom-built JSON parser.",
    stack: ["Python", "Ollama", "Qwen2.5-Coder", "Textual"],
    wide: true,
  },
  {
    code: "STR-02",
    name: "Stride",
    blurb:
      "A multi-tenant web app that syncs Garmin Connect health data into a custom dashboard, with social features layered on top. An async ingestion pipeline (FastAPI, Celery, Redis, PostgreSQL) upserts the data and recovers from auth failures without disconnecting accounts, behind JWT auth, encrypted credential storage, and per-user data isolation.",
    stack: ["Python", "Flask", "Celery", "Redis", "React", "Docker"],
  },
  {
    code: "NXS-03",
    name: "Nexus",
    href: "https://github.com/ka0s01/Nexus",
    blurb:
      "A business-intelligence agent that speaks SQL and reads documents. Text-to-SQL benchmarked on BIRD, HyDE-based retrieval over ChromaDB, and a multi-node LangGraph workflow doing the routing.",
    stack: ["LangGraph", "FastAPI", "ChromaDB", "PostgreSQL"],
  },
];

const SHELF = [
  {
    name: "Cove",
    href: "https://github.com/ka0s01/Cove",
    note: "A live now-playing display and remote client, built in Python.",
  },
  {
    name: "Portfolio Analytics Engine",
    href: "https://github.com/ka0s01/portfolio-analytics-engine",
    note: "Evaluates stock portfolios with risk-adjusted metrics — CAGR, Sharpe, Sortino, max drawdown.",
  },
  {
    name: "WC2026 Simulator",
    href: "https://github.com/ka0s01/WC2026-simulator-engine",
    note: "A World Cup 2026 simulation engine.",
  },
  {
    name: "RxLens",
    href: "https://github.com/ka0s01/RxLens-FDA-Drug-Label-RAG-System",
    note: "Ask FDA drug labels questions in plain English via a RAG pipeline.",
  },
];

function TerminalMock() {
  return (
    <div className="rounded-lg border border-line bg-abyss/90 p-4 font-mono text-[12.5px] leading-relaxed shadow-inner">
      <div className="mb-3 flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-ember/50" />
      </div>
      <p>
        <span className="text-ember">$</span> echo run{" "}
        <span className="font-medium text-ink">&quot;fix the failing test&quot;</span>
      </p>
      <p className="text-mist">⠋ compressing context — 48k → 11k tokens</p>
      <p className="text-mist">→ patching src/parser.py (2 edits)</p>
      <p>
        <span className="text-ember">✔</span> done — tests green
      </p>
      <p aria-hidden className="animate-[blink_1.1s_steps(1)_infinite] text-ember">
        ▮
      </p>
    </div>
  );
}

function Card({ p, children }) {
  return (
    <div
      className={`relative h-full rounded-2xl border border-line bg-panel/80 p-2 ${
        p.wide ? "md:col-span-2" : ""
      }`}
    >
      <GlowingEffect
        disabled={false}
        glow={true}
        proximity={72}
        spread={38}
        inactiveZone={0.02}
        borderWidth={2}
        movementDuration={1.6}
      />
      <div
        className={`relative flex h-full flex-col gap-6 rounded-xl bg-card p-7 ${
          p.wide ? "md:grid md:grid-cols-[1.15fr_1fr] md:items-center" : ""
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="font-mono text-[10px] tracking-[0.25em] text-mist">
            {p.code}
          </div>
          <h3 className="mt-5 font-display text-3xl font-bold tracking-tight">
            {p.name}
          </h3>
          <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-mist">
            {p.blurb}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-panel/60 px-2.5 py-1 font-mono text-[10.5px] tracking-wide text-mist"
              >
                {s}
              </span>
            ))}
          </div>
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-auto inline-flex items-center gap-2 pt-6 font-mono text-[13px] text-ink"
            >
              <span className="text-ember transition-transform group-hover:translate-x-1">
                →
              </span>
              <span className="underline-offset-4 group-hover:underline">
                github / {p.name.toLowerCase()}
              </span>
            </a>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Eyebrow>projects</Eyebrow>
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,3.3rem)] font-semibold tracking-tight text-balance">
            Some Projects im proud of
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {FEATURED.map((p, i) => (
            <Reveal
              key={p.code}
              delay={i * 90}
              className={p.wide ? "md:col-span-2" : ""}
            >
              <Card p={p}>{p.wide ? <TerminalMock /> : null}</Card>
            </Reveal>
          ))}
        </div>

        {/* the shelf — smaller, weirder, more honest */}
        <Reveal delay={140}>
          <div className="mt-14">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-mist">
              Also on the shelf
            </p>
            <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {SHELF.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-abyss p-5 transition-colors hover:bg-panel"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-semibold tracking-tight">
                      {s.name}
                    </span>
                    <span className="font-mono text-xs text-ember opacity-0 transition-opacity group-hover:opacity-100">
                      open ↗
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">
                    {s.note}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
