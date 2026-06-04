export const metadata = { title: "Cita creada — ROMI" };

export default function Page({ searchParams }: { searchParams: { id?: string; doctorId?: string } }) {
  const { id, doctorId } = searchParams || {};
  return (
    <main className="romi-page max-w-xl mx-auto">
      <div className="card-premium p-6">
        <h1 className="font-fredoka-one text-3xl font-bold text-primary">¡Cita creada correctamente!</h1>
        <p className="mt-2 text-[var(--text-body)]">
          Tu solicitud quedó registrada {id ? <>con el folio <span className="font-semibold">{id}</span></> : null}.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href="/appointments" className="romi-action">
            Ver mis citas
          </a>
          <a href={`/doctores${doctorId ? `?pref=${doctorId}` : ""}`} className="romi-action romi-action-secondary">
            Agendar otra
          </a>
        </div>
      </div>
    </main>
  );
}
