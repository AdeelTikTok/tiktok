import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";
import { CASE_STUDY_IMAGES } from "@/data/case-studies";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function CaseStudies({ dict }: { dict: Dictionary["caseStudies"] }) {
  return (
    <section className="relative bg-paper py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mb-16 max-w-2xl">
          <Kicker>{dict.kicker}</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.03] tracking-tight text-ink">
            <RevealWords text={dict.heading} />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {dict.items.map((cs, i) => {
            const imageRef = CASE_STUDY_IMAGES[i];
            const image = getCategoryImages(imageRef.imageCategory, imageRef.imagePrefix)[0];
            return (
              <Reveal key={cs.title} delay={(i % 2) * 0.1}>
                <div className="grid h-full grid-cols-1 gap-6 rounded-2xl border border-ink/10 bg-ink/[0.02] p-7 sm:grid-cols-[1fr_1.1fr]">
                  {image && (
                    <BrowserFrame src={image} alt={cs.title} className="order-1" />
                  )}
                  <div className="order-2 flex flex-col">
                    <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-gold-dark">
                      {cs.tag}
                    </span>
                    <p className="font-display mt-3 text-xl text-ink">{cs.title}</p>
                    <dl className="mt-4 space-y-3 text-[13px] leading-relaxed">
                      <div>
                        <dt className="font-medium text-ink/40">{dict.problemLabel}</dt>
                        <dd className="text-ink/65">{cs.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-ink/40">{dict.approachLabel}</dt>
                        <dd className="text-ink/65">{cs.approach}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-ink/40">{dict.resultLabel}</dt>
                        <dd className="text-ink/80">{cs.result}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
