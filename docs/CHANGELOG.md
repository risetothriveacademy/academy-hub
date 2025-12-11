# CHANGELOG  
_Tracking major updates to the Rise to Thrive Academy Hub_

---

## Version 75 — December 2025
### Documentation & Structure
- Added **ACADEMY-HUB-MASTER-INDEX.md** (full system blueprint)
- Added **CHANGELOG.md** for project version tracking
- Refined `/docs` directory with consolidated documentation

---

## Version 74 — December 2025
### Major Features
- Implemented **complete 18-course workbook system**  
  - Three-section structure per course  
  - Five prompts per section  
  - Scripture header (NLV)  
  - Closing prayer  
  - LocalStorage save, download, print  
  - Universal trauma-informed template

### Pages & Routing
- Added dynamic route: `/workbook/[slug]`
- Added server component pages & client UI for interactive journaling

### Data & Privacy
- Added privacy footer and privacy-first logic  
- NO server storage — user data remains on device

---

## Version 73 — December 2025
### Legal & Compliance Updates
- Updated **Universal Legal Disclosures** (Section 4 expanded)
- Added AI Voice Narration clause  
- Strengthened clinical disclaimers  
- Added footer links to `/privacy` and `/terms`
- Rebuilt Privacy Policy and Terms pages under App Router

---

## Version 72 — December 2025
### Stripe Integration
- Added new Stripe checkout for all 18 mini-courses  
- Normalized SKU slugs and metadata  
- Updated `/api/create-checkout` endpoint  
- Connected success and cancel routes

---

## Version 71 — December 2025
### Foundation Course Pages
- Added Day 1–5 routes under `/foundation/day-X`
- Embedded workbook content and page navigation
- Updated header/footer for consistency across Hub

---

## Version 70 — November 2025
### Initial Academy Hub Infrastructure
- Created Next.js App Router project structure
- Added homepage, mini-course listing, and navigation
- Set up Netlify + GitHub auto-deploy pipeline
- Added base Tailwind styling and dark theme
