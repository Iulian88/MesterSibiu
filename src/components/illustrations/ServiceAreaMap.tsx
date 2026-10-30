type IllustrationProps = {
  className?: string;
  title?: string;
};

/**
 * Stylized map + location pin. No invented localities.
 */
export function ServiceAreaMap({
  className = "",
  title = "Zona deservită: Sibiu și împrejurimi",
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 180 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect x="8" y="12" width="164" height="96" rx="16" fill="#d9ebe1" />
      <path
        d="M24 78c18-10 28-28 46-30 14-2 22 10 36 8 12-2 22-14 34-10"
        stroke="#ffffff"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M30 52c12 8 20 22 38 24 16 2 24-12 40-8"
        stroke="#b7d7c6"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Soft skyline */}
      <path
        d="M28 86h14v-10h10v10h12v-16h10v16h16v-8h10v8h20"
        stroke="#1f5c45"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.35"
      />
      {/* Location pin + soft pulse ring */}
      <g className="motion-pin" style={{ transformBox: "fill-box" }}>
        <circle
          className="motion-pin-ring"
          cx="98"
          cy="46"
          r="10"
          fill="#25d366"
          opacity="0.35"
          style={{ transformBox: "fill-box" }}
        />
        <path
          d="M98 28c-10 0-18 8-18 18 0 14 18 34 18 34s18-20 18-34c0-10-8-18-18-18Z"
          fill="#1f5c45"
        />
        <circle cx="98" cy="46" r="7" fill="#f9f8f3" />
        <circle cx="98" cy="46" r="3.5" fill="#25d366" />
      </g>
    </svg>
  );
}

export function LocationPinIcon({
  className = "",
  title = "Locație",
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <circle
        className="motion-pin-ring"
        cx="24"
        cy="20"
        r="9"
        fill="#25d366"
        opacity="0.3"
        style={{ transformBox: "fill-box" }}
      />
      <path
        d="M24 4c-8.8 0-16 7.2-16 16 0 12 16 28 16 28s16-16 16-28c0-8.8-7.2-16-16-16Z"
        fill="#1f5c45"
      />
      <circle cx="24" cy="20" r="7" fill="#f9f8f3" />
      <circle cx="24" cy="20" r="3.5" fill="#25d366" />
    </svg>
  );
}
