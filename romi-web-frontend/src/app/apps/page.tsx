import { ExternalLink, MonitorSmartphone } from "lucide-react";
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
            <a
              href={app.shortHref}
              className="romi-action mt-auto self-start"
            >
              {t("open")}
              <ExternalLink className="h-4 w-4" />
            </a>
          </Panel>
        ))}
      </section>

      <Panel className="text-sm text-[var(--text-body)]">
        {t("shortcuts")}
      </Panel>
    </PageShell>
  );
}

