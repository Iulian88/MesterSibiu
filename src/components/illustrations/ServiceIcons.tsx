type IconProps = {
  className?: string;
  title?: string;
};

export function FurnitureIcon({
  className = "",
  title = "Montaj mobilier",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect x="18" y="28" width="48" height="46" rx="4" fill="#c4a484" />
      <rect x="22" y="32" width="40" height="18" rx="2" fill="#e8d2b8" />
      <rect x="22" y="54" width="40" height="16" rx="2" fill="#e8d2b8" />
      <circle cx="58" cy="41" r="2" fill="#8b6b4a" />
      <circle cx="58" cy="62" r="2" fill="#8b6b4a" />
      <rect x="26" y="74" width="6" height="8" rx="1" fill="#8b6b4a" />
      <rect x="52" y="74" width="6" height="8" rx="1" fill="#8b6b4a" />
      {/* Screwdriver */}
      <g transform="translate(64 18) rotate(35)">
        <rect x="0" y="0" width="8" height="22" rx="2" fill="#1f5c45" />
        <rect x="2" y="22" width="4" height="28" rx="1" fill="#8a9190" />
        <path d="M2 50h4l-1 8h-2l-1-8Z" fill="#5c6660" />
      </g>
    </svg>
  );
}

export function HomeRepairIcon({
  className = "",
  title = "Reparații prin casă",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect x="24" y="16" width="44" height="64" rx="3" fill="#c4a484" />
      <rect x="28" y="20" width="36" height="56" rx="2" fill="#e8d2b8" />
      <rect x="30" y="24" width="32" height="20" rx="1.5" fill="#f3e6d4" />
      <rect x="30" y="48" width="32" height="24" rx="1.5" fill="#f3e6d4" />
      <circle cx="56" cy="52" r="3.5" fill="#8b6b4a" />
      <rect x="54.5" y="52" width="8" height="2.5" rx="1" fill="#5c6660" />
    </svg>
  );
}

export function MountingIcon({
  className = "",
  title = "Montaj și fixări",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect x="14" y="22" width="68" height="4" rx="2" fill="#dfe5e1" />
      <rect x="28" y="30" width="40" height="28" rx="3" fill="#2b322e" />
      <rect x="32" y="34" width="32" height="20" rx="1.5" fill="#4a5550" />
      <rect x="44" y="58" width="8" height="6" rx="1" fill="#8a9190" />
      <path d="M36 68h24l4 8H32l4-8Z" fill="#c4a484" />
      <circle cx="24" cy="24" r="2.5" fill="#1f5c45" />
      <circle cx="72" cy="24" r="2.5" fill="#1f5c45" />
    </svg>
  );
}

export function PlumbingIcon({
  className = "",
  title = "Instalații simple",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        d="M28 28h28a12 12 0 0 1 12 12v6H52v-4a4 4 0 0 0-4-4H28V28Z"
        fill="#8a9190"
      />
      <rect x="24" y="24" width="10" height="36" rx="3" fill="#6f7776" />
      <rect x="22" y="20" width="14" height="8" rx="2" fill="#5c6660" />
      <rect x="52" y="42" width="18" height="8" rx="3" fill="#8a9190" />
      <path
        d="M64 54c0 8-6 14-8 18-2-4-8-10-8-18 0-4 3.5-8 8-8s8 4 8 8Z"
        fill="#4aa3d9"
      />
      <circle cx="64" cy="46" r="2" fill="#f9f8f3" opacity="0.7" />
    </svg>
  );
}
