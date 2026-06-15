export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";
export const localeCookie = "ROMI_LOCALE";

type RouteEntry = {
  internal: string;
  es: string;
  en: string;
};

const routeEntries: RouteEntry[] = [
  { internal: "/", es: "/", en: "/" },
  { internal: "/Services", es: "/servicios", en: "/services" },
  { internal: "/Formation", es: "/formacion", en: "/education" },
  { internal: "/Investigation", es: "/investigacion", en: "/research" },
  { internal: "/Speciality", es: "/especialidades", en: "/specialties" },
  { internal: "/Contact", es: "/contacto", en: "/contact" },
  { internal: "/apps", es: "/apps", en: "/apps" },
  { internal: "/Presentation", es: "/sobre-nosotros", en: "/about" },
  { internal: "/Events", es: "/eventos", en: "/events" },
  { internal: "/Telesalud", es: "/telesalud", en: "/telehealth" },
  { internal: "/Auth/Login/Register", es: "/registro", en: "/register" },
  { internal: "/Auth/Login", es: "/iniciar-sesion", en: "/login" },
  { internal: "/appointments/success", es: "/citas/confirmacion", en: "/appointments/success" },
  { internal: "/appointments/new", es: "/citas/nueva", en: "/appointments/new" },
  { internal: "/appointments", es: "/citas", en: "/appointments" },
  { internal: "/patient/appointments", es: "/paciente/citas", en: "/patient/appointments" },
  { internal: "/doctor/appointments", es: "/doctor/citas", en: "/doctor/appointments" },
  { internal: "/doctor", es: "/doctor", en: "/doctor" },
  { internal: "/dashboard", es: "/panel", en: "/dashboard" },
  { internal: "/doctores", es: "/doctores", en: "/doctors" },
  { internal: "/chat", es: "/chat", en: "/chat" },
  { internal: "/Seguimiento", es: "/seguimiento", en: "/follow-up" },
  { internal: "/terminos-condiciones", es: "/terminos-condiciones", en: "/terms-and-conditions" },
  { internal: "/aviso-privacidad", es: "/aviso-privacidad", en: "/privacy-policy" },
].sort((a, b) => b.internal.length - a.internal.length);

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getPathLocale(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : null;
}

export function stripLocale(pathname: string) {
  const locale = getPathLocale(pathname);
  if (!locale) return pathname || "/";
  const path = pathname.slice(locale.length + 1);
  return path || "/";
}

function replacePrefix(pathname: string, from: string, to: string) {
  if (pathname === from) return to;
  if (from !== "/" && pathname.startsWith(`${from}/`)) return `${to}${pathname.slice(from.length)}`;
  return null;
}

export function internalizePath(pathname: string, locale: Locale) {
  const path = stripLocale(pathname);
  for (const entry of routeEntries) {
    const localized = entry[locale];
    const result = replacePrefix(path, localized, entry.internal);
    if (result) return result;
  }
  return path;
}

export function localizePath(pathname: string, locale: Locale) {
  const suffixIndex = pathname.search(/[?#]/);
  const pathOnly = suffixIndex >= 0 ? pathname.slice(0, suffixIndex) : pathname;
  const suffix = suffixIndex >= 0 ? pathname.slice(suffixIndex) : "";
  const internal = getPathLocale(pathOnly)
    ? internalizePath(pathOnly, getPathLocale(pathOnly)!)
    : pathOnly || "/";

  for (const entry of routeEntries) {
    const result = replacePrefix(internal, entry.internal, entry[locale]);
    if (result) return `/${locale}${result === "/" ? "" : result}${suffix}`;
  }
  return `/${locale}${internal.startsWith("/") ? internal : `/${internal}`}${suffix}`;
}

export function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  return header.toLowerCase().split(",").some((part) => part.trim().startsWith("en")) ? "en" : defaultLocale;
}

export const publicInternalPaths = [
  "/",
  "/Services",
  "/Formation",
  "/Investigation",
  "/Speciality",
  "/Contact",
  "/apps",
  "/Presentation",
  "/Events",
  "/Telesalud",
  "/doctores",
  "/chat",
  "/terminos-condiciones",
  "/aviso-privacidad",
] as const;
