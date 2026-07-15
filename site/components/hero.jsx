"use client";
import { ScrambleText } from "@/components/scramble";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[94svh] flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <p className="mb-7 font-mono text-xs tracking-[0.3em] text-mist">
            <ScrambleText text="CHENNAI — 13.08°N, 80.27°E" />
          </p>
        </Reveal> 

        <Reveal delay={80}>
          <h1 className="font-display text-[clamp(3.6rem,12.5vw,10.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em]">
            Aaron
            <br />
            <span className="text-ember">Varghese</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-9 max-w-2xl text-lg leading-relaxed text-mist md:text-xl">
              Im a CS Engineer based in Chennai, India I build, 
              develop any idea that pops into my head
          </p>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-4 font-mono text-[11px] tracking-[0.22em] text-mist/70">
            CS UNDERGRAD @ VIT CHENNAI · CLASS OF 2028
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-11 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-ember px-6 py-3 text-sm font-bold text-abyss transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(245,100,43,0.4)]"
            >
              My Work →
            </a>

            <a
              href="https://github.com/ka0s01"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-ember/60 hover:shadow-[0_8px_30px_rgba(245,100,43,0.15)]"
            >
              GitHub ↗
            </a>
            {/* TODO: drop in your real LinkedIn URL */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-ember/60 hover:shadow-[0_8px_30px_rgba(245,100,43,0.15)]"
            >
              LinkedIn ↗
            </a>
            {/* TODO: drop in your real Instagram handle */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-ember/60 hover:shadow-[0_8px_30px_rgba(245,100,43,0.15)]"
            >
              Instagram ↗
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
