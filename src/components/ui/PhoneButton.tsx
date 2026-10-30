"use client";

import { useRef, useState } from "react";
import { getPhoneDisplay } from "@/lib/phone";
import { PhoneGlyph } from "./icons";
import { PhoneConfirmationDialog } from "./PhoneConfirmationDialog";

type PhoneButtonProps = {
  className?: string;
  children?: React.ReactNode;
  showNumber?: boolean;
  subtitle?: string;
};

export function PhoneButton({
  className = "",
  children = "Sună acum",
  showNumber = true,
  subtitle,
}: PhoneButtonProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`motion-cta inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-[var(--radius-lg)] bg-phone px-5 py-3.5 text-base font-bold text-white hover:bg-phone-hover active:bg-phone-active ${className}`}
      >
        <PhoneGlyph className="h-5 w-5 shrink-0 text-white" />
        <span className="flex min-w-0 flex-col items-start leading-tight">
          <span>{children}</span>
          {subtitle ? (
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/85">
              {subtitle}
            </span>
          ) : showNumber ? (
            <span className="text-sm font-semibold text-white/90">
              {getPhoneDisplay()}
            </span>
          ) : null}
        </span>
        {subtitle && showNumber ? (
          <span className="ml-auto text-sm font-semibold text-white/90">
            {getPhoneDisplay()}
          </span>
        ) : null}
      </button>

      <PhoneConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
        returnFocusRef={triggerRef}
      />
    </>
  );
}
