import { Eyebrow } from "@/components/scramble";
import { Reveal } from "@/components/reveal";

const NOW = [
  ["Learning", "ML, Full Stack"],
  ["Working on ", "a SaaS of my own"],
  ["Interning at", "Sion Healthcare"],
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 md:grid-cols-[1.4fr_0.9fr]">
        <div>
          <Eyebrow>who am i</Eyebrow>
          <Reveal>
            <p className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-snug tracking-tight text-balance">
              Lorem ipsum dolor sit amet,{" "}
              <span className="text-teal">consectetur adipiscing</span> elit —
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 max-w-[58ch] leading-relaxed text-mist">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum{" "}
              <em className="not-italic text-spring">dolore</em> eu fugiat
              nulla pariatur.
            </p>
          </Reveal>
        </div>

        {/* <Reveal delay={160}>
          <aside className="rounded-2xl border border-line bg-panel p-6">
            <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-teal">
              Currently
            </h3>
            <ul className="flex flex-col gap-3.5 text-[15px]">
              {NOW.map(([lead, rest]) => (
                <li key={rest} className="leading-snug">
                  <span className="text-mist">{lead} </span>
                  <span className="text-ink">{rest}</span>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal> */}
      </div>
    </section>
  );
}
