"use client";

import { useEffect, useId, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { getPhoneDisplay, getPhoneUrl } from "@/lib/phone";
import { PhoneGlyph } from "./icons";

type PhoneConfirmationDialogProps = {
  open: boolean;
  onClose: () => void;
  /** Element that opened the dialog — receives focus on close. */
  returnFocusRef?: React.RefObject<HTMLElement | null>;
};

const FOCUSABLE =
  'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function subscribe() {
  return () => {};
}

export function PhoneConfirmationDialog({
  open,
  onClose,
  returnFocusRef,
}: PhoneConfirmationDialogProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLAnchorElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current =
      returnFocusRef?.current ??
      (document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null);

    const focusReturnTarget =
      returnFocusRef?.current ?? previouslyFocused.current;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      confirmRef.current?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = [
        ...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ].filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      focusReturnTarget?.focus();
    };
  }, [open, onClose, returnFocusRef]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 pb-[calc(1rem+var(--safe-bottom))]">
      <button
        type="button"
        className="absolute inset-0 bg-ink/45"
        aria-label="Închide confirmarea"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative z-10 max-h-[min(100%,calc(100dvh-2rem))] w-full max-w-md overflow-y-auto rounded-[var(--radius-xl)] bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8"
      >
        <h2
          id={titleId}
          className="text-center text-2xl font-extrabold tracking-tight text-forest sm:text-[1.75rem]"
        >
          Apelezi meșterul?
        </h2>

        <p
          id={descriptionId}
          className="mt-3 text-center text-lg text-ink-muted"
        >
          Vrei să suni la numărul:
        </p>

        <p className="mt-2 text-center text-2xl font-extrabold tracking-tight text-phone sm:text-3xl">
          {getPhoneDisplay()}
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <a
            ref={confirmRef}
            href={getPhoneUrl()}
            className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-[var(--radius-lg)] bg-phone px-5 py-3.5 text-lg font-bold text-white transition-colors hover:bg-phone-hover active:bg-phone-active"
            onClick={onClose}
          >
            <PhoneGlyph className="h-5 w-5 shrink-0 text-white" />
            Da, sună acum
          </a>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-[var(--radius-lg)] bg-phone-btn px-5 py-3.5 text-lg font-bold text-ink transition-colors hover:bg-phone-btn-hover"
          >
            Anulează
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
