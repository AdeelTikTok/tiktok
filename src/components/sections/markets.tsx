import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const REGION_COUNTRIES: { region: keyof Dictionary["markets"]["regions"]; countries: string[] }[] = [
  { region: "europe", countries: ["United Kingdom", "Spain", "Italy", "France", "Germany"] },
  { region: "americas", countries: ["United States", "Mexico", "Brazil"] },
  { region: "asia", countries: ["Malaysia"] },
];

type MarketsProps = {
  dict: Dictionary["markets"];
  countryNames: Dictionary["countryNames"];
};

export default function Markets({ dict, countryNames }: MarketsProps) {
  return (
    <section id="markets" className="relative bg-paper py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Kicker className="mx-auto justify-center">{dict.kicker}</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.03] tracking-tight text-ink">
            <RevealWords text={dict.heading} />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {REGION_COUNTRIES.map((region, ri) => (
            <Reveal key={region.region} delay={ri * 0.12}>
              <div className="h-full rounded-2xl border border-ink/10 bg-ink/[0.02] p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-dark">
                  {dict.regions[region.region]}
                </p>
                <ul className="mt-6 space-y-4">
                  {region.countries.map((c) => (
                    <li
                      key={c}
                      className="group flex items-center justify-between border-b border-ink/8 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-gold-dark sm:text-2xl">
                        {countryNames[c as keyof Dictionary["countryNames"]]}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-gold/50 transition-transform duration-300 group-hover:scale-150" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
