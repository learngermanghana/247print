import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple process"
          title="From enquiry to delivery in five clear steps"
          description="Our production workflow keeps your print job efficient, transparent, and on schedule."
          align="center"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-red">Step {index + 1}</p>
              <h3 className="mt-2 text-base font-semibold text-brand-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
