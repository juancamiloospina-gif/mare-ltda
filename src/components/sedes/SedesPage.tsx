import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionIntro } from "@/components/layout/motion";
import { locations } from "@/data/mare-data";

export function SedesPage() {
  const [locationIndex, setLocationIndex] = useState(0);
  const visibleLocations = useMemo(
    () => locations.map((_, index) => locations[(index + locationIndex) % locations.length]!),
    [locationIndex],
  );

  return (
    // Sedes ya nace oscura (bg-primary) — no necesita el ChapterHero de las demás páginas internas.
    <main className="snap-section flex min-h-[100svh] items-center bg-primary py-20 pt-32 text-primary-foreground sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionIntro
            eyebrow="Cobertura regional"
            title="Cuatro sedes. Una misma promesa de cuidado."
            copy="Cercanía operativa para responder a las necesidades de la región."
            light
          />
          <div className="flex gap-2">
            <Button
              variant="heroIcon"
              size="iconLg"
              aria-label="Sede anterior"
              onClick={() =>
                setLocationIndex((value) => (value - 1 + locations.length) % locations.length)
              }
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="heroIcon"
              size="iconLg"
              aria-label="Sede siguiente"
              onClick={() => setLocationIndex((value) => (value + 1) % locations.length)}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleLocations.map((location, index) => (
            <article
              key={`${location.city}-${locationIndex}`}
              className={cn(
                "location-card border border-primary-foreground/18 p-6 transition duration-300",
                index === 0
                  ? "bg-primary-foreground text-primary"
                  : "bg-primary text-primary-foreground",
              )}
            >
              <div className="flex items-center justify-between">
                <MapPin
                  className={cn(
                    "size-6",
                    index === 0 ? "text-brand-orange" : "text-brand-orange-light",
                  )}
                />
                <span className="text-xs font-bold opacity-50">0{index + 1}</span>
              </div>
              <p className="mt-12 text-xs font-bold uppercase opacity-60">{location.zone}</p>
              <h3 className="mt-2 text-2xl font-semibold">{location.city}</h3>
              <p className="mt-3 text-sm opacity-65">{location.address}</p>
              <div className="mt-8 grid gap-2">
                <a
                  href={`https://wa.me/${location.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-brand-orange"
                >
                  WhatsApp <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.city + ", Cundinamarca")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium opacity-65"
                >
                  Cómo llegar <ArrowUpRight className="size-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
