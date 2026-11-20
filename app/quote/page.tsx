import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { BUSINESS } from "@/lib/constants";
export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Enquire about professional printing from 247 PRINT HOUSE in Accra."
};
export default function QuotePage() {
  return <section className="py-16 sm:py-20"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h1 className="text-3xl font-bold text-brand-navy">Request a Printing Quote</h1>
      <p className="mt-3 text-slate-600">Complete the details to send a prepared WhatsApp message. No server submission is required. For urgent jobs, call <a href={`tel:${BUSINESS.phoneLink}`} className="font-semibold text-brand-red">{BUSINESS.phoneDisplay}</a>.</p>
      <QuoteForm />
    </div>
  </div></section>;
}
