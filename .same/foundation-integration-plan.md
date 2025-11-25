# Foundation Course Integration Plan
**Date:** November 23, 2025
**Status:** Awaiting User Input

---

## 🎯 Current Situation

You mentioned: **"the foundation course contents are in same.new"**

Based on the audit reports, I can see that:

1. **In THIS repository (`ahub`):**
   - Only a static landing page exists at `/foundation/index.html`
   - Multiple broken links point to `/foundation/start` (which doesn't exist)
   - No Foundation course content, videos, or Stripe integration
   - The FOUNDATION-LAUNCH-READINESS audit identified this as a blocker

2. **Expected Foundation Content:**
   - 5-day course with daily unlocks
   - Video lessons for each day
   - Workbook assignments
   - Stripe payment integration
   - HubSpot workflow integration
   - Student portal/dashboard for access

---

## 🔍 Questions for You

To proceed with Foundation integration, I need clarification on:

### 1. **Location of Foundation Content**
- Is the Foundation course in a **separate Same.new project**?
- Can you provide the project name or URL?
- OR is it files that need to be uploaded to this project?

### 2. **Integration Approach**
Which option do you prefer:

**Option A: Merge into this repository**
- Migrate all Foundation content to `ahub/website/src/app/foundation/`
- Integrate Stripe checkout
- Build student portal in this codebase
- **Pros:** Unified codebase, easier maintenance
- **Cons:** More migration work upfront

**Option B: Keep separate (recommended short-term)**
- Foundation stays on its own domain/repo
- Fix broken links in this repo to redirect to Foundation site
- Update thank-you page to handle Foundation purchases
- **Pros:** Quick fix, Foundation already working
- **Cons:** Split architecture, multiple deploys

**Option C: Hybrid**
- Keep Foundation content separate for now
- Add proper redirects and integration points
- Plan migration for later (Q1 2026)
- **Pros:** Best of both worlds
- **Cons:** Technical debt

### 3. **Foundation URLs**
What are the actual live URLs for:
- Foundation offer page: `https://foundation.risetothrive-academy.com/offer-video-a` (correct?)
- Foundation checkout: `https://buy.stripe.com/???` (need actual link)
- Foundation Day 1 access: `https://???` (what should `/foundation/start` redirect to?)
- Foundation portal: `https://???` (where do students access lessons?)

### 4. **Stripe Integration**
- Do you have a Stripe payment link for Foundation course?
- What should the success redirect URL be?
- Should Foundation purchases redirect to this hub or stay on Foundation site?

### 5. **HubSpot Integration**
- Is HubSpot already integrated on the Foundation site?
- What workflow should trigger on Foundation purchase?
- Do we need to add HubSpot tracking to this hub?

---

## ✅ What I Can Do NOW

**If you choose Option B (Keep Separate):**

I can immediately:

1. **Fix broken links in THIS repo** (15+ pages)
   ```
   /foundation/start → https://foundation.risetothrive-academy.com/day-1
   /portal → https://foundation.risetothrive-academy.com/portal
   ```

2. **Update thank-you page** to recognize Foundation purchases
   ```tsx
   if (course === "foundation") {
     // Show Foundation-specific next steps
     // Link to Foundation portal
   }
   ```

3. **Update `_redirects` file** for Netlify
   ```
   /foundation/* https://foundation.risetothrive-academy.com/:splat 302
   ```

4. **Document the architecture** clearly in README

**Estimated time:** 1-2 hours

---

## 📦 What I Need from You

Please provide:

1. ✅ **Confirmation:** Which integration option (A, B, or C)?

2. ✅ **URLs:** All live Foundation URLs (offer, checkout, portal, Day 1)

3. ✅ **Stripe Link:** Foundation course payment URL

4. ✅ **Access:** If Foundation is in a separate Same.new project:
   - Project name or URL
   - OR permission to access it
   - OR export/files to migrate

5. ✅ **Content Inventory:**
   - How many days/lessons in Foundation course?
   - What videos/workbooks exist?
   - What's the unlock schedule?

---

## 🚀 Quick Win Option

**Want to launch FAST?**

I recommend **Option B** with these steps:

1. **You tell me:**
   - Live Foundation portal URL
   - Stripe payment link

2. **I fix (1 hour):**
   - All broken links → redirect to Foundation
   - Thank-you page → Foundation-specific messaging
   - Netlify redirects

3. **You test:**
   - Full purchase flow
   - Verify redirects work

4. **We document:**
   - Split architecture in README
   - Plan migration for Q1 2026

**Result:** Hub launches with working Foundation integration TODAY.

---

## 📋 Current Status

✅ **18 Mini-Courses:** Ready to launch
✅ **Recovery Courses:** Fully built
✅ **Brand System:** Complete
✅ **Build:** Passes locally
⏳ **Foundation:** Awaiting your input
⚠️ **Netlify:** Needs cache clear (separate issue)

---

## 🎯 Your Turn

**Please reply with:**

1. Which option? (A, B, or C)
2. Foundation URLs
3. Stripe payment link
4. Access to Foundation content (if needed)

I'll implement immediately once I have this info! 🚀
