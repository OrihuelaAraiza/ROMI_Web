"use client";

import type { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "@/i18n/LocalizedLink";

type LegalDocumentProps = {
  title: string;
  englishTitle?: string;
  updated?: string;
  englishUpdated?: string;
  children: ReactNode;
  englishChildren?: ReactNode;
  actions?: ReactNode;
};

export default function LegalDocument({
  title,
  englishTitle,
  updated,
  englishUpdated,
  children,
  englishChildren,
  actions,
}: LegalDocumentProps) {
  const t = useTranslations("legal");
  const locale = useLocale();
  const isEnglish = locale === "en";
  return (
    <main className="min-h-screen py-10 sm:py-14 lg:py-16">
      <section className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="kawaii-button inline-flex items-center rounded-full bg-[var(--surface-card)] px-5 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--chip-bg)]"
          >
            {t("home")}
          </Link>
          <Link
            href="/terminos-condiciones"
            className="kawaii-button inline-flex items-center rounded-full bg-[var(--surface-card)] px-5 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--chip-bg)]"
          >
            {t("terms")}
          </Link>
          <Link
            href="/aviso-privacidad"
            className="kawaii-button inline-flex items-center rounded-full bg-[var(--surface-card)] px-5 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--chip-bg)]"
          >
            {t("privacy")}
          </Link>
        </div>

        <article className="card-premium bg-[var(--surface-card)] p-6 sm:p-8 lg:p-10">
          <header className="mb-8">
            <p className="kawaii-chip px-4 py-1.5 text-xs">{t("label")}</p>
            <h1 className="mt-4 font-fredoka-one text-3xl font-bold leading-tight text-[var(--primary)] sm:text-4xl">
              {isEnglish && englishTitle ? englishTitle : title}
            </h1>
            {(isEnglish ? englishUpdated ?? updated : updated) ? (
              <p className="mt-3 text-sm font-semibold text-[var(--text-muted)]">
                {isEnglish ? englishUpdated ?? updated : updated}
              </p>
            ) : null}
          </header>

          {locale === "en" ? (
            <p className="mb-6 rounded-xl border-2 border-[var(--surface-card-border)] bg-[var(--romi-butter)] p-4 text-sm font-semibold text-[var(--text-primary)]">
              {t("spanishPrevails")}
            </p>
          ) : null}

          <div className="legal-copy space-y-6 text-[var(--text-body)]">
            {isEnglish && englishChildren ? englishChildren : children}
          </div>

          {actions ? <div className="mt-10 border-t border-[var(--surface-card-border-soft)] pt-6">{actions}</div> : null}
        </article>
      </section>
    </main>
  );
}
