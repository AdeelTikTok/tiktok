"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { GoldButton } from "@/components/ui/buttons";
import { LanguageSwitcher } from "./language-switcher";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/locales";

const HREFS = ["#home", "#services", "#results", "#about", "#team", "#markets", "#contact"] as const;

export default function Nav({ dict, locale }: { dict: Dictionary["nav"]; locale: Locale }) {
  const labels = [
    dict.links.home,
    dict.links.services,
    dict.links.results,
    dict.links.about,
    dict.links.team,
    dict.links.markets,
    dict.links.contact,
  ];
  const LINKS = HREFS.map((href, i) => ({ href, label: labels[i] }));

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-line bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-px mx-auto flex h-20 max-w-[1600px] items-center justify-between">
          <Link href="#home" onClick={() => setOpen(false)} aria-label={dict.homeAriaLabel}>
            <Logo size="lg" />
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] font-medium uppercase tracking-[0.14em] text-paper/70 transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher currentLocale={locale} dark />
            <GoldButton href="#contact">{dict.bookMeeting}</GoldButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`h-px w-6 bg-paper transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-paper transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Rendered as a sibling of <header>, not a child — a backdrop-filter
          ancestor (the header's blur when scrolled) creates a new containing
          block for position:fixed descendants, which breaks full-screen
          fixed overlays nested inside it. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-20 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-6 lg:hidden"
          >
            <ul className="flex flex-col divide-y divide-line">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-5 text-3xl italic text-paper"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <LanguageSwitcher currentLocale={locale} dark />
              </div>
              <GoldButton href="#contact" className="w-full justify-center">
                {dict.bookMeeting}
              </GoldButton>
              <p className="text-center text-xs uppercase tracking-[0.2em] text-paper/40">
                {dict.marketsStrip}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
