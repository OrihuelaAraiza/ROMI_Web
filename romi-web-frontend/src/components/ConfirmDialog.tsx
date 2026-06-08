"use client";

import { X } from "lucide-react";

type ConfirmDialogProps = {
  open: boolean;
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel: string;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel,
  cancelLabel,
  destructive = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/45 px-4" role="presentation">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        className="w-full max-w-md rounded-2xl border-[3px] border-[var(--surface-card-border)] bg-[var(--surface-card)] p-5 shadow-[8px_8px_0_var(--shadow-ink)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="confirm-dialog-title" className="font-fredoka-one text-2xl text-[var(--text-primary)]">
              {title}
            </h2>
            <p className="mt-2 text-sm text-[var(--text-body)]">{description}</p>
          </div>
          <button
            type="button"
            onClick={onCancel}
            aria-label={cancelLabel}
            className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border-2 border-[var(--surface-card-border)] bg-[var(--surface-card-soft)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button type="button" onClick={onCancel} className="romi-action romi-action-secondary">
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`romi-action ${destructive ? "bg-red-600 hover:bg-red-600" : ""}`}
          >
            {confirmLabel}
          </button>
        </div>
      </section>
    </div>
  );
}

