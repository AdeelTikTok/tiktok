const dictionary: {
  nav: {
    links: {
      home: string;
      services: string;
      results: string;
      about: string;
      team: string;
      markets: string;
      contact: string;
    };
    homeAriaLabel: string;
    bookMeeting: string;
    marketsStrip: string;
  };
  footer: {
    tagline: string;
    whatsappLabel: string;
    servicesHeading: string;
    marketsHeading: string;
    contactHeading: string;
    location: string;
    whatsappChat: string;
    bookCall: string;
    copyright: string;
    globalStrip: string;
  };
  hero: {
    badge: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { services: string; markets: string; management: string };
    scroll: string;
  };
  trustMarquee: { kicker: string; caption: string };
  services: {
    kicker: string;
    heading: string;
    subhead: string;
    serviceLabel: string;
    items: { title: string; description: string }[];
  };
  accountCreation: {
    kicker: string;
    heading: string;
    body: string;
    capabilities: string[];
    imageAlt: string;
  };
  categoryApproval: {
    kicker: string;
    heading: string;
    body: string;
    evidenceLabel: string;
    evidenceAlt: string;
    imageAlt: string;
  };
  violations: {
    kicker: string;
    heading: string;
    body: string;
    resolvedBadge: string;
    imageAlt: string;
    cases: { reason: string; outcome: string }[];
  };
  suspension: {
    kicker: string;
    heading: string;
    body: string;
    stepLabel: string;
    steps: { label: string; note: string }[];
  };
  productStrategy: {
    kicker: string;
    heading: string;
    hunting: { title: string; body: string; focus: string[]; imageAlt: string };
    listing: { title: string; body: string; focus: string[]; imageAlt: string };
  };
  creators: {
    kicker: string;
    heading: string;
    body: string;
    services: string[];
    imageAlt1: string;
    imageAlt2: string;
  };
  ads: {
    kicker: string;
    heading: string;
    body: string;
    imageAlt: string;
    imageAltResults: string;
    rows: {
      adSpend: string;
      orders: string;
      costPerOrder: string;
      grossRevenue: string;
      roi: string;
    };
    services: string[];
  };
  results: {
    kicker: string;
    heading: string;
    body: string;
    categories: {
      accountCreation: string;
      categoryApproved: string;
      violationRemoval: string;
      viralVideos: string;
      salesProof: string;
      suspensionReactivation: string;
      productListing: string;
      creatorAffiliate: string;
      adsPerformance: string;
    };
    comingSoon: string;
  };
  operations: {
    kicker: string;
    heading: string;
    whiteLabel: { title: string; body: string };
    warehouse: { title: string; body: string };
    imageAlt: string;
  };
  about: { kicker: string; heading: string; lead: string; body: string };
  team: {
    kicker: string;
    heading: string;
    members: { role: string; note: string }[];
  };
  markets: {
    kicker: string;
    heading: string;
    regions: { europe: string; americas: string; asia: string };
  };
  reviews: {
    kicker: string;
    heading: string;
    body: string;
    formHeading: string;
    namePlaceholder: string;
    reviewPlaceholder: string;
    ratingLabel: string;
    submit: string;
    submitting: string;
    successMessage: string;
    genericError: string;
    moderationNote: string;
  };
  caseStudies: {
    kicker: string;
    heading: string;
    problemLabel: string;
    approachLabel: string;
    resultLabel: string;
    items: {
      tag: string;
      title: string;
      problem: string;
      approach: string;
      result: string;
    }[];
  };
  contact: {
    kicker: string;
    heading: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    googleMeet: string;
    location: string;
  };
  countryNames: {
    "United Kingdom": string;
    "United States": string;
    Spain: string;
    Italy: string;
    France: string;
    Germany: string;
    Malaysia: string;
    Mexico: string;
    Brazil: string;
  };
} = {
  nav: {
    links: {
      home: "Home",
      services: "Services",
      results: "Results",
      about: "About",
      team: "Team",
      markets: "Markets",
      contact: "Contact",
    },
    homeAriaLabel: "TikTok Shop Solutions home",
    bookMeeting: "Book a Meeting",
    marketsStrip: "UK · USA · Europe · Malaysia · Mexico · Brazil",
  },
  footer: {
    tagline:
      "A TikTok Shop growth and management agency — building, scaling and running TikTok Shop operations for sellers across international markets.",
    whatsappLabel: "+92 327 4698250 — WhatsApp",
    servicesHeading: "Services",
    marketsHeading: "Markets",
    contactHeading: "Contact",
    location: "Punjab, Pakistan",
    whatsappChat: "WhatsApp Chat",
    bookCall: "Book a Strategy Call",
    copyright: "TikTok Shop Solutions. All rights reserved.",
    globalStrip:
      "Built for global TikTok commerce — UK · USA · Spain · Italy · France · Germany · Malaysia · Mexico · Brazil",
  },
  hero: {
    badge: "TikTok Shop Growth & Management Agency",
    headline: "Your TikTok Shop.\nBuilt to Sell.",
    subhead:
      "From account creation and category approvals to creator management, advertising and sales growth — we manage the complete TikTok Shop operation.",
    ctaPrimary: "Book a Strategy Call",
    ctaSecondary: "View Our Results",
    stats: {
      services: "Core Services",
      markets: "Global Markets",
      management: "Shop Management",
    },
    scroll: "Scroll",
  },
  trustMarquee: {
    kicker: "Trusted Across Global TikTok Shop Markets",
    caption:
      "From new store launches to high-volume growth — we manage the entire journey.",
  },
  services: {
    kicker: "What We Do",
    heading: "Everything your TikTok Shop needs to scale.",
    subhead:
      "One coordinated operation across setup, compliance, content, advertising and fulfillment — instead of eight disconnected vendors.",
    serviceLabel: "Service",
    items: [
      {
        title: "Account Creation & Setup",
        description:
          "End-to-end TikTok Shop store creation, seller setup and account configuration — built correctly from day one.",
      },
      {
        title: "Category Approval",
        description:
          "Navigating TikTok Shop's category requirements so your store is approved to sell in the right verticals.",
      },
      {
        title: "Violation Removal",
        description:
          "Understanding, preparing and managing violation appeals and account recovery cases when issues arise.",
      },
      {
        title: "Creator Outreach",
        description:
          "Sourcing and managing creator and affiliate relationships that distribute your products to real audiences.",
      },
      {
        title: "Ads Management & Running",
        description:
          "Strategy, setup and day-to-day management of TikTok Shop advertising campaigns.",
      },
      {
        title: "Sales Generation",
        description:
          "Combining content, creators and paid media into a coordinated push toward consistent sales.",
      },
      {
        title: "White Label Products",
        description:
          "Support sourcing and branding white label products suited to TikTok Shop demand.",
      },
      {
        title: "Warehouse Management",
        description:
          "Operational support for storage, fulfillment coordination and inventory flow.",
      },
    ],
  },
  accountCreation: {
    kicker: "Account Creation & Setup",
    heading: "Every store starts with a correct foundation.",
    body: "We handle the operational groundwork of launching a TikTok Shop — store creation, seller setup and configuration — so the account is positioned correctly before a single product goes live.",
    capabilities: [
      "TikTok Shop store creation",
      "Seller setup",
      "Store configuration",
      "Account setup",
      "Verification assistance",
      "Category selection",
    ],
    imageAlt: "TikTok Shop store setup screen showing task progress",
  },
  categoryApproval: {
    kicker: "Category Approval",
    heading: "Approved to sell in the categories that matter.",
    body: "Restricted categories — jewelry, branded goods and more — require documented qualification before a shop can list in them. We prepare and submit these cases, including brand authorization evidence for the labels we work with.",
    evidenceLabel: "Brand qualification evidence on file",
    evidenceAlt: "Brand qualification evidence",
    imageAlt:
      "TikTok Shop category approval — diamond jewelry accessories, status approved",
  },
  violations: {
    kicker: "Violation Removal & Appeals",
    heading: "When TikTok Shop flags an account, response speed matters.",
    body: "We help sellers understand, prepare and manage TikTok Shop violation appeals and account recovery cases — working through the platform's process methodically rather than leaving it to chance. Below are violation types we've successfully filed appeals for, drawn from real case records.",
    resolvedBadge: "Resolved",
    imageAlt: "TikTok Shop violation appeal case record",
    cases: [
      {
        reason: "Non-Compliant Store Behavior",
        outcome: "Shop closure & fund withdrawal suspension cancelled on appeal",
      },
      {
        reason: "Copyright Infringement Claim",
        outcome: "Product freeze reversed after appeal",
      },
      {
        reason: "Duplicate Product Violation",
        outcome: "Product freeze reversed on appeal",
      },
      {
        reason: "Abnormal Operation Performance",
        outcome: "Listing & visibility restrictions cancelled",
      },
      {
        reason: "High Customer Complaint Rate",
        outcome: "Fund withdrawal & affiliate access reinstated",
      },
      {
        reason: "Potential Counterfeit / Knockoff Products",
        outcome: "Overturned on second appeal after first appeal failed",
      },
      {
        reason: "Association With Deactivated Shop(s)",
        outcome: "Daily order limit lifted after appeal",
      },
      {
        reason: "High-Risk Shop Group Verification",
        outcome: "Order limit & fund withdrawal restored",
      },
      {
        reason: "Valid Tracking Rate Issue",
        outcome: "Cleared as a platform-side error",
      },
      {
        reason: "Inauthentic / Unoriginal Product",
        outcome: "Affiliate marketing restriction lifted",
      },
      {
        reason: "Unable to Verify ID Information",
        outcome: "Shop closure cancelled after ID verification",
      },
      {
        reason: "Seller Registration Verification Failure",
        outcome: "Restored on second appeal with additional documents",
      },
    ],
  },
  suspension: {
    kicker: "Account Recovery",
    heading: "Suspended doesn't have to mean finished.",
    body: "A real case: a shop closed over a Non-Compliant Store Behavior enforcement, appealed and fully reactivated.",
    stepLabel: "Step",
    steps: [
      {
        label: "Suspended Account",
        note: "Shop closed for Non-Compliant Store Behavior — orders and fund withdrawal suspended.",
      },
      {
        label: "Appeal & Resolution",
        note: "Case prepared and filed through TikTok Shop's appeal process.",
      },
      {
        label: "Reactivated Account",
        note: "Shop closure and fund withdrawal suspension cancelled — shop operational again.",
      },
    ],
  },
  productStrategy: {
    kicker: "Product Strategy",
    heading: "Product hunting and listing that converts.",
    hunting: {
      title: "Product Hunting",
      body: "Every product recommendation is grounded in research — not guesswork. We evaluate demand, competitive saturation and format fit before a product ever reaches your shop.",
      focus: [
        "Market research",
        "Demand signals",
        "Competition mapping",
        "TikTok Shop suitability",
      ],
      imageAlt: "Product research and hunting",
    },
    listing: {
      title: "Product Listing That Converts",
      body: "A listing is a sales page. We manage setup, optimization and presentation so each product is positioned to perform inside the TikTok Shop feed and search.",
      focus: [
        "Listing setup",
        "Product optimization",
        "Presentation & imagery",
        "Ongoing listing management",
      ],
      imageAlt: "TikTok Shop product listing",
    },
  },
  creators: {
    kicker: "Creators & Affiliates",
    heading: "Creators are the distribution engine.",
    body: "TikTok Shop is a creator-driven marketplace. We manage the relationships, campaigns and content pipeline that turn creator attention into shop traffic.",
    services: [
      "Creator Outreach",
      "Affiliate Management",
      "Creator Campaign Management",
      "UGC Coordination",
      "Product Seeding",
      "Performance Tracking",
    ],
    imageAlt1: "TikTok Shop Affiliate Centre partner collaborations",
    imageAlt2: "TikTok Shop Affiliate Centre creator dashboard",
  },
  ads: {
    kicker: "TikTok Shop Ads",
    heading: "Turn winning products into scalable campaigns.",
    body: "Paid media works when it's built on a product that already performs organically. We run the campaign layer that scales what's already working — figures below are from an actual account we manage.",
    imageAlt: "TikTok Shop ads campaign before and after optimization",
    imageAltResults: "TikTok Shop ads GMV Max campaign results",
    rows: {
      adSpend: "Ad Spend",
      orders: "Orders",
      costPerOrder: "Cost / Order",
      grossRevenue: "Gross Revenue",
      roi: "ROI",
    },
    services: [
      "TikTok Shop Ads",
      "Ads Strategy",
      "Campaign Setup",
      "Campaign Management",
      "Performance Optimization",
      "Scaling",
    ],
  },
  results: {
    kicker: "Results",
    heading: "Proof speaks louder than promises.",
    body: "Real stores. Real campaigns. Real growth. Browse proof by category — screenshots and screen recordings from shops we manage.",
    categories: {
      accountCreation: "Account Creation",
      categoryApproved: "Category Approved",
      violationRemoval: "Violation Removal",
      viralVideos: "Viral Videos",
      salesProof: "Sales Proof",
      suspensionReactivation: "Suspension/Reactivation",
      productListing: "Product Listing",
      creatorAffiliate: "Affiliate/Creator",
      adsPerformance: "Ads Performance",
    },
    comingSoon: "Coming soon.",
  },
  operations: {
    kicker: "Operations",
    heading: "Support beyond marketing.",
    whiteLabel: {
      title: "White Label Products",
      body: "Support sourcing and branding white label products suited to demand we see performing on TikTok Shop, including UK seller-central operations.",
    },
    warehouse: {
      title: "Warehouse Management",
      body: "Operational support for storage, fulfillment coordination and inventory flow — so listings stay in stock and dispatch times stay healthy.",
    },
    imageAlt: "UK white label store performance",
  },
  about: {
    kicker: "About Us",
    heading: "An operating partner, not a vendor.",
    lead: "We don't just create TikTok Shops. We build the systems, content, creator relationships and growth strategies that turn TikTok attention into sustainable commerce.",
    body: "TikTok Shop Solutions operates as an experienced TikTok Shop growth partner across international markets — handling the setup, compliance, content, advertising and fulfillment work that a shop needs to run properly, so sellers can focus on the product itself.",
  },
  team: {
    kicker: "Leadership",
    heading: "The team behind the operation.",
    members: [
      {
        role: "Founder & CEO",
        note: "Sets the strategic direction across every market we operate in.",
      },
      {
        role: "Head of Ecommerce Operations",
        note: "Oversees listings, fulfillment and store operations.",
      },
      {
        role: "Growth Operations Manager",
        note: "Runs day-to-day growth execution across managed shops.",
      },
      {
        role: "Consulting Manager",
        note: "Advises sellers on strategy and onboarding across managed shops.",
      },
    ],
  },
  markets: {
    kicker: "Markets",
    heading: "Built for global TikTok commerce.",
    regions: {
      europe: "Europe",
      americas: "Americas",
      asia: "Asia",
    },
  },
  reviews: {
    kicker: "Social Proof",
    heading: "Sellers who trust us",
    body: "Real reviews from real shop owners managing millions in TikTok Shop sales across our 9 global markets.",
    formHeading: "Share Your Experience",
    namePlaceholder: "Your name",
    reviewPlaceholder: "Tell us about your experience...",
    ratingLabel: "Your Rating",
    submit: "Submit Review",
    submitting: "Submitting...",
    successMessage: "✓ Thank you! Review submitted for approval.",
    genericError: "Failed to submit review",
    moderationNote: "Reviews are moderated before appearing on the site.",
  },
  caseStudies: {
    kicker: "Case Studies",
    heading: "Problem. Approach. Result.",
    problemLabel: "Problem",
    approachLabel: "Approach",
    resultLabel: "Result",
    items: [
      {
        tag: "Account Reactivation",
        title: "Shop Closure Overturned",
        problem:
          "A shop was permanently closed over a Non-Compliant Store Behavior enforcement, with orders cancelled and fund withdrawal suspended.",
        approach:
          "We prepared and filed the appeal case directly through TikTok Shop's resolution process.",
        result:
          "First appeal successful — shop closure, fund withdrawal suspension and order cancellation were all reversed.",
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
      },
    ],
  },
  contact: {
    kicker: "Let's Talk",
    heading: "Ready to build a TikTok Shop that actually sells?",
    body: "Reach out on WhatsApp and we'll schedule a strategy call over Google Meet to walk through your shop, your market and where we can help.",
    ctaPrimary: "Book a Strategy Call",
    ctaSecondary: "Chat on WhatsApp",
    googleMeet: "Google Meet consultations",
    location: "Punjab, Pakistan",
  },
  countryNames: {
    "United Kingdom": "United Kingdom",
    "United States": "United States",
    Spain: "Spain",
    Italy: "Italy",
    France: "France",
    Germany: "Germany",
    Malaysia: "Malaysia",
    Mexico: "Mexico",
    Brazil: "Brazil",
  },
};

export default dictionary;
export type Dictionary = typeof dictionary;
