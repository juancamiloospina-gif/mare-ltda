import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/mare-data";
import logo from "@/assets/mare-logo.png";

export function BrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" aria-label="MARE, volver al inicio" className="inline-flex shrink-0 items-center">
      {/* Sobre fondos oscuros el logo va sobre una "chapa" clara: el isotipo mantiene sus
          colores originales en vez de quedar aplanado a un bloque blanco (brightness-0 invert). */}
      <span
        className={cn(
          "inline-flex items-center rounded-md transition-colors",
          dark ? "bg-background/95 px-2.5 py-1.5 shadow-sm" : "",
        )}
      >
        <img
          src={logo}
          width="246"
          height="60"
          alt="MARE"
          className="h-8 w-auto object-contain sm:h-9"
        />
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 shadow-nav backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 transition-all duration-300 sm:px-8 lg:px-10",
          scrolled ? "h-16" : "h-20 lg:h-24",
        )}
      >
        <div className="min-w-0">
          <BrandMark dark={dark} />
        </div>
        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn("nav-link", scrolled ? "text-primary" : "text-primary-foreground")}
              activeProps={{ className: "opacity-100 underline underline-offset-4" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant={scrolled ? "brand" : "hero"} size="lg">
            <a href="#contacto">
              Contáctenos <ArrowUpRight />
            </a>
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className={cn("lg:hidden", scrolled ? "text-primary" : "text-primary-foreground")}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      <div
        className={cn(
          "overflow-hidden bg-background transition-[max-height] duration-300 lg:hidden",
          menuOpen ? "max-h-80 border-t border-border" : "max-h-0",
        )}
      >
        <nav className="flex flex-col px-5 py-4">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="border-b border-border py-3 font-medium text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="py-3 font-semibold text-brand-orange"
          >
            Contáctenos
          </a>
        </nav>
      </div>
    </header>
  );
}
