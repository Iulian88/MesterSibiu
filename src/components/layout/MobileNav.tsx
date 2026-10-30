"use client";

import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { PhoneButton, WhatsAppButton } from "@/components/ui";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      className={
        open
          ? "pointer-events-auto fixed inset-0 z-50 lg:hidden"
          : "pointer-events-none fixed inset-0 z-50 lg:hidden"
      }
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <button
        type="button"
        className="motion-nav-backdrop absolute inset-0 bg-ink/35"
        style={{ opacity: open ? 1 : 0 }}
        aria-label="Închide meniul"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <nav
        id="mobile-menu"
        className="motion-nav-panel absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col bg-cream shadow-xl"
        style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
        aria-label="Navigare principală"
      >
        <div className="flex items-center justify-between border-b border-border-soft px-5 py-4">
          <p className="text-sm font-bold text-forest">Meniu</p>
          <button
            type="button"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] text-forest transition-colors hover:bg-forest-soft"
            aria-label="Închide meniul"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-1 px-3 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="block rounded-[var(--radius-md)] px-4 py-3.5 text-lg font-semibold text-ink transition-colors hover:bg-forest-soft hover:text-forest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="space-y-3 border-t border-border-soft px-4 py-5 pb-[calc(1.25rem+var(--safe-bottom))]">
          <WhatsAppButton showArrow={false} />
          <PhoneButton />
        </div>
      </nav>
    </div>
  );
}
