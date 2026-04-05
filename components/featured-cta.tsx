import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { mailTo, telHref } from "@/lib/format";

export function FeaturedCta() {
  return (
    <section className="bg-brand-navy py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 text-white sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Request your quote today</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Need fast, professional printing in Accra?</h2>
          <p className="mt-3 text-slate-200">
            Send your details and get a tailored quote for business materials, campaigns, events, or custom production jobs.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/quote" className="rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
            Get a Quote
          </Link>
          <Link href={BUSINESS.whatsapp} className="rounded-full border border-white px-5 py-3 text-sm font-semibold hover:bg-white hover:text-brand-navy">
            WhatsApp Us
          </Link>
          <Link href={telHref} className="rounded-full border border-white px-5 py-3 text-sm font-semibold hover:bg-white hover:text-brand-navy">
            Call {BUSINESS.phoneDisplay}
          </Link>
          <Link href={mailTo} className="rounded-full border border-white px-5 py-3 text-sm font-semibold hover:bg-white hover:text-brand-navy">
            Email Us
          </Link>
        </div>
      </div>
    </section>
  );
}
