import { createFileRoute } from "@tanstack/react-router";
import { SedesPage } from "@/components/sedes/SedesPage";

export const Route = createFileRoute("/sedes")({
  head: () => ({
    meta: [
      { title: "Sedes | MARE" },
      {
        name: "description",
        content:
          "Cuatro sedes de MARE en Cundinamarca: Siberia/Tenjo, La Caro/Chía, Ubaté y Simijaca.",
      },
      { property: "og:title", content: "Sedes | MARE" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SedesPage,
});
