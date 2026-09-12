import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";
import { VIOLATION_CASES } from "@/data/violations";

export default function Violations() {
  const shots = getCategoryImages("violation-removal");

  return (
    <section className="relative bg-paper py-28 sm:py-36" id="violations">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mb-16 max-w-2xl">
          <Kicker>Violation Removal &amp; Appeals</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-tight text-ink">
            <RevealWords text="When TikTok Shop flags an account, response speed matters." />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/55">
              We help sellers understand, prepare and manage TikTok Shop
              violation appeals and account recovery cases — working through
              the platform&rsquo;s process methodically rather than leaving
              it to chance. Below are violation types we&rsquo;ve
              successfully filed appeals for, drawn from real case records.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {VIOLATION_CASES.map((v, i) => (
              <Reveal key={v.reason} delay={(i % 6) * 0.05}>
                <div className="group h-full rounded-xl border border-ink/10 bg-ink/[0.02] p-5 transition-colors duration-300 hover:border-gold/40 hover:bg-ink/[0.04]">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[15px] font-medium leading-snug text-ink">
                      {v.reason}
                    </p>
                    <span className="mt-0.5 shrink-0 rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-gold-dark">
                      Resolved
                    </span>
                  </div>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-ink/50">
                    {v.outcome}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5">
            {shots.slice(0, 4).map((src, i) => (
              <Reveal
                key={src}
                delay={i * 0.08}
                className={i % 2 === 1 ? "mt-8" : ""}
              >
                <BrowserFrame src={src} alt="TikTok Shop violation appeal case record" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
