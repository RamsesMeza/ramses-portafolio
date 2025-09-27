import "@fontsource/nunito/400.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/900.css";

import { useMemo } from "react";
import type { IconType } from "react-icons";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiGlobe,
} from "react-icons/fi";
import Navbar from "./components/Navbar";
import { TecTag } from "./components/TecTag";
import SectionHeading from "./components/SectionHeading";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { Reveal } from "./components/Reveal";
import RAM_IMG from "./assets/ram.png";
import CV_EN from "./EN_2025_Sep_Simple_Ramses_CV.pdf?url";
import { useTranslations } from "./hooks/useLanguage";
import { useLanguage } from "./contexts/LanguageProvider";
import {
  aboutParagraphs,
  contactLinks,
  courseGroups,
  educationRecords,
  experiences,
  heroStats,
  projectHighlights,
  stackCategories,
  type LocalizedString,
  type ContactLinkId,
} from "./data/content";

const getText = (value: LocalizedString, language: "en" | "es") =>
  value[language];

const CONTACT_ICON_MAP: Record<ContactLinkId, IconType> = {
  email: FiMail,
  location: FiMapPin,
  github: FiGithub,
  linkedin: FiLinkedin,
  portfolio: FiGlobe,
};

function App() {
  const t = useTranslations();
  const { language } = useLanguage();

  const heroStatsList = useMemo(
    () =>
      heroStats.map((stat) => (
        <div
          key={stat.value + stat.label.en}
          className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur"
        >
          <span className="text-3xl font-black text-white sm:text-4xl">
            {stat.value}
          </span>
          <p className="mt-2 text-sm font-semibold tracking-wide text-blue-100">
            {getText(stat.label, language)}
          </p>
        </div>
      )),
    [language]
  );

  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <ParticlesBackground />
            <div className="absolute inset-0 bg-[#0f5f8f]/90"></div>
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-0">
            <Reveal
              className="flex flex-col justify-center text-white"
              direction="up"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">
                {t.hero.subtitle}
              </span>
              <h1 className="mt-4 text-4xl font-black sm:text-5xl md:text-6xl">
                {t.hero.title}
              </h1>
              <p className="mt-6 text-lg text-blue-100 sm:text-xl">
                {t.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={CV_EN}
                  download
                  className="rounded-full bg-white/90 px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#0f5f8f] transition hover:bg-white"
                >
                  {t.hero.primaryCta}
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/60 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
                >
                  {t.hero.secondaryCta}
                </a>
              </div>

              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">
                {t.hero.contactCaption}
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {heroStatsList}
              </div>
            </Reveal>

            <aside className="flex justify-center lg:justify-end">
              <Reveal
                className="relative w-full max-w-sm"
                direction="right"
                delay={0.1}
              >
                <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-3xl bg-white/10 blur-xl"></div>
                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur">
                  <img
                    src={RAM_IMG}
                    alt="Juan Ramses Meza Martínez"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="border-t border-white/20 bg-[#0f5f8f]/80 p-6 text-white">
                    <p className="text-sm font-semibold text-blue-100">
                      {t.contact.availability}
                    </p>
                    <p className="mt-2 text-lg font-bold">Aguascalientes, MX</p>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>

        <section
          id="tech-stack"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        >
          <Reveal>
            <SectionHeading
              title={
                language === "en"
                  ? "My Technologies & Stack"
                  : "Mis Tecnologías y Stack"
              }
              description={
                language === "en"
                  ? "Core technologies I reach for when designing resilient, user-focused products."
                  : "Tecnologías clave que utilizo para crear productos resilientes y centrados en el usuario."
              }
              align="left"
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {stackCategories.map((category, index) => (
              <Reveal
                key={category.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0f5f8f]/40"
                delay={index * 0.05}
              >
                <h3 className="text-lg font-bold text-[#0f5f8f]">
                  {getText(category.title, language)}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {getText(category.description, language)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <TecTag key={`${category.id}-${tag}`} type={tag} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="bg-white pt-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                title={
                  language === "en" ? "Work Experience" : "Experiencia Laboral"
                }
                description={
                  language === "en"
                    ? "Spanning public services, education, and commerce."
                    : "Cobertura en servicios públicos, educación y comercio."
                }
                align="left"
              />
            </Reveal>
            <div className="relative border-l border-slate-200 pl-8">
              {experiences.map((experience, index) => (
                <Reveal
                  key={experience.id}
                  className="relative mb-12 last:mb-0"
                  delay={index * 0.1}
                  direction="left"
                >
                  <span className="absolute -left-[37px] mt-1 flex h-3 w-3 items-center justify-center rounded-full border-4 border-white bg-[#0f5f8f]"></span>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0f5f8f]/40">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-col gap-3">
                        {experience.logo ? (
                          <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className={`h-14 w-40 max-w-full flex-shrink-0 rounded-xl border border-slate-200 object-contain p-2 ${
                              experience.id === "designa"
                                ? "bg-slate-900"
                                : "bg-white"
                            }`}
                            loading="lazy"
                          />
                        ) : null}
                        <h3 className="text-xl font-black text-slate-900">
                          {getText(experience.role, language)}
                        </h3>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#0f5f8f]">
                          {experience.company}
                        </p>
                        <span className="text-sm font-medium text-slate-500">
                          {experience.timeframe}
                        </span>
                      </div>
                    </div>
                    <p className="mt-6 text-base text-slate-600">
                      {getText(experience.summary, language)}
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-600">
                      {experience.highlights.map((highlight, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-[#0f5f8f]"></span>
                          <span>{getText(highlight.summary, language)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                title={language === "en" ? "Projects" : "Proyectos"}
                description={
                  language === "en"
                    ? "Selected work that shows how I solve real problems for teams."
                    : "Trabajo destacado que muestra cómo resuelvo problemas reales para los equipos."
                }
                align="left"
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-3">
              {projectHighlights.map((project, index) => (
                <Reveal
                  key={project.id}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0f5f8f]/40"
                  delay={index * 0.08}
                >
                  {project.company ? (
                    <span className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0f5f8f]">
                      {project.company}
                    </span>
                  ) : null}
                  <h3 className="text-xl font-black text-slate-900">
                    {getText(project.title, language)}
                  </h3>
                  <p className="mt-4 text-sm text-slate-600">
                    {getText(project.context, language)}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#0f5f8f]">
                    {getText(project.outcome, language)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <TecTag
                        key={`${project.id}-${technology}`}
                        type={technology}
                      />
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-6 text-sm font-semibold text-[#0f5f8f] hover:underline"
                    >
                      {t.projects.linkLabel}
                    </a>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="courses" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              title={
                language === "en"
                  ? "Education, Courses & Continuous Upskilling"
                  : "Educación, Cursos y Actualización Continua"
              }
              description={t.courses.intro}
              align="left"
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {educationRecords.map((record, index) => (
              <Reveal
                key={record.institution}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0f5f8f]/40"
                delay={index * 0.1}
              >
                {record.logo ? (
                  <img
                    src={record.logo}
                    alt={`${record.institution} logo`}
                    className="mb-4 h-18 w-auto object-contain"
                    loading="lazy"
                  />
                ) : null}
                <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0f5f8f]">
                      {record.institution}
                    </h3>
                    <p className="text-base font-semibold text-slate-900">
                      {getText(record.degree, language)}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                    {record.timeframe}
                  </span>
                </header>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {record.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-[#0f5f8f]"></span>
                      <span>{getText(highlight, language)}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            {courseGroups.map((group, index) => (
              <Reveal
                key={group.provider}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0f5f8f]/40"
                delay={0.1 * (educationRecords.length + index)}
              >
                {group.logo ? (
                  <div
                    className={`mb-4 inline-flex items-center justify-center rounded-xl border border-slate-200 ${
                      group.provider === "DevTalles" || group.provider === "Udemy"
                        ? "bg-slate-900"
                        : "bg-white"
                    } px-4 py-2`}
                  >
                    <img
                      src={group.logo}
                      alt={`${group.provider} logo`}
                      className={
                        group.provider === "DevTalles"
                          ? "h-8 w-auto object-contain"
                          : group.provider === "Udemy"
                          ? "h-8 w-auto object-contain"
                          : "h-12 w-auto object-contain"
                      }
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <h3 className="text-lg font-bold text-[#0f5f8f]">
                  {group.provider}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {group.topics.map((course) => (
                    <li key={course} className="flex gap-3">
                      <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-[#0f5f8f]"></span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="about-contact"
          className="bg-gradient-to-br from-[#0f5f8f] to-[#072f4c] py-20 text-white"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div className="space-y-8">
                <Reveal direction="up">
                  <SectionHeading
                    title={t.hero.subtitle}
                    description={getText(aboutParagraphs[0], language)}
                    align="left"
                    theme="dark"
                  />
                </Reveal>
                <Reveal className="space-y-4 text-base text-blue-100/90 sm:text-lg">
                  {aboutParagraphs.slice(1).map((paragraph, index) => (
                    <p key={index}>{getText(paragraph, language)}</p>
                  ))}
                </Reveal>
                <Reveal
                  className="relative hidden overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-lg backdrop-blur lg:block lg:max-w-md"
                  delay={0.15}
                >
                  <img
                    src={RAM_IMG}
                    alt="Juan Ramses Meza Martínez"
                    className="h-full w-full object-cover opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#072f4c] via-[#0f5f8f]/80 to-transparent p-6">
                    <p className="text-sm font-semibold text-blue-100">
                      {language === "en"
                        ? "Based in Aguascalientes, MX"
                        : "Radicado en Aguascalientes, MX"}
                    </p>
                  </div>
                </Reveal>
              </div>

              <div>
                <Reveal
                  className="rounded-3xl border border-white/20 bg-white/15 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-white/40"
                  direction="up"
                  delay={0.1}
                >
                  <h3 className="text-lg font-semibold text-blue-100">
                    {language === "en" ? "Direct Contact" : "Contacto directo"}
                  </h3>
                  <p className="mt-4 text-sm text-blue-100/90">
                    {language === "en"
                      ? "Let’s craft solutions that fit your roadmap. Choose the best channel and I’ll respond within one business day."
                      : "Construyamos soluciones alineadas a tu hoja de ruta. Elige el canal ideal y responderé dentro de un día hábil."}
                  </p>
                  <ul className="mt-6 space-y-4 text-sm">
                    {contactLinks.map((link) => {
                      const Icon = CONTACT_ICON_MAP[link.id];
                      return (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target={
                              link.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-white/30 hover:bg-white/10"
                          >
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                              <Icon className="text-lg" aria-hidden />
                            </span>
                            <span className="text-sm font-semibold leading-tight">
                              {link.label}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
