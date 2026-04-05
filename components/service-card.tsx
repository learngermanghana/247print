import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CreditCard, FileText, Image as ImageIcon, Layers, Palette, Settings, Tag } from "lucide-react";
import { ServiceItem } from "@/lib/types";

const iconMap = {
  CreditCard,
  FileText,
  Image: ImageIcon,
  Tag,
  Palette,
  CalendarDays,
  Layers,
  Settings
};

export function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? FileText;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1">
      <div className="relative h-48">
        <Image src={service.image} alt={`${service.title} printing sample`} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-3 inline-flex rounded-lg bg-brand-red/10 p-2 text-brand-red">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy">{service.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{service.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {service.useCases.map((useCase) => (
            <li key={useCase}>• {useCase}</li>
          ))}
        </ul>
        <Link href="/quote" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-red-700">
          Request quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
