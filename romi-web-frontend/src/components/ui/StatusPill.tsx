"use client";

import { useTranslations } from "next-intl";

const MAP: Record<string, string> = {
  PENDING:   "bg-amber-50 text-amber-700 border-amber-200",
  ACCEPTED:  "bg-emerald-50 text-emerald-700 border-emerald-200",
  REJECTED:  "bg-rose-50 text-rose-700 border-rose-200",
  CANCELED:  "bg-zinc-100 text-zinc-600 border-zinc-200",
};

const LABEL_KEYS = {
  PENDING: "PENDING",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  CANCELED: "CANCELED",
  CANCELLED: "CANCELLED",
  ATTENDED: "ATTENDED",
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
  NO_SHOW: "NO_SHOW",
} as const;

export default function StatusPill({ value }: { value: string }) {
  const t = useTranslations("status");
  const cls = MAP[value] ?? "bg-zinc-100 text-zinc-600 border-zinc-200";
  const key = LABEL_KEYS[value as keyof typeof LABEL_KEYS];
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs border ${cls}`}>
      {key ? t(key) : value}
    </span>
  );
}
