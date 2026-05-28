import Link from "next/link";
import type { ReactNode } from "react";

type LegalDocumentProps = {
  title: string;
  updated?: string;
  children: ReactNode;
  actions?: ReactNode;
};

export default function LegalDocument({ title, updated, children, actions }: LegalDocumentProps) {
  return (
    <main className="min-h-screen py-10 sm:py-14 lg:py-16">
      <section className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="kawaii-button inline-flex items-center rounded-full bg-[var(--surface-card)] px-5 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--chip-bg)]"
          >
            Inicio
          </Link>
          <Link
            href="/terminos-condiciones"
            className="kawaii-button inline-flex items-center rounded-full bg-[var(--surface-card)] px-5 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--chip-bg)]"
          >
            Terminos y condiciones
          </Link>
          <Link
            href="/aviso-privacidad"
            className="kawaii-button inline-flex items-center rounded-full bg-[var(--surface-card)] px-5 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--chip-bg)]"
          >
            Politica de privacidad
          </Link>
        </div>

        <article className="card-premium bg-[var(--surface-card)] p-6 sm:p-8 lg:p-10">
          <header className="mb-8">
            <p className="kawaii-chip px-4 py-1.5 text-xs">ROMI legal</p>
            <h1 className="mt-4 font-fredoka-one text-3xl font-bold leading-tight text-[var(--primary)] sm:text-4xl">
              {title}
            </h1>
            {updated ? (
              <p className="mt-3 text-sm font-semibold text-[var(--text-muted)]">{updated}</p>
            ) : null}
          </header>

          <div className="legal-copy space-y-6 text-[var(--text-body)]">
            {children}
          </div>

          {actions ? <div className="mt-10 border-t border-[var(--surface-card-border-soft)] pt-6">{actions}</div> : null}
        </article>
      </section>
    </main>
  );
}
