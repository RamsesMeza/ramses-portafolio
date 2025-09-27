import { TecTagType } from "../components/TecTag";
import MIAA_LOGO from "../assets/miaa-logo.svg";
import DESIGNA_LOGO from "../assets/designa-logo.svg";
import INSEEL_LOGO from "../assets/inseel-logo.png";
import UPA_LOGO from "../assets/upa-logo.jpg";
import DEVTALLES_LOGO from "../assets/devtalles-logo.webp";
import UDEMY_LOGO from "../assets/udemy-logo.jpeg";

export type LocalizedString = {
  en: string;
  es: string;
};

export interface HeroStat {
  value: string;
  label: LocalizedString;
}

export interface StackCategory {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  tags: TecTagType[];
}

export interface ExperienceHighlight {
  summary: LocalizedString;
  impact: LocalizedString;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: LocalizedString;
  timeframe: string;
  summary: LocalizedString;
  highlights: ExperienceHighlight[];
  technologies: TecTagType[];
  externalUrl?: string;
  logo?: string;
}

export interface ProjectHighlight {
  id: string;
  title: LocalizedString;
  context: LocalizedString;
  outcome: LocalizedString;
  technologies: TecTagType[];
  link?: string;
}

export interface EducationRecord {
  institution: string;
  timeframe: string;
  degree: LocalizedString;
  highlights: LocalizedString[];
  logo?: string;
}

export interface CourseGroup {
  provider: string;
  topics: string[];
  logo?: string;
}

export type ContactLinkId =
  | "email"
  | "location"
  | "github"
  | "linkedin"
  | "portfolio";

export interface ContactLink {
  id: ContactLinkId;
  label: string;
  href: string;
}

export const heroStats: HeroStat[] = [
  {
    value: "18+",
    label: {
      en: "Projects shipped end-to-end",
      es: "Proyectos entregados de principio a fin",
    },
  },
  {
    value: "4+",
    label: {
      en: "Years building products",
      es: "Años desarrollando productos",
    },
  },
  {
    value: "80%",
    label: {
      en: "Manual paperwork cut across notary workflows",
      es: "Papeleo manual reducido en flujos notariales",
    },
  },
];

export const aboutParagraphs: LocalizedString[] = [
  {
    en: "Computer Systems Engineering graduate with hands-on experience delivering scalable web and mobile applications across government, education, and commerce sectors.",
    es: "Ingeniero en Sistemas Computacionales con experiencia práctica entregando aplicaciones web y móviles escalables para los sectores gubernamental, educativo y comercial.",
  },
  {
    en: "I thrive in cross-functional teams, pairing product vision with robust engineering to craft user-centered solutions backed by clean architectures and cloud-ready pipelines.",
    es: "Disfruto colaborar con equipos multidisciplinarios, alineando la visión del producto con ingeniería robusta para crear soluciones centradas en el usuario con arquitecturas limpias y pipelines listos para la nube.",
  },
];

export const aboutHighlights: LocalizedString[] = [
  {
    en: "End-to-end ownership of Spring Boot + React platforms for public services, HR, and surveys.",
    es: "Responsable end-to-end de plataformas Spring Boot + React para servicios públicos, RH y encuestas.",
  },
  {
    en: "Migrated legacy stacks to TypeScript, Zustand, and modular architectures, reducing runtime errors by 30%.",
    es: "Migré stacks heredados a TypeScript, Zustand y arquitecturas modulares, reduciendo errores en ejecución en 30%.",
  },
  {
    en: "Led cloud deployments with AWS, Docker, and CI/CD pipelines to accelerate release cycles.",
    es: "Lideré despliegues en la nube con AWS, Docker y pipelines CI/CD para acelerar los ciclos de liberación.",
  },
];

export const stackCategories: StackCategory[] = [
  {
    id: "frontend",
    title: { en: "Frontend", es: "Frontend" },
    description: {
      en: "Modern interfaces with React, TypeScript, and component-driven design.",
      es: "Interfaces modernas con React, TypeScript y diseño orientado a componentes.",
    },
    tags: [
      TecTagType.TYPESCRIPT,
      TecTagType.REACT,
      TecTagType.REACT_NATIVE,
      TecTagType.NEXT_JS,
      TecTagType.ANGULAR,
      TecTagType.TAILWIND_CSS,
      TecTagType.ANT_DESIGN,
      TecTagType.MATERIAL_UI,
      TecTagType.ZUSTAND,
      TecTagType.REDUX,
    ],
  },
  {
    id: "backend",
    title: { en: "Backend", es: "Backend" },
    description: {
      en: "Secure APIs and services across Node.js, Spring Boot, and .NET ecosystems.",
      es: "APIs y servicios seguros con los ecosistemas de Node.js, Spring Boot y .NET.",
    },
    tags: [
      TecTagType.NODE_JS,
      TecTagType.EXPRESS,
      TecTagType.NESTJS,
      TecTagType.SPRING_BOOT,
      TecTagType.SPRING_SECURITY,
      TecTagType.DOTNET,
      TecTagType.STRAPI,
      TecTagType.PYTHON,
    ],
  },
  {
    id: "data",
    title: { en: "Data & Databases", es: "Datos y Bases" },
    description: {
      en: "SQL, NoSQL, and analytics to turn raw information into decisions.",
      es: "SQL, NoSQL y analítica para convertir datos en decisiones.",
    },
    tags: [
      TecTagType.MYSQL,
      TecTagType.POSTGRESQL,
      TecTagType.MONGODB,
      TecTagType.PANDAS,
    ],
  },
  {
    id: "devops",
    title: { en: "DevOps & Cloud", es: "DevOps y Nube" },
    description: {
      en: "Reliable delivery with Docker, AWS, and GitHub Actions.",
      es: "Entregas confiables con Docker, AWS y GitHub Actions.",
    },
    tags: [
      TecTagType.AWS,
      TecTagType.AWS_EC2,
      TecTagType.AWS_S3,
      TecTagType.AWS_IAM,
      TecTagType.AWS_TRANSLATE,
      TecTagType.DOCKER,
      TecTagType.GITHUB_ACTIONS,
      TecTagType.NGINX,
    ],
  },
  {
    id: "tooling",
    title: { en: "Product & Tooling", es: "Producto y Herramientas" },
    description: {
      en: "Collaboration across UX, CMS, and payment platforms.",
      es: "Colaboración en UX, CMS y plataformas de pago.",
    },
    tags: [
      TecTagType.FIGMA,
      TecTagType.WORDPRESS,
      TecTagType.WOOCOMMERCE,
      TecTagType.PAYPAL,
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "miaa",
    company: "MIAA",
    role: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
    },
    timeframe: "Jan 2025 – Aug 2025",
    logo: MIAA_LOGO,
    summary: {
      en: "Led the delivery of multi-department platforms spanning notary workflows, HR operations, mobile check-ins, and survey analytics.",
      es: "Lideré la entrega de plataformas multi-departamentales para notarías, operaciones de RH, control de asistencia móvil y analítica de encuestas.",
    },
    highlights: [
      {
        summary: {
          en: "Designed a Spring Boot REST API with automated PDF certificates, accelerating notary water-debt checks by 80%.",
          es: "Diseñé una API REST con Spring Boot y certificados PDF automatizados, acelerando 80% las consultas de adeudos para notarías.",
        },
        impact: {
          en: "Enabled secure authentication with JWT and streamlined statement generation.",
          es: "Habilitó autenticación segura con JWT y simplificó la generación de constancias.",
        },
      },
      {
        summary: {
          en: "Refactored HR attendance and scheduling modules, boosting performance by 40% and adding centralized error logging.",
          es: "Refactoricé los módulos de asistencia y horarios de RH, mejorando el rendimiento 40% e incorporando un logger centralizado.",
        },
        impact: {
          en: "Delivered Python data pipelines for tailored reports.",
          es: "Entregó pipelines de datos con Python para reportes a medida.",
        },
      },
      {
        summary: {
          en: "Migrated a React Native attendance app to TypeScript + Zustand, reducing runtime errors by 30% and improving geolocation accuracy.",
          es: "Migré una app de asistencia en React Native a TypeScript + Zustand, reduciendo errores 30% y mejorando la precisión de geolocalización.",
        },
        impact: {
          en: "Published updates to the Google Play Store with reusable components.",
          es: "Publicó actualizaciones en Google Play Store con componentes reutilizables.",
        },
      },
    ],
    technologies: [
      TecTagType.SPRING_BOOT,
      TecTagType.SPRING_SECURITY,
      TecTagType.JWT,
      TecTagType.MYSQL,
      TecTagType.REACT,
      TecTagType.REDUX,
      TecTagType.ANT_DESIGN,
      TecTagType.FORMIK,
      TecTagType.REACT_NATIVE,
      TecTagType.ZUSTAND,
      TecTagType.PYTHON,
      TecTagType.GIT,
    ],
    externalUrl: "https://devsarrollos.com/ramses-meza",
  },
  {
    id: "designa",
    company: "DESIGNA",
    role: {
      en: "Software Developer",
      es: "Desarrollador de Software",
    },
    timeframe: "Apr 2022 – Dec 2024",
    logo: DESIGNA_LOGO,
    summary: {
      en: "Developed multilingual platforms, CMS integrations, and certification systems with modern tooling and DevOps practices.",
      es: "Desarrollé plataformas multilingües, integraciones CMS y sistemas de certificación con prácticas DevOps modernas.",
    },
    highlights: [
      {
        summary: {
          en: "Migrated Causanatura Media from WordPress to Next.js + Strapi + PostgreSQL, boosting conversions by 30%.",
          es: "Migré Causanatura Media de WordPress a Next.js + Strapi + PostgreSQL, aumentando donaciones 30%.",
        },
        impact: {
          en: "Automated content migration with Python scripts and localized via Amazon Translate.",
          es: "Automaticé la migración de contenido con scripts en Python y localicé con Amazon Translate.",
        },
      },
      {
        summary: {
          en: "Engineered .NET MVC modules for course management with AWS S3 storage and robust validations.",
          es: "Desarrollé módulos MVC en .NET para gestión de cursos con almacenamiento en AWS S3 y validaciones robustas.",
        },
        impact: {
          en: "Delivered full CRUD workflows for students and instructors.",
          es: "Entregué flujos CRUD completos para estudiantes e instructores.",
        },
      },
      {
        summary: {
          en: "Refactored a Node.js certification platform into modular architecture with React/Redux SPA and CI/CD on AWS.",
          es: "Refactoricé una plataforma de certificaciones en Node.js hacia arquitectura modular con SPA React/Redux y CI/CD en AWS.",
        },
        impact: {
          en: "Configured Docker pipelines and ensured continuous delivery.",
          es: "Configuré pipelines con Docker y aseguré entrega continua.",
        },
      },
    ],
    technologies: [
      TecTagType.NEXT_JS,
      TecTagType.STRAPI,
      TecTagType.POSTGRESQL,
      TecTagType.PYTHON,
      TecTagType.AWS,
      TecTagType.DOCKER,
      TecTagType.DOTNET,
      TecTagType.ANT_DESIGN,
      TecTagType.FORMIK,
      TecTagType.REDUX,
      TecTagType.TAILWIND_CSS,
      TecTagType.FIGMA,
    ],
    externalUrl: "https://causanaturamedia.com/",
  },
  {
    id: "inseel",
    company: "INSEEL",
    role: {
      en: "Software Developer",
      es: "Desarrollador de Software",
    },
    timeframe: "Apr 2021 – Feb 2022",
    logo: INSEEL_LOGO,
    summary: {
      en: "Created and customized high-traffic WordPress + WooCommerce stores with refined UX flows.",
      es: "Creé y personalicé tiendas WordPress + WooCommerce de alto tráfico con flujos UX optimizados.",
    },
    highlights: [
      {
        summary: {
          en: "Built Tecnoimports storefront mirroring brand identity and improving usability.",
          es: "Construí la tienda Tecnoimports reflejando la identidad de marca y mejorando la usabilidad.",
        },
        impact: {
          en: "Delivered consistent experiences across desktop and mobile.",
          es: "Entregó experiencias consistentes en desktop y móvil.",
        },
      },
      {
        summary: {
          en: "Defined the visual system for inseel.com and implemented WooCommerce with payments and inventory.",
          es: "Definí el sistema visual de inseel.com e implementé WooCommerce con pagos e inventario.",
        },
        impact: {
          en: "Rolled out Elementor-based landing pages for rapid iterations.",
          es: "Liberé landing pages basadas en Elementor para iteraciones rápidas.",
        },
      },
    ],
    technologies: [
      TecTagType.WORDPRESS,
      TecTagType.WOOCOMMERCE,
      TecTagType.PHP,
      TecTagType.POSTGRESQL,
      TecTagType.CSS_HTML,
      TecTagType.GIT,
    ],
    externalUrl: "https://inseel.com/",
  },
];

export const projectHighlights: ProjectHighlight[] = [
  {
    id: "notary",
    title: {
      en: "Notary Water-Debt System",
      es: "Sistema de adeudos notariales",
    },
    context: {
      en: "Self-service platform for notaries to validate water-debt status in minutes.",
      es: "Plataforma de autoservicio para validar adeudos de agua en minutos.",
    },
    outcome: {
      en: "Automated constancy PDFs cut manual processing by 80%.",
      es: "Constancias PDF automatizadas redujeron 80% el procesamiento manual.",
    },
    technologies: [
      TecTagType.SPRING_BOOT,
      TecTagType.JWT,
      TecTagType.MYSQL,
      TecTagType.REACT,
      TecTagType.ANT_DESIGN,
    ],
  },
  {
    id: "survey",
    title: {
      en: "Survey & Analytics SPA",
      es: "SPA de encuestas y analítica",
    },
    context: {
      en: "Dynamic survey builder with dashboards and Excel exports for stakeholders.",
      es: "Constructor de encuestas con tableros y exportación a Excel para stakeholders.",
    },
    outcome: {
      en: "Delivered authenticated workflows, notifications, and dashboards end-to-end.",
      es: "Entregó flujos autenticados, notificaciones y dashboards end-to-end.",
    },
    technologies: [
      TecTagType.REACT,
      TecTagType.REDUX,
      TecTagType.ANT_DESIGN,
      TecTagType.SPRING_BOOT,
    ],
  },
  {
    id: "hr-refactor",
    title: {
      en: "HR Platform Refactor",
      es: "Refactor de Plataforma RH",
    },
    context: {
      en: "Legacy HR system overhaul focused on attendance, schedules, and centralized logging.",
      es: "Refactor de un sistema heredado de RH enfocado en asistencias, horarios y logging centralizado.",
    },
    outcome: {
      en: "Boosted performance by 40% and delivered tailored Python reporting pipelines.",
      es: "Incrementó 40% el rendimiento y entregó pipelines de reportes con Python a medida.",
    },
    technologies: [
      TecTagType.SPRING_BOOT,
      TecTagType.SPRING_SECURITY,
      TecTagType.MYSQL,
      TecTagType.REACT,
      TecTagType.REDUX,
      TecTagType.PYTHON,
    ],
  },
  {
    id: "mobile-checkin",
    title: {
      en: "Mobile Check-In App",
      es: "App Móvil de Checador",
    },
    context: {
      en: "React Native attendance tracker migrated to TypeScript with improved geolocation.",
      es: "Checador en React Native migrado a TypeScript con geolocalización mejorada.",
    },
    outcome: {
      en: "Reduced runtime errors by 30% and published updates to Google Play Store.",
      es: "Redujo errores en ejecución 30% y publicó actualizaciones en Google Play Store.",
    },
    technologies: [
      TecTagType.REACT_NATIVE,
      TecTagType.TYPESCRIPT,
      TecTagType.ZUSTAND,
      TecTagType.SPRING_BOOT,
    ],
  },
  {
    id: "causanatura",
    title: {
      en: "Causanatura Media Redesign",
      es: "Rediseño Causanatura Media",
    },
    context: {
      en: "Full migration to Next.js + Strapi with AWS hosting and localization.",
      es: "Migración completa a Next.js + Strapi con hosting en AWS y localización.",
    },
    outcome: {
      en: "Improved performance and donations by 30%.",
      es: "Mejoró el rendimiento y donaciones en 30%.",
    },
    technologies: [
      TecTagType.NEXT_JS,
      TecTagType.STRAPI,
      TecTagType.POSTGRESQL,
      TecTagType.AWS,
    ],
    link: "https://causanaturamedia.com/",
  },
  {
    id: "course-management",
    title: {
      en: "Course Management Platform",
      es: "Plataforma de Gestión de Cursos",
    },
    context: {
      en: ".NET MVC modules for student, instructor, and document workflows.",
      es: "Módulos MVC en .NET para flujos de estudiantes, instructores y documentos.",
    },
    outcome: {
      en: "Enabled full CRUD with robust validations and S3-backed storage.",
      es: "Habilitó CRUD completo con validaciones robustas y almacenamiento en S3.",
    },
    technologies: [
      TecTagType.DOTNET,
      TecTagType.AWS,
      TecTagType.POSTGRESQL,
    ],
  },
  {
    id: "certification-platform",
    title: {
      en: "Certification Platform 286",
      es: "Plataforma de Certificación 286",
    },
    context: {
      en: "Modular Node.js/Express APIs with React/Redux SPA and CI/CD on AWS.",
      es: "APIs modulares en Node.js/Express con SPA React/Redux y CI/CD en AWS.",
    },
    outcome: {
      en: "Automated deployments with Docker and GitHub Actions.",
      es: "Automatizó despliegues con Docker y GitHub Actions.",
    },
    technologies: [
      TecTagType.NODE_JS,
      TecTagType.EXPRESS,
      TecTagType.REACT,
      TecTagType.REDUX,
      TecTagType.AWS,
      TecTagType.DOCKER,
      TecTagType.GITHUB_ACTIONS,
    ],
    link: "https://plataforma286.ortegaygasset.mx/",
  },
  {
    id: "analytics-dashboard",
    title: {
      en: "EDUAL Analytics Dashboard",
      es: "Dashboard Analítico EDUAL",
    },
    context: {
      en: "ETL, cleansing, and Tableau dashboards for survey monitoring.",
      es: "ETL, limpieza y tableros en Tableau para seguimiento de encuestas.",
    },
    outcome: {
      en: "Cut report turnaround by 60% for stakeholders.",
      es: "Redució 60% el tiempo de entrega de reportes para stakeholders.",
    },
    technologies: [
      TecTagType.PYTHON,
      TecTagType.PANDAS,
      TecTagType.TABLEAU,
    ],
  },
  {
    id: "tecnoimports",
    title: {
      en: "Tecnoimports E-commerce",
      es: "E-commerce Tecnoimports",
    },
    context: {
      en: "Customized WordPress/WooCommerce storefront mirroring brand identity.",
      es: "Tienda WordPress/WooCommerce personalizada replicando la identidad de marca.",
    },
    outcome: {
      en: "Delivered consistent UX across desktop and mobile.",
      es: "Ofreció UX consistente en desktop y móvil.",
    },
    technologies: [
      TecTagType.WORDPRESS,
      TecTagType.WOOCOMMERCE,
      TecTagType.PHP,
      TecTagType.CSS_HTML,
    ],
    link: "https://tecnoimports.com/",
  },
  {
    id: "inseel-store",
    title: {
      en: "Inseel Corporate Store",
      es: "Tienda Corporativa Inseel",
    },
    context: {
      en: "Designed and launched inseel.com with WooCommerce, payments, and inventory.",
      es: "Diseño y lanzamiento de inseel.com con WooCommerce, pagos e inventario.",
    },
    outcome: {
      en: "Defined the brand system and accelerated page iteration with Elementor.",
      es: "Definió el sistema de marca y aceleró iteraciones usando Elementor.",
    },
    technologies: [
      TecTagType.WORDPRESS,
      TecTagType.WOOCOMMERCE,
      TecTagType.CSS_HTML,
      TecTagType.PHP,
    ],
    link: "https://inseel.com/",
  },
];

export const educationRecords: EducationRecord[] = [
  {
    institution: "Universidad Politécnica de Aguascalientes",
    timeframe: "2020 – 2024",
    degree: {
      en: "B.S. in Computer Systems Engineering",
      es: "Ingeniería en Sistemas Computacionales",
    },
    highlights: [
      {
        en: "Final grade: 9.0/10; dual model scholar balancing full-time studies with professional work.",
        es: "Promedio final: 9.0/10; modelo dual combinando estudios de tiempo completo con trabajo profesional.",
      },
      {
        en: "Graduated with B2 English proficiency (TOEFL Writing).",
        es: "Graduado con nivel de inglés B2 (TOEFL Writing).",
      },
    ],
    logo: UPA_LOGO,
  },
  {
    institution: "CTISS No. 155 ‘Josefa Ortiz de Domínguez’",
    timeframe: "2016 – 2020",
    degree: {
      en: "Programming Technician Diploma",
      es: "Técnico en Programación",
    },
    highlights: [
      {
        en: "Java OOP development, MySQL database design, and Android apps with Android Studio.",
        es: "Desarrollo Java POO, diseño de bases MySQL y apps Android con Android Studio.",
      },
      {
        en: "Introduced to networking using Cisco Packet Tracer.",
        es: "Introducción a redes usando Cisco Packet Tracer.",
      },
    ],
  },
];

export const courseGroups: CourseGroup[] = [
  {
    provider: "DevTalles",
    topics: [
      "Git + GitHub: Version Control System from Scratch",
      "React: From Zero to Expert (Hooks & MERN)",
      "React Native Expo: Native iOS & Android Apps",
      "Node.js: From Zero to Expert",
      "REST Authentication with Clean Architecture",
      "Zustand: State Management for React",
      "Design Patterns: Practical & Efficient Solutions",
    ],
    logo: DEVTALLES_LOGO,
  },
  {
    provider: "Udemy",
    topics: [
      "The Ultimate Redux Course – Latest Redux Toolkit",
      "Accelerated ES6 JavaScript Training",
      "Ultimate AWS Certified Cloud Practitioner (CLF-C02 2025)",
    ],
    logo: UDEMY_LOGO,
  },
];

export const contactLinks: ContactLink[] = [
  { id: "email", label: "ramseswardof@gmail.com", href: "mailto:ramseswardof@gmail.com" },
  { id: "location", label: "Aguascalientes, MX", href: "https://maps.google.com/?q=Aguascalientes+Mexico" },
  { id: "github", label: "GitHub", href: "https://github.com/RamsesMeza" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ramses-meza-martinez" },
  { id: "portfolio", label: "Portfolio", href: "https://devsarrollos.com/ramses-meza" },
];
