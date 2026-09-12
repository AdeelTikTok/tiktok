import Image from "next/image";
import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";

export default function CategoryApproval() {
  const screens = getCategoryImages("category-approved", "category-approved-");
  const brandLogos = getCategoryImages("category-approved", "brand-logo-");

  return (
    <section className="relative bg-ink py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Kicker dark>Category Approval</Kicker>
            <h2 className="font-display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-tight text-paper">
              <RevealWords text="Approved to sell in the categories that matter." />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-paper/55">
                Restricted categories — jewelry, branded goods and more —
                require documented qualification before a shop can list in
                them. We prepare and submit these cases, including brand
                authorization evidence for the labels we work with.
              </p>
            </Reveal>

            {brandLogos.length > 0 && (
              <Reveal delay={0.3} className="mt-10">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-paper/40">
                  Brand qualification evidence on file
                </p>
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-4">
                  {brandLogos.map((src) => (
                    <div
                      key={src}
                      className="relative flex aspect-square items-center justify-center rounded-xl border border-line bg-paper/[0.04] p-3"
                    >
                      <Image
                        src={src}
                        alt="Brand qualification evidence"
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
                  alt="TikTok Shop category approval — diamond jewelry accessories, status approved"
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
