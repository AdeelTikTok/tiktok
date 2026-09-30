import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { GoldButton, OutlineButton } from "@/components/ui/buttons";
import { WHATSAPP_LINK } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contact" className="noise-overlay relative overflow-hidden bg-ink py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-[160px]" />
      </div>

      <div className="container-px relative mx-auto max-w-[1100px] text-center">
        <Kicker dark className="mx-auto justify-center">
          {dict.kicker}
        </Kicker>
        <h2 className="font-display mt-6 text-[clamp(2.2rem,6vw,5rem)] leading-[1.02] tracking-tight text-paper">
          <RevealWords text={dict.heading} />
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper/55">
            {dict.body}
          </p>
        </Reveal>

        <Reveal delay={0.32} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <GoldButton href={WHATSAPP_LINK} external>
            {dict.ctaPrimary}
          </GoldButton>
          <OutlineButton href={WHATSAPP_LINK} external>
            {dict.ctaSecondary}
          </OutlineButton>
        </Reveal>

        <Reveal delay={0.42} className="mt-16 flex flex-col items-center gap-3 border-t border-line pt-10 sm:flex-row sm:justify-center sm:gap-10">
          <div className="flex items-center gap-2 text-sm text-paper/50">
            <span className="text-gold">✆</span>
            +92 327 4698250
          </div>
          <div className="hidden h-4 w-px bg-line sm:block" />
          <div className="flex items-center gap-2 text-sm text-paper/50">
            <span className="text-gold">◎</span>
            {dict.googleMeet}
          </div>
          <div className="hidden h-4 w-px bg-line sm:block" />
          <div className="flex items-center gap-2 text-sm text-paper/50">
            <span className="text-gold">⌖</span>
            {dict.location}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
