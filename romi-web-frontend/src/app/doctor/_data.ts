import { apiFetchAuth, endpoints } from '@/lib/api';

type ApptRow = Record<string, unknown>;

export async function fetchDoctorAppointments(doctorId: string) {
  const pending = await apiFetchAuth<{ items: ApptRow[] }>(
    `${endpoints.appointments.byDoctor(doctorId)}?status=PENDING`
  ).catch(() => ({ items: [] }));

  const now = new Date().toISOString();
  const to = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  const next = await apiFetchAuth<{ items: ApptRow[] }>(
    `${endpoints.appointments.byDoctor(doctorId)}?status=ACCEPTED&from=${now}&to=${to}`
  ).catch(() => ({ items: [] }));

  return { pending: pending.items ?? [], next: next.items ?? [] };
}
