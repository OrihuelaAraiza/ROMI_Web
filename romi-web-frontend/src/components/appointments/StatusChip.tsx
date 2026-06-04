import type { AppointmentStatus } from '@/lib/types';
import { useTranslations } from 'next-intl';

const map: Record<AppointmentStatus, string> = {
  requested: 'bg-amber-50 text-amber-700 border-amber-200',
  accepted: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  rejected: 'bg-rose-50 text-rose-700 border-rose-200',
  in_progress: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  no_show: 'bg-zinc-100 text-zinc-700 border-zinc-200',
};

const labelKeys: Record<AppointmentStatus, "PENDING" | "ACCEPTED" | "REJECTED" | "IN_PROGRESS" | "COMPLETED" | "NO_SHOW"> = {
  requested: "PENDING",
  accepted: "ACCEPTED",
  rejected: "REJECTED",
  in_progress: "IN_PROGRESS",
  completed: "COMPLETED",
  no_show: "NO_SHOW",
};

export default function StatusChip({ value }: { value: AppointmentStatus }) {
  const t = useTranslations('status');
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs border ${map[value]}`}>
      {t(labelKeys[value])}
    </span>
  );
}
