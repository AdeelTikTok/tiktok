import { Marquee } from "@/components/ui/marquee";
import { MARKETS } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export default function TrustMarquee() {
  return (
    <section className="relative border-y border-line bg-ink py-14">
      <div className="container-px mx-auto mb-10 max-w-[1600px] text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-paper/40">
            Trusted Across Global TikTok Shop Markets
          </p>
        </Reveal>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent sm:w-40" />
        <Marquee>
          {MARKETS.concat(MARKETS).map((m, i) => (
            <span
              key={i}
              className="font-display flex items-center gap-16 text-3xl italic text-paper/25 sm:text-4xl"
            >
              {m}
              <span className="h-1.5 w-1.5 rounded-full bg-gold/50" aria-hidden />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-px mx-auto mt-10 max-w-[1600px] text-center">
        <Reveal delay={0.1}>
          <p className="mx-auto max-w-xl text-sm text-paper/45">
            From new store launches to high-volume growth — we manage the
            entire journey.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
