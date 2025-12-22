# ✅ COPY–PASTE TO S.N. — "Design-Only Boundary" Message

Hi S.N., thank you for the work so far. Going forward, I'm separating responsibilities so we stop breaking deploys and losing changes.

---

## ✅ Your role is now DESIGN-ONLY

You can update:

- **Layout / spacing / typography**
- **Colors / button styles / card styles**
- **Icons / images**
- **Copy edits (text only)**
- **Section order and visual presentation**

---

## ❌ Do NOT touch any engineering / wiring

Please do not edit:

- **Stripe logic, product mappings, or checkout code**
- **HubSpot logic or workflow wiring**
- **Authentication / login / portal gating**
- **Routing, query-parameter code (`?course=`), `useSearchParams`, `<Suspense>`**
- **Anything that affects builds, environment variables, or Netlify settings**

---

## ✅ Allowed file areas

- `website/src/components/**`
- `website/src/app/**` ONLY for styling/layout (no logic changes)
- `website/public/**` (images)
- CSS/Tailwind classes only

---

## ❌ Restricted file areas (do not edit)

- `website/src/lib/**`
- `website/src/app/api/**`
- `website/src/middleware.*`
- `website/next.config.*`
- `website/netlify.toml`
- `.env*`
- Anything related to Stripe/HubSpot/auth

---

## 📝 Workflow

Before you send anything, please:

1. **List the exact files you changed**
2. **Confirm: "Design-only edits, no logic changes"**
3. **Provide screenshots if helpful**

If you think something needs engineering, just flag it and I will handle it in Codespaces.

---

Thank you — this will help us move faster and avoid regressions.

---

END OF MESSAGE
