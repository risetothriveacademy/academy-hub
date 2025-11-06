# Stripe Products — Recovery Series

This document maps the 15 Recovery Series courses to their Stripe product configurations.

---

## Product List

All Recovery Series products are configured as **one-time payments** at **$27 USD** each.

### 1. Introduction to Recovery
- **Slug:** `recovery-introductory`
- **Stripe Product Name:** "Recovery Series: Introduction to Recovery"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-introductory/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_introductory`

### 2. Grief & Loss
- **Slug:** `recovery-grief`
- **Stripe Product Name:** "Recovery Series: Grief & Loss"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-grief/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_grief`

### 3. Fear
- **Slug:** `recovery-fear`
- **Stripe Product Name:** "Recovery Series: Fear"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-fear/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_fear`

### 4. Anxiety
- **Slug:** `recovery-anxiety`
- **Stripe Product Name:** "Recovery Series: Anxiety"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-anxiety/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_anxiety`

### 5. Depression
- **Slug:** `recovery-depression`
- **Stripe Product Name:** "Recovery Series: Depression"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-depression/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_depression`

### 6. Identity & Self-Worth
- **Slug:** `recovery-identity`
- **Stripe Product Name:** "Recovery Series: Identity & Self-Worth"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-identity/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_identity`

### 7. Forgiveness
- **Slug:** `recovery-forgiveness`
- **Stripe Product Name:** "Recovery Series: Forgiveness"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-forgiveness/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_forgiveness`

### 8. Shame & Guilt
- **Slug:** `recovery-shame`
- **Stripe Product Name:** "Recovery Series: Shame & Guilt"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-shame/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_shame`

### 9. Financial Recovery
- **Slug:** `recovery-financial`
- **Stripe Product Name:** "Recovery Series: Financial Recovery"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-financial/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_financial`

### 10. Healthy Boundaries
- **Slug:** `recovery-boundaries`
- **Stripe Product Name:** "Recovery Series: Healthy Boundaries"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-boundaries/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_boundaries`

### 11. Purpose & Calling
- **Slug:** `recovery-purpose`
- **Stripe Product Name:** "Recovery Series: Purpose & Calling"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-purpose/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_purpose`

### 12. Trauma Healing
- **Slug:** `recovery-trauma`
- **Stripe Product Name:** "Recovery Series: Trauma Healing"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-trauma/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_trauma`

### 13. Building Resilience
- **Slug:** `recovery-resilience`
- **Stripe Product Name:** "Recovery Series: Building Resilience"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-resilience/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_resilience`

### 14. Faith in Hard Times
- **Slug:** `recovery-faith`
- **Stripe Product Name:** "Recovery Series: Faith in Hard Times"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-faith/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_faith`

### 15. Restoration & Renewal
- **Slug:** `recovery-restoration`
- **Stripe Product Name:** "Recovery Series: Restoration & Renewal"
- **Price:** $27.00
- **Success URL:** `https://risetothriveacademy.com/courses/recovery-restoration/success`
- **Env Var:** `NEXT_PUBLIC_STRIPE_URL_recovery_restoration`

---

## Stripe Configuration Notes

### Payment Links
Each product should have a Stripe payment link configured with:
- **Payment method types:** Card
- **Allow promotion codes:** Yes
- **Collect shipping address:** No
- **Adjust quantity:** No (fixed at 1)

### Success URL Template
```
https://risetothriveacademy.com/courses/{slug}/success?session_id={CHECKOUT_SESSION_ID}
```

The `{CHECKOUT_SESSION_ID}` parameter is used to verify the purchase and display order details.

### Cancel URL Template
```
https://risetothriveacademy.com/courses/{slug}
```

If the customer cancels checkout, they return to the course page.

---

## Testing Checklist

Before going live:

- [ ] All 15 products created in Stripe (live mode)
- [ ] Payment links generated for each product
- [ ] Success URLs point to correct course success pages
- [ ] Test purchase completes for each product
- [ ] Receipt email sends correctly
- [ ] Environment variables updated with live payment links

---

## Bulk Import Template

For faster setup, use this CSV template to bulk import products to Stripe:

```csv
name,price,currency,success_url,cancel_url
"Recovery Series: Introduction to Recovery",27.00,USD,https://risetothriveacademy.com/courses/recovery-introductory/success,https://risetothriveacademy.com/courses/recovery-introductory
"Recovery Series: Grief & Loss",27.00,USD,https://risetothriveacademy.com/courses/recovery-grief/success,https://risetothriveacademy.com/courses/recovery-grief
"Recovery Series: Fear",27.00,USD,https://risetothriveacademy.com/courses/recovery-fear/success,https://risetothriveacademy.com/courses/recovery-fear
"Recovery Series: Anxiety",27.00,USD,https://risetothriveacademy.com/courses/recovery-anxiety/success,https://risetothriveacademy.com/courses/recovery-anxiety
"Recovery Series: Depression",27.00,USD,https://risetothriveacademy.com/courses/recovery-depression/success,https://risetothriveacademy.com/courses/recovery-depression
"Recovery Series: Identity & Self-Worth",27.00,USD,https://risetothriveacademy.com/courses/recovery-identity/success,https://risetothriveacademy.com/courses/recovery-identity
"Recovery Series: Forgiveness",27.00,USD,https://risetothriveacademy.com/courses/recovery-forgiveness/success,https://risetothriveacademy.com/courses/recovery-forgiveness
"Recovery Series: Shame & Guilt",27.00,USD,https://risetothriveacademy.com/courses/recovery-shame/success,https://risetothriveacademy.com/courses/recovery-shame
"Recovery Series: Financial Recovery",27.00,USD,https://risetothriveacademy.com/courses/recovery-financial/success,https://risetothriveacademy.com/courses/recovery-financial
"Recovery Series: Healthy Boundaries",27.00,USD,https://risetothriveacademy.com/courses/recovery-boundaries/success,https://risetothriveacademy.com/courses/recovery-boundaries
"Recovery Series: Purpose & Calling",27.00,USD,https://risetothriveacademy.com/courses/recovery-purpose/success,https://risetothriveacademy.com/courses/recovery-purpose
"Recovery Series: Trauma Healing",27.00,USD,https://risetothriveacademy.com/courses/recovery-trauma/success,https://risetothriveacademy.com/courses/recovery-trauma
"Recovery Series: Building Resilience",27.00,USD,https://risetothriveacademy.com/courses/recovery-resilience/success,https://risetothriveacademy.com/courses/recovery-resilience
"Recovery Series: Faith in Hard Times",27.00,USD,https://risetothriveacademy.com/courses/recovery-faith/success,https://risetothriveacademy.com/courses/recovery-faith
"Recovery Series: Restoration & Renewal",27.00,USD,https://risetothriveacademy.com/courses/recovery-restoration/success,https://risetothriveacademy.com/courses/recovery-restoration
```
