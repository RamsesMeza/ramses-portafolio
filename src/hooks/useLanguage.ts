import { useLanguage } from "../contexts/LanguageProvider";

const translations = {
  en: {
    navbar: [
      { id: "home", label: "Home" },
      { id: "about-me", label: "About me" },
      { id: "work-experience", label: "Work Experience" },
      { id: "projects", label: "Projects" },
      { id : "certifications", label: "Certifications" },
    ],
    header: {
      title: "Juan Ramses Meza Martínez",
      description: "FULLSTACK DEVELOPER",
    },
    welcome: "Welcome",
    hello: "Hello",
    goodbye: "Goodbye",
    changeLanguage: "Change Language",
  },
  es: {
    header: {
      title: "Juan Ramses Meza Martínez",
      description: "DESARROLLADOR FULLSTACK",
    },
    navbar: [
      { id: "home", label: "Inicio" },
      { id: "about-me", label: "Sobre mí" },
      { id: "work-experience", label: "Experiencia Laboral" },
      { id: "projects", label: "Proyectos" },
        { id: "certifications", label: "Certificaciones" },
    ],
    welcome: "Bienvenido",
    hello: "Hola",
    goodbye: "Adiós",
    changeLanguage: "Cambiar Idioma",
  },
};

export const useTranslations = () => {
  const { language } = useLanguage();

  return translations[language];
};
