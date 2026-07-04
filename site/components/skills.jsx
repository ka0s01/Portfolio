import { Eyebrow } from "@/components/scramble";
import { Reveal } from "@/components/reveal";

const GROUPS = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "C", "C++", "Java", "React"],
  },
  {
    label: "Frameworks",
    items: ["FastAPI", "Flask", "Next.js", "REST APIs"],
  },
  {
    label: "AI / ML",
    items: [
      "RAG",
      "Embeddings",
      "LLM Integration",
      "Agentic Systems",
      "LangGraph",
      "Ollama",
    ],
  },
  {
    label: "Data & Tools",
    items: [
      "ChromaDB",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Twilio",
      "System Design",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Eyebrow>toolbox</Eyebrow>
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,3.3rem)] font-semibold tracking-tight text-balance">
            What I work with
          </h2>
        </Reveal>

        {/* manifest — a spec-sheet row per category, not a card grid */}
        <div className="mt-12 overflow-hidden rounded-xl border border-line">
          {GROUPS.map((g, i) => (
            <Reveal key={g.label} delay={i * 70}>
              <div
                className={`flex flex-col gap-3 px-6 py-6 sm:flex-row sm:items-baseline sm:gap-10 ${
                  i > 0 ? "border-t border-line" : ""
                } ${i % 2 === 1 ? "bg-panel/40" : ""}`}
              >
                <h3 className="shrink-0 font-mono text-[11px] uppercase tracking-[0.28em] text-ember sm:w-36">
                  {g.label}
                </h3>
                <ul className="flex flex-wrap items-baseline gap-x-2.5 gap-y-2 text-[14.5px] text-mist">
                  {g.items.map((it, idx) => (
                    <li key={it} className="flex items-baseline gap-2.5">
                      <span className="transition-colors hover:text-ink">
                        {it}
                      </span>
                      {idx < g.items.length - 1 && (
                        <span aria-hidden className="text-line">
                          /
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
