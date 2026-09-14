import type { ReactNode } from "react";

// Encabezado oscuro que abre cada página interna (Catálogo, Asesoría, Distribuidores).
// Mantiene el contraste del header transparente sin repetir el hero fotográfico del home.
// Sedes no lo usa: su propia sección ya nace oscura (bg-primary).
export function ChapterHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-primary text-primary-foreground sm:min-h-[64svh]">
      <div className="chapter-scrim absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-8 lg:px-10">
        <p className="section-kicker text-brand-orange-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {copy && (
          <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/78">{copy}</p>
        )}
      </div>
    </section>
  );
}
