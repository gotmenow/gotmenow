import { useEffect, useRef, useState } from "react";

export default function SectionHeader({ number, eyebrow, title, intro, align = "left", dark = false }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}>
      {number && (
        <span className={`section-number absolute -top-16 ${align === "center" ? "left-1/2 -translate-x-1/2" : "-left-2"} text-[120px] sm:text-[180px] opacity-30 select-none transition-opacity duration-700 ${visible ? "opacity-30" : "opacity-0"}`}>
          {number}
        </span>
      )}
      {eyebrow && (
        <div className={`text-xs font-semibold tracking-[0.2em] uppercase text-[#C2410C] mb-4 ${align === "center" ? "flex items-center justify-center gap-2" : ""}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] ${dark ? "text-[#F8FAFC]" : "text-[#0F172A]"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-6 text-lg leading-relaxed ${dark ? "text-[#F8FAFC]/70" : "text-[#475569]"}`}>{intro}</p>}
    </div>
  );
}