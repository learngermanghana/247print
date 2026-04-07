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
  imageUrls: [service.image],
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


function normalizeItemType(itemType?: string | null): string {
  return (itemType || "").trim().toLowerCase();
}

export function getProductsByType(products: SedifexProduct[], type: "service" | "product"): SedifexProduct[] {
  const normalizedType = type.toLowerCase();

  return products.filter((product) => normalizeItemType(product.itemType) === normalizedType);
}

export function getTopSellingByType(items: SedifexTopSellingItem[], type: "service" | "product"): SedifexTopSellingItem[] {
  const normalizedType = type.toLowerCase();

  return items.filter((item) => normalizeItemType(item.itemType) === normalizedType);
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

function uniqueValidUrls(values: Array<string | null | undefined>): string[] {
  const seen = new Set<string>();

  return values
    .map((value) => (value || "").trim())
    .filter((value) => {
      if (!value || seen.has(value)) {
        return false;
      }

      seen.add(value);
      return true;
    });
}

function extractProductImages(product: Record<string, unknown>): string[] {
  const directImages = uniqueValidUrls([
    typeof product.imageUrl === "string" ? product.imageUrl : null,
    typeof product.imageUrl2 === "string" ? product.imageUrl2 : null,
    typeof product.imageUrl3 === "string" ? product.imageUrl3 : null,
    typeof product.photoUrl === "string" ? product.photoUrl : null,
    typeof product.photoUrl2 === "string" ? product.photoUrl2 : null,
    typeof product.photoUrl3 === "string" ? product.photoUrl3 : null,
    typeof product.photo1 === "string" ? product.photo1 : null,
    typeof product.photo2 === "string" ? product.photo2 : null,
    typeof product.photo3 === "string" ? product.photo3 : null
  ]);

  const imageCollections = [product.images, product.photos, product.imageUrls].flatMap((collection) =>
    Array.isArray(collection) ? collection : []
  );

  const collectionImages = uniqueValidUrls(
    imageCollections.map((item) => {
      if (typeof item === "string") {
        return item;
      }

      if (!item || typeof item !== "object") {
        return null;
      }

      const imageItem = item as Record<string, unknown>;
      if (typeof imageItem.url === "string") {
        return imageItem.url;
      }

      if (typeof imageItem.imageUrl === "string") {
        return imageItem.imageUrl;
      }

      return null;
    })
  );

  return uniqueValidUrls([...directImages, ...collectionImages]).slice(0, 3);
}

function normalizeProduct(product: SedifexProduct): SedifexProduct {
  const imageUrls = extractProductImages(product as unknown as Record<string, unknown>);

  return {
    ...product,
    imageUrls,
    imageUrl: imageUrls[0] || product.imageUrl || null
  };
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
  return dedupeProducts(products).map((product) => normalizeProduct(product));
}

export async function getTopSellingData(days = 30, limit = 10): Promise<SedifexTopSellingItem[]> {
  const config = getConfig();

  if (!config) {
    return FALLBACK_PRODUCTS.slice(0, 4).map((product, index) => ({
      id: product.id,
      storeId: product.storeId,
      productId: product.id,
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
      stockCount: product.stockCount,
      imageUrl: product.imageUrl,
      imageUrls: product.imageUrls,
      imageAlt: product.imageAlt,
      itemType: product.itemType,
      updatedAt: product.updatedAt,
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
      id: product.id,
      storeId: product.storeId,
      productId: product.id,
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
      stockCount: product.stockCount,
      imageUrl: product.imageUrl,
      imageUrls: product.imageUrls,
      imageAlt: product.imageAlt,
      itemType: product.itemType,
      updatedAt: product.updatedAt,
      qtySold: 20 - index * 3,
      grossSales: 0,
      lastSoldAt: null
    }));
  }

  return payload.topSelling.map((item) => {
    const normalizedImageUrls = extractProductImages(item as unknown as Record<string, unknown>);
    const inferredId = item.id || item.productId || `${item.storeId || "unknown-store"}-${item.name}-${item.qtySold}`;

    return {
      ...item,
      id: inferredId,
      storeId: item.storeId || config.storeId,
      productId: item.productId || inferredId,
      imageUrls: normalizedImageUrls,
      imageUrl: normalizedImageUrls[0] || item.imageUrl || null
    };
  });
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
  const serviceProducts = getProductsByType(products, "service");

  if (!serviceProducts.length) {
    return SERVICES;
  }

  return serviceProducts.map((item, index) => {
    const fallback = SERVICES[index % SERVICES.length];

    return {
      ...fallback,
      slug: item.id || fallback.slug,
      title: item.name || fallback.title,
      description: item.description || fallback.description,
      image: item.imageUrl || fallback.image
    };
  });
}
