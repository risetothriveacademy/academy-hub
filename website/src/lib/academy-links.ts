// Verified Academy destinations, all in one place.
// Only add a URL here after it has been checked live and approved.
// See docs/ACADEMY_LAUNCH_READINESS_REPORT.md for the verification log.

/** Live Foundation offer/landing page (separate Netlify project, verified 200). */
export const FOUNDATION_OFFER_URL = "https://foundation.risetothrive-academy.com/offer-video-a";

/** Existing Foundation course portal used by Login / Create Account (verified, unchanged). */
export const FOUNDATION_PORTAL_URL =
  "https://foundation-course-portal.risetothrive-academy.com/foundation-course";

/** Existing support mailbox already published across the site. */
export const SUPPORT_EMAIL = "support@risetothrive-academy.com";

/**
 * PENDING DIANE'S DECISION. The Academy shows $99, but the Foundation offer page
 * (FOUNDATION_OFFER_URL) shows $39. This value has NOT been changed. It only keeps
 * every Academy occurrence in one place so the approved price can be set once.
 */
export const FOUNDATION_PRICE_LABEL = "$99";

/** Mini-course price as currently charged by /api/create-checkout (unchanged). */
export const MINI_COURSE_PRICE_LABEL = "$49";

/** A pre-filled email to the support mailbox for "Request details" CTAs. */
export function requestDetailsHref(subject: string): string {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

/** Only real https checkout links count as purchasable; "#" or empty never does. */
export function isVerifiedCheckoutUrl(url: string | undefined): url is string {
  return typeof url === "string" && /^https:\/\/\S+$/.test(url.trim());
}
