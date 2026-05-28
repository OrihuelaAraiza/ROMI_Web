import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays, Clock3, MapPin, ExternalLink,
  PlayCircle, Compass, Calendar, Globe,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = { title: "ROMI — Eventos Médicos" };

const events = [
  {
    tag: "Congreso",
    image: "/images/congreso.jpeg",
    title: "Congreso Internacional de Oncología 2025",
    date: "15–18 Enero 2025",
    time: "09:00 – 18:00",
    location: "Virtual (Plataforma Zoom)",
    description: "Únete a los mejores especialistas en oncología en nuestro próximo congreso virtual. Presentaciones, talleres y networking.",
    price: "$250 USD",
  },
  {
    tag: "Simposio",
    image: "/images/congreso2.jpeg",
    title: "Simposio de Avances en Cardiología",
    date: "25 Febrero 2025",
    time: "10:00 – 16:00",
    location: "Ciudad de México (Hotel Hilton)",
    description: "Discusión de los últimos avances en diagnóstico y tratamiento cardiovascular. Casos clínicos y mesas redondas.",
    price: "$150 USD",
  },
];

const international = [
  { title: "ESMO", subtitle: "European Society for Medical Oncology", link: "https://www.esmo.org/" },
  { title: "ASCO", subtitle: "American Society of Clinical Oncology",  link: "https://www.asco.org/" },
  { title: "SMEO", subtitle: "Sociedad Mexicana de Oncología",         link: "https://www.smeo.org.mx/" },
];

function SideLink({ href, title, active = false }: { href: string; title: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.98] ${
        active ? "bg-[var(--chip-bg)] text-[var(--primary)] font-semibold" : "text-[var(--text-primary)] hover:bg-[var(--surface-alt)]"
      }`}
    >
      {title}
    </Link>
  );
}

export default function EventsPage() {
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
              <p className="inline-flex items-center gap-2 rounded-full bg-[var(--chip-bg)] backdrop-blur px-4 py-1.5 text-xs font-medium mb-5 sm:mb-6">
                <Calendar className="h-4 w-4" /> Eventos médicos 2025
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-fredoka-one drop-shadow-sm mb-5 sm:mb-6">
                Congresos y Eventos Médicos
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 font-poppins">
                Mantente al día con los últimos congresos, simposios, webinars y talleres. Conecta con expertos y amplía tus conocimientos.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[["20+","Eventos 2025"],["Global","Alcance"],["Virtual","Y Presencial"]].map(([v,l]) => (
                  <div key={l}>
                    <div className="text-2xl sm:text-3xl font-bold font-fredoka-one">{v}</div>
                    <div className="text-xs sm:text-sm text-white/80 font-poppins">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="md:col-span-2">
              <nav className="rounded-3xl bg-[var(--surface-card-soft)] backdrop-blur border border-[var(--surface-card-border-soft)] p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-lg">
                <h2 className="text-[var(--primary)] font-fredoka-one text-xl flex items-center gap-2">
                  <Compass className="h-5 w-5" /> Navegación
                </h2>
                <SideLink href="#proximos"        title="Próximos Eventos"             active />
                <SideLink href="#internacionales" title="Congresos Internacionales" />
                <SideLink href="#calendario"      title="Ver Calendario" />
              </nav>
            </aside>
          </div>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section id="proximos" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Reveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-fredoka-one text-[var(--primary)] mb-4">Próximos Eventos</h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-poppins">Inscríbete en los eventos más relevantes del sector salud</p>
          </Reveal>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {events.map((ev, i) => (
              <Reveal key={ev.title} type="scale" delay={i * 80}>
                <article className="rounded-3xl border border-[var(--surface-card-border-soft)] bg-[var(--surface)] shadow-sm overflow-hidden card-premium group">
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={ev.image}
                      alt={ev.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs font-medium px-3 py-1 rounded-full shadow font-fredoka-one">
                      {ev.tag}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] font-fredoka-one">{ev.title}</h3>
                    <div className="space-y-1 text-sm text-[var(--text-body)] font-poppins">
                      <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[var(--primary)] flex-shrink-0" />{ev.date}</p>
                      <p className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[var(--primary)] flex-shrink-0" />{ev.time}</p>
                      <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--primary)] flex-shrink-0" />{ev.location}</p>
                    </div>
                    <p className="text-sm text-[var(--text-body)] font-poppins">{ev.description}</p>
                    <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
                      <span className="text-lg font-semibold text-[var(--primary)] font-fredoka-one">{ev.price}</span>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-[var(--surface-card-border-soft)] text-sm rounded-lg hover:bg-[var(--chip-bg)] transition-all duration-200 text-[var(--text-primary)] font-poppins active:scale-95">
                          Plataforma
                        </button>
                        <button className="px-4 py-1.5 bg-[var(--primary)] text-white text-sm rounded-lg shadow hover:bg-[var(--primary-hover)] hover:shadow-md transition-all duration-200 font-fredoka-one active:scale-95">
                          Registrarse
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL SECTION */}
      <section id="internacionales" className="relative left-1/2 -translate-x-1/2 w-screen scroll-mt-24 bg-[var(--surface-alt)] border-y border-[var(--surface-card-border-soft)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Reveal className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-fredoka-one text-[var(--primary)] mb-4">
              Congresos Internacionales Destacados
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-poppins">
              Enlaces a los principales congresos médicos a nivel mundial.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            {international.map((item, i) => (
              <Reveal key={item.title} type="scale" delay={i * 80}>
                <div className="rounded-2xl border border-[var(--surface-card-border-soft)] bg-[var(--surface)] p-5 sm:p-6 shadow-sm text-center card-premium">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 mx-auto rounded-full bg-[var(--chip-bg)] flex items-center justify-center mb-4 icon-lift">
                    <Globe className="h-5 sm:h-6 w-5 sm:w-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg text-[var(--text-primary)] font-fredoka-one">{item.title}</h3>
                  <p className="text-sm text-[var(--text-body)] font-poppins mb-4">{item.subtitle}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white text-sm rounded-full hover:bg-[var(--primary-hover)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 font-poppins shadow active:scale-95"
                  >
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
