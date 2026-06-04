import "./globals.css";
import "leaflet/dist/leaflet.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { localizePath, type Locale } from "@/i18n/routing";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { AuthProvider } from "./Auth/contexts/AuthContext";
import MedicalBg from "@/components/MedicalBg";
import { Fredoka, Poppins } from "next/font/google";

const fredoka = Fredoka({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
});

const iconPath = "/images/iconoROMI.png";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  const locale = await getLocale() as Locale;
  const internalPath = headers().get("x-romi-internal-path") ?? "/";
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: localizePath(internalPath, locale),
      languages: { es: localizePath(internalPath, "es"), en: localizePath(internalPath, "en") },
    },
    icons: {
      icon: [{ url: iconPath, type: "image/png" }],
      apple: [{ url: iconPath, type: "image/png" }],
      shortcut: iconPath,
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning className={`${fredoka.className} ${fredoka.variable} ${poppins.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem("romi-theme") || "light";
                document.documentElement.dataset.theme = theme;
              } catch (_) {
                document.documentElement.dataset.theme = "light";
              }
            `,
          }}
        />
      </head>
      <body className="romi-app-shell overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <MedicalBg />
          <AuthProvider>
            <Navbar />
            <main className="relative z-10 max-w-6xl mx-auto px-4">{children}</main>
            <Footer />
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
