export interface TeamMember {
  slug: string;
  name: string;
  photo: string;
  role: { es: string; en: string };
  credentials: { es: string[]; en: string[] };
  bio: { es: string; en: string };
}

// Orden exacto del portafolio AP 2026.
export const team: TeamMember[] = [
  {
    slug: "sayal-aristizabal-plata",
    name: "Sayal Aristizabal Plata",
    photo: "/images/team/sayal.png",
    role: {
      es: "Directora General de Estrategia y Desarrollo Empresarial",
      en: "General Director of Strategy and Business Development",
    },
    credentials: {
      es: [
        "Negociadora internacional",
        "Especialista en Gerencia Estratégica de Mercadeo",
        "Magíster en Desarrollo Regional",
        "Magíster en Formación y Educación",
        "Idiomas: Inglés y Español (Nativo)",
      ],
      en: [
        "International negotiator",
        "Specialist in Strategic Marketing Management",
        "Master in Regional Development",
        "Master in Training and Education",
        "Languages: English and Spanish (Native)",
      ],
    },
    bio: {
      es: "Más de 15 años de trayectoria en desarrollo organizacional, planeación estratégica e internacionalización de empresas. Enfoque en atracción de inversión extranjera, diseño de proyectos, inteligencia de mercados, gestión de equipos y escalabilidad de las organizaciones.",
      en: "Over 15 years of experience in organizational development, strategic planning and internationalization of companies. Focused on foreign investment attraction, project design, market intelligence, team management and organizational scalability.",
    },
  },
  {
    slug: "jaime-aristizabal-plata",
    name: "Jaime Aristizabal Plata",
    photo: "/images/team/jaime.png",
    role: {
      es: "Director Jurídico Empresarial",
      en: "Corporate Legal Director",
    },
    credentials: {
      es: [
        "Abogado",
        "Especialista en Planeación y Gestión Estratégica",
        "Maestrante en Derecho de los Buenos Negocios y Contratación Internacional",
        "Idiomas: Inglés y Español (Nativo)",
      ],
      en: [
        "Lawyer",
        "Specialist in Strategic Planning and Management",
        "Master's candidate in Business Law and International Contracting",
        "Languages: English and Spanish (Native)",
      ],
    },
    bio: {
      es: "Experto en soluciones integrales para empresas y personas. Especialista en estructuración de procesos legales, gestión de talento humano y recuperación de cartera. Soporte técnico en derecho civil, comercial, propiedad intelectual y contrataciones.",
      en: "Expert in comprehensive solutions for companies and individuals. Specialist in legal process structuring, human talent management and portfolio recovery. Technical support in civil, commercial, intellectual property and contracting law.",
    },
  },
  {
    slug: "lizeth-tatiana-gomez-osorio",
    name: "Lizeth Tatiana Gómez Osorio",
    photo: "/images/team/lizeth.png",
    role: {
      es: "Líder de Desarrollo Empresarial y Relaciones Comerciales",
      en: "Business Development and Commercial Relations Lead",
    },
    credentials: {
      es: [
        "Tecnóloga en Negociación Internacional",
        "Administradora de Negocios Internacionales",
      ],
      en: [
        "Technologist in International Negotiation",
        "International Business Administrator",
      ],
    },
    bio: {
      es: "Experiencia en optimización de procesos administrativos y gestión de servicio al cliente. Sólida trayectoria en ventas, gestión de importaciones y soporte del talento humano. Focalizada en estandarización y automatización para aumentar la productividad y competitividad.",
      en: "Experience in administrative process optimization and customer service management. Solid track record in sales, import management and human talent support. Focused on standardization and automation to increase productivity and competitiveness.",
    },
  },
  {
    slug: "deisi-johana-duque-torres",
    name: "Deisi Johana Duque Torres",
    photo: "/images/team/deisi.jpeg",
    role: {
      es: "Consultora Financiera y de Planeación",
      en: "Financial and Planning Consultant",
    },
    credentials: {
      es: [
        "Administradora Industrial",
        "Especialista en Planeación y Gestión Estratégica",
        "Magíster en Administración Económica y Financiera",
        "Doctora en Ciencias de la Educación",
      ],
      en: [
        "Industrial Administrator",
        "Specialist in Strategic Planning and Management",
        "Master in Economic and Financial Administration",
        "PhD in Educational Sciences",
      ],
    },
    bio: {
      es: "Cerca de 20 años de experiencia en consultoría empresarial enfocada en viabilidad y crecimiento. Especializada en arquitectura financiera: planeación estratégica, valoración de negocios, análisis de rentabilidad y retorno de inversión.",
      en: "Nearly 20 years of experience in business consulting focused on viability and growth. Specialized in financial architecture: strategic planning, business valuation, profitability analysis and return on investment.",
    },
  },
  {
    slug: "esteban-manrique-giraldo",
    name: "Esteban Manrique Giraldo",
    photo: "/images/team/esteban.jpeg",
    role: {
      es: "Consultor Procesal y Penal",
      en: "Litigation and Criminal Law Consultant",
    },
    credentials: {
      es: [
        "Abogado",
        "Especialista en Derecho Procesal Penal",
        "Idiomas: Inglés y Español (Nativo)",
      ],
      en: [
        "Lawyer",
        "Specialist in Criminal Procedural Law",
        "Languages: English and Spanish (Native)",
      ],
    },
    bio: {
      es: "Experiencia en asesoría, consultoría y litigio en materia penal, como defensor y representante de víctimas ante jueces de control de garantías, de conocimiento y de ejecución de penas y medidas de seguridad.",
      en: "Experience in advisory, consulting and litigation in criminal matters, as defender and victims' representative before guarantee control, knowledge and sentence enforcement judges.",
    },
  },
  {
    slug: "edna-catalina-osorio-alzate",
    name: "Edna Catalina Osorio Alzate",
    photo: "/images/team/edna.jpeg",
    role: {
      es: "Consultora de Comercio Exterior",
      en: "Foreign Trade Consultant",
    },
    credentials: {
      es: [
        "Administradora de Negocios Internacionales",
        "Maestría en Administración en el campo de las Finanzas",
        "Idiomas: Inglés y Español (Nativo)",
      ],
      en: [
        "International Business Administrator",
        "Master in Administration with a focus on Finance",
        "Languages: English and Spanish (Native)",
      ],
    },
    bio: {
      es: "Más de una década de experiencia en logística, importaciones y exportaciones. Experta en la operativización de procesos de comercio exterior y en el análisis financiero para la expansión internacional.",
      en: "Over a decade of experience in logistics, imports and exports. Expert in operationalizing foreign trade processes and financial analysis for international expansion.",
    },
  },
  {
    slug: "karol-viviana-sanchez",
    name: "Karol Viviana Sánchez",
    photo: "/images/team/karol.png",
    role: {
      es: "Consultora de Sistemas de Gestión de Calidad",
      en: "Quality Management Systems Consultant",
    },
    credentials: {
      es: [
        "Ingeniera Industrial",
        "Especialista en SST, Gerencia y Control de Riesgos",
        "Auditora HSEQ · Auditora BASC",
        "Oficial de Cumplimiento — SARLAFT",
      ],
      en: [
        "Industrial Engineer",
        "Specialist in OHS, Management and Risk Control",
        "HSEQ Auditor · BASC Auditor",
        "Compliance Officer — SARLAFT",
      ],
    },
    bio: {
      es: "Experta en el blindaje operativo y legal de organizaciones mediante sistemas de gestión integrales (Calidad, BASC, SARLAFT-PTEE, PESV). Lidera procesos administrativos y de gestión humana orientados a la mitigación de riesgos y el cumplimiento normativo.",
      en: "Expert in operational and legal protection of organizations through integrated management systems (Quality, BASC, SARLAFT-PTEE, PESV). Leads administrative and human management processes oriented to risk mitigation and regulatory compliance.",
    },
  },
  {
    slug: "miguel-angel-aristizabal-plata",
    name: "Miguel Angel Aristizabal Plata",
    photo: "/images/team/miguel.jpeg",
    role: {
      es: "Pasante de Marketing Operativo y Eventos",
      en: "Operational Marketing and Events Intern",
    },
    credentials: {
      es: ["Bachiller", "Idiomas: Inglés, Francés y Español (Nativo)"],
      en: ["High School Graduate", "Languages: English, French and Spanish (Native)"],
    },
    bio: {
      es: "Soporte operativo y creación de contenido para la comunicación corporativa. Responsable del cubrimiento audiovisual de eventos, producción de medios y ejecución de tácticas de marketing.",
      en: "Operational support and content creation for corporate communication. Responsible for audiovisual event coverage, media production and marketing tactics execution.",
    },
  },
];
