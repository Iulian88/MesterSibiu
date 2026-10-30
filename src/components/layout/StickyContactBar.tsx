"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PhoneButton, WhatsAppGlyph } from "@/components/ui";

export function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border-soft bg-cream/95 px-3 pt-2.5 backdrop-blur-md pb-[calc(0.65rem+var(--safe-bottom))] md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2.5">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="motion-cta inline-flex min-h-[3.75rem] items-center justify-center gap-2 rounded-[var(--radius-lg)] bg-whatsapp px-3 py-2 text-white hover:bg-whatsapp-hover active:bg-whatsapp-active"
        >
          <WhatsAppGlyph className="h-5 w-5 shrink-0" />
          <span className="flex min-w-0 flex-col items-start leading-tight">
            <span className="text-sm font-bold">Scrie pe WhatsApp</span>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-white/85">
              Contact rapid
            </span>
          </span>
        </a>

        <PhoneButton className="min-h-[3.75rem] px-3 py-2 text-sm shadow-none" />
      </div>
    </div>
  );
}
