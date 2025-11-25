# Analytics Setup Standard — One GA4 Stream + Per-Page Landing URLs

## TL;DR
- **Single GA4 property + one Web data stream** for `https://risetothrive-hub.com`.
- All funnels live under this domain:
  - `/foundation`
  - `/mastermind`
  - `/courses/recovery-introductory/*` (15 minis)
  - `/advanced-mastery`
- **Ads point directly** to the exact landing page (not the homepage).
- **Purchases** redirect to `/thank-you?session_id=...&amount=...&currency=...` which fires GA4 `purchase` and pixel events.

## Why one stream
- Simple deploys (one G-ID everywhere).
- Clean reporting by **path** (page_location contains `/mastermind`, etc.) and by **UTM**.
- Compatible with GA4 → Google Ads import for YouTube.

## UTM Template


?utm_source={{platform}}&utm_medium={{ad_type}}&utm_campaign={{course_slug}}-launch&utm_content={{creative_name}}

**Example:**  
`/mastermind?utm_source=youtube&utm_medium=cpc&utm_campaign=mastermind-launch&utm_content=video1`

## Reporting tips
- GA4 → Reports → add comparison `page_location contains /foundation` (repeat for other paths).
- Import GA4 **purchase** into Google Ads for YouTube optimization.
