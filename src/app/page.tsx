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
import { getCurrentLocale } from "@/lib/i18n/current-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function Home() {
  const locale = await getCurrentLocale();
  const dict = await getDictionary(locale);

  return (
    <main>
      <Hero dict={dict.hero} />
      <TrustMarquee dict={dict.trustMarquee} />
      <Services dict={dict.services} />
      <AccountCreation dict={dict.accountCreation} />
      <CategoryApproval dict={dict.categoryApproval} />
      <Violations dict={dict.violations} />
      <Suspension dict={dict.suspension} />
      <ProductStrategy dict={dict.productStrategy} />
      <Creators dict={dict.creators} />
      <Ads dict={dict.ads} />
      <Results dict={dict.results} />
      <Operations dict={dict.operations} />
      <About dict={dict.about} countryNames={dict.countryNames} />
      <Team dict={dict.team} />
      <Markets dict={dict.markets} countryNames={dict.countryNames} />
      <Reviews dict={dict.reviews} />
      <CaseStudies dict={dict.caseStudies} />
      <Contact dict={dict.contact} />
    </main>
  );
}
