# ACADEMY HUB — MASTER INDEX  
Rise to Thrive Academy • Transforming Pain into Power  
Last Updated: December 11, 2025

---

## 1. Project Overview

- **Repo:** `risetothriveacademy/academy-hub`
- **App Directory:** `website/`
- **Framework:** Next.js (App Router)
- **Hosting:** Netlify (auto-deploy from `main`)

---

## 2. Legal & Compliance

### 2.1 Master Legal Document (Single Source of Truth)
- **File:** `disclosures/universal-legal-disclosures.md`
- **Used for:**  
  - Universal Legal Disclosures page  
  - Legal reference for all other properties (Foundation, Mini-Courses, Landing Pages)

### 2.2 Public-Facing Legal Pages
- **Privacy Policy Page**
  - Route: `/privacy`
  - File: `website/src/app/privacy/page.tsx`
  - Purpose: Summary + link to full Universal Legal Disclosures

- **Terms of Service Page**
  - Route: `/terms`
  - File: `website/src/app/terms/page.tsx`
  - Purpose: Summary of Terms, Refund Policy, Faith-Based Disclaimer, Legal Protection Clauses

- **Footer Links**
  - File: `website/src/components/SiteFooter.tsx`
  - Links:
    - Universal Legal Disclosures → `/disclosures/universal-legal-disclosures`
    - Privacy Policy → `/privacy`
    - Terms of Service → `/terms`

---

## 3. Mini-Courses (18 Root-Cause Recovery)

### 3.1 MINI_COURSES Config
- **File:** `website/src/app/minicourses/config.ts` (or wherever MINI_COURSES is defined)
- **Contains:**
  - `order`
  - `slug`
  - `stripe_product_id`
  - `stripe_name`
  - `emotional_title`
  - Short description (accordion text)

### 3.2 Mini-Courses Page
- **Route:** `/minicourses`
- **File:** `website/src/app/minicourses/page.tsx`
- **Features:**
  - 18 course cards
  - “Learn More” accordions
  - “Enroll Now — $49” button → Stripe Checkout
  - “📖 View Workbook” links per course

---

## 4. Stripe Integration

### 4.1 API Endpoint
- **File:** `website/src/app/api/create-checkout/route.ts`
- **Purpose:**  
  - Accepts `stripe_product_id` and course title  
  - Creates Stripe Checkout Session for `$49`  
  - Uses `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_BASE_URL`

### 4.2 Environment Variables
Set in **Netlify** and `.env.local` (not committed):

- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_BASE_URL`

---

## 5. Workbooks (18 Interactive Online Workbooks)

### 5.1 Workbook Routing
- **Dynamic Route:** `/workbook/[slug]`
- **Route File:** `website/src/app/workbook/[slug]/page.tsx`
- **Content Source:** `website/src/app/workbook/content.ts`

### 5.2 Workbook Features (All 18)
- Scripture header (NLV)
- Section 1: Naming What You’re Carrying (5 prompts)
- Section 2: Replacing Lies With God’s Truth (5 prompts)
- Section 3: Walking It Out With God (5 prompts)
- Closing prayer
- Local-only saving (localStorage)
- Buttons: Save Responses, Download Backup, Print

---

## 6. Foundation Course (5-Day Portal)

> NOTE: Foundation portal is a separate Netlify site.  
> This section is just to document where its code lives when integrated into this repo.

- **Day Screens:**
  - `website/src/app/foundation/day-1/page.tsx`
  - `website/src/app/foundation/day-2/page.tsx`
  - `website/src/app/foundation/day-3/page.tsx`
  - `website/src/app/foundation/day-4/page.tsx`
  - `website/src/app/foundation/day-5/page.tsx`

- **Workbook Embeds:**  
  Document here how Day 1–5 workbooks are attached once finalized.

---

## 7. Deployment & Environments

### 7.1 Netlify

- **Site Name:** `risetothrive-academy`
- **Base Directory:** `website`
- **Build Command:** `bun run build`
- **Publish Directory:** `.next`

### 7.2 Auto-Deploy

- Branch: `main`
- Every push to `main` → triggers Netlify build & deploy

---

## 8. Version & Change Log (High-Level)

- **v63** — Stripe + Mini-Course badges (“Workbook Coming Soon”)
- **v74** — All 18 workbook contents completed (prompts + prayers)
- **Legal Update Dec 11, 2025**  
  - AI Voice disclosure  
  - Strengthened faith-based + professional care language  
  - Privacy & Terms pages wired to master doc

(For detailed change history, see Git commits.)
