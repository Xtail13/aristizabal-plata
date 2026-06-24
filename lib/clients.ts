export interface ClientLogo {
  name: string;
  logo: string;
  approved: boolean;
}

// Clientes aprobados. Las imágenes provienen de logos_aliados/.
export const clients: ClientLogo[] = [
  { name: "Dissel", logo: "/media/clients/dissel.png", approved: true },
  { name: "Veredal", logo: "/media/clients/veredal.png", approved: true },
  { name: "Wellness", logo: "/media/clients/wellness.png", approved: true },
  { name: "Hogar Café", logo: "/media/clients/hogarcafe.png", approved: true },
  { name: "Noches Blancas", logo: "/media/clients/nochesblancas.png", approved: true },
  { name: "Pantoja & Asociados", logo: "/media/clients/pantoja.png", approved: true },
  { name: "Maleducados", logo: "/media/clients/maleducados.png", approved: true },
  { name: "Exafit Gold Nutrition", logo: "/media/clients/exafit-gold-nutrition-white.png", approved: true },
  { name: "GMN Solutions of Nutrition", logo: "/media/clients/gmn-solutions-nutrition-white.png", approved: true },
  { name: "SportsNutrition", logo: "/media/clients/sportsnutrition-white.png", approved: true },
  { name: "Innovahogar", logo: "/media/clients/innovahogar-white.png", approved: true },
  { name: "Cliente", logo: "/media/clients/unidentified-08-white.png", approved: true },
  { name: "Cliente", logo: "/media/clients/unidentified-10-white.png", approved: true },
  { name: "Cliente", logo: "/media/clients/unidentified-11-white.png", approved: true },
  // Pendiente de aprobación — añadir cuando se confirme el logo.
];

export interface StrategicAlly {
  name: string;
}

export const strategicAllies: StrategicAlly[] = [
  { name: "Pantoja y Asociados" },
  { name: "Ímpetu" },
  { name: "Estatus Legal" },
];
