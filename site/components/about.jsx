import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <p className="max-w-[34ch] font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold leading-snug tracking-tight text-balance">
            Lorem ipsum dolor sit amet,{" "}
            <span className="text-ember">consectetur adipiscing</span> elit —
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-7 max-w-[58ch] leading-relaxed text-mist">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum{" "}
            <em className="not-italic font-medium text-ink">dolore</em> eu
            fugiat nulla pariatur.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
