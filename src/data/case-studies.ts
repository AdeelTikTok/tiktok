// Image references for the case studies — kept in the same order as
// `caseStudies.items` in each locale dictionary (src/lib/i18n/dictionaries).
// The actual case-study text lives in the dictionaries so it can be translated.
export type CaseStudyImageRef = {
  imageCategory: string;
  imagePrefix: string;
};

export const CASE_STUDY_IMAGES: CaseStudyImageRef[] = [
  {
    imageCategory: "account-suspension-reactivation",
    imagePrefix: "suspension-reactivation-shop-closure-cancelled",
  },
  {
    imageCategory: "ads-performance",
    imagePrefix: "ads-performance-before-after",
  },
  {
    imageCategory: "sales-proof",
    imagePrefix: "sales-analytics-italy-40k-gmv",
  },
  {
    imageCategory: "violation-removal",
    imagePrefix: "violation-removal-counterfeit-knockoff",
  },
];
