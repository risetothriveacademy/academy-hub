# Foundation Course Launch Readiness Audit
**Date:** November 23, 2025
**Project:** academy-hub / ahub/website
**Auditor:** Claude (Ava Assistant)

---

## Executive Summary

**Foundation Course Status:** 🔴 **NOT LAUNCH-READY**
**Critical Architecture Issue:** Foundation is hosted on **separate domain/repository**
**Current State:** Partial integration only (links pointing out)

### Key Findings
🔴 **CRITICAL:** Foundation Course lives on separate site (`foundation.risetothrive-academy.com`)
🔴 **BLOCKER:** No Foundation pages exist in `academy-hub` repository
🔴 **BLOCKER:** No Stripe integration in this repo for Foundation
🟡 **WARNING:** Broken internal links (`/foundation/start` → 404)
🟡 **WARNING:** No Foundation environment variables configured
🟢 **PARTIAL:** Static landing page exists at `/foundation/index.html`

---

## Architecture Overview

### Current Setup (SPLIT ARCHITECTURE)

**Repository 1:** `academy-hub` (this repo)
- Location: `ahub/website`
- Purpose: Marketing hub, Recovery courses, Mini-courses
- Foundation Status: **Landing page + outbound links only**

**Repository 2:** Foundation Course (separate private repo)
- Domain: `foundation.risetothrive-academy.com`
- Confirmed by link: `https://foundation.risetothrive-academy.com/offer-video-a`
- Contains: Actual 5-day Foundation course content, Stripe checkout, video lessons

### What Exists in THIS Repository

#### 1. `/foundation/index.html` (Static Landing Page)
**Location:** `ahub/foundation/index.html`
**Status:** ✅ Exists
**Purpose:** Redirect/teaser page

**Content:**
- Title: "Foundation — Transforming Pain into Power"
- Description: "5-day program. Day-1 access is instant after checkout."
- CTA: Links to external Foundation site
- Secondary CTA: "Already purchased? Access Day-1" → `/course/day1/` (404)

**Issues:**
- Hardcoded external link to `https://risetothrive-academy.com/foundation/checkout`
- Internal "Access Day-1" link is broken
- No Stripe integration
- No actual course content

#### 2. Internal Links Pointing to Foundation
**Found in:** 15+ recovery course pages
**Pattern:** `<Link href="/foundation/start">Start the 5‑Day Foundation</Link>`

**Problem:** `/foundation/start` route **does not exist** in this repo → **404 error**

**Files with broken links:**
- `src/app/courses/recovery-anxiety/page.tsx`
- `src/app/courses/recovery-boundaries/page.tsx`
- `src/app/courses/recovery-depression/page.tsx`
- `src/app/courses/recovery-faith/page.tsx`
- `src/app/courses/recovery-fear/page.tsx`
- `src/app/courses/recovery-financial/page.tsx`
- `src/app/courses/recovery-forgiveness/page.tsx`
- `src/app/courses/recovery-grief/page.tsx`
- `src/app/courses/recovery-identity/page.tsx`
- `src/app/courses/recovery-introductory/page.tsx`
- `src/app/courses/recovery-purpose/page.tsx`
- `src/app/courses/recovery-resilience/page.tsx`
- `src/app/courses/recovery-restoration/page.tsx`
- `src/app/courses/recovery-shame/page.tsx`
- `src/app/courses/recovery-trauma/page.tsx`
- `src/components/SiteHeader.tsx` (Portal link)

#### 3. Transformational Course Page Reference
**Location:** `src/app/courses/transformational-course/page.tsx`
**Foundation Card:**
```tsx
{
  title: "5-Day Foundation Course",
  ctaText: "Go to Offer Page",
  href: "https://foundation.risetothrive-academy.com/offer-video-a",
  // ... also has "Already Purchased? Start Day 1" button
  // ... pointing to `/foundation/start` (404)
}
```

**Issues:**
- External offer page link works ✅
- Internal "Start Day 1" link broken ❌

---

## Route Validation Results

### Expected Routes (According to Links)

| Route | Expected | Actual Status | Issue |
|-------|----------|---------------|-------|
| `/foundation` | Landing page | ✅ Static HTML exists | Not in Next.js app |
| `/foundation/start` | Day 1 access | ❌ **404 - DOES NOT EXIST** | Referenced 15+ times |
| `/foundation-course` | Course page | ❌ **404 - DOES NOT EXIST** | Never referenced |
| `/thank-you?course=foundation` | Thank-you redirect | ⚠️ Generic thank-you only | No Foundation-specific logic |
| `/portal` | Student dashboard | ❌ **404 - DOES NOT EXIST** | Referenced in thank-you page |
| `/course/day1/` | Day 1 lessons | ❌ **404 - DOES NOT EXIST** | Referenced in foundation/index.html |

### Actual Routes Found

| Route | Status | Notes |
|-------|--------|-------|
| `/foundation/index.html` | ✅ Static file | Redirect page only, not integrated |

---

## Stripe Integration Audit

### ❌ No Stripe Integration Found

**Environment Variables:**
- Searched `.env.example` ✅
- Searched `netlify.toml` ✅
- Searched all config files ✅
- **Result:** Zero Foundation-related Stripe variables

**Expected Variables (MISSING):**
```bash
NEXT_PUBLIC_FOUNDATION_STRIPE_URL="https://buy.stripe.com/..."
NEXT_PUBLIC_FOUNDATION_SUCCESS_URL="https://risetothrive-hub.com/thank-you?course=foundation"
```

**Current Stripe Setup:**
- Foundation checkout happens on **external site** (`foundation.risetothrive-academy.com`)
- No payment links configured in this repository
- Stripe likely configured in separate Foundation repo

---

## Course Content Audit

### ❌ No Course Content in This Repository

**5 Days of Foundation Content:**
- Day 1: ❌ Not found
- Day 2: ❌ Not found
- Day 3: ❌ Not found
- Day 4: ❌ Not found
- Day 5: ❌ Not found

**Video Embeds:** ❌ None found
**Workbooks:** ❌ None found
**Lesson Pages:** ❌ None found

**Conclusion:** All Foundation course content lives in **separate private repository**.

---

## HubSpot Integration Audit

### ❌ No HubSpot Integration Detected

**Searched for:**
- HubSpot forms (`hs-form`, `hbspt`)
- HubSpot tracking codes
- Workflow/sequence parameters
- Foundation-specific tracking

**Result:** No HubSpot integration found in this repository.

**Expected (if integrated):**
```html
<script src="//js.hs-scripts.com/PORTAL_ID.js"></script>
<!-- HubSpot form for Foundation enrollment -->
```

**Likely Setup:** HubSpot integration exists in **separate Foundation repository**.

---

## Redirect/Navigation Flow Audit

### Expected User Journey
```
1. User sees Foundation CTA on academy-hub
   ↓
2. Clicks "Go to Offer Page"
   ↓
3. Redirects to: foundation.risetothrive-academy.com/offer-video-a
   ↓
4. User watches offer video & clicks CTA
   ↓
5. Stripe checkout (external)
   ↓
6. Purchase confirmation
   ↓
7. Redirect to thank-you page
   ↓
8. Access Day 1 lessons
```

### Current Flow Status

✅ **Step 1-3 WORK:** Links redirect to external Foundation site
⚠️ **Step 4-6 UNKNOWN:** Occurs on external site (not auditable here)
❌ **Step 7 BROKEN:** No Foundation-specific thank-you logic
❌ **Step 8 BROKEN:** `/foundation/start` does not exist (404)

### Redirect Configuration

**File:** `ahub/_redirects`
**Foundation-related redirects:** ❌ None found

```
# Current redirects (no Foundation):
/introductory-recovery/*  https://same-yk01bbvnuzb-latest.netlify.app/introductory-recovery/:splat  200
/api/checkout             https://same-yk01bbvnuzb-latest.netlify.app/api/checkout                 200
```

**Missing:**
```
# NEEDED:
/foundation/start         https://foundation.risetothrive-academy.com/day-1  200
/foundation/*             https://foundation.risetothrive-academy.com/:splat  200
```

---

## Thank-You Page Audit

### Current Thank-You Page (`/thank-you`)

**Location:** `src/app/thank-you/page.tsx`
**Status:** ✅ Exists
**Foundation Support:** ❌ **NO**

**Current Logic:**
```tsx
// Generic thank-you page
// Does NOT check for ?course=foundation
// Does NOT provide Foundation-specific messaging
// Does NOT link to Foundation Day 1
```

**What It Shows:**
- Generic "Thank you!" message
- Order summary (amount + currency)
- "Go to Portal" button → `/portal` (404)
- "Return to Home" button → `/`

**What's Missing:**
```tsx
// NEEDED:
const course = searchParams.get("course");

if (course === "foundation") {
  return (
    <FoundationThankYou
      nextSteps="Access Day 1 immediately"
      ctaHref="https://foundation.risetothrive-academy.com/day-1"
      hubSpotSequence="foundation-onboarding"
    />
  );
}
```

---

## Linter & Build Status

### Linter Results
```
✅ Build compiles successfully
⚠️  2 ESLint warnings (non-blocking):
    - Line 15:29: Unexpected any (thank-you/page.tsx - window.gtag)
    - Line 25:27: Unexpected any (thank-you/page.tsx - window.dataLayer)
```

### Runtime Warnings
```
⚠️  IMG failed to load: /brand/logo-rth.svg
    (Logo image missing)
```

**Note:** No Foundation-specific build errors because **Foundation doesn't exist in this repo**.

---

## Critical Issues Summary

### 🔴 BLOCKERS (Must Fix Before Launch)

1. **No Foundation Course Content**
   - All 5 days of lessons are in separate repo
   - No integration between repos

2. **Broken Internal Links (15+ instances)**
   - `/foundation/start` → 404
   - `/portal` → 404
   - `/course/day1/` → 404

3. **No Stripe Integration**
   - No payment links configured
   - No environment variables

4. **No Thank-You Page Logic**
   - Generic thank-you doesn't recognize Foundation purchases
   - No onboarding flow for Foundation students

5. **No Navigation After Purchase**
   - Students can't access Day 1 after buying
   - No clear path from payment → lessons

### 🟡 WARNINGS (Should Fix)

1. **Split Architecture**
   - Foundation on separate domain creates confusion
   - Inconsistent user experience

2. **No HubSpot Integration**
   - Can't track Foundation enrollments
   - No automated sequences

3. **Missing Portal/Dashboard**
   - `/portal` referenced but doesn't exist
   - No student access area

4. **No Environment Variables**
   - Need Foundation-specific config
   - Need video URLs, workbook links

---

## Recommendations

### OPTION A: Keep Split Architecture (Quick Fix)

**Pros:** Foundation already works on separate domain
**Cons:** Fragmented experience, harder to maintain

**Required Fixes:**
1. **Fix broken links** (redirect to external Foundation site):
   ```
   # Add to _redirects:
   /foundation/start    https://foundation.risetothrive-academy.com/day-1    302
   /portal              https://foundation.risetothrive-academy.com/portal   302
   ```

2. **Update thank-you page** to detect Foundation purchases:
   ```tsx
   if (course === "foundation") {
     // Show Foundation-specific next steps
     // Link to external Foundation site
   }
   ```

3. **Add Foundation Stripe success URL**:
   ```
   https://risetothrive-hub.com/thank-you?course=foundation&session_id={CHECKOUT_SESSION_ID}
   ```

4. **Document the split** in README:
   ```md
   ## Foundation Course
   - Hosted separately at: foundation.risetothrive-academy.com
   - This repo only contains marketing links
   ```

**Estimated Time:** 2-4 hours

---

### OPTION B: Migrate Foundation to This Repo (Long-term Solution)

**Pros:** Unified experience, easier maintenance, better SEO
**Cons:** Significant migration effort

**Required Work:**
1. **Migrate all 5 days** of Foundation content
2. **Set up Stripe** integration in this repo
3. **Create `/foundation/start` route** for Day 1 access
4. **Build student portal** (`/portal`) for course access
5. **Integrate HubSpot** forms and tracking
6. **Update DNS** to consolidate domains
7. **Configure video hosting** and embed URLs
8. **Upload workbooks** and link properly

**Estimated Time:** 2-3 weeks

---

### OPTION C: Hybrid (Recommended for Now)

**Keep Foundation on separate site BUT fix the integration points:**

1. ✅ **Add redirects** for broken links (1 hour)
2. ✅ **Update thank-you page** with Foundation logic (2 hours)
3. ✅ **Document architecture** clearly (1 hour)
4. ✅ **Test full flow** end-to-end (2 hours)
5. 📅 **Plan migration** for Q1 2026

**Estimated Time:** 6-8 hours
**Launch-Ready:** Yes (with redirects)

---

## Pre-Launch Checklist (OPTION C - Quick Fix)

### Immediate Actions Required

- [ ] **Add redirects to `_redirects` file:**
  ```
  /foundation/start         https://foundation.risetothrive-academy.com/day-1    302
  /foundation/*             https://foundation.risetothrive-academy.com/:splat    302
  /portal                   https://foundation.risetothrive-academy.com/portal   302
  ```

- [ ] **Update thank-you page** to recognize `?course=foundation`:
  ```tsx
  const course = searchParams.get("course");
  const isFoundation = course === "foundation";

  if (isFoundation) {
    return <FoundationThankYou />;
  }
  ```

- [ ] **Verify Stripe success URL** on external Foundation site:
  ```
  success_url=https://risetothrive-hub.com/thank-you?course=foundation&session_id={CHECKOUT_SESSION_ID}
  ```

- [ ] **Test full user journey:**
  - [ ] Click Foundation CTA from transformational-course page
  - [ ] Complete checkout on external site
  - [ ] Verify redirect to thank-you page
  - [ ] Verify Foundation-specific messaging
  - [ ] Verify "Access Day 1" link works

- [ ] **Document Foundation architecture** in README:
  ```md
  ## Foundation Course (External)
  The 5-Day Foundation Course is hosted on a separate subdomain:
  https://foundation.risetothrive-academy.com

  This repository only contains marketing links that redirect users.
  ```

- [ ] **Confirm with Same.new:**
  - [ ] DNS for `foundation.risetothrive-academy.com` is working
  - [ ] Netlify deployment for Foundation site is active
  - [ ] SSL certificate is valid

### Nice-to-Have Improvements

- [ ] Add HubSpot tracking to thank-you page
- [ ] Create Foundation-specific analytics events
- [ ] Add Foundation testimonials to transformational-course page
- [ ] Create FAQ section about Foundation vs Recovery courses

---

## Final Verdict

### Launch Readiness Score: 🔴 **4/10 - NOT READY**

**Why:**
- Critical broken links prevent users from accessing content
- No integration between payment and course delivery
- Confusing split architecture not documented

**Can Launch If:**
1. Add redirects to fix broken links
2. Update thank-you page logic
3. Test full purchase flow end-to-end
4. Document that Foundation is external

**Estimated Time to Launch-Ready:** 6-8 hours (with quick fixes)

---

## Contact Points for Foundation Repo

**To complete this audit fully, you need:**

1. **Access to Foundation private repo**
   - Confirm Stripe integration
   - Verify video embeds
   - Check HubSpot forms
   - Test course delivery

2. **Environment variables from Foundation site**
   - Stripe publishable/secret keys
   - Video hosting URLs
   - HubSpot portal ID
   - Success/cancel URLs

3. **Netlify deployment info for Foundation**
   - Build status
   - Environment variables
   - Domain configuration

**Action:** Request Same.new to provide Foundation repo access or audit report from that site.

---

**Report Generated:** November 23, 2025
**Next Steps:** Choose Option A, B, or C and implement fixes
**Critical Deadline:** Fix broken links BEFORE any paid traffic to Foundation
