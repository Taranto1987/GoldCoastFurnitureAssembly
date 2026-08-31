export const MARKETING_CONFIG = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  googleAdsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  utmPersistDays: Number(process.env.NEXT_PUBLIC_UTM_PERSIST_DAYS || 30),
} as const;

export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export type MarketingEvent =
  | "page_view"
  | "phone_click"
  | "whatsapp_click"
  | "quote_form_start"
  | "quote_form_submit"
  | "lead";

export function readUtmParameters(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  return Object.fromEntries(UTM_KEYS.flatMap((key) => {
    const value = params.get(key);
    return value ? [[key, value]] : [];
  }));
}
