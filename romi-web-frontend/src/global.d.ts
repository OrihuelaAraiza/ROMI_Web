import es from "../messages/es.json";

declare global {
  interface IntlMessages extends Record<string, unknown> {}
}

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof es;
    Locale: "es" | "en";
  }
}

export {};

