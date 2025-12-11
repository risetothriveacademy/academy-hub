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

(For detailed change history, see Git commits.)# 📘 Academy Hub — Master Index  
## Table of Contents

### 1. Project Overview
- 1.1 Mission & Purpose  
- 1.2 Repository Structure  
- 1.3 Technology Stack  
- 1.4 Branding Guidelines  
- 1.5 Key Platforms (GitHub, Netlify, Stripe, HubSpot)

### 2. Website Architecture
- 2.1 Next.js App Router Overview  
- 2.2 Page Structure (src/app/*)  
- 2.3 Components & Layout Logic  
- 2.4 Routing Map (Public + Protected Pages)  
- 2.5 Folders Overview (minicourses, workbook, foundation, disclosures)

### 3. Mini-Courses (18)
- 3.1 Course Index  
- 3.2 Stripe Product Mapping  
- 3.3 Workbook Linking  
- 3.4 Content Format (Learn More → Stripe Checkout → Workbook)

### 4. Workbooks (All 18 Courses)
- 4.1 Universal Workbook Template  
- 4.2 Course-Specific Content (Prompts, Scripture, Prayer)  
- 4.3 LocalStorage Autosave System  
- 4.4 Privacy & Data Security  
- 4.5 URL Structure `/workbook/[slug]`

### 5. Foundation Course Ecosystem
- 5.1 Day-1 to Day-5 Pages (portal)  
- 5.2 Video Delivery Logic  
- 5.3 Workbook Embeds vs Standalone Workbooks  
- 5.4 Unlock Logic & CRM Integration  
- 5.5 Known Issues + Revision Plan (Day 2 / Day 3 swap)

### 6. Stripe Integration
- 6.1 All Product IDs (Foundation + 18 Mini-Courses)  
- 6.2 Checkout Endpoint `/api/create-checkout`  
- 6.3 Redirect + Success Logic  
- 6.4 Pricing Standards ($49 mini-courses)  
- 6.5 Live Mode vs Test Mode Setup

### 7. Legal & Compliance
- 7.1 Universal Legal Disclosures (Master Document)  
- 7.2 Terms of Service  
- 7.3 Privacy Policy  
- 7.4 Faith-Based Coaching Disclaimer  
- 7.5 Refund Policy  
- 7.6 AI Voice Narration Disclaimer  
- 7.7 Footer Compliance Structure

### 8. CRM & Automation
- 8.1 HubSpot Form IDs  
- 8.2 Lead Capture Flows  
- 8.3 Email Automation  
- 8.4 Tagging Strategy  
- 8.5 Future Integrations (Corporate, Speaking, Book Launch)

### 9. Deployment & Hosting
- 9.1 Netlify Settings (base, build, publish)  
- 9.2 Environment Variables  
- 9.3 Auto-Deploy via GitHub  
- 9.4 Rollback Instructions  
- 9.5 Preview Deployments

### 10. Version History
- 10.1 Major Versions Summary  
- 10.2 Feature Additions  
- 10.3 Bug Fixes  
- 10.4 Notes for Future Developers  

### 11. Developer Notes (Ava + S.N)
- 11.1 Coding Conventions  
- 11.2 How to Update Workbooks  
- 11.3 How to Add New Pages  
- 11.4 How to Push to GitHub Safely  
- 11.5 How to Request Changes from Ava  

---
📘 ACADEMY HUB — MASTER INDEX
Comprehensive Overview for Developers, Assistants, and Internal Team

Version 1.0 — December 2025

Table of Contents

Project Overview

Website Architecture

Mini-Courses (18)

Workbooks (18)

Foundation Course

Stripe Integration

Legal & Compliance

CRM & Automation

Deployment & Hosting

Version History

Developer Notes

1. Project Overview
1.1 Mission & Purpose

The Academy Hub exists to deliver:

Trauma recovery

Emotional healing

Faith-based transformation

Structured courses, workbooks, and resources

1.2 Repository Structure
academy-hub/
 ├─ website/ (Next.js site)
 │   ├─ src/app/
 │   ├─ components/
 │   ├─ disclosures/
 │   ├─ minicourses/
 │   └─ workbook/
 ├─ docs/ (documentation)
 └─ README.md

1.3 Technology Stack

Next.js App Router

React

Bun package manager

Stripe Checkout

HubSpot CRM

Netlify hosting / auto-deploy

2. Website Architecture
2.1 Page Structure (key routes)

/ — Home

/minicourses

/workbook/[slug]

/foundation/day-1 … /day-5

/privacy

/terms

/disclosures/universal-legal-disclosures

2.2 Components

SiteHeader.tsx

SiteFooter.tsx

WorkbookPage.tsx

CourseCard.tsx

2.3 Layout System

Root layout handles global navigation, footer, theme, and fonts.

3. Mini-Courses (18)
3.1 Course List

All 18 mini-courses with:

title

slug

Stripe product_id

description

workbook link

3.2 Checkout Flow

Each course uses:
/api/create-checkout
Passing:

stripe_product_id

course_title

3.3 Stripe Price

All mini-courses are priced at $49 USD.

4. Workbooks (18)
4.1 Universal Template

Each workbook follows:

Scripture

Section 1 — Naming What You’re Carrying

Section 2 — Replacing Lies With God’s Truth

Section 3 — Walking It Out With God

Prayer

LocalStorage Save System

Print / Download options

4.2 Data Privacy

Workbooks store data locally only — no server storage.
This ensures confidentiality for trauma recovery.

5. Foundation Course
5.1 Structure

Day 1 → Understanding the Unseen Battle

Day 2 → Emotional Triggers / Neuroplasticity

Day 3 → Breaking Patterns

Day 4 → Emotional & Financial Recovery

Day 5 → Obstacles, Setbacks, and Amplifying Recovery

5.2 Format

Each day includes:

Video

Teaching script

Embedded workbook

Reflection questions

6. Stripe Integration
6.1 Product IDs

Mapped to:
/minicourses/page.tsx

6.2 Checkout Logic

API Route:
/src/app/api/create-checkout/route.ts

Creates Stripe checkout session with:

product ID

success & cancel URLs

price override of 4900 cents

7. Legal & Compliance
7.1 Master Legal Document

/src/app/disclosures/universal-legal-disclosures/page.tsx

Contains:

Privacy Policy

Terms of Use

Refund Policy

Faith-Based Disclaimer

Legal Protection Clauses

7.2 Footer Pages

/privacy

/terms

7.3 Required Disclaimers

AI Voice Narration

Not Medical Care

Christian Faith-Based Approach

8. CRM & Automation
8.1 HubSpot Integration

Used for:

Book funnel

Corporate outreach

Newsletter

Forms

8.2 Upcoming Integration

Foundation portal progress tracking

Lead scoring

Tagging automation

9. Deployment & Hosting
9.1 Netlify Settings

Build:

bun run build


Publish:

/website/.next


Base directory:

website/

9.2 Environment Variables

Netlify → Site Settings → Environment Variables:

STRIPE_SECRET_KEY

NEXT_PUBLIC_BASE_URL

9.3 Auto-Deploy

GitHub pushes → Netlify builds automatically.

10. Version History
v74 — Workbooks Complete

All 18 workbooks added

Full content populated

Legal pages corrected

Stripe integration stable

Future:

Day 2 / Day 3 content audit

Split nonprofit pages

11. Developer Notes (Ava + S.N)
11.1 How to Add or Update a Workbook

Modify file:

src/app/workbook/[slug]/page.tsx

11.2 How to Add a Course

Update:

src/app/minicourses/page.tsx

11.3 How to Push Safely

Commit with descriptive message

Push to main

Netlify auto-deploys

11.4 Rollback

Netlify → Deploys → "Publish previous deploy"

END OF MASTER INDEX

Maintained by Ava + Torah Mathews
Updated December 2025
