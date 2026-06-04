"use client";
import { useCallback, useEffect, useState } from "react";
import { apiFetchAuth, endpoints } from "@/lib/api";
import StatusChip from "@/components/appointments/StatusChip";
import { CalendarClock, Stethoscope } from "lucide-react";
import { formatLocal } from "@/lib/time";

type Item = { id: string; scheduledAt: string; status: "PENDING"|"ACCEPTED"|"CANCELED"|"COMPLETED"; doctorId?: string; reason?: string };

export default function PatientAppointmentsListPage() {
  const [pending, setPending] = useState<Item[]>([]);
  const [accepted, setAccepted] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const get = async (status: string) => apiFetchAuth<{ items?: Item[] }>(`${endpoints.appointments.byPatient}?status=${status}`, { method: 'GET' });
      const [p, a] = await Promise.all([get('PENDING'), get('ACCEPTED')]);
      setPending(p.items ?? []);
      setAccepted(a.items ?? []);
    } catch {
      setPending([]); setAccepted([]);
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const card = (x: Item) => (
    <div key={x.id} className="romi-panel">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><Stethoscope className="w-4 h-4"/> Consulta médica</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><CalendarClock className="w-4 h-4"/> {formatLocal(x.scheduledAt, tz)}</div>
        </div>
        <StatusChip value={x.status === 'PENDING' ? 'requested' : 'accepted'} />
      </div>
      {x.status === 'ACCEPTED' && (
        <div className="mt-3 flex justify-end">
          <button
            onClick={() => (window.location.href = `/patient/appointments/${x.id}/call`)}
            className="romi-action text-sm"
          >
            Unirme a consulta
          </button>
        </div>
      )}
    </div>
  );

  if (loading) return <div className="romi-page">Cargando…</div>;

  return (
    <main className="romi-page max-w-4xl mx-auto space-y-6">
      <header className="romi-page-header">
        <h1 className="font-fredoka-one text-3xl text-primary">Mis citas</h1>
      </header>

      {!!pending.length && (
        <section className="space-y-2">
          <h2 className="text-lg font-medium">Pendientes de confirmación</h2>
          {pending.map(card)}
        </section>
      )}

      {!!accepted.length && (
        <section className="space-y-2">
          <h2 className="text-lg font-medium">Confirmadas</h2>
          {accepted.map(card)}
        </section>
      )}

      {!pending.length && !accepted.length && (
        <div className="romi-empty">No tienes citas pendientes ni confirmadas.</div>
      )}
    </main>
  );
}
