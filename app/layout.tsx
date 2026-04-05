import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BUSINESS, SEO_KEYWORDS } from "@/lib/constants";

const baseUrl = "https://www.247printhouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "247 PRINT HOUSE | Professional Printing Company in Accra, Ghana",
    template: "%s | 247 PRINT HOUSE"
  },
  description:
    "247 PRINT HOUSE offers business cards, flyers, banners, stickers, brochures, event printing, and custom print production in Accra, Ghana.",
  keywords: SEO_KEYWORDS,
  openGraph: {
    title: "247 PRINT HOUSE | Professional Printing in Accra",
    description:
      "Trusted print production partner in Accra for businesses, events, schools, and organizations across Ghana.",
    url: baseUrl,
    siteName: BUSINESS.displayName,
    type: "website",
    locale: "en_GH"
  },
  twitter: {
    card: "summary_large_image",
    title: "247 PRINT HOUSE | Printing Services in Ghana",
    description:
      "Business cards, flyers, banners, stickers, branded materials, and bulk printing with fast turnaround.",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-brand-red focus:px-3 focus:py-2 focus:text-white">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
