# Mastermind Track — Setup & Ops

## Overview
Direct-purchase flow via Stripe Payment Link. On success, HubSpot sets:
- `course_slug` = `mastermind`
- `paid` = `true`

## Env

NEXT_PUBLIC_MASTERMIND_CHECKOUT_URL=https://buy.stripe.com/REPLACE_ME

## HubSpot Properties (ensure they exist)
- `course_slug` (text)
- `paid` (boolean)
- (optional) `program` (text)
- (optional) `mastermind.portal_url`, `mastermind.slack_url`, `mastermind.calendar_url` (text)

## Workflow: Paid – Mastermind
**Trigger**
- `course_slug` equals `mastermind`
- AND `paid` equals `true`

**Actions**
1. Send email → **Mastermind Welcome**
2. Add to list → **Paid – Mastermind**
3. (optional) Set property `program` = `mastermind_active`
4. (optional) Send internal Slack/webhook

## Email: Mastermind Welcome (paste into HubSpot)
**Subject:** Welcome to Mastermind — Your Access & Next Steps

**Body (HTML/Markdown):**
Hi {{ contact.firstname || 'there' }},

Welcome to the Mastermind! I’m thrilled you’re here.

**Start here**
1) Portal: {{ personalization_token('mastermind.portal_url','<portal link>') }}
2) Community (Slack): {{ personalization_token('mastermind.slack_url','<invite link>') }}
3) Live Calls: {{ personalization_token('mastermind.calendar_url','<calendar link>') }}

**What to expect**
- Weekly live cohort with hot seats & coaching  
- Biblical frameworks to build resilient thought patterns  
- Accountability and tools to keep momentum

If anything doesn’t work, reply and we’ll help right away.

 Rise To Thrive Hub LLC

## QA Checklist
- Visit `/mastermind` in incognito → CTA opens Stripe Payment Link
- Run a $1 test payment → In HubSpot, confirm `course_slug=mastermind`, `paid=true`
- Confirm **Mastermind Welcome** email delivered + links open
- Try an abandoned checkout with email captured → reminder flow fires
