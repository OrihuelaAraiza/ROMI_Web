"use client";
import { useCallback, useEffect, useState } from "react";
import { apiFetchAuth, endpoints } from "@/lib/api";
import { getToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

type Appointment = {
  id: string;
  patient: { email: string };
  scheduledAt: string;
  reason?: string | null;
  status: "PENDING" | "ACCEPTED" | "CANCELED" | "COMPLETED";
};

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const router = useRouter();

  const loadAppointments = useCallback(async () => {
    try {
      const token = getToken();
      if (!token) {
        router.replace("/Auth/Login");
        return;
      }

      // Toma el doctorId directamente del payload del token
      const { sub: doctorId } = JSON.parse(atob(token.split(".")[1]));
      const res = await apiFetchAuth(endpoints.appointments.byDoctor(doctorId), { method: "GET" }) as { items?: Appointment[] };
      setAppointments(res.items ?? []);
    } catch (err) {
      console.error("Error loading doctor appointments:", err);
    }
  }, [router]);

  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  return (
    <main className="romi-page mx-auto max-w-4xl">
      <header className="romi-page-header">
      <h1 className="font-fredoka-one text-3xl text-primary">Panel del doctor</h1>
      <p className="mt-2 text-[var(--text-body)]">
        Aquí puedes ver y gestionar las citas que te han sido asignadas.
      </p>
      </header>

      <div className="space-y-4">
        {appointments.length === 0 && <div className="romi-empty">No tienes citas pendientes.</div>}

        {appointments.map((a) => (
          <div key={a.id} className="romi-panel flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <div>
              <p><b>Paciente:</b> {a.patient?.email}</p>
              <p><b>Fecha:</b> {new Date(a.scheduledAt).toLocaleString()}</p>
              <p><b>Motivo:</b> {a.reason ?? "No especificado"}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {a.status === "PENDING" && (
                <>
                  <button
                    onClick={() => apiFetchAuth(endpoints.appointments.updateStatus(a.id), {
                      method: "PATCH",
                      body: JSON.stringify({ status: "ACCEPTED" }),
                    }).then(loadAppointments)}
                    className="romi-action"
                  >
                    Aceptar
                  </button>
                  <button
                    onClick={() => apiFetchAuth(endpoints.appointments.updateStatus(a.id), {
                      method: "PATCH",
                      body: JSON.stringify({ status: "CANCELED" }),
                    }).then(loadAppointments)}
                    className="romi-action romi-action-secondary text-[var(--destructive)]"
                  >
                    Rechazar
                  </button>
                </>
              )}
              {a.status !== "PENDING" && (
                <span className="kawaii-chip px-3 py-1 text-xs">{a.status}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
