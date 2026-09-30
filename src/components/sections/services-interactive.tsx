"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Service = {
  number: string;
  title: string;
  description: string;
  category: string;
  image: string | null;
};

export default function ServicesInteractive({
  services,
  serviceLabel,
}: {
  services: Service[];
  serviceLabel: string;
}) {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <ul className="border-t border-ink/10">
        {services.map((service, i) => (
          <li key={service.title} className="border-b border-ink/10">
            <button
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={cn(
                "group flex w-full items-start gap-6 py-6 text-left transition-colors duration-300",
                active === i ? "text-ink" : "text-ink/45 hover:text-ink/70"
              )}
            >
              <span
                className={cn(
                  "font-display mt-1 text-sm transition-colors duration-300",
                  active === i ? "text-gold" : "text-ink/30"
                )}
              >
                {service.number}
              </span>
              <div className="flex-1">
                <p className="font-display text-xl leading-tight sm:text-2xl">
                  {service.title}
                </p>
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden text-sm leading-relaxed text-ink/55"
                    >
                      <span className="block pt-2 pr-4 lg:hidden">
                        {service.description}
                      </span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <span
                className={cn(
                  "mt-2 hidden h-2 w-2 shrink-0 rounded-full transition-all duration-300 sm:block",
                  active === i ? "bg-gold scale-100" : "scale-0 bg-gold"
                )}
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="relative hidden lg:block">
        <div className="sticky top-28 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              {current.image ? (
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-contain"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-soft to-ink">
                  <span className="font-display text-6xl italic text-gold/30">
                    {current.number}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                  {serviceLabel} {current.number}
                </p>
                <p className="font-display mt-2 text-2xl text-paper">
                  {current.title}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
                  {current.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
