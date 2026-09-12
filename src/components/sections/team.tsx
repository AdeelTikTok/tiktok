import Image from "next/image";
import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";

const TEAM = [
  {
    role: "Founder & CEO",
    note: "Sets the strategic direction across every market we operate in.",
    match: "founder-ceo",
  },
  {
    role: "Head of Ecommerce Operations",
    note: "Oversees listings, fulfillment and store operations.",
    match: "head-of-ecommerce-operations",
  },
  {
    role: "Growth Operations Manager",
    note: "Runs day-to-day growth execution across managed shops.",
    match: "growth-operations-manager",
  },
  {
    role: "Consulting Manager",
    note: "Advises sellers on strategy and onboarding across managed shops.",
    match: "consulting-manager",
  },
];

export default function Team() {
  const images = getCategoryImages("team");

  return (
    <section id="team" className="relative bg-ink py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mb-16 max-w-2xl">
          <Kicker dark>Leadership</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.03] tracking-tight text-paper">
            <RevealWords text="The team behind the operation." />
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {TEAM.map((member, i) => {
            const image = images.find((src) => src.includes(member.match));
            return (
              <Reveal key={member.role} delay={i * 0.08}>
                <div className="group grid grid-cols-1 items-center gap-8 py-10 sm:grid-cols-[140px_1fr_auto]">
                  <div className="relative aspect-square w-28 overflow-hidden rounded-2xl border border-line sm:w-[140px]">
                    {image && (
                      <Image
                        src={image}
                        alt={member.role}
                        fill
                        sizes="140px"
                        className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-display text-2xl text-paper sm:text-3xl">
                      {member.role}
                    </p>
                    <p className="mt-2 max-w-md text-sm text-paper/50">
                      {member.note}
                    </p>
                  </div>
                  <span className="font-display hidden text-5xl italic text-paper/[0.06] sm:block">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
