import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import RomiCTA from "@/components/RomiCTA";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: readonly string[];
  cta?: {
    href: string;
    label: string;
    external?: boolean;
  };
  gradient?: string;
  className?: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  items = [],
  cta,
  gradient = "from-[var(--primary)] to-[var(--accent)]",
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border-[3px] border-[var(--surface-card-border)] bg-gradient-to-br p-6 shadow-[6px_6px_0_var(--shadow-ink)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[9px_9px_0_var(--shadow-ink)] sm:p-8",
        gradient,
        className,
      )}
    >
      <div className="absolute right-0 top-0 h-40 w-40 -mr-20 -mt-20 rounded-full bg-[var(--surface-card-soft)] transition-transform duration-500 group-hover:scale-110" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 sm:mb-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-card-soft)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--surface-card)] sm:h-14 sm:w-14">
            <Icon className="text-white" size={26} />
          </div>
          <h3 className="font-fredoka-one text-xl text-white sm:text-2xl">{title}</h3>
        </div>
        <p className="mb-5 text-sm text-white/90 sm:mb-6 sm:text-base">{description}</p>
        {items.length > 0 && (
          <ul className="mb-6 space-y-2 sm:mb-8 sm:space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[var(--surface)]" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {cta && (
          <RomiCTA
            href={cta.href}
            external={cta.external}
            variant="light"
            className="mt-auto self-start"
          >
            {cta.label}
          </RomiCTA>
        )}
      </div>
    </article>
  );
}

