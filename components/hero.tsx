import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { telHref } from "@/lib/format";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy">
      <Image
        src="https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=1800&q=80"
        alt="Printing press machines producing high-quality marketing materials"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl text-white">
          <p className="mb-4 inline-flex rounded-full bg-brand-gold/20 px-4 py-1 text-sm font-semibold text-brand-gold">
            Professional Printing in {BUSINESS.city}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            High-Quality Printing Solutions for Businesses, Events, and Brands in Accra
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            {BUSINESS.displayName} delivers reliable, fast-turnaround print production—from business cards and flyers to
            banners, stickers, and custom bulk jobs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/quote" className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
              Get a Quote
            </Link>
            <Link
              href={telHref}
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy"
            >
              Call Now
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-200">{BUSINESS.displayName} · {BUSINESS.address}</p>
        </div>
      </div>
    </section>
  );
}
