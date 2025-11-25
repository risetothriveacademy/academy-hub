# Rise to Thrive Academy - Project Structure

**Last Updated:** November 23, 2025

---

## ✅ **ACTIVE PROJECT (Next.js)**

**Main Application:**
```
ahub/website/                    ← Next.js 15 application (ACTIVE)
├── src/
│   ├── app/
│   │   ├── page.tsx            ← Homepage (Next.js/React)
│   │   ├── layout.tsx          ← Root layout
│   │   ├── intro-recovery/
│   │   │   └── minicourses/
│   │   │       ├── page.tsx               ← 18 mini-courses listing
│   │   │       └── [slug]/page.tsx        ← Dynamic course pages
│   │   ├── courses/
│   │   │   ├── recovery-*/                ← 15 recovery courses
│   │   │   └── transformational-course/   ← Programs overview
│   │   ├── minicourses/                   ← Legacy (10 courses)
│   │   └── thank-you/                     ← Post-purchase
│   ├── components/
│   │   └── SiteHeader.tsx
│   └── lib/
│       ├── brand.ts            ← Teal/Gold/Charcoal colors
│       └── utils.ts
├── data/
│   ├── courses.json            ← ALL 18 mini-courses data
│   └── courses.backup.json     ← Backup
├── public/                     ← Static assets
├── package.json
├── next.config.js
└── netlify.toml                ← Netlify deployment config
```

**Platform:** Netlify (Dynamic Site Deployment)
**Framework:** Next.js 15 with App Router
**Database:** HubSpot (CRM + Workflows)
**Payments:** Stripe Payment Links
**Styling:** Tailwind CSS + Brand System

---

## ❌ **DELETED (Static HTML Placeholders)**

**These files have been REMOVED to avoid confusion:**

```
✗ ahub/index.html                      ← DELETED (was placeholder)
✗ ahub/foundation/index.html           ← DELETED (was placeholder)
✗ ahub/mastermind/index.html           ← DELETED (was placeholder)
✗ ahub/advanced-mastery/index.html     ← DELETED (was placeholder)
```

**Why deleted:**
- These were old static HTML placeholders
- Everything is now built with Next.js
- Keeping them caused confusion about which files were active
- Next.js provides dynamic routing, components, and better maintainability

**Empty folders remaining:**
```
ahub/foundation/        ← Empty (placeholder deleted)
ahub/mastermind/        ← Empty (placeholder deleted)
ahub/advanced-mastery/  ← Empty (placeholder deleted)
```

These folders can be deleted too if needed.

---

## 📂 **OTHER REPOSITORIES**

### **Foundation Landing Page (Separate Repo)**
```
Repository: foundation-landing
GitHub: risetothriveacademy/foundation-landing
Deployment: Netlify (Static Export)
Domain: https://risetothrive-academy.com/foundation
```

**Contains:**
- Offer video landing pages
- Success/thank-you pages
- Freebie/starter kit pages
- Static Next.js export

**Does NOT contain:**
- Foundation portal (Day 1-5 lessons) ← MISSING/TO BE BUILT
- Student dashboard
- Course content pages

---

## 🎯 **WHAT NEEDS TO BE BUILT**

### **Foundation Course Portal** ❌ NOT YET BUILT

**Should contain:**
```
ahub/website/src/app/foundation/
├── page.tsx                    ← Foundation overview
├── login/page.tsx              ← Student login
├── dashboard/page.tsx          ← Course dashboard (Day 1-5 list)
├── day-1/page.tsx             ← Day 1 lesson
├── day-2/page.tsx             ← Day 2 lesson
├── day-3/page.tsx             ← Day 3 lesson
├── day-4/page.tsx             ← Day 4 lesson
└── day-5/page.tsx             ← Day 5 lesson
```

**Status:** TO BE BUILT (custom portal hosted on Netlify)

---

## ✅ **WHAT'S WORKING NOW**

1. ✅ **18 Mini-Courses** - Fully built and ready to deploy
2. ✅ **15 Recovery Courses** - Complete with Stripe links
3. ✅ **Brand System** - Teal/Gold/Charcoal colors defined
4. ✅ **Data Centralization** - courses.json with all metadata
5. ✅ **Dynamic Routing** - /intro-recovery/minicourses/[slug]
6. ✅ **Build System** - Clean Next.js build (50/50 pages)

---

## 🚧 **WHAT'S PENDING**

1. ⏳ **Foundation Portal** - Day 1-5 lesson pages need to be built
2. ⏳ **Student Login** - Authentication system (HubSpot?)
3. ⏳ **Course Dashboard** - Overview of all enrolled courses
4. ⏳ **Netlify Deployment** - Fix cache/environment issues
5. ⏳ **HubSpot Integration** - Webhook automation setup

---

## 📋 **KEY FILES**

**Main Config:**
- `ahub/website/package.json` - Dependencies
- `ahub/website/next.config.js` - Next.js config
- `ahub/website/netlify.toml` - Deployment config
- `ahub/website/tailwind.config.ts` - Styling config

**Data:**
- `ahub/website/data/courses.json` - 18 mini-courses
- `ahub/website/src/lib/brand.ts` - Brand colors

**Documentation:**
- `ahub/.same/todos.md` - Current tasks
- `ahub/.same/foundation-integration-plan.md` - Integration options
- `ahub/website/docs/MASTER-STATUS.md` - Full audit report

---

## 🎨 **Brand Colors**

```
Teal (Primary):    #0097B2
Gold (Accent):     #DB910F
Charcoal (Dark):   #3B3B3B
Soft Charcoal:     #6C604B
Light Background:  #F5F5F5
```

---

**No more static HTML confusion!** ✅
**Everything is Next.js now.** 🚀
