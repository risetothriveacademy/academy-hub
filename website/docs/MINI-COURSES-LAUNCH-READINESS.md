# Mini-Course Launch Readiness Audit
**Date:** November 23, 2025
**Project:** academy-hub / ahub/website
**Auditor:** Claude (Ava Assistant)

---

## Executive Summary

**Total Mini-Courses Found:** 10 out of 18 expected
**Fully Launch-Ready:** 0
**Partially Ready:** 10
**Blocked/Missing:** 8

### Critical Findings
🔴 **BLOCKER:** No `data/courses.json` file exists
🔴 **BLOCKER:** 8 mini-courses are missing entirely
🟡 **WARNING:** All 10 existing courses lack Stripe payment integration
🟡 **WARNING:** All courses use placeholder content (workbooks, videos, descriptions)
🟢 **PASS:** All 10 existing pages render correctly with consistent structure

---

## Detailed Audit Results

### Mini-Courses Status Table

| # | Slug | Course Title | Page Exists | Description Present | Stripe Button | Workbook Link | Issues |
|---|------|--------------|-------------|---------------------|---------------|---------------|--------|
| 1 | `abandonment-and-loneliness` | Abandonment & Loneliness | ✅ Yes | ⚠️ Placeholder | ❌ No | ⚠️ Placeholder (#) | Missing Stripe, real content |
| 2 | `betrayal-and-broken-trust` | Betrayal & Broken Trust | ✅ Yes | ⚠️ Placeholder | ❌ No | ⚠️ Placeholder (#) | Missing Stripe, real content |
| 3 | `fear-of-failure-and-control` | Fear of Failure & Control | ✅ Yes | ⚠️ Placeholder | ❌ No | ⚠️ Placeholder (#) | Missing Stripe, real content |
| 4 | `grief-and-loss` | Grief & Loss | ✅ Yes | ⚠️ Placeholder | ❌ No | ⚠️ Placeholder (#) | Missing Stripe, real content |
| 5 | `identity-and-worth` | Identity & Worth | ✅ Yes | ⚠️ Placeholder | ❌ No | ⚠️ Placeholder (#) | Missing Stripe, real content |
| 6 | `perfectionism-and-performance` | Perfectionism & Performance | ✅ Yes | ⚠️ Placeholder | ❌ No | ⚠️ Placeholder (#) | Missing Stripe, real content |
| 7 | `rejection-and-abandonment` | Rejection & Abandonment | ✅ Yes | ⚠️ Placeholder | ❌ No | ⚠️ Placeholder (#) | Missing Stripe, real content |
| 8 | `self-sabotage-and-doubt` | Self-Sabotage & Doubt | ✅ Yes | ⚠️ Placeholder | ❌ No | ⚠️ Placeholder (#) | Missing Stripe, real content |
| 9 | `shame-and-guilt` | Shame & Guilt | ✅ Yes | ⚠️ Placeholder | ❌ No | ⚠️ Placeholder (#) | Missing Stripe, real content |
| 10 | `unforgiveness-and-bitterness` | Unforgiveness & Bitterness | ✅ Yes | ⚠️ Placeholder | ❌ No | ⚠️ Placeholder (#) | Missing Stripe, real content |
| 11-18 | **MISSING** | ❌ Not Found | ❌ No | ❌ No | ❌ No | ❌ No | **Pages do not exist** |

---

## Technical Validation

### ✅ What's Working
- All 10 existing mini-course pages render without errors
- Consistent page structure and layout across all courses
- Brand colors (teal #0097B2, gold #DB910F) applied correctly
- Responsive design implemented
- Clean TypeScript components
- All pages accessible at `/minicourses/[slug]`

### 🔴 Critical Blockers

#### 1. Missing `data/courses.json`
**Expected Location:** `ahub/website/data/courses.json`
**Status:** ❌ File does not exist
**Impact:** Cannot centralize course metadata, SEO data, or Stripe links
**Required Fields (per course):**
```json
{
  "slug": "string",
  "course_title": "string",
  "root_cause": "string",
  "stripe_link": "https://buy.stripe.com/...",
  "redirect_url": "string",
  "seo_title": "string",
  "page_heading": "string",
  "cta_label": "string",
  "short_description": "string"
}
```

#### 2. Missing 8 Mini-Courses
**Expected:** 18 total courses
**Found:** 10 courses
**Missing Courses:** 8 courses need to be created

**Recommendation:** Clarify which 8 additional courses should exist, or confirm if only 10 courses are planned.

#### 3. No Stripe Payment Integration
**Current State:** All pages have workbook buttons linking to `#` (placeholder)
**Required:** Each course needs:
- Real Stripe Payment Link (e.g., `https://buy.stripe.com/test_XXXXXX`)
- CTA button that redirects to Stripe checkout
- Success redirect URL configured

**Example Fix:**
```tsx
const STRIPE_URL = "https://buy.stripe.com/test_XXXXXX?client_reference_id=shame-guilt";
const WORKBOOK_URL = "https://same.new/workbooks/shame-guilt.pdf";
```

### 🟡 Warnings

#### 1. Placeholder Content
All courses currently display:
- Generic "30-minute cinematic lesson with workbook" description
- "Placeholder insight 1, 2, 3" for key takeaways
- "Scripture placeholder" for reflection section
- No embedded video (just placeholder gradient box)

**Action Required:** Replace with real content before launch.

#### 2. Hardcoded Course Data
Each page has course info hardcoded:
```tsx
const COURSE = { title: "Shame & Guilt", slug: "shame-and-guilt" };
```

**Recommendation:** Move to centralized JSON data file for easier updates.

#### 3. ESLint Warnings
**File:** `src/app/thank-you/page.tsx`
**Issues:**
- Line 15:29 - `Unexpected any` for `window.gtag`
- Line 25:27 - `Unexpected any` for `window.dataLayer`

**Fix:** Add proper TypeScript types or use `// @ts-ignore` comments.

---

## Listing/Hub Pages Audit

### `/mini-courses` Page
**Status:** ❌ **Does not exist**
**Required:** A directory/listing page showing all 18 mini-courses with:
- Grid of course cards
- Each card showing title, short description, and CTA
- Links to individual course pages

### `/introductory-recovery` Page
**Status:** ❌ **Not checked** (may be recovery course, not mini-course)
**Note:** This appears to be part of the `/courses` directory (Recovery Series), not mini-courses.

---

## Linter & Build Status

### Linter Results
```
✅ Build compiles successfully
⚠️  2 ESLint warnings (non-blocking):
    - Line 15:29: Unexpected any (thank-you/page.tsx)
    - Line 25:27: Unexpected any (thank-you/page.tsx)
```

### Runtime Warnings
```
⚠️  IMG failed to load: /brand/logo-rth.svg
    (Logo image missing or incorrect path)
```

---

## Pre-Launch Checklist

### Before Launch - Required Actions

- [ ] **Create `data/courses.json`** with all 18 courses
- [ ] **Clarify course count** - Are there 18 or only 10 mini-courses?
- [ ] **Add 8 missing courses** (if 18 is correct)
- [ ] **Add Stripe payment links** for all courses
- [ ] **Replace placeholder content:**
  - [ ] Real course descriptions
  - [ ] Actual key takeaways
  - [ ] Scripture verses with references
  - [ ] Embedded video URLs
  - [ ] Real workbook PDF links
- [ ] **Create `/mini-courses` listing page**
- [ ] **Fix logo path** or upload `/brand/logo-rth.svg`
- [ ] **Add TypeScript types** for window.gtag and window.dataLayer
- [ ] **Test Stripe checkout flow** for each course
- [ ] **Verify redirect URLs** after purchase
- [ ] **Add SEO metadata** to each page
- [ ] **Test on mobile devices**

### Nice-to-Have Improvements

- [ ] Centralize course data in JSON
- [ ] Add loading states for video embeds
- [ ] Add analytics tracking for course views
- [ ] Add social sharing meta tags
- [ ] Create automated tests for course pages

---

## Recommendations

### Immediate Actions (This Week)
1. **Clarify scope:** Confirm if 18 or 10 courses are planned
2. **Create data file:** Set up `data/courses.json` structure
3. **Add Stripe links:** Get payment links from Stripe dashboard
4. **Create listing page:** `/mini-courses` directory

### Short-Term (Before Launch)
1. **Content creation:** Replace all placeholders with real content
2. **Video uploads:** Host and embed actual course videos
3. **Workbook PDFs:** Upload and link real workbook files
4. **QA testing:** Test all flows end-to-end

### Long-Term (Post-Launch)
1. **Analytics:** Track course engagement and conversions
2. **A/B testing:** Optimize CTAs and descriptions
3. **User feedback:** Gather testimonials and reviews
4. **SEO optimization:** Improve search rankings

---

## Summary

**Current Status:** 🟡 **Partially Ready**

**Launch Blockers:**
- 8 courses missing (if 18 is target)
- No Stripe integration
- All content is placeholder

**Next Steps:**
1. Confirm total course count with stakeholder
2. Create centralized data file
3. Add Stripe payment links
4. Replace placeholder content
5. Create listing page
6. Run full QA before launch

**Estimated Time to Launch-Ready:**
- With current 10 courses: 2-3 days (add Stripe + content)
- With all 18 courses: 1-2 weeks (build 8 more + content)

---

**Report Generated:** November 23, 2025
**Next Audit Recommended:** After addressing critical blockers
