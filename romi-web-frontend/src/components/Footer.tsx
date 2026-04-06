import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ajolomed.romi?igsh=MWdzaXZsbGVnb21uMA==",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.038-1.942 1.341-1.34 1.857-3.182 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.085-1.856-.601-3.698-1.942-5.038C20.698.673 18.856.157 17 .072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/ROMI-asistente-inteligente/61573823379860/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.286h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://mx.linkedin.com/company/romiasistentemedicovirtualinteligente",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@romi_ajolomedico",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/Romi_Ajolomed",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-3">

        {/* Column 1 — Horario + contacto */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-fredoka-one text-[#dabebd]">Horario de Atención</h3>
          <ul className="space-y-2 text-sm font-poppins text-gray-300">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#d58b88] flex-shrink-0" />
              <span><strong className="text-white">Lun – Vie:</strong> 9:00 AM – 6:00 PM (GMT-6)</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#d58b88] flex-shrink-0" />
              <span><strong className="text-white">Sáb:</strong> 10:00 AM – 2:00 PM (GMT-6)</span>
            </li>
          </ul>

          <div className="pt-2 space-y-2 text-sm font-poppins text-gray-300">
            <a
              href="mailto:contacto@romiai.com.mx"
              className="flex items-center gap-2 hover:text-[#d58b88] transition-colors duration-200 group"
            >
              <Mail className="h-4 w-4 text-[#d58b88] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              contacto@romiai.com.mx
            </a>
            <a
              href="tel:+522224335093"
              className="flex items-center gap-2 hover:text-[#d58b88] transition-colors duration-200 group"
            >
              <Phone className="h-4 w-4 text-[#d58b88] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              22 24 33 50 93
            </a>
          </div>
        </div>

        {/* Column 2 — Redes sociales */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-fredoka-one text-[#dabebd]">Síguenos</h3>
          <p className="text-xs text-gray-400 font-poppins leading-relaxed">
            Entérate de nuestras novedades, próximas actualizaciones y datos curiosos.
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`ROMI en ${s.label}`}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-[#d58b88] hover:scale-110 hover:shadow-lg hover:shadow-[#d58b88]/30 transition-all duration-200 text-gray-300 hover:text-white active:scale-95"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 — Dirección */}
        <div className="space-y-4 sm:col-span-2 md:col-span-1">
          <h3 className="text-base sm:text-lg font-fredoka-one text-[#dabebd]">Dirección</h3>
          <address className="not-italic text-sm font-poppins text-gray-300 flex items-start gap-2 leading-relaxed">
            <MapPin className="h-4 w-4 text-[#d58b88] flex-shrink-0 mt-0.5" />
            <span>
              Hospital Ángeles Puebla<br />
              Av. Kepler No. 2143<br />
              Torre de Especialidades IV, Consultorio 3800<br />
              CP 72820, Reserva Territorial Atlixcáyotl<br />
              Puebla, Pue.
            </span>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-poppins">
          <p className="text-center sm:text-left">© 2026 Red de Optimización Médica Inteligente. Todos los derechos reservados.</p>
          <Link
            href="/aviso-privacidad"
            className="hover:text-[#d58b88] transition-colors duration-200 whitespace-nowrap"
          >
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
