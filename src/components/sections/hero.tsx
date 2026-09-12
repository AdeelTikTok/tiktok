"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealLines, Reveal } from "@/components/ui/reveal";
import { GoldButton, OutlineButton } from "@/components/ui/buttons";
import HeroVisual from "./hero-visual";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="noise-overlay relative flex min-h-[100svh] w-full items-center overflow-hidden bg-ink pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gold/[0.10] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blush/[0.08] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-ink)_100%)]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container-px relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
      >
        <div>
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-paper/[0.03] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-paper/60">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              TikTok Shop Growth &amp; Management Agency
            </div>
          </Reveal>

          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-tight text-paper">
            <RevealLines text={"Your TikTok Shop.\nBuilt to Sell."} />
          </h1>

          <Reveal delay={0.3} className="mt-8 max-w-lg">
            <p className="text-base leading-relaxed text-paper/60 sm:text-lg">
              From account creation and category approvals to creator
              management, advertising and sales growth — we manage the
              complete TikTok Shop operation.
            </p>
          </Reveal>

          <Reveal delay={0.42} className="mt-10 flex flex-wrap items-center gap-4">
            <GoldButton href="#contact">Book a Strategy Call</GoldButton>
            <OutlineButton href="#results">View Our Results</OutlineButton>
          </Reveal>

          <Reveal delay={0.55} className="mt-14 flex items-center gap-6 border-t border-line pt-8">
            <div className="flex flex-col">
              <span className="font-display text-2xl text-gold">8</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-paper/45">
                Core Services
              </span>
            </div>
            <div className="h-8 w-px bg-line" />
            <div className="flex flex-col">
              <span className="font-display text-2xl text-gold">9</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-paper/45">
                Global Markets
              </span>
            </div>
            <div className="h-8 w-px bg-line" />
            <div className="flex flex-col">
              <span className="font-display text-2xl text-gold">360°</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-paper/45">
                Shop Management
              </span>
            </div>
          </Reveal>
        </div>

        <HeroVisual />
      </motion.div>

      <div className="absolute inset-x-0 bottom-8 z-10 hidden justify-center sm:flex">
        <div className="flex flex-col items-center gap-2 text-paper/35">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
