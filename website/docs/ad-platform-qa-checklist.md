# Ad Platform Tracking QA Checklist (Pink/Blue‑Green Transformational Site)

Domain: https://risetothrive-hub.com
Estimated time: 10 minutes

## 1) Facebook / Meta Pixel Verification
Tools: Meta Pixel Helper (Chrome)
- Open https://risetothrive-hub.com → confirm PageView
- Click Enroll Now/CTA → confirm InitiateCheckout on Stripe/GHL
- After payment (or test): visit https://risetothrive-hub.com/success → confirm Purchase or Lead
- Optional: Events Manager → Realtime Events
Expected: PageView, InitiateCheckout, Purchase/Lead

## 2) Google Ads Conversion Tag (if active)
Tools: Tag Assistant Companion
- Enable Tag Assistant → visit homepage
- Check for AW-XXXXXXXXX (Google Ads Conversion ID) and gtag.js
- Click checkout → confirm begin_checkout
- Success page → confirm purchase
Expected: Conversion ID present; begin_checkout and purchase fired

## 3) YouTube / Google Video Ads UTM Test
- Visit: https://risetothrive-hub.com/?utm_source=youtube&utm_medium=video&utm_campaign=test
- GA4 Realtime shows youtube / video, PageView with UTMs, UTMs persist to checkout

## 4) GA4 Event Flow
- GA4 → Realtime while browsing: page_view, scroll, click, begin_checkout, purchase
- Ensure /thank-you sends purchase (or purchase_success)

## 5) UTM + Stripe Test
- Incognito → checkout URL with UTMs: https://courses.risetothrive-academy.com/foundation/checkout?utm_source=google&utm_medium=cpc&utm_campaign=test
- Stripe Test Mode → Payments → confirm UTMs in metadata (or via webhook/HubSpot property)
Expected: Stripe metadata shows UTMs; GA4 sees google / cpc

## 6) Final Post-Test Message
Post: "✅ Ad Platform QA Passed – Meta PageView/Checkout/Purchase firing, GA4+Ads active, UTMs end-to-end, Stripe/CRM verified. Ready to activate campaigns."
