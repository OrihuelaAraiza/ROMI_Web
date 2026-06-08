"use client";

import { Smartphone, Brain, Video, Activity, Zap, Shield, Heart, Compass, MonitorSmartphone, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLocale, useTranslations } from "next-intl";
import FeatureCard from "@/components/FeatureCard";
import SectionHeader from "@/components/SectionHeader";
import RomiCTA from "@/components/RomiCTA";
import Panel from "@/components/Panel";
import { ROMI_CONTACT } from "@/lib/contact";
import { LEGACY_APPS } from "@/lib/legacyApps";

function SideLink({ href, title, active = false }: { href: string; title: string; active?: boolean }) {
  return active ? (
    <a href={href} aria-current="page" className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 bg-[var(--primary)] text-white border border-[var(--primary)] hover:bg-[var(--primary-hover)] active:scale-[0.98]">
      {title}
    </a>
  ) : (
    <a href={href} className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--surface-card-border-soft)] hover:bg-[var(--surface-card-soft)] hover:border-[var(--chip-border)] active:scale-[0.98]">
      {title}
    </a>
  );
}

function Hero() {
  const t = useTranslations("services");
  return (
    <section className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)]" />
      <div className="absolute -top-24 -left-24 w-64 sm:w-72 h-64 sm:h-72 bg-[var(--hero-glow-one)] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-[var(--hero-glow-one)] rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-10 items-center">
          <div className="md:col-span-3 text-white">
            <h1 className="font-fredoka-one text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-sm">
              {t("title")} <span className="text-[var(--secondary)]">{t("titleAccent")}</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 font-poppins max-w-xl">
              {t("hero")}
            </p>
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-md">
              {[["24/7",t("availability")],["+50K",t("users")],["98%",t("satisfaction")]].map(([v,l]) => (
                <div key={l}>
                  <p className="text-2xl sm:text-3xl font-fredoka-one text-white">{v}</p>
                  <p className="text-[11px] sm:text-xs text-white/80 font-poppins">{l}</p>
                </div>
              ))}
            </div>
          </div>
          
          <aside className="md:col-span-2">
            <nav aria-label="Categorías" className="rounded-3xl bg-[var(--surface-card-soft)] backdrop-blur border border-[var(--surface-card-border-soft)] p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-lg">
              <h2 className="text-[var(--primary)] font-fredoka-one text-xl flex items-center gap-2">
                <Compass className="h-5 w-5" /> {t("navigation")}
              </h2>
              <SideLink href="#servicios" title={t("ourServices")} active />
              <SideLink href="#caracteristicas" title={t("features")} />
              <SideLink href="#apps" title={t("legacyTitle")} />
              <SideLink href="#cta" title={t("start")} />
            </nav>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ServiciosSection() {
  const t = useTranslations("services");
  const english = useLocale() === "en";
  const cards = english ? [
    {
      gradient: "from-[var(--primary)] to-[var(--accent)]", icon: Brain, title: "ROMI Assistant",
      desc: "Latest-generation medical AI available 24/7 for questions, analysis and personalized recommendations.",
	      items: ["Intelligent symptom analysis", "Available on WhatsApp", "Up-to-date medical database"],
	      cta: {href: ROMI_CONTACT.whatsapp.url, label: t("whatsapp"), external: true},
	    },
    {
      gradient: "from-[var(--primary)] to-[var(--accent)]", icon: Smartphone, title: "Mobile App",
	      desc: "Your doctor in your pocket. AI chat, health monitoring and specialist connections.",
	      items: ["Real-time medical chat", "Symptom monitoring", "Secure medical history"],
	      cta: {href: ROMI_CONTACT.whatsapp.url, label: t("whatsapp"), external: true},
	    },
    {
      gradient: "from-[var(--accent)] to-[var(--secondary)]", icon: Video, title: "Telehealth",
      desc: "Remote consultations with certified specialists from anywhere.",
      items: ["Certified doctors", "Flexible appointments", "Digital prescriptions"],
      cta: {href: "/doctores", label: "Schedule Appointment", color: "text-[var(--accent)]"},
    },
    {
      gradient: "from-[var(--primary)] to-[var(--accent)]", icon: Activity, title: "Clinical Monitoring",
	      desc: "Continuous real-time follow-up with smart alerts and advanced health analysis.",
	      items: ["24/7 monitoring", "Automatic alerts", "Integrated wearables"],
	      cta: {href: ROMI_CONTACT.whatsapp.url, label: t("whatsapp"), external: true},
	    },
  ] : [
    {
      gradient: "from-[var(--primary)] to-[var(--accent)]",
      icon: Brain,
	      title: "Asistente ROMI",
	      desc: "IA médica de última generación disponible 24/7 para consultas, análisis y recomendaciones personalizadas.",
	      items: ["Análisis de síntomas inteligente","Disponible en WhatsApp","Base de datos médica actualizada"],
	      cta: { href: ROMI_CONTACT.whatsapp.url, label: t("whatsapp"), external: true },
	    },
    {
      gradient: "from-[var(--primary)] to-[var(--accent)]",
      icon: Smartphone,
	      title: "App Móvil",
	      desc: "Tu doctor en el bolsillo. Chat con IA, monitoreo de salud y conexión con especialistas.",
	      items: ["Chat médico en tiempo real","Monitoreo de síntomas","Historial médico seguro"],
	      cta: { href: ROMI_CONTACT.whatsapp.url, label: t("whatsapp"), external: true },
	    },
    {
      gradient: "from-[var(--accent)] to-[var(--secondary)]",
      icon: Video,
      title: "Telesalud",
      desc: "Consultas remotas con especialistas certificados desde cualquier lugar. Videollamadas HD y recetas electrónicas.",
      items: ["Médicos certificados","Citas flexibles","Recetas digitales"],
      cta: { href: "/doctores", label: "Agendar Cita", color: "text-[var(--accent)]" },
    },
    {
      gradient: "from-[var(--primary)] to-[var(--accent)]",
      icon: Activity,
	      title: "Monitoreo Clínico",
	      desc: "Seguimiento continuo en tiempo real con alertas inteligentes y análisis avanzados de tu salud.",
	      items: ["Monitoreo 24/7","Alertas automáticas","Wearables integrados"],
	      cta: { href: ROMI_CONTACT.whatsapp.url, label: t("whatsapp"), external: true },
	    },
  ];

  return (
    <section id="servicios" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 space-y-10 sm:space-y-14">
        <Reveal>
          <SectionHeader title={t("ourServices")} description={t("sectionDescription")} />
        </Reveal>
        
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((c, i) => {
            return (
              <Reveal key={c.title} type="scale" delay={i * 80}>
                <FeatureCard
                  icon={c.icon}
                  title={c.title}
                  description={c.desc}
                  items={c.items}
                  cta={c.cta}
                  gradient={c.gradient}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaracteristicasSection() {
  const t = useTranslations("services");
  const english = useLocale() === "en";
  const features = english ? [
    { icon: Shield, gradient: "from-[var(--primary)] to-[var(--accent)]", iconColor: "text-white", title: "Guaranteed Security", desc: "Medical-grade encryption protects your personal information" },
    { icon: Zap, gradient: "from-[var(--secondary)] to-[var(--secondary)]", iconColor: "text-[var(--primary)]", title: "Fast Response", desc: "Instant consultations without unnecessary wait times" },
    { icon: Heart, gradient: "from-[var(--primary)] to-[var(--accent)]", iconColor: "text-white", title: "Personalized Care", desc: "Health plans tailored to your specific needs" },
  ] : [
    { icon: Shield, gradient: "from-[var(--primary)] to-[var(--accent)]", iconColor: "text-white", title: "Seguridad Garantizada", desc: "Encriptación de nivel médico para proteger tu información personal" },
    { icon: Zap,    gradient: "from-[var(--secondary)] to-[var(--secondary)]",  iconColor: "text-[var(--primary)]", title: "Respuesta Rápida",        desc: "Consultas instantáneas sin tiempos de espera innecesarios" },
    { icon: Heart,  gradient: "from-[var(--primary)] to-[var(--accent)]", iconColor: "text-white", title: "Atención Personalizada", desc: "Planes de salud adaptados a tus necesidades específicas" },
  ];

  return (
    <section id="caracteristicas" className="relative left-1/2 -translate-x-1/2 w-screen bg-[var(--surface-alt)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Reveal className="mb-12 sm:mb-16">
          <SectionHeader title={t("why")} description={t("different")} />
        </Reveal>
        
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map(({ icon: Icon, gradient, iconColor, title, desc }, i) => (
            <Reveal key={title} type="scale" delay={i * 100}>
              <div className="text-center group">
                <div className={`w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <Icon className={iconColor} size={26} />
                </div>
                <h3 className="text-lg sm:text-xl font-fredoka-one text-[var(--primary)] mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-[var(--text-body)] font-poppins">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegacyAppsSection() {
  const t = useTranslations("services");
  return (
    <section id="apps" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Reveal className="mb-10 sm:mb-12">
          <SectionHeader title={t("legacyTitle")} description={t("legacyText")} />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEGACY_APPS.map((app, i) => (
            <Reveal key={app.id} type="scale" delay={i * 60}>
              <Panel className="flex h-full flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary text-white">
                    <MonitorSmartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-primary">{app.category}</p>
                    <h3 className="font-fredoka-one text-2xl text-[var(--text-primary)]">{app.name}</h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-body)]">{app.description}</p>
                <a href={app.shortHref} className="romi-action mt-auto self-start">
                  {t("legacyCta")}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Panel>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <RomiCTA href="/apps" variant="secondary">
            {t("legacyAll")}
          </RomiCTA>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const t = useTranslations("services");
  return (
    <section id="cta" className="relative left-1/2 -translate-x-1/2 w-screen py-16 sm:py-20 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] text-center">
      <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 text-white space-y-5 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-fredoka-one">
          {t("ctaTitle")}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg font-poppins max-w-2xl mx-auto opacity-90">
          {t("ctaText")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <RomiCTA href={ROMI_CONTACT.whatsapp.url} external variant="light" className="px-7 sm:px-8 py-3.5 sm:py-4 font-fredoka-one text-base">
            {t("try")}
          </RomiCTA>
          <RomiCTA href="/doctores" variant="secondary" className="border-2 border-white bg-transparent px-7 sm:px-8 py-3.5 sm:py-4 font-fredoka-one text-base text-white hover:bg-[var(--surface-card-soft)]">
            {t("specialists")}
          </RomiCTA>
        </div>
      </Reveal>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--surface)]">
      <Hero />
      <ServiciosSection />
      <CaracteristicasSection />
      <LegacyAppsSection />
      <CTA />
    </main>
  );
}
