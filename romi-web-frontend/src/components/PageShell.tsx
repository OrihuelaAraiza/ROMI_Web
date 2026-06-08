import { cn } from "@/lib/utils";

type PageShellProps = React.HTMLAttributes<HTMLElement> & {
  size?: "md" | "lg" | "xl";
};

const sizes = {
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
};

export default function PageShell({ className, size = "lg", ...props }: PageShellProps) {
  return (
    <main
      className={cn("romi-page mx-auto w-full space-y-6", sizes[size], className)}
      {...props}
    />
  );
}

