import { SERVICES } from "@/lib/constants";
import { SedifexGalleryItem, SedifexProduct, SedifexPromo, SedifexTopSellingItem, ServiceItem } from "@/lib/types";

const DEFAULT_REVALIDATE_SECONDS = 60;

const FALLBACK_PRODUCTS: SedifexProduct[] = SERVICES.map((service, index) => ({
  id: `fallback-${index + 1}`,
  storeId: "fallback",
  name: service.title,
  category: "Services",
  description: service.description,
  price: 0,
  stockCount: 0,
  itemType: "service",
  imageUrl: service.image,
  imageAlt: service.title,
  updatedAt: null
}));

const FALLBACK_GALLERY: SedifexGalleryItem[] = SERVICES.slice(0, 6).map((service, index) => ({
  id: `fallback-gallery-${index + 1}`,
  url: service.image,
  alt: service.title,
  caption: service.description,
  sortOrder: index + 1,
  isPublished: true,
  createdAt: null,
  updatedAt: null
}));

const FALLBACK_PROMO: SedifexPromo = {
  promoTitle: "Quality printing services delivered fast",
  promoSummary: "From business cards to large-format banners, 247 PRINT HOUSE delivers dependable quality and turnaround.",
  promoStartDate: null,
  promoEndDate: null,
  promoSlug: "print-solutions",
  promoWebsiteUrl: null,
  displayName: "247 PRINT HOUSE",
  name: "247 PRINT HOUSE"
};

function getConfig() {
  const apiBase = process.env.SEDIFEX_API_BASE_URL;
  const key = process.env.SEDIFEX_INTEGRATION_KEY;
  const storeId = process.env.SEDIFEX_STORE_ID;

  if (!apiBase || !key || !storeId) {
    return null;
  }

  return {
    apiBase: apiBase.replace(/\/$/, ""),
    key,
    storeId
  };
}

async function sedifexFetch<T>(path: string, fallback: T): Promise<T> {
  const config = getConfig();

  if (!config) {
    return fallback;
  }

  try {
    const response = await fetch(`${config.apiBase}${path}`, {
      headers: {
        Authorization: `Bearer ${config.key}`,
        Accept: "application/json"
      },
      next: { revalidate: DEFAULT_REVALIDATE_SECONDS }
    });

    if (!response.ok) {
      return fallback;
    }

    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

function dedupeProducts(products: SedifexProduct[]): SedifexProduct[] {
  const seen = new Set<string>();

  return products.filter((product) => {
    const key = `${product.id}|${product.storeId}|${product.name}|${product.price}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

export function groupProductsByCategory(products: SedifexProduct[]): Record<string, SedifexProduct[]> {
  return products.reduce<Record<string, SedifexProduct[]>>((accumulator, product) => {
    const category = product.category?.trim() || "Uncategorized";

    if (!accumulator[category]) {
      accumulator[category] = [];
    }

    accumulator[category].push(product);
    return accumulator;
  }, {});
}

export async function getProductsData(): Promise<SedifexProduct[]> {
  const config = getConfig();

  if (!config) {
    return FALLBACK_PRODUCTS;
  }

  const payload = await sedifexFetch<{ products?: SedifexProduct[] }>(
    `/integrationProducts?storeId=${encodeURIComponent(config.storeId)}`,
    { products: FALLBACK_PRODUCTS }
  );

  const products = Array.isArray(payload.products) ? payload.products : FALLBACK_PRODUCTS;
  return dedupeProducts(products);
}

export async function getTopSellingData(days = 30, limit = 10): Promise<SedifexTopSellingItem[]> {
  const config = getConfig();

  if (!config) {
    return FALLBACK_PRODUCTS.slice(0, 4).map((product, index) => ({
      productId: product.id,
      name: product.name,
      category: product.category,
      imageUrl: product.imageUrl,
      imageAlt: product.imageAlt,
      itemType: product.itemType,
      qtySold: 20 - index * 3,
      grossSales: 0,
      lastSoldAt: null
    }));
  }

  const safeDays = Math.min(Math.max(days, 1), 365);
  const safeLimit = Math.min(Math.max(limit, 1), 50);

  const payload = await sedifexFetch<{ topSelling?: SedifexTopSellingItem[] }>(
    `/integrationTopSelling?storeId=${encodeURIComponent(config.storeId)}&days=${safeDays}&limit=${safeLimit}`,
    { topSelling: [] }
  );

  if (!Array.isArray(payload.topSelling) || payload.topSelling.length === 0) {
    return FALLBACK_PRODUCTS.slice(0, safeLimit).map((product, index) => ({
      productId: product.id,
      name: product.name,
      category: product.category,
      imageUrl: product.imageUrl,
      imageAlt: product.imageAlt,
      itemType: product.itemType,
      qtySold: 20 - index * 3,
      grossSales: 0,
      lastSoldAt: null
    }));
  }

  return payload.topSelling;
}

export async function getPromoData(): Promise<SedifexPromo> {
  const config = getConfig();

  if (!config) {
    return FALLBACK_PROMO;
  }

  const payload = await sedifexFetch<SedifexPromo>(
    `/integrationPromo?storeId=${encodeURIComponent(config.storeId)}`,
    FALLBACK_PROMO
  );

  return {
    ...FALLBACK_PROMO,
    ...payload
  };
}

export async function getGalleryData(): Promise<SedifexGalleryItem[]> {
  const config = getConfig();

  if (!config) {
    return FALLBACK_GALLERY;
  }

  const payload = await sedifexFetch<{ gallery?: SedifexGalleryItem[]; items?: SedifexGalleryItem[] } | SedifexGalleryItem[]>(
    `/integrationGallery?storeId=${encodeURIComponent(config.storeId)}`,
    []
  );

  const gallery = Array.isArray(payload)
    ? payload
    : Array.isArray(payload.gallery)
      ? payload.gallery
      : Array.isArray(payload.items)
        ? payload.items
        : [];

  if (!gallery.length) {
    return FALLBACK_GALLERY;
  }

  return gallery
    .filter((item) => item.url)
    .sort((a, b) => (a.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.sortOrder ?? Number.MAX_SAFE_INTEGER));
}

export async function getServicesData(): Promise<ServiceItem[]> {
  const products = await getProductsData();

  return SERVICES.map((service, index) => {
    const external = products[index];

    return {
      ...service,
      title: external?.name || service.title,
      description: external?.description || service.description,
      image: external?.imageUrl || service.image
    };
  });
}
