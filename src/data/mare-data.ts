import {
  Beef,
  Building2,
  ClipboardCheck,
  FlaskConical,
  HeartPulse,
  ShieldCheck,
  Snowflake,
  Stethoscope,
  Syringe,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

// Imágenes de apoyo — fotografía de stock libre de derechos comerciales (Unsplash),
// no son empaques reales de MSD Salud Animal: uso ilustrativo por categoría mientras
// no haya fotografía propia de producto o de sede.
import sedeSiberia from "@/assets/mare-sede-siberia.jpg";
import sedeLaCaro from "@/assets/mare-sede-lacaro.jpg";
import sedeUbate from "@/assets/mare-sede-ubate.jpg";
import sedeSimijaca from "@/assets/mare-sede-simijaca.jpg";
import productBovilis from "@/assets/mare-product-bovilis.jpg";
import productBravecto from "@/assets/mare-product-bravecto.jpg";
import productNuflor from "@/assets/mare-product-nuflor.jpg";
import productRevalor from "@/assets/mare-product-revalor.jpg";
import productPanacur from "@/assets/mare-product-panacur.jpg";
import productRegumate from "@/assets/mare-product-regumate.jpg";

export type NavItem = { label: string; to: string };

// Navegación principal — enlaces a rutas reales, no anclas de una sola página.
export const navigation: NavItem[] = [
  { label: "Catálogo", to: "/catalogo" },
  { label: "Asesoría", to: "/asesoria" },
  { label: "Sedes", to: "/sedes" },
  { label: "Distribuidores", to: "/distribuidores" },
];

export type Location = {
  city: string;
  zone: string;
  address: string;
  phone: string;
  image: string;
  alt: string;
};

export const locations: Location[] = [
  {
    city: "Siberia / Tenjo",
    zone: "Sabana Occidente",
    address: "Aut. Medellín Km 4 · Cundinamarca",
    phone: "573000000001",
    image: sedeSiberia,
    alt: "Vista aérea de instalaciones agroindustriales en la sabana",
  },
  {
    city: "La Caro / Chía",
    zone: "Sabana Centro",
    address: "Aut. Norte Km 21 · Cundinamarca",
    phone: "573000000002",
    image: sedeLaCaro,
    alt: "Vista aérea de galpones de operación agropecuaria",
  },
  {
    city: "Ubaté",
    zone: "Valle de Ubaté",
    address: "Atención regional · Cundinamarca",
    phone: "573000000003",
    image: sedeUbate,
    alt: "Valle verde entre montañas de Cundinamarca",
  },
  {
    city: "Simijaca",
    zone: "Alto Magdalena",
    address: "Punto agropecuario · Cundinamarca",
    phone: "573000000004",
    image: sedeSimijaca,
    alt: "Ganado en pastizal de ladera",
  },
];

export type Product = {
  name: string;
  type: string;
  active: string;
  route: string;
  withdrawal: string;
  icon: LucideIcon;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    name: "Bovilis® Vista Once",
    type: "Vacuna bovina",
    active: "Virus vivos modificados",
    route: "Subcutánea",
    withdrawal: "0 días",
    icon: ShieldCheck,
    image: productBovilis,
    alt: "Veterinario preparando una jeringa junto a ganado bovino",
  },
  {
    name: "Bravecto® Pour-On",
    type: "Antiparasitario",
    active: "Fluralaner",
    route: "Tópica",
    withdrawal: "Consultar ficha",
    icon: FlaskConical,
    image: productBravecto,
    alt: "Frasco gotero de solución tópica",
  },
  {
    name: "Nuflor®",
    type: "Antibiótico",
    active: "Florfenicol",
    route: "Intramuscular",
    withdrawal: "Según indicación",
    icon: Syringe,
    image: productNuflor,
    alt: "Veterinario con jeringa junto a ganado en establo",
  },
  {
    name: "Revalor®",
    type: "Productividad",
    active: "Combinación hormonal",
    route: "Implante",
    withdrawal: "Consultar ficha",
    icon: HeartPulse,
    image: productRevalor,
    alt: "Vial y jeringa de aplicación clínica",
  },
  {
    name: "Panacur®",
    type: "Antiparasitario",
    active: "Fenbendazol",
    route: "Oral",
    withdrawal: "Según especie",
    icon: Beef,
    image: productPanacur,
    alt: "Frascos de solución oral",
  },
  {
    name: "Regumate® Equino",
    type: "Reproducción",
    active: "Altrenogest",
    route: "Oral",
    withdrawal: "No aplica",
    icon: ClipboardCheck,
    image: productRegumate,
    alt: "Frascos de vidrio para solución oral",
  },
];

export const advisoryPillars = [
  {
    icon: Stethoscope,
    title: "Diagnóstico",
    copy: "Leemos el contexto sanitario y productivo de su finca.",
  },
  {
    icon: ClipboardCheck,
    title: "Protocolo",
    copy: "Organizamos una ruta técnica clara y aplicable.",
  },
  { icon: Users, title: "Seguimiento", copy: "Acompañamos la ejecución y evolución en campo." },
];

export const distributorBenefits: [LucideIcon, string][] = [
  [Truck, "Despacho regional organizado"],
  [Snowflake, "Cadena de frío controlada"],
  [Building2, "Lista mayorista y crédito comercial"],
];

export const contact = {
  email: "contacto@mare.com.co",
  primaryWhatsApp: "573000000001",
  nit: "832.000.525-3",
};
