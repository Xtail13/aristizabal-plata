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
      es: "Soporte legal integral para la operación, las personas y los activos de la compañía.",
      en: "Comprehensive legal support for the company's operations, people and assets.",
    },
    items: {
      es: [
        "Contratos laborales, civiles, comerciales e internacionales",
        "Gestión humana",
        "Seguridad y salud en el trabajo",
        "Reglamento interno",
        "Propiedad intelectual",
        "Tratamiento de datos",
        "Registro de marca",
        "Gestión de cartera",
        "Negociaciones, conciliaciones y demandas",
        "Representación laboral y civil",
        "Capacitaciones",
      ],
      en: [
        "Labor, civil, commercial and international contracts",
        "Human management",
        "Occupational health and safety",
        "Internal regulations",
        "Intellectual property",
        "Data protection",
        "Trademark registration",
        "Portfolio management",
        "Negotiations, conciliations and litigation",
        "Labor and civil representation",
        "Training",
      ],
    },
  },
  {
    id: "estrategia-organizacion",
    number: "02",
    title: { es: "Estrategia y organización", en: "Strategy and organization" },
    summary: {
      es: "Diseñamos la estructura, los procesos y el rumbo que la compañía necesita para escalar.",
      en: "We design the structure, processes and direction the company needs to scale.",
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
      es: "Llevamos la operación a un ecosistema digital con automatización y datos para decidir mejor.",
      en: "We move operations into a digital ecosystem with automation and data for better decisions.",
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
      es: "Estructuramos la salida al exterior con visión legal, comercial y cultural.",
      en: "We structure international expansion with legal, commercial and cultural vision.",
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
