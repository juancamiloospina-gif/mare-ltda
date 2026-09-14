import { useState } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { locations } from "@/data/mare-data";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <div
        className={cn(
          "w-[min(20rem,calc(100vw-2.5rem))] origin-bottom-right border border-border bg-background p-3 shadow-float transition duration-300",
          open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-2 pb-2">
          <strong className="text-sm text-primary">Elija su sede</strong>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cerrar sedes"
            onClick={() => setOpen(false)}
          >
            <X />
          </Button>
        </div>
        {locations.map((location) => (
          <a
            key={location.city}
            href={`https://wa.me/${location.phone}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-t border-border px-2 py-3 text-sm font-medium text-primary transition hover:bg-section"
          >
            <span>
              <small className="block text-muted-foreground">{location.zone}</small>
              {location.city}
            </span>
            <ArrowUpRight className="size-4 text-brand-green" />
          </a>
        ))}
      </div>
      <Button
        variant="whatsapp"
        size="floating"
        aria-label="Abrir selector de WhatsApp"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <MessageCircle />}
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>
    </div>
  );
}
