import Image from "next/image";
import { BookOpen, BrainCircuit, Globe, Heart, Lightbulb, Rocket, Shield, Trophy, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import UserMapSection from "@/components/UserMapSection";
import { getLocale } from "next-intl/server";
import EnglishPublicPage from "@/components/EnglishPublicPage";

const values = [
  { icon: Heart, title: "Compromiso", text: "Dedicados a mejorar la calidad de vida a traves de la innovacion medica." },
  { icon: Lightbulb, title: "Altruismo", text: "Impulsamos nuestras acciones con vocacion de servicio y sentido de beneficio colectivo." },
  { icon: Globe, title: "Filantropia", text: "Promovemos una vision de impacto social orientada al bien comun y al acceso responsable a la innovacion en salud." },
  { icon: Shield, title: "Seguridad", text: "Protegemos la informacion medica con altos estandares de seguridad." },
  { icon: Users, title: "Colaboracion", text: "Promovemos el trabajo interdisciplinario como base para transformar la atencion y el aprendizaje." },
  { icon: BookOpen, title: "Rigor", text: "Promovemos contenidos, recursos y decisiones sustentados en criterios solidos y enfoque profesional." },
];

const awards = [
  {
    Icon: Rocket,
    org: "Talent Land",
    title: "Ganadores Startup a la Cuesta",
    desc: "Reconocidos entre las startups mas prometedoras del ecosistema de innovacion en Mexico.",
    badge: "Talent Land 2025",
  },
  {
    Icon: Globe,
    org: "Youth Empowerment Fund",
    title: "Ganadores del Grant Internacional",
    desc: "Premio internacional por impacto social en salud digital otorgado a nivel global.",
    badge: "YEF 2025",
  },
  {
    Icon: BrainCircuit,
    org: "Intel · Acelerado Mexico con IA",
    title: "Top 10 Proyectos de IA",
    desc: "Seleccionados entre los 10 mejores proyectos de inteligencia artificial de Mexico.",
    badge: "Intel 2025",
  },
] as const;

export default async function Page() {
  if (await getLocale() === "en") return <EnglishPublicPage kind="about" />;

  return (
    <main className="min-h-screen bg-[var(--surface)]">
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-gradient-romi">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 text-white sm:px-6 sm:py-20 lg:grid-cols-[1fr,0.9fr] lg:px-8">
          <Reveal type="left" className="self-center">
            <p className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white/90">
              Sobre nosotros
            </p>
            <h1 className="mt-5 font-fredoka-one text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Tecnologia, medicina y criterio humano para una salud mas cercana
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 font-poppins sm:text-base">
              HubROMI nace para democratizar el acceso a la salud mediante inteligencia artificial, educacion medica, telemedicina y herramientas clinicas que fortalecen el trabajo de los profesionales.
            </p>
          </Reveal>
          <Reveal type="right">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <Image src="/images/doctor.webp" alt="Profesional de salud usando tecnologia ROMI" fill priority sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <Reveal className="text-center">
            <h2 className="font-fredoka-one text-3xl text-primary sm:text-4xl">¿Quienes somos?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[var(--text-body)] font-poppins sm:text-base">
              Somos un equipo multidisciplinario de medicos, ingenieros y especialistas en salud digital. Integramos inteligencia artificial, telemedicina, educacion medica continua y gestion clinica en un ecosistema que acompana a pacientes y profesionales.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "16k+", label: "Chats atendidos" },
              { value: "15+", label: "Paises" },
              { value: "24/7", label: "Disponibilidad IA" },
              { value: "100%", label: "Dedicacion" },
            ].map((stat, i) => (
              <Reveal key={stat.label} type="scale" delay={i * 60}>
                <div className="rounded-3xl border border-[var(--surface-card-border)] bg-[var(--surface-card-soft)] p-6 text-center card-premium">
                  <p className="font-fredoka-one text-3xl text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-[var(--text-body)] font-poppins">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 border-y border-[var(--surface-card-border-soft)] bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Mision",
                text: "Democratizar el acceso a la atencion medica de calidad mediante tecnologia innovadora, conectando profesionales de la salud con herramientas avanzadas que mejoran los resultados clinicos.",
              },
              {
                title: "Vision",
                text: "Ser una plataforma lider en salud digital en Latinoamerica, transformando la medicina a traves de inteligencia artificial y creando un futuro donde la atencion de excelencia sea mas accesible.",
              },
            ].map(({ title, text }, i) => (
              <Reveal key={title} type={i === 0 ? "left" : "right"}>
                <article className="h-full rounded-3xl border border-[var(--surface-card-border)] bg-[var(--surface)] p-6 card-premium sm:p-8">
                  <h3 className="font-fredoka-one text-2xl text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)] font-poppins sm:text-base">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <Reveal className="mb-9 text-center">
            <h2 className="font-fredoka-one text-3xl text-primary sm:text-4xl">Nuestros valores</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} type="scale" delay={i * 60}>
                <article className="h-full rounded-3xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-5 card-premium">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--chip-bg)] text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)] font-poppins">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <UserMapSection />

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <Reveal className="mb-10 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Trophy size={13} /> Logros 2025
            </span>
            <h2 className="font-fredoka-one text-3xl text-primary sm:text-4xl">Reconocimientos</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--text-body)] font-poppins sm:text-base">
              Distinciones que respaldan nuestro impacto en salud digital e innovacion.
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
            {awards.map(({ Icon, org, title, desc, badge }, i) => (
              <Reveal key={title} type="scale" delay={i * 80}>
                <article className="relative flex h-full flex-col rounded-3xl border border-[var(--surface-card-border)] bg-[var(--surface-card-soft)] p-5 card-premium">
                  <span className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-white">
                    {badge}
                  </span>
                  <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-[var(--surface-card)] text-primary">
                    <Icon size={26} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{org}</p>
                  <h3 className="mt-1 text-base font-bold leading-snug text-[var(--text-primary)] sm:text-lg">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)] font-poppins">{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
