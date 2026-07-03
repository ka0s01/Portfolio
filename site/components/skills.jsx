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
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g, i) => (
            <Reveal key={g.label} delay={i * 70}>
              <div className="border-t border-line pt-5">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">
                  {g.label}
                </h3>
                <ul className="mt-4 flex flex-col gap-2 text-[15px] text-mist">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="transition-colors hover:text-ink"
                    >
                      {it}
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
