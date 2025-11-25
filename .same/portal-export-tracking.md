# Portal Export Request Tracking
**Date Requested:** November 23, 2025
**Status:** 🎯 **FOUNDATION PORTAL LOCATED!**
**Updated:** November 24, 2025

---

## 🎉 **CRITICAL DISCOVERY - Correct Portal Found!**

**Correct Foundation Portal Location:**
```
Same.new Workspace: netlify-setup-guide-nov-7-2025-7alif4078a8
Live URL: https://same-7alif4078a8-latest.netlify.app/foundation/start
GitHub Repo: https://github.com/risetothriveacademy/academy-hub
```

**Previous (Incorrect) Location:**
```
❌ https://same-0erqnwjk0zo-latest.netlify.app/ (OLD - Not Foundation portal)
```

---

## 📧 **Migration Request to Same.new:**

**Subject:** Migrate Foundation Portal from same-7alif4078a8 to academy-hub Monorepo
**Sent To:** Same.new Support
**Date:** November 24, 2025

**Request Summary:**
1. Locate Same.new project powering `same-7alif4078a8-latest.netlify.app`
2. Confirm it contains Foundation portal (Day 1-5, login, dashboard)
3. Migrate exact source code to `risetothriveacademy/academy-hub`
4. Place under `website/src/app/foundation/`
5. Preserve all routes, auth, content
6. Do NOT modify existing mini-courses system
7. Redeploy via GitHub

---

## 📦 **FOUNDATION PORTAL - Expected Structure**

**From Deployment:** `https://same-7alif4078a8-latest.netlify.app/`

**Routes to Migrate:**
```
/foundation/start           → website/src/app/foundation/start/page.tsx
/foundation/login           → website/src/app/foundation/login/page.tsx (if exists)
/foundation/dashboard       → website/src/app/foundation/dashboard/page.tsx (if exists)
/foundation/day-1           → website/src/app/foundation/day-1/page.tsx
/foundation/day-2           → website/src/app/foundation/day-2/page.tsx
/foundation/day-3           → website/src/app/foundation/day-3/page.tsx
/foundation/day-4           → website/src/app/foundation/day-4/page.tsx
/foundation/day-5           → website/src/app/foundation/day-5/page.tsx
```

**Files to Preserve:**
- ✅ All Day 1-5 lesson pages
- ✅ Video embeds
- ✅ Workbook download links
- ✅ Auth/login logic
- ✅ Progress tracking
- ✅ Unlock/gating logic
- ✅ All components and assets

---

## 🎯 **Integration Destination:**

**Target Repository:**
```
https://github.com/risetothriveacademy/academy-hub
```

**Target Structure:**
```
academy-hub/
└── website/
    └── src/
        └── app/
            ├── minicourses/        ← Existing (DO NOT TOUCH)
            ├── courses/            ← Existing (update navigation)
            ├── data/courses.json   ← Existing (DO NOT TOUCH)
            └── foundation/         ← NEW - Foundation portal goes here
                ├── start/
                │   └── page.tsx
                ├── day-1/
                │   └── page.tsx
                ├── day-2/
                │   └── page.tsx
                ├── day-3/
                │   └── page.tsx
                ├── day-4/
                │   └── page.tsx
                ├── day-5/
                │   └── page.tsx
                └── [other pages...]
```

---

## ✅ **When Migration Complete - Verification Checklist:**

**Step 1: Verify Migration** (10 min)
- [ ] Pull latest from GitHub: `risetothriveacademy/academy-hub`
- [ ] Confirm `website/src/app/foundation/` folder exists
- [ ] Verify all Day 1-5 pages present
- [ ] Check for auth/login pages
- [ ] Verify components migrated
- [ ] Check for environment variables

**Step 2: Test Locally** (15 min)
- [ ] Run `bun install` in website folder
- [ ] Run `bun run dev`
- [ ] Visit `/foundation/start`
- [ ] Test Day 1-5 navigation
- [ ] Verify videos load
- [ ] Test workbook links
- [ ] Check auth/login flow

**Step 3: Update Navigation** (10 min)
- [ ] Update `website/src/app/courses/page.tsx`
- [ ] Link Foundation card to `/foundation/start`
- [ ] Update header navigation if needed
- [ ] Update any other links pointing to Foundation

**Step 4: Apply Branding** (20 min)
- [ ] Apply vibrant brand colors (teal/gold/charcoal)
- [ ] Ensure consistency with mini-courses
- [ ] Update any outdated styling

**Step 5: Build & Deploy** (15 min)
- [ ] Run `bun run build`
- [ ] Fix any build errors
- [ ] Commit changes
- [ ] Push to GitHub
- [ ] Verify Netlify auto-deploys
- [ ] Test live site

**Step 6: Final Verification** (10 min)
- [ ] Test complete user journey:
  - Land on Academy Hub → Click Foundation → Login → Dashboard → Day 1-5
- [ ] Verify all routes work
- [ ] Test on mobile/desktop
- [ ] Confirm HubSpot integration still works

---

## 📝 **Key Requirements:**

**PRESERVE (Do NOT Change):**
- ✅ All lesson content exactly as-is
- ✅ Auth/login logic
- ✅ Progress tracking
- ✅ Video embeds
- ✅ Workbook links
- ✅ Existing mini-courses system

**UPDATE:**
- ✅ Navigation links to Foundation
- ✅ Apply vibrant brand colors
- ✅ Integrate with Academy Hub layout

---

**Last Updated:** November 24, 2025
**Status:** ⏳ Waiting for Same.new to complete migration
**Next Action:** Pull from GitHub when Same.new confirms completion

**ALERT AI ASSISTANT WHEN MIGRATION IS COMPLETE!** 🚨
