import { ArrowRight, Sparkles } from "lucide-react";
import Link from "@/i18n/LocalizedLink";

type PageKind = "education" | "research" | "specialties" | "contact" | "events" | "about" | "telehealth";

const content: Record<PageKind, {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{title: string; text: string}>;
  action: string;
  href: string;
}> = {
  education: {
    eyebrow: "Continuous learning",
    title: "Medical Education",
    intro: "Practical resources, conversations and clinical tools that support healthcare professionals throughout their careers.",
    sections: [
      {title: "Expert sessions", text: "Learn from specialists through accessible talks and educational sessions."},
      {title: "Clinical calculators", text: "Use trusted external tools that support everyday clinical decisions."},
      {title: "Learning community", text: "Connect medical knowledge, technology and collaborative learning."},
    ],
    action: "Explore ROMI services",
    href: "/Services",
  },
  research: {
    eyebrow: "Evidence and innovation",
    title: "Research",
    intro: "We evaluate how intelligent assistance can improve patient experience, clinical efficiency and digital well-being.",
    sections: [
      {title: "Patient experience", text: "Accessibility, satisfaction and continuity of care between appointments."},
      {title: "Clinical efficiency", text: "Better organization of medical information and professional workflows."},
      {title: "Responsible innovation", text: "Research grounded in privacy, security and evidence-based practices."},
    ],
    action: "Contact our research team",
    href: "/Contact",
  },
  specialties: {
    eyebrow: "Integrated care",
    title: "Medical Specialties",
    intro: "ROMI connects people with professionals and supports close follow-up before, during and after appointments.",
    sections: [
      {title: "Mental health", text: "Clinical psychology, psychiatry, family therapy and neuropsychology."},
      {title: "Specialist connection", text: "Find the right professional and schedule care according to your needs."},
      {title: "Ongoing follow-up", text: "Appointments, reminders and clear communication in one environment."},
    ],
    action: "Find a doctor",
    href: "/doctores",
  },
  contact: {
    eyebrow: "We are here to help",
    title: "Contact ROMI",
    intro: "Talk with our team about medical services, partnerships, research or platform support.",
    sections: [
      {title: "Email", text: "contacto@romiai.com.mx"},
      {title: "Phone", text: "+52 222 433 5093"},
      {title: "Location", text: "Hospital Angeles Puebla, Puebla, Mexico."},
    ],
    action: "Chat with ROMI",
    href: "/chat",
  },
  events: {
    eyebrow: "Medical community",
    title: "Events",
    intro: "Discover conferences, educational sessions and international events connected with ROMI's medical community.",
    sections: [
      {title: "Medical conferences", text: "Specialist presentations, workshops and networking opportunities."},
      {title: "Online sessions", text: "Accessible educational events for healthcare professionals."},
      {title: "International community", text: "Connections with organizations advancing medical education."},
    ],
    action: "Explore education",
    href: "/Formation",
  },
  about: {
    eyebrow: "About ROMI",
    title: "Technology with a Human Purpose",
    intro: "ROMI brings healthcare professionals, education and intelligent tools together to make care more accessible.",
    sections: [
      {title: "Our mission", text: "Improve access to quality healthcare through responsible technology."},
      {title: "Our values", text: "Health, innovation, privacy, collaboration, accessibility and efficiency."},
      {title: "Our vision", text: "Build a connected medical ecosystem that supports people and professionals."},
    ],
    action: "Discover our services",
    href: "/Services",
  },
  telehealth: {
    eyebrow: "Coming soon",
    title: "ROMI Telehealth",
    intro: "We are preparing a clearer, warmer and safer remote consultation experience.",
    sections: [
      {title: "Certified specialists", text: "Connect with healthcare professionals from wherever you are."},
      {title: "Secure consultations", text: "A private experience designed around patient care."},
      {title: "Connected follow-up", text: "Appointments, reminders and communication supported by ROMI."},
    ],
    action: "View specialists",
    href: "/doctores",
  },
};

export default function EnglishPublicPage({kind}: {kind: PageKind}) {
  const page = content[kind];
  return (
    <main className="romi-page py-10 sm:py-16">
      <section className="romi-page-header mx-auto max-w-5xl text-center">
        <span className="kawaii-chip px-4 py-1.5 text-xs">{page.eyebrow}</span>
        <h1 className="mt-5 font-fredoka-one text-4xl text-primary sm:text-6xl">{page.title}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[var(--text-body)] sm:text-lg">{page.intro}</p>
      </section>
      <section className="romi-pastel-grid mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {page.sections.map((section) => (
          <article key={section.title} className="card-premium p-6">
            <Sparkles className="h-7 w-7 text-primary" />
            <h2 className="mt-4 font-fredoka-one text-xl text-[var(--text-primary)]">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">{section.text}</p>
          </article>
        ))}
      </section>
      <div className="mx-auto mt-10 flex max-w-5xl justify-center">
        <Link href={page.href} className="romi-action">
          {page.action} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
