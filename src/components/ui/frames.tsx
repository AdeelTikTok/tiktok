import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrowserFrame({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-ink-2 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-ink-soft px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
      </div>
      <div className="relative aspect-[16/10] w-full bg-ink">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function PhoneFrame({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/18.5] w-full overflow-hidden rounded-[1.8rem] border-[6px] border-ink-2 bg-ink-2 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)]",
        className
      )}
    >
      <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-ink-2" />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 25vw, 60vw"
        className="object-cover"
      />
    </div>
  );
}

export function LaptopFrame({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("w-full", className)}>
      <div className="rounded-t-xl border border-b-0 border-line bg-ink-2 p-2.5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)]">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-ink">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
      <div className="mx-auto h-3 w-[92%] rounded-b-xl bg-gradient-to-b from-ink-soft to-ink-2" />
      <div className="mx-auto h-1.5 w-[55%] rounded-b-md bg-ink-soft" />
    </div>
  );
}
