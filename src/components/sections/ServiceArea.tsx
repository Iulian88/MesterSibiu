import { LocationPinIcon, ServiceAreaMap } from "@/components/illustrations";
import { CONTACT } from "@/lib/contact";

export function ServiceArea() {
  return (
    <section
      id="zona"
      className="scroll-mt-[calc(var(--header-height)+0.75rem)] section-y"
      aria-labelledby="area-heading"
    >
      <div className="container-page">
        <div
          className="mx-auto mb-6 max-w-2xl text-center lg:mb-8"
          data-reveal
        >
          <h2
            id="area-heading"
            className="text-3xl font-extrabold tracking-tight text-forest sm:text-4xl"
          >
            Zona deservită
          </h2>
        </div>

        <div
          className="flex flex-col gap-5 rounded-[var(--radius-xl)] bg-forest-soft px-5 py-6 sm:flex-row sm:items-center sm:gap-6 sm:px-7 sm:py-7"
          data-reveal
        >
          <LocationPinIcon className="motion-pin h-14 w-14 shrink-0 self-start sm:self-center" />

          <div className="min-w-0 flex-1">
            <p className="text-2xl font-extrabold tracking-tight text-forest">
              {CONTACT.area}
            </p>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Mă deplasez în Sibiu și în localitățile din apropiere.
            </p>
          </div>

          <ServiceAreaMap className="mx-auto w-full max-w-[14rem] shrink-0 sm:mx-0 sm:max-w-[11rem] lg:max-w-[13rem]" />
        </div>
      </div>
    </section>
  );
}
