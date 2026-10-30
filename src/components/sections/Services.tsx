import { ChevronRight } from "lucide-react";
import {
  FurnitureIcon,
  HomeRepairIcon,
  MountingIcon,
  PlumbingIcon,
} from "@/components/illustrations";

const SERVICES = [
  {
    id: "montaj-mobilier",
    title: "Montaj mobilier",
    description:
      "Asamblare mobilier, rafturi, galerii, reglaje și reparații simple.",
    Icon: FurnitureIcon,
  },
  {
    id: "reparatii",
    title: "Reparații prin casă",
    description: "Uși, mânere, balamale, mici reparații și ajustări.",
    Icon: HomeRepairIcon,
  },
  {
    id: "montaj-fixari",
    title: "Montaj și fixări",
    description: "Suporturi TV, tablouri, oglinzi și obiecte decorative.",
    Icon: MountingIcon,
  },
  {
    id: "instalatii",
    title: "Instalații simple",
    description:
      "Înlocuire baterii, racorduri, accesorii și mici intervenții sanitare.",
    Icon: PlumbingIcon,
  },
] as const;

export function Services() {
  return (
    <section
      id="servicii"
      className="scroll-mt-[calc(var(--header-height)+0.75rem)] section-y"
      aria-labelledby="services-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <h2
            id="services-heading"
            className="text-3xl font-extrabold tracking-tight text-forest sm:text-4xl"
          >
            Serviciile mele
          </h2>
          <p className="mt-3 text-lg text-ink-muted">
            Lucrări practice și reparații pentru o casă mai confortabilă.
          </p>
        </div>

        <ul
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5"
          data-reveal
        >
          {SERVICES.map(({ id, title, description, Icon }, index) => (
            <li key={id}>
              <article className="motion-card flex h-full flex-col rounded-[var(--radius-xl)] bg-surface p-5 shadow-[var(--shadow-card)]">
                <div className="mb-4 flex h-24 items-center justify-center rounded-[var(--radius-lg)] bg-cream-soft">
                  <div
                    className="motion-service-icon"
                    style={{ ["--icon-delay" as string]: `${index * 70}ms` }}
                  >
                    <Icon className="h-[5.5rem] w-[5.5rem]" />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-forest">{title}</h3>
                  <ChevronRight
                    className="motion-card-chevron mt-1 h-5 w-5 shrink-0 text-ink-subtle"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
