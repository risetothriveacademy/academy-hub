# Rise to Thrive Academy — Funnel & Domain Architecture

This repository documents the live funnels and integrations for **Rise to Thrive Academy**.

---

## ⚙️ Live Production Domains

| Section | Domain | Platform | Purpose |
|---|---|---|---|
| **Foundation Landing** | https://foundation.risetothrive-academy.com | Netlify | Public landing + offer page |
| **Checkout (Foundation)** | https://courses.risetothrive-academy.com/foundation/checkout | GoHighLevel + Stripe | Secure payment + enrollment |
| **Success Page** | https://foundation.risetothrive-academy.com/success | Netlify | Post-purchase confirmation + redirect |
| **Agency Hub (Dashboard)** | (set link here) | GoHighLevel | Destination after purchase |
| **Support** | support@risetothrive-academy.com | Google Workspace | Customer service |
| **Payments** | payments@risetothrive-academy.com | Stripe linked | Receipts & transactional emails |

---

## 🧩 Funnel Flow Overview
---

## 🚀 Deploy Guide (Foundation Landing)

**Repo:** `foundation-landing` (private)  
**Host:** Netlify (static Next.js export to `out/`)  
**Domain:** https://foundation.risetothrive-academy.com

### Update content
1. Edit copy in `src/` (pages/components) and assets in `public/`.
2. Keep CTA links pointing to:
   - Checkout: https://courses.risetothrive-academy.com/foundation/checkout
   - Success:  https://foundation.risetothrive-academy.com/success
3. Commit to `main`.

### Build & publish (automatic)
- Netlify builds on every commit.  
- Build: `npm run build && npm run export`  
- Publish dir: `out/`  
- Config: `netlify.toml`

**If deploy looks stale:** Netlify → **Deploys** → **Trigger deploy ▾** → **Clear cache and deploy site**

### DNS / SSL reference
GoDaddy DNS → CNAME `foundation` → `risetothrive-foundation.netlify.app`  
SSL: Let’s Encrypt (auto-renew)

