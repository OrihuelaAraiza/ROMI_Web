import Image from "next/image";
import { Heart, Lightbulb, Shield, Users, Globe, BookOpen, User } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden pt-4 pb-8 mt-8 sm:mt-14 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mobile: stacked ROMI (< 768px) */}
          <div className="flex flex-col items-center gap-0 md:hidden">
            <h1 className="text-[68px] font-bold text-white tracking-widest leading-none font-fredoka-one drop-shadow-lg animate-fade-in-up">
              ROMI
            </h1>
            <div className="relative w-56 aspect-square">
              <Image
                src="/images/imagen_bienvenida.png"
                alt="ROMI - Asistente Médico"
                width={800}
                height={800}
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Desktop: flanked letters layout (≥ 768px) */}
          <div className="hidden md:grid grid-cols-3 gap-0 items-center min-h-[340px] lg:min-h-[380px]">
            <div className="flex items-center justify-end">
              <h1 className="text-[80px] lg:text-[100px] font-bold text-white tracking-widest leading-none -mr-10 lg:-mr-11 font-fredoka-one animate-fade-in-up drop-shadow-lg">
                RO
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[280px] lg:max-w-xs">
                <Image
                  src="/images/imagen_bienvenida.png"
                  alt="ROMI - Asistente Médico"
                  width={800}
                  height={800}
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="flex items-center justify-start">
              <h1 className="text-[80px] lg:text-[100px] font-bold text-white tracking-widest leading-none -ml-5 lg:-ml-6 font-fredoka-one animate-fade-in-up drop-shadow-lg">
                MI
              </h1>
            </div>
          </div>

          <div className="text-center mt-4 md:-mt-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 font-fredoka-one">
              Formación Médica Integral
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto font-poppins px-2">
              Soluciones con tecnologías avanzadas para transformar la atención médica
              y mejorar los resultados de salud
            </p>
          </div>
        </div>
      </section>

      {/* ─── About Section ─── */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-8 sm:mt-10">
        <div className="bg-white rounded-t-[3rem] sm:rounded-t-[4rem] px-4 sm:px-8 lg:px-12 pt-10 sm:pt-12 pb-12" style={{ boxShadow: "0 -15px 50px rgba(0,0,0,0.25)" }}>
          <div className="max-w-7xl mx-auto">

            {/* ¿Quiénes somos? */}
            <Reveal className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl text-[#d58b88] mb-4 font-fredoka-one font-semibold">
                ¿Quiénes somos?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto font-poppins px-2">
                Somos una plataforma integral que conecta profesionales de la salud con tecnología avanzada para mejorar la atención médica en todo el mundo.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
              <Reveal type="left" className="space-y-4">
                <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
                  HubROMI nació de la visión de democratizar el acceso a la salud a través de la tecnología. Somos un equipo multidisciplinario de médicos, ingenieros y especialistas en salud digital.
                </p>
                <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
                  Nuestra plataforma integra inteligencia artificial, telemedicina, educación médica continua y herramientas de gestión clínica en un ecosistema completo que empodera a los profesionales de la salud.
                </p>
                <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
                  Con presencia en más de 15 países y una comunidad activa de profesionales de la salud, continuamos innovando para hacer que la medicina sea más accesible, eficiente y efectiva.
                </p>
              </Reveal>
              <Reveal type="right">
                <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src="/images/doctor.jpg"
                    alt="Doctor escribiendo"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
              {[
                { value: "16k+", label: "Chats atendidos" },
                { value: "15+", label: "Países" },
                { value: "24/7", label: "Disponibilidad IA" },
                { value: "100%", label: "Dedicación" },
              ].map((stat, i) => (
                <Reveal key={stat.label} type="scale" delay={i * 80}>
                  <div className="text-center rounded-2xl bg-gradient-to-br from-[#d58b88]/10 to-[#d79c9c]/10 border border-[#d58b88]/20 p-5 sm:p-6 card-premium">
                    <p className="text-2xl sm:text-3xl font-bold text-[#d58b88] font-fredoka-one">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-poppins mt-1">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {[
                {
                  icon: Heart,
                  title: "Misión",
                  text: "Democratizar el acceso a la atención médica de calidad mediante tecnología innovadora, conectando profesionales de la salud con herramientas avanzadas que mejoran los resultados clínicos.",
                },
                {
                  icon: Globe,
                  title: "Visión",
                  text: "Ser la plataforma líder en salud digital en Latinoamérica, transformando la medicina a través de la inteligencia artificial y creando un futuro donde la atención médica de excelencia sea accesible para todos.",
                },
              ].map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} type={i === 0 ? "left" : "right"}>
                  <div className="bg-gradient-to-br from-[#d58b88]/10 to-[#d79c9c]/10 rounded-2xl p-6 sm:p-8 border border-[#d58b88]/20 card-premium h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#d58b88] rounded-lg flex items-center justify-center icon-lift">
                        <Icon className="text-white" size={22} />
                      </div>
                      <h3 className="text-xl sm:text-2xl text-[#d58b88] font-fredoka-one font-semibold">{title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Values */}
            <div>
              <Reveal className="text-center mb-10 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl text-[#d58b88] font-fredoka-one font-bold">
                  Nuestros Valores
                </h3>
              </Reveal>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { icon: Heart,     title: "Compromiso",  text: "Dedicados a mejorar la calidad de vida a través de la innovación médica." },
                  { icon: Lightbulb, title: "Altruismo",   text: "Impulsamos nuestras acciones con vocación de servicio y sentido de beneficio colectivo." },
                  { icon: Globe,     title: "Filantropía", text: "Promovemos una visión de impacto social orientada al bien común y al acceso responsable a la innovación en salud." },
                  { icon: Shield,    title: "Seguridad",   text: "Protegemos la información médica con los más altos estándares de seguridad." },
                  { icon: Users,     title: "Colaboración",text: "Promovemos el trabajo interdisciplinario como base para transformar la atención y el aprendizaje." },
                  { icon: BookOpen,  title: "Rigor",       text: "Promovemos contenidos, recursos y decisiones sustentados en criterios sólidos y enfoque profesional." },
                ].map(({ icon: Icon, title, text }, i) => (
                  <Reveal key={title} type="scale" delay={i * 70}>
                    <div className="rounded-2xl bg-white border border-[#d58b88]/20 p-5 sm:p-6 card-premium group h-full">
                      <div className="w-11 h-11 bg-[#d58b88]/10 rounded-lg flex items-center justify-center mb-4 icon-lift">
                        <Icon className="text-[#d58b88]" size={22} />
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-gray-200">
              <Reveal className="text-center mb-10 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl text-[#d58b88] font-fredoka-one font-bold mb-4">
                  Nuestro Equipo
                </h3>
                <p className="text-center text-gray-600 font-poppins text-sm sm:text-base">
                  Profesionales comprometidos con la innovación en salud digital.
                </p>
              </Reveal>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {[
                  { name: "Dr. Ivan", role: "Director Médico" },
                  { name: "Lic. Marisela", role: "Coordinadora Académica" },
                  { name: "Dra. Maria Jose Borja Nuñez", role: "Consultora en Formación Médica" },
                ].map(({ name, role }, i) => (
                  <Reveal key={name} type="scale" delay={i * 100}>
                    <div className="rounded-2xl bg-gradient-to-br from-[#d58b88]/5 to-[#d79c9c]/5 border border-[#d58b88]/20 p-5 sm:p-6 card-premium text-center w-full sm:w-56">
                      <div className="w-11 h-11 bg-[#d58b88]/10 rounded-full flex items-center justify-center mb-4 mx-auto icon-lift">
                        <User className="text-[#d58b88]" size={22} />
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">{name}</h4>
                      <p className="text-xs sm:text-sm text-[#d58b88] font-poppins mt-1">{role}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-gray-200">
              <Reveal className="text-center mb-10 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl text-[#d58b88] font-fredoka-one font-bold mb-4">
                  Nuestra Historia
                </h3>
                <p className="text-center text-gray-600 font-poppins text-sm sm:text-base">
                  Un recorrido de innovación y crecimiento en el sector de la salud digital.
                </p>
              </Reveal>

              <div className="relative max-w-3xl mx-auto">
                {/* Desktop: center vertical line */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#d58b88]/30 hidden md:block" />
                {/* Mobile: left vertical line */}
                <div className="pointer-events-none absolute left-5 top-0 h-full w-px bg-[#d58b88]/30 md:hidden" />

                {[
                  { year: "2020", side: "left",  title: "Fundación de HubROMI",    desc: "Inicio de la plataforma con enfoque en telemedicina." },
                  { year: "2021", side: "right", title: "Lanzamiento de ROMI",     desc: "Primer asistente médico con IA en español." },
                  { year: "2022", side: "left",  title: "16,000 Chats Atendidos",  desc: "Alcanzamos 16k interacciones con profesionales de la salud." },
                  { year: "2023", side: "right", title: "Expansión Internacional", desc: "Presencia en 15 países de Latinoamérica." },
                  { year: "2024", side: "left",  title: "Portal Premium",          desc: "Lanzamiento de servicios especializados." },
                ].map(({ year, side, title, desc }, i) => (
                  <Reveal key={year} type={side === "left" ? "left" : "right"} delay={i * 80}>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 items-start md:items-center">
                      {/* Mobile: dot on left rail */}
                      <span className="md:hidden absolute left-5 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-[#d58b88] ring-4 ring-white z-10" />
                      {/* Desktop: dot at center */}
                      <span className="hidden md:block absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d58b88] ring-8 ring-white z-10 transition-transform hover:scale-125" />
                      <div className={`pl-12 md:pl-0 ${side === "left" ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}`}>
                        <p className="text-[#d58b88] font-bold text-base sm:text-lg">{year}</p>
                        <h4 className="text-base sm:text-xl font-semibold text-gray-900">{title}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">{desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
