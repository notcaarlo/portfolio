// src/data/index.ts

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  year: string;
  client: string;
  role: string;
  image: string;
  gallery: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  fullWidth?: boolean;
  overview: string;
  challenge: string;
  objective: string;
  results: string;
  techStack: string[];
  highlights?: {
    title: string;
    detail: string;
  }[];
}

export const PROFILE = {
  name: "Carlo Villanueva",
  shortName: "Carlo Villanueva",
  role: "Desarrollador Backend & Seguridad",
  fullRole: "Desarrollador Backend | Especialista en Seguridad de Aplicaciones",
  city: "Escuintla, Guatemala",
  phone: "+502 4577-0756",
  email: "andrecordon00@gmail.com",
  github: "https://github.com/notcaarlo",
  githubHandle: "@notcaarlo",
  linkedin: "https://www.linkedin.com/in/carlo-andr%C3%A9-villanueva-cord%C3%B3n-69478b237/",
  linkedinHandle: "@carlo-villanueva",
  resumeUrl: "/CV_Carlo_Villanueva.docx",
  avatar: "/Yo.jpg",
  availability: "Disponible para trabajar · 2026",
  aboutLead: "Soy Carlo Villanueva, Desarrollador Backend enfocado en la seguridad de aplicaciones, diseño APIs e integro control de accesos y protección de datos desde el diseño.",
  aboutBody: "Con cierre de pensum en Ingeniería en Sistemas y cursando un postgrado en Seguridad Informática, construyo sistemas con TypeScript, Node.js, Nest.js, Next.js y PostgreSQL. Aplico autenticación y autorización e integro herramientas de Inteligencia Artificial."
};

export const STACK_LOGOS = [
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Next.js 15", icon: "NX", color: "#000000" },
  { name: "Nest.js", icon: "NS", color: "#E0234E" },
  { name: "Node.js", icon: "ND", color: "#339933" },
  { name: "PostgreSQL", icon: "PG", color: "#4169E1" },
  { name: "Prisma ORM", icon: "PR", color: "#2D3748" },
  { name: "Docker", icon: "DK", color: "#2496ED" },
  { name: "Vitest", icon: "VT", color: "#6E9F18" },
  { name: "Python", icon: "PY", color: "#3776AB" },
  { name: "AppSec / IAM", icon: "SC", color: "#10B981" },
];

export const CORE_PILLARS = [
  {
    quote: "Diseño y construyo APIs y sistemas backend bien estructurados utilizando TypeScript, Node.js, Nest.js y Next.js, cuidando que cada servicio sea claro, mantenible y seguro.",
    author: "Desarrollo Backend & APIs",
    org: "TypeScript · Node.js · Nest.js · Next.js"
  },
  {
    quote: "Integro autenticación, autorización y control de accesos desde el diseño para proteger las rutas, las sesiones y la información sensible de cada aplicación.",
    author: "Seguridad de Aplicaciones",
    org: "Autenticación · Autorización · Protección de Datos"
  },
  {
    quote: "Modelo bases de datos relacionales en PostgreSQL cuidando la integridad de los datos, el flujo de las transacciones y la consistencia en operaciones concurrentes.",
    author: "Bases de Datos & Persistencia",
    org: "PostgreSQL · Prisma ORM · Modelado SQL"
  },
  {
    quote: "Complemento mi formación en Ingeniería en Sistemas con mi postgrado en Seguridad Informática para aplicar buenas prácticas de protección y análisis de riesgos.",
    author: "Seguridad Informática",
    org: "Postgrado en Seguridad · Buenas Prácticas"
  },
  {
    quote: "Integro herramientas y modelos de Inteligencia Artificial junto con metodologías ágiles y modelado UML para traducir requerimientos en soluciones funcionales.",
    author: "Inteligencia Artificial & Análisis",
    org: "Herramientas de IA · UML · Scrum"
  }
];

export const EXPERIENCE_TIMELINE = [
  {
    period: "2026 – Actualidad",
    role: "Maestría en Seguridad Informática",
    company: "Universidad Mariano Gálvez de Guatemala",
    description: "Especialización de posgrado enfocada en seguridad de aplicaciones, gestión de identidades y accesos (IAM), criptografía aplicada, análisis de riesgos con metodologías MAGERIT y OCTAVE, y monitoreo de eventos de seguridad (SIEM / Wazuh)."
  },
  {
    period: "Ene 2026 – Abr 2026",
    role: "Analista de Sistemas JR",
    company: "GISYSTEMS",
    description: "Levanté requerimientos con los usuarios del negocio y los transformé en especificaciones técnicas claras y manuales de usuario para el equipo de desarrollo. Armé diagramas UML en Draw.io (casos de uso, secuencia y modelo de base de datos) y participé diariamente en ceremonias Scrum validando cada entregable."
  },
  {
    period: "Oct 2024 – Mar 2025",
    role: "Practicante Universitario de TI",
    company: "SAT (Superintendencia de Administración Tributaria)",
    description: "Atendí tickets de soporte técnico y di mantenimiento preventivo y correctivo a equipos dentro del área de TI, trabajando bajo estrictas políticas internas de seguridad y resguardo de información tributaria sensible."
  },
  {
    period: "2020 – 2025",
    role: "Cierre de Pensum · Ingeniería en Sistemas",
    company: "Universidad Mariano Gálvez de Guatemala",
    description: "Formación integral en desarrollo de software, arquitectura de bases de datos relacionales (PostgreSQL, SQL Server), redes, sistemas operativos (Windows Server, Active Directory, GPO) e inteligencia artificial. Idiomas: Español (Nativo) e Inglés B2 (Intermedio Avanzado)."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: "stockguard-ecommerce",
    title: "StockGuard E-Commerce",
    category: "Backend Transaccional & AppSec",
    subtitle: "Motor Transaccional de Inventario de Alta Concurrencia",
    year: "2026",
    client: "Proyecto Destacado (Producción)",
    role: "Desarrollador Backend & Seguridad",
    image: "/placeholder-project.svg",
    gallery: [
      "/placeholder-project.svg",
      "/placeholder-project.svg"
    ],
    github: "https://github.com/notcaarlo/E-COMMERCE",
    demo: "https://e-commerce-ten-lyart-22.vercel.app/",
    featured: true,
    fullWidth: true,
    overview: "E-commerce construido desde cero para manejar compras simultáneas sin sobrevender inventario. Evita condiciones de carrera, reservas con expiración, controla el flujo de cada pedido y protege las sesiones.",
    challenge: "Cuando varios usuarios intentan comprar las últimas unidades de un mismo producto al mismo tiempo, el sistema puede vender más stock del disponible o duplicar registros si ocurre un reintento en el pago.",
    objective: "Manejar compras simultáneas sin sobrevender inventario mediante reservas con tiempo de expiración, llevar un control claro del estado de cada pedido y proteger las sesiones y accesos según el rol de cada usuario.",
    results: "Aplicación desplegada en Vercel y conectada a PostgreSQL, probada con escenarios de compras simultáneas en Vitest para asegurar que el inventario cuadre siempre y no se procesen pagos duplicados.",
    techStack: [
      "TypeScript",
      "Next.js 15",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "Vitest",
      "Docker",
      "React 19",
      "Tailwind CSS"
    ],
    highlights: [
      {
        title: "Control de Inventario y Reservas con Expiración",
        detail: "Evito condiciones de carrera y sobreventas cuando varios usuarios compran al mismo tiempo apartando el stock temporalmente con reservas que expiran si no se completa la compra."
      },
      {
        title: "Flujo de Pedidos y Pagos Seguros",
        detail: "Controlo el flujo de cada pedido paso a paso con un historial de cambios y valido las confirmaciones de pago para evitar cobros o pedidos duplicados."
      },
      {
        title: "Protección de Sesiones y Control de Accesos",
        detail: "Protejo las sesiones mediante cookies HTTP firmadas y restrinjo las acciones dentro de la plataforma según el rol del usuario (administrador, bodega, soporte y cliente)."
      }
    ]
  },
  {
    slug: "detector-somnolencia",
    title: "Detector de Somnolencia",
    category: "Visión Artificial & IA",
    subtitle: "Sistema Inteligente de Prevención de Accidentes en Tiempo Real",
    year: "2025",
    client: "Proyecto de Ingeniería & IA",
    role: "Desarrollador Backend & IA",
    image: "/placeholder-project.svg",
    gallery: [
      "/placeholder-project.svg"
    ],
    github: "https://github.com/notcaarlo/Somnolencia-Carlo",
    demo: "",
    featured: false,
    fullWidth: false,
    overview: "Sistema inteligente de visión por computadora capaz de monitorear y detectar signos de fatiga ocular y somnolencia en tiempo real mediante puntos faciales (landmarks), emitiendo alertas tempranas y registrando eventos en PostgreSQL.",
    challenge: "Detectar patrones de microsueño y fatiga con baja latencia utilizando cámaras estándar, manteniendo alta precisión en la medición de apertura ocular y persistiendo las métricas para análisis posterior.",
    objective: "Integrar MediaPipe con un backend en Python (Flask) y una base de datos PostgreSQL para procesar video en tiempo real, calcular umbrales de fatiga y registrar incidentes de forma confiable.",
    results: "Detección fluida en tiempo real con alertas inmediatas y almacenamiento estructurado en PostgreSQL para auditoría y seguimiento de seguridad vial.",
    techStack: ["Python", "Flask", "MediaPipe", "PostgreSQL", "Computer Vision"]
  }
];
