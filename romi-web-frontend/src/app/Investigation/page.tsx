import { Activity, Beaker, BookOpenCheck, Brain, ClipboardCheck, FileText, HeartPulse, Microscope, Salad, ShieldCheck, Sparkles, Stethoscope, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getLocale } from "next-intl/server";
import EnglishPublicPage from "@/components/EnglishPublicPage";

const researchLines = [
  {
    title: "Confiabilidad clinica de asistentes virtuales",
    description: "Evaluacion de respuestas de ROMI ante dudas medicas, con revision de especialistas y criterios de seguridad.",
  },
  {
    title: "Experiencia y percepcion de impacto",
    description: "Estudio de usabilidad, claridad y valor percibido por usuarios que interactuan con un asistente medico con IA.",
  },
  {
    title: "Respuesta de especialistas",
    description: "Analisis de como medicos y profesionales de salud integran ROMI en su practica sin desplazar el criterio clinico.",
  },
  {
    title: "Seguimiento y continuidad de atencion",
    description: "Exploracion de recordatorios, preparacion previa y acompanamiento entre consultas para mejorar adherencia.",
  },
];

const specialties = [
  { icon: HeartPulse, title: "Oncologia", text: "Apoyo educativo, preparacion de dudas y seguimiento de informacion para pacientes y equipos clinicos." },
  { icon: Salad, title: "Nutricion", text: "Expedientes y acompanamiento para habitos, evolucion del paciente y contexto previo a consulta." },
  { icon: Brain, title: "Psicologia", text: "Organizacion del expediente y seguimiento responsable sin sustituir la relacion terapeutica." },
  { icon: Stethoscope, title: "Medicina general", text: "Orientacion inicial, identificacion de necesidades y canalizacion adecuada." },
  { icon: Users, title: "Cuidados paliativos", text: "Acompanamiento sensible para comunicacion, continuidad y soporte del equipo de atencion." },
  { icon: ShieldCheck, title: "Otras especialidades medicas", text: "Modelo adaptable para contextos clinicos donde la informacion ordenada mejora la consulta." },
];

const clinicalPrograms = [
  {
    icon: ClipboardCheck,
    title: "Evaluacion de respuestas clinicas",
    text: "Revision de claridad, seguridad y limites del asistente ante preguntas frecuentes de salud.",
  },
  {
    icon: Activity,
    title: "Seguimiento entre consultas",
    text: "Analisis de recordatorios, preparacion previa y continuidad sin sobrecargar al profesional.",
  },
  {
    icon: ShieldCheck,
    title: "Uso responsable de IA",
    text: "Criterios de privacidad, comunicacion clara y supervision profesional para escenarios publicos.",
  },
];

const publications = [
  {
    status: "Previo",
    title: "User Experience and Perceived Impact of an AI Medical Assistant: A Pilot Study",
    type: "Estudio mixto expuesto en 2025 SMeO",
  },
  {
    status: "Proximamente",
    title: "Evaluacion de la confiabilidad clinica de un asistente medico virtual basado en inteligencia artificial en la resolucion de dudas medicas",
    type: "Estudio observacional",
  },
];

export default async function InvestigationPage() {
  if (await getLocale() === "en") return <EnglishPublicPage kind="research" />;

  return (
    <main className="min-h-screen bg-[var(--surface)]">
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-18 text-white sm:px-6 sm:py-24 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/90">
              <Beaker className="h-4 w-4" />
              Investigacion y especialidades
            </p>
            <h1 className="mt-5 font-fredoka-one text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Evidencia publica para construir ROMI con responsabilidad clinica
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 font-poppins sm:text-base">
              ROMI se desarrolla con estudios, revision profesional y lineas de investigacion que conectan experiencia de usuario, confiabilidad y aplicacion por especialidad.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <Reveal className="mb-9">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Lineas de investigacion</p>
            <h2 className="mt-2 font-fredoka-one text-3xl text-primary sm:text-4xl">Preguntas que guian la evolucion de ROMI</h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--text-body)] font-poppins sm:text-base">
              Cada linea busca demostrar utilidad real sin perder de vista seguridad, confidencialidad y supervision profesional.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {researchLines.map((line, i) => (
              <Reveal key={line.title} type="scale" delay={i * 60}>
                <article className="h-full rounded-3xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-5 card-premium">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--chip-bg)] text-primary">
                    <Microscope className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[var(--text-primary)]">{line.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)] font-poppins">{line.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 border-y border-[var(--surface-card-border-soft)] bg-[var(--surface-alt)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[0.85fr,1.15fr] lg:px-8">
          <Reveal type="left" className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Especialidades</p>
            <h2 className="font-fredoka-one text-3xl text-primary sm:text-4xl">Aplicacion por areas clinicas</h2>
            <p className="text-sm leading-relaxed text-[var(--text-body)] font-poppins sm:text-base">
              La plataforma se adapta a distintas necesidades medicas. Psicologia esta presente, pero no domina el enfoque: ROMI tambien crece en oncologia, nutricion y otras areas de atencion.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {specialties.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} type="scale" delay={i * 50}>
                <article className="h-full rounded-3xl border border-[var(--surface-card-border)] bg-[var(--surface)] p-5 card-premium">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--text-primary)]">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--text-body)] font-poppins">{text}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <Reveal className="mb-9">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Programas clinicos</p>
            <h2 className="mt-2 font-fredoka-one text-3xl text-primary sm:text-4xl">Trabajo factible desde el sitio publico</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-body)] font-poppins sm:text-base">
              El PDF plantea flujos amplios de plataforma. En esta primera etapa se muestran como lineas informativas y proximos pasos, sin prometer captura de datos, pagos ni dashboards activos.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3">
            {clinicalPrograms.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} type="scale" delay={i * 60}>
                <article className="h-full rounded-3xl border border-[var(--surface-card-border)] bg-[var(--surface-card-soft)] p-5 card-premium">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--surface)] text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)] font-poppins">{text}</p>
                  <span className="mt-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Frente publico
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <Reveal className="mb-9">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Investigaciones publicas</p>
            <h2 className="mt-2 font-fredoka-one text-3xl text-primary sm:text-4xl">Produccion academica ROMI</h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--text-body)] font-poppins sm:text-base">
              Estos proyectos documentan avances previos y evaluaciones proximas del asistente medico virtual.
            </p>
          </Reveal>

          <div className="space-y-4">
            {publications.map((pub, i) => (
              <Reveal key={pub.title} delay={i * 80}>
                <article className="flex flex-col gap-4 rounded-3xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-5 card-premium sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--chip-bg)] text-primary">
                      {i === 0 ? <BookOpenCheck className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-primary">{pub.status}</p>
                      <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)] sm:text-lg">{pub.title}</h3>
                      <p className="mt-1 text-sm text-[var(--text-body)] font-poppins">{pub.type}</p>
                    </div>
                  </div>
                  <Sparkles className="hidden h-5 w-5 text-[var(--secondary)] sm:block" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 text-white sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-white/70">Colaboracion</p>
            <h2 className="mt-1 font-fredoka-one text-2xl sm:text-3xl">Respuesta de especialistas y nuevas lineas</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/80 font-poppins">
              ROMI puede sumar nuevas especialidades cuando exista un marco clinico claro y revision profesional.
            </p>
          </div>
          <a href="/Contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
            Contactar equipo ROMI
          </a>
        </div>
      </section>
    </main>
  );
}
