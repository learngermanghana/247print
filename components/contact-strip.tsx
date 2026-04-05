import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { mailTo, telHref } from "@/lib/format";

export function ContactStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 text-sm text-slate-700 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div>
          <p className="font-semibold text-brand-navy">Company</p>
          <p>{BUSINESS.displayName}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-navy">Address</p>
          <p>{BUSINESS.address}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-navy">City</p>
          <p>{BUSINESS.city}, {BUSINESS.country}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-navy">Phone</p>
          <Link href={telHref} className="hover:text-brand-red">{BUSINESS.phoneDisplay}</Link>
        </div>
        <div>
          <p className="font-semibold text-brand-navy">Email</p>
          <Link href={mailTo} className="break-all hover:text-brand-red">{BUSINESS.email}</Link>
        </div>
      </div>
    </section>
  );
}
