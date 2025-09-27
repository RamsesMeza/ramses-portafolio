import { useLanguage } from "../contexts/LanguageProvider";

const translations = {
  en: {
    navbar: [
      { id: "home", label: "Home" },
      { id: "tech-stack", label: "Tech Stack" },
      { id: "projects", label: "Project Highlights" },
      { id: "experience", label: "Experience" },
      { id: "courses", label: "Courses" },
      { id: "about-contact", label: "About & Contact" },
    ],
    hero: {
      title: "Juan Ramses Meza Martínez",
      subtitle: "Full-Stack Developer",
      description:
        "I design, build, and ship data-driven products for government, education, and e-commerce teams—delivering secure APIs, dynamic frontends, and cloud-ready pipelines.",
      primaryCta: "Download CV",
      secondaryCta: "Book a call",
      contactCaption: "Let’s build something",
    },
    sections: {
      about: "About Me",
      experience: "Work Experience",
      stack: "My Technologies",
      projects: "Projects",
      courses: "Courses & Upskilling",
      aboutContact: "About & Contact",
    },
    about: {
      highlightsTitle: "Key Highlights",
    },
    experience: {
      impactTitle: "Impact Summary",
      techStackLabel: "Tech stack",
      moreInfoCta: "View full portfolio",
    },
    projects: {
      linkLabel: "Explore live projects",
    },
    stack: {
      toolboxTitle: "Toolbox",
    },
    education: {
      highlightsTitle: "Academic Highlights",
    },
    courses: {
      intro: "Focused learning paths that keep my toolbox current.",
    },
    contact: {
      availability: "Open to relocation",
      message:
        "Need a full-stack partner for your next launch? Reach out and I’ll get back within one business day.",
      formCta: "Send message",
    },
  },
  es: {
    navbar: [
      { id: "home", label: "Inicio" },
      { id: "tech-stack", label: "Stack" },
      { id: "projects", label: "Proyectos" },
      { id: "experience", label: "Experiencia" },
      { id: "courses", label: "Cursos" },
      { id: "about-contact", label: "Sobre mí & Contacto" },
    ],
    hero: {
      title: "Juan Ramses Meza Martínez",
      subtitle: "Desarrollador Full-Stack",
      description:
        "Diseño, construyo y publico productos impulsados por datos para equipos de gobierno, educación y e-commerce, entregando APIs seguras, frontends dinámicos y pipelines listos para la nube.",
      primaryCta: "Descargar CV",
      secondaryCta: "Agenda una llamada",
      contactCaption: "Construyamos algo",
    },
    sections: {
      about: "Sobre mí",
      experience: "Experiencia Laboral",
      stack: "Mi Stack",
      projects: "Proyectos",
      courses: "Cursos y Actualización",
      aboutContact: "Sobre mí & Contacto",
    },
    about: {
      highlightsTitle: "Puntos destacados",
    },
    experience: {
      impactTitle: "Resumen de impacto",
      techStackLabel: "Tecnologías",
      moreInfoCta: "Ver portafolio completo",
    },
    projects: {
      linkLabel: "Explora los proyectos en vivo",
    },
    stack: {
      toolboxTitle: "Caja de herramientas",
    },
    education: {
      highlightsTitle: "Logros académicos",
    },
    courses: {
      intro: "Rutas de aprendizaje que mantienen mi caja de herramientas al día.",
    },
    contact: {
      availability: "Disponible para reubicación",
      message:
        "¿Buscas un aliado full-stack para tu próximo lanzamiento? Escríbeme y responderé dentro de un día hábil.",
      formCta: "Enviar mensaje",
    },
  },
};

export const useTranslations = () => {
  const { language } = useLanguage();

  return translations[language as 'en' | 'es'];
};
