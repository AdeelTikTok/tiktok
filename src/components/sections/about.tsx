import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { MARKETS } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type AboutProps = {
  dict: Dictionary["about"];
  countryNames: Dictionary["countryNames"];
};

export default function About({ dict, countryNames }: AboutProps) {
  return (
    <section id="about" className="relative bg-paper py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>{dict.kicker}</Kicker>
            <h2 className="font-display mt-5 text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.03] tracking-tight text-ink">
              <RevealWords text={dict.heading} />
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-8">
            <Reveal>
              <p className="text-xl leading-relaxed text-ink/70 sm:text-2xl font-display">
                {dict.lead}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-xl text-base leading-relaxed text-ink/55">
                {dict.body}
              </p>
            </Reveal>
            <Reveal delay={0.25} className="flex flex-wrap gap-2 pt-2">
              {MARKETS.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-ink/12 px-3.5 py-1.5 text-[12px] text-ink/60"
                >
                  {countryNames[m]}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
