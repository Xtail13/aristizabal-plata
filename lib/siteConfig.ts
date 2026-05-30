export const siteConfig = {
  name: "Aristizabal Plata",
  shortName: "AP",
  legalName: "Aristizabal Plata Asociados",
  // El correo depende del dominio final — fuente única de verdad.
  contactEmail: "contacto@aristizabalplata.com",
  phone: "3113714869",
  phoneIntl: "+573113714869",
  whatsapp: "573113714869",
  city: "Pereira",
  country: "Colombia",
  hours: "Lun – Vie · 8:00 – 18:00",
  url: "https://aristizabalplata.com",
  // Web3Forms — clave reutilizada del sitio actual.
  web3formsKey: "00f0d8c3-8f1a-419a-90a8-9422911f4672",
  portfolioLeadEndpoint: process.env.NEXT_PUBLIC_PORTFOLIO_LEAD_ENDPOINT ?? "",
  // Placeholders fase 2 — agendamiento Calendly.
  calendly: {
    diagnostico: "", // Agenda diagnóstico empresarial (Sayal)
    juridico: "", // Agenda asesoría jurídica inicial (Jaime)
  },
} as const;

export type SiteConfig = typeof siteConfig;
