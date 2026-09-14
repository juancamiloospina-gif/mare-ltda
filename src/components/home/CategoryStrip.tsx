import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "@/data/mare-data";

// Franja de segmentación por línea de producto, justo debajo del header —
// mismo patrón que usa la competencia (líneas de portafolio a la vista antes
// de bajar). Las líneas sin catálogo real todavía ("available: false") se
// muestran como "Próximamente" en vez de simular productos que Mare no maneja.
export function CategoryStrip() {
  return (
    <div className="relative z-10 grid grid-cols-2 divide-x divide-y divide-primary-foreground/15 border-t border-primary-foreground/15 bg-primary/80 backdrop-blur-sm sm:grid-cols-4 sm:divide-y-0">
      {categories.map((category) =>
        category.available ? (
          <Link
            key={category.slug}
            to="/catalogo"
            search={{ linea: category.slug }}
            className="group flex flex-col justify-between gap-6 p-5 text-primary-foreground transition hover:bg-primary-foreground/5 sm:p-7"
          >
            <div>
              <p className="text-lg font-semibold sm:text-xl">{category.label}</p>
              <p className="mt-2 max-w-[22rem] text-xs leading-5 text-primary-foreground/60 sm:text-sm">
                {category.tagline}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange-light">
              Ver más
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ) : (
          <div
            key={category.slug}
            className={cn(
              "flex flex-col justify-between gap-6 p-5 text-primary-foreground/45 sm:p-7",
            )}
          >
            <div>
              <p className="text-lg font-semibold sm:text-xl">{category.label}</p>
              <p className="mt-2 max-w-[22rem] text-xs leading-5 text-primary-foreground/40 sm:text-sm">
                {category.tagline}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
              <Clock className="size-4" /> Próximamente
            </span>
          </div>
        ),
      )}
    </div>
  );
}
