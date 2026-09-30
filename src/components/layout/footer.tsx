import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { MARKETS, WHATSAPP_LINK } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type FooterProps = {
  dict: Dictionary["footer"];
  services: Dictionary["services"]["items"];
  countryNames: Dictionary["countryNames"];
};

export default function Footer({ dict, services, countryNames }: FooterProps) {
  return (
    <footer className="relative border-t border-line bg-ink pt-20">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-14 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo size="lg" />
            <p className="mt-6 text-sm leading-relaxed text-paper/55">{dict.tagline}</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              {dict.whatsappLabel}
              <span aria-hidden className="rtl:rotate-90">↗</span>
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper/40">
              {dict.servicesHeading}
            </p>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.title} className="text-sm text-paper/60">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper/40">
              {dict.marketsHeading}
            </p>
            <ul className="mt-5 space-y-2.5">
              {MARKETS.map((m) => (
                <li key={m} className="text-sm text-paper/60">
                  {countryNames[m]}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper/40">
              {dict.contactHeading}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-paper/60">
              <li>{dict.location}</li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {dict.whatsappChat}
                </a>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gold">
                  {dict.bookCall}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-8 sm:flex-row sm:items-center">
          <p className="text-xs text-paper/35">
            © {new Date().getFullYear()} {dict.copyright}
          </p>
          <p className="text-xs text-paper/35">{dict.globalStrip}</p>
        </div>
      </div>
    </footer>
  );
}
