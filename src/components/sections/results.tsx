import { getCategoryImagesWithSize, getCategoryVideos } from "@/lib/assets";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import ProofTabs, { type ProofCategory } from "./proof-tabs";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function Results({ dict }: { dict: Dictionary["results"] }) {
  const sales = getCategoryImagesWithSize("sales-proof").filter(
    (img) => !img.src.includes("sales-tiktok-guide-graphic")
  );
  const videos = [
    ...getCategoryVideos("viral-videos"),
    ...getCategoryVideos("sales-proof"),
  ];

  const allCategories: ProofCategory[] = [
    { key: "account-creation", label: dict.categories.accountCreation, type: "images", items: getCategoryImagesWithSize("account-creation") },
    { key: "category-approved", label: dict.categories.categoryApproved, type: "images", items: getCategoryImagesWithSize("category-approved", "category-approved-") },
    { key: "violation-removal", label: dict.categories.violationRemoval, type: "images", items: getCategoryImagesWithSize("violation-removal") },
    { key: "viral-videos", label: dict.categories.viralVideos, type: "videos", items: videos },
    { key: "sales-proof", label: dict.categories.salesProof, type: "images", items: sales },
    { key: "suspension-reactivation", label: dict.categories.suspensionReactivation, type: "images", items: getCategoryImagesWithSize("account-suspension-reactivation") },
    { key: "product-listing", label: dict.categories.productListing, type: "images", items: getCategoryImagesWithSize("product-listing") },
    { key: "creator-affiliate", label: dict.categories.creatorAffiliate, type: "images", items: getCategoryImagesWithSize("creator-affiliate") },
    { key: "ads-performance", label: dict.categories.adsPerformance, type: "images", items: getCategoryImagesWithSize("ads-performance") },
  ];
  const categories = allCategories.filter((c) => c.items.length > 0);

  return (
    <section id="results" className="relative bg-ink py-28 sm:py-36">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Kicker dark className="mx-auto justify-center">
            {dict.kicker}
          </Kicker>
          <h2 className="font-display mt-5 text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.03] tracking-tight text-paper">
            <RevealWords text={dict.heading} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-paper/55">
              {dict.body}
            </p>
          </Reveal>
        </div>

        <ProofTabs categories={categories} comingSoon={dict.comingSoon} />
      </div>
    </section>
  );
}
