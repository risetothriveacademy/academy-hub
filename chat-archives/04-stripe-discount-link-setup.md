# Stripe Discount Link Setup

**Status:** Archived  
**Project:** Foundation Course checkout  
**Tags:** #chat-archive #stripe #coupon #discount #checkout #foundation-course

## Objective
Set up a discounted checkout path without breaking the currently working live Foundation Course landing page.

## Main Discussion
- The Foundation Course button showed `$39`
- There were prior attempts to change checkout behavior, but deploy issues made user decide not to edit the page further at that moment
- Safer alternative discussed: create a Stripe coupon / discount instead of editing code immediately

## Important Stripe References
- Link shown with promo code option:
  `https://buy.stripe.com/bJe5kF2oP3ZZ9SK4qx1Jm0m`
- Another active Stripe link seen in Netlify environment:
  `https://buy.stripe.com/fZu6oJaVlbsrd4W0ah1Jm0T`

## Key Concern
Need to confirm which Stripe link is actually live in production before updating offers or ad destinations.

## Safer Strategy
- Do not touch working landing page first
- Check active environment variable / live checkout target
- If needed, create Stripe discount or coupon
- Test purchase flow separately

## Next Step
Audit current live Stripe URL used by the Foundation Course CTA and document whether it is old, new, discounted, or promo-enabled.
