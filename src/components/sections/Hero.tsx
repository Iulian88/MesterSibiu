import { HandymanHero } from "@/components/illustrations";
import { PhoneButton, WhatsAppButton } from "@/components/ui";
import { CONTACT } from "@/lib/contact";

export function Hero() {
  return (
    <section
      id="top"
      className="container-page relative overflow-hidden pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-16 lg:pt-12"
      aria-labelledby="hero-heading"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="relative z-10 max-w-xl">
          <p className="mb-4 font-slogan text-[1.65rem] leading-none text-forest sm:text-3xl lg:hidden">
            {CONTACT.tagline}
          </p>

          <h1
            id="hero-heading"
            className="text-balance text-[2rem] font-extrabold leading-[1.15] tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]"
          >
            Ai ceva de reparat prin casă?
          </h1>

          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted sm:text-xl">
            Te ajut cu reparații și lucrări practice în locuință, în Sibiu și
            împrejurimi.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:max-w-md">
            <WhatsAppButton />
            <PhoneButton />
          </div>

          <p className="mt-5 hidden font-slogan text-3xl text-forest lg:block">
            {CONTACT.tagline}
          </p>
        </div>

        <div
          className="relative mx-auto w-full max-w-[20rem] sm:max-w-md lg:max-w-none"
          data-reveal
        >
          {/* White surface matches the illustration background so it blends on cream page */}
          <div className="overflow-hidden rounded-[var(--radius-xl)] bg-white">
            <HandymanHero />
          </div>
        </div>
      </div>
    </section>
  );
}
