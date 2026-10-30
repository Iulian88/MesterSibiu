type IconProps = {
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

export function WhatsAppGlyph({ className = "", ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.95.57 3.76 1.56 5.3L2 22l5.05-1.65a9.9 9.9 0 0 0 4.99 1.34h.01c5.46 0 9.89-4.4 9.89-9.85C21.94 6.4 17.5 2 12.04 2Zm5.76 13.98c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.4-.14-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.29.59-.36.79-.36h.57c.18 0 .43-.07.67.51.24.6.82 2.07.89 2.22.07.15.12.32.02.52-.1.19-.14.32-.28.49-.14.17-.3.38-.42.51-.14.15-.29.31-.12.6.17.3.75 1.23 1.61 1.99 1.1.98 2.03 1.28 2.32 1.43.29.14.46.12.63-.07.17-.19.73-.85.93-1.14.2-.29.4-.24.67-.14.27.1 1.72.81 2.01.96.29.15.49.22.56.34.07.13.07.74-.17 1.42Z" />
    </svg>
  );
}

export function PhoneGlyph({ className = "", ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
