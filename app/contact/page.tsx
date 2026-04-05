import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { mailTo, telHref } from "@/lib/format";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact 247 PRINT HOUSE by phone, email, WhatsApp, or the enquiry form for printing services in Accra, Ghana."
};

export default function ContactPage() {
  return (
    <section className="bg-brand-soft py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-3xl font-bold text-brand-navy">Contact 247 PRINT HOUSE</h1>
          <p className="mt-3 text-slate-600">Reach us for standard and custom print enquiries. We respond quickly to new projects.</p>

          <dl className="mt-6 space-y-4 text-sm text-slate-700">
            <div>
              <dt className="font-semibold text-brand-navy">Phone</dt>
              <dd><Link href={telHref} className="hover:text-brand-red">{BUSINESS.phoneDisplay}</Link></dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-navy">Email</dt>
              <dd><Link href={mailTo} className="hover:text-brand-red">{BUSINESS.email}</Link></dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-navy">Address</dt>
              <dd>{BUSINESS.address}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={BUSINESS.whatsapp} className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white hover:bg-red-700">
              Message on WhatsApp
            </Link>
            <Link href="/quote" className="rounded-full border border-brand-navy px-5 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-navy hover:text-white">
              Request a Quote
            </Link>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-brand-navy">Send an enquiry</h2>
          <p className="mt-2 text-sm text-slate-600">Need a custom print job? Share details and our team will follow up.</p>

          <form className="mt-5 space-y-4" aria-label="Contact form">
            <div>
              <label htmlFor="contact-name">Full name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div>
              <label htmlFor="contact-phone">Phone number</label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <div>
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div>
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={5} required />
            </div>
            <button type="submit" className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white hover:bg-red-700">
              Submit Enquiry
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}
