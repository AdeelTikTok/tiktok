import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { MARKETS, WHATSAPP_LINK } from "@/lib/utils";

const SERVICES = [
  "Account Creation & Setup",
  "Category Approval",
  "Violation Removal",
  "Creator Outreach",
  "Ads Management",
  "Sales Generation",
  "White Label Products",
  "Warehouse Management",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink pt-20">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-14 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo size="lg" />
            <p className="mt-6 text-sm leading-relaxed text-paper/55">
              A TikTok Shop growth and management agency — building, scaling and
              running TikTok Shop operations for sellers across international
              markets.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              +92 327 4698250 — WhatsApp
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper/40">
              Services
            </p>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s} className="text-sm text-paper/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper/40">
              Markets
            </p>
            <ul className="mt-5 space-y-2.5">
              {MARKETS.map((m) => (
                <li key={m} className="text-sm text-paper/60">
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper/40">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-paper/60">
              <li>Punjab, Pakistan</li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gold">
                  Book a Strategy Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-8 sm:flex-row sm:items-center">
          <p className="text-xs text-paper/35">
            © {new Date().getFullYear()} TikTok Shop Solutions. All rights reserved.
          </p>
          <p className="text-xs text-paper/35">
            Built for global TikTok commerce — UK · USA · Spain · Italy · France · Germany · Malaysia · Mexico · Brazil
          </p>
        </div>
      </div>
    </footer>
  );
}
