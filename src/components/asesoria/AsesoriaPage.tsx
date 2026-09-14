import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChapterHero } from "@/components/layout/ChapterHero";
import { useReveal } from "@/components/layout/motion";
import { advisoryPillars } from "@/data/mare-data";

export function AsesoriaPage() {
  useReveal();

  return (
    <main className="bg-background text-foreground">
      <ChapterHero
        eyebrow="Asesoría técnica en campo"
        title="No solo vendemos productos; caminamos el potrero con usted."
        copy="Nuestro equipo técnico observa, pregunta y acompaña. La mejor recomendación nace donde están sus animales."
      />

      <section className="snap-section flex min-h-[100svh] items-center py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {advisoryPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
                className="reveal bg-background p-6 sm:min-h-72"
              >
                <span className="text-xs font-bold text-brand-orange">0{index + 1}</span>
                <pillar.icon className="mt-10 size-8 text-primary" />
                <h3 className="mt-6 text-xl font-semibold text-primary">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{pillar.copy}</p>
              </article>
            ))}
          </div>
          <div
            data-reveal
            className="reveal mt-10 flex flex-col items-start justify-between gap-6 border-y border-border py-7 sm:flex-row sm:items-center"
          >
            <p className="max-w-xl font-medium text-primary">
              Coordine una visita diagnóstica con un asesor técnico de su zona.
            </p>
            <Button asChild variant="brand" size="xl">
              <a href="https://wa.me/573000000001" target="_blank" rel="noreferrer">
                Agendar visita <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
