# Rise to Thrive Academy - Development Todos

## ✅ **COMPLETED - Foundation Course Integration (Nov 25, 2025)**

### **Status:** ✅ Fully Integrated into Next.js

**What's Been Built:**
- ✅ Extracted all Foundation Day 1-5 content from Vite app
- ✅ Created `data/foundation-course.ts` with video URLs, descriptions, questions
- ✅ Built `/foundation/dashboard` page with all 5 days
- ✅ Built `/foundation/day/[number]` dynamic pages for each day
- ✅ Integrated HubSpot tracking (NO GoHighLevel!)
- ✅ Authentication gating with NextAuth.js
- ✅ Video player with content protection notice
- ✅ Assignment questions display
- ✅ Day navigation (Previous/Next)
- ✅ Progress tracking UI
- ✅ Updated Transformation Programs dashboard link
- ✅ Responsive design with brand colors

**Technical Implementation:**
- Next.js 15 App Router with async params
- Client/Server component separation
- Suspense boundaries for loading states
- HubSpot event tracking for course access & video plays
- Session-based authentication
- TypeScript interfaces for type safety

**User Flow:**
1. User purchases Foundation Course (external)
2. User logs in → Dashboard
3. Clicks "Access Foundation Course" → `/foundation/dashboard`
4. Selects a day → `/foundation/day/1` (or 2, 3, 4, 5)
5. Watches videos, completes assignments
6. HubSpot tracks all activity

**Files Created:**
- `data/foundation-course.ts` - All course content
- `src/lib/hubspot.ts` - HubSpot tracking service
- `src/app/foundation/dashboard/page.tsx` - Foundation dashboard
- `src/app/foundation/day/[number]/page.tsx` - Day pages (server)
- `src/app/foundation/day/[number]/FoundationDayClient.tsx` - Day client component

**Build Status:**
- ✅ All TypeScript errors resolved
- ✅ Build passes successfully
- ✅ Dev server running smoothly
- ✅ Ready to deploy

---

## ✅ **COMPLETED - REQUEST 3: Transformation Programs Portal Buttons**

### **Status:** ✅ Built, Tested, & Pushed to GitHub

**What's Been Fixed:**

**A) Foundation Button:**
- ✅ "Enter Foundation Portal" now opens: `https://same-x3an0bjktsr-latest.netlify.app/foundation-course-`
- ✅ Clear button text
- ✅ Works for users who already purchased

**B) Mastermind Button:**
- ✅ "Enter Mastermind Portal" now opens: `https://same-0erqnwjk0zo-latest.netlify.app/mastermind/`
- ✅ Fixed incorrect URL
- ✅ Updated button text

**C) Advanced Mastery Button:**
- ✅ Set to "Coming Soon"
- ✅ Disabled state (gray, not clickable)
- ✅ No random/outdated links
- ⏳ Will be updated when final URL is ready

**Expected User Flow:**
1. User logs in
2. Lands on Transformation Programs dashboard
3. Clicks "Enter Foundation Portal" OR "Enter Mastermind Portal"
4. Taken to respective course portal

**Build Status:**
- ✅ 57 pages generated
- ✅ No TypeScript errors
- ✅ Committed and pushed to GitHub

---

## ✅ **COMPLETED - REQUEST 2: Complete Auth System**

### **Status:** ✅ Built, Tested, & Pushed to GitHub

**What's Been Built:**
- ✅ Login page (`/account/login`)
- ✅ Registration page (`/account/register`)
- ✅ Forgot Password page (`/account/forgot-password`)
- ✅ Reset Password page (`/account/reset-password`)
- ✅ Password hashing with bcrypt
- ✅ Secure JWT sessions (NextAuth.js)
- ✅ Email sending with beautiful templates
- ✅ Token-based password reset (1 hour expiry)
- ✅ Header "Log In" button updated to local auth
- ✅ Vibrant brand colors applied
- ✅ Mobile responsive design
- ✅ Build passes (57 pages)
- ✅ Pushed to GitHub

**What You Need to Do:**
📋 **Follow the guide:** `.same/auth-system-setup-guide.md`

**Quick Setup Steps:**
1. Copy `.env.example` to `.env.local` in website folder
2. Generate secret: `openssl rand -base64 32`
3. Add to `.env.local`: `NEXTAUTH_SECRET=your-secret`
4. Configure email (Ethereal for dev, SendGrid for prod)
5. Add environment variables to Netlify
6. Deploy and test!

**After Deployment, Test:**
- Visit: https://risetothrive-academy.com/account/login
- Try: Registration → Login → Forgot Password → Reset

---

## 🚀 **IN PROGRESS - REQUEST 1: Root Domain → Academy Hub**

### **Status:** ✅ Code Ready, ⏳ Awaiting Netlify Connection

**What's Done:**
- ✅ Netlify configuration files created
- ✅ Build settings optimized (bun, Next.js 15)
- ✅ Security headers added
- ✅ Code committed and pushed to GitHub
- ✅ Hub landing page ready with all 4 programs
- ✅ Log In button in header

**What You Need to Do:**
📋 **Follow the guide:** `.same/netlify-deployment-guide.md`

**Quick Steps:**
1. Open https://app.netlify.com/projects/academy-hub-masterfile/overview
2. Connect to GitHub repo: `risetothriveacademy/academy-hub`
3. Branch: `master`
4. Verify domain: `risetothrive-academy.com`
5. Click "Deploy site"
6. Wait 2-3 minutes for build
7. Test: https://risetothrive-academy.com

**Expected Result:**
- Hub landing page loads
- Shows: Introductory Recovery, Foundation, Mastermind, Advanced Mastery
- Header has logo and "Log In" button

---

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

## ✅ **COMPLETED TODAY (Nov 25, 2025)**

### **Git & GitHub Backup**
- [x] Initialized git repository
- [x] Created comprehensive commit (119 files)
- [x] Pushed to GitHub: `risetothriveacademy/academy-hub`
- [x] All work safely backed up

### **REQUEST 1: Netlify Configuration**
- [x] Created root netlify.toml with proper base directory
- [x] Updated build commands to use bun
- [x] Configured Next.js plugin
- [x] Added security headers
- [x] Pushed to GitHub for deployment

### **REQUEST 2: Complete Authentication System**
- [x] Installed NextAuth.js + dependencies
- [x] Created login page with vibrant design
- [x] Created registration page
- [x] Created forgot password page
- [x] Created reset password page
- [x] Built user storage system (JSON files)
- [x] Built email sending system
- [x] Created password reset flow
- [x] Updated header to use local login
- [x] Created comprehensive setup guide
- [x] Tested build (57 pages, all pass)
- [x] Committed and pushed to GitHub

### **REQUEST 3: Transformation Programs Portal Buttons**
- [x] Fixed Foundation button → Portal URL
- [x] Fixed Mastermind button → Correct portal URL
- [x] Set Advanced Mastery to "Coming Soon" (disabled)
- [x] Updated button text for clarity
- [x] Tested build
- [x] Committed and pushed to GitHub

### **Documentation**
- [x] Created netlify-deployment-guide.md
- [x] Created auth-system-setup-guide.md
- [x] Updated todos with current status
- [x] Environment variable template (.env.example)

---

**Current Status:** ⚠️ BLOCKED on Netlify deployment
**Local Development:** ✅ Fully functional
**Next Owner Action:** Clear Netlify cache and fix environment variables
