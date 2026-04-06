export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  useCases: string[];
  icon: string;
  image: string;
};

export type ProcessStep = {
  title: string;
  detail: string;
};

export type WhyChooseItem = {
  title: string;
  detail: string;
};

export type SedifexProduct = {
  id: string;
  storeId: string;
  name: string;
  category?: string | null;
  description?: string | null;
  price: number;
  stockCount?: number;
  itemType?: string | null;
  imageUrl?: string | null;
  imageUrls?: string[];
  imageAlt?: string | null;
  updatedAt?: string | null;
};

export type SedifexPromo = {
  promoTitle?: string | null;
  promoSummary?: string | null;
  promoStartDate?: string | null;
  promoEndDate?: string | null;
  promoSlug?: string | null;
  promoWebsiteUrl?: string | null;
  displayName?: string | null;
  name?: string | null;
};

export type SedifexGalleryItem = {
  id: string;
  url: string;
  alt?: string | null;
  caption?: string | null;
  sortOrder?: number | null;
  isPublished?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type SedifexTopSellingItem = {
  productId: string;
  name: string;
  category?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  itemType?: string | null;
  qtySold: number;
  grossSales: number;
  lastSoldAt?: string | null;
};
