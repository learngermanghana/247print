import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { currentYear, mailTo, telHref } from "@/lib/format";

export function Footer() {
  return (
    <footer className="bg-brand-navy py-12 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-lg font-bold text-white">{BUSINESS.displayName}</h2>
          <p className="mt-3 text-sm text-slate-300">
            Professional printing and production services for businesses, organizations, and events in Accra and across Ghana.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-gold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-gold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href={telHref} className="hover:text-white">{BUSINESS.phoneDisplay}</Link></li>
            <li><Link href={mailTo} className="break-all hover:text-white">{BUSINESS.email}</Link></li>
            <li><Link href={BUSINESS.whatsapp} className="hover:text-white">WhatsApp Chat</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-gold">Address</h3>
          <p className="mt-3 text-sm">{BUSINESS.address}</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-700 px-4 pt-5 text-xs text-slate-400 sm:px-6 lg:px-8">
        © {currentYear} {BUSINESS.displayName}. All rights reserved.
      </div>
    </footer>
  );
}
