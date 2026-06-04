"use client";
import { useState, useEffect } from "react";
import { apiFetchAuth, endpoints } from "@/lib/api";

type DoctorListItem = { id: string; name?: string; email?: string; specialty?: string };

export default function PatientDashboard() {
  const [doctors, setDoctors] = useState<DoctorListItem[]>([]);
  const [selected, setSelected] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");

  async function loadDoctors() {
    try {
      const res = await apiFetchAuth<DoctorListItem[]>(endpoints.users.listDoctors, {
        method: "GET",
      });
      setDoctors(res ?? []);
    } catch (err) {
      console.error("Error loading doctors:", err);
    }
  }

  async function submitAppointment(e: React.FormEvent) {
    e.preventDefault();
    try {
      await apiFetchAuth(endpoints.appointments.create, {
        method: "POST",
        body: JSON.stringify({
          doctorId: selected,
          scheduledAt: date,
          reason,
        }),
      });
      alert("Cita solicitada correctamente");
      setSelected("");
      setReason("");
      setDate("");
    } catch (err) {
      console.error("Error creando cita:", err);
      alert("Error al crear la cita");
    }
  }

  useEffect(() => {
    loadDoctors();
  }, []);

  return (
    <main className="romi-page mx-auto max-w-3xl">
      <header className="romi-page-header">
        <span className="kawaii-chip px-3 py-1 text-[10px]">Seguimiento</span>
        <h1 className="mt-3 text-3xl font-fredoka-one text-primary">Solicita una cita</h1>
        <p className="mt-2 text-sm text-[var(--text-body)]">Elige al profesional y cuéntanos brevemente qué necesitas.</p>
      </header>
      <form onSubmit={submitAppointment} className="romi-panel grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-[var(--text-primary)]">
          <span>Médico</span>
          <select
            className="romi-field"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Selecciona un médico</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name ?? d.email ?? d.id} — {d.specialty ?? "General"}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[var(--text-primary)]">
          <span>Fecha y hora</span>
          <input
            type="datetime-local"
            className="romi-field"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[var(--text-primary)]">
          <span>Motivo</span>
          <textarea
            className="romi-field min-h-32"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Describe el motivo de tu consulta"
          />
        </label>
        <button
          type="submit"
          className="romi-action w-full sm:w-fit"
        >
          Confirmar Cita
        </button>
      </form>
    </main>
  );
}
