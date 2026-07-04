// Marquee strip — technical skills only.
const ITEMS = [
  "AGENTIC SYSTEMS",
  "RAG PIPELINES",
  "TEXT-TO-SQL",
  "LANGGRAPH",
  "FASTAPI",
  "NEXT.JS",
  "LOCAL LLMS",
  "SYSTEM DESIGN",
  "EMBEDDINGS",
  "PYTHON",
  "CHROMADB",
  "POSTGRESQL",
  "DOCKER",
  "SQL ALCHEMY",
  "CELERY",
  "REDIS"
];

export function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden
      className="select-none overflow-hidden border-y border-line bg-panel/50 py-3.5"
    >
      <div className="flex w-max animate-[marquee_38s_linear_infinite] whitespace-nowrap font-mono text-[11px] tracking-[0.28em] text-mist">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="px-5">{t}</span>
            <span className="text-ember">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
