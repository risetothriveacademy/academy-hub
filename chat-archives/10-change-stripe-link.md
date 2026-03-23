# Change Stripe Link

**Status:** Archived  
**Project:** Checkout destination management  
**Tags:** #chat-archive #stripe #checkout #environment #foundation-course

## Objective
Identify and update the Stripe link connected to the Foundation Course without breaking the live flow.

## Main Discussion
- User wanted to know which Stripe code/link was active
- There had been prior attempts to swap in a new Stripe link
- Need to determine whether code changes were required or whether environment values already controlled it

## Confirmed Concern
The live environment may still be using an older Stripe URL even after a new link was created.

## Key Links Mentioned
- Promo-enabled Stripe URL:
  `https://buy.stripe.com/bJe5kF2oP3ZZ9SK4qx1Jm0m`
- Another active/live Stripe URL seen:
  `https://buy.stripe.com/fZu6oJaVlbsrd4W0ah1Jm0T`

## Best Practice
Before changing anything:
- locate live Stripe link source
- confirm whether it lives in code or environment variables
- test in production
- document final link in archive

## Next Step
Create a single source-of-truth file for all active Stripe links used across the Foundation Course and related offers.
