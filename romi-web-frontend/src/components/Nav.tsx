"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, LayoutDashboard, CalendarDays } from "lucide-react";
import { useAuth } from "@/app/Auth/contexts/AuthContext";
import Image from "next/image";
import { useRealtime } from "@/hooks/useRealtime";
import { apiFetchAuth, endpoints } from "@/lib/api";
import type { NotificationDTO } from "@/types/notifications";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "@/i18n/LocalizedLink";
import { internalizePath, type Locale } from "@/i18n/routing";
import { ROMI_CONTACT } from "@/lib/contact";

const LINKS = [
  { href: "/", label: "home" },
  { href: "/Services", label: "services" },
  { href: "/Formation", label: "education" },
  { href: "/Investigation", label: "research" },
  { href: "/Speciality", label: "specialties" },
  { href: "/apps", label: "apps" },
  { href: "/Contact", label: "contact" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
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

  const internalPathname = internalizePath(pathname, locale);
  const isActive = (href: string) =>
    href === "/" ? internalPathname === "/" : internalPathname.startsWith(href);

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
        className={`romi-nav sticky top-0 z-50 border-b-[3px] border-[var(--surface-card-border)] bg-[var(--surface-card)] transition-all duration-300 ${
          scrolled
            ? "shadow-[4px_4px_0_var(--shadow-ink)] backdrop-blur-md"
            : "shadow-[0_2px_0_var(--shadow-ink)]"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4 lg:gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <Image
              src="/images/ROMO.webp"
              alt="ROMI"
              width={110}
              height={36}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden xl:flex items-center gap-0.5">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-underline relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(l.href)
                    ? "text-primary nav-active bg-primary/10"
                    : "text-[var(--text-body)] hover:text-[var(--text-primary)]"
                }`}
              >
                {t(l.label)}
              </Link>
            ))}
          </div>

          <div className="flex-1" />

          {/* Desktop actions */}
          <div className="hidden xl:flex items-center gap-2 lg:gap-3">
            {isLoggedIn && showDoctorArea && (
              <Link
                href={doctorDashboardHref}
                className="inline-flex items-center gap-1.5 rounded-full border-[2px] border-[var(--surface-card-border)] bg-[var(--surface-card)] px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 whitespace-nowrap transition-all duration-200 shadow-[3px_3px_0_var(--shadow-ink)] hover:-translate-y-0.5"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>{t("dashboard")}</span>
              </Link>
            )}

            {isLoggedIn && isPatient && (
              <Link
                href={patientDashboardHref}
                className="inline-flex items-center gap-1.5 rounded-full border-[2px] border-[var(--surface-card-border)] bg-[var(--surface-card)] px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 whitespace-nowrap transition-all duration-200 shadow-[3px_3px_0_var(--shadow-ink)] hover:-translate-y-0.5"
              >
                <CalendarDays className="h-4 w-4" />
                <span>{t("appointments")}</span>
              </Link>
            )}

            {/* Chat ROMI */}
            <div className="relative">
              <a
                href={ROMI_CONTACT.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap btn-glow"
              >
                {t("chat")}
              </a>
              {unread > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-semibold text-white">
                  {unread > 99 ? "99+" : unread}
                </span>
              )}
            </div>

            {/* Logout */}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap btn-glow"
              >
                {t("logout")}
              </button>
            )}
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden ml-auto grid h-11 w-11 place-items-center rounded-xl border-2 border-[var(--surface-card-border)] bg-[var(--romi-yellow)] text-[var(--romi-ink)] hover:bg-primary/10 active:scale-95 transition-all duration-200 shadow-[3px_3px_0_var(--shadow-ink)]"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
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
          <div className="xl:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto border-t-[2.5px] border-[var(--surface-card-border)] bg-[var(--surface-card)] backdrop-blur-sm animate-mobile-nav-in">
            <div className="mx-auto max-w-2xl px-4 py-4 flex flex-col gap-1.5">
              {LINKS.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${i * 35}ms` }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(l.href)
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-[var(--text-body)] hover:text-[var(--text-primary)] hover:bg-primary/5 active:scale-[0.98]"
                  }`}
                >
                  {t(l.label)}
                </Link>
              ))}

              {isLoggedIn && showDoctorArea && (
                <Link
                  href={doctorDashboardHref}
                  onClick={() => setOpen(false)}
                  className="mt-1 px-4 py-2.5 rounded-full text-sm border-2 border-[var(--surface-card-border)] bg-[var(--surface-card)] text-primary flex items-center gap-2 hover:bg-primary/10 transition-all duration-200"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>{t("dashboard")}</span>
                </Link>
              )}

              {isLoggedIn && isPatient && (
                <Link
                  href={patientDashboardHref}
                  onClick={() => setOpen(false)}
                  className="mt-1 px-4 py-2.5 rounded-full text-sm border-2 border-[var(--surface-card-border)] bg-[var(--surface-card)] text-primary flex items-center gap-2 hover:bg-primary/10 transition-all duration-200"
                >
                  <CalendarDays className="h-4 w-4" />
                  <span>{t("appointments")}</span>
                </Link>
              )}

              <div className="h-1.5" />

              {/* Chat ROMI mobile */}
              <div className="relative">
                <a
                  href={ROMI_CONTACT.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-full text-sm text-center font-medium active:scale-[0.98] transition-all duration-200 btn-glow"
                >
                  {t("chat")}
                </a>
                {unread > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-semibold text-white">
                    {unread > 99 ? "99+" : unread}
                  </span>
                )}
              </div>

              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 rounded-full text-sm font-medium active:scale-[0.98] transition-all duration-200 btn-glow"
                >
                  {t("logout")}
                </button>
              )}
              <div className="flex justify-center gap-3 pt-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-1" />
    </>
  );
}
