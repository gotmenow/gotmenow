const LOGO_IMG = "https://media.base44.com/images/public/6a7c1eb392acd3acb78eaf63/cb583d962_Untitleddesign1.png";

export default function Logo({ className = "", height = 52 }) {
  return (
    <div
      className={`inline-flex items-center rounded-full bg-black px-3.5 ${className}`}
      style={{ height, filter: "brightness(1.18) saturate(1.22)" }}
    >
      <img
        src={LOGO_IMG}
        alt="GotMeNow"
        style={{ height: Math.round(height * 0.64), width: "auto" }}
        className="select-none"
      />
    </div>
  );
}