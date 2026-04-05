"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { telHref } from "@/lib/format";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-wide text-brand-navy" onClick={() => setIsMenuOpen(false)}>
          {BUSINESS.displayName}
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-brand-navy md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="text-2xl leading-none" aria-hidden="true">
            {isMenuOpen ? "✕" : "☰"}
          </span>
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-red">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={telHref}
          className="hidden rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 md:inline-flex"
          aria-label={`Call ${BUSINESS.phoneDisplay}`}
        >
          Call Now
        </Link>
      </div>

      {isMenuOpen && (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white px-4 py-4 md:hidden" aria-label="Mobile Primary">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-brand-red"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={telHref}
              className="mt-2 inline-flex w-fit rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              aria-label={`Call ${BUSINESS.phoneDisplay}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Call Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
