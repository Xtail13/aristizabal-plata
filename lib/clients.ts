export interface ClientLogo {
  name: string;
  logo: string;
  approved: boolean;
}

// Clientes aprobados. Las imágenes provienen de logos_aliados/.
export const clients: ClientLogo[] = [
  { name: "Dissel", logo: "/logos/clients/dissel.png", approved: true },
  { name: "Veredal", logo: "/logos/clients/veredal.png", approved: true },
  { name: "Wellness", logo: "/logos/clients/wellness.png", approved: true },
  { name: "Hogar Café", logo: "/logos/clients/hogarcafe.png", approved: true },
  { name: "Noches Blancas", logo: "/logos/clients/nochesblancas.png", approved: true },
  { name: "Pantoja & Asociados", logo: "/logos/clients/pantoja.png", approved: true },
  { name: "Maleducados", logo: "/logos/clients/maleducados.png", approved: true },
  { name: "Innovahogar", logo: "/logos/clients/client-9-white.png", approved: true },
  { name: "Cliente", logo: "/logos/clients/client-8-white.png", approved: true },
  { name: "Cliente", logo: "/logos/clients/client-10-white.png", approved: true },
  { name: "Cliente", logo: "/logos/clients/client-11-white.png", approved: true },
  // Pendiente de aprobación — añadir cuando se confirme el logo.
  // { name: "GMN Sport Nutrition", logo: "/logos/clients/gmn.png", approved: false },
];

export interface StrategicAlly {
  name: string;
}

export const strategicAllies: StrategicAlly[] = [
  { name: "Pantoja y Asociados" },
  { name: "Ímpetu" },
  { name: "Estatus Legal" },
];
