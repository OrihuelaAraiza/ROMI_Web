import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "@/i18n/LocalizedLink";

type RomiCTAProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  onClick?: () => void;
};

export default function RomiCTA({
  href,
  children,
  external = false,
  variant = "primary",
  className,
  onClick,
}: RomiCTAProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 active:scale-95",
    variant === "primary" && "romi-action",
    variant === "secondary" && "romi-action romi-action-secondary",
    variant === "light" && "bg-[var(--surface)] text-[var(--primary)] hover:bg-[var(--surface-alt)] hover:shadow-xl hover:-translate-y-1",
    className,
  );

  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes}>
      {content}
    </Link>
  );
}

