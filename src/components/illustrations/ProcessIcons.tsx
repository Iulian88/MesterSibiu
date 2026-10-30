type IconProps = {
  className?: string;
  title?: string;
};

export function MessageStepIcon({
  className = "",
  title = "Îmi scrii sau mă suni",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect x="10" y="14" width="40" height="28" rx="8" fill="#e7f3ec" />
      <rect x="14" y="18" width="32" height="20" rx="5" fill="#1f5c45" />
      <path d="M22 42l6-6h16" fill="#e7f3ec" />
      <circle cx="24" cy="28" r="2" fill="#f9f8f3" />
      <circle cx="32" cy="28" r="2" fill="#f9f8f3" />
      <circle cx="40" cy="28" r="2" fill="#f9f8f3" />
    </svg>
  );
}

export function DetailsStepIcon({
  className = "",
  title = "Discutăm detaliile",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect x="16" y="10" width="32" height="42" rx="4" fill="#e7f3ec" />
      <rect x="20" y="14" width="24" height="34" rx="2" fill="#ffffff" stroke="#1f5c45" strokeWidth="2" />
      <rect x="24" y="20" width="16" height="2.5" rx="1" fill="#1f5c45" />
      <rect x="24" y="26" width="16" height="2.5" rx="1" fill="#8a938d" />
      <rect x="24" y="32" width="12" height="2.5" rx="1" fill="#8a938d" />
      <circle cx="40" cy="42" r="8" fill="#25d366" />
      <path d="M37 42.5l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function VisitStepIcon({
  className = "",
  title = "Vin la tine",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Soft green circle background */}
      <circle cx="32" cy="32" r="24" fill="#e7f3ec" />
      {/* Roof — dark green, symmetrical with eaves */}
      <path d="M14 30L32 14L50 30H14Z" fill="#1f5c45" />
      {/* Body — centered under roof */}
      <rect x="20" y="29" width="24" height="21" fill="#1f5c45" />
      {/* Door — centered light cutout */}
      <rect x="28" y="37" width="8" height="13" rx="1" fill="#e7f3ec" />
      {/* Small window for clarity */}
      <rect x="23" y="34" width="5" height="5" rx="0.5" fill="#e7f3ec" />
    </svg>
  );
}
