"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch, apiFetchAuth, endpoints } from "@/lib/api";
import { useRealtime } from "@/hooks/useRealtime";
import type { NotificationDTO } from "@/types/notifications";
import {
  AlertCircle,
  Bell,
  Calendar,
  CalendarClock,
  ChevronRight,
  CheckCircle2,
  RefreshCw,
  Settings,
  UserRound,
} from "lucide-react";

type Me = { sub?: string; email?: string; name?: string; roles?: string[] };
type BackendAppt = {
  id: string;
  scheduledAt: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED" | "CANCELLED" | "ATTENDED";
  patient?: { id: string; email?: string; name?: string };
};

export default function DashboardPage() {
  const [me, setMe] = useState<Me | null>(null);
  const [doctorId, setDoctorId] = useState<string>("");
  const [pending, setPending] = useState<BackendAppt[]>([]);
  const [acceptedList, setAcceptedList] = useState<BackendAppt[]>([]);
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [notifications, setNotifications] = useState<NotificationDTO[]>([]);
  const [loadingNotifications, setLoadingNotifications] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const m = (await apiFetch("/auth/me", { method: "GET" })) as Me;
        setMe(m);
        setDoctorId(m?.sub || "");
      } catch { }
    })();
  }, []);

  const loadAppointments = useCallback(async (docId: string) => {
    if (!docId) return;
    const base = endpoints.appointments.byDoctor(docId);
    const get = async (status: string) =>
      apiFetchAuth<{ items?: BackendAppt[] }>(`${base}?status=${status}&page=1&size=10`, { method: "GET" });
    try {
      const [p, a, c] = await Promise.all([get("PENDING"), get("ACCEPTED"), get("ATTENDED")]);
      setPending(p.items ?? []);
      setAcceptedList(a.items ?? []);
      setAcceptedCount((a.items ?? []).length);
      setCompletedCount((c.items ?? []).length);
    } catch { }
  }, []);

  const fetchNotifications = useCallback(async () => {
    setLoadingNotifications(true);
    try {
      const data = await apiFetchAuth<NotificationDTO[]>(
        endpoints.notifications.list(), // todas
        { method: "GET" },
      );

      setNotifications(data ?? []);
    } finally {
      setLoadingNotifications(false);
    }
  }, []);

  useEffect(() => {
    if (!doctorId) return;
    loadAppointments(doctorId);
    fetchNotifications();
  }, [doctorId, loadAppointments, fetchNotifications]);

  const { notifications: realtimeNotifications } = useRealtime({
    userId: doctorId,
    appointmentIds: acceptedList.map((a) => a.id),
  });

  useEffect(() => {
    if (!realtimeNotifications.length) return;
    setNotifications((prev) => {
      const ids = new Set(prev.map((n) => n.id));
      const newcomers = realtimeNotifications.filter((n) => !ids.has(n.id));
      if (!newcomers.length) return prev;
      return [...newcomers, ...prev];
    });
  }, [realtimeNotifications]);

  const markNotificationRead = async (id: string) => {
    try {
      await apiFetchAuth(endpoints.notifications.markRead(id), { method: "PATCH" });
      setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, readAt: new Date().toISOString() } : n)));
    } catch { }
  };

  const counts = useMemo(
    () => ({
      porAceptar: pending.length,
      pendientes: acceptedCount,
      hechas: completedCount,
    }),
    [pending.length, acceptedCount, completedCount],
  );

  const upcomingAppointments = useMemo(
    () =>
      [...acceptedList]
        .sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime())
        .slice(0, 5),
    [acceptedList],
  );

  return (
    <main className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[calc(100vh-4rem)] w-screen bg-[#d69a9c]">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-6 md:px-6">
      <header className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary/70">Admin Dashboard</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-800 md:text-3xl">Hola Dr.</h1>
        <p className="mt-1 text-sm text-slate-600">{me?.name || me?.email || "Panel administrativo"}</p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-amber-200/90 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">Por aceptar</p>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-amber-50">
              <AlertCircle className="h-4 w-4 text-amber-600" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">{counts.porAceptar}</p>
        </article>

        <article className="rounded-2xl border border-rose-200/90 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">Pendientes</p>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-rose-50">
              <CalendarClock className="h-4 w-4 text-rose-600" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">{counts.pendientes}</p>
        </article>

        <article className="rounded-2xl border border-emerald-200/90 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">Hechas</p>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-50">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">{counts.hechas}</p>
        </article>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <article className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
              <Bell className="h-4 w-4 text-primary" />
              Notificaciones
            </h2>
            <button
              className="inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              onClick={fetchNotifications}
              disabled={loadingNotifications}
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loadingNotifications ? "animate-spin" : ""}`} />
              {loadingNotifications ? "Actualizando" : "Actualizar"}
            </button>
          </div>

          {notifications.length ? (
            <div className="space-y-2">
              {notifications.slice(0, 5).map((notif) => (
                <div key={notif.id} className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{notif.title}</p>
                      <p className="text-xs text-slate-600">{notif.body}</p>
                    </div>
                    {!notif.readAt && (
                      <button className="text-xs font-semibold text-primary hover:opacity-80" onClick={() => markNotificationRead(notif.id)}>
                        Marcar
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-[170px] flex-col items-center justify-center gap-3 text-slate-500">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-slate-100">
                <Bell className="h-6 w-6 text-slate-400" />
              </div>
              <p className="text-sm">Sin notificaciones por ahora.</p>
            </div>
          )}
        </article>

        <article className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-800">
            <Calendar className="h-4 w-4 text-primary" />
            Próximas Citas
          </h2>

          {upcomingAppointments.length ? (
            <div className="space-y-2">
              {upcomingAppointments.map((appt) => (
                <button
                  key={appt.id}
                  type="button"
                  onClick={() => router.push(`/doctor/appointments/${appt.id}`)}
                  className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-primary/40"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{appt.patient?.name || appt.patient?.email || "Paciente"}</p>
                    <p className="text-xs text-slate-600">{new Date(appt.scheduledAt).toLocaleString()}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
              ))}
            </div>
          ) : (
            <div className="flex h-[170px] flex-col items-center justify-center gap-3 text-slate-500">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-slate-100">
                <Calendar className="h-6 w-6 text-slate-400" />
              </div>
              <p className="text-sm">No tienes citas programadas.</p>
            </div>
          )}
        </article>
      </section>

      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="group rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-primary/35 hover:shadow"
        >
          <div className="mb-3 inline-flex rounded-lg bg-rose-50 p-2 text-rose-500">
            <Calendar className="h-4 w-4" />
          </div>
          <p className="text-sm font-semibold text-slate-800">Ver Calendario</p>
          <p className="mt-1 text-xs text-slate-500">Organiza tus espacios del dia</p>
        </button>

        <button
          type="button"
          onClick={() => router.push("/doctor/appointments")}
          className="group rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-primary/35 hover:shadow"
        >
          <div className="mb-3 inline-flex rounded-lg bg-emerald-50 p-2 text-emerald-600">
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <p className="text-sm font-semibold text-slate-800">Completar Cita</p>
          <p className="mt-1 text-xs text-slate-500">Actualiza atencion y estado</p>
        </button>

        <button
          type="button"
          onClick={() => router.push("/users")}
          className="group rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-primary/35 hover:shadow"
        >
          <div className="mb-3 inline-flex rounded-lg bg-amber-50 p-2 text-amber-600">
            <UserRound className="h-4 w-4" />
          </div>
          <p className="text-sm font-semibold text-slate-800">Ver Pacientes</p>
          <p className="mt-1 text-xs text-slate-500">Consulta fichas y seguimiento</p>
        </button>

        <button
          type="button"
          onClick={() => router.push("/settings")}
          className="group rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-primary/35 hover:shadow"
        >
          <div className="mb-3 inline-flex rounded-lg bg-violet-50 p-2 text-violet-600">
            <Settings className="h-4 w-4" />
          </div>
          <p className="text-sm font-semibold text-slate-800">Configuracion</p>
          <p className="mt-1 text-xs text-slate-500">Personaliza tu espacio medico</p>
        </button>
      </section>
      </div>
    </main>
  );
}
