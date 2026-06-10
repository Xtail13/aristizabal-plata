export const siteConfig = {
  name: "Aristizabal Plata",
  shortName: "AP",
  legalName: "Aristizabal Plata Asociados",
  // El correo depende del dominio final — fuente única de verdad.
  contactEmail: "contacto@apasociados.co",
  phone: "3113714869",
  phoneIntl: "+573113714869",
  whatsapp: "573113714869",
  city: "Pereira",
  country: "Colombia",
  hours: "Lun – Vie · 8:00 – 18:00",
  url: "https://apasociados.co",
  linkedin: "https://www.linkedin.com/company/ap-aristizabal-plata/",
  instagram: "https://www.instagram.com/aristizabalplataasociados/",
  // Placeholders fase 2 — agendamiento Calendly.
  calendly: {
    diagnostico: "", // Agenda diagnóstico empresarial (Sayal)
    juridico: "", // Agenda asesoría jurídica inicial (Jaime)
  },
} as const;

export type SiteConfig = typeof siteConfig;
