import Hero from "@/components/sections/hero";
import TrustMarquee from "@/components/sections/trust-marquee";
import Services from "@/components/sections/services";
import AccountCreation from "@/components/sections/account-creation";
import CategoryApproval from "@/components/sections/category-approval";
import Violations from "@/components/sections/violations";
import Suspension from "@/components/sections/suspension";
import ProductStrategy from "@/components/sections/product-strategy";
import Creators from "@/components/sections/creators";
import Ads from "@/components/sections/ads";
import Results from "@/components/sections/results";
import Operations from "@/components/sections/operations";
import About from "@/components/sections/about";
import Team from "@/components/sections/team";
import Markets from "@/components/sections/markets";
import Reviews from "@/components/sections/reviews";
import CaseStudies from "@/components/sections/case-studies";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustMarquee />
      <Services />
      <AccountCreation />
      <CategoryApproval />
      <Violations />
      <Suspension />
      <ProductStrategy />
      <Creators />
      <Ads />
      <Results />
      <Operations />
      <About />
      <Team />
      <Markets />
      <Reviews />
      <CaseStudies />
      <Contact />
    </main>
  );
}
