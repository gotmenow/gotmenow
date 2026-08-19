const LOGO_IMG = "https://media.base44.com/images/public/6a7c1eb392acd3acb78eaf63/3aa1f6197_Logoa.png";

export default function Logo({ className = "", height = 70 }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-[#0A2540] px-3 ${className}`}
      style={{ height }}
    >
      <img
        src={LOGO_IMG}
        alt="GotMeNow"
        style={{
          height: Math.round(height * 0.64),
          width: "auto",
          mixBlendMode: "screen",
        }}
        className="select-none"
      />
    </span>
  );
}