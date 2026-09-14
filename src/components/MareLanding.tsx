import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Beef,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Clock3,
  FlaskConical,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Snowflake,
  Stethoscope,
  Syringe,
  ThermometerSnowflake,
  Truck,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/mare-hero.jpg";
import bovinosImage from "@/assets/mare-bovinos.jpg";
import equinosImage from "@/assets/mare-equinos.jpg";
import vetImage from "@/assets/mare-veterinario.jpg";
import logoAsset from "@/assets/mare-logo.png.asset.json";

const navigation = [
  ["Catálogo", "#catalogo"],
  ["Asesoría", "#asesoria"],
  ["Sedes", "#sedes"],
  ["Distribuidores", "#distribuidores"],
] as const;

const locations = [
  { city: "Siberia / Tenjo", zone: "Sabana Occidente", address: "Centro logístico · Cundinamarca", phone: "573000000001" },
  { city: "La Caro / Chía", zone: "Sabana Centro", address: "Punto de atención · Cundinamarca", phone: "573000000002" },
  { city: "Ubaté", zone: "Valle de Ubaté", address: "Atención regional · Cundinamarca", phone: "573000000003" },
  { city: "Simijaca", zone: "Alto Magdalena", address: "Punto agropecuario · Cundinamarca", phone: "573000000004" },
];

const products = [
  { name: "Bovilis® Vista Once", type: "Vacuna bovina", active: "Virus vivos modificados", route: "Subcutánea", withdrawal: "0 días", icon: ShieldCheck },
  { name: "Bravecto® Pour-On", type: "Antiparasitario", active: "Fluralaner", route: "Tópica", withdrawal: "Consultar ficha", icon: FlaskConical },
  { name: "Nuflor®", type: "Antibiótico", active: "Florfenicol", route: "Intramuscular", withdrawal: "Según indicación", icon: Syringe },
  { name: "Revalor®", type: "Productividad", active: "Combinación hormonal", route: "Implante", withdrawal: "Consultar ficha", icon: HeartPulse },
  { name: "Panacur®", type: "Antiparasitario", active: "Fenbendazol", route: "Oral", withdrawal: "Según especie", icon: Beef },
  { name: "Regumate® Equino", type: "Reproducción", active: "Altrenogest", route: "Oral", withdrawal: "No aplica", icon: ClipboardCheck },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      const started = performance.now();
      const run = (now: number) => {
        const progress = Math.min((now - started) / 1000, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(run);
      };
      frame = requestAnimationFrame(run);
      observer.disconnect();
    });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#inicio" aria-label="MARE, volver al inicio" className="inline-flex shrink-0 items-center">
      <img src={logoAsset.url} width="246" height="60" alt="MARE" className={cn("h-9 w-auto object-contain sm:h-10", inverse && "brightness-0 invert")} />
    </a>
  );
}

function SectionIntro({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div data-reveal className={cn("reveal max-w-3xl", light && "text-primary-foreground")}>
      <p className={cn("section-kicker", light && "text-brand-orange-light")}>{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className={cn("mt-5 max-w-2xl text-base leading-7", light ? "text-primary-foreground/72" : "text-muted-foreground")}>{copy}</p>}
    </div>
  );
}

export function MareLanding() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [locationIndex, setLocationIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleLocations = useMemo(() => locations.map((_, index) => locations[(index + locationIndex) % locations.length]), [locationIndex]);

  const simulateSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: conectar backend — enviar solicitud B2B, validar campos y persistir el lead.
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 3200);
  };

  return (
    <main id="inicio" className="overflow-clip bg-background text-foreground">
      <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "bg-background/95 shadow-nav backdrop-blur-md" : "bg-transparent")}>
        <div className={cn("mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 transition-all duration-300 sm:px-8 lg:px-10", scrolled ? "h-16" : "h-20 lg:h-24")}>
          <div className="min-w-0"><BrandMark inverse={!scrolled} /></div>
          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {navigation.map(([label, href]) => <a key={href} href={href} className={cn("nav-link", scrolled ? "text-primary" : "text-primary-foreground")}>{label}</a>)}
            <Button asChild variant={scrolled ? "brand" : "hero"} size="lg"><a href="#contacto">Contáctenos <ArrowUpRight /></a></Button>
          </nav>
          <Button variant="ghost" size="icon" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} className={cn("lg:hidden", scrolled ? "text-primary" : "text-primary-foreground")} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        <div className={cn("overflow-hidden bg-background transition-[max-height] duration-300 lg:hidden", menuOpen ? "max-h-80 border-t border-border" : "max-h-0")}>
          <nav className="flex flex-col px-5 py-4">
            {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 font-medium text-primary">{label}</a>)}
            <a href="#contacto" onClick={() => setMenuOpen(false)} className="py-3 font-semibold text-brand-orange">Contáctenos</a>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[92svh] overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImage} width="1600" height="1008" alt="Veterinario acompañando ganado en un potrero de Cundinamarca" className="absolute inset-0 h-full w-full object-cover object-[64%_center]" />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 md:items-center md:pb-12 lg:px-10">
          <div className="max-w-4xl animate-hero-in">
            <div className="mb-5 inline-flex items-center gap-2 border-l-2 border-brand-orange pl-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/85"><BadgeCheck className="size-4 text-brand-orange-light" /> Distribuidor veterinario en Cundinamarca</div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-6xl lg:text-7xl">Salud animal de alta precisión y nutrición que maximiza su rendimiento en campo</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/78 sm:text-lg">Soluciones respaldadas por MSD Salud Animal, cadena de frío y acompañamiento técnico que llega hasta su finca.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="xl"><a href="#catalogo">Explorar catálogo <ArrowDown /></a></Button>
              <Button asChild variant="hero" size="xl"><a href="https://wa.me/573000000001" target="_blank" rel="noreferrer">Hablar con un asesor <MessageCircle /></a></Button>
            </div>
          </div>
        </div>
        <a href="#confianza" aria-label="Ver más" className="absolute bottom-5 right-5 hidden h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/35 text-primary-foreground transition hover:bg-primary-foreground/10 sm:flex lg:right-10"><ArrowDown /></a>
      </section>

      <section id="confianza" className="relative z-10 border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border px-5 sm:px-8 lg:grid-cols-4 lg:divide-y-0 lg:px-10">
          {[
            { icon: BadgeCheck, value: 1, suffix: "", label: "Distribuidor estratégico MSD" },
            { icon: Stethoscope, value: 100, suffix: "%", label: "Asistencia técnica en finca" },
            { icon: MapPin, value: 4, suffix: "", label: "Sedes en Cundinamarca" },
            { icon: Snowflake, value: 24, suffix: "/7", label: "Cadena de frío garantizada" },
          ].map((item, index) => <div key={item.label} data-reveal style={{ transitionDelay: `${index * 80}ms` }} className="reveal flex min-h-36 flex-col justify-between p-5 sm:p-7"><item.icon className="size-5 text-brand-orange" /><div><strong className="block text-2xl font-semibold text-primary"><CountUp value={item.value} suffix={item.suffix} /></strong><span className="mt-1 block text-sm leading-5 text-muted-foreground">{item.label}</span></div></div>)}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionIntro eyebrow="Soluciones por especie" title="Cada animal exige una mirada distinta." copy="Portafolios especializados para las necesidades sanitarias, productivas y nutricionales de su operación." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { name: "Bovinos", image: bovinosImage, alt: "Ganado Normando y Jersey en potrero", copy: "Prevención, tratamiento y nutrición para hatos más sanos y productivos.", number: "01" },
              { name: "Equinos", image: equinosImage, alt: "Caballo criollo colombiano en movimiento", copy: "Bienestar, reproducción y desempeño para ejemplares en su mejor condición.", number: "02" },
            ].map((species, index) => <article key={species.name} data-reveal style={{ transitionDelay: `${index * 100}ms` }} className="species-card reveal group relative min-h-[31rem] overflow-hidden bg-primary text-primary-foreground"><img src={species.image} loading="lazy" width="1200" height="1408" alt={species.alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /><div className="species-scrim absolute inset-0" /><span className="absolute right-6 top-6 text-sm font-bold text-primary-foreground/65">{species.number}</span><div className="absolute inset-x-0 bottom-0 p-7 sm:p-9"><h3 className="text-4xl font-semibold">{species.name}</h3><p className="mt-3 max-w-md leading-7 text-primary-foreground/78">{species.copy}</p><a href="#catalogo" className="mt-6 inline-flex items-center gap-2 font-bold text-brand-orange-light">Ver soluciones <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[96rem] lg:grid-cols-[1.06fr_.94fr]">
          <div className="min-h-[28rem] lg:min-h-[44rem]"><img src={vetImage} loading="lazy" width="1408" height="1008" alt="Veterinario aplicando una vacuna a un bovino" className="h-full w-full object-cover" /></div>
          <div className="flex items-center px-5 py-16 sm:px-12 lg:px-16">
            <div data-reveal className="reveal max-w-xl">
              <p className="section-kicker text-brand-orange-light">Respaldo MSD Salud Animal</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">Precisión global. Conocimiento del territorio.</h2>
              <p className="mt-6 text-base leading-8 text-primary-foreground/72">Unimos tecnología veterinaria de clase mundial con la experiencia de un equipo que entiende el clima, el terreno y los desafíos productivos de Cundinamarca.</p>
              <div className="mt-10 grid gap-5 border-t border-primary-foreground/18 pt-8 sm:grid-cols-2">
                <div><ThermometerSnowflake className="size-6 text-brand-orange-light" /><h3 className="mt-4 font-semibold">Trazabilidad térmica</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/60">Custodia cuidadosa desde nuestra bodega hasta su finca.</p></div>
                <div><PackageCheck className="size-6 text-brand-orange-light" /><h3 className="mt-4 font-semibold">Producto original</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/60">Portafolio confiable con respaldo técnico especializado.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="scroll-mt-16 bg-section py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[17rem_1fr]">
            <aside data-reveal className="reveal self-start border-t-4 border-brand-orange bg-background p-6 lg:sticky lg:top-24">
              <div className="flex items-center justify-between"><h3 className="font-semibold text-primary">Filtrar catálogo</h3><span className="text-xs font-bold text-muted-foreground">UI DEMO</span></div>
              {/* TODO: conectar backend — búsqueda y filtros de catálogo funcionales. */}
              <label className="mt-6 block text-xs font-bold uppercase text-muted-foreground">Buscar</label>
              <input aria-label="Buscar producto" placeholder="Nombre o activo" className="mt-2 h-11 w-full border border-input bg-background px-3 text-sm outline-none transition focus:border-brand-orange" />
              {["Especie", "Categoría", "Laboratorio / MSD"].map((group) => <fieldset key={group} className="mt-6 border-t border-border pt-5"><legend className="mb-3 font-semibold text-primary">{group}</legend>{[group === "Especie" ? "Bovinos" : group === "Categoría" ? "Vacunas" : "MSD Salud Animal", group === "Especie" ? "Equinos" : group === "Categoría" ? "Antiparasitarios" : "Otros laboratorios"].map((option) => <label key={option} className="flex cursor-pointer items-center gap-3 py-2 text-sm text-muted-foreground"><input type="checkbox" className="size-4 accent-brand-orange" />{option}</label>)}</fieldset>)}
            </aside>
            <div>
              <SectionIntro eyebrow="Catálogo especializado" title="Decisiones más claras para cada tratamiento." copy="Una muestra visual del portafolio. La recomendación final siempre debe acompañarse de criterio médico veterinario." />
              <div className="mt-9 grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product, index) => <article key={product.name} data-reveal style={{ transitionDelay: `${(index % 3) * 70}ms` }} className="reveal product-card group relative bg-background p-6">
                  <div className="flex items-start justify-between"><div className="grid h-11 w-11 place-items-center bg-secondary text-brand-orange"><product.icon className="size-5" /></div><span className="text-xs font-bold text-brand-green">DISPONIBLE</span></div>
                  <p className="mt-8 text-xs font-bold uppercase text-muted-foreground">{product.type}</p><h3 className="mt-2 text-xl font-semibold text-primary">{product.name}</h3><p className="mt-2 text-sm text-muted-foreground">{product.active}</p>
                  <button type="button" onClick={() => setActiveProduct(activeProduct === index ? null : index)} className="mt-7 flex w-full items-center justify-between border-t border-border pt-4 text-left text-sm font-bold text-primary" aria-expanded={activeProduct === index}>Ver ficha rápida <ChevronDown className={cn("size-4 transition-transform", activeProduct === index && "rotate-180")} /></button>
                  <div className={cn("grid transition-[grid-template-rows] duration-300", activeProduct === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}><div className="overflow-hidden"><dl className="mt-4 grid gap-3 bg-section p-4 text-xs"><div className="flex justify-between gap-3"><dt className="text-muted-foreground">Administración</dt><dd className="font-semibold text-primary">{product.route}</dd></div><div className="flex justify-between gap-3"><dt className="text-muted-foreground">Retiro</dt><dd className="text-right font-semibold text-primary">{product.withdrawal}</dd></div></dl><div className="mt-3 grid gap-2"><Button variant="outline" size="sm">Solicitar ficha técnica</Button><Button asChild variant="brand" size="sm"><a href="https://wa.me/573000000001" target="_blank" rel="noreferrer">Cotizar por WhatsApp</a></Button></div></div></div>
                  {/* TODO: conectar backend — ficha técnica y cotización con datos reales. */}
                </article>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="asesoria" className="scroll-mt-16 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20"><SectionIntro eyebrow="Asesoría técnica en campo" title="No solo vendemos productos; caminamos el potrero con usted." copy="Nuestro equipo técnico observa, pregunta y acompaña. La mejor recomendación nace donde están sus animales." /><div className="grid gap-px bg-border sm:grid-cols-3">
            {[
              { icon: Stethoscope, title: "Diagnóstico", copy: "Leemos el contexto sanitario y productivo de su finca." },
              { icon: ClipboardCheck, title: "Protocolo", copy: "Organizamos una ruta técnica clara y aplicable." },
              { icon: Users, title: "Seguimiento", copy: "Acompañamos la ejecución y evolución en campo." },
            ].map((pillar, index) => <article key={pillar.title} data-reveal style={{ transitionDelay: `${index * 90}ms` }} className="reveal bg-background p-6 sm:min-h-72"><span className="text-xs font-bold text-brand-orange">0{index + 1}</span><pillar.icon className="mt-10 size-8 text-primary" /><h3 className="mt-6 text-xl font-semibold text-primary">{pillar.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{pillar.copy}</p></article>)}
          </div></div>
          <div data-reveal className="reveal mt-10 flex flex-col items-start justify-between gap-6 border-y border-border py-7 sm:flex-row sm:items-center"><p className="max-w-xl font-medium text-primary">Coordine una visita diagnóstica con un asesor técnico de su zona.</p><Button asChild variant="brand" size="xl"><a href="https://wa.me/573000000001" target="_blank" rel="noreferrer">Agendar visita <ArrowUpRight /></a></Button></div>
        </div>
      </section>

      <section id="sedes" className="scroll-mt-16 bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><SectionIntro eyebrow="Cobertura regional" title="Cuatro sedes. Una misma promesa de cuidado." copy="Cercanía operativa para responder a las necesidades de la región." light /><div className="flex gap-2"><Button variant="heroIcon" size="iconLg" aria-label="Sede anterior" onClick={() => setLocationIndex((value) => (value - 1 + locations.length) % locations.length)}><ArrowLeft /></Button><Button variant="heroIcon" size="iconLg" aria-label="Sede siguiente" onClick={() => setLocationIndex((value) => (value + 1) % locations.length)}><ArrowRight /></Button></div></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleLocations.map((location, index) => <article key={`${location.city}-${locationIndex}`} className={cn("location-card border border-primary-foreground/18 p-6 transition duration-300", index === 0 ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground")}><div className="flex items-center justify-between"><MapPin className={cn("size-6", index === 0 ? "text-brand-orange" : "text-brand-orange-light")} /><span className="text-xs font-bold opacity-50">0{index + 1}</span></div><p className="mt-12 text-xs font-bold uppercase opacity-60">{location.zone}</p><h3 className="mt-2 text-2xl font-semibold">{location.city}</h3><p className="mt-3 text-sm opacity-65">{location.address}</p><div className="mt-8 grid gap-2"><a href={`https://wa.me/${location.phone}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-brand-orange">WhatsApp <ArrowUpRight className="size-4" /></a><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.city + ', Cundinamarca')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium opacity-65">Cómo llegar <ArrowUpRight className="size-3" /></a></div></article>)}
          </div>
        </div>
      </section>

      <section id="distribuidores" className="scroll-mt-16 bg-section py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div><SectionIntro eyebrow="Canal B2B" title="Crezca con un aliado que cuida cada eslabón." copy="Atención para almacenes agropecuarios y distribuidores que buscan respaldo, cumplimiento y un portafolio de alta rotación." /><ul className="mt-9 space-y-4">{[[Truck,"Despacho regional organizado"],[Snowflake,"Cadena de frío controlada"],[Building2,"Lista mayorista y crédito comercial"]].map(([Icon, label]) => { const BenefitIcon = Icon as typeof Truck; return <li key={label as string} className="flex items-center gap-4 border-b border-border pb-4 font-medium text-primary"><BenefitIcon className="size-5 text-brand-green" />{label as string}</li>; })}</ul></div>
          <form onSubmit={simulateSubmit} data-reveal className="reveal bg-background p-6 shadow-soft sm:p-9">
            <div className="flex items-center justify-between"><h3 className="text-xl font-semibold text-primary">Solicitud de vinculación</h3><span className="text-xs font-bold text-muted-foreground">DEMO</span></div>
            {/* TODO: conectar backend — validar formulario, guardar solicitud y notificar al equipo comercial. */}
            <div className="mt-7 grid gap-5 sm:grid-cols-2">{[["Nombre del almacén","Agropecuaria..."],["NIT","000.000.000-0"],["Municipio","Cundinamarca"],["Volumen estimado","Mensual"]].map(([label, placeholder]) => <label key={label} className="text-sm font-semibold text-primary">{label}<input required placeholder={placeholder} className="mt-2 h-12 w-full border border-input bg-background px-4 font-normal outline-none transition focus:border-brand-orange" /></label>)}</div>
            <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-muted-foreground"><input required type="checkbox" className="mt-0.5 size-4 accent-brand-orange" />Acepto ser contactado por el equipo comercial de MARE.</label>
            <Button type="submit" variant="brand" size="xl" className="mt-7 w-full">{submitted ? <><Check /> Solicitud simulada</> : <>Enviar solicitud <ArrowUpRight /></>}</Button>
          </form>
        </div>
      </section>

      <footer id="contacto" className="scroll-mt-16 bg-primary pb-10 pt-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="grid gap-10 border-b border-primary-foreground/16 pb-12 md:grid-cols-[1.2fr_.8fr_.8fr]"><div><BrandMark inverse /><p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/60">Salud animal, nutrición y acompañamiento técnico para el campo colombiano.</p></div><div><p className="text-xs font-bold uppercase text-brand-orange-light">Contacto</p><a href="mailto:contacto@mare.com.co" className="mt-4 block text-sm">contacto@mare.com.co</a><a href="tel:+573000000001" className="mt-2 block text-sm">Línea regional MARE</a></div><div><p className="text-xs font-bold uppercase text-brand-orange-light">Navegación</p>{navigation.slice(0,3).map(([label,href]) => <a key={href} href={href} className="mt-3 block text-sm text-primary-foreground/70">{label}</a>)}</div></div><div className="flex flex-col justify-between gap-3 pt-7 text-xs text-primary-foreground/45 sm:flex-row"><span>© 2026 MARE · Cundinamarca, Colombia</span><span>Diseñado para el campo. Construido para responder.</span></div></div>
      </footer>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
        <div className={cn("w-[min(20rem,calc(100vw-2.5rem))] origin-bottom-right border border-border bg-background p-3 shadow-float transition duration-300", whatsAppOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0")}><div className="flex items-center justify-between px-2 pb-2"><strong className="text-sm text-primary">Elija su sede</strong><Button variant="ghost" size="icon" aria-label="Cerrar sedes" onClick={() => setWhatsAppOpen(false)}><X /></Button></div>{locations.map((location) => <a key={location.city} href={`https://wa.me/${location.phone}`} target="_blank" rel="noreferrer" className="flex items-center justify-between border-t border-border px-2 py-3 text-sm font-medium text-primary transition hover:bg-section"><span><small className="block text-muted-foreground">{location.zone}</small>{location.city}</span><ArrowUpRight className="size-4 text-brand-green" /></a>)}</div>
        <Button variant="whatsapp" size="floating" aria-label="Abrir selector de WhatsApp" aria-expanded={whatsAppOpen} onClick={() => setWhatsAppOpen((value) => !value)}>{whatsAppOpen ? <X /> : <MessageCircle />}<span className="hidden sm:inline">WhatsApp</span></Button>
      </div>
    </main>
  );
}
