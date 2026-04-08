import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { mailTo } from "@/lib/format";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS.displayName}`,
  description:
    `Read the privacy policy for ${BUSINESS.displayName} and understand how we collect, process, and protect personal information for print services in ${BUSINESS.city}, ${BUSINESS.country}.`,
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: `Privacy Policy | ${BUSINESS.displayName}`,
    description:
      `Learn how ${BUSINESS.displayName} handles customer data, cookies, communication records, and privacy requests.`,
    url: "/privacy",
    siteName: BUSINESS.displayName,
    type: "article"
  }
};

const sections = [
  {
    title: "Who we are",
    content:
      "247 PRINT HOUSE is a printing and production service provider in Accra, Ghana. We process customer enquiries and project details to deliver requested print services."
  },
  {
    title: "What data we collect",
    content:
      "We may collect your name, phone number, email address, address, project specifications, and message details submitted through contact channels or forms."
  },
  {
    title: "How we use your information",
    content:
      "Your information is used to respond to enquiries, prepare quotes, process print orders, communicate production updates, and improve customer service quality."
  },
  {
    title: "Cookies and usage data",
    content:
      "Our website may use essential cookies and basic analytics data (such as browser type and pages visited) to maintain site functionality and understand usage trends."
  },
  {
    title: "How we share information",
    content:
      "We do not sell personal data. Information may be shared only with trusted service providers who support order fulfilment, communication, hosting, or legal compliance."
  },
  {
    title: "Data retention",
    content:
      "We retain enquiry and order data for as long as reasonably needed for customer support, accounting, legal obligations, and service follow-up."
  },
  {
    title: "Data security",
    content:
      "We implement practical technical and operational safeguards to protect personal information. No internet transmission or storage method is 100% secure."
  },
  {
    title: "Your rights",
    content:
      "You can request access, correction, or deletion of your personal information, subject to applicable legal and contractual requirements."
  }
];

export default function PrivacyPage() {
  return (
    <section className="bg-brand-soft py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-3xl font-bold text-brand-navy">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-600">Last updated: April 5, 2026</p>

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
              For privacy-related requests, contact us at <Link href={mailTo} className="font-semibold text-brand-red hover:text-red-700">{BUSINESS.email}</Link> or visit us at {BUSINESS.address}.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
