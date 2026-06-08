"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocalizedRouter } from "@/i18n/useLocalizedRouter";
import { apiFetchAuth, endpoints } from "@/lib/api";
import { errMsg } from "@/lib/errors";
import {
  Trash2,
  CalendarDays,
  Clock3,
  Stethoscope,
  PlusCircle,
} from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import PageShell from "@/components/PageShell";
import PageState from "@/components/PageState";
import Panel from "@/components/Panel";
import ConfirmDialog from "@/components/ConfirmDialog";

type Appointment = {
  id: string;
  scheduledAt: string;
  reason?: string | null;
  status: "PENDING" | "ACCEPTED" | "REJECTED" | "CANCELLED" | "ATTENDED";
  doctor?: { id: string; name?: string; email?: string };
};

type PatientAppointmentsRes = Appointment[] | { items: Appointment[] };

type TabKey = "upcoming" | "history" | "all";

export default function PatientAppointmentsPage() {
  const t = useTranslations("appointments");
  const commonT = useTranslations("common");
  const statusT = useTranslations("status");
  const format = useFormatter();
  const [items, setItems] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const [tab, setTab] = useState<TabKey>("upcoming");

  const router = useLocalizedRouter();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiFetchAuth<PatientAppointmentsRes>(
        `${endpoints.appointments.byPatient}?page=1&size=50`,
        { method: "GET" }
      );
      const data = Array.isArray(res) ? res : res.items ?? [];
      setItems(data);
    } catch (e: unknown) {
      setError(errMsg(e, "Error al cargar citas"));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData().catch(() => setLoading(false));
  }, [fetchData]);

  const confirmDeleteAppointment = async () => {
    if (!pendingDeleteId) return;
    setActionError(null);
    try {
      await apiFetchAuth(endpoints.appointments.delete(pendingDeleteId), {
        method: "DELETE",
      });
      setPendingDeleteId(null);
      fetchData();
    } catch (err: unknown) {
      setActionError(t("deleteError", { error: errMsg(err) }));
    }
  };

  const upcoming = useMemo(() => {
    const now = new Date();
    return items.filter((ap) => {
      const d = new Date(ap.scheduledAt);
      return d >= now && (ap.status === "PENDING" || ap.status === "ACCEPTED");
    });
  }, [items]);

  const history = useMemo(() => {
    const now = new Date();
    return items.filter((ap) => {
      const d = new Date(ap.scheduledAt);
      return (
        d < now ||
        ap.status === "ATTENDED" ||
        ap.status === "CANCELLED" ||
        ap.status === "REJECTED"
      );
    });
  }, [items]);

  const stats = useMemo(
    () => ({
      total: items.length,
      proximas: upcoming.length,
      realizadas: items.filter((p) => p.status === "ATTENDED").length,
    }),
    [items, upcoming]
  );

  // Lista que se muestra según tab (UNA sola tabla siempre)
  const listToShow = useMemo(() => {
    if (tab === "upcoming") return upcoming;
    if (tab === "history") return history;
    return items;
  }, [tab, upcoming, history, items]);

  const tabLabel = useMemo(() => {
    if (tab === "upcoming") return t("upcoming");
    if (tab === "history") return t("history");
    return t("all");
  }, [tab, t]);

  if (loading)
    return (
      <PageShell>
        <PageState
          type="loading"
          title={t("loadingTitle")}
          description={t("loadingDescription")}
        />
      </PageShell>
    );

  if (error)
    return (
      <PageShell>
        <PageState
          type="error"
          title={commonT("error")}
          description={t("loadError", {error})}
          action={
            <button onClick={fetchData} className="romi-action">
              {t("retry")}
            </button>
          }
        />
      </PageShell>
    );

  return (
    <>
    <PageShell>
      <header className="romi-page-header flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-3xl font-fredoka-one text-primary">{t("title")}</h1>
          <p className="text-sm text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <button
          onClick={() => router.push("/doctores")}
          className="romi-action"
        >
          <PlusCircle className="w-4 h-4" />
          {t("new")}
        </button>
      </header>

      {actionError && (
        <PageState
          type="error"
          title={commonT("error")}
          description={actionError}
          action={
            <button onClick={() => setActionError(null)} className="romi-action romi-action-secondary">
              {commonT("cancel")}
            </button>
          }
          className="min-h-0"
        />
      )}

      {/* Cards (no repiten) */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Panel className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-blue-50">
            <CalendarDays className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">{t("upcoming")}</div>
            <div className="text-2xl font-semibold">{stats.proximas}</div>
          </div>
        </Panel>

        <Panel className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-emerald-50">
            <Stethoscope className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">{t("completed")}</div>
            <div className="text-2xl font-semibold">{stats.realizadas}</div>
          </div>
        </Panel>

        <Panel className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-slate-50">
            <Clock3 className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">{t("total")}</div>
            <div className="text-2xl font-semibold">{stats.total}</div>
          </div>
        </Panel>
      </section>

      {/* TABS */}
      <section className="flex flex-wrap gap-2">
        <button
          onClick={() => setTab("upcoming")}
          className={`px-4 py-2 rounded-full border text-sm ${
            tab === "upcoming" ? "bg-primary text-primary-foreground border-[var(--surface-card-border)]" : "bg-[var(--surface-card)] text-[var(--text-primary)]"
          }`}
        >
          {t("upcoming")} ({upcoming.length})
        </button>

        <button
          onClick={() => setTab("history")}
          className={`px-4 py-2 rounded-full border text-sm ${
            tab === "history" ? "bg-primary text-primary-foreground border-[var(--surface-card-border)]" : "bg-[var(--surface-card)] text-[var(--text-primary)]"
          }`}
        >
          {t("history")} ({history.length})
        </button>

        <button
          onClick={() => setTab("all")}
          className={`px-4 py-2 rounded-full border text-sm ${
            tab === "all" ? "bg-primary text-primary-foreground border-[var(--surface-card-border)]" : "bg-[var(--surface-card)] text-[var(--text-primary)]"
          }`}
        >
          {t("all")} ({items.length})
        </button>
      </section>

      {/* UNA sola tabla */}
      {!!items.length && (
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">{tabLabel}</h2>
            <button onClick={fetchData} className="px-3 py-1.5 rounded border text-xs">
              {t("refresh")}
            </button>
          </div>

          {listToShow.length === 0 ? (
            <PageState type="empty" title={t("emptyFiltered", { tab: tabLabel })} />
          ) : (
            <Panel className="overflow-x-auto" padded={false}>
              <table className="min-w-[720px] w-full text-sm">
                <thead className="bg-[var(--surface-alt)]">
                  <tr>
                    <th className="text-left p-3">{t("doctor")}</th>
                    <th className="text-left p-3">{t("date")}</th>
                    <th className="text-left p-3">{t("reason")}</th>
                    <th className="text-left p-3">{t("status")}</th>
                    <th className="text-right p-3">{t("actions")}</th>
                  </tr>
                </thead>
                <tbody>
                  {listToShow.map((ap) => (
                    <tr key={ap.id} className="border-t">
                      <td className="p-3">
                        {ap.doctor?.name || ap.doctor?.email || "Médico asignado"}
                      </td>
                      <td className="p-3">
                        {format.dateTime(new Date(ap.scheduledAt), "appointment")}
                      </td>
                      <td className="p-3">{ap.reason || "—"}</td>
                      <td className="p-3 text-xs">{statusT(ap.status)}</td>
                      <td className="p-3 text-right space-x-2">
                        <button
                          onClick={() => router.push(`/patient/appointments/${ap.id}`)}
                          className="px-3 py-1 rounded border text-xs"
                        >
                          {t("details")}
                        </button>

	                        {(ap.status === "PENDING" || ap.status === "CANCELLED") && (
	                          <button
	                            onClick={() => setPendingDeleteId(ap.id)}
	                            className="inline-flex items-center justify-center px-2 py-1 rounded text-xs text-red-600 hover:bg-red-50"
	                            title={t("deleteTitle")}
	                          >
	                            <Trash2 className="w-4 h-4" />
	                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
	              </table>
	            </Panel>
	          )}
	        </section>
	      )}

	      {!items.length && (
	        <PageState type="empty" title={t("empty")} />
	      )}
	    </PageShell>
      <ConfirmDialog
        open={!!pendingDeleteId}
        title={t("deleteTitle")}
        description={t("deleteDescription")}
        confirmLabel={t("deleteConfirm")}
        cancelLabel={commonT("cancel")}
        destructive
        onConfirm={confirmDeleteAppointment}
        onCancel={() => setPendingDeleteId(null)}
      />
    </>
	  );
	}
