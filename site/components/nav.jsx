"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#work", label: "WORK" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // local time in Chennai — set after mount to avoid hydration mismatch
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line/70 bg-abyss/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-[11px] tracking-[0.25em] text-mist transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-4">
          <span
            className="hidden font-mono text-[11px] tracking-widest text-mist tabular-nums sm:block"
            title="My local time — Chennai"
          >
            {time ?? "--:--:--"} IST
          </span>
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-ember px-4 py-1.5 font-mono text-[11px] font-bold tracking-widest text-abyss transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(245,100,43,0.35)]"
          >
            RÉSUMÉ ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
