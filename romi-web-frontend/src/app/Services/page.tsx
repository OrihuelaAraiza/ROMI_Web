import Link from 'next/link';
import { Smartphone, Brain, Video, Activity, Zap, Shield, MessageSquare, Clock, Heart, ArrowRight, Compass } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = { title: "ROMI — Servicios" };

function SideLink({ href, title, active = false }: { href: string; title: string; active?: boolean }) {
  return active ? (
    <a href={href} aria-current="page" className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 bg-[#d58b88] text-white border border-[#d58b88] hover:bg-[#c17a76] active:scale-[0.98]">
      {title}
    </a>
  ) : (
    <a href={href} className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 bg-white text-[#2d2d2d] border border-[#d58b88]/30 hover:bg-[#edcccc]/50 hover:border-[#d58b88]/60 active:scale-[0.98]">
      {title}
    </a>
  );
}

function Hero() {
  return (
    <section className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#d58b88] via-[#d79c9c] to-[#dabebd]" />
      <div className="absolute -top-24 -left-24 w-64 sm:w-72 h-64 sm:h-72 bg-[#edcccc]/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-[#dabebd]/40 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-10 items-center">
          <div className="md:col-span-3 text-white">
            <h1 className="font-fredoka-one text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-sm">
              Servicios <span className="text-[#EBD9D8]">Médicos</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 font-poppins max-w-xl">
              Tecnología de inteligencia artificial y especialistas certificados para transformar tu experiencia médica. Atención integral en un solo lugar.
            </p>
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-md">
              {[["24/7","Disponibilidad"],["+50K","Usuarios"],["98%","Satisfacción"]].map(([v,l]) => (
                <div key={l}>
                  <p className="text-2xl sm:text-3xl font-fredoka-one text-white">{v}</p>
                  <p className="text-[11px] sm:text-xs text-white/80 font-poppins">{l}</p>
                </div>
              ))}
            </div>
          </div>
          
          <aside className="md:col-span-2">
            <nav aria-label="Categorías" className="rounded-3xl bg-white/80 backdrop-blur border border-[#d58b88]/20 p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-lg">
              <h2 className="text-[#d58b88] font-fredoka-one text-xl flex items-center gap-2">
                <Compass className="h-5 w-5" /> Navegación
              </h2>
              <SideLink href="#servicios" title="Nuestros Servicios" active />
              <SideLink href="#caracteristicas" title="Características" />
              <SideLink href="#cta" title="Comenzar" />
            </nav>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ServiciosSection() {
  const cards = [
    {
      gradient: "from-[#d58b88] to-[#d79c9c]",
      icon: Brain,
      title: "Asistente ROMI",
      desc: "IA médica de última generación disponible 24/7 para consultas, análisis y recomendaciones personalizadas.",
      items: ["Análisis de síntomas inteligente","Disponible en WhatsApp","Base de datos médica actualizada"],
      cta: { href: "/chat", label: "Probar Ahora", color: "text-[#d58b88]" },
    },
    {
      gradient: "from-[#d58b88] to-[#d79c9c]",
      icon: Smartphone,
      title: "App Móvil",
      desc: "Tu doctor en el bolsillo. Chat con IA, monitoreo de salud y conexión con especialistas.",
      items: ["Chat médico en tiempo real","Monitoreo de síntomas","Historial médico seguro"],
      cta: { href: "/chat", label: "Descargar", color: "text-[#d58b88]" },
    },
    {
      gradient: "from-[#d79c9c] to-[#dabebd]",
      icon: Video,
      title: "Telesalud",
      desc: "Consultas remotas con especialistas certificados desde cualquier lugar. Videollamadas HD y recetas electrónicas.",
      items: ["Médicos certificados","Citas flexibles","Recetas digitales"],
      cta: { href: "/doctores", label: "Agendar Cita", color: "text-[#d79c9c]" },
    },
    {
      gradient: "from-[#d58b88]/80 to-[#d79c9c]/80",
      icon: Activity,
      title: "Monitoreo Clínico",
      desc: "Seguimiento continuo en tiempo real con alertas inteligentes y análisis avanzados de tu salud.",
      items: ["Monitoreo 24/7","Alertas automáticas","Wearables integrados"],
      cta: { href: "/chat", label: "Explorar", color: "text-[#d58b88]" },
    },
  ];

  return (
    <section id="servicios" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 space-y-10 sm:space-y-14">
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-fredoka-one text-[#d58b88] mb-4 sm:mb-5">Nuestros Servicios</h2>
          <p className="text-sm sm:text-base text-gray-600 font-poppins">Cada solución está diseñada para ofrecerte la mejor experiencia médica</p>
        </Reveal>
        
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} type="scale" delay={i * 80}>
                <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.gradient} p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="mb-5 sm:mb-6">
                      <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300">
                        <Icon className="text-white" size={26} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-fredoka-one text-white">{c.title}</h3>
                    </div>
                    <p className="text-white/90 font-poppins mb-5 sm:mb-6 text-sm sm:text-base">{c.desc}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {c.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-white font-poppins text-sm">
                          <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href={c.cta.href} className={`inline-flex items-center gap-2 px-5 sm:px-6 py-2 bg-white ${c.cta.color} rounded-full font-semibold text-sm hover:bg-gray-50 hover:gap-3 transition-all duration-200 active:scale-95`}>
                      {c.cta.label}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaracteristicasSection() {
  const features = [
    { icon: Shield, gradient: "from-[#d58b88] to-[#d79c9c]", iconColor: "text-white", title: "Seguridad Garantizada", desc: "Encriptación de nivel médico para proteger tu información personal" },
    { icon: Zap,    gradient: "from-[#dabebd] to-[#edcccc]",  iconColor: "text-[#d58b88]", title: "Respuesta Rápida",        desc: "Consultas instantáneas sin tiempos de espera innecesarios" },
    { icon: Heart,  gradient: "from-[#d58b88]/60 to-[#d79c9c]/60", iconColor: "text-white", title: "Atención Personalizada", desc: "Planes de salud adaptados a tus necesidades específicas" },
  ];

  return (
    <section id="caracteristicas" className="relative left-1/2 -translate-x-1/2 w-screen bg-[#f8f6f6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-fredoka-one text-[#2d2d2d] mb-4">¿Por qué elegir ROMI?</h2>
          <p className="text-sm sm:text-base text-gray-600 font-poppins">Características que nos hacen diferente</p>
        </Reveal>
        
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map(({ icon: Icon, gradient, iconColor, title, desc }, i) => (
            <Reveal key={title} type="scale" delay={i * 100}>
              <div className="text-center group">
                <div className={`w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <Icon className={iconColor} size={26} />
                </div>
                <h3 className="text-lg sm:text-xl font-fredoka-one text-[#d58b88] mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-gray-600 font-poppins">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative left-1/2 -translate-x-1/2 w-screen py-16 sm:py-20 bg-gradient-to-r from-[#d58b88] via-[#d79c9c] to-[#dabebd] text-center">
      <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 text-white space-y-5 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-fredoka-one">
          Comienza tu Transformación de Salud Hoy
        </h2>
        <p className="text-sm sm:text-base lg:text-lg font-poppins max-w-2xl mx-auto opacity-90">
          Acceso a IA médica, especialistas y monitoreo de salud en una plataforma integrada
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link href="/chat" className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 bg-white text-[#d58b88] rounded-full font-fredoka-one text-base hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
            Probar ROMI Gratis
          </Link>
          <Link href="/doctores" className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 border-2 border-white text-white rounded-full font-fredoka-one text-base hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 active:scale-95">
            Ver Especialistas
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ServiciosSection />
      <CaracteristicasSection />
      <CTA />
    </main>
  );
}
