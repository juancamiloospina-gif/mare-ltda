import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChapterHero } from "@/components/layout/ChapterHero";
import { useReveal } from "@/components/layout/motion";
import { distributorBenefits } from "@/data/mare-data";

const formFields: [string, string][] = [
  ["Nombre del almacén", "Agropecuaria..."],
  ["NIT", "000.000.000-0"],
  ["Municipio", "Cundinamarca"],
  ["Volumen estimado", "Mensual"],
];

export function DistribuidoresPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  const simulateSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: conectar backend — enviar solicitud B2B, validar campos y persistir el lead.
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 3200);
  };

  return (
    <main className="bg-background text-foreground">
      <ChapterHero
        eyebrow="Canal B2B"
        title="Crezca con un aliado que cuida cada eslabón."
        copy="Atención para almacenes agropecuarios y distribuidores que buscan respaldo, cumplimiento y un portafolio de alta rotación."
      />

      <section className="snap-section flex min-h-[100svh] items-center bg-section py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div>
            <ul className="mt-2 space-y-4 lg:mt-9">
              {distributorBenefits.map(([Icon, label]) => (
                <li
                  key={label}
                  className="flex items-center gap-4 border-b border-border pb-4 font-medium text-primary"
                >
                  <Icon className="size-5 text-brand-green" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <form
            onSubmit={simulateSubmit}
            data-reveal
            className="reveal bg-background p-6 shadow-soft sm:p-9"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-primary">Solicitud de vinculación</h3>
              <span className="text-xs font-bold text-muted-foreground">DEMO</span>
            </div>
            {/* TODO: conectar backend — validar formulario, guardar solicitud y notificar al equipo comercial. */}
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {formFields.map(([label, placeholder]) => (
                <label key={label} className="text-sm font-semibold text-primary">
                  {label}
                  <input
                    required
                    placeholder={placeholder}
                    className="mt-2 h-12 w-full border border-input bg-background px-4 font-normal outline-none transition focus:border-brand-orange"
                  />
                </label>
              ))}
            </div>
            <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-muted-foreground">
              <input required type="checkbox" className="mt-0.5 size-4 accent-brand-orange" />
              Acepto ser contactado por el equipo comercial de MARE.
            </label>
            <Button type="submit" variant="brand" size="xl" className="mt-7 w-full">
              {submitted ? (
                <>
                  <Check /> Solicitud simulada
                </>
              ) : (
                <>
                  Enviar solicitud <ArrowUpRight />
                </>
              )}
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
