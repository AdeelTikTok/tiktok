"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { SizedImage } from "@/lib/assets";

export type ProofCategory =
  | { key: string; label: string; type: "images"; items: SizedImage[] }
  | { key: string; label: string; type: "videos"; items: string[] };

export default function ProofTabs({ categories }: { categories: ProofCategory[] }) {
  const [active, setActive] = useState(categories[0]?.key ?? "");
  const current = categories.find((c) => c.key === active) ?? categories[0];

  if (!current) return null;

  return (
    <div>
      <div className="scrollbar-none -mx-6 flex gap-3 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-300",
              active === cat.key
                ? "border-gold bg-gold text-ink"
                : "border-line bg-ink-2/60 text-paper/60 hover:border-gold/40 hover:text-paper"
            )}
          >
            {cat.label}
            <span className="ml-2 text-[11px] opacity-60">{cat.items.length}</span>
          </button>
        ))}
      </div>

      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {current.type === "videos" ? (
              <VideoGrid videos={current.items} />
            ) : (
              <ImageMasonry images={current.items} label={current.label} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ImageMasonry({ images, label }: { images: SizedImage[]; label: string }) {
  if (images.length === 0) {
    return <p className="text-center text-sm text-paper/40">Coming soon.</p>;
  }
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
      {images.map((img) => (
        <div
          key={img.src}
          className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-line bg-ink-2"
        >
          <Image
            src={img.src}
            alt={label}
            width={img.width}
            height={img.height}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      ))}
    </div>
  );
}

function VideoGrid({ videos }: { videos: string[] }) {
  if (videos.length === 0) {
    return <p className="text-center text-sm text-paper/40">Coming soon.</p>;
  }
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((src) => (
        <div
          key={src}
          className="overflow-hidden rounded-2xl border border-line bg-ink"
        >
          <video
            src={src}
            controls
            preload="metadata"
            playsInline
            className="aspect-video w-full bg-black object-contain"
          />
        </div>
      ))}
    </div>
  );
}
