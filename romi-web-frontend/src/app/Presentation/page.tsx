export const metadata = { title: "ROMI — Presentación" };
import { Target, Handshake, Heart, Lightbulb, Shield, Users, Globe, Zap, User } from "lucide-react";
import Reveal from "@/components/Reveal";

const values = [
  { icon: Heart,     title: "Compromiso con la Salud",  desc: "Dedicados a mejorar la calidad de vida de las personas a través de la innovación médica." },
  { icon: Lightbulb, title: "Innovación Constante",     desc: "Desarrollamos soluciones tecnológicas avanzadas para los desafíos médicos actuales." },
  { icon: Shield,    title: "Seguridad y Privacidad",   desc: "Protegemos la información médica con los más altos estándares de seguridad." },
  { icon: Users,     title: "Colaboración",             desc: "Fomentamos el trabajo en equipo entre profesionales de la salud." },
  { icon: Globe,     title: "Accesibilidad Global",     desc: "Hacemos que la atención médica de calidad sea accesible en todo el mundo." },
  { icon: Zap,       title: "Eficiencia",               desc: "Optimizamos los procesos médicos para brindar atención más eficaz." },
];

const team = [
  { name: "Juan Pérez",    role: "Especialista en telemedicina con más de 10 años de experiencia." },
  { name: "María López",   role: "Experta en inteligencia artificial aplicada a la salud." },
  { name: "Carlos García", role: "Ingeniero de software con enfoque en soluciones médicas." },
  { name: "Ana Martínez",  role: "Coordinadora de proyectos y alianzas estratégicas." },
];

const history = [
  { year: "2020", side: "left",  title: "Fundación de HubROMImedia",  desc: "Inicio de la plataforma con enfoque en telemedicina." },
  { year: "2021", side: "right", title: "Lanzamiento de ROMI",        desc: "Primer asistente médico con IA en español." },
  { year: "2022", side: "left",  title: "10,000 Profesionales",       desc: "Alcanzamos 10,000 médicos registrados." },
  { year: "2023", side: "right", title: "Expansión Internacional",    desc: "Presencia en 15 países de Latinoamérica." },
  { year: "2024", side: "left",  title: "Portal Premium",             desc: "Lanzamiento de servicios especializados." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gradient-romi">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 text-center text-white">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Transformando la Medicina del Futuro</h1>
            <p className="mt-4 sm:mt-8 text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-poppins">
              Somos una plataforma integral que conecta profesionales de la salud con tecnología avanzada para mejorar la atención médica en todo el mundo.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ¿Quiénes somos? */}
        <Reveal className="text-center mt-10 sm:mt-14">
          <h1 className="font-semibold text-3xl sm:text-4xl text-primary">¿Quiénes somos?</h1>
        </Reveal>

        <section className="mt-8 sm:mt-10 grid md:grid-cols-2 gap-6">
          <Reveal type="left">
            <div className="rounded-2xl border border-[#d58b88]/20 p-5 sm:p-6 card-premium">
              <p className="text-sm sm:text-base text-zinc-600 mt-2">
                HubROMI nació de la visión de democratizar el acceso a la salud a través de la tecnología. Somos un equipo multidisciplinario de médicos, ingenieros y especialistas en salud digital.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 mt-4">
                Nuestra plataforma integra inteligencia artificial, telemedicina, educación médica continua y herramientas de gestión clínica en un ecosistema completo que empodera a los profesionales de la salud.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 mt-4">
                Con presencia en más de 15 países y una comunidad de más de 10,000 profesionales, continuamos innovando para hacer que la medicina sea más accesible, eficiente y efectiva.
              </p>
            </div>
          </Reveal>

          <Reveal type="right">
            <div className="rounded-2xl border border-[#d58b88]/20 p-5 sm:p-6 overflow-hidden card-premium">
              <img
                src="images/doctor.jpg"
                alt="Doctor escribiendo"
                className="rounded-xl shadow-lg object-cover w-full h-56 sm:h-80 md:h-[400px] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Reveal>
        </section>

        {/* Misión y Visión */}
        <Reveal className="text-center mt-12 sm:mt-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">Nuestra Misión y Visión</h1>
          <p className="text-center text-sm sm:text-base text-zinc-600 mt-2 font-poppins">
            Los principios que guían cada decisión y acción en HubROMImedia.
          </p>
        </Reveal>

        <section className="mt-8 sm:mt-10 grid md:grid-cols-2 gap-6">
          {[
            { icon: Handshake, title: "Misión", desc: "Democratizar el acceso a la atención médica de calidad mediante tecnología innovadora, conectando profesionales de la salud con herramientas avanzadas que mejoran los resultados clínicos y la experiencia del paciente." },
            { icon: Target,    title: "Visión", desc: "Ser la plataforma líder mundial en salud digital, transformando la medicina a través de la inteligencia artificial y la telemedicina, creando un futuro donde la atención médica de excelencia sea accesible para todos." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} type={i === 0 ? "left" : "right"}>
              <div className="rounded-2xl border border-[#d58b88]/20 p-5 sm:p-6 text-center space-y-3 card-premium">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#d58b88]/10 flex items-center justify-center icon-lift">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-semibold text-lg sm:text-xl text-[#2d2d2d]">{title}</h2>
                <p className="text-sm text-zinc-600 font-poppins">{desc}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Valores */}
        <Reveal className="text-center mt-12 sm:mt-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">Nuestros Valores</h1>
        </Reveal>

        <section className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} type="scale" delay={i * 60}>
              <div className="rounded-3xl border border-[#d58b88]/20 p-5 sm:p-6 text-center card-premium group">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#d58b88]/10 flex items-center justify-center mb-4 icon-lift">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-semibold text-base sm:text-xl text-[#2d2d2d]">{title}</h2>
                <p className="text-sm text-zinc-600 mt-2 font-poppins">{desc}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Equipo */}
        <Reveal className="text-center mt-12 sm:mt-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">Nuestro Equipo</h1>
          <p className="text-center text-sm sm:text-base text-zinc-600 mt-2 font-poppins">
            Profesionales excepcionales comprometidos con la innovación médica.
          </p>
        </Reveal>

        <section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-4">
          {team.map(({ name, role }, i) => (
            <Reveal key={name} type="scale" delay={i * 60}>
              <div className="rounded-2xl border border-[#d58b88]/20 p-4 sm:p-6 text-center card-premium">
                <div className="w-11 h-11 mx-auto rounded-full bg-[#d58b88]/10 flex items-center justify-center mb-3 icon-lift">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-semibold text-sm sm:text-base text-[#2d2d2d]">{name}</h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-poppins">{role}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Historia */}
        <Reveal className="text-center mt-12 sm:mt-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">Nuestra Historia</h1>
          <p className="text-center text-sm sm:text-base text-zinc-600 mt-2 mb-10 sm:mb-12 font-poppins">
            Un recorrido de innovación y crecimiento en el sector de la salud digital.
          </p>
        </Reveal>

        <section className="relative max-w-3xl mx-auto pb-16">
          {/* Desktop: center line */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#d58b88]/30 hidden md:block" />
          {/* Mobile: left line */}
          <div className="pointer-events-none absolute left-5 top-0 h-full w-px bg-[#d58b88]/30 md:hidden" />

          {history.map(({ year, side, title, desc }, i) => (
            <Reveal key={year} type={side === "left" ? "left" : "right"} delay={i * 70}>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 items-start md:items-center">
                {/* Mobile dot – left rail */}
                <span className="md:hidden absolute left-5 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-[#d58b88] ring-4 ring-white z-10" />
                {/* Desktop dot – center */}
                <span className="hidden md:block absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d58b88] ring-8 ring-white z-10 hover:scale-125 transition-transform" />

                <div className={`pl-12 md:pl-0 ${side === "left" ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"}`}>
                  <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-md ring-1 ring-[#d58b88]/10 card-premium">
                    <p className="text-[#d58b88] font-bold text-base sm:text-lg">{year}</p>
                    <h3 className="mt-1 text-base sm:text-xl font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-poppins">{desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </section>

      </div>
    </main>
  );
}
