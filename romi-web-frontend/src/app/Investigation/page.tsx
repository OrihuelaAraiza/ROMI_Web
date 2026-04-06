import {
  Beaker, BookOpenCheck, LineChart, ShieldCheck, Users,
  FileText, Sparkles, Compass, Download, BookOpen, Layers, Award, TrendingUp
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = { title: "ROMI — Investigación" };

const researchLines = [
  { title: "Salud mental y bienestar digital",     description: "Estudio del impacto de ROMI en la reducción de síntomas, adherencia al tratamiento y bienestar percibido." },
  { title: "Experiencia del paciente",             description: "Análisis de la satisfacción, accesibilidad y percepción de acompañamiento durante y entre consultas." },
  { title: "Eficiencia clínica",                   description: "Medición del tiempo en consulta, carga administrativa y organización de información clínica." },
];

const evidenceBlocks = [
  {
    tag: "Marco teórico",
    title: "ROMI se fundamenta en modelos basados en evidencia",
    points: [
      "Uso de principios de psicoeducación y acompañamiento continuo.",
      "Diseño centrado en la relación profesional–paciente.",
      "Integración con buenas prácticas de seguimiento clínico.",
    ],
  },
  {
    tag: "Evaluación continua",
    title: "Medimos, ajustamos y volvemos a medir",
    points: [
      "Análisis de uso real de la plataforma en consultas.",
      "Encuestas a profesionales y pacientes sobre la experiencia.",
      "Iteración de funcionalidades según hallazgos de investigación.",
    ],
  },
];

const publications = [
  { year: "En desarrollo",  title: "Protocolos para evaluar asistentes digitales en salud mental",    type: "Protocolo de estudio" },
  { year: "Próximamente",   title: "Impacto de ROMI en la organización de la consulta psicológica",   type: "Estudio observacional" },
];

export default function InvestigationPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d58b88] via-[#d79c9c] to-[#dabebd]" />
        <div className="absolute -top-24 -left-24 w-64 sm:w-72 h-64 sm:h-72 bg-[#edcccc]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-[#dabebd]/40 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 sm:pb-24">
          <div className="grid md:grid-cols-5 gap-8 lg:gap-10 items-start">
            <div className="md:col-span-3 text-white">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1 text-xs font-medium text-white/90 mb-4">
                <Beaker className="h-4 w-4" /> <span>Investigación y evidencia</span>
              </p>
              <h1 className="font-fredoka-one text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-sm">
                Investigación basada en <span className="text-[#edcccc]">evidencia</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 font-poppins max-w-xl">
                ROMI evoluciona a partir de datos clínicos reales, colaboración con profesionales y mejora continua enfocada en el bienestar y la práctica terapéutica.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                <a href="#lineas" className="inline-flex items-center gap-2 rounded-full bg-white px-5 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold text-[#d58b88] shadow hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                  <LineChart className="h-4 sm:h-5 w-4 sm:w-5" /> Líneas
                </a>
                <a href="#evidencia" className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-5 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold text-[#d58b88] border border-white/50 hover:bg-white hover:-translate-y-0.5 transition-all duration-200">
                  <BookOpenCheck className="h-4 sm:h-5 w-4 sm:w-5" /> Evidencia
                </a>
                <a href="#publicaciones" className="inline-flex items-center gap-2 rounded-full bg-[#c7d68f] px-5 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold text-white shadow hover:bg-[#bfcf82] hover:-translate-y-0.5 transition-all duration-200">
                  <FileText className="h-4 sm:h-5 w-4 sm:w-5" /> Publicaciones
                </a>
              </div>
              <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 max-w-md">
                <MiniMetric icon={Award}      value="10+"  label="Estudios" />
                <MiniMetric icon={TrendingUp} value="97%"  label="Adopción" />
                <MiniMetric icon={Layers}     value="1.2K" label="Datos analizados" />
              </div>
            </div>

            <aside className="md:col-span-2">
              <nav aria-label="Navegación investigación" className="rounded-3xl bg-white/80 backdrop-blur border border-[#d58b88]/20 p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-lg">
                <h2 className="text-[#d58b88] font-fredoka-one text-xl flex items-center gap-2"><Compass className="h-5 w-5" /> Navegación</h2>
                <SideLink active icon={LineChart}     label="Líneas" />
                <SideLink       icon={BookOpenCheck}  label="Evidencia" />
                <SideLink       icon={FileText}       label="Publicaciones" />
                <SideLink       icon={Users}          label="Colaboración" />
              </nav>
            </aside>
          </div>
        </div>
      </section>

      {/* LÍNEAS DE INVESTIGACIÓN */}
      <section id="lineas" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10 sm:space-y-12">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-fredoka-one text-[#d58b88]">Líneas de investigación</h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 font-poppins max-w-xl">
              Exploramos cómo la tecnología apoya la relación terapéutica y potencia la práctica clínica cotidiana sin sustituir el vínculo humano.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {researchLines.map((line, i) => (
              <Reveal key={line.title} type="scale" delay={i * 80}>
                <article className="rounded-3xl border border-[#d58b88]/20 bg-white shadow-sm p-5 sm:p-6 flex flex-col gap-3 card-premium h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#d58b88]/10 flex items-center justify-center icon-lift">
                    <LineChart className="h-5 w-5 text-[#d58b88]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 font-poppins">{line.title}</h3>
                  <p className="text-sm text-gray-600 font-poppins">{line.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVIDENCIA Y MÉTODOS */}
      <section id="evidencia" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 border-y border-[#d58b88]/20 bg-[#FDFBFA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid gap-8 sm:gap-12 md:grid-cols-[1.2fr,1fr] items-start">
          <div className="space-y-6 sm:space-y-8">
            {evidenceBlocks.map((block, i) => (
              <Reveal key={block.title} type="left" delay={i * 80}>
                <article className="rounded-3xl border border-[#d58b88]/20 bg-white p-5 sm:p-6 shadow-sm card-premium">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#d58b88] mb-1">{block.tag}</p>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 font-poppins">{block.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600 font-poppins">
                    {block.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <Sparkles className="mt-0.5 h-4 w-4 text-[#d58b88] shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal type="right">
            <aside className="rounded-3xl border border-[#d58b88]/20 bg-white p-5 sm:p-6 shadow-sm space-y-4 text-sm text-gray-600 font-poppins card-premium">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="h-5 w-5 text-[#d58b88]" />
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 font-poppins">Datos, ética y seguridad</h3>
              </div>
              <p>La investigación con ROMI respeta principios éticos, protección de datos y confidencialidad de la información de pacientes y profesionales.</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Uso responsable de datos anonimizados o agregados.</li>
                <li>Respeto a la normativa y comités correspondientes.</li>
                <li>Enfoque en beneficio y bienestar de las personas.</li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* PUBLICACIONES */}
      <section id="publicaciones" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8 sm:space-y-10">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-fredoka-one text-[#d58b88]">Publicaciones y producción</h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 font-poppins max-w-xl">Proyectos y documentos en curso que fortalecen el marco conceptual y clínico de ROMI.</p>
          </Reveal>

          <div className="space-y-4">
            {publications.map((pub, i) => (
              <Reveal key={pub.title} delay={i * 80}>
                <article className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-3xl border border-[#d58b88]/20 bg-white p-4 sm:p-5 shadow-sm card-premium">
                  <div>
                    <p className="text-xs font-semibold text-[#d58b88]">{pub.year}</p>
                    <p className="text-sm sm:text-base font-medium text-gray-800 font-poppins">{pub.title}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-poppins">{pub.type}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="colaboracion" className="relative left-1/2 -translate-x-1/2 w-screen bg-white border-t border-[#edcccc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
          <Reveal type="left" className="max-w-xl space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#d58b88]">Colaboración</p>
            <h2 className="text-2xl sm:text-3xl font-fredoka-one text-[#d58b88]">¿Te interesa investigar con ROMI?</h2>
            <p className="text-sm sm:text-base text-gray-600 font-poppins">Exploramos proyectos conjuntos, diseños de estudio y evaluaciones sobre impacto clínico y organizacional del asistente digital en salud mental.</p>
          </Reveal>
          <Reveal type="right" className="flex flex-col gap-3 w-full md:w-auto md:min-w-[260px]">
            <a href="/Contact" className="inline-flex items-center justify-center rounded-full bg-[#d58b88] px-6 py-3 text-sm font-semibold text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-95">
              Contactar equipo ROMI
            </a>
            <p className="text-xs text-gray-600 font-poppins">Comparte contexto, población y objetivos de investigación.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* ─── Helpers ─── */
function MiniMetric({ icon: Icon, value, label }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; value: string; label: string }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-white opacity-90" aria-hidden="true" />
        <span className="text-sm font-semibold text-white font-poppins">{value}</span>
      </div>
      <span className="text-[11px] tracking-wide uppercase text-white/70 font-poppins">{label}</span>
    </div>
  );
}

function SideLink({ icon: Icon, label, active = false }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; label: string; active?: boolean }) {
  const href = `#${label.toLowerCase().split(' ')[0]}`;
  const base = "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 border active:scale-[0.98]";
  if (active) {
    return (
      <a href={href} aria-current="page" className={`${base} bg-[#d58b88] text-white border-[#d58b88] shadow-sm hover:shadow-md`}>
        <Icon className="h-4 w-4" aria-hidden="true" /> {label}
      </a>
    );
  }
  return (
    <a href={href} className={`${base} bg-white/80 text-[#2d2d2d] border-[#d58b88]/20 hover:bg-[#edcccc]/60 hover:border-[#d58b88]/40`}>
      <Icon className="h-4 w-4 text-[#d58b88]" aria-hidden="true" /> {label}
    </a>
  );
}
