import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  MapPin,
  PackageCheck,
  Snowflake,
  Stethoscope,
  ThermometerSnowflake,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/components/layout/motion";
import { CountUp } from "@/components/layout/motion";
import heroImage from "@/assets/mare-hero.jpg";
import bovinosImage from "@/assets/mare-bovinos.jpg";
import equinosImage from "@/assets/mare-equinos.jpg";
import vetImage from "@/assets/mare-veterinario.jpg";

const trustStats = [
  { icon: BadgeCheck, value: 1, suffix: "", label: "Distribuidor estratégico MSD" },
  { icon: Stethoscope, value: 100, suffix: "%", label: "Asistencia técnica en finca" },
  { icon: MapPin, value: 4, suffix: "", label: "Sedes en Cundinamarca" },
  { icon: Snowflake, value: 24, suffix: "/7", label: "Cadena de frío garantizada" },
];

const species = [
  {
    name: "Bovinos",
    image: bovinosImage,
    alt: "Ganado Normando y Jersey en potrero",
    copy: "Prevención, tratamiento y nutrición para hatos más sanos y productivos.",
    number: "01",
  },
  {
    name: "Equinos",
    image: equinosImage,
    alt: "Caballo criollo colombiano en movimiento",
    copy: "Bienestar, reproducción y desempeño para ejemplares en su mejor condición.",
    number: "02",
  },
];

export function HomeSections() {
  useReveal();

  return (
    <main id="inicio" className="overflow-clip bg-background text-foreground">
      <section className="snap-section relative flex min-h-[100svh] items-center overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImage}
          width="1600"
          height="1008"
          alt="Veterinario acompañando ganado en un potrero de Cundinamarca"
          className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative mx-auto flex w-full max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 md:items-center md:pb-12 lg:px-10">
          <div className="max-w-4xl animate-hero-in">
            <div className="mb-5 inline-flex items-center gap-2 border-l-2 border-brand-orange pl-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/85">
              <BadgeCheck className="size-4 text-brand-orange-light" /> Distribuidor veterinario en
              Cundinamarca
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-6xl lg:text-7xl">
              Salud animal de alta precisión y nutrición que maximiza su rendimiento en campo
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/78 sm:text-lg">
              Soluciones respaldadas por MSD Salud Animal, cadena de frío y acompañamiento técnico
              que llega hasta su finca.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="xl">
                <Link to="/catalogo">
                  Explorar catálogo <ArrowDown />
                </Link>
              </Button>
              <Button asChild variant="hero" size="xl">
                <a href="https://wa.me/573000000001" target="_blank" rel="noreferrer">
                  Hablar con un asesor <MessageCircle />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <a
          href="#confianza"
          aria-label="Ver más"
          className="absolute bottom-5 right-5 hidden h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/35 text-primary-foreground transition hover:bg-primary-foreground/10 sm:flex lg:right-10"
        >
          <ArrowDown />
        </a>
      </section>

      <section
        id="confianza"
        className="snap-section relative z-10 flex min-h-[100svh] items-center border-b border-border bg-background"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-x divide-y divide-border px-5 sm:px-8 lg:grid-cols-4 lg:divide-y-0 lg:px-10">
          {trustStats.map((item, index) => (
            <div
              key={item.label}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
              className="reveal flex min-h-36 flex-col justify-between p-5 sm:p-7"
            >
              <item.icon className="size-5 text-brand-orange" />
              <div>
                <strong className="block text-2xl font-semibold text-primary">
                  <CountUp value={item.value} suffix={item.suffix} />
                </strong>
                <span className="mt-1 block text-sm leading-5 text-muted-foreground">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="snap-section flex min-h-[100svh] items-center py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div data-reveal className="reveal max-w-3xl">
            <p className="section-kicker">Soluciones por especie</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Cada animal exige una mirada distinta.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Portafolios especializados para las necesidades sanitarias, productivas y
              nutricionales de su operación.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {species.map((item, index) => (
              <article
                key={item.name}
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
                className="species-card reveal group relative min-h-[31rem] overflow-hidden bg-primary text-primary-foreground"
              >
                <img
                  src={item.image}
                  loading="lazy"
                  width="1200"
                  height="1408"
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="species-scrim absolute inset-0" />
                <span className="absolute right-6 top-6 text-sm font-bold text-primary-foreground/65">
                  {item.number}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <h3 className="text-4xl font-semibold">{item.name}</h3>
                  <p className="mt-3 max-w-md leading-7 text-primary-foreground/78">{item.copy}</p>
                  <Link
                    to="/catalogo"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-brand-orange-light"
                  >
                    Ver soluciones{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="snap-section flex min-h-[100svh] items-center bg-primary text-primary-foreground">
        <div className="mx-auto grid w-full max-w-[96rem] lg:grid-cols-[1.06fr_.94fr]">
          <div className="min-h-[22rem] lg:min-h-[38rem]">
            <img
              src={vetImage}
              loading="lazy"
              width="1408"
              height="1008"
              alt="Veterinario aplicando una vacuna a un bovino"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center px-5 py-16 sm:px-12 lg:px-16">
            <div data-reveal className="reveal max-w-xl">
              <p className="section-kicker text-brand-orange-light">Respaldo MSD Salud Animal</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                Precisión global. Conocimiento del territorio.
              </h2>
              <p className="mt-6 text-base leading-8 text-primary-foreground/72">
                Unimos tecnología veterinaria de clase mundial con la experiencia de un equipo que
                entiende el clima, el terreno y los desafíos productivos de Cundinamarca.
              </p>
              <div className="mt-10 grid gap-5 border-t border-primary-foreground/18 pt-8 sm:grid-cols-2">
                <div>
                  <ThermometerSnowflake className="size-6 text-brand-orange-light" />
                  <h3 className="mt-4 font-semibold">Trazabilidad térmica</h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/60">
                    Custodia cuidadosa desde nuestra bodega hasta su finca.
                  </p>
                </div>
                <div>
                  <PackageCheck className="size-6 text-brand-orange-light" />
                  <h3 className="mt-4 font-semibold">Producto original</h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/60">
                    Portafolio confiable con respaldo técnico especializado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
