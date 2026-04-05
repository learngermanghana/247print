import { ServiceItem } from "@/lib/types";
import { SERVICES } from "@/lib/constants";

type SedifexProduct = {
  name?: string;
  description?: string;
};

export async function getServicesData(): Promise<ServiceItem[]> {
  const apiBase = process.env.SEDIFEX_API_BASE_URL;
  const key = process.env.SEDIFEX_INTEGRATION_KEY;
  const storeId = process.env.SEDIFEX_STORE_ID;

  if (!apiBase || !key || !storeId) {
    return SERVICES;
  }

  try {
    const response = await fetch(`${apiBase.replace(/\/$/, "")}/stores/${storeId}/products`, {
      headers: {
        Authorization: `Bearer ${key}`
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      return SERVICES;
    }

    const payload = (await response.json()) as { products?: SedifexProduct[] };
    if (!payload.products?.length) {
      return SERVICES;
    }

    return SERVICES.map((service, index) => {
      const external = payload.products?.[index];
      return {
        ...service,
        title: external?.name || service.title,
        description: external?.description || service.description
      };
    });
  } catch {
    return SERVICES;
  }
}
