import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function Suspension({ dict }: { dict: Dictionary["suspension"] }) {
  const shots = getCategoryImages("account-suspension-reactivation");
  const images = [shots[0], shots[1], shots[2] ?? shots[0]];
  const steps = dict.steps.map((step, i) => ({ ...step, image: images[i] }));

  return (
    <section className="relative bg-ink py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mx-auto max-w-2xl text-center">
          <Kicker dark className="mx-auto justify-center">
            {dict.kicker}
          </Kicker>
          <h2 className="font-display mt-5 text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-tight text-paper">
            <RevealWords text={dict.heading} />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-paper/50">
              {dict.body}
            </p>
          </Reveal>
        </div>

        <div className="relative mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-[110px] hidden h-px bg-line md:block" />
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.15} className="relative">
              <div className="relative z-10 mx-auto flex w-fit items-center gap-2 rounded-full border border-line bg-ink px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] text-gold">
                {dict.stepLabel} 0{i + 1}
              </div>
              {step.image ? (
                <BrowserFrame
                  src={step.image}
                  alt={step.label}
                  className="mt-6"
                />
              ) : (
                <div className="mt-6 flex aspect-[16/10] items-center justify-center rounded-xl border border-line bg-ink-2">
                  <span className="font-display text-3xl italic text-gold/30">
                    0{i + 1}
                  </span>
                </div>
              )}
              <p className="font-display mt-5 text-xl text-paper">{step.label}</p>
              <p className="mt-2 text-sm text-paper/50">{step.note}</p>
              {i < steps.length - 1 && (
                <span className="absolute -right-5 rtl:right-auto rtl:-left-5 top-[26px] hidden text-2xl text-gold md:block rtl:rotate-180">
                  →
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
