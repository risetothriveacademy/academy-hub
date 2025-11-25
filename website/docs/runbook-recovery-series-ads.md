# Recovery Series Funnels & Final Ad Readiness — Runbook

**Version:** 1.0.0
**Last Updated:** November 6, 2025

---

## A. Overview

This runbook documents the complete implementation of the 15 Recovery Series mini-course funnels and their ad campaign readiness. Each Recovery course is a focused, 30-minute faith-based lesson with an accompanying workbook, designed to help individuals work through specific challenges in their healing journey.

### Recovery Series Products

The Recovery Series consists of 15 standalone mini-courses:

1. **recovery-introductory** — Introduction to Recovery
2. **recovery-grief** — Grief & Loss
3. **recovery-fear** — Fear
4. **recovery-anxiety** — Anxiety
5. **recovery-depression** — Depression
6. **recovery-identity** — Identity & Self-Worth
7. **recovery-forgiveness** — Forgiveness
8. **recovery-shame** — Shame & Guilt
9. **recovery-financial** — Financial Recovery
10. **recovery-boundaries** — Healthy Boundaries
11. **recovery-purpose** — Purpose & Calling
12. **recovery-trauma** — Trauma Healing
13. **recovery-resilience** — Building Resilience
14. **recovery-faith** — Faith in Hard Times
15. **recovery-restoration** — Restoration & Renewal

---

## B. Environment Variable Configuration

### Important Naming Convention

**CRITICAL:** Environment variable keys must use **underscores**, not hyphens. When mapping a course slug to an environment variable name, replace all hyphens with underscores.

**Example:**
- Slug: `recovery-grief`
- Env var: `NEXT_PUBLIC_STRIPE_URL_recovery_grief`

### Required Environment Variables

Each Recovery course requires the following environment variables:

#### Stripe Checkout URLs
```bash
NEXT_PUBLIC_STRIPE_URL_recovery_introductory="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_grief="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_fear="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_anxiety="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_depression="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_identity="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_forgiveness="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_shame="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_financial="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_boundaries="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_purpose="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_trauma="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_resilience="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_faith="https://buy.stripe.com/[your-link]"
NEXT_PUBLIC_STRIPE_URL_recovery_restoration="https://buy.stripe.com/[your-link]"
```

#### Meta Pixel IDs (Facebook Ads)
```bash
NEXT_PUBLIC_META_PIXEL_ID_recovery_introductory="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_grief="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_fear="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_anxiety="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_depression="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_identity="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_forgiveness="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_shame="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_financial="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_boundaries="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_purpose="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_trauma="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_resilience="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_faith="[pixel-id]"
NEXT_PUBLIC_META_PIXEL_ID_recovery_restoration="[pixel-id]"
```

### Success URL Template

Each Stripe checkout URL should include a success redirect parameter:

```
?success_url=https://risetothriveacademy.com/courses/{slug}/success
```

**Example:**
```
https://buy.stripe.com/abc123?success_url=https://risetothriveacademy.com/courses/recovery-grief/success
```

---

## C. Page Implementation

Each Recovery course has a dedicated funnel page at `/courses/{slug}`.

### Page Structure

1. **Hero Section** — Purple gradient header with course title and brief description
2. **Details Section** — Two-column layout with:
   - **Left:** Lesson video placeholder + Workbook info
   - **Right:** Enrollment CTA + Related resources

### Technical Implementation

- **Framework:** Next.js App Router
- **Styling:** Tailwind CSS
- **Components:** Server components (default)
- **Metadata:** SEO-optimized title and description per course

---

## D. Analytics & Tracking Setup

### Meta Pixel Events

The following events should be tracked for each funnel:

1. **PageView** — Fired on page load
2. **ViewContent** — Fired when user scrolls to details section
3. **InitiateCheckout** — Fired when "Enroll Now" button is clicked
4. **Purchase** — Fired on success page (post-checkout)

### Event Parameters

- `content_name`: Course title
- `content_category`: "Recovery Series"
- `content_ids`: Course slug
- `value`: Product price
- `currency`: "USD"

---

## E. Stripe Product Setup

### Product Configuration

Each Recovery course is configured as a separate Stripe product with:

- **Type:** One-time payment
- **Price:** $27 (or as configured)
- **Success URL:** `https://risetothriveacademy.com/courses/{slug}/success`
- **Cancel URL:** `https://risetothriveacademy.com/courses/{slug}`

See `stripe-products.md` for complete product mapping.

---

## F. Pre-Launch QA Checklist

Before launching ads, complete this 5-minute QA:

### Site QA (Per Funnel)
- [ ] Page loads without errors
- [ ] Hero section displays correctly
- [ ] Video placeholder is visible
- [ ] Workbook section is present
- [ ] "Enroll Now" button is visible and clickable
- [ ] Stripe checkout URL is configured (not "#")
- [ ] Success URL redirects to correct page
- [ ] Mobile responsive layout works
- [ ] All internal links work (Foundation, Mastermind, etc.)

### Ad Platform QA
- [ ] Meta Pixel is installed and firing
- [ ] PageView event tracked on page load
- [ ] InitiateCheckout event fires on button click
- [ ] Pixel ID matches the ad account
- [ ] Conversion API configured (if applicable)
- [ ] Test purchase completes successfully
- [ ] Purchase event fires on success page

---

## G. Deployment Process

### 1. Environment Variables

Add all required env vars to your hosting platform (Vercel, Netlify, etc.):

```bash
# Copy from .env.example
# Update with actual Stripe URLs and Pixel IDs
# Deploy
```

### 2. Build & Deploy

```bash
cd website
npm install
npm run build
npm run deploy
```

### 3. Post-Deploy Verification

After deployment:

1. Visit each course page
2. Verify checkout URLs work
3. Complete a test purchase
4. Confirm success page redirect
5. Check Meta Events Manager for pixel fires

---

## H. Launch Day Checklist

- [ ] All 15 funnels are live and tested
- [ ] Stripe products are in live mode (not test mode)
- [ ] Meta Pixel is in production (not test events)
- [ ] Success pages are created for all 15 courses
- [ ] Email automation is configured for purchase receipts
- [ ] Customer support knows about the new products
- [ ] Ad campaigns are created and scheduled
- [ ] Budget and bid strategy are set
- [ ] Ad creative is approved and compliant
- [ ] Monitoring dashboard is set up

---

## Additional Resources

- **Event Map:** See `event-map.json` for complete tracking event structure
- **Stripe Products:** See `stripe-products.md` for product mapping
- **Course Slugs:** See `recovery-course-slugs.csv` for the complete list
- **Analytics:** See `analytics-setup.md` for general pixel configuration

---

**Questions or Issues?**
Contact the technical team or refer to the main project README.
