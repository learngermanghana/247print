import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { getProductsByType, getProductsData, groupProductsByCategory } from "@/lib/sedifex";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse current products and services synced from Sedifex integrationProducts."
};

export default async function ProductsPage() {
  const allItems = await getProductsData();
  const products = getProductsByType(allItems, "product");
  const grouped = groupProductsByCategory(products);

  return (
    <section className="bg-brand-soft py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products"
          title="Current product catalog"
          description="Only products (itemType=product) grouped by category from integrationProducts."
        />

        <div className="mt-10 space-y-8">
          {!products.length ? (
            <p className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">No products are available right now.</p>
          ) : null}
          {Object.entries(grouped).map(([category, items]) => (
            <article key={category} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-brand-navy">{category}</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <li key={`${item.id}-${item.storeId}`} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="text-base font-semibold text-brand-navy">{item.name}</h3>
                    {item.description ? <p className="mt-1 text-sm text-slate-600">{item.description}</p> : null}
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="font-semibold text-brand-red">GHS {item.price}</span>
                      {typeof item.stockCount === "number" ? <span className="text-slate-500">Stock: {item.stockCount}</span> : null}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
