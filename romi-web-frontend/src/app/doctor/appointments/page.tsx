"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppointments } from '@/store/useAppointments';
import AppointmentCard from '@/components/appointments/AppointmentCard';
import AppointmentAccordion from '@/components/appointments/AppointmentAccordion';
import IntakePreview from '@/components/appointments/IntakePreview';
import { getAiIntakeSummary, toast } from '@/lib/mock';

export default function DoctorAppointmentsPage() {
  const { items, accept, reject, refresh } = useAppointments();
  const [mode, setMode] = useState<'cards'|'compact'>('cards');
  const [openId, setOpenId] = useState<string | null>(null);
  const router = useRouter();

  const onAccept = (id: string) => { accept(id); toast('Cita aceptada'); refresh(); };
  const onReject = (id: string) => {
    const reason = window.prompt('Motivo del rechazo:') || '';
    reject(id, reason); toast('Cita rechazada'); refresh();
  };
  const onOpen = (id: string) => setOpenId(id);
  const onStart = (url?: string) => { toast('Abriendo consulta…'); if (url) router.push(url); };

  const preview = openId ? getAiIntakeSummary(openId) : null;

  return (
    <main className="romi-page max-w-6xl mx-auto">
      <header className="romi-page-header flex flex-col gap-3 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-fredoka-one text-primary">Mis citas</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm sm:ml-auto">
          <span>Vista:</span>
          <button onClick={() => setMode('cards')} className={`min-h-11 rounded-full border-2 px-4 ${mode==='cards'?'border-[var(--surface-card-border)] bg-primary text-white':'bg-[var(--surface-card)]'}`}>Tarjetas</button>
          <button onClick={() => setMode('compact')} className={`min-h-11 rounded-full border-2 px-4 ${mode==='compact'?'border-[var(--surface-card-border)] bg-primary text-white':'bg-[var(--surface-card)]'}`}>Compacto</button>
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
        <section className="space-y-3">
          {mode === 'cards' ? (
            items.map(a => (
              <AppointmentCard
                key={a.id}
                appt={a}
                onAccept={() => onAccept(a.id)}
                onReject={() => onReject(a.id)}
                onOpen={() => onOpen(a.id)}
                onStart={() => onStart(a.joinUrl)}
              />
            ))
          ) : (
            <AppointmentAccordion items={items} onOpen={(id) => onOpen(id)} />
          )}
        </section>

        <aside>{preview && <IntakePreview data={preview} />}</aside>
      </div>
    </main>
  );
}
