import type { MetadataRoute } from "next";
import { locales, localizePath, publicInternalPaths } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://romiai.com.mx";
  return publicInternalPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${baseUrl}${localizePath(path, locale)}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}${localizePath(path, "es")}`,
          en: `${baseUrl}${localizePath(path, "en")}`,
        },
      },
    }))
  );
}

