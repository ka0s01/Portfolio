"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Decoder-style text: renders the real text on the server (SEO-safe),
 * then scrambles → resolves character-by-character when it scrolls into view.
 * Use on monospace elements so the width stays rock-solid.
 */
const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

export function ScrambleText({ text, className, delay = 0 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(text);
  const started = useRef(false);
  const rafRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();

        const queue = Array.from(text).map((ch) => ({
          ch,
          start: Math.floor(Math.random() * 20),
          end: 12 + Math.floor(Math.random() * 28),
          g: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        }));

        let frame = 0;
        const step = () => {
          let out = "";
          let done = 0;
          for (const q of queue) {
            if (q.ch === " ") {
              out += " ";
              done++;
              continue;
            }
            if (frame >= q.end) {
              done++;
              out += q.ch;
            } else {
              if (frame >= q.start && Math.random() < 0.25) {
                q.g = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
              }
              out += q.g;
            }
          }
          setDisplay(out);
          frame++;
          if (done < queue.length) {
            rafRef.current = requestAnimationFrame(step);
          } else {
            setDisplay(text);
          }
        };
        timerRef.current = setTimeout(() => {
          rafRef.current = requestAnimationFrame(step);
        }, delay);
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, delay]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}

/** Section eyebrow — decoding mono label. */
export function Eyebrow({ children, className }) {
  return (
    <div
      className={cn(
        "mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-teal",
        className
      )}
    >
      <ScrambleText text={children} />
    </div>
  );
}
