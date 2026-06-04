import Link from 'next/link';
import {
  Brain, HeartPulse, Baby, Users, MessageCircle, Stethoscope,
  CalendarClock, Compass,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = { title: "ROMI — Especialidades" };

const specialties = [
  { icon: Brain,         name: "Psicología clínica",            description: "Atención a adultos con enfoque en salud mental, trastornos del estado de ánimo, ansiedad y procesos emocionales complejos.", focus: "Evaluación, intervención y seguimiento terapéutico." },
  { icon: HeartPulse,    name: "Psiquiatría",                   description: "Apoyo en la organización de consultas, seguimiento a tratamiento farmacológico y coordinación con otros profesionales.", focus: "Atención médica especializada en salud mental." },
  { icon: Baby,          name: "Psicopedagogía",                description: "Acompañamiento en procesos de aprendizaje, orientación educativa y abordaje de dificultades escolares.", focus: "Vínculo entre educación, desarrollo y bienestar emocional." },
  { icon: Users,         name: "Terapia familiar y de pareja",  description: "Trabajo con dinámicas relacionales, comunicación y resolución de conflictos en el contexto familiar o de pareja.", focus: "Fortalecimiento de vínculos y convivencia saludable." },
  { icon: MessageCircle, name: "Neuropsicología",               description: "Evaluación y rehabilitación de funciones cognitivas, memoria, atención y otras áreas neurológicas.", focus: "Relación entre cerebro y comportamiento." },
  { icon: Stethoscope,   name: "Otras especialidades médicas",  description: "Profesionales de otras áreas de la salud que desean sumar un enfoque de salud mental y seguimiento cercano.", focus: "Visión integral de la salud de la persona." },
];

const flows = [
  { step: "01", title: "Elige la especialidad",      text: "La persona identifica el tipo de apoyo que necesita o se orienta a partir de la información de la plataforma." },
  { step: "02", title: "Conecta con un profesional", text: "ROMI facilita el enlace con especialistas que trabajan con esa área específica." },
  { step: "03", title: "Agenda y seguimiento",       text: "Se gestionan citas, recordatorios y seguimiento entre sesiones con apoyo de ROMI." },
];

function SideLink({ href, title, active = false }: { href: string; title: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.98] ${
        active ? "bg-[var(--chip-bg)] text-[var(--primary)] font-semibold" : "text-[var(--text-primary)] hover:bg-[var(--surface-alt)] hover:text-[var(--text-primary)]"
      }`}
    >
      {title}
    </Link>
  );
}

export default function SpecialityPage() {
  return (
    <main className="min-h-screen bg-[var(--surface)]">

      {/* HERO */}
      <section className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)]" />
        <div className="absolute -top-24 -left-24 w-64 sm:w-72 h-64 sm:h-72 bg-[var(--hero-glow-one)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-[var(--hero-glow-one)] rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
          <div className="grid md:grid-cols-5 gap-8 lg:gap-10 items-center">
            <div className="md:col-span-3 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-[var(--chip-bg)] backdrop-blur px-4 py-1.5 text-xs font-medium mb-5 sm:mb-6">
                <Stethoscope className="h-4 w-4" />
                Red de especialistas
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-fredoka-one drop-shadow-sm mb-5 sm:mb-6">
                Especialidades que trabajan con ROMI
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 font-poppins">
                ROMI acompaña a profesionales de distintas especialidades de salud mental y médica, respetando siempre su forma de trabajar.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[["6+","Especialidades"],["100%","Adaptable"],["24/7","Soporte ROMI"]].map(([v,l]) => (
                  <div key={l}>
                    <div className="text-2xl sm:text-3xl font-bold font-fredoka-one">{v}</div>
                    <div className="text-xs sm:text-sm text-white/80 font-poppins">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="md:col-span-2">
              <nav className="rounded-3xl bg-[var(--surface-card-soft)] backdrop-blur border border-[var(--surface-card-border-soft)] p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-lg">
                <h2 className="text-[var(--primary)] font-fredoka-one text-xl flex items-center gap-2">
                  <Compass className="h-5 w-5" /> Navegación
                </h2>
                <SideLink href="#especialidades" title="Ver Especialidades" active />
                <SideLink href="#integracion" title="Cómo se integra ROMI" />
                <SideLink href="#contacto" title="Sumar tu especialidad" />
              </nav>
            </aside>
          </div>
        </div>
      </section>

      {/* ENFOQUE INTEGRADOR */}
      <section className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Reveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-fredoka-one text-[var(--primary)] mb-4">Enfoque Integrador</h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-poppins">
              ROMI no reemplaza al profesional, lo acompaña en la organización, seguimiento y comunicación.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-stretch">
            <Reveal type="left">
              <article className="rounded-3xl border border-[var(--surface-card-border-soft)] bg-gradient-to-br from-[var(--surface-card)] to-[var(--surface-alt)] shadow-sm p-6 sm:p-7 flex flex-col card-premium h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[var(--chip-bg)] rounded-xl p-2 icon-lift">
                    <Brain className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-[var(--text-primary)]">Enfoque integrador</h3>
                </div>
                <p className="text-sm text-[var(--text-body)] font-poppins mb-4">
                  ROMI no reemplaza al profesional, lo acompaña. Cada especialidad mantiene su enfoque clínico y ROMI se integra como apoyo para la organización, seguimiento y comunicación con las personas que atienden.
                </p>
                <ul className="space-y-3 text-sm text-[var(--text-body)] font-poppins">
                  {[
                    "Adaptable a distintos marcos teóricos y estilos de trabajo.",
                    "Útil tanto en consulta presencial como en línea.",
                    "Acompañamiento entre sesiones sin saturar al profesional.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[var(--primary)] rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal type="right">
              <aside className="rounded-3xl border border-[var(--surface-card-border-soft)] bg-gradient-to-br from-[var(--surface-card-soft)] to-[var(--surface-card)] shadow-sm p-6 sm:p-7 flex flex-col justify-between card-premium h-full">
                <div>
                  <p className="text-xs font-semibold text-[var(--primary)] mb-2">Para personas que buscan ayuda</p>
                  <h3 className="text-base sm:text-xl font-semibold text-[var(--text-primary)] mb-3">Encuentra el tipo de apoyo que necesitas</h3>
                  <p className="text-sm text-[var(--text-body)] font-poppins mb-4">
                    La sección de especialidades puede ayudar a orientar a las personas sobre qué tipo de profesional podría ser más adecuado según lo que están viviendo.
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--text-body)] font-poppins">
                    <li className="flex items-center gap-2"><CalendarClock className="h-4 w-4 text-[var(--primary)]" /><span>Información clara sobre cada especialidad.</span></li>
                    <li className="flex items-center gap-2"><Users className="h-4 w-4 text-[var(--primary)]" /><span>Enfoque en accesibilidad y acompañamiento.</span></li>
                  </ul>
                </div>
                <div className="mt-6">
                  <a href="/Services" className="w-full inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[var(--primary-hover)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-95">
                    Ver servicios que usan ROMI
                  </a>
                  <p className="mt-2 text-[11px] text-[var(--text-muted)] text-center font-poppins">
                    Puedes combinar la información de especialidades con los módulos de servicios para decidir cómo empezar.
                  </p>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GRID DE ESPECIALIDADES */}
      <section id="especialidades" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-fredoka-one text-[var(--primary)] mb-4">
              Especialidades que pueden trabajar con ROMI
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-poppins">
              La plataforma está pensada para adaptarse a distintas áreas, siempre con sensibilidad hacia la salud mental y el contexto de cada persona.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
            {specialties.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.name} type="scale" delay={i * 60}>
                  <article className="rounded-2xl border border-[var(--surface-card-border-soft)] bg-[var(--surface)] p-5 sm:p-6 shadow-sm card-premium group h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-[var(--chip-bg)] rounded-xl p-2 icon-lift">
                        <Icon className="h-5 w-5 text-[var(--primary)]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] font-fredoka-one">{s.name}</h3>
                    </div>
                    <p className="text-sm text-[var(--text-body)] font-poppins">{s.description}</p>
                    <p className="mt-3 text-xs sm:text-sm text-[var(--text-body)] font-poppins">
                      <span className="font-medium text-[var(--primary)]">Enfoque: </span>
                      {s.focus}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CÓMO SE INTEGRA EN EL FLUJO */}
      <section id="integracion" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 border-y border-[var(--surface-card-border-soft)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid gap-8 sm:gap-10 md:grid-cols-[1.2fr,1fr] items-start">
          <div>
            <Reveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-fredoka-one text-[var(--primary)]">
                ¿Cómo se integra ROMI en las distintas especialidades?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[var(--text-body)] font-poppins">
                Independientemente del modelo terapéutico o especialidad, ROMI se incorpora como un apoyo en la organización, la comunicación y el seguimiento, sin interferir con las decisiones clínicas.
              </p>
            </Reveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {flows.map((f, i) => (
                <Reveal key={f.step} type="scale" delay={i * 80}>
                  <div className="rounded-2xl border border-[var(--surface-card-border-soft)] bg-gradient-to-br from-[var(--surface-card)] to-[var(--surface-alt)] p-4 shadow-sm card-premium">
                    <span className="text-xs font-mono text-[var(--primary)] mb-1 inline-block font-semibold">{f.step}</span>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] font-fredoka-one">{f.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-[var(--text-body)] font-poppins">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal type="right">
            <aside className="rounded-2xl border border-[var(--surface-card-border-soft)] bg-gradient-to-br from-[var(--surface-card-soft)] to-[var(--surface-card)] p-5 sm:p-6 shadow-sm text-sm text-[var(--text-body)] font-poppins space-y-3 card-premium">
              <div className="flex items-center gap-2 mb-1">
                <MessageCircle className="h-5 w-5 text-[var(--primary)]" />
                <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] font-fredoka-one">Comunicación clara con las personas</h3>
              </div>
              <p>ROMI puede ayudar a explicar, en un lenguaje cercano, qué hace cada especialidad y qué pueden esperar las personas al iniciar un proceso de atención.</p>
              <p>Esto disminuye dudas, mejora la adherencia y permite que la primera consulta se viva con más claridad y menos incertidumbre.</p>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-gradient-to-r from-[var(--chip-bg)] via-[var(--chip-bg)] to-[var(--surface-card-soft)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Reveal type="left" className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)] mb-2">Profesionales y equipos</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-fredoka-one text-[var(--primary)]">¿Te gustaría sumar tu especialidad a ROMI?</h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--text-body)] font-poppins">
              Si trabajas en una especialidad de salud y quieres explorar cómo ROMI puede acompañar tus procesos, podemos conversar y diseñar juntos la mejor forma de integrarlo.
            </p>
          </Reveal>

          <Reveal type="right" className="flex flex-col gap-3 w-full md:w-auto md:min-w-[260px]">
            <a href="/Contact" className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-[var(--primary-hover)] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 active:scale-95">
              Contactar al equipo de ROMI
            </a>
            <p className="text-xs text-[var(--text-muted)] font-poppins">Cuéntanos tu especialidad, tu contexto y cómo imaginas el apoyo de ROMI en tu práctica.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
