import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { mailTo, telHref } from "@/lib/format";

export const metadata: Metadata = {
  title: `Terms of Service | ${BUSINESS.displayName}`,
  description:
    `Read the Terms of Service for ${BUSINESS.displayName}, including quotation, payment, production timelines, and order policies for printing services in ${BUSINESS.city}, ${BUSINESS.country}.`,
  alternates: {
    canonical: "/terms"
  },
  openGraph: {
    title: `Terms of Service | ${BUSINESS.displayName}`,
    description:
      `Official terms governing print orders, payments, production, and delivery with ${BUSINESS.displayName}.`,
    url: "/terms",
    siteName: BUSINESS.displayName,
    type: "article"
  }
};

const sections = [
  {
    title: "Acceptance of terms",
    content:
      `By requesting a quote, placing an order, or using this website, you agree to these Terms of Service provided by ${BUSINESS.displayName}.`
  },
  {
    title: "Quotes and order confirmation",
    content:
      "All quotes are based on project details provided by the customer, including size, material, quantity, finishing, and timeline. Orders are confirmed only after approval of final specifications and payment terms."
  },
  {
    title: "Artwork and customer content",
    content:
      "Customers are responsible for submitted artwork quality, content accuracy, and legal rights to use logos, images, and text. We are not liable for errors in approved designs or content supplied by the customer."
  },
  {
    title: "Pricing and payment",
    content:
      "Prices may vary based on material costs, quantity, and turnaround requirements. Production may require full or partial payment before work begins, depending on job scope."
  },
  {
    title: "Production and turnaround",
    content:
      "Turnaround times are estimates and may change due to order complexity, revisions, material availability, equipment maintenance, or force majeure events."
  },
  {
    title: "Collection and delivery",
    content:
      `Completed orders can be collected at ${BUSINESS.address} or sent via delivery arrangement. Delivery timelines and fees depend on location and third-party courier availability.`
  },
  {
    title: "Returns and reprints",
    content:
      "If there is a verified production defect caused by our team, we may offer a reprint or suitable remedy. Claims should be made promptly with supporting evidence after receiving the job."
  },
  {
    title: "Limitation of liability",
    content:
      `${BUSINESS.displayName} is not liable for indirect or consequential losses, including business interruption or lost profit, arising from use of our website or services.`
  },
  {
    title: "Changes to terms",
    content:
      "We may update these terms from time to time. Continued use of our services after updates means you accept the revised Terms of Service."
  }
];

export default function TermsPage() {
  return (
    <section className="bg-brand-soft py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-3xl font-bold text-brand-navy">Terms of Service</h1>
          <p className="mt-3 text-sm text-slate-600">Last updated: April 8, 2026</p>

          <div className="mt-8 space-y-6">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-brand-navy">{section.title}</h2>
                <p className="mt-2 text-sm text-slate-700 sm:text-base">{section.content}</p>
              </section>
            ))}
          </div>

          <section className="mt-8 border-t border-slate-200 pt-6">
            <h2 className="text-xl font-semibold text-brand-navy">Contact information</h2>
            <p className="mt-2 text-sm text-slate-700 sm:text-base">
              Questions about these terms? Contact us at{" "}
              <Link href={mailTo} className="font-semibold text-brand-red hover:text-red-700">
                {BUSINESS.email}
              </Link>{" "}
              or call{" "}
              <Link href={telHref} className="font-semibold text-brand-red hover:text-red-700">
                {BUSINESS.phoneDisplay}
              </Link>
              .
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
