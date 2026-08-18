const LOGO_IMG = "https://media.base44.com/images/public/6a7c1eb392acd3acb78eaf63/cb583d962_Untitleddesign1.png";

export default function Logo({ className = "", variant = "chip" }) {
  if (variant === "blend") {
    return (
      <img
        src={LOGO_IMG}
        alt="GotMeNow"
        className={`h-8 w-auto select-none ${className}`}
        style={{ mixBlendMode: "screen" }}
      />
    );
  }
  return (
    <span className={`inline-flex items-center bg-black rounded-md overflow-hidden shadow-[0_2px_14px_rgba(0,0,0,0.18)] ${className}`}>
      <img src={LOGO_IMG} alt="GotMeNow" className="h-8 sm:h-9 w-auto select-none" />
    </span>
  );
}