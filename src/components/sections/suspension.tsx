import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";

export default function Suspension() {
  const shots = getCategoryImages("account-suspension-reactivation");
  const steps = [
    {
      label: "Suspended Account",
      note: "Shop closed for Non-Compliant Store Behavior — orders and fund withdrawal suspended.",
      image: shots[0],
    },
    {
      label: "Appeal & Resolution",
      note: "Case prepared and filed through TikTok Shop's appeal process.",
      image: shots[1],
    },
    {
      label: "Reactivated Account",
      note: "Shop closure and fund withdrawal suspension cancelled — shop operational again.",
      image: shots[2] ?? shots[0],
    },
  ];

  return (
    <section className="relative bg-ink py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mx-auto max-w-2xl text-center">
          <Kicker dark className="mx-auto justify-center">
            Account Recovery
          </Kicker>
          <h2 className="font-display mt-5 text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-tight text-paper">
            <RevealWords text="Suspended doesn't have to mean finished." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-paper/50">
              A real case: a shop closed over a Non-Compliant Store Behavior
              enforcement, appealed and fully reactivated.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-[110px] hidden h-px bg-line md:block" />
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.15} className="relative">
              <div className="relative z-10 mx-auto flex w-fit items-center gap-2 rounded-full border border-line bg-ink px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] text-gold">
                Step 0{i + 1}
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
                <span className="absolute -right-5 top-[26px] hidden text-2xl text-gold md:block">
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
