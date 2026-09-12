import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/smooth-scroll";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tiktokshopsolutions.com"),
  title: {
    default: "TikTok Shop Solutions — TikTok Shop Growth & Management Agency",
    template: "%s — TikTok Shop Solutions",
  },
  description:
    "TikTok Shop Solutions builds, scales and manages TikTok Shops across the UK, USA, Europe and beyond — account setup, category approval, violation appeals, creators, ads and sales growth.",
  keywords: [
    "TikTok Shop agency",
    "TikTok Shop management",
    "TikTok Shop account setup",
    "TikTok Shop violation removal",
    "TikTok Shop ads",
    "TikTok Shop creators",
  ],
  icons: {
    icon: "/images/new-logo.png",
    shortcut: "/images/new-logo.png",
  },
  openGraph: {
    title: "TikTok Shop Solutions — TikTok Shop Growth & Management Agency",
    description:
      "We build, scale and manage TikTok Shops that sell — across the UK, USA, Europe, Malaysia, Mexico and Brazil.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper antialiased overflow-x-clip">
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
