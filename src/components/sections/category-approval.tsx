import Image from "next/image";
import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function CategoryApproval({ dict }: { dict: Dictionary["categoryApproval"] }) {
  const screens = getCategoryImages("category-approved", "category-approved-");
  const brandLogos = getCategoryImages("category-approved", "brand-logo-");

  return (
    <section className="relative bg-ink py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Kicker dark>{dict.kicker}</Kicker>
            <h2 className="font-display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-tight text-paper">
              <RevealWords text={dict.heading} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-paper/55">
                {dict.body}
              </p>
            </Reveal>

            {brandLogos.length > 0 && (
              <Reveal delay={0.3} className="mt-10">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-paper/40">
                  {dict.evidenceLabel}
                </p>
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-4">
                  {brandLogos.map((src) => (
                    <div
                      key={src}
                      className="relative flex aspect-square items-center justify-center rounded-xl border border-line bg-paper/[0.04] p-3"
                    >
                      <Image
                        src={src}
                        alt={dict.evidenceAlt}
                        fill
                        sizes="120px"
                        className="object-contain p-3 opacity-90"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <div>
            {screens[0] && (
              <Reveal>
                <BrowserFrame
                  src={screens[0]}
                  alt={dict.imageAlt}
                  className="mx-auto max-w-md"
                />
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
