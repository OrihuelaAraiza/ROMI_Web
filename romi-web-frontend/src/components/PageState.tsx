import { AlertCircle, Loader2, SearchX } from "lucide-react";
import { cn } from "@/lib/utils";

type PageStateProps = {
  type?: "loading" | "error" | "empty";
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

export default function PageState({
  type = "empty",
  title,
  description,
  action,
  className,
}: PageStateProps) {
  const Icon = type === "loading" ? Loader2 : type === "error" ? AlertCircle : SearchX;
  return (
    <section
      className={cn(
        "romi-empty min-h-40 text-sm",
        type === "error" && "border-red-200 bg-red-50 text-red-700",
        className,
      )}
      role={type === "error" ? "alert" : "status"}
      aria-live={type === "loading" ? "polite" : undefined}
    >
      <Icon className={cn("h-6 w-6", type === "loading" && "animate-spin")} />
      <div>
        <p className="font-semibold text-[var(--text-primary)]">{title}</p>
        {description && <p className="mt-1 text-[var(--text-body)]">{description}</p>}
      </div>
      {action}
    </section>
  );
}

