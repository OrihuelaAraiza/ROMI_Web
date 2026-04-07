import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { AuthProvider } from "./Auth/contexts/AuthContext";
import MedicalBg from "@/components/MedicalBg";
import TalentLandBar from "@/components/TalentLandBar";
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

export const metadata: Metadata = {
  title: "ROMI",
  description: "Servicios Médicos Integrales",
  icons: {
    icon: [{ url: iconPath, type: "image/png" }],
    apple: [{ url: iconPath, type: "image/png" }],
    shortcut: iconPath,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fredoka.className} ${fredoka.variable} ${poppins.variable}`}>
      <body className="bg-gradient-to-b from-[#D58B88] to-[#EBD9D8] overflow-x-hidden">
        <MedicalBg />
        <TalentLandBar />
        <AuthProvider>
          <Navbar />
          <main className="relative z-10 max-w-6xl mx-auto px-4">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
