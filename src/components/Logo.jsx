const LOGO_IMG = "https://media.base44.com/images/public/6a7c1eb392acd3acb78eaf63/3aa1f6197_Logoa.png";
const FILTER_ID = "gmn-keyblack";

export default function Logo({ className = "", height = 44 }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <defs>
          <filter id={FILTER_ID}>
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  1 1 1 0 -0.25"
            />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 1 1 1 1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <img
        src={LOGO_IMG}
        alt="GotMeNow"
        style={{ height, width: "auto", filter: `url(#${FILTER_ID})` }}
        className="select-none"
      />
    </span>
  );
}