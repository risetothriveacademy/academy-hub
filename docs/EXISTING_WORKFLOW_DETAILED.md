# Existing Ecosystem Workflow — As Implemented (No Changes)

This document reflects your current end‑to‑end flow from the first ad click through the upsell sequence, using the exact order and URLs you provided.

## Flow Breakdown
1. Ads Layer → Facebook, Instagram, YouTube, Google Ads
   - CTA: “Suffer No More — Start Your Healing Journey”
   - Links to the Foundation Course landing page.

2. Landing Page (Offer Video A)
   - Host: `https://foundation.risetothrive-academy.com/offer-video-a`
   - Contains intro video + benefits + Stripe checkout
   - Checkout → Foundation Course ($99)

3. Checkout & Email Automation (GHL)
   - Stripe success triggers an automated email
   - Email subject: “Your Day 1 is Ready — Begin Your Healing Journey”
   - Email link → `https://same-0erqnwjk0zo-latest.netlify.app/foundation/start`

4. Foundation Course Portal (Netlify)
   - `/foundation/start` → `/foundation-portal?unlock=day1`
   - Includes Day 1–5 modules + video + workbook per day
   - Unlock logic tied to workbook submission or “Mark Complete”

5. Workbook Submission → Unlock Automation
   - Triggers GHL tags (e.g., `foundation_day1_complete`, etc.)
   - Unlocks next day automatically

6. Upsell Automation
   - After Day 5 completion, user receives:
     - Invitation to 15 Mini-Courses
     - Mastermind Program
     - Advanced Mastery Certification (Retreat Pathway)

7. Repository / Deployment Layer
   - GitHub backup: `academy-hub/foundation`
   - Deployed via Netlify — routing handled in `_redirects` and `netlify.toml`

---

## Mermaid Diagram (Current Live Flow)
```mermaid
flowchart TD
  %% Ads
  A[Ads Layer\nFacebook • Instagram • YouTube • Google] -->|CTA: “Suffer No More — Start Your Healing Journey”| B

  %% Landing + Checkout
  B[Landing: Offer Video A\nhttps://foundation.risetothrive-academy.com/offer-video-a] --> C[Stripe Checkout\nFoundation $99]

  %% Email + Portal
  C --> D[Email Automation (GHL)\nSubject: “Your Day 1 is Ready — Begin Your Healing Journey”]
  D --> E[Email Link\nhttps://same-0erqnwjk0zo-latest.netlify.app/foundation/start]
  E --> F[Foundation Portal\n/foundation/start → /foundation-portal?unlock=day1\nDay1–5 videos + workbooks]

  %% Unlock
  F --> G[Workbook Submit / Mark Complete\nGHL Tag: foundation_dayX_complete\nUnlock next day]

  %% Upsell
  G --> H[Upsell Sequence\n15 Mini-Courses • Mastermind • Advanced Mastery]

  %% Repo & Deploy
  subgraph Deployment
    R[GitHub backup: academy-hub/foundation]
    N[Netlify deploy\n_redirects + netlify.toml]
  end

  H --> N
  N --> R
```

Notes:
- This document is a snapshot of the current workflow. It does not propose or apply any changes.
- If a URL or path changes in the future, update this file to remain your source of truth.
