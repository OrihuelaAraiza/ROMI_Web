import Image from "next/image";
import { Globe, Heart, Lightbulb, Shield, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import UserMapSection from "@/components/UserMapSection";
import Link from "@/i18n/LocalizedLink";

const values = [
  {icon: Heart, title: "Health first", text: "Every decision starts with the well-being of patients and professionals."},
  {icon: Lightbulb, title: "Responsible innovation", text: "We apply technology to real medical challenges with care and purpose."},
  {icon: Shield, title: "Privacy and trust", text: "Health information deserves clear safeguards and respectful handling."},
  {icon: Users, title: "Collaboration", text: "Better outcomes come from connected people, professionals and knowledge."},
];

export default function EnglishHomePage() {
  return (
    <main className="min-h-screen">
      <section className="romi-home-hero relative mt-6 overflow-hidden rounded-[1.5rem] romi-hero-gradient px-6 py-12 sm:mt-10 sm:py-16 lg:mt-14">
        <div className="romi-hero-ambient" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
          <div className="text-center md:text-left">
            <span className="kawaii-chip px-4 py-1.5 text-xs">Intelligent medical support</span>
            <h1 className="mt-5 font-fredoka-one text-6xl tracking-wide text-[var(--hero-text)] sm:text-7xl">ROMI</h1>
            <h2 className="mt-4 font-fredoka-one text-2xl text-[var(--hero-text)] sm:text-4xl">Comprehensive Medical Education</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--hero-text-muted)] sm:text-lg">
              Advanced technology solutions that transform healthcare and improve health outcomes.
            </p>
            <Link href="/Services" className="romi-action mt-7">Explore ROMI</Link>
          </div>
          <Image src="/images/romi-hero.png" alt="ROMI medical assistant" width={600} height={600} priority className="mx-auto w-full max-w-sm object-contain drop-shadow-2xl" />
        </div>
      </section>

      <section className="mt-10 rounded-t-[2rem] border-t-[3px] border-[var(--surface-card-border)] bg-[var(--surface)] px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="font-fredoka-one text-4xl text-primary">Who are we?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-[var(--text-body)]">
              ROMI connects healthcare professionals, patients, medical education and intelligent tools in one warm,
              accessible environment.
            </p>
          </Reveal>

          <div className="romi-pastel-grid mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[["16k+", "Chats supported"], ["15+", "Countries"], ["24/7", "AI availability"], ["100%", "Commitment"]].map(([value, label]) => (
              <div key={label} className="card-premium p-5 text-center">
                <p className="font-fredoka-one text-3xl text-primary">{value}</p>
                <p className="mt-1 text-sm text-[var(--text-body)]">{label}</p>
              </div>
            ))}
          </div>

          <UserMapSection />

          <div className="romi-pastel-grid mt-16 grid gap-6 md:grid-cols-2">
            <article className="card-premium p-7">
              <Heart className="h-9 w-9 text-primary" />
              <h2 className="mt-4 font-fredoka-one text-2xl text-primary">Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">Improve access to quality care through responsible technology that empowers healthcare professionals and supports patients.</p>
            </article>
            <article className="card-premium p-7">
              <Globe className="h-9 w-9 text-primary" />
              <h2 className="mt-4 font-fredoka-one text-2xl text-primary">Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">Build a leading connected health ecosystem for Latin America and the world.</p>
            </article>
          </div>

          <h2 className="mt-16 text-center font-fredoka-one text-3xl text-primary">Our Values</h2>
          <div className="romi-pastel-grid mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({icon: Icon, title, text}) => (
              <article key={title} className="card-premium p-6">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-fredoka-one text-xl text-[var(--text-primary)]">{title}</h3>
                <p className="mt-2 text-sm text-[var(--text-body)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
