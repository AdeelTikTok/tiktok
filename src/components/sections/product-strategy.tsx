import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";

const HUNTING_FOCUS = ["Market research", "Demand signals", "Competition mapping", "TikTok Shop suitability"];
const LISTING_FOCUS = ["Listing setup", "Product optimization", "Presentation &amp; imagery", "Ongoing listing management"];

export default function ProductStrategy() {
  const listingShots = getCategoryImages("product-listing");
  const huntingShots = getCategoryImages("product-hunting");

  return (
    <section className="relative bg-paper py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mb-16 max-w-2xl">
          <Kicker>Product Strategy</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-tight text-ink">
            <RevealWords text="Product hunting and listing that converts." />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-2">
          <div>
            <p className="font-display text-2xl text-ink">Product Hunting</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55">
              Every product recommendation is grounded in research — not
              guesswork. We evaluate demand, competitive saturation and
              format fit before a product ever reaches your shop.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {HUNTING_FOCUS.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-ink/12 px-4 py-1.5 text-[13px] text-ink/65"
                  dangerouslySetInnerHTML={{ __html: f }}
                />
              ))}
            </ul>
            {huntingShots[0] && (
              <Reveal delay={0.15}>
                <BrowserFrame
                  src={huntingShots[0]}
                  alt="Product research and hunting"
                  className="mt-8"
                />
              </Reveal>
            )}
          </div>

          <div>
            <p className="font-display text-2xl text-ink">Product Listing That Converts</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55">
              A listing is a sales page. We manage setup, optimization and
              presentation so each product is positioned to perform inside
              the TikTok Shop feed and search.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {LISTING_FOCUS.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-ink/12 px-4 py-1.5 text-[13px] text-ink/65"
                  dangerouslySetInnerHTML={{ __html: f }}
                />
              ))}
            </ul>
            {listingShots[0] && (
              <Reveal delay={0.15}>
                <BrowserFrame
                  src={listingShots[0]}
                  alt="TikTok Shop product listing"
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
