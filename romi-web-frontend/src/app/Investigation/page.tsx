import { Activity, Beaker, BookOpenCheck, Brain, ClipboardCheck, FileText, HeartPulse, Microscope, Salad, ShieldCheck, Sparkles, Stethoscope, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getLocale } from "next-intl/server";
import EnglishPublicPage from "@/components/EnglishPublicPage";

const researchLines = [
  {
    title: "Confiabilidad clínica de asistentes virtuales",
    description: "Evaluación de respuestas de ROMI ante dudas médicas, con revisión de especialistas y criterios de seguridad.",
  },
  {
    title: "Experiencia y percepción de impacto",
    description: "Estudio de usabilidad, claridad y valor percibido por usuarios que interactúan con un asistente médico con IA.",
  },
  {
    title: "Respuesta de especialistas",
    description: "Análisis de cómo médicos y profesionales de salud integran ROMI en su práctica sin desplazar el criterio clínico.",
  },
  {
    title: "Seguimiento y continuidad de atención",
    description: "Exploración de recordatorios, preparación previa y acompañamiento entre consultas para mejorar adherencia.",
  },
];

const specialties = [
  { icon: HeartPulse, title: "Oncología", text: "Apoyo educativo, preparación de dudas y seguimiento de información para pacientes y equipos clínicos." },
  { icon: Salad, title: "Nutrición", text: "Expedientes y acompañamiento para hábitos, evolución del paciente y contexto previo a consulta." },
  { icon: Brain, title: "Psicología", text: "Organización del expediente y seguimiento responsable sin sustituir la relación terapéutica." },
  { icon: Stethoscope, title: "Medicina general", text: "Orientación inicial, identificación de necesidades y canalización adecuada." },
  { icon: Users, title: "Cuidados paliativos", text: "Acompañamiento sensible para comunicación, continuidad y soporte del equipo de atención." },
  { icon: ShieldCheck, title: "Otras especialidades médicas", text: "Modelo adaptable para contextos clínicos donde la información ordenada mejora la consulta." },
];

const clinicalPrograms = [
  {
    icon: ClipboardCheck,
    title: "Evaluación de respuestas clínicas",
    text: "Revisión de claridad, seguridad y límites del asistente ante preguntas frecuentes de salud.",
  },
  {
    icon: Activity,
    title: "Seguimiento entre consultas",
    text: "Análisis de recordatorios, preparación previa y continuidad sin sobrecargar al profesional.",
  },
  {
    icon: ShieldCheck,
    title: "Uso responsable de IA",
    text: "Criterios de privacidad, comunicación clara y supervisión profesional para escenarios públicos.",
  },
];

const publications = [
  {
    status: "Previo",
    title: "User Experience and Perceived Impact of an AI Medical Assistant: A Pilot Study",
    type: "Estudio mixto expuesto en 2025 SMeO",
  },
  {
    status: "Próximamente",
    title: "Evaluación de la confiabilidad clínica de un asistente médico virtual basado en inteligencia artificial en la resolución de dudas médicas",
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
              Investigación y especialidades
            </p>
            <h1 className="mt-5 font-fredoka-one text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Evidencia pública para construir ROMI con responsabilidad clínica
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 font-poppins sm:text-base">
              ROMI se desarrolla con estudios, revisión profesional y líneas de investigación que conectan experiencia de usuario, confiabilidad y aplicación por especialidad.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <Reveal className="mb-9">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Líneas de investigación</p>
            <h2 className="mt-2 font-fredoka-one text-3xl text-primary sm:text-4xl">Preguntas que guían la evolución de ROMI</h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--text-body)] font-poppins sm:text-base">
              Cada línea busca demostrar utilidad real sin perder de vista seguridad, confidencialidad y supervisión profesional.
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
            <h2 className="font-fredoka-one text-3xl text-primary sm:text-4xl">Aplicación por áreas clínicas</h2>
            <p className="text-sm leading-relaxed text-[var(--text-body)] font-poppins sm:text-base">
              La plataforma se adapta a distintas necesidades médicas. Psicología está presente, pero no domina el enfoque: ROMI también crece en oncología, nutrición y otras áreas de atención.
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
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Programas clínicos</p>
            <h2 className="mt-2 font-fredoka-one text-3xl text-primary sm:text-4xl">Trabajo factible desde el sitio público</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-body)] font-poppins sm:text-base">
              El PDF plantea flujos amplios de plataforma. En esta primera etapa se muestran como líneas informativas y próximos pasos, sin prometer captura de datos, pagos ni dashboards activos.
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
                    Frente público
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
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Investigaciones públicas</p>
            <h2 className="mt-2 font-fredoka-one text-3xl text-primary sm:text-4xl">Producción académica ROMI</h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--text-body)] font-poppins sm:text-base">
              Estos proyectos documentan avances previos y evaluaciones próximas del asistente médico virtual.
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
            <p className="text-xs font-bold uppercase tracking-wide text-white/70">Colaboración</p>
            <h2 className="mt-1 font-fredoka-one text-2xl sm:text-3xl">Respuesta de especialistas y nuevas líneas</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/80 font-poppins">
              ROMI puede sumar nuevas especialidades cuando exista un marco clínico claro y revisión profesional.
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
