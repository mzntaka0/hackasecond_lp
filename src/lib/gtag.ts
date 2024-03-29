// ref. https://mo-gu-mo-gu.com/nextjs-google-analytics/

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  if (!GA_TRACKING_ID) return;
  if (typeof window !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type GaEventProps = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export const event = ({
  action,
  category,
  label,
  value,
}: GaEventProps): void => {
  if (!GA_TRACKING_ID) return;

  if (typeof window !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
