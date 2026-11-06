import Link from "next/link";
import {
  FOUNDATION_OFFER_URL,
  isVerifiedCheckoutUrl,
  requestDetailsHref,
} from "@/lib/academy-links";

type EnrollCardProps = {
  courseTitle: string;
  /** Value of the page's NEXT_PUBLIC_STRIPE_URL_* variable (may be undefined). */
  checkoutUrl?: string;
  /** e.g. "$49". Only shown when a verified checkout link exists. */
  priceLabel?: string;
  /** Existing in-site page where this course can be enrolled (e.g. the Mini-Course Library). */
  libraryHref?: string;
  libraryLabel?: string;
  buttonClassName?: string;
};

/**
 * Enrollment box for course detail pages. It shows a purchase button only when
 * a real Stripe checkout URL is configured for the page. Otherwise it shows a
 * truthful "checkout link pending" state instead of a dead "#" link.
 */
export function EnrollCard({
  courseTitle,
  checkoutUrl,
  priceLabel,
  libraryHref,
  libraryLabel = "View in the Mini-Course Library",
  buttonClassName = "bg-[#DB910F] hover:bg-[#c4810d]",
}: EnrollCardProps) {
  const purchasable = isVerifiedCheckoutUrl(checkoutUrl);
  const btn = `inline-flex w-full items-center justify-center rounded-xl px-5 py-2 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0097B2] ${buttonClassName}`;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold">Enroll</h2>
      {purchasable ? (
        <>
          <p className="mt-2 text-sm text-gray-700">
            Instant access after purchase. Your receipt and access email will arrive within minutes.
          </p>
          <div className="mt-4">
            <a href={checkoutUrl} className={btn}>
              Enroll Now{priceLabel ? ` — ${priceLabel}` : ""}
            </a>
          </div>
          <p className="mt-2 text-xs text-gray-500">Secure checkout via Stripe.</p>
        </>
      ) : (
        <>
          <p className="mt-2 inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">
            Direct checkout for this page: coming soon
          </p>
          <p className="mt-3 text-sm text-gray-700">
            {libraryHref
              ? "You can find this course in the Mini-Course Library, or ask us for details."
              : "Enrollment for this course is not open yet. Ask us for details and we'll let you know when it opens."}
          </p>
          <div className="mt-4 space-y-2">
            {libraryHref && (
              <Link href={libraryHref} className={btn}>
                {libraryLabel}
              </Link>
            )}
            <a
              href={requestDetailsHref(`Course details: ${courseTitle}`)}
              className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0097B2]"
            >
              Request details
            </a>
          </div>
        </>
      )}
    </div>
  );
}

/** "Start the 5-Day Foundation Course" link pointing at the verified live offer page. */
export function FoundationOfferLink({ className }: { className?: string }) {
  return (
    <a
      href={FOUNDATION_OFFER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? "text-[#0097B2] underline hover:no-underline"}
    >
      Start the 5‑Day Foundation Course
    </a>
  );
}
