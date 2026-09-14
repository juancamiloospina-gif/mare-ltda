import { createFileRoute } from "@tanstack/react-router";
import { AsesoriaPage } from "@/components/asesoria/AsesoriaPage";

export const Route = createFileRoute("/asesoria")({
  head: () => ({
    meta: [
      { title: "Asesoría técnica | MARE" },
      {
        name: "description",
        content:
          "Acompañamiento técnico en campo para bovinos y equinos: diagnóstico, protocolo y seguimiento.",
      },
      { property: "og:title", content: "Asesoría técnica | MARE" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AsesoriaPage,
});
