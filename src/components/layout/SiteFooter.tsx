import { Link } from "@tanstack/react-router";
import { navigation, contact } from "@/data/mare-data";
import { BrandMark } from "@/components/layout/SiteHeader";

export function SiteFooter() {
  return (
    <footer id="contacto" className="scroll-mt-16 bg-primary pb-10 pt-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 border-b border-primary-foreground/16 pb-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <BrandMark dark />
            <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/60">
              Salud animal, nutrición y acompañamiento técnico para el campo colombiano.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-brand-orange-light">Contacto</p>
            <a href={`mailto:${contact.email}`} className="mt-4 block text-sm">
              {contact.email}
            </a>
            <a href={`tel:+${contact.primaryWhatsApp}`} className="mt-2 block text-sm">
              Línea regional MARE
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-brand-orange-light">Navegación</p>
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="mt-3 block text-sm text-primary-foreground/70"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-7 text-xs text-primary-foreground/45 sm:flex-row">
          <span>© 2026 MARE · Cundinamarca, Colombia</span>
          <span>Diseñado para el campo. Construido para responder.</span>
        </div>
      </div>
    </footer>
  );
}
