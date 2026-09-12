import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
  dark,
}: {
  children: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em]",
        dark ? "text-gold-light" : "text-gold-dark",
        className
      )}
    >
      <span className="h-px w-8 bg-current opacity-60" />
      {children}
    </div>
  );
}
