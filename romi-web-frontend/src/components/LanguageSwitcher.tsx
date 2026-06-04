"use client";

import {useLocale, useTranslations} from "next-intl";
import {usePathname, useSearchParams} from "next/navigation";
import {localizePath, type Locale} from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("language");

  const hrefFor = (nextLocale: Locale) => {
    const query = searchParams.toString();
    return `${localizePath(pathname, nextLocale)}${query ? `?${query}` : ""}`;
  };

  return (
    <div
      className="inline-flex h-10 items-center rounded-xl border-[2.5px] border-[var(--surface-card-border)] bg-[var(--surface-card)] p-1 shadow-[3px_3px_0_var(--shadow-ink)]"
      aria-label={t("label")}
      role="group"
    >
      {(["es", "en"] as const).map((item) => (
        <a
          key={item}
          href={hrefFor(item)}
          hrefLang={item}
          aria-current={locale === item ? "true" : undefined}
          onClick={(event) => {
            if (!window.location.hash) return;
            event.preventDefault();
            window.location.assign(`${hrefFor(item)}${window.location.hash}`);
          }}
          className={`grid min-h-8 min-w-9 place-items-center rounded-lg px-2 text-xs font-extrabold transition-colors ${
            locale === item
              ? "bg-[var(--romi-yellow)] text-[var(--romi-ink)]"
              : "text-[var(--text-body)] hover:bg-[var(--chip-bg)]"
          }`}
        >
          {item.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
