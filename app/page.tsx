import { ContactStrip } from "@/components/contact-strip";
import { FeaturedCta } from "@/components/featured-cta";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { SectionHeading } from "@/components/section-heading";
import { ServicesGrid } from "@/components/services-grid";
import { WhyChooseUs } from "@/components/why-choose-us";
import { getServicesData } from "@/lib/sedifex";

export default async function HomePage() {
  const services = await getServicesData();

  return (
    <>
      <Hero />
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
