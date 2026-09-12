import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";

type BtnProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function GoldButton({ href, children, className, external }: BtnProps) {
  return (
    <Magnetic className="inline-block">
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(
          "group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
        <span
          aria-hidden
          className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
        <span className="absolute inset-0 -translate-x-full bg-gold-light transition-transform duration-500 ease-out group-hover:translate-x-0" />
      </Link>
    </Magnetic>
  );
}

export function OutlineButton({ href, children, className, external }: BtnProps) {
  return (
    <Magnetic className="inline-block">
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(
          "group inline-flex items-center gap-3 rounded-full border border-paper/25 px-7 py-3.5 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:border-gold hover:text-gold",
          className
        )}
      >
        <span>{children}</span>
        <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </Magnetic>
  );
}
