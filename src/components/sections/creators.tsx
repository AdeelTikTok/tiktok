import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";

const CREATOR_SERVICES = [
  "Creator Outreach",
  "Affiliate Management",
  "Creator Campaign Management",
  "UGC Coordination",
  "Product Seeding",
  "Performance Tracking",
];

export default function Creators() {
  const shots = getCategoryImages("creator-affiliate");

  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36" id="creators">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Kicker dark>Creators &amp; Affiliates</Kicker>
            <h2 className="font-display mt-5 text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.05] tracking-tight text-paper">
              <RevealWords text="Creators are the distribution engine." />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-paper/55">
                TikTok Shop is a creator-driven marketplace. We manage the
                relationships, campaigns and content pipeline that turn
                creator attention into shop traffic.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                {CREATOR_SERVICES.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-paper/70">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5">
            {shots[0] && (
              <Reveal>
                <BrowserFrame src={shots[0]} alt="TikTok Shop Affiliate Centre partner collaborations" />
              </Reveal>
            )}
            {shots[1] && (
              <Reveal delay={0.1}>
                <BrowserFrame src={shots[1]} alt="TikTok Shop Affiliate Centre creator dashboard" />
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
