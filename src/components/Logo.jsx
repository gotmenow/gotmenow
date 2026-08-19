const LOGO_IMG = "https://media.base44.com/images/public/6a7c1eb392acd3acb78eaf63/dc3913732_image.png";

export default function Logo({ className = "", height = 44 }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={LOGO_IMG}
        alt="GotMeNow"
        style={{ height, width: "auto" }}
        className="select-none"
      />
    </span>
  );
}