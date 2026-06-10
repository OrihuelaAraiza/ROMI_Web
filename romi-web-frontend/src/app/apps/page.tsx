import { ExternalLink, LockKeyhole, MonitorSmartphone, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionHeader from "@/components/SectionHeader";
import PageShell from "@/components/PageShell";
import Panel from "@/components/Panel";
import { LEGACY_APPS } from "@/lib/legacyApps";

export default async function AppsPage() {
  const t = await getTranslations("apps");

  return (
    <PageShell size="xl">
      <section className="py-8 sm:py-12">
        <SectionHeader title={t("title")} description={t("description")} />
      </section>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {LEGACY_APPS.map((app) => (
          <Panel key={app.id} className="flex h-full flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-primary text-white">
                <MonitorSmartphone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-primary">{app.category}</p>
                <h2 className="font-fredoka-one text-2xl text-[var(--text-primary)]">{app.name}</h2>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-body)]">{app.description}</p>
            {"access" in app && app.access ? (
              <div className="rounded-2xl border border-[var(--surface-card-border-soft)] bg-[var(--surface-card-soft)] p-3">
                <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-primary">
                  <LockKeyhole className="h-3.5 w-3.5" />
                  Acceso demo
                </p>
                <div className="flex flex-wrap gap-2">
                  {app.access.map((item) => (
                    <span key={item} className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs text-[var(--text-body)] ring-1 ring-[var(--surface-card-border-soft)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            {app.href ? (
              <a
                href={app.href}
                target={app.href.startsWith("http") ? "_blank" : undefined}
                rel={app.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="romi-action mt-auto self-start"
              >
                {t("open")}
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <div className="mt-auto inline-flex self-start items-center gap-2 rounded-full bg-[var(--chip-bg)] px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                Proximamente
              </div>
            )}
          </Panel>
        ))}
      </section>

      <Panel className="text-sm text-[var(--text-body)]">
        {t("shortcuts")}
      </Panel>
    </PageShell>
  );
}
