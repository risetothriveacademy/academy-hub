# Rise to Thrive — Academy Hub System Rules

## PURPOSE (READ FIRST)
This repository is the **ACADEMY HUB** for Rise to Thrive.

It is the central control layer for:
- Marketing & landing pages
- Stripe checkout & pricing
- HubSpot CRM & automation
- Authentication & routing
- Blog content
- Navigation to Course Content Portals

---

## WHAT BELONGS IN THIS REPO
✅ Marketing pages  
✅ Sales pages  
✅ Lead magnets  
✅ Stripe / HubSpot logic  
✅ Auth & user accounts  
✅ Routing to courses  
✅ SEO & analytics  

---

## WHAT DOES NOT BELONG IN THIS REPO
❌ Course videos  
❌ Lesson containers  
❌ Progress tracking UI  
❌ Workbooks  
❌ Course delivery logic  

Those belong in **Course Content Portals**.

---

## COURSE CONTENT PORTALS
Course delivery lives in **separate Netlify sites**, backed up in GitHub.

Examples:
- Foundation Course Content Portal
- Mastermind Course Content Portal (future)
- Mini-course portals (future)

Rules:
- Delivery-only
- No marketing logic
- No Stripe logic
- No HubSpot logic

---

## GOLDEN RULE
If something is:
- **Marketing / Selling / Routing** → Academy Hub
- **Teaching / Watching / Downloading** → Course Content Portal

Never mix the two.

---

## STATUS
This file is the authoritative system rulebook.
If confusion exists, this document wins.
