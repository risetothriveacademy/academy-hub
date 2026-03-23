# Launch YouTube Ads

**Status:** Active archive  
**Project:** Rise to Thrive / Foundation Course  
**Tags:** #chat-archive #youtube #ads #foundation-course #ghl #stripe #launch

## Objective
Launch YouTube ads that direct leads into the Rise to Thrive lead flow and ultimately into the Foundation Course purchase and portal access sequence.

## Funnel Path
YouTube ad  
→ lead page / video explanation page  
→ Foundation landing page  
→ Stripe checkout  
→ thank you / purchase confirmation  
→ tag added  
→ paid access email  
→ portal login access

## Key Notes
- User wanted to activate YouTube ads quickly without redoing prior work.
- Need to verify which live Stripe link is currently attached to the Foundation Course flow.
- Need to ensure the lead capture and paid-access automation are working end to end.
- User prefers robot-style, one-step-at-a-time instructions.
- Current work was delayed by lag in long chat threads.

## Important References
- Recovery explanation page referenced:
  `https://courses.risetothrive-academy.com/recovery-explanation`
- Stable deployed version repeatedly referenced in surrounding work:
  `main@6148a57`

## Main Checks
- Confirm final destination URL from YouTube ad
- Confirm lead capture form destination
- Confirm landing page CTA destination
- Confirm Stripe link in live environment
- Confirm purchase tag firing
- Confirm paid-access email firing
- Confirm portal login works

## Risks / Issues
- Chat lag slowed troubleshooting
- Potential mismatch between old and new Stripe links
- Need to avoid breaking already deployed working flow

## Next Step
Verify the exact live Stripe checkout link currently in production before changing any ad destination.
