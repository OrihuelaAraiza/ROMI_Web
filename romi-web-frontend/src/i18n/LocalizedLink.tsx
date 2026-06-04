"use client";

import NextLink, {type LinkProps} from "next/link";
import {useLocale} from "next-intl";
import {type AnchorHTMLAttributes} from "react";
import {localizePath, type Locale} from "./routing";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    href: string;
  };

export default function LocalizedLink({href, ...props}: Props) {
  const locale = useLocale() as Locale;
  const localizedHref = href.startsWith("/") && !href.startsWith("//") ? localizePath(href, locale) : href;
  return <NextLink href={localizedHref} {...props} />;
}

