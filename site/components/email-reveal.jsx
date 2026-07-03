"use client";
import { useState } from "react";

/**
 * Spam-safe email: the address never exists in the HTML —
 * it's assembled from parts on click, so scrapers get nothing.
 */
const USER = ["varghese", "aaron13"];
const HOST = ["gmail", "com"];
const addr = () => `${USER.join(".")}@${HOST.join(".")}`;

export function EmailReveal() {
  const [shown, setShown] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!shown) {
    return (
      <button
        onClick={() => setShown(true)}
        className="rounded-full border border-line px-6 py-3 font-mono text-sm text-ink transition-all hover:-translate-y-0.5 hover:border-teal/60 hover:shadow-[0_8px_30px_rgba(45,230,196,0.15)]"
      >
        [ click to reveal email ]
      </button>
    );
  }

  return (
    <span className="inline-flex items-center gap-3 rounded-full border border-teal/50 px-6 py-3 font-mono text-sm">
      <a href={`mailto:${addr()}`} className="text-teal hover:underline">
        {addr()}
      </a>
      <button
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(addr());
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          } catch {
            /* clipboard unavailable — the address is visible anyway */
          }
        }}
        className="text-[11px] uppercase tracking-widest text-mist transition-colors hover:text-ink"
      >
        {copied ? "copied ✓" : "copy"}
      </button>
    </span>
  );
}
