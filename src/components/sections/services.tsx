import { getCategoryImages } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { RevealWords } from "@/components/ui/reveal";
import ServicesInteractive from "./services-interactive";

const SERVICE_DEFS = [
  {
    number: "01",
    title: "Account Creation & Setup",
    description:
      "End-to-end TikTok Shop store creation, seller setup and account configuration — built correctly from day one.",
    category: "account-creation",
  },
  {
    number: "02",
    title: "Category Approval",
    description:
      "Navigating TikTok Shop's category requirements so your store is approved to sell in the right verticals.",
    category: "category-approved",
  },
  {
    number: "03",
    title: "Violation Removal",
    description:
      "Understanding, preparing and managing violation appeals and account recovery cases when issues arise.",
    category: "violation-removal",
  },
  {
    number: "04",
    title: "Creator Outreach",
    description:
      "Sourcing and managing creator and affiliate relationships that distribute your products to real audiences.",
    category: "creator-affiliate",
  },
  {
    number: "05",
    title: "Ads Management & Running",
    description:
      "Strategy, setup and day-to-day management of TikTok Shop advertising campaigns.",
    category: "ads-performance",
  },
  {
    number: "06",
    title: "Sales Generation",
    description:
      "Combining content, creators and paid media into a coordinated push toward consistent sales.",
    category: "sales-proof",
  },
  {
    number: "07",
    title: "White Label Products",
    description:
      "Support sourcing and branding white label products suited to TikTok Shop demand.",
    category: "product-listing",
  },
  {
    number: "08",
    title: "Warehouse Management",
    description:
      "Operational support for storage, fulfillment coordination and inventory flow.",
    category: "product-listing",
  },
];

export default function Services() {
  const services = SERVICE_DEFS.map((s) => ({
    ...s,
    image:
      s.category === "category-approved"
        ? getCategoryImages(s.category, "category-approved-")[0] ?? null
        : getCategoryImages(s.category)[0] ?? null,
  }));

  return (
    <section id="services" className="relative bg-paper py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mb-16 max-w-2xl">
          <Kicker>What We Do</Kicker>
          <h2 className="font-display mt-5 text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-tight text-ink">
            <RevealWords text="Everything your TikTok Shop needs to scale." />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/55">
              One coordinated operation across setup, compliance, content,
              advertising and fulfillment — instead of eight disconnected
              vendors.
            </p>
          </Reveal>
        </div>

        <ServicesInteractive services={services} />
      </div>
    </section>
  );
}
