"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { localizePath, type Locale } from "./routing";

export function useLocalizedRouter() {
  const router = useRouter();
  const locale = useLocale() as Locale;

  return useMemo(() => ({
    ...router,
    push: (href: string, options?: {scroll?: boolean}) => router.push(localizePath(href, locale), options),
    replace: (href: string, options?: {scroll?: boolean}) => router.replace(localizePath(href, locale), options),
  }), [locale, router]);
}

