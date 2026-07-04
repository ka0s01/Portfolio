import { Reveal } from "@/components/reveal";

const JOBS = [
  {
    when: "MAR 2026 — NOW",
    company: "Sion Healthcare",
    role: "AI Full-Stack Intern",
    points: [
      "Working on an AI service that turns raw transcribed doctor speech into structured, normalized prescription JSON.",
      "Validation & normalization pipelines for LLM outputs — medical unit conversions, schema enforcement.",
      "Secure admin dashboard in Next.js + Supabase.",
    ],
  },
  {
    when: "OCT 2025",
    company: "Nexrova",
    role: "AI / LLM Intern",
    points: [
      "FastAPI backend for a WhatsApp chatbot over Twilio webhooks — real-time messaging.",
      "Message-processing pipeline for structured, context-aware responses; LLM prompt construction & parsing.",
      "ngrok tunnels for rapid webhook iteration.",
    ],
  },
  {
    when: "APR — JUL 2025",
    company: "Daira Edtech",
    role: "Business Research Intern",
    points: [
      "Market, client, and competitor research feeding data-driven strategy.",
      "Turned analysis into recommendations that supported pipeline expansion and go-to-market planning.",
    ],
  },
];

export function Experience() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,3.3rem)] font-semibold tracking-tight text-balance">
            Where I’ve been building
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col">
          {JOBS.map((job, i) => (
            <Reveal key={job.company} delay={i * 90}>
              <article
                className={`grid gap-3 border-line py-9 md:grid-cols-[200px_1fr] md:gap-8 ${
                  i > 0 ? "border-t" : ""
                }`}
              >
                <div className="font-mono text-xs tracking-[0.18em] text-ember md:pt-1.5">
                  {job.when}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {job.company}
                  </h3>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
                    {job.role}
                  </p>
                  <ul className="mt-4 flex max-w-[62ch] flex-col gap-2 text-[15px] leading-relaxed text-mist">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden className="mt-[11px] h-px w-4 shrink-0 bg-ember/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl border border-line bg-panel/60 px-6 py-4 font-mono text-[11px] tracking-[0.2em] text-mist">
            <span className="text-ember">ALSO:</span>
            <span>5TH OVERALL — BITWARS 2.0, VIT CHENNAI</span>
            <span>Member at OSPC</span>
            <span>AI/ML member at CODEYGEN</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
