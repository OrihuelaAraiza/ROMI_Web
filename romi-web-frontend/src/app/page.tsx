import Image from "next/image";
import { Heart, Lightbulb, Shield, Users, Globe, BookOpen, Trophy, Rocket, BrainCircuit } from "lucide-react";
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

      {/* ─── Talent Land Section ─── */}
      <section
        id="talent-land"
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] scroll-mt-20"
      >
        <div className="bg-gradient-to-br from-[#0f1b3d] via-[#1e2f6b] to-[#0f1b3d] px-4 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-10 sm:mb-14">
              {/* Event badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d58b88]/40 bg-[#d58b88]/10 px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d58b88] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d58b88]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#d58b88]">
                  En vivo · Expo Santa Fe, CDMX
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-fredoka-one text-white mb-4 leading-tight">
                ¡Nos vemos en{" "}
                <span className="text-[#d58b88]">Talent Land</span>!
              </h2>

              {/* Date pills */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
                {["7", "8", "9"].map((d) => (
                  <div
                    key={d}
                    className="rounded-xl bg-white/10 border border-white/20 px-4 sm:px-6 py-2 text-white text-center"
                  >
                    <p className="text-xl sm:text-3xl font-fredoka-one leading-none">{d}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mt-0.5">Abr 2026</p>
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-xl text-white/75 font-poppins max-w-xl mx-auto leading-relaxed">
                Si nos ves con esta playera,{" "}
                <span className="text-white font-semibold">¡salúdanos!</span>{" "}
                Escanea el QR y chatea con ROMI en el momento.
              </p>
            </div>

            {/* T-shirt image grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { src: "/images/talent-land-1.png", alt: "Equipo ROMI en Talent Land — vista trasera con playera", caption: "Nuestro equipo en acción" },
                { src: "/images/talent-land-2.png", alt: "Playera ROMI — variantes blanca, gris, azul y rosa",      caption: "Diseños disponibles" },
                { src: "/images/talent-land-3.png", alt: "Playera ROMI — variantes verde, negro, beige y lila",     caption: "Más colores" },
              ].map(({ src, alt, caption }, i) => (
                <div
                  key={src}
                  className="group relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:-translate-y-2 transition-transform duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                    <p className="text-white text-xs sm:text-sm font-semibold font-poppins">{caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-10 sm:mt-14">
              <p className="text-white/60 font-poppins text-sm mb-4">
                Búscanos por el stand o por los pasillos
              </p>
              <a
                href="/chat"
                className="inline-flex items-center gap-2 rounded-full bg-[#d58b88] hover:bg-[#c47a77] text-white font-semibold px-7 py-3 shadow-lg shadow-[#d58b88]/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 font-poppins"
              >
                Chatea con ROMI ahora
              </a>
            </div>

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

            {/* Team – Org Chart */}
            <div className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-gray-200">
              <Reveal className="text-center mb-10 sm:mb-14">
                <h3 className="text-2xl sm:text-3xl text-[#d58b88] font-fredoka-one font-bold mb-3">
                  Nuestro Equipo
                </h3>
                <p className="text-center text-gray-600 font-poppins text-sm sm:text-base">
                  El equipo que impulsa la innovación en salud digital.
                </p>
              </Reveal>

              {/* Scrollable wrapper for small screens */}
              <div className="overflow-x-auto pb-2 -mx-2 px-2">
                <div className="min-w-[580px] flex flex-col items-center">

                  {/* ── CEO ── */}
                  <div className="w-48">
                    <div className="rounded-2xl bg-gradient-to-br from-[#d58b88] to-[#c47a77] text-white shadow-lg shadow-[#d58b88]/30 px-4 py-3 text-center hover:-translate-y-0.5 transition-transform duration-200">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-0.5">CEO</p>
                      <p className="text-sm font-semibold">Kevin Soto</p>
                    </div>
                  </div>

                  {/* vertical from CEO */}
                  <div className="h-6 w-px bg-[#d58b88]/40" />

                  {/* ── Level 2 + 3: 3 columns connected by horizontal bar ── */}
                  <div className="relative w-full flex items-start">
                    {/* Horizontal connector bar (left-center to right-center) */}
                    <div className="absolute top-0 left-[16.67%] right-[16.67%] h-px bg-[#d58b88]/40 pointer-events-none" />

                    {/* ── Column: CAO ── */}
                    <div className="flex-1 flex flex-col items-center gap-0">
                      <div className="h-6 w-px bg-[#d58b88]/40" />
                      {/* CAO card */}
                      <div className="w-36 rounded-2xl bg-gradient-to-br from-[#d58b88]/20 to-[#d79c9c]/10 border border-[#d58b88]/30 px-3 py-2.5 text-center hover:-translate-y-0.5 transition-transform duration-200">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#d58b88]/70 mb-0.5">CAO</p>
                        <p className="text-xs font-semibold text-gray-800 leading-tight">Marisela Coyotl</p>
                      </div>
                      <div className="h-5 w-px bg-[#d58b88]/40" />
                      {/* Jr. CAO card */}
                      <div className="w-36 rounded-2xl bg-gradient-to-br from-[#dabebd]/30 to-white border border-[#d58b88]/20 px-3 py-2.5 text-center hover:-translate-y-0.5 transition-transform duration-200">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#d58b88]/60 mb-0.5">Jr. CAO</p>
                        <p className="text-xs font-semibold text-gray-700 leading-tight">Rocío Nicanor</p>
                      </div>
                    </div>

                    {/* ── Column: Tech (Sr. CTO + Jr. CTO) ── */}
                    <div className="flex-1 flex flex-col items-center gap-0">
                      <div className="h-6 w-px bg-[#d58b88]/40" />

                      {/* Sr. CTO group card */}
                      <div className="w-44 rounded-2xl bg-gradient-to-br from-[#d79c9c]/20 to-[#dabebd]/10 border border-[#d58b88]/25 overflow-hidden hover:-translate-y-0.5 transition-transform duration-200">
                        <div className="bg-[#d58b88]/15 px-3 py-1.5 text-center">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#d58b88]">Sr. CTO</p>
                        </div>
                        {["Juan Pablo Orihuela", "Miguel Ángel Cruz", "Ángel David Morales"].map((n) => (
                          <p key={n} className="text-[11px] font-semibold text-gray-800 text-center py-1.5 px-3 border-b border-[#d58b88]/10 last:border-0 leading-tight">
                            {n}
                          </p>
                        ))}
                      </div>

                      <div className="h-5 w-px bg-[#d58b88]/40" />

                      {/* Jr. CTO group card */}
                      <div className="w-44 rounded-2xl bg-gradient-to-br from-[#dabebd]/30 to-white border border-[#d58b88]/15 overflow-hidden hover:-translate-y-0.5 transition-transform duration-200">
                        <div className="bg-[#d58b88]/10 px-3 py-1.5 text-center">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#d58b88]">Jr. CTO</p>
                        </div>
                        {["Emmanuel Arceo", "José Antonio Díaz", "Ivonne Méndez"].map((n) => (
                          <p key={n} className="text-[11px] font-semibold text-gray-700 text-center py-1.5 px-3 border-b border-[#d58b88]/10 last:border-0 leading-tight">
                            {n}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* ── Column: CMO ── */}
                    <div className="flex-1 flex flex-col items-center gap-0">
                      <div className="h-6 w-px bg-[#d58b88]/40" />
                      {/* CMO card */}
                      <div className="w-36 rounded-2xl bg-gradient-to-br from-[#d58b88]/20 to-[#d79c9c]/10 border border-[#d58b88]/30 px-3 py-2.5 text-center hover:-translate-y-0.5 transition-transform duration-200">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#d58b88]/70 mb-0.5">CMO</p>
                        <p className="text-xs font-semibold text-gray-800 leading-tight">Dr. Abraham Castro</p>
                      </div>
                      <div className="h-5 w-px bg-[#d58b88]/40" />
                      {/* Jr. CMO card */}
                      <div className="w-36 rounded-2xl bg-gradient-to-br from-[#dabebd]/30 to-white border border-[#d58b88]/20 px-3 py-2.5 text-center hover:-translate-y-0.5 transition-transform duration-200">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#d58b88]/60 mb-0.5">Jr. CMO</p>
                        <p className="text-xs font-semibold text-gray-700 leading-tight">María José Borja</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Reconocimientos */}
            <div className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-gray-200">
              <Reveal className="text-center mb-10 sm:mb-14">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#d58b88]/10 px-4 py-1.5 text-xs font-semibold text-[#d58b88] mb-4">
                  <Trophy size={13} /> Logros 2025
                </span>
                <h3 className="text-2xl sm:text-3xl text-[#d58b88] font-fredoka-one font-bold mb-3">
                  Reconocimientos
                </h3>
                <p className="text-gray-600 font-poppins text-sm sm:text-base max-w-xl mx-auto">
                  Premios y distinciones que avalan nuestro impacto en el ecosistema de salud digital e innovación.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto">
                {(
                  [
                    {
                      Icon: Rocket,
                      org: "Talent Land",
                      title: "Ganadores Startup a la Cuesta",
                      desc: "Reconocidos entre las startups más prometedoras del ecosistema de innovación en México.",
                      color: "from-[#d58b88]/20 to-[#d79c9c]/10",
                      badge: "Talent Land 2025",
                    },
                    {
                      Icon: Globe,
                      org: "Youth Empowerment Fund",
                      title: "Ganadores del Grant Internacional",
                      desc: "Premio internacional por impacto social en salud digital otorgado a nivel global.",
                      color: "from-[#d79c9c]/20 to-[#dabebd]/10",
                      badge: "YEF 2025",
                    },
                    {
                      Icon: BrainCircuit,
                      org: "Intel · Acelerado México con IA",
                      title: "Top 10 Proyectos de IA",
                      desc: "Seleccionados entre los 10 mejores proyectos de inteligencia artificial de México.",
                      color: "from-[#dabebd]/20 to-[#d58b88]/10",
                      badge: "Intel 2025",
                    },
                  ] as const
                ).map(({ Icon, org, title, desc, color, badge }, i) => (
                  <Reveal key={title} type="scale" delay={i * 100}>
                    <div className={`relative rounded-3xl bg-gradient-to-br ${color} border border-[#d58b88]/25 p-5 sm:p-6 card-premium group h-full flex flex-col`}>
                      <span className="absolute top-4 right-4 rounded-full bg-[#d58b88] text-white text-[10px] font-bold px-2.5 py-0.5 tracking-wide">
                        {badge}
                      </span>

                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                        <Icon size={26} className="text-[#d58b88]" />
                      </div>

                      <p className="text-xs font-semibold text-[#d58b88] uppercase tracking-wider mb-1 font-poppins">
                        {org}
                      </p>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-2">
                        {title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed mt-auto pt-2">
                        {desc}
                      </p>
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
