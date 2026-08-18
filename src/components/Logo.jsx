import { useId } from "react";

export default function Logo({ className = "", iconSize = "h-7 sm:h-8", light = false }) {
  const raw = useId();
  const gid = `gmn-grad-${raw.replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 48 48" className={`${iconSize} w-auto`} fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1a5ab9" />
            <stop offset="1" stopColor="#3d97e8" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="20" stroke={`url(#${gid})`} strokeWidth="3" />
        <path d="M31.8 16.2 A 11 11 0 1 0 31.8 31.8" stroke={`url(#${gid})`} strokeWidth="3" strokeLinecap="round" />
        <path d="M24 24 L31.8 24" stroke={`url(#${gid})`} strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="3.5" r="2.6" fill={`url(#${gid})`} />
        <circle cx="44.5" cy="24" r="2.6" fill={`url(#${gid})`} />
        <circle cx="24" cy="44.5" r="2.6" fill={`url(#${gid})`} />
        <circle cx="3.5" cy="24" r="2.6" fill={`url(#${gid})`} />
      </svg>
      <span className={`font-body font-extrabold uppercase tracking-[0.14em] text-lg sm:text-xl ${light ? "text-[#F8FAFC]" : "text-transparent bg-clip-text bg-gradient-to-r from-[#1a5ab9] to-[#3d97e8]"}`}>
        GotMeNow
      </span>
    </span>
  );
}