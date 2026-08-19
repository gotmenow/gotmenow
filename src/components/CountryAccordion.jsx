import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { COUNTRIES } from "@/lib/site";

export default function CountryAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t border-foreground/10">
      {COUNTRIES.map((c, i) => {
        const isOpen = open === i;
        return (
          <div key={c.code} className="border-b border-foreground/10">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`w-full flex items-center justify-between gap-4 py-6 text-left transition-colors ${isOpen ? "text-[#00a99d]" : "text-[#000000]"} hover:text-[#00a99d]`}
            >
              <div className="flex items-center gap-5">
                <span className="text-2xl">{c.flag}</span>
                <span className="font-display text-2xl sm:text-3xl">{c.name}</span>
              </div>
              <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="text-[#475569] leading-relaxed max-w-2xl pl-12">{c.hook}</p>
                <p className="text-xs text-[#475569]/60 pl-12 mt-3">Pathway information for orientation only. Not immigration advice; not a guarantee of approval.</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}