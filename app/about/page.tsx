import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about 247 PRINT HOUSE, a trusted printing and production company serving businesses and communities in Accra and across Ghana."
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About 247 PRINT HOUSE"
          title="A reliable print production partner in Accra"
          description="We support businesses, event planners, schools, churches, NGOs, and individuals with dependable print services that make communication clear and impactful."
        />

        <div className="mt-8 space-y-6 text-slate-700">
          <p>
            247 PRINT HOUSE is a professional printing company based in Awoshie Waterworks, Accra. We specialize in high-quality
            marketing and branding print materials, including business cards, flyers, brochures, banners, stickers, event materials,
            and bulk commercial jobs.
          </p>
          <p>
            Our team is committed to precision production, practical turnaround times, and responsive customer communication. Every
            order is handled with a focus on design clarity, material suitability, finishing quality, and deadline performance.
          </p>
          <p>
            We serve clients across Accra and support projects in other regions of Ghana. Whether you need short-run branded materials
            for a startup or large-volume prints for an institution, we provide structured support from enquiry to delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            "Trusted by businesses and growing brands",
            "Reliable support for event planners and organizers",
            "Flexible production for schools and churches",
            "Custom options for individuals and special projects"
          ].map((point) => (
            <div key={point} className="rounded-xl border border-slate-200 bg-brand-soft p-5 text-sm font-medium text-brand-charcoal">
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
