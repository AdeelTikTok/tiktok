"use client";

import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

function FloatCard({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 80, damping: 16 });
  const sry = useSpring(ry, { stiffness: 80, damping: 16 });

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto h-[480px] w-full max-w-[440px] [perspective:1400px] sm:h-[560px]"
    >
      <motion.div
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* Phone frame: Sales Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transform: "translateZ(20px)" }}
          className="absolute left-1/2 top-1/2 h-[420px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-[2.2rem] border border-paper/15 bg-ink-2 p-2 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] sm:h-[480px] sm:w-[248px]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-gradient-to-b from-ink-soft via-[#1c1712] to-ink">
            {/* Status bar */}
            <div className="absolute inset-x-0 top-0 flex justify-center pt-2">
              <div className="h-5 w-24 rounded-full bg-ink/80" />
            </div>

            {/* Sales Metrics Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              {/* Revenue metric */}
              <div className="text-center mb-4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold/60 mb-1">
                  Revenue
                </p>
                <p className="text-xl font-display text-gold">£6,812</p>
              </div>

              {/* Order count */}
              <div className="flex gap-6 mb-4">
                <div className="text-center">
                  <p className="text-[9px] uppercase text-paper/40 mb-1">Orders</p>
                  <p className="text-base font-bold text-paper">367</p>
                </div>
                <div className="h-12 w-px bg-line/30" />
                <div className="text-center">
                  <p className="text-[9px] uppercase text-paper/40 mb-1">AOV</p>
                  <p className="text-base font-bold text-paper">£18.56</p>
                </div>
              </div>

              {/* Mini chart bars */}
              <div className="flex items-end gap-1 justify-center w-24">
                {[30, 45, 60, 75, 55, 70, 85].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-gold-dark to-gold-light"
                    style={{ height: `${h * 0.8}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom indicator */}
            <div className="absolute inset-x-4 bottom-5">
              <div className="mb-2 h-1 w-2/3 rounded-full bg-gold/40" />
              <div className="h-1 w-1/3 rounded-full bg-paper/15" />
            </div>

            {/* Side indicators */}
            <div className="absolute right-3 bottom-24 flex flex-col items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-gold/60 animate-pulse" />
              <span className="h-6 w-6 rounded-full bg-paper/20" />
            </div>
          </div>
        </motion.div>

        {/* Floating: category approved */}
        <FloatCard
          delay={0.1}
          className="absolute left-0 top-6 z-20 w-[190px] rounded-2xl border border-line bg-ink-2/90 p-4 shadow-2xl backdrop-blur"
        >
          <div style={{ transform: "translateZ(60px)" }}>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-gold">
                ✓
              </span>
              <span className="text-xs font-medium text-paper/80">
                Category Approved
              </span>
            </div>
            <p className="mt-2 text-[11px] text-paper/40">
              Beauty &amp; Personal Care
            </p>
          </div>
        </FloatCard>

        {/* Floating: order feed */}
        <FloatCard
          delay={0.3}
          className="absolute -right-2 top-24 z-20 w-[190px] rounded-2xl border border-line bg-ink-2/90 p-4 shadow-2xl backdrop-blur sm:right-2"
        >
          <div style={{ transform: "translateZ(80px)" }}>
            <p className="text-[10px] uppercase tracking-[0.18em] text-paper/40">
              Live Order Feed
            </p>
            <div className="mt-3 space-y-2.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-md bg-gradient-to-br from-gold-light to-gold-dark" />
                  <span className="h-1.5 flex-1 rounded-full bg-paper/15" />
                  <span className="text-[10px] text-gold">●</span>
                </div>
              ))}
            </div>
          </div>
        </FloatCard>

        {/* Floating: growth sparkline */}
        <FloatCard
          delay={0.2}
          className="absolute -left-4 bottom-16 z-20 w-[180px] rounded-2xl border border-line bg-ink-2/90 p-4 shadow-2xl backdrop-blur sm:left-0"
        >
          <div style={{ transform: "translateZ(50px)" }}>
            <p className="text-[10px] uppercase tracking-[0.18em] text-paper/40">
              Growth Trend
            </p>
            <svg viewBox="0 0 140 40" className="mt-2 h-10 w-full">
              <polyline
                points="0,32 20,28 40,30 60,18 80,20 100,8 120,10 140,2"
                fill="none"
                stroke="url(#goldline)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="goldline" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8a6a2c" />
                  <stop offset="100%" stopColor="#e9cd8a" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </FloatCard>

        {/* Floating: markets badge */}
        <FloatCard
          delay={0.45}
          className="absolute bottom-0 right-0 z-20 w-[170px] rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 to-transparent p-4 shadow-2xl backdrop-blur sm:right-6"
        >
          <div style={{ transform: "translateZ(70px)" }}>
            <p className="font-display text-lg italic text-gold-light">9 Markets</p>
            <p className="mt-1 text-[11px] text-paper/50">
              UK · US · EU · LATAM · Asia
            </p>
          </div>
        </FloatCard>

        {/* Floating: New Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -right-8 bottom-12 z-10 hidden lg:block"
          style={{ transform: "translateZ(30px)" }}
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotateZ: [0, -5, 5, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/new-logo.png"
              alt="TikTok Shop Solutions Logo"
              width={180}
              height={180}
              className="drop-shadow-[0_20px_60px_rgba(232,188,16,0.25)]"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
