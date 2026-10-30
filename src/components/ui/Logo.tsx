type LogoProps = {
  className?: string;
  /** Show wordmark + subtitle beside the mark. Default true. */
  withWordmark?: boolean;
  /** Compact mark-only size for favicon-like uses. */
  size?: "sm" | "md" | "lg";
};

const SIZE_MAP = {
  sm: 32,
  md: 44,
  lg: 56,
} as const;

export function LogoMark({
  size = 44,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* House body */}
      <path
        d="M8 22.5L24 9l16 13.5V40a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V22.5Z"
        fill="currentColor"
      />
      {/* Door */}
      <path
        d="M20 42V29.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V42"
        fill="var(--color-cream)"
      />
      {/* Window */}
      <rect x="12.5" y="26" width="6" height="5.5" rx="1" fill="var(--color-cream)" />
      {/* Wrench integrated in roof line */}
      <path
        d="M31.2 12.2a4.2 4.2 0 0 1 5.9 5.9l-8.4 8.4-2.5-.8-.8-2.5 8.4-8.4a1.6 1.6 0 0 0-2.26-2.26l-.4.4-1.5-1.5.4-.4a4.2 4.2 0 0 1 .56-.84Z"
        fill="var(--color-cream)"
        opacity="0.95"
      />
      <circle cx="35.6" cy="13.8" r="1.35" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className = "",
  withWordmark = true,
  size = "md",
}: LogoProps) {
  const markSize = SIZE_MAP[size];

  if (!withWordmark) {
    return (
      <span className={`inline-flex text-forest ${className}`}>
        <LogoMark size={markSize} />
        <span className="sr-only">Meșter la Tine Acasă</span>
      </span>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 text-forest ${className}`}>
      <LogoMark size={markSize} />
      <div className="min-w-0 leading-tight">
        <p className="truncate text-[0.95rem] font-bold tracking-tight sm:text-base">
          Meșter la Tine Acasă
        </p>
        <p className="mt-0.5 truncate text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-ink-muted sm:text-[0.68rem]">
          Servicii pentru casă · Sibiu
        </p>
      </div>
    </div>
  );
}
