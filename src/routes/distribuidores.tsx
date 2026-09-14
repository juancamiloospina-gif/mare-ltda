import { createFileRoute } from "@tanstack/react-router";
import { DistribuidoresPage } from "@/components/distribuidores/DistribuidoresPage";

export const Route = createFileRoute("/distribuidores")({
  head: () => ({
    meta: [
      { title: "Distribuidores | MARE" },
      {
        name: "description",
        content:
          "Canal B2B de MARE para almacenes agropecuarios y distribuidores: despacho regional, cadena de frío y crédito comercial.",
      },
      { property: "og:title", content: "Distribuidores | MARE" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DistribuidoresPage,
});
