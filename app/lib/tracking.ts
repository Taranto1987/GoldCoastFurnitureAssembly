import { readUtmParameters } from "./marketing";

export type ConversionEvent =
  | "page_view"
  | "phone_click"
  | "whatsapp_click"
  | "quote_form_start"
  | "quote_form_submit"
  | "lead";

const UTM_STORAGE_KEY = "gcfa_utm_parameters";

function getStoredUtm(): Record<string, string> {
  try {
    const fromUrl = readUtmParameters(window.location.search);
    if (Object.keys(fromUrl).length > 0) {
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    return JSON.parse(window.sessionStorage.getItem(UTM_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export function trackEvent(event: ConversionEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const enrichedPayload = { ...payload, utm: getStoredUtm() };

  window.dispatchEvent(
    new CustomEvent("gcfa:conversion", {
      detail: { event, payload: enrichedPayload, timestamp: new Date().toISOString() },
    }),
  );

  const analyticsWindow = window as typeof window & {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  };

  analyticsWindow.dataLayer?.push({ event, ...enrichedPayload });
  analyticsWindow.fbq?.("trackCustom", event, enrichedPayload);
  analyticsWindow.gtag?.("event", event, enrichedPayload);
}
