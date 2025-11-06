# Pixel + Event Setup Reference (Unified)

Domain: https://risetothrive-hub.com
Applies to GA4, Meta, Google Ads, YouTube, LinkedIn, TikTok

## Universal Event Names
Stage | Event | Trigger
---|---|---
Homepage | page_view | Visitor lands on any page
Landing | view_content | Visitor lands on ad destination page (UTMs present)
CTA | click_learn_more | Clicks a primary CTA before checkout load
Checkout | begin_checkout | Checkout page loads (Stripe or GHL)
Payment Info | add_payment_info | Starts entering payment (optional)
Purchase | purchase | Payment completes or /thank-you loads
Abandon | abandon_checkout | Checkout opened, not completed (workflow)
Access | course_access | Login at /portal
Workbook | workbook_submit | Workbook submitted in portal
Lead | lead_form_submit | Any lead/opt‑in form submission
Video | video_play | Plays Pictory/YouTube embed

## Platform Mapping
- GA4: gtag('event', 'purchase', { value, currency })
- Meta: fbq('track', 'Purchase', { value, currency })
- TikTok: ttq.track('CompletePayment', { value, currency })
- LinkedIn: custom conversion on /thank-you or purchase
- Google Ads/YouTube: import GA4 purchase, mark Primary

## Funnel Paths
Foundation: /foundation → checkout → purchase → /foundation/start → workbook_submit
Mastermind: /mastermind → checkout → purchase → /portal → /thank-you
Mini‑Courses: /courses/recovery-introductory (cards) → details → checkout → purchase

## Standard Parameters (attach to all)
```
{
  currency: 'USD',
  value: 99,
  course_slug: 'foundation' | 'mastermind' | 'recovery-…',
  utm_source, utm_medium, utm_campaign, utm_content
}
```
