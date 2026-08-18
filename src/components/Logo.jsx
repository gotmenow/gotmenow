const LOGO_IMG = "https://media.base44.com/images/public/6a7c1eb392acd3acb78eaf63/cb583d962_Untitleddesign1.png";

export default function Logo({ className = "", height = 36, style }) {
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }} aria-hidden="true" focusable="false">
        <defs>
          <filter id="gmn-keyout">
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  1 1 1 0 -0.5" />
            <feComponentTransfer><feFuncA type="table" tableValues="0 0 1 1" /></feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <img
        src={LOGO_IMG}
        alt="GotMeNow"
        className={`select-none ${className}`}
        style={{ height, width: "auto", filter: "url(#gmn-keyout)", ...style }}
      />
    </>
  );
}