import {getRequestConfig} from "next-intl/server";
import {headers} from "next/headers";
import {defaultLocale, isLocale} from "./routing";

export default getRequestConfig(async () => {
  const requested = headers().get("x-romi-locale") ?? defaultLocale;
  const locale = isLocale(requested) ? requested : defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    formats: {
      dateTime: {
        short: {year: "numeric", month: "short", day: "numeric"},
        appointment: {year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit"},
      },
      number: {
        integer: {maximumFractionDigits: 0},
      },
    },
    timeZone: "America/Mexico_City",
  };
});

