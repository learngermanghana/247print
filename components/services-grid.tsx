import { ServiceItem } from "@/lib/types";
import { ServiceCard } from "@/components/service-card";

type ServicesGridProps = {
  services: ServiceItem[];
};

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
