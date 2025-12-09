# Rise to Thrive Academy — Hub & Course Portal

This repository contains the full Academy Hub application for the Rise to Thrive ecosystem — including the Foundation Course (Day 1–5), the 18 Mini-Course Root Cause Library, the course dashboard, CRM integrations (HubSpot), login/auth pages, module pages, and future Mastermind + Advanced Mastery training areas.

---

## 🔎 Quick Reference (Academy Hub Overview)

### 📄 Main Pages
- **Academy Dashboard (Main Home):**  
  `src/app/page.tsx`

- **Authentication (Login / Register):**  
  `src/app/auth/*`

- **18 Mini-Courses (Root Causes):**  
  Dynamic routing:  
  `src/app/courses/[slug]/page.tsx`

- **Foundation Course (Day Pages):**  
  `src/app/foundation/day-1/page.tsx`  
  `src/app/foundation/day-2/page.tsx`  
  `src/app/foundation/day-3/page.tsx`  
  `src/app/foundation/day-4/page.tsx`  
  `src/app/foundation/day-5/page.tsx`

- **Mastermind (Future):**  
  `src/app/mastermind/*`

- **Advanced Mastery (Future):**  
  `src/app/advanced-mastery/*`

---

## 🧩 Core Components

- **Global Header / Navigation:**  
  `src/components/site-header.tsx`

- **Course Cards & Grids:**  
  `src/components/course/*`

- **Module & Lesson Viewer:**  
  `src/components/modules/*`

- **Forms (HubSpot-based):**  
  `src/components/forms/*`

---

## 💳 Stripe Integration

Each course (Foundation + 18 Mini-Courses) uses **Stripe Payment Links**.  
These are stored directly in the course pages.

**Example:**  
`const stripeLink = "https://buy.stripe.com/...";`

All payment links live in:
- Foundation: each `day-X/page.tsx`
- Mini-Courses: `courses/[slug]/page.tsx`

---

## 🧠 HubSpot CRM Integration

Used for:
- Lead capture  
- Contact tagging  
- Segmentation (e.g., `rtth_program`, `foundation_enrolled`, `mini_course_enrolled`)  
- Automations (emails, workflows)

Forms used in this repo live in:
`src/components/forms/*`

---

## 🖼️ Branding + Assets

- **Images & Thumbnails:**  
  `/public/courses/*`  
  `/public/assets/*`

- **Brand Colors:**  
  - Gold: `#DB910F`  
  - Teal / Blue-Green: `#0097B2`  
  - Charcoal: `#6C604B`

---

## 📚 Documentation

- **Project Structure & Architecture:**  
  *(Add later if needed)*

- **Open Items & TODOs:**  
  *(You can create a `TODO.md` anytime)*

---
## 🚀 Development
### Install dependencies

```bash
npm install
npm run dev
npm run build
```                                
Run these from the project root in your local development environment.
## Universal Legal Disclosures
- **Source of truth:** `/disclosures/universal-legal-disclosures.md`
- **Public route:** `/disclosures/universal-legal-disclosures`
- **Usage:** All landing pages, sites, PDFs, and emails must reference this file.
- **Web footnote:** Add the short disclaimer + link in the global footer/layout.
- **Do not** create duplicate legal text in random files. If updates are needed, edit the markdown file only and redeploy.
