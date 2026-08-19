import { useEffect, useState } from "react";

const SERVICES = [
  "Business Consulting",
  "Startup Consulting",
  "Passive Income",
  "AI Orchestration",
  "Digital Marketing",
  "SEO",
  "Web & Mobile Apps",
];

export default function ServiceSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % SERVICES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <h1 className="font-display text-[34px] sm:text-5xl lg:text-[60px] leading-[1.05] tracking-tight text-[#000000]">
        <span className="block relative overflow-hidden" style={{ height: "1.1em" }}>
          {SERVICES.map((s, i) => (
            <span
              key={s}
              className="absolute inset-x-0 top-0 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#1d3e91] to-[#00a99d] transition-[transform,opacity] duration-700 ease-out"
              style={{
                transform: `translateY(${(i - active) * 100}%)`,
                opacity: i === active ? 1 : 0,
              }}
            >
              {s}
            </span>
          ))}
        </span>
      </h1>
      <div className="mt-6 flex items-center gap-3">
        <span className="font-mono text-xs text-[#00a99d]">{String(active + 1).padStart(2, "0")}</span>
        <span className="relative h-px w-20 bg-foreground/15 overflow-hidden">
          <span className="absolute inset-y-0 left-0 bg-[#00a99d] transition-all duration-700 ease-out" style={{ width: `${((active + 1) / SERVICES.length) * 100}%` }} />
        </span>
        <span className="font-mono text-xs text-[#475569]">{String(SERVICES.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}