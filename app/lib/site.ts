export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const BUSINESS = {
  name: "Gold Coast Furniture Assembly",
  phoneDisplay: "+61 426 425 927",
  phoneHref: "tel:+61426425927",
  whatsappHref: "https://wa.me/61426425927",
  location: "Burleigh Heads, Gold Coast, Queensland",
  serviceArea: "Burleigh Heads and surrounding Gold Coast suburbs",
} as const;

export const serviceCategories = [
  { title: "Beds", detail: "Single, double, queen and more" },
  { title: "Wardrobes", detail: "Sliding, hinged and modular" },
  { title: "Desks", detail: "Home office and study setups" },
  { title: "Drawers", detail: "Chests, bedside tables and storage" },
  { title: "TV Units", detail: "Entertainment and media furniture" },
  { title: "Shelving", detail: "Bookcases, wall units and storage" },
  { title: "Outdoor Furniture", detail: "Flat-pack patio and garden pieces" },
  { title: "Gym Equipment", detail: "Home fitness equipment and stations" },
] as const;

export const suburbs = [
  "Burleigh Heads",
  "Burleigh Waters",
  "Miami",
  "Palm Beach",
  "Currumbin",
  "Varsity Lakes",
  "Robina",
  "Broadbeach",
  "Mermaid Waters",
  "Tallebudgera",
  "Elanora",
  "Coolangatta",
  "Tugun",
] as const;

export const futureRoutes = [
  "/furniture-assembly-gold-coast",
  "/flat-pack-assembly-gold-coast",
  "/ikea-assembly-gold-coast",
  "/wardrobe-assembly-gold-coast",
  "/furniture-assembly-burleigh-heads",
] as const;
