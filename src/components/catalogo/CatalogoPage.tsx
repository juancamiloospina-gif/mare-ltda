import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChapterHero } from "@/components/layout/ChapterHero";
import { useReveal } from "@/components/layout/motion";
import { products } from "@/data/mare-data";

const filterGroups = [
  { group: "Especie", options: ["Bovinos", "Equinos"] },
  { group: "Categoría", options: ["Vacunas", "Antiparasitarios"] },
  { group: "Laboratorio / MSD", options: ["MSD Salud Animal", "Otros laboratorios"] },
];

export function CatalogoPage() {
  useReveal();
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  return (
    <main className="bg-background text-foreground">
      <ChapterHero
        eyebrow="Catálogo especializado"
        title="Decisiones más claras para cada tratamiento."
        copy="Una muestra visual del portafolio. La recomendación final siempre debe acompañarse de criterio médico veterinario."
      />

      <section className="snap-section flex min-h-[100svh] items-center bg-section py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[17rem_1fr]">
            <aside
              data-reveal
              className="reveal self-start border-t-4 border-brand-orange bg-background p-6 lg:sticky lg:top-24"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-primary">Filtrar catálogo</h3>
                <span className="text-xs font-bold text-muted-foreground">UI DEMO</span>
              </div>
              {/* TODO: conectar backend — búsqueda y filtros de catálogo funcionales. */}
              <label className="mt-6 block text-xs font-bold uppercase text-muted-foreground">
                Buscar
              </label>
              <input
                aria-label="Buscar producto"
                placeholder="Nombre o activo"
                className="mt-2 h-11 w-full border border-input bg-background px-3 text-sm outline-none transition focus:border-brand-orange"
              />
              {filterGroups.map(({ group, options }) => (
                <fieldset key={group} className="mt-6 border-t border-border pt-5">
                  <legend className="mb-3 font-semibold text-primary">{group}</legend>
                  {options.map((option) => (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-3 py-2 text-sm text-muted-foreground"
                    >
                      <input type="checkbox" className="size-4 accent-brand-orange" />
                      {option}
                    </label>
                  ))}
                </fieldset>
              ))}
            </aside>
            <div>
              <div className="grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product, index) => (
                  <article
                    key={product.name}
                    data-reveal
                    style={{ transitionDelay: `${(index % 3) * 70}ms` }}
                    className="reveal product-card group relative bg-background"
                  >
                    <div className="relative h-36 overflow-hidden bg-primary">
                      <img
                        src={product.image}
                        loading="lazy"
                        width="800"
                        height="600"
                        alt={product.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
                      <span className="absolute right-4 top-4 bg-background px-2 py-1 text-xs font-bold text-brand-green">
                        DISPONIBLE
                      </span>
                      <div className="absolute -bottom-5 left-6 grid h-11 w-11 place-items-center bg-secondary text-brand-orange shadow-soft">
                        <product.icon className="size-5" />
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <p className="mt-8 text-xs font-bold uppercase text-muted-foreground">
                        {product.type}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-primary">{product.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{product.active}</p>
                      <button
                        type="button"
                        onClick={() => setActiveProduct(activeProduct === index ? null : index)}
                        className="mt-7 flex w-full items-center justify-between border-t border-border pt-4 text-left text-sm font-bold text-primary"
                        aria-expanded={activeProduct === index}
                      >
                        Ver ficha rápida{" "}
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform",
                            activeProduct === index && "rotate-180",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "grid transition-[grid-template-rows] duration-300",
                          activeProduct === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                        )}
                      >
                        <div className="overflow-hidden">
                          <dl className="mt-4 grid gap-3 bg-section p-4 text-xs">
                            <div className="flex justify-between gap-3">
                              <dt className="text-muted-foreground">Administración</dt>
                              <dd className="font-semibold text-primary">{product.route}</dd>
                            </div>
                            <div className="flex justify-between gap-3">
                              <dt className="text-muted-foreground">Retiro</dt>
                              <dd className="text-right font-semibold text-primary">
                                {product.withdrawal}
                              </dd>
                            </div>
                          </dl>
                          <div className="mt-3 grid gap-2">
                            <Button variant="outline" size="sm">
                              Solicitar ficha técnica
                            </Button>
                            <Button asChild variant="brand" size="sm">
                              <a href="https://wa.me/573000000001" target="_blank" rel="noreferrer">
                                Cotizar por WhatsApp
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      {/* TODO: conectar backend — ficha técnica y cotización con datos reales. */}
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="size-3.5 text-brand-green" /> Portafolio sujeto a disponibilidad
                regional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
