import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/frames";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function AccountCreation({ dict }: { dict: Dictionary["accountCreation"] }) {
  const shots = getCategoryImages("account-creation");
  const primary = shots[0];

  return (
    <section className="relative bg-ink py-28 sm:py-36">
      <div className="container-px mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Kicker dark>{dict.kicker}</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-tight text-paper">
            <RevealWords text={dict.heading} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/55">
              {dict.body}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {dict.capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 text-sm text-paper/70"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="order-1 flex items-center justify-center lg:order-2">
          {primary && (
            <BrowserFrame
              src={primary}
              alt={dict.imageAlt}
              className="w-full max-w-md"
            />
          )}
        </div>
      </div>
    </section>
  );
}
