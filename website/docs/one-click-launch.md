---
# Same.new One‑Click Launch — Recovery Series

Copy‑paste the block below into Same.new to finalize and deploy.

## Message to paste into Same.new
```
Please finalize and deploy the Recovery Series launch for Rise To Thrive Hub.

TASKS TO RUN:

1️⃣ Merge PR #5 ("feat(courses): add 15 recovery mini-course funnels") into main.

2️⃣ Connect and deploy on Netlify:
- Base directory: website
- Build command: npm ci && npm run build
- Publish directory: .next
- Node version: 20

3️⃣ Create the following environment variables in Netlify (use underscores):

NEXT_PUBLIC_SITE_NAME="Rise To Thrive Hub"
NEXT_PUBLIC_SITE_URL="https://risetothrive-hub.com"
NEXT_PUBLIC_SUPPORT_EMAIL="admin@risetothrive-hub.com"

# Analytics & Pixels
NEXT_PUBLIC_GA4_ID=G-XXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXX
NEXT_PUBLIC_TIKTOK_PIXEL_ID=
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=

# Stripe Payment Links (will import from CSV in next step)
# Each maps to a Recovery Mini-Course
NEXT_PUBLIC_STRIPE_URL_recovery_introductory=
NEXT_PUBLIC_STRIPE_URL_recovery_grief=
NEXT_PUBLIC_STRIPE_URL_recovery_fear=
NEXT_PUBLIC_STRIPE_URL_recovery_anxiety=
NEXT_PUBLIC_STRIPE_URL_recovery_depression=
NEXT_PUBLIC_STRIPE_URL_recovery_identity=
NEXT_PUBLIC_STRIPE_URL_recovery_forgiveness=
NEXT_PUBLIC_STRIPE_URL_recovery_shame=
NEXT_PUBLIC_STRIPE_URL_recovery_financial=
NEXT_PUBLIC_STRIPE_URL_recovery_boundaries=
NEXT_PUBLIC_STRIPE_URL_recovery_purpose=
NEXT_PUBLIC_STRIPE_URL_recovery_trauma=
NEXT_PUBLIC_STRIPE_URL_recovery_resilience=
NEXT_PUBLIC_STRIPE_URL_recovery_faith=
NEXT_PUBLIC_STRIPE_URL_recovery_restoration=

4️⃣ Deploy the site and confirm the following routes load correctly:
- /courses/recovery-introductory
- /courses/recovery-grief
- /courses/recovery-fear
- /foundation/start (Day-1 unlock)

5️⃣ Run pixel QA:
- Confirm GA4 "page_view" fires
- Confirm Meta Pixel "PageView" fires
- Post deployment URLs for verification

6️⃣ Optional: add top nav links
- Introductory Recovery → /courses/recovery-introductory
- Transformational Coaching → /courses/transformational-course
```

## Optional Same.new helper command (CSV → Netlify envs)
After you upload the CSV to the repo, ask Same.new:
```
Please import all Stripe checkout URLs from website/docs/recovery-stripe-links.csv and populate them as environment variables in Netlify, using the format: NEXT_PUBLIC_STRIPE_URL_{slug}
```

---
