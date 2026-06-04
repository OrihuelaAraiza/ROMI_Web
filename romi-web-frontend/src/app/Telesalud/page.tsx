import Link from "next/link";
import { CalendarHeart, Sparkles, Video } from "lucide-react";
import { getLocale } from "next-intl/server";
import EnglishPublicPage from "@/components/EnglishPublicPage";

export default async function Page() {
  if (await getLocale() === "en") return <EnglishPublicPage kind="telehealth" />;
  return (
    <main className="romi-page mx-auto flex max-w-4xl items-center">
      <section className="card-premium w-full overflow-hidden p-6 text-center sm:p-10">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-[var(--surface-card-border)] bg-[var(--chip-bg)] shadow-[4px_4px_0_var(--shadow-ink)]">
          <Video className="h-9 w-9 text-primary" />
        </div>
        <span className="kawaii-chip mt-6 px-4 py-1.5 text-xs">Próximamente</span>
        <h1 className="mt-4 font-fredoka-one text-4xl text-primary sm:text-5xl">Telesalud ROMI</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-body)] sm:text-base">
          Estamos preparando una experiencia de consulta remota más clara, cálida y segura.
          Mientras tanto, puedes explorar especialistas y solicitar una cita.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link href="/doctores" className="romi-action">
            <CalendarHeart className="h-5 w-5" /> Ver especialistas
          </Link>
          <Link href="/Services" className="romi-action romi-action-secondary">
            <Sparkles className="h-5 w-5" /> Explorar servicios
          </Link>
        </div>
      </section>
    </main>
  );
}
