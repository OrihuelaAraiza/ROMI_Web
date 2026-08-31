export const LEGACY_APPS = [
  {
    id: "nutriromi",
    name: "NutriROMI",
    href: "https://nutricionromi.vercel.app/",
    category: "Nutrición",
    description: "Demo de expediente clínico de nutrición desde el punto de vista del paciente.",
    access: ["pacientecarlos@gmail.com", "Nutri16702"],
  },
  {
    id: "romimente",
    name: "ROMImente",
    href: "https://romimente.web.app/",
    category: "Psicología",
    description: "Expediente clínico de psicología para visualizar el flujo del especialista.",
    access: ["doctor@demo.com", "demo1234"],
  },
  {
    id: "laion",
    name: "LAION",
    href: "https://www.oncolatam.org/",
    category: "Educación",
    description: "Programa de inteligencia artificial en oncología para Latinoamérica.",
    access: ["medico.premium@laion.test", "admin@laion.test", "Password123!"],
  },
  {
    id: "luma",
    name: "LUMA by ROMI",
    href: "https://lumaderomi.com/",
    category: "Proyecto",
    description: "Agenda virtual para organizar atención, recordatorios y seguimiento.",
  },
] as const;
