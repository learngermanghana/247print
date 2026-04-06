import { ContactStrip } from "@/components/contact-strip";
import { FeaturedCta } from "@/components/featured-cta";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { SectionHeading } from "@/components/section-heading";
import { ServicesGrid } from "@/components/services-grid";
import { WhyChooseUs } from "@/components/why-choose-us";
import { getGalleryData, getPromoData, getServicesData, getTopSellingData } from "@/lib/sedifex";

export default async function HomePage() {
  const [services, promo, gallery, topSelling] = await Promise.all([
    getServicesData(),
    getPromoData(),
    getGalleryData(),
    getTopSellingData(30, 8)
  ]);

  return (
    <>
      <Hero />

      <section className="border-y border-slate-200 bg-brand-soft py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Current promo"
            title={promo.promoTitle || "Latest promotion"}
            description={promo.promoSummary || "See current seasonal offers and featured print campaigns."}
          />
          {promo.promoWebsiteUrl ? (
            <a
              href={promo.promoWebsiteUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              View Promotion
            </a>
          ) : null}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Top performing"
            title="Best-selling products and services"
            description="Live top performers from Sedifex integrationTopSelling over the last 30 days."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topSelling.map((item) => (
              <article key={item.productId} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.imageAlt || item.name} className="h-40 w-full object-cover" />
                ) : (
                  <div className="flex h-40 items-center justify-center bg-slate-100 text-sm text-slate-500">No image</div>
                )}
                <div className="space-y-1 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">{item.category || "General"}</p>
                  <h3 className="text-lg font-bold text-brand-navy">{item.name}</h3>
                  <p className="text-sm text-slate-600">Sold: {item.qtySold}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Promo gallery"
            title="Recent work and campaign visuals"
            description="Pulled from integrationGallery and sorted by configured order."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 6).map((item) => (
              <figure key={item.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <img src={item.url} alt={item.alt || "247 PRINT HOUSE gallery item"} className="h-56 w-full object-cover" />
                {item.caption ? <figcaption className="p-3 text-sm text-slate-600">{item.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core services"
            title="Complete print solutions for brands, campaigns, and events"
            description="From small runs to commercial bulk quantities, we handle diverse print requirements with consistent quality control."
            align="center"
          />
          <div className="mt-10">
            <ServicesGrid services={services} />
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSection />
      <FeaturedCta />
      <ContactStrip />
    </>
  );
}
