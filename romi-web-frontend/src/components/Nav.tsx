"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, LayoutDashboard, CalendarDays } from "lucide-react";
import { useAuth } from "@/app/Auth/contexts/AuthContext";
import Image from "next/image";
import { useRealtime } from "@/hooks/useRealtime";
import { apiFetchAuth, endpoints } from "@/lib/api";
import type { NotificationDTO } from "@/types/notifications";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/Services", label: "Servicios" },
  { href: "/Formation", label: "Formación" },
  { href: "/Investigation", label: "Investigación" },
  { href: "/Speciality", label: "Especialidades" },
  { href: "/Contact", label: "Contacto" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const isLoggedIn = !!user;
  const [unread, setUnread] = useState(0);
  const userId = user?.id ?? null;
  const { notifications: realtimeNotifications } = useRealtime({ userId });

  /* ─── Scroll shadow ─── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!userId) { setUnread(0); return; }
    (async () => {
      try {
        const data = await apiFetchAuth<NotificationDTO[]>(endpoints.notifications.list(), { method: "GET" });
        setUnread(Array.isArray(data) ? data.filter((n) => !n.readAt).length : 0);
      } catch { setUnread(0); }
    })();
  }, [userId]);

  useEffect(() => {
    if (!realtimeNotifications.length) return;
    setUnread((prev) => prev + realtimeNotifications.filter((n) => !n.readAt).length);
  }, [realtimeNotifications]);

  /* ─── Close on route change ─── */
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const handleLogout = () => { logout(); setOpen(false); };

  const roles = (user?.roles ?? []).map((r) => String(r).toUpperCase().replace(/^ROLE_/, ""));
  const isPatient   = roles.includes("PATIENT");
  const isAdmin     = roles.includes("ADMIN");
  const isDoctor    = roles.includes("DOCTOR");
  const showDoctorArea = isDoctor || isAdmin;

  const doctorDashboardHref  = "/dashboard";
  const patientDashboardHref = "/appointments";

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-[0_4px_24px_rgba(0,0,0,0.10)] backdrop-blur-md"
            : "shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4 lg:gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <Image
              src="/images/ROMO.png"
              alt="ROMI"
              width={110}
              height={36}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-underline relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(l.href)
                    ? "text-primary nav-active"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex-1" />

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {isLoggedIn && showDoctorArea && (
              <Link
                href={doctorDashboardHref}
                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-white px-3 py-2 text-sm font-medium text-primary hover:bg-primary/5 hover:border-primary/60 whitespace-nowrap transition-all duration-200"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            )}

            {isLoggedIn && isPatient && (
              <Link
                href={patientDashboardHref}
                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-white px-3 py-2 text-sm font-medium text-primary hover:bg-primary/5 hover:border-primary/60 whitespace-nowrap transition-all duration-200"
              >
                <CalendarDays className="h-4 w-4" />
                <span>Mis citas</span>
              </Link>
            )}

            {/* Chat ROMI */}
            <div className="relative">
              <Link
                href="/chat"
                className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#d58b88] via-[#d79c9c] to-[#dabebd] text-white text-sm font-medium whitespace-nowrap shadow-md btn-glow"
              >
                Chat ROMI
              </Link>
              {unread > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-semibold text-white">
                  {unread > 99 ? "99+" : unread}
                </span>
              )}
            </div>

            {/* Login / Logout */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#d58b88] via-[#d79c9c] to-[#dabebd] text-white text-sm font-medium whitespace-nowrap shadow-md btn-glow"
              >
                Cerrar sesión
              </button>
            ) : (
              <Link
                href="/Auth/Login"
                className="px-4 py-2.5 rounded-full text-sm font-medium border-2 border-[#d58b88] text-[#d58b88] bg-white hover:bg-[#d58b88] hover:text-white whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:shadow-[#d58b88]/25"
              >
                Iniciar sesión
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block transition-all duration-300 ${open ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100"}`}
            >
              <Menu size={20} />
            </span>
            <span
              className={`block transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0 absolute"}`}
            >
              <X size={20} />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm animate-mobile-nav-in">
            <div className="px-4 py-4 flex flex-col gap-1.5">
              {LINKS.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${i * 35}ms` }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(l.href)
                      ? "text-primary bg-primary/8 font-semibold"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 active:scale-[0.98]"
                  }`}
                >
                  {l.label}
                </Link>
              ))}

              {isLoggedIn && showDoctorArea && (
                <Link
                  href={doctorDashboardHref}
                  onClick={() => setOpen(false)}
                  className="mt-1 px-4 py-2.5 rounded-xl text-sm border border-primary/30 bg-white text-primary flex items-center gap-2 hover:bg-primary/5 transition-all duration-200"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              )}

              {isLoggedIn && isPatient && (
                <Link
                  href={patientDashboardHref}
                  onClick={() => setOpen(false)}
                  className="mt-1 px-4 py-2.5 rounded-xl text-sm border border-primary/30 bg-white text-primary flex items-center gap-2 hover:bg-primary/5 transition-all duration-200"
                >
                  <CalendarDays className="h-4 w-4" />
                  <span>Mis citas</span>
                </Link>
              )}

              <div className="h-1.5" />

              {/* Chat ROMI mobile */}
              <div className="relative">
                <Link
                  href="/chat"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-full bg-gradient-to-r from-[#d58b88] via-[#d79c9c] to-[#dabebd] text-white text-sm text-center font-medium shadow-md active:scale-[0.98] transition-all duration-200"
                >
                  Chat ROMI
                </Link>
                {unread > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-semibold text-white">
                    {unread > 99 ? "99+" : unread}
                  </span>
                )}
              </div>

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 rounded-full bg-gradient-to-r from-[#d58b88] via-[#d79c9c] to-[#dabebd] text-white text-sm font-medium shadow-md active:scale-[0.98] transition-all duration-200"
                >
                  Cerrar sesión
                </button>
              ) : (
                <Link
                  href="/Auth/Login"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-full text-sm font-medium border-2 border-[#d58b88] text-[#d58b88] bg-white hover:bg-[#d58b88] hover:text-white text-center transition-all duration-300"
                >
                  Iniciar sesión
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
      <div className="h-1" />
    </>
  );
}
