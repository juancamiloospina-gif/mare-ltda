import { createFileRoute } from "@tanstack/react-router";
import { CatalogoPage } from "@/components/catalogo/CatalogoPage";

export const Route = createFileRoute("/catalogo")({
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
