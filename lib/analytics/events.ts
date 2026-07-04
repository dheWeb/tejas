declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID || !window.gtag) return;
  window.gtag("event", action, params);
}

export const AnalyticsEvents = {
  registerClick: (source: string) =>
    trackEvent("register_click", { event_category: "engagement", source }),
  olympiadView: (subject: string) =>
    trackEvent("olympiad_view", { event_category: "engagement", subject }),
  betaFeedbackSubmit: () =>
    trackEvent("beta_feedback_submit", { event_category: "conversion" }),
  mockTestClick: () =>
    trackEvent("mock_test_click", { event_category: "engagement" }),
  contactClick: (source: string) =>
    trackEvent("contact_click", { event_category: "engagement", source }),
  resourceDownload: (resource: string) =>
    trackEvent("resource_download", { event_category: "engagement", resource }),
} as const;
