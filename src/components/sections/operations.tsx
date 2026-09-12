import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";

export default function Operations() {
  const shots = getCategoryImages("sales-proof", "sales-uk-white-label");
  const proof = shots[0];

  return (
    <section className="relative bg-ink py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mb-16 max-w-2xl">
          <Kicker dark>Operations</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.05] tracking-tight text-paper">
            <RevealWords text="Support beyond marketing." />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr_0.9fr]">
          <Reveal className="rounded-2xl border border-line bg-ink-2 p-8">
            <p className="font-display text-2xl text-paper">White Label Products</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/55">
              Support sourcing and branding white label products suited to
              demand we see performing on TikTok Shop, including UK
              seller-central operations.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-line bg-ink-2 p-8">
            <p className="font-display text-2xl text-paper">Warehouse Management</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/55">
              Operational support for storage, fulfillment coordination and
              inventory flow — so listings stay in stock and dispatch times
              stay healthy.
            </p>
          </Reveal>

          {proof && (
            <Reveal delay={0.2}>
              <BrowserFrame src={proof} alt="UK white label store performance" />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
