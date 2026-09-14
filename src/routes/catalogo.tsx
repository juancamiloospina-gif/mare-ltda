import { createFileRoute } from "@tanstack/react-router";
import { CatalogoPage } from "@/components/catalogo/CatalogoPage";
import type { CategorySlug } from "@/data/mare-data";

type CatalogoSearch = { linea: CategorySlug | undefined };

export const Route = createFileRoute("/catalogo")({
  validateSearch: (search: Record<string, unknown>): CatalogoSearch => {
    const linea = search["linea"];
    return { linea: typeof linea === "string" ? (linea as CategorySlug) : undefined };
  },
  head: () => ({
    meta: [
      { title: "Catálogo | MARE" },
      {
        name: "description",
        content:
          "Portafolio veterinario MARE: vacunas, antiparasitarios y productos de nutrición para bovinos y equinos.",
      },
      { property: "og:title", content: "Catálogo | MARE" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CatalogoPage,
});
