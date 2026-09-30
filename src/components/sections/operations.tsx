import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function Operations({ dict }: { dict: Dictionary["operations"] }) {
  const shots = getCategoryImages("sales-proof", "sales-uk-white-label");
  const proof = shots[0];

  return (
    <section className="relative bg-ink py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mb-16 max-w-2xl">
          <Kicker dark>{dict.kicker}</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.05] tracking-tight text-paper">
            <RevealWords text={dict.heading} />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr_0.9fr]">
          <Reveal className="rounded-2xl border border-line bg-ink-2 p-8">
            <p className="font-display text-2xl text-paper">{dict.whiteLabel.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/55">
              {dict.whiteLabel.body}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-line bg-ink-2 p-8">
            <p className="font-display text-2xl text-paper">{dict.warehouse.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/55">
              {dict.warehouse.body}
            </p>
          </Reveal>

          {proof && (
            <Reveal delay={0.2}>
              <BrowserFrame src={proof} alt={dict.imageAlt} />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
