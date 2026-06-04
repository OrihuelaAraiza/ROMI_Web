"use client";
import { User, Stethoscope, CalendarClock, ExternalLink, Check, X } from 'lucide-react';
import type { Appointment } from '@/lib/types';
import StatusChip from './StatusChip';
import { formatLocal } from '@/lib/time';

type Props = {
  appt: Appointment;
  onAccept?: () => void;
  onReject?: () => void;
  onOpen?: () => void;
  onStart?: () => void;
};

export default function AppointmentCard({ appt, onAccept, onReject, onOpen, onStart }: Props) {
  return (
    <div className="romi-panel">
      <div className="flex flex-col items-start gap-4 sm:flex-row">
        <div className="w-12 h-12 rounded-full bg-[var(--chip-bg)] text-primary flex items-center justify-center font-semibold">
          {appt.patient.initials}
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">{appt.patient.name}</span>
            <StatusChip value={appt.status} />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Stethoscope className="w-4 h-4" /> {appt.specialty}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarClock className="w-4 h-4" /> {formatLocal(appt.startUTC, appt.tz)}
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-2 sm:w-auto sm:grid-cols-1">
          <button onClick={onOpen} className="romi-action romi-action-secondary"><ExternalLink className="w-4 h-4"/>Ver</button>
          {appt.status === 'requested' && (
            <>
              <button onClick={onAccept} className="romi-action"><Check className="w-4 h-4"/>Aceptar</button>
              <button onClick={onReject} className="romi-action romi-action-secondary text-[var(--destructive)]"><X className="w-4 h-4"/>Rechazar</button>
            </>
          )}
          {appt.status === 'accepted' && (
            <button onClick={onStart} className="romi-action">Iniciar</button>
          )}
        </div>
      </div>
    </div>
  );
}
