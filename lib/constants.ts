import { ProcessStep, ServiceItem, WhyChooseItem } from "@/lib/types";

export const BUSINESS = {
  brandName: "247 PRINT HOUSE",
  displayName: "247 PRINT HOUSE",
  phoneDisplay: "0558213040",
  phoneLink: "+233558213040",
  email: "printproduction247@gmail.com",
  address: "George Walker Bush Highway, Awoshie Waterworks, Accra, Ghana",
  city: "Accra",
  country: "Ghana",
  whatsapp:
    "https://wa.me/233558213040?text=Hello%20247%20PRINT%20HOUSE%2C%20I%20want%20to%20enquire%20about%20your%20printing%20services.",
  storeId: process.env.SEDIFEX_STORE_ID ?? "vRDr1e4KMpPKo53i9VHufJQRVcS2"
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/quote", label: "Quote" },
  { href: "/contact", label: "Contact" }
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "business-cards",
    title: "Business Cards",
    description:
      "Premium cards printed with precise colors and durable finishes for daily networking.",
    useCases: ["Corporate identity", "Sales meetings", "Professional introductions"],
    icon: "CreditCard",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "flyers-brochures",
    title: "Flyers & Brochures",
    description:
      "High-impact marketing materials for promotions, launches, outreach campaigns, and events.",
    useCases: ["Store promotions", "Church announcements", "Campaign activations"],
    icon: "FileText",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "posters-banners",
    title: "Posters & Banners",
    description:
      "Large-format printing for roadside visibility, in-store signage, and branded displays.",
    useCases: ["Outdoor ads", "Retail branding", "Event backdrops"],
    icon: "Image",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "stickers-labels",
    title: "Stickers & Labels",
    description:
      "Custom stickers and labels for packaging, products, windows, and promotional giveaways.",
    useCases: ["Product packaging", "Brand labels", "Merchandise"],
    icon: "Tag",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "branding-materials",
    title: "Branding Materials",
    description:
      "Coordinated branded stationery and campaign assets that keep your visual identity consistent.",
    useCases: ["Letterheads", "Presentation folders", "Brand kits"],
    icon: "Palette",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "event-printing",
    title: "Event Printing",
    description:
      "Print support for conferences, ceremonies, and activations with deadline-focused execution.",
    useCases: ["Invites", "Name tags", "Directional signage"],
    icon: "CalendarDays",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "bulk-printing",
    title: "Bulk Printing",
    description:
      "Efficient commercial volumes for schools, churches, NGOs, and growing businesses.",
    useCases: ["Institutional materials", "Election materials", "Product catalogs"],
    icon: "Layers",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "custom-orders",
    title: "Custom Orders",
    description:
      "Tailored print jobs based on unique specifications, quantities, and finishing requests.",
    useCases: ["Special dimensions", "Prototype runs", "Complex jobs"],
    icon: "Settings",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80"
  }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  { title: "Quality Output", detail: "Sharp colors, durable materials, and clean finishing for every print run." },
  { title: "Fast Turnaround", detail: "Deadline-driven workflow for urgent marketing and event materials." },
  { title: "Accra Convenience", detail: "Easy access from Awoshie Waterworks for pickup and consultations." },
  { title: "Reliable Support", detail: "Prompt updates from enquiry to production and delivery coordination." },
  { title: "Professional Finishing", detail: "Cutting, laminating, creasing, and mounting done to spec." },
  { title: "Custom Solutions", detail: "Flexible options for unique sizes, quantities, and material choices." }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { title: "Send your request", detail: "Share your design idea, print specs, quantity, and timeline." },
  { title: "Get a quote", detail: "Receive a clear, itemized quote tailored to your printing needs." },
  { title: "Approve details", detail: "Confirm artwork, dimensions, finishing, and delivery preferences." },
  { title: "Production starts", detail: "Our team begins printing with strict quality checks." },
  { title: "Pickup or delivery", detail: "Collect from Awoshie Waterworks or arrange reliable delivery." }
];

export const SEO_KEYWORDS = [
  "247 PRINT HOUSE",
  "printing company in Accra",
  "printing services in Ghana",
  "flyers printing Accra",
  "banner printing Ghana",
  "business card printing Accra",
  "sticker printing Ghana",
  "custom printing Accra",
  "print shop Awoshie",
  "printing press company Ghana"
];
