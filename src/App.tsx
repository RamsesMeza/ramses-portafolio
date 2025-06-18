import "@fontsource/nunito/400.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/900.css";

import { TecTag, TecTagType } from "./components/TecTag";
import { TbWorld } from "react-icons/tb";
import { FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import RAM_IMG from "./assets/ram.png";
import Navbar from "./components/Navbar";
import { useTranslations } from "./hooks/useLanguage";


interface Project {
  name: string;
  descriptionBullets: string[];
  tags: TecTagType[];
}

interface WorkExperience {
  company: string;
  projects: Project[];
}

const workExperiences: WorkExperience[] = [
  {
    company: "MIAA | Desarrollador FullStack | 2025 - Actualidad",
    projects: [
      {
        name: "Proyecto Notarios",
        descriptionBullets: [
          "Desarrollo de un sistema para consultar adeudos de inmuebles relacionados con pagos de agua.",
          "Implementación de una REST API con Spring Boot.",
          "Creación de un módulo para generación de constancias de no adeudo en PDF.",
          "Desarrollo de un módulo de autenticación de usuarios utilizando Spring Security y JWT.",
          "Diseño y modelado de la base de datos en MySQL.",
          "Creación de pantallas de autenticación, consulta de adeudos y generación de constancias.",
          "Desarrollo de formularios dinámicos utilizando Formik y validaciones personalizadas.",
        ],
        tags: [
          TecTagType.REACT,
          TecTagType.REDUX,
          TecTagType.TAILWIND_CSS,
          TecTagType.SPRING_BOOT,
          TecTagType.JWT,
          TecTagType.MYSQL,
          TecTagType.GIT,
        ],
      },
      {
        name: "Proyecto Recursos Humanos",
        /*Refactorización y optimización de un sistema heredado, mejorando la seguridad, el rendimiento y la experiencia de usuario.   
Desarrollo de nuevas funcionalidades alineadas a procesos internos de Recursos Humanos, incluyendo:
Creación del módulo de incidencias de asistencia.
Mejora del módulo de horarios.
Corrección de bugs en módulos existentes.
Implementación de un logger de errores en la REST API para facilitar la identificación y resolución de bugs.
Análisis y limpieza de datos utilizando Python (Pandas) para generar reportes específicos solicitados por el departamento de RH.  */
        descriptionBullets: [
          "Refactorización y optimización de un sistema heredado, mejorando la seguridad, el rendimiento y la experiencia de usuario.",
          "Desarrollo de nuevas funcionalidades alineadas a procesos internos de Recursos Humanos, incluyendo:",
          "Creación del módulo de incidencias de asistencia.",
          "Mejora del módulo de horarios.",
          "Corrección de bugs en módulos existentes.",
          "Implementación de un logger de errores en la REST API para facilitar la identificación y resolución de bugs.",
          "Análisis y limpieza de datos utilizando Python (Pandas) para generar reportes específicos solicitados por el departamento de RH.",
        ],
        tags: [
          TecTagType.REACT,
          TecTagType.REDUX,
          TecTagType.TAILWIND_CSS,
          TecTagType.SPRING_BOOT,
          TecTagType.JWT,
          TecTagType.MYSQL,
          TecTagType.PYTHON,
          TecTagType.GIT,
        ],
      },
      {
        name: "Aplicación checador de Recursos Humanos",
        descriptionBullets: [
          "Refactorización de una aplicación existente desarrollada en JavaScript, migrando e implementando TypeScript para mejorar la mantenibilidad y detección temprana de errores.",
          "Implementación de Zustand como gestor de estado para mejorar la gestión y rendimiento de la aplicación.",
          "Corrección de errores relacionados con el registro de asistencia y ubicación.",
          "Mejora del diseño de componentes utilizando NativeWind.",
        ],
        tags: [
          TecTagType.REACT,
          TecTagType.REDUX,
          TecTagType.TAILWIND_CSS,
          TecTagType.SPRING_BOOT,
          TecTagType.JWT,
          TecTagType.MYSQL,
          TecTagType.PYTHON,
          TecTagType.GIT,
        ],
      },
    ],
  },
];
function App() {

  const t = useTranslations();
  return (
    <div>

      <Navbar />
  
      {/* Header */}
      <header className=" text-white py-8 px-4 sm:px-6 lg:px-8 shadow-xl bg-[#106399]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={RAM_IMG}
                  alt="Juan Ramses Meza Martinez"
                  className="w-60 h-60 md:w-48 md:h-48 rounded-full object-cover shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                {t.header.title}
              </h1>
              <p className="text-xl md:text-2xl font-bold text-blue-100 mt-1">
                {t.header.description}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <a
                  href="mailto:ramseswardof@gmail.com"
                  className="flex items-center gap-2 bg-black bg-opacity-50 hover:bg-opacity-70 transition-all px-4 py-2 rounded-4xl"
                >
                  <IoIosMail className="text-xl" />
                  <span className="truncate">ramseswardof@gmail.com</span>
                </a>

                <a
                  href="tel:4495147882"
                  className="flex items-center gap-2 bg-black bg-opacity-50 hover:bg-opacity-70 transition-all px-4 py-2 rounded-4xl"
                >
                  <FaPhone className="text-lg" />
                  <span>449-514-78-82</span>
                </a>

                <div className="flex items-center gap-2 bg-black bg-opacity-50 px-4 py-2 rounded-4xl">
                  <FaMessage className="text-lg" />
                  <span>Inglés B2</span>
                </div>

                <a
                  href="https://www.linkedin.com/in/juan-ramses-meza-mart%C3%ADnez-7ba26b29a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black bg-opacity-50 hover:bg-opacity-70 transition-all px-4 py-2 rounded-4xl"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://devsarollos.com/ramses-meza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black bg-opacity-50 hover:bg-opacity-70 transition-all px-4 py-2 rounded-4xl"
                >
                  <TbWorld className="text-xl" />
                  <span className="truncate">devsarollos.com/ramses-meza</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 text-4xl">
          En construcción... 😉
        </div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-gray-800 mb-2">
            Experiencia Profesional
          </h2>
          <div className="w-20 h-1 bg-[#106399] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {workExperiences.map((experience, index) => (
            <section
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-blue-200">
                <h2 className="text-xl md:text-2xl font-black text-[#] flex items-center gap-2">
                  <span className="bg-[#106399] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">
                    {index + 1}
                  </span>
                  {experience.company}
                </h2>
              </div>

              <div className="p-6 grid gap-8">
                {experience.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-[#106399]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                          {project.name}
                        </h3>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <TecTag key={tagIndex} type={tag} />
                          ))}
                        </div>

                        <ul className="space-y-2 text-gray-700">
                          {project.descriptionBullets.map(
                            (bullet, bulletIndex) => (
                              <li
                                key={bulletIndex}
                                className="flex items-start gap-2"
                              >
                                <span className="text-[#106399] mt-1">•</span>
                                <span>{bullet}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
