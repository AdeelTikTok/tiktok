import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function ProductStrategy({ dict }: { dict: Dictionary["productStrategy"] }) {
  const listingShots = getCategoryImages("product-listing");
  const huntingShots = getCategoryImages("product-hunting");

  return (
    <section className="relative bg-paper py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mb-16 max-w-2xl">
          <Kicker>{dict.kicker}</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-tight text-ink">
            <RevealWords text={dict.heading} />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-2">
          <div>
            <p className="font-display text-2xl text-ink">{dict.hunting.title}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55">
              {dict.hunting.body}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {dict.hunting.focus.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-ink/12 px-4 py-1.5 text-[13px] text-ink/65"
                >
                  {f}
                </li>
              ))}
            </ul>
            {huntingShots[0] && (
              <Reveal delay={0.15}>
                <BrowserFrame
                  src={huntingShots[0]}
                  alt={dict.hunting.imageAlt}
                  className="mt-8"
                />
              </Reveal>
            )}
          </div>

          <div>
            <p className="font-display text-2xl text-ink">{dict.listing.title}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55">
              {dict.listing.body}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {dict.listing.focus.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-ink/12 px-4 py-1.5 text-[13px] text-ink/65"
                >
                  {f}
                </li>
              ))}
            </ul>
            {listingShots[0] && (
              <Reveal delay={0.15}>
                <BrowserFrame
                  src={listingShots[0]}
                  alt={dict.listing.imageAlt}
                  className="mt-8"
                />
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
