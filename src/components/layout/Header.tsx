"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/ui";
import { NAV_LINKS } from "@/lib/nav";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) setOpen(false);
    };

    onChange(media);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border-soft/80 bg-cream/95 backdrop-blur-md">
        <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-3">
          <a
            href="#top"
            className="min-w-0 shrink rounded-[var(--radius-md)]"
            onClick={() => setOpen(false)}
          >
            <Logo size="sm" className="max-w-[min(100%,16.5rem)] sm:max-w-none" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigare principală">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-[var(--radius-md)] px-3 py-2 text-sm font-semibold text-ink-muted transition-colors hover:bg-forest-soft hover:text-forest"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] text-forest transition-colors hover:bg-forest-soft lg:hidden"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((current) => !current)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" strokeWidth={2.25} />
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
