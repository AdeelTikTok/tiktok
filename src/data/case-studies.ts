// Each case study is built strictly from the agency's own proof screenshots — no invented outcomes.
export type CaseStudy = {
  tag: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
  imageCategory: string;
  imagePrefix: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    tag: "Account Reactivation",
    title: "Shop Closure Overturned",
    problem:
      "A shop was permanently closed over a Non-Compliant Store Behavior enforcement, with orders cancelled and fund withdrawal suspended.",
    approach:
      "We prepared and filed the appeal case directly through TikTok Shop's resolution process.",
    result:
      "First appeal successful — shop closure, fund withdrawal suspension and order cancellation were all reversed.",
    imageCategory: "account-suspension-reactivation",
    imagePrefix: "suspension-reactivation-shop-closure-cancelled",
  },
  {
    tag: "Ads Performance",
    title: "Efficiency Rebuilt Mid-Campaign",
    problem:
      "A running campaign was spending heavily with a low return — ROI of 4.97 and £3.36 cost per order.",
    approach:
      "Campaign structure and targeting were optimized without changing the underlying product.",
    result:
      "Cost per order fell to £1.02 and ROI rose to 18.11 over the following period, on comparable order volume.",
    imageCategory: "ads-performance",
    imagePrefix: "ads-performance-before-after",
  },
  {
    tag: "Sales Growth",
    title: "A 60-Day Growth Curve",
    problem:
      "An Italy-based shop needed to convert early traction into sustained month-over-month growth.",
    approach:
      "Ongoing store management across listings, fulfillment health and demand response.",
    result:
      "GMV reached €40,351.94 over a 60-day window, up 344.77% versus the prior period.",
    imageCategory: "sales-proof",
    imagePrefix: "sales-analytics-italy-40k-gmv",
  },
  {
    tag: "Violation Removal",
    title: "Counterfeit Flag, Reversed",
    problem:
      "A product listing was flagged for potential counterfeit or knockoff goods, and an initial appeal was rejected.",
    approach:
      "A second appeal was filed with documentation proving the product was purchased through a legitimate channel.",
    result:
      "Second appeal successful — the violation was fully overturned and the listing restored.",
    imageCategory: "violation-removal",
    imagePrefix: "violation-removal-counterfeit-knockoff",
  },
];
