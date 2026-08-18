import { useEffect, useRef, useState } from "react";

export default function TestimonialCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(timer.current);
  }, [paused, testimonials.length]);

  const active = testimonials[index];

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="text-[#3d97e8] font-display text-7xl leading-none mb-4 select-none">"</div>
      <blockquote key={index} className="font-display text-2xl sm:text-3xl leading-snug text-[#0A2540] transition-opacity duration-500">
        {active.quote}
      </blockquote>
      <div className="mt-8 flex items-center justify-between">
        <div>
          <div className="font-semibold text-[#0A2540]">{active.name}</div>
          <div className="text-sm text-[#475569]">{active.role}</div>
          <div className="text-xs text-[#3d97e8] mt-1">{active.result}</div>
        </div>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-[#3d97e8]" : "w-1.5 bg-foreground/20"}`}
            />
          ))}
        </div>
      </div>
      <p className="text-xs text-[#475569]/70 mt-8 max-w-md">Results vary by individual effort and circumstance. Shared with permission.</p>
    </div>
  );
}