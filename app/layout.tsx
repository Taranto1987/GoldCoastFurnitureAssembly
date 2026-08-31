import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS, SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Furniture Assembly Gold Coast | Gold Coast Furniture Assembly",
    template: "%s | Gold Coast Furniture Assembly",
  },
  description:
    "Furniture, flat pack and IKEA assembly in Burleigh Heads and surrounding Gold Coast suburbs. Send a product link or photo to get a clear quote.",
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  keywords: [
    "furniture assembly Gold Coast",
    "flat pack assembly Gold Coast",
    "furniture assembly Burleigh Heads",
    "IKEA assembly Gold Coast",
    "wardrobe assembly Gold Coast",
    "bed assembly Gold Coast",
    "desk assembly Gold Coast",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: BUSINESS.name,
    title: "You buy it. We build it.",
    description:
      "Clear furniture assembly quotes across Burleigh Heads and surrounding Gold Coast suburbs.",
    images: [
      {
        url: "/images/hero-horizontal.jpg",
        width: 1376,
        height: 768,
        alt: "Furniture assembly in a bright Gold Coast home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Assembly Gold Coast",
    description:
      "Send a product link or photo. We review the job, provide a clear quote and come to you.",
    images: ["/images/hero-horizontal.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
