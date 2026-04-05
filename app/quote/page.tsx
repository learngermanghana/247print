import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a printing quote from 247 PRINT HOUSE for business cards, flyers, posters, banners, stickers, branding materials, and custom jobs."
};

export default function QuotePage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-3xl font-bold text-brand-navy">Request a Printing Quote</h1>
          <p className="mt-3 text-slate-600">
            Fill in your details and specifications. For urgent jobs, call directly on {" "}
            <Link href={`tel:${BUSINESS.phoneLink}`} className="font-semibold text-brand-red hover:text-red-700">
              {BUSINESS.phoneDisplay}
            </Link>.
          </p>

          <form className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="Quote request form">
            <div>
              <label htmlFor="quote-name">Full name</label>
              <input id="quote-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div>
              <label htmlFor="quote-phone">Phone number</label>
              <input id="quote-phone" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <div>
              <label htmlFor="quote-email">Email address</label>
              <input id="quote-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div>
              <label htmlFor="quote-service">Service needed</label>
              <select id="quote-service" name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="quote-quantity">Quantity</label>
              <input id="quote-quantity" name="quantity" type="text" placeholder="e.g. 500 copies" required />
            </div>
            <div>
              <label htmlFor="quote-size">Size / specification</label>
              <input id="quote-size" name="sizeSpecification" type="text" placeholder="e.g. A5, matte, double-sided" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="quote-deadline">Deadline</label>
              <input id="quote-deadline" name="deadline" type="date" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="quote-message">Project details</label>
              <textarea id="quote-message" name="message" rows={5} placeholder="Share design notes, delivery preference, and any special finishing requirements." required />
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-700">
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
