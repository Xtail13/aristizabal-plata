export interface ServiceArea {
  id: string;
  number: string;
  title: { es: string; en: string };
  summary: { es: string; en: string };
  items: { es: string[]; en: string[] };
}

export const services: ServiceArea[] = [
  {
    id: "juridico-empresarial",
    number: "01",
    title: { es: "Jurídico empresarial", en: "Corporate legal" },
    summary: {
      es: "Blindaje jurídico preventivo y defensa estratégica para reducir contingencias, proteger activos y sostener la operación.",
      en: "Preventive legal protection and strategic defense to reduce contingencies, protect assets and sustain operations.",
    },
    items: {
      es: [
        "Preventivo · Blindaje de nómina y mitigación de riesgos laborales",
        "Preventivo · Contratos civiles, comerciales e internacionales",
        "Preventivo · Reglamentos internos y seguridad en el trabajo",
        "Preventivo · Protección de datos y propiedad intelectual",
        "Preventivo · Registro y protección de marca",
        "Correctivo · Recuperación estratégica de cartera",
        "Correctivo · Negociaciones y conciliaciones",
        "Correctivo · Defensa en demandas laborales y civiles",
        "Correctivo · Representación jurídica empresarial",
        "Capacitación preventiva para equipos directivos",
      ],
      en: [
        "Preventive · Payroll protection and labor risk mitigation",
        "Preventive · Civil, commercial and international contracts",
        "Preventive · Internal regulations and workplace safety",
        "Preventive · Data protection and intellectual property",
        "Preventive · Trademark registration and protection",
        "Corrective · Strategic accounts receivable recovery",
        "Corrective · Negotiations and conciliations",
        "Corrective · Labor and civil litigation defense",
        "Corrective · Corporate legal representation",
        "Preventive training for leadership teams",
      ],
    },
  },
  {
    id: "estrategia-organizacion",
    number: "02",
    title: { es: "Estrategia y organización", en: "Strategy and organization" },
    summary: {
      es: "Ordenamos la operación, optimizamos costos y fortalecemos equipos comerciales para escalar con rentabilidad.",
      en: "We organize operations, optimize costs and strengthen sales teams to scale profitably.",
    },
    items: {
      es: [
        "Estructura organizacional",
        "Definición de roles",
        "Manuales de funciones y procedimientos",
        "Análisis de capacidades",
        "Gestión del cambio",
        "Objetivos mediante OKR",
        "Auditoría de capacidad instalada",
        "Gestión y ejecución de proyectos",
        "Planeación estratégica",
        "Marketing",
        "Análisis financiero",
        "Plan de negocio",
      ],
      en: [
        "Organizational structure",
        "Role definition",
        "Function and procedure manuals",
        "Capability analysis",
        "Change management",
        "Goal setting through OKRs",
        "Installed capacity audit",
        "Project management and execution",
        "Strategic planning",
        "Marketing",
        "Financial analysis",
        "Business plan",
      ],
    },
  },
  {
    id: "transformacion-digital",
    number: "03",
    title: { es: "Transformación digital", en: "Digital transformation" },
    summary: {
      es: "Automatizamos procesos y conectamos datos para reducir fricción operativa y tomar mejores decisiones.",
      en: "We automate processes and connect data to reduce operational friction and improve decision-making.",
    },
    items: {
      es: [
        "Automatización inteligente de procesos",
        "Ecosistema digital y canales de conversión",
        "Desarrollo de plataformas web",
        "Aplicaciones móviles",
        "Ingeniería de software",
        "Integración de herramientas para toma de decisiones",
      ],
      en: [
        "Intelligent process automation",
        "Digital ecosystem and conversion channels",
        "Web platform development",
        "Mobile applications",
        "Software engineering",
        "Decision-making tool integration",
      ],
    },
  },
  {
    id: "internacionalizacion",
    number: "04",
    title: { es: "Internacionalización", en: "Internationalization" },
    summary: {
      es: "Reducimos la incertidumbre de la expansión internacional con análisis legal, comercial y cultural.",
      en: "We reduce uncertainty in international expansion through legal, commercial and cultural analysis.",
    },
    items: {
      es: [
        "Planes de internacionalización",
        "Análisis de riesgo y oportunidades",
        "Viabilidad de exportación e inversión",
        "Análisis de mercado internacional",
        "Propiedad intelectual internacional",
        "Resolución de disputas internacionales",
        "Contratos internacionales",
        "Redes y alianzas",
        "Gestión intercultural",
        "Búsqueda de financiación internacional",
      ],
      en: [
        "Internationalization plans",
        "Risk and opportunity analysis",
        "Export and investment feasibility",
        "International market analysis",
        "International intellectual property",
        "International dispute resolution",
        "International contracts",
        "Networks and alliances",
        "Intercultural management",
        "International financing search",
      ],
    },
  },
];
