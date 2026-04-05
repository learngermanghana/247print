import { WHY_CHOOSE_US } from "@/lib/constants";
import { SectionHeading } from "@/components/section-heading";

export function WhyChooseUs() {
  return (
    <section className="bg-brand-soft py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why clients choose us"
          title="Reliable print production built around quality and speed"
          description="We combine precision, responsive support, and practical turnaround times to help your campaigns and events succeed."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
