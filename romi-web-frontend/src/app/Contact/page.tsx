import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  MessageCircle,
  Headphones,
  Compass,
  Send,
  Clock,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "ROMI — Contacto",
};

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: "@ajolomed.romi",
    href: "https://www.instagram.com/ajolomed.romi?igsh=MWdzaXZsbGVnb21uMA==",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.038-1.942 1.341-1.34 1.857-3.182 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.085-1.856-.601-3.698-1.942-5.038C20.698.673 18.856.157 17 .072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "ROMI Asistente Inteligente",
    href: "https://www.facebook.com/people/ROMI-asistente-inteligente/61573823379860/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.286h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "ROMI Asistente Médico",
    href: "https://mx.linkedin.com/company/romiasistentemedicovirtualinteligente",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@romi_ajolomedico",
    href: "https://www.tiktok.com/@romi_ajolomedico",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    handle: "@Romi_Ajolomed",
    href: "https://x.com/Romi_Ajolomed",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

function SideLink({ href, title, active = false }: { href: string; title: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
        active ? "bg-[#d58b88]/10 text-[#d58b88]" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {title}
    </Link>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d58b88] via-[#d79c9c] to-[#dabebd]" />
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#edcccc]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#dabebd]/40 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-xs font-medium mb-6">
                <MessageCircle className="h-4 w-4" />
                Estamos aquí para ayudarte
              </p>
              <h1 className="text-5xl md:text-6xl font-fredoka-one drop-shadow-sm mb-6">
                Contáctanos
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 font-poppins">
                Envíanos tus preguntas, comentarios o solicitudes. Nuestro equipo se pondrá en contacto contigo a la brevedad.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold font-fredoka-one">24h</div>
                  <div className="text-sm text-white/80 font-poppins">Respuesta</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-fredoka-one">24/7</div>
                  <div className="text-sm text-white/80 font-poppins">Chat ROMI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-fredoka-one">100%</div>
                  <div className="text-sm text-white/80 font-poppins">Atención</div>
                </div>
              </div>
            </div>

            <aside className="md:col-span-2">
              <nav className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 p-6 flex flex-col gap-4 shadow-lg">
                <h2 className="text-[#d58b88] font-fredoka-one text-xl flex items-center gap-2">
                  <Compass className="h-5 w-5" /> Navegación
                </h2>
                <SideLink href="#formulario" title="Enviar Mensaje" active />
                <SideLink href="#info" title="Información de Contacto" />
                <SideLink href="#redes" title="Redes Sociales" />
                <SideLink href="#soporte" title="Opciones de Soporte" />
              </nav>
            </aside>
          </div>
        </div>
      </section>

      {/* FORM + CONTACT INFO */}
      <section id="formulario" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-8 py-20 grid gap-8 md:grid-cols-[1.3fr,1fr]">

          {/* FORMULARIO */}
          <article className="rounded-3xl border border-[#d58b88]/20 bg-gradient-to-br from-white to-[#f8f6f6] shadow-sm p-6 sm:p-7">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#2d2d2d] font-fredoka-one mb-4">
              Envíanos un Mensaje
            </h2>

            <form className="space-y-4" noValidate>
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-[#2d2d2d] font-poppins mb-1">
                  Nombre Completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border border-[#d58b88]/30 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d58b88]/60 font-poppins"
                  placeholder="Escribe tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2d2d2d] font-poppins mb-1">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-[#d58b88]/30 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d58b88]/60 font-poppins"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-[#2d2d2d] font-poppins mb-1">
                  Asunto
                </label>
                <input
                  id="asunto"
                  type="text"
                  className="w-full rounded-xl border border-[#d58b88]/30 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d58b88]/60 font-poppins"
                  placeholder="¿Sobre qué te gustaría hablar?"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-[#2d2d2d] font-poppins mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={5}
                  className="w-full rounded-xl border border-[#d58b88]/30 bg-white px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#d58b88]/60 font-poppins"
                  placeholder="Cuéntanos con más detalle en qué podemos ayudarte."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#d58b88] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#c47a77] transition font-fredoka-one focus:outline-none focus:ring-2 focus:ring-[#d58b88]"
                >
                  <Send className="h-4 w-4" />
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </article>

          {/* INFO + HORARIO */}
          <div id="info" className="space-y-6 scroll-mt-24">
            <article className="rounded-3xl border border-[#d58b88]/20 bg-white shadow-sm p-6 sm:p-7">
              <h2 className="text-lg sm:text-xl font-semibold text-[#2d2d2d] font-fredoka-one mb-4">
                Información de Contacto
              </h2>
              <ul className="space-y-4 text-sm text-gray-600 font-poppins">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d58b88]/10 flex-shrink-0">
                    <Mail className="h-4 w-4 text-[#d58b88]" />
                  </span>
                  <div>
                    <p className="font-medium text-[#2d2d2d]">Correo</p>
                    <a href="mailto:contacto@romiai.com.mx" className="text-[#d58b88] hover:underline">
                      contacto@romiai.com.mx
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d58b88]/10 flex-shrink-0">
                    <Phone className="h-4 w-4 text-[#d58b88]" />
                  </span>
                  <div>
                    <p className="font-medium text-[#2d2d2d]">Teléfono</p>
                    <a href="tel:+522224335093" className="text-[#d58b88] hover:underline">
                      22 24 33 50 93
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d58b88]/10 flex-shrink-0">
                    <MapPin className="h-4 w-4 text-[#d58b88]" />
                  </span>
                  <div>
                    <p className="font-medium text-[#2d2d2d]">Dirección</p>
                    <p className="leading-relaxed">
                      Hospital Ángeles Puebla<br />
                      Av. Kepler No. 2143, Torre de Especialidades IV<br />
                      Consultorio 3800, CP 72820<br />
                      Reserva Territorial Atlixcáyotl, Puebla, Pue.
                    </p>
                  </div>
                </li>
              </ul>
            </article>

            <article className="rounded-3xl border border-[#d58b88]/20 bg-gradient-to-br from-[#EBD9D8]/20 to-white shadow-sm p-6 sm:p-7 text-sm text-gray-600 font-poppins">
              <h2 className="text-lg sm:text-xl font-semibold text-[#2d2d2d] font-fredoka-one mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#d58b88]" />
                Horario de Atención
              </h2>
              <p><span className="font-semibold text-[#2d2d2d]">Lunes a Viernes:</span> 9:00 AM – 6:00 PM (GMT-6)</p>
              <p><span className="font-semibold text-[#2d2d2d]">Sábados:</span> 10:00 AM – 2:00 PM (GMT-6)</p>
              <p><span className="font-semibold text-[#2d2d2d]">Domingos y Feriados:</span> Cerrado</p>
              <p className="mt-3 text-xs">
                Nuestro asistente virtual ROMI está disponible 24/7 para resolver tus dudas.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* REDES SOCIALES */}
      <section id="redes" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-gradient-to-br from-[#d58b88]/5 to-[#dabebd]/10 border-t border-[#d58b88]/20">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <header className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-fredoka-one text-[#d58b88] mb-3">
              Síguenos en Redes Sociales
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-poppins">
              Síguenos para enterarte de nuestras novedades, próximas actualizaciones y datos curiosos.
            </p>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Seguir a ROMI en ${s.label}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-[#d58b88]/20 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition text-center"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d58b88]/10 text-[#d58b88]">
                  {s.icon}
                </span>
                <div>
                  <p className="font-semibold text-sm text-[#2d2d2d] font-poppins">{s.label}</p>
                  <p className="text-xs text-gray-500 font-poppins mt-0.5">{s.handle}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-[#d58b88] font-medium">
                  Seguir <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOPORTE */}
      <section id="soporte" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 border-t border-[#d58b88]/20 bg-[#f8f6f6]">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <header className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl font-fredoka-one text-[#d58b88] mb-4">
              Opciones de Soporte
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 font-poppins">
              Encuentra la ayuda que necesitas a través de nuestros canales de soporte.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Preguntas frecuentes */}
            <article className="rounded-2xl border border-[#d58b88]/20 bg-white p-6 shadow-sm text-center hover:shadow-md transition">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#d58b88]/10">
                <HelpCircle className="h-6 w-6 text-[#d58b88]" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#2d2d2d] font-fredoka-one">
                Preguntas Frecuentes
              </h3>
              <p className="mt-2 text-sm text-gray-600 font-poppins">
                Encuentra respuestas rápidas a tus dudas más comunes.
              </p>
              <a
                href="#formulario"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-[#d58b88]/30 px-4 py-1.5 text-xs font-medium text-[#d58b88] hover:bg-[#d58b88]/5 transition font-poppins focus:outline-none focus:ring-2 focus:ring-[#d58b88]"
              >
                Enviar pregunta
              </a>
            </article>

            {/* Chat ROMI — WhatsApp */}
            <article className="rounded-2xl border border-[#d58b88]/20 bg-white p-6 shadow-sm text-center hover:shadow-md transition">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#d58b88]/10">
                <MessageCircle className="h-6 w-6 text-[#d58b88]" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#2d2d2d] font-fredoka-one">
                Chat ROMI
              </h3>
              <p className="mt-2 text-sm text-gray-600 font-poppins">
                Comunícate con ROMI por WhatsApp.
              </p>
              <a
                href="https://wa.me/522224335093"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp de ROMI"
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 py-1.5 text-xs font-medium text-white hover:bg-[#1ebe5d] transition font-poppins focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Abrir WhatsApp
              </a>
            </article>

            {/* Soporte técnico */}
            <article className="rounded-2xl border border-[#d58b88]/20 bg-white p-6 shadow-sm text-center hover:shadow-md transition">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#d58b88]/10">
                <Headphones className="h-6 w-6 text-[#d58b88]" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#2d2d2d] font-fredoka-one">
                Soporte Técnico
              </h3>
              <p className="mt-2 text-sm text-gray-600 font-poppins">
                Asistencia especializada para profesionales.
              </p>
              <a
                href="tel:+522224335093"
                className="mt-3 block text-sm font-semibold text-[#d58b88] font-poppins hover:underline"
              >
                22 24 33 50 93
              </a>
              <a
                href="tel:+522224335093"
                className="mt-2 inline-flex items-center justify-center rounded-full border border-[#d58b88]/30 px-4 py-1.5 text-xs font-medium text-[#d58b88] hover:bg-[#d58b88]/5 transition font-poppins focus:outline-none focus:ring-2 focus:ring-[#d58b88]"
              >
                Llamar ahora
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="relative left-1/2 -translate-x-1/2 w-screen bg-white">
        <div className="mx-auto max-w-7xl px-8 py-16">
          <div className="rounded-3xl overflow-hidden border border-[#d58b88]/20 shadow-sm h-72">
            <iframe
              title="Ubicación Hospital Ángeles Puebla"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4!2d-98.2523!3d19.0245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0e392b1d97d%3A0x7e5af4f88736e5a2!2sHospital%20%C3%81ngeles%20Puebla!5e0!3m2!1ses!2smx!4v1680000000000!5m2!1ses!2smx"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-xs text-gray-400 text-center font-poppins">
            Av. Kepler No. 2143, Torre de Especialidades IV, Consultorio 3800 — Hospital Ángeles Puebla
          </p>
        </div>
      </section>

    </main>
  );
}
