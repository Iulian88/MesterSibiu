import { PhoneButton, WhatsAppButton } from "@/components/ui";
import { CONTACT } from "@/lib/contact";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-[calc(var(--header-height)+0.75rem)] section-y pb-8"
      aria-labelledby="contact-heading"
    >
      <div className="container-page">
        <div
          className="mx-auto max-w-xl rounded-[var(--radius-xl)] bg-surface px-5 py-8 text-center shadow-[var(--shadow-card)] sm:px-8 sm:py-10"
          data-reveal
        >
          <h2
            id="contact-heading"
            className="text-3xl font-extrabold tracking-tight text-forest sm:text-4xl"
          >
            Ai nevoie de un meșter?
          </h2>
          <p className="mt-3 text-lg text-ink-muted">
            Scrie-mi pe WhatsApp sau sună direct.
          </p>
          <p className="mt-2 text-base font-semibold text-forest">
            {CONTACT.name}
          </p>

          {/* CTAs stay undelayed relative to sticky bar — no extra wait on these controls */}
          <div className="mx-auto mt-7 flex max-w-md flex-col gap-3">
            <WhatsAppButton />
            <PhoneButton />
          </div>
        </div>

        <footer className="mt-8 text-center text-sm text-ink-subtle" data-reveal>
          <p>
            © 2026 {CONTACT.brand} · Sibiu
          </p>
        </footer>
      </div>
    </section>
  );
}
