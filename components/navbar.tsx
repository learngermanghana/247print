import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { telHref } from "@/lib/format";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-wide text-brand-navy">
          {BUSINESS.displayName}
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-red">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={telHref}
          className="rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          aria-label={`Call ${BUSINESS.phoneDisplay}`}
        >
          Call Now
        </Link>
      </div>
    </header>
  );
}
