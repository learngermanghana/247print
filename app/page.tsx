import { ContactStrip } from "@/components/contact-strip";
import { FeaturedCta } from "@/components/featured-cta";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { SectionHeading } from "@/components/section-heading";
import { ServicesGrid } from "@/components/services-grid";
import { WhyChooseUs } from "@/components/why-choose-us";
import { getGalleryData, getProductsByType, getProductsData, getPromoData, getServicesData } from "@/lib/sedifex";

export default async function HomePage() {
  const [allItems, services, promo, gallery] = await Promise.all([
    getProductsData(),
    getServicesData(),
    getPromoData(),
    getGalleryData()
  ]);

  const homepageProducts = getProductsByType(allItems, "product").slice(0, 8);

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
            eyebrow="Featured products"
            title="Top products from our current catalog"
            description="Homepage products are pulled from integrationProducts where itemType is product."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homepageProducts.map((item) => (
              <article key={`${item.id}-${item.storeId}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.imageAlt || item.name} className="h-40 w-full object-cover" />
                ) : (
                  <div className="flex h-40 items-center justify-center bg-slate-100 text-sm text-slate-500">No image</div>
                )}
                <div className="space-y-1 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">{item.category || "General"}</p>
                  <h3 className="text-lg font-bold text-brand-navy">{item.name}</h3>
                  <p className="text-sm text-slate-600">GHS {item.price}</p>
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
            description="Promo gallery images are pulled directly from integrationGallery."
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
            description="Homepage services are pulled from integrationProducts where itemType is service."
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
