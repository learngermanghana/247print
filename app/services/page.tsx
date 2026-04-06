import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { getProductsByType, getProductsData } from "@/lib/sedifex";

export const metadata: Metadata = {
  title: "Printing Services",
  description:
    "Explore business cards, flyers, brochures, posters, banners, stickers, branding materials, event printing, bulk jobs, and custom print services in Accra."
};

export default async function ServicesPage() {
  const products = await getProductsData();
  const services = getProductsByType(products, "service");

  return (
    <section className="bg-brand-soft py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Professional printing services for every business need"
          description="We provide practical, high-quality print solutions designed for visibility, reliability, and performance."
        />
        <div className="mt-10 space-y-6">
          {!services.length ? (
            <p className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">No services are available right now.</p>
          ) : null}
          {services.map((service) => (
            <article key={`${service.id}-${service.storeId}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-brand-navy">{service.name}</h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base">{service.description || "Professional service with quality-controlled print output."}</p>
              <div className="mt-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-red">Use cases</h3>
                <ul className="mt-2 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  <li>• Brand and marketing campaigns</li>
                  <li>• Retail and event print support</li>
                  <li>• Corporate communication materials</li>
                  <li>• Custom production requests</li>
                </ul>
              </div>
              <Link
                href="/quote"
                className="mt-5 inline-flex rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Request Quote
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
