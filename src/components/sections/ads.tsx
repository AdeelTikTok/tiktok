import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";
import { ADS_CASE } from "@/data/ads-results";

const ADS_SERVICES = [
  "TikTok Shop Ads",
  "Ads Strategy",
  "Campaign Setup",
  "Campaign Management",
  "Performance Optimization",
  "Scaling",
];

const ROWS: { label: string; key: keyof typeof ADS_CASE.before; prefix?: string }[] = [
  { label: "Ad Spend", key: "cost", prefix: "£" },
  { label: "Orders", key: "orders" },
  { label: "Cost / Order", key: "costPerOrder", prefix: "£" },
  { label: "Gross Revenue", key: "revenue", prefix: "£" },
  { label: "ROI", key: "roi", prefix: "×" },
];

export default function Ads() {
  const shots = getCategoryImages("ads-performance");

  return (
    <section className="relative bg-paper py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mb-14 max-w-2xl">
          <Kicker>TikTok Shop Ads</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.05] tracking-tight text-ink">
            <RevealWords text="Turn winning products into scalable campaigns." />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/55">
              Paid media works when it&rsquo;s built on a product that
              already performs organically. We run the campaign layer that
              scales what&rsquo;s already working — figures below are from
              an actual account we manage.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {shots[0] && (
            <Reveal>
              <BrowserFrame src={shots[0]} alt="TikTok Shop ads campaign before and after optimization" />
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-ink/10 bg-ink text-paper">
              <div className="flex items-center justify-between border-b border-line px-6 py-5">
                <p className="text-xs uppercase tracking-[0.18em] text-paper/50">
                  {ADS_CASE.period.before}
                </p>
                <span className="text-gold">→</span>
                <p className="text-xs uppercase tracking-[0.18em] text-gold">
                  {ADS_CASE.period.after}
                </p>
              </div>
              <div className="divide-y divide-line">
                {ROWS.map((row) => (
                  <div key={row.key} className="flex items-center justify-between px-6 py-4">
                    <span className="text-sm text-paper/55">{row.label}</span>
                    <div className="flex items-center gap-4">
                      <span className="font-display text-base text-paper/50">
                        {row.prefix}
                        {ADS_CASE.before[row.key]}
                      </span>
                      <span className="text-paper/25">→</span>
                      <span className="font-display text-lg text-gold-light">
                        {row.prefix}
                        {ADS_CASE.after[row.key]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {ADS_SERVICES.map((s) => (
              <li
                key={s}
                className="rounded-full border border-ink/12 bg-ink/[0.02] px-4 py-2.5 text-center text-[13px] font-medium text-ink/70"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        {shots.length > 1 && (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {shots.slice(1, 3).map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <BrowserFrame src={src} alt="TikTok Shop ads GMV Max campaign results" />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
