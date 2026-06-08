import { cn } from "@/lib/utils";

type PanelProps = React.HTMLAttributes<HTMLDivElement> & {
  padded?: boolean;
};

export default function Panel({ className, padded = true, ...props }: PanelProps) {
  return (
    <div
      className={cn("romi-panel", !padded && "p-0", className)}
      {...props}
    />
  );
}

