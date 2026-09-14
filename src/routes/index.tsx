import { createFileRoute } from "@tanstack/react-router";
import { MareLanding } from "@/components/MareLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MARE | Salud animal en Cundinamarca" },
      { name: "description", content: "Productos veterinarios, nutrición y asesoría técnica para bovinos y equinos en Cundinamarca." },
      { property: "og:title", content: "MARE | Salud animal en Cundinamarca" },
      { property: "og:description", content: "Salud animal de alta precisión y acompañamiento técnico que llega hasta su finca." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <MareLanding />;
}
