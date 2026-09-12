import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, dark, size = "md" }: { className?: string; dark?: boolean; size?: "sm" | "md" | "lg" }) {
  const sizeMap = {
    sm: { width: 40, height: 40, class: "h-10 w-10" },
    md: { width: 64, height: 64, class: "h-16 w-16" },
    lg: { width: 80, height: 80, class: "h-20 w-20" },
  };

  const { width, height, class: sizeClass } = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-2 select-none", className)}>
      <Image
        src="/images/new-logo.png"
        alt="TikTok Shop Solutions"
        width={width}
        height={height}
        priority
        className={cn(sizeClass, "drop-shadow-[0_4px_12px_rgba(232,188,16,0.15)]")}
      />
    </div>
  );
}
