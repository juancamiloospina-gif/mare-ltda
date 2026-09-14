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
};

export const locations: Location[] = [
  {
    city: "Siberia / Tenjo",
    zone: "Sabana Occidente",
    address: "Aut. Medellín Km 4 · Cundinamarca",
    phone: "573000000001",
  },
  {
    city: "La Caro / Chía",
    zone: "Sabana Centro",
    address: "Aut. Norte Km 21 · Cundinamarca",
    phone: "573000000002",
  },
  {
    city: "Ubaté",
    zone: "Valle de Ubaté",
    address: "Atención regional · Cundinamarca",
    phone: "573000000003",
  },
  {
    city: "Simijaca",
    zone: "Alto Magdalena",
    address: "Punto agropecuario · Cundinamarca",
    phone: "573000000004",
  },
];

export type Product = {
  name: string;
  type: string;
  active: string;
  route: string;
  withdrawal: string;
  icon: LucideIcon;
};

export const products: Product[] = [
  {
    name: "Bovilis® Vista Once",
    type: "Vacuna bovina",
    active: "Virus vivos modificados",
    route: "Subcutánea",
    withdrawal: "0 días",
    icon: ShieldCheck,
  },
  {
    name: "Bravecto® Pour-On",
    type: "Antiparasitario",
    active: "Fluralaner",
    route: "Tópica",
    withdrawal: "Consultar ficha",
    icon: FlaskConical,
  },
  {
    name: "Nuflor®",
    type: "Antibiótico",
    active: "Florfenicol",
    route: "Intramuscular",
    withdrawal: "Según indicación",
    icon: Syringe,
  },
  {
    name: "Revalor®",
    type: "Productividad",
    active: "Combinación hormonal",
    route: "Implante",
    withdrawal: "Consultar ficha",
    icon: HeartPulse,
  },
  {
    name: "Panacur®",
    type: "Antiparasitario",
    active: "Fenbendazol",
    route: "Oral",
    withdrawal: "Según especie",
    icon: Beef,
  },
  {
    name: "Regumate® Equino",
    type: "Reproducción",
    active: "Altrenogest",
    route: "Oral",
    withdrawal: "No aplica",
    icon: ClipboardCheck,
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
