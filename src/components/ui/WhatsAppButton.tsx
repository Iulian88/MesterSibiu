import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppGlyph } from "./icons";

type WhatsAppButtonProps = {
  className?: string;
  children?: React.ReactNode;
  message?: string;
  showArrow?: boolean;
  subtitle?: string;
};

export function WhatsAppButton({
  className = "",
  children = "Scrie pe WhatsApp",
  message,
  showArrow = true,
  subtitle,
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl({ message })}
      target="_blank"
      rel="noopener noreferrer"
      className={`motion-cta group inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-[var(--radius-lg)] bg-whatsapp px-5 py-3.5 text-base font-bold text-white shadow-[var(--shadow-cta)] hover:bg-whatsapp-hover active:bg-whatsapp-active ${className}`}
    >
      <WhatsAppGlyph className="h-5 w-5 shrink-0" />
      <span className="flex min-w-0 flex-col items-start leading-tight">
        <span>{children}</span>
        {subtitle ? (
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/85">
            {subtitle}
          </span>
        ) : null}
      </span>
      {showArrow ? (
        <ArrowRight
          className="ml-auto h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </a>
  );
}
