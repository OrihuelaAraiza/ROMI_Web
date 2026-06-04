"use client";

import { ShieldCheck, Video, Clock3 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DoctorsHero() {
  const t = useTranslations("doctors");
  return (
    <>
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gradient-romi">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center text-white">
          <h1 className="font-fredoka-one text-4xl md:text-5xl font-extrabold tracking-tight">
            {t("hero")}
          </h1>
          <p className="mt-3 text-base md:text-lg opacity-90">
            {t("heroText")}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 text-[var(--romi-navy)] px-3 py-1.5 text-sm shadow-sm">
              <Video className="w-4 h-4 text-primary" />
              {t("hd")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 text-[var(--romi-navy)] px-3 py-1.5 text-sm shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              {t("secure")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 text-[var(--romi-navy)] px-3 py-1.5 text-sm shadow-sm">
              <Clock3 className="w-4 h-4 text-primary" />
              {t("available247")}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-10">
        <h2 className="font-fredoka-one text-2xl md:text-3xl font-extrabold text-center text-primary">
          {t("find")}
        </h2>
        <p className="mt-3 text-[var(--text-body)] text-center">
          {t("findText")}
        </p>
      </div>
    </>
  );
}
