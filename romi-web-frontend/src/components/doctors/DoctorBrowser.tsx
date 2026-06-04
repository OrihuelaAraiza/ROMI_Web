"use client";

import { useEffect, useMemo, useState } from "react";
import DoctorsHero from "./DoctorHero";
import DoctorCard, { Doctor } from "./DoctorCard";
import { apiFetchAuth, endpoints } from "@/lib/api";
import { errMsg } from "@/lib/errors";
import { useLocale, useTranslations } from "next-intl";

type ApiDoctorRow = {
  id: number | string;
  name?: string;
  fullName?: string;
  specialty?: string;
  role?: string;
  city?: string;
  location?: string;
  price?: number;
  rating?: number;
  years_exp?: number;
  next_available?: string;
  languages?: string[];
  is_available?: boolean;
};

function normalize(s?: string) {
  if (!s) return "";
  return s
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, " ");
}
function singular(s: string) {
  return s.replace(/(oes|es|s)$/, (m) => (m === "s" ? "" : "o"));
}
function nkey(s?: string) {
  return singular(normalize(s));
}

export default function DoctorsBrowser() {
  const t = useTranslations("doctors");
  const locale = useLocale();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [query, setQuery] = useState("");
  const [spec, setSpec] = useState<string>("todas");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await apiFetchAuth<ApiDoctorRow[]>(endpoints.users.listDoctors, { method: "GET" });

        if (!alive) return;
        setDoctors(
          (data ?? []).map((x) => ({
            id: x.id,
            name: x.name ?? x.fullName ?? "Dr. Sin Nombre",
            specialty: x.specialty ?? x.role ?? "General",
            city: x.city ?? x.location ?? undefined,
            price: x.price ?? 800,
            rating: x.rating ?? 4.8,
            years_exp: x.years_exp ?? 10,
            next_available: x.next_available ?? "Hoy 3:00 PM",
            languages: x.languages ?? [locale === "en" ? "Spanish" : "Español"],
            is_available: x.is_available ?? true,
          }))
        );
      } catch (e: unknown) {
        setError(errMsg(e, "No se pudieron cargar los doctores."));
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [locale]);

  const chips = useMemo(() => {
    const labelByKey = new Map<string, string>();
    for (const d of doctors) {
      const key = nkey(d.specialty);
      const label = d.specialty?.trim() || "General";
      if (key) labelByKey.set(key, label);
    }
    const entries = Array.from(labelByKey.entries()).sort((a, b) => a[1].localeCompare(b[1], "es"));
    return [{ key: "todas", label: t("all") }, ...entries.map(([key, label]) => ({ key, label }))];
  }, [doctors, t]);

  const filtered = useMemo(() => {
    const q = normalize(query);
    const specKey = spec;
    return doctors.filter((d) => {
      const dSpecKey = nkey(d.specialty);

      const okSpec = specKey === "todas" ? true : dSpecKey === specKey;
      const okQuery =
        !q ||
        normalize(d.name).includes(q) ||
        normalize(d.city).includes(q) ||
        normalize(d.specialty).includes(q);

      return okSpec && okQuery;
    });
  }, [doctors, query, spec]);

  if (loading) {
    return (
      <>
        <DoctorsHero />
        <div className="mx-auto max-w-6xl px-4 mt-6 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="romi-panel h-48 animate-pulse" />
          ))}
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <DoctorsHero />
        <div className="mx-auto max-w-6xl px-4">
          <div className="romi-panel mt-6 border-[var(--destructive)] text-[var(--destructive)]">{error}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <DoctorsHero />

      <div className="mx-auto max-w-6xl px-4  mt-6 mb-16">
        <div className="mt-6 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between ">
          <div className="flex gap-2 overflow-x-auto">
            {chips.map((c) => (
              <button
                key={c.key}
                onClick={() => setSpec(c.key)}
                className={`min-h-11 rounded-full border-2 px-4 py-2 text-sm font-semibold whitespace-nowrap transition ${
                  spec === c.key ? "border-[var(--surface-card-border)] bg-primary text-white shadow-[2px_2px_0_var(--shadow-ink)]" : "border-[var(--surface-card-border-soft)] bg-[var(--surface-card)] text-[var(--text-primary)] hover:bg-[var(--chip-bg)]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search")}
            className="romi-field md:w-80"
          />
        </div>

        <div className="mt-3 text-sm text-[var(--text-muted)]">
          {t("found", {count: filtered.length})}
          {spec !== "todas" && (
            <span>
              {" "}• Filtro: <span className="font-medium text-[var(--text-primary)]">{chips.find((c) => c.key === spec)?.label}</span>
            </span>
          )}
        </div>

        <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <DoctorCard key={d.id} d={d} />
          ))}
        </div>

        {!filtered.length && (
          <div className="romi-empty mt-8">
            {t("none")}
          </div>
        )}
      </div>
    </>
  );
}
