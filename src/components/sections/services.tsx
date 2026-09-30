import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { RevealWords } from "@/components/ui/reveal";
import ServicesInteractive from "./services-interactive";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const CATEGORIES = [
  "account-creation",
  "category-approved",
  "violation-removal",
  "creator-affiliate",
  "ads-performance",
  "sales-proof",
  "product-listing",
  "product-listing",
] as const;

export default function Services({ dict }: { dict: Dictionary["services"] }) {
  const services = dict.items.map((item, i) => {
    const number = String(i + 1).padStart(2, "0");
    const category = CATEGORIES[i];
    const image =
      category === "category-approved"
        ? getCategoryImages(category, "category-approved-")[0] ?? null
        : getCategoryImages(category)[0] ?? null;
    return { number, title: item.title, description: item.description, category, image };
  });

  return (
    <section id="services" className="relative bg-paper py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mb-16 max-w-2xl">
          <Kicker>{dict.kicker}</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-tight text-ink">
            <RevealWords text={dict.heading} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/55">
              {dict.subhead}
            </p>
          </Reveal>
        </div>

        <ServicesInteractive services={services} serviceLabel={dict.serviceLabel} />
      </div>
    </section>
  );
}
