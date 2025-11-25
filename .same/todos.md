# Rise to Thrive Academy - Development Todos

## ⏳ **PENDING - Waiting on Same.new Support**

### **Latest Request: Hub Routing & Navigation Fixes** (Nov 24, 2025)
**Status:** ✉️ Request sent to Same.new Support

**Fixes Requested:**
- A) Root domain → Hub landing page
- B) Add "Log in" button to Hub
- C) Add "Forgot password" to login page
- D) Wire Foundation button to Foundation portal
- E) Fix Mastermind button URL
- F) Advanced Mastery placeholder

**Key URLs:**
- Hub: `https://risetothrive-academy.com`
- Login: `https://same-7alif4078a8-latest.netlify.app/account/login`
- Dashboard: `https://same-7alif4078a8-latest.netlify.app/courses/transformational-course`
- Foundation Portal: `https://same-x3an0bjktsr-latest.netlify.app/foundation-course-`
- Mastermind Portal: `https://same-0erqnwjk0zo-latest.netlify.app/mastermind/`

**Next Action:**
- ⏳ Wait for Same.new to complete fixes
- 📢 **IMPORTANT:** Alert AI assistant when complete!
- 📋 See `.same/portal-urls-master-list.md` for full URL reference

---

### **Portal Migration Request** (Nov 24, 2025)
**Status:** ✉️ Request sent to Same.new Support

**Migration Requested:**
- Migrate Foundation portal from `same-7alif4078a8` project
- Place in `risetothriveacademy/academy-hub` under `website/src/app/foundation/`
- Preserve all Day 1-5 content, auth, progress tracking

**Next Action:**
- ⏳ Wait for Same.new to complete migration
- 📢 **IMPORTANT:** Alert AI assistant when complete!
- 📋 See `.same/portal-export-tracking.md` for details

---

## ✅ **CLEANUP COMPLETED (Nov 23, 2025)**

**Deleted Static HTML Placeholders:**
- ❌ `ahub/index.html` - DELETED
- ❌ `ahub/foundation/index.html` - DELETED
- ❌ `ahub/mastermind/index.html` - DELETED
- ❌ `ahub/advanced-mastery/index.html` - DELETED

**Why:** These were old placeholders causing confusion. Everything is now Next.js!

**See:** `.same/project-structure.md` for current architecture.

---

## 🎯 **ACTION NEEDED FROM YOU**

### Foundation Course Integration
I need your input to proceed! Please read:
📄 **`.same/foundation-integration-plan.md`**

**Quick summary:**
- Where is the Foundation course content?
- Which integration approach do you prefer?
- What are the live Foundation URLs?
- Full details and 3 options in the plan document ☝️

---

## 📋 CURRENT SESSION STATUS (Nov 23, 2025)

### ✅ Just Completed
- [x] Fixed TypeScript import errors in all 15 recovery course pages (`brand` → `BRAND`)
- [x] Fixed Next.js 15 async params in dynamic mini-course page
- [x] Verified build passes successfully (50/50 pages)
- [x] All 18 mini-courses rendering correctly
- [x] Dev server running on port 3000

### 🔍 Awaiting Clarification
**Foundation Course Integration**
User mentioned "foundation course contents are in same.new"

**Need to know:**
- Where exactly is the Foundation content located?
- Is it in a different Same.new project?
- Should we integrate it into this repo or keep separate?
- What are the Foundation portal URLs and Stripe links?

---

## 🚨 BLOCKER - Action Required
**Netlify deployment failing with "Can't resolve 'stripe'" error**

**YOU NEED TO:**
1. Open Netlify dashboard for academy-hub site
2. Clear build cache
3. Review and remove any stripe-related environment variables
4. Check for legacy .env.local configuration
5. If issue persists, delete and reconnect Netlify site

**Technical Details:**
- Local builds work perfectly ✅
- Error only occurs in Netlify environment
- No stripe imports exist in codebase
- Both npm and bun builds fail identically
- Likely caused by cached environment variables

---

## ✅ Completed This Session

### Brand Colors & Design System
- [x] Created `website/src/lib/brand.ts` with complete color system
  - Teal #0097B2 for primary CTAs
  - Gold #DB910F for accents
  - Dark gradients for depth
  - Reusable style constants

### Sample Pages (Vibrant Colors Applied)
- [x] `recovery-introductory/page.tsx` - Teal hero, gold CTA, enhanced cards
- [x] `shame-and-guilt/page.tsx` - Vibrant pills, gradients, shadows

### Build Fixes
- [x] Fixed package.json syntax error
- [x] Added Suspense to thank-you page (Next.js 15 requirement)
- [x] Configured next.config.js for builds
- [x] Local build succeeds ✅

### Documentation
- [x] Created comprehensive session-summary.md
- [x] Documented design patterns and color system
- [x] Recorded all changes and next steps

---

## 📋 Next Steps (In Priority Order)

### 1. Fix Deployment (BLOCKER)
See action required section above ☝️

### 2. Apply Vibrant Colors to All Pages
Use the 2 sample pages as templates:
- [ ] Remaining 14 recovery course pages
- [ ] Remaining 9 mini-course pages
- [ ] Home page
- [ ] Other marketing pages
- [ ] Update global layout with dark gradient

**Reference:** See `session-summary.md` for exact code patterns

### 3. Commit to GitHub
After deployment fix:
- [ ] Add all vibrant color changes
- [ ] Commit with detailed message
- [ ] Push to main branch

### 4. Add Stripe Payment Links
- [ ] Update 16 remaining courses with real Stripe URLs
- [ ] Currently only 2 courses have live links

### 5. Create & Integrate Videos
- [ ] Record Pictory videos for all courses
- [ ] Upload to hosting
- [ ] Update pages with video embeds

### 6. QA & Polish
- [ ] Test on mobile, tablet, desktop
- [ ] Verify all colors display correctly
- [ ] Check hover effects and transitions
- [ ] Gather user feedback

---

## 📁 Key Files

### Brand System
- `website/src/lib/brand.ts` - Color definitions and style utilities

### Sample Pages (Reference for Others)
- `website/src/app/courses/recovery-introductory/page.tsx`
- `website/src/app/minicourses/shame-and-guilt/page.tsx`

### Documentation
- `.same/session-summary.md` - Complete session overview
- `.same/todos.md` - This file

---

## 💡 Quick Reference

### Colors
```
Teal:  #0097B2 (Primary)
Gold:  #DB910F (Accent)
Dark:  #111827 (Background)
```

### Commands
```bash
# Dev server
cd ahub/website && bun run dev

# Build
cd ahub/website && bun run build

# Check status
git status
```

---

**Current Status:** ⚠️ BLOCKED on Netlify deployment
**Local Development:** ✅ Fully functional
**Next Owner Action:** Clear Netlify cache and fix environment variables
