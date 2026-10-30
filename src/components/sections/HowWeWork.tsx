import { ArrowDown, ArrowRight } from "lucide-react";
import {
  DetailsStepIcon,
  MessageStepIcon,
  VisitStepIcon,
} from "@/components/illustrations";

const STEPS = [
  {
    title: "Îmi scrii sau mă suni",
    description:
      "Îmi spui ce problemă ai. Poți trimite și poze pe WhatsApp.",
    Icon: MessageStepIcon,
  },
  {
    title: "Discutăm detaliile",
    description: "Îți ofer o estimare și stabilim împreună lucrarea.",
    Icon: DetailsStepIcon,
  },
  {
    title: "Vin la tine",
    description: "Ne înțelegem când ajung la tine și rezolv lucrarea.",
    Icon: VisitStepIcon,
  },
] as const;

export function HowWeWork() {
  return (
    <section
      id="cum-lucram"
      className="scroll-mt-[calc(var(--header-height)+0.75rem)] section-y bg-cream-soft/60"
      aria-labelledby="process-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <h2
            id="process-heading"
            className="text-3xl font-extrabold tracking-tight text-forest sm:text-4xl"
          >
            Cum lucrăm
          </h2>
          <p className="mt-3 text-lg text-ink-muted">
            Totul este simplu și direct.
          </p>
        </div>

        <ol
          className="mt-8 flex flex-col gap-3 lg:mt-10 lg:flex-row lg:items-stretch lg:gap-2"
          data-reveal
        >
          {STEPS.map(({ title, description, Icon }, index) => (
            <li
              key={title}
              className="motion-step flex flex-1 flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-2"
              style={{ ["--step-delay" as string]: `${index * 120}ms` }}
            >
              <div className="w-full flex-1 rounded-[var(--radius-xl)] bg-surface p-5 text-center shadow-[var(--shadow-card)] sm:p-6">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-forest-soft">
                  <Icon className="h-14 w-14" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-subtle">
                  Pasul {index + 1}
                </p>
                <h3 className="mt-1.5 text-lg font-bold text-forest">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
                  {description}
                </p>
              </div>

              {index < STEPS.length - 1 ? (
                <div
                  className="flex items-center justify-center text-ink-subtle"
                  aria-hidden="true"
                >
                  <ArrowDown className="h-5 w-5 lg:hidden" />
                  <ArrowRight className="hidden h-6 w-6 lg:block" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
