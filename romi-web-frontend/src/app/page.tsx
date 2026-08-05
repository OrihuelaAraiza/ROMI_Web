import Image from "next/image";
import { ArrowRight, Building2, CalendarDays, ClipboardCheck, GraduationCap, HeartPulse, MessageCircle, Microscope, Share2, ShieldCheck, Sparkles, Stethoscope, Video } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getLocale, getTranslations } from "next-intl/server";
import EnglishHomePage from "@/components/EnglishHomePage";
import { ROMI_CONTACT } from "@/lib/contact";

const carePoints = [
  {
    icon: Stethoscope,
    title: "Orientación clara",
    text: "ROMI traduce dudas frecuentes de salud a lenguaje cercano y ayuda a identificar el siguiente paso adecuado.",
  },
  {
    icon: ClipboardCheck,
    title: "Seguimiento ordenado",
    text: "Recopila contexto antes de la consulta y facilita que el profesional tenga información útil desde el inicio.",
  },
  {
    icon: ShieldCheck,
    title: "Criterio clínico al centro",
    text: "La IA acompaña el proceso, pero la decisión médica permanece siempre en manos del especialista.",
  },
];

const mobilePanelImages = [
  { src: "/images/talent-land-1.webp", alt: "Equipo ROMI en evento", label: "Comunidad" },
  { src: "/images/romiportada.webp", alt: "ROMI en portada", label: "Asistente virtual" },
  { src: "/images/congreso.webp", alt: "ROMI en congreso médico", label: "Evidencia" },
  { src: "/images/doctor.webp", alt: "Profesional médico usando ROMI", label: "Consultorio" },
];

const publicModules = [
  {
    icon: MessageCircle,
    title: "Asistente ROMI",
    text: "La versión gratuita orienta dudas generales y ayuda a decidir el siguiente paso sin sustituir una consulta médica.",
    href: ROMI_CONTACT.whatsapp.url,
    cta: "Abrir WhatsApp",
    external: true,
  },
  {
    icon: Video,
    title: "Telesalud",
    text: "Consulta remota, preparación previa y seguimiento claro cuando el usuario necesita conectar con especialistas.",
    href: "/Telesalud",
    cta: "Ver telesalud",
  },
  {
    icon: GraduationCap,
    title: "Formación médica",
    text: "Recursos, espacios académicos y herramientas como LAION para profesionales de salud.",
    href: "/Formation",
    cta: "Explorar recursos",
  },
  {
    icon: Microscope,
    title: "Investigación",
    text: "Líneas de evidencia, publicaciones y evaluación clínica para sostener el desarrollo responsable de ROMI.",
    href: "/Investigation",
    cta: "Ver evidencia",
  },
];

export default async function Home() {
  if (await getLocale() === "en") return <EnglishHomePage />;
  const t = await getTranslations("home");

  return (
    <main className="min-h-screen">
      <section className="romi-home-hero relative overflow-hidden rounded-[1.5rem] romi-hero-gradient pt-8 pb-10 mt-6 sm:mt-10 lg:mt-14">
        <div className="romi-hero-ambient" aria-hidden="true">
          <span className="romi-hero-orb romi-hero-orb-a" />
          <span className="romi-hero-orb romi-hero-orb-b" />
          <span className="romi-hero-orb romi-hero-orb-c" />
          <span className="romi-hero-cross romi-hero-cross-a" />
          <span className="romi-hero-cross romi-hero-cross-b" />
          <span className="romi-hero-cross romi-hero-cross-c" />
          <svg className="romi-hero-ekg" viewBox="0 0 960 120" preserveAspectRatio="none">
            <path d="M0 62H155l18-18 18 38 18-20h92l18-48 22 92 20-44h138l18-18 18 38 18-20h92l18-48 22 92 20-44h255" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-[1fr,0.9fr]">
            <div className="text-center md:text-left">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--hero-text)]">
                <Sparkles className="h-4 w-4" />
                ROMI por aquí
              </p>
              <h1 className="font-fredoka-one text-[68px] leading-none tracking-widest text-[var(--hero-text)] drop-shadow-lg sm:text-[88px] lg:text-[112px]">
                ROMI
              </h1>
              <h2 className="mt-3 text-2xl text-[var(--hero-text)] font-fredoka-one sm:text-3xl md:text-4xl">
                {t("tagline")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl px-2 text-sm text-[var(--hero-text-muted)] font-poppins sm:text-base md:mx-0 md:px-0 md:text-lg">
                {t("description")}
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                <a href={ROMI_CONTACT.whatsapp.url} target="_blank" rel="noopener noreferrer" className="romi-action">
                  Probar ROMI gratis
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a href="/apps" className="romi-action romi-action-secondary">
                  Ver demos ROMI
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm md:max-w-md">
              <Image
                src="/images/romi-hero.webp"
                alt="ROMI asistente virtual"
                width={800}
                height={800}
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Escoge tu experiencia</p>
            <h2 className="mt-2 font-fredoka-one text-3xl text-[var(--primary)] sm:text-4xl">
              ROMI acompaña a pacientes y consultorios
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--text-body)] font-poppins sm:text-base">
              La misma identidad, dos formas de uso: orientación gratuita para usuarios y una versión de consultorio pensada para potenciar el trabajo clínico.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {[
              {
                icon: MessageCircle,
                eyebrow: "Para pacientes",
                title: "Chat ROMI gratuito",
                text: "Resuelve dudas generales, recibe orientación inicial y encuentra un camino más claro para cuidar tu salud.",
                cta: "Chatear ahora",
                href: ROMI_CONTACT.whatsapp.url,
                external: true,
              },
              {
                icon: Building2,
                eyebrow: "Para consultorios",
                title: "ROMI para tu práctica",
                text: "Un asistente de IA que organiza información, acompaña el seguimiento y fortalece tu criterio con contenido de vanguardia.",
                cta: "Registrarme para el lanzamiento",
                href: "/Contact",
                external: false,
              },
            ].map(({ icon: Icon, eyebrow, title, text, cta, href, external }, i) => (
              <Reveal key={title} type={i === 0 ? "left" : "right"}>
                <article className="flex h-full flex-col rounded-3xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-5 shadow-sm card-premium sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-primary">{eyebrow}</p>
                      <h3 className="mt-1 font-fredoka-one text-2xl text-[var(--text-primary)]">{title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-body)] font-poppins sm:text-base">{text}</p>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="romi-action mt-5 self-start"
                  >
                    {cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 border-y border-[var(--surface-card-border-soft)] bg-[var(--surface-alt)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[0.9fr,1.1fr] lg:px-8">
          <Reveal type="left" className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Atención médica integral</p>
            <h2 className="font-fredoka-one text-3xl text-[var(--primary)] sm:text-4xl">
              Información, acompañamiento y herramientas en un mismo ecosistema
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-body)] font-poppins sm:text-base">
              ROMI no se presenta como reemplazo del médico. Funciona como una capa de apoyo que ayuda al usuario a entender, prepararse y dar seguimiento, mientras el profesional mantiene el control clínico.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {carePoints.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} type="scale" delay={i * 80}>
                <article className="h-full rounded-3xl border border-[var(--surface-card-border-soft)] bg-[var(--surface)] p-5 card-premium">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--chip-bg)] text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[var(--text-primary)]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)] font-poppins">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <Reveal className="mb-9 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Servicios principales</p>
            <h2 className="mt-2 font-fredoka-one text-3xl text-[var(--primary)] sm:text-4xl">
              Un ecosistema público para empezar sin fricción
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-body)] font-poppins sm:text-base">
              El primer contacto con ROMI puede ser gratuito, informativo o profesional. Cada módulo abre una puerta clara sin obligar al usuario a registrarse antes de entender el valor.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {publicModules.map(({ icon: Icon, title, text, href, cta, external }, i) => (
              <Reveal key={title} type="scale" delay={i * 60}>
                <article className="flex h-full flex-col rounded-3xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-5 card-premium">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--chip-bg)] text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-body)] font-poppins">{text}</p>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-[var(--primary-hover)]"
                  >
                    {cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <Reveal className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-primary">ROMI en movimiento</p>
              <h2 className="mt-2 font-fredoka-one text-3xl text-[var(--primary)] sm:text-4xl">
                Un panel vivo de comunidad, salud e innovación
              </h2>
            </div>
            <a href="/Presentation" className="romi-action romi-action-secondary self-start sm:self-auto">
              Conocer el proyecto
              <HeartPulse className="h-4 w-4" />
            </a>
          </Reveal>

          <div className="flex snap-x gap-4 overflow-x-auto pb-3 sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">
            {mobilePanelImages.map(({ src, alt, label }) => (
              <div key={src} className="group relative h-72 min-w-[78%] snap-center overflow-hidden rounded-3xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] shadow-sm sm:min-w-0">
                <Image src={src} alt={alt} fill sizes="(min-width: 768px) 25vw, 80vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--romi-ink)]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              ["16k+", "interacciones atendidas"],
              ["24/7", "disponibilidad del asistente"],
              ["IA + clínica", "apoyo sin sustituir al especialista"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-3xl border border-[var(--surface-card-border-soft)] bg-[var(--surface-card-soft)] p-5 text-center">
                <p className="font-fredoka-one text-3xl text-primary">{value}</p>
                <p className="mt-1 text-sm text-[var(--text-body)] font-poppins">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 border-y border-[var(--surface-card-border-soft)] bg-[var(--surface-alt)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[0.8fr,1.2fr] lg:px-8">
          <Reveal type="left" className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-white">
              <Share2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-primary">Ayuda a quien lo necesita</p>
              <h2 className="mt-2 font-fredoka-one text-2xl text-primary sm:text-3xl">Comparte la versión gratuita de ROMI</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)] font-poppins">
                Cuando una persona no sabe por dónde empezar, compartir ROMI puede darle orientación inicial, lenguaje claro y una ruta segura para buscar apoyo profesional.
              </p>
            </div>
          </Reveal>
          <Reveal type="right" className="grid gap-3 sm:grid-cols-3">
            {[
              "Disponible desde WhatsApp",
              "Orientación general 24/7",
              "Canalización hacia especialistas",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--surface-card-border-soft)] bg-[var(--surface)] p-4 text-sm font-semibold text-[var(--text-primary)] card-premium">
                {item}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 text-white sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-white/70">Próximo paso</p>
            <h2 className="mt-1 font-fredoka-one text-2xl sm:text-3xl">Explora las demos ROMI</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/80 font-poppins">
              Revisa los expedientes, agenda virtual y proyectos educativos que ya están listos para demostración.
            </p>
          </div>
          <a href="/apps" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
            Ir a Apps
            <CalendarDays className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
