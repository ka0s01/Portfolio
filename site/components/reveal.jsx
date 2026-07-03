"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Fade-up on first scroll into view. Quiet — 700ms, small travel. */
export function Reveal({ children, className, delay = 0, y = 26 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.7,.2,1)]",
        inView ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transform: inView ? "none" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
