import {
  BookOpen, GraduationCap, Calculator, Clock3, Users, CalendarDays,
  PlayCircle, Award, TrendingUp, Layers, Sparkles, Compass, ExternalLink,
  Globe, FlaskConical,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { getLocale } from "next-intl/server";
import EnglishPublicPage from "@/components/EnglishPublicPage";

/* ─── Data ─── */

const laionVideos = [
  { title: "Panorama regional de la atención primaria del cáncer en Latinoamérica", duration: "1h 36min", audience: "Para oncólogos", cost: "Sin costo", link: "https://www.youtube.com/watch?v=bTkVX_BJH4o", available: true },
  { title: "Conversatorio LAION — Sesión 2", duration: "Por anunciar", audience: "Para oncólogos", cost: "Sin costo", link: null, available: false },
  { title: "Conversatorio LAION — Sesión 3", duration: "Por anunciar", audience: "Para oncólogos", cost: "Sin costo", link: null, available: false },
];

const calculators = [
  { title: "IMC Adultos",                  description: "Índice de Masa Corporal para adultos.",                              fields: ["Peso (kg)", "Altura (cm)"],                                                               link: "https://www.cdc.gov/bmi/es/adult-calculator/index.html" },
  { title: "IMC Pediátrico",               description: "IMC para niños y adolescentes.",                                     fields: ["Peso (kg)", "Altura (cm)", "Edad", "Sexo"],                                               link: "https://www.cdc.gov/bmi/es/child-teen-calculator/index.html" },
  { title: "Cockcroft-Gault / eGFR",       description: "Estimación de la tasa de filtración glomerular.",                    fields: ["Peso (kg)", "Creatinina sérica", "Edad", "Altura (cm)", "Sexo"],                          link: "https://www.rccc.eu/geta/IFG.html" },
  { title: "CHA₂DS₂-VASc",                description: "Riesgo cardiovascular y de tromboembolismo (>30 años).",             fields: ["Edad", "Sexo", "Presión arterial", "Diabetes", "ICC", "Enfermedad vascular / ACV previo"], link: "https://www.rccc.eu/ppc/guias/FA/CHA2DS2VASc.html" },
  { title: "Calculadora SOFA",             description: "Evaluación de falla orgánica secuencial.",                           fields: ["PaO₂/FiO₂", "Plaquetas", "PAM", "GCS", "Bilirrubinas", "Creatinina / diuresis"],           link: "https://www.rccc.eu/ppc/indicadores/sofa.html" },
  { title: "Khorana Score (TEP / Cáncer)", description: "Riesgo de tromboembolismo venoso en paciente oncológico.",           fields: ["Sitio del tumor", "Plaquetas preQT", "Hemoglobina", "Leucocitos preQT", "IMC"],              link: "https://www.mdcalc.com/calc/3315/khorana-risk-score-venous-thromboembolism-cancer-patients" },
  { title: "Cálculos Hemato-oncológicos",  description: "Eritrocitos, reticulocitos, leucocitos, plaquetas, hierro.",         fields: ["Eritrocitos", "Reticulocitos", "Leucocitos", "Plaquetas", "Hierro"],                          link: "https://scymed.com/es/smnxpf/smnxpf.htm" },
  { title: "Karnofsky / ECOG",             description: "Indicador pronóstico funcional y predictor de mortalidad.",          fields: ["Estado funcional del paciente"],                                                          link: "https://www.rccc.eu/ppc/indicadores/karnofski.html" },
];

const societies = [
  { title: "ESMO", subtitle: "European Society for Medical Oncology",     link: "https://www.esmo.org/" },
  { title: "ASCO", subtitle: "American Society of Clinical Oncology",     link: "https://www.asco.org/" },
  { title: "SMEO", subtitle: "Sociedad Mexicana de Oncología",             link: "https://www.smeo.org.mx/" },
];

/* ─── Page ─── */

export default async function FormationPage() {
  if (await getLocale() === "en") return <EnglishPublicPage kind="education" />;
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
              <h1 className="font-fredoka-one text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-sm">
                Formación Médica <span className="text-[var(--secondary)]">Integral</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 font-poppins max-w-xl">
                Aprende, actualiza y certifica tus habilidades clínicas con contenido curado, casos reales y recursos de primer nivel.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                <a href="#espacios" className="inline-flex items-center gap-2 rounded-full bg-[var(--surface)] px-5 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold text-[var(--primary)] shadow hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                  <BookOpen className="h-4 sm:h-5 w-4 sm:w-5" /> Espacios Académicos
                </a>
                <a href="#talleres" className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-card-soft)] backdrop-blur px-5 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold text-[var(--primary)] border border-[var(--surface-card-border-soft)] hover:bg-[var(--surface)] hover:-translate-y-0.5 transition-all duration-200">
                  <Users className="h-4 sm:h-5 w-4 sm:w-5" /> Talleres
                </a>
                <a href="#calculadoras" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold text-white shadow hover:bg-[var(--primary-hover)] hover:-translate-y-0.5 transition-all duration-200">
                  <Calculator className="h-4 sm:h-5 w-4 sm:w-5" /> Calculadoras
                </a>
              </div>
              <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 max-w-md">
                <MiniMetric icon={Award}      value="LAION" label="Programa IA" />
                <MiniMetric icon={TrendingUp} value="97%"   label="Satisfacción" />
                <MiniMetric icon={Layers}     value="8"     label="Calculadoras" />
              </div>
            </div>

            <aside className="md:col-span-2">
              <nav aria-label="Categorías" className="rounded-3xl bg-[var(--surface-card-soft)] backdrop-blur border border-[var(--surface-card-border-soft)] p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-lg">
                <h2 className="text-[var(--primary)] font-fredoka-one text-xl flex items-center gap-2">
                  <Compass className="h-5 w-5" /> Navegación
                </h2>
                <SideLink active icon={BookOpen}     label="Espacios Académicos" href="#espacios" />
                <SideLink       icon={Users}         label="Talleres"            href="#talleres" />
                <SideLink       icon={Calculator}    label="Calculadoras"        href="#calculadoras" />
                <SideLink       icon={Globe}         label="Sociedades Médicas"  href="#sociedades" />
                <SideLink       icon={GraduationCap} label="Certificaciones"     href="#certificaciones" />
              </nav>
            </aside>
          </div>
        </div>
      </section>

      {/* ESPACIOS ACADÉMICOS — LAION */}
      <section id="espacios" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 space-y-10 sm:space-y-14">
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--chip-bg)] px-4 py-1.5 text-xs font-medium text-[var(--primary)] mb-4">
              <FlaskConical className="h-4 w-4" /> Iniciativa regional
            </p>
            <h2 className="text-3xl sm:text-4xl font-fredoka-one text-[var(--primary)] mb-4 sm:mb-5">Espacios Académicos</h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-poppins max-w-2xl mx-auto">
              Contenido académico curado para profesionales de la salud. En este espacio encontrarás recursos del{" "}
              <strong>Programa Latinoamericano de Inteligencia Artificial en Oncología (LAION)</strong>, una iniciativa regional que busca fortalecer la detección, el manejo y el cuidado integral del cáncer en América Latina mediante la integración responsable de la inteligencia artificial.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {laionVideos.map((video, i) => (
              <Reveal key={video.title} type="scale" delay={i * 80}>
                <article className="group rounded-3xl border border-[var(--surface-card-border-soft)] bg-[var(--surface)] shadow-sm overflow-hidden flex flex-col card-premium h-full">
                  <div className="relative h-32 sm:h-36 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center overflow-hidden">
                    <PlayCircle className="h-10 sm:h-12 w-10 sm:w-12 text-white/70 group-hover:scale-110 transition-transform duration-300" />
                    {!video.available && (
                      <span className="absolute top-3 right-3 rounded-full bg-[var(--chip-bg)] backdrop-blur px-3 py-1 text-xs font-medium text-white">Próximamente</span>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col gap-4">
                    <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] font-poppins leading-snug">{video.title}</h3>
                    <div className="space-y-1 text-xs text-[var(--text-muted)] font-poppins">
                      <p className="flex items-center gap-2"><Clock3 className="h-3.5 w-3.5 text-[var(--primary)]" /> {video.duration}</p>
                      <p className="flex items-center gap-2"><Users  className="h-3.5 w-3.5 text-[var(--primary)]" /> {video.audience}</p>
                      <p className="text-[var(--primary)] font-medium">{video.cost}</p>
                    </div>
                    <div className="mt-auto">
                      {video.available && video.link ? (
                        <a href={video.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 px-5 py-2.5 text-sm font-medium text-white shadow active:scale-95">
                          <PlayCircle className="h-4 w-4" /> Acceder
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[var(--surface-alt)] px-5 py-2.5 text-sm font-medium text-[var(--text-muted)] cursor-not-allowed">Próximamente</span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Impulsa tu Carrera */}
      <section className="relative left-1/2 -translate-x-1/2 w-screen py-16 sm:py-20 bg-[var(--surface)] border-t border-[var(--secondary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          <Reveal className="text-center space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-fredoka-one text-[var(--primary)]">Impulsa tu Carrera Médica Hoy</h2>
            <p className="text-sm sm:text-base font-poppins max-w-2xl mx-auto text-[var(--text-body)]">
              Accede a rutas de formación, espacios académicos y recursos exclusivos que elevan tu perfil profesional.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <a href="#espacios" className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-95">
                <GraduationCap className="h-4 sm:h-5 w-4 sm:w-5" /> Espacios Académicos
              </a>
              <a href="#calculadoras" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-white shadow hover:bg-[var(--primary-hover)] hover:-translate-y-0.5 transition-all duration-200 active:scale-95">
                <Sparkles className="h-4 sm:h-5 w-4 sm:w-5" /> Calculadoras
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-[var(--surface-card-border-soft)] bg-gradient-to-br from-[var(--surface-card-soft)] to-[var(--surface-card-soft)] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-6 card-premium">
              <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-[var(--primary)] flex items-center justify-center shadow icon-lift">
                <GraduationCap className="h-6 sm:h-7 w-6 sm:w-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] font-poppins">entrENARMe</h3>
                  <span className="rounded-full bg-[var(--chip-bg)] px-3 py-0.5 text-xs font-medium text-[var(--primary)]">Próximamente</span>
                </div>
                <p className="text-sm text-[var(--text-body)] font-poppins leading-relaxed">
                  Accede al simulador de entrenamiento para el ENARM y fortalece tu preparación con una experiencia práctica, enfocada y alineada con tus objetivos.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TALLERES */}
      <section id="talleres" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-[var(--surface)] border-t border-[var(--secondary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8 sm:space-y-10">
          <Reveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-fredoka-one text-[var(--primary)] mb-4">Cursos y Talleres Virtuales</h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-poppins">Eventos virtuales para el intercambio de conocimiento médico.</p>
          </Reveal>

          <Reveal type="scale" delay={100}>
            <div className="rounded-3xl border-2 border-dashed border-[var(--surface-card-border-soft)] bg-[var(--surface-alt)] p-10 sm:p-12 flex flex-col items-center gap-4 text-center">
              <CalendarDays className="h-10 sm:h-12 w-10 sm:w-12 text-[var(--primary)]" />
              <p className="text-base sm:text-lg font-semibold text-[var(--text-primary)] font-poppins">Cursos y talleres virtuales para el intercambio de conocimiento</p>
              <p className="text-2xl font-fredoka-one text-[var(--primary)]">Próximamente</p>
              <p className="text-sm text-[var(--text-muted)] font-poppins max-w-md">Estamos desarrollando talleres especializados. Si LAION desarrolla este formato, lo encontrarás aquí.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CALCULADORAS MÉDICAS */}
      <section id="calculadoras" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-[var(--surface-alt)] border-t border-[var(--surface-card-border-soft)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Reveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-fredoka-one text-[var(--primary)] mb-4">Calculadoras Médicas</h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-poppins">Herramientas de apoyo clínico validadas. Cada calculadora abre en una nueva pestaña con el recurso externo oficial.</p>
          </Reveal>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {calculators.map((calc, i) => (
              <Reveal key={calc.title} type="scale" delay={i * 50}>
                <article className="rounded-3xl border border-border bg-[var(--surface)] shadow-sm p-5 sm:p-6 flex flex-col justify-between card-premium h-full">
                  <div>
                    <div className="flex h-11 sm:h-12 w-11 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] mb-4 icon-lift">
                      <Calculator className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] font-poppins">{calc.title}</h3>
                    <p className="mt-2 text-xs text-[var(--text-muted)] font-poppins leading-relaxed">{calc.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {calc.fields.map((f) => (
                        <span key={f} className="rounded-full bg-[var(--chip-bg)] border border-[var(--surface-card-border-soft)] px-2 py-0.5 text-[10px] font-medium text-[var(--text-body)]">{f}</span>
                      ))}
                    </div>
                  </div>
                  <a href={calc.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 px-5 py-2 text-xs font-medium text-white shadow active:scale-95">
                    <ExternalLink className="h-3.5 w-3.5" /> Abrir calculadora
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIEDADES MÉDICAS */}
      <section id="sociedades" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-[var(--surface)] border-t border-[var(--surface-card-border-soft)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Reveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-fredoka-one text-[var(--primary)] mb-4">Sociedades Médicas</h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-poppins">Referencias a las principales sociedades médicas especializadas a nivel internacional.</p>
          </Reveal>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            {societies.map((item, i) => (
              <Reveal key={item.title} type="scale" delay={i * 80}>
                <div className="rounded-2xl border border-[var(--surface-card-border-soft)] bg-[var(--surface)] p-5 sm:p-6 shadow-sm text-center card-premium">
                  <div className="w-11 sm:w-12 h-11 sm:h-12 mx-auto rounded-full bg-[var(--chip-bg)] flex items-center justify-center mb-4 icon-lift">
                    <Globe className="h-5 sm:h-6 w-5 sm:w-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg text-[var(--text-primary)] font-fredoka-one">{item.title}</h3>
                  <p className="text-sm text-[var(--text-body)] font-poppins mb-4">{item.subtitle}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white text-sm rounded-full hover:bg-[var(--primary-hover)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 font-poppins shadow active:scale-95">
                    Visitar sitio <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

/* ─── Helper components ─── */

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

function SideLink({ icon: Icon, label, href, active = false }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; label: string; href: string; active?: boolean }) {
  const base = "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 border active:scale-[0.98]";
  if (active) {
    return (
      <a href={href} aria-current="page" className={`${base} bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm hover:shadow-md`}>
        <Icon className="h-4 w-4" aria-hidden="true" /> {label}
      </a>
    );
  }
  return (
    <a href={href} className={`${base} bg-[var(--surface-card-soft)] text-[var(--text-primary)] border-[var(--surface-card-border-soft)] hover:bg-[var(--surface-card-soft)] hover:border-[var(--chip-border)]`}>
      <Icon className="h-4 w-4 text-[var(--primary)]" aria-hidden="true" /> {label}
    </a>
  );
}
