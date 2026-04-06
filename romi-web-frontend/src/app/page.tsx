import Image from "next/image";
import { Heart, Lightbulb, Shield, Users, Globe, BookOpen, User } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-8 mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-0 items-center min-h-[350px]">
            <div className="flex items-center justify-end pr-0">
              <h1 className="text-[80px] md:text-[100px] font-bold text-white tracking-widest leading-none -mr-11 font-fredoka-one">
                RO
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-xs">
                <Image
                  src="/images/imagen_bienvenida.png"
                  alt="ROMI - Asistente Médico"
                  width={800}
                  height={800}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-start pl-0">
              <h1 className="text-[80px] md:text-[100px] font-bold text-white tracking-widest leading-none -ml-6 font-fredoka-one">
                MI
              </h1>
            </div>
          </div>

          <div className="text-center -mt-6">
            <h2 className="text-3xl md:text-4xl text-white mb-3 font-fredoka-one">
              Formación Médica Integral
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-poppins">
              Soluciones con tecnologías avanzadas para transformar la atención médica
              y mejorar los resultados de salud
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10">
        <div className="bg-white rounded-t-[4rem] p-12" style={{ boxShadow: "0 -15px 50px rgba(0,0,0,0.25)" }}>
          <div className="max-w-7xl mx-auto">
            {/* ¿Quiénes somos? */}
            <div className="text-center mb-16">
              <h2 className="text-4xl text-[#d58b88] mb-4 font-fredoka-one font-semibold">
                ¿Quiénes somos?
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto font-poppins">
                Somos una plataforma integral que conecta profesionales de la salud con tecnología avanzada para mejorar la atención médica en todo el mundo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-4">
                <p className="text-base text-gray-700 font-poppins leading-relaxed">
                  HubROMI nació de la visión de democratizar el acceso a la salud a través de la tecnología. Somos un equipo multidisciplinario de médicos, ingenieros y especialistas en salud digital.
                </p>
                <p className="text-base text-gray-700 font-poppins leading-relaxed">
                  Nuestra plataforma integra inteligencia artificial, telemedicina, educación médica continua y herramientas de gestión clínica en un ecosistema completo que empodera a los profesionales de la salud.
                </p>
                <p className="text-base text-gray-700 font-poppins leading-relaxed">
                  Con presencia en más de 15 países y una comunidad activa de profesionales de la salud, continuamos innovando para hacer que la medicina sea más accesible, eficiente y efectiva.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/doctor.jpg"
                  alt="Doctor escribiendo"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { value: "16k+", label: "Chats atendidos" },
                { value: "15+", label: "Países" },
                { value: "24/7", label: "Disponibilidad IA" },
                { value: "100%", label: "Dedicación" },
              ].map((stat) => (
                <div key={stat.label} className="text-center rounded-2xl bg-gradient-to-br from-[#d58b88]/10 to-[#d79c9c]/10 border border-[#d58b88]/20 p-6">
                  <p className="text-3xl font-bold text-[#d58b88] font-fredoka-one">{stat.value}</p>
                  <p className="text-sm text-gray-600 font-poppins mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-gradient-to-br from-[#d58b88]/10 to-[#d79c9c]/10 rounded-2xl p-8 border border-[#d58b88]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#d58b88] rounded-lg flex items-center justify-center">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl text-[#d58b88] font-fredoka-one font-semibold">Misión</h3>
                </div>
                <p className="text-gray-700 font-poppins leading-relaxed">
                  Democratizar el acceso a la atención médica de calidad mediante tecnología innovadora, conectando profesionales de la salud con herramientas avanzadas que mejoran los resultados clínicos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#d58b88]/10 to-[#d79c9c]/10 rounded-2xl p-8 border border-[#d58b88]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#d58b88] rounded-lg flex items-center justify-center">
                    <Globe className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl text-[#d58b88] font-fredoka-one font-semibold">Visión</h3>
                </div>
                <p className="text-gray-700 font-poppins leading-relaxed">
                  Ser la plataforma líder en salud digital en Latinoamérica, transformando la medicina a través de la inteligencia artificial y creando un futuro donde la atención médica de excelencia sea accesible para todos.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-3xl text-[#d58b88] text-center mb-12 font-fredoka-one font-bold">
                Nuestros Valores
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Compromiso",
                    text: "Dedicados a mejorar la calidad de vida a través de la innovación médica.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Altruismo",
                    text: "Impulsamos nuestras acciones con vocación de servicio y sentido de beneficio colectivo.",
                  },
                  {
                    icon: Globe,
                    title: "Filantropía",
                    text: "Promovemos una visión de impacto social orientada al bien común y al acceso responsable a la innovación en salud.",
                  },
                  {
                    icon: Shield,
                    title: "Seguridad",
                    text: "Protegemos la información médica con los más altos estándares de seguridad.",
                  },
                  {
                    icon: Users,
                    title: "Colaboración",
                    text: "Promovemos el trabajo interdisciplinario como base para transformar la atención y el aprendizaje.",
                  },
                  {
                    icon: BookOpen,
                    title: "Rigor",
                    text: "Promovemos contenidos, recursos y decisiones sustentados en criterios sólidos y enfoque profesional.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl bg-white border border-[#d58b88]/20 p-6 hover:shadow-lg transition">
                    <div className="w-12 h-12 bg-[#d58b88]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#d58b88]" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
                    <p className="text-sm text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="mt-24 pt-12 border-t border-gray-200">
              <h3 className="text-3xl text-[#d58b88] text-center mb-4 font-fredoka-one font-bold">
                Nuestro Equipo
              </h3>
              <p className="text-center text-gray-600 mb-12 font-poppins">
                Profesionales comprometidos con la innovación en salud digital.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "Dr. Ivan", role: "Director Médico" },
                  { name: "Lic. Marisela", role: "Coordinadora Académica" },
                  { name: "Dra. Maria Jose Borja Nuñez", role: "Consultora en Formación Médica" },
                ].map(({ name, role }) => (
                  <div
                    key={name}
                    className="rounded-2xl bg-gradient-to-br from-[#d58b88]/5 to-[#d79c9c]/5 border border-[#d58b88]/20 p-6 hover:shadow-lg transition text-center w-full sm:w-56"
                  >
                    <div className="w-12 h-12 bg-[#d58b88]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <User className="text-[#d58b88]" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
                    <p className="text-sm text-[#d58b88] font-poppins mt-1">{role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-24 pt-12 border-t border-gray-200">
              <h3 className="text-3xl text-[#d58b88] text-center mb-4 font-fredoka-one font-bold">
                Nuestra Historia
              </h3>
              <p className="text-center text-gray-600 mb-12 font-poppins">
                Un recorrido de innovación y crecimiento en el sector de la salud digital.
              </p>

              <div className="relative max-w-3xl mx-auto">
                <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#d58b88]/30" />

                {[
                  { year: "2020", side: "left", title: "Fundación de HubROMI", desc: "Inicio de la plataforma con enfoque en telemedicina." },
                  { year: "2021", side: "right", title: "Lanzamiento de ROMI", desc: "Primer asistente médico con IA en español." },
                  { year: "2022", side: "left", title: "16,000 Chats Atendidos", desc: "Alcanzamos 16k interacciones con profesionales de la salud." },
                  { year: "2023", side: "right", title: "Expansión Internacional", desc: "Presencia en 15 países de Latinoamérica." },
                  { year: "2024", side: "left", title: "Portal Premium", desc: "Lanzamiento de servicios especializados." },
                ].map(({ year, side, title, desc }) => (
                  <div key={year} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-center">
                    <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d58b88] ring-8 ring-white z-10" />
                    <div className={side === "left" ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}>
                      <p className="text-[#d58b88] font-bold text-lg">{year}</p>
                      <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
