# HubSpot Mini-Courses Email Sequences
## Lead Nurture + Customer Purchase Flows

**DO NOT BUILD YET** - Documentation only per instructions
**Purpose:** Define email automation for 18 Root-Cause Recovery Mini-Courses

---

## 📊 TWO EMAIL ROUTES

### Route 1: **Lead Nurture** (Non-Purchase)
Person expressed interest but hasn't purchased yet

### Route 2: **Customer Purchase** (Post-Stripe)
Person completed Stripe checkout for $49 course

---

## 🔵 ROUTE 1: LEAD NURTURE SEQUENCE

### Trigger:
- Form submission on mini-course landing page
- Interest expressed (clicked "Learn More")
- Downloaded workbook preview
- **NOT** purchased yet

### Sequence Length: 5 Days

---

### **Email 1: Welcome + Course Overview**
**Send:** Immediately after form submission
**Subject:** "Your First Step Toward [Topic] Healing"

**Content:**
```
Hi {{contact.firstname}},

Thank you for your interest in [Course Name].

Many people struggle with [pain point], and you're not alone. This 30-minute course is designed to help you:

✅ Understand the spiritual and emotional roots of [topic]
✅ Break free from [specific struggle]
✅ Apply practical tools through a guided workbook
✅ Experience real breakthrough, not just coping

**What's Included:**
- 30-minute cinematic teaching
- Faith-based approach with practical application
- Downloadable workbook with reflection prompts
- Lifetime access
- $49 one-time payment

[CTA Button: Enroll Now — $49]

This is more than education—it's transformation.

Blessings,
The Rise to Thrive Academy Team

P.S. Preview the workbook here: [Link]
```

---

### **Email 2: Testimonial + Key Insight**
**Send:** Day 2 (24 hours after Email 1)
**Subject:** "How [Name] Found Freedom from [Topic]"

**Content:**
```
Hi {{contact.firstname}},

Yesterday I shared about our [Course Name] course. Today, I want you to hear from someone who's walked this path.

[Testimonial Block]
"This course gave me tools I never knew existed. For the first time in years, I feel hope and clarity."
— Sarah M., Entrepreneur

Here's one key insight from the course:

[Pain point] isn't just about behavior—it's about the spiritual and emotional roots beneath it. Many clinical approaches teach coping skills, but never touch the lie at the root. In this course, we help you expose those roots and invite God to heal what no generic method can reach.

Our coaching team has walked through deep [topic] themselves, and knows how hard it is to believe healing is possible.

[CTA Button: Enroll Now — $49]

You deserve more than survival. You deserve breakthrough.

Blessings,
Torah & The Rise to Thrive Academy Team
```

---

### **Email 3: Workbook Preview**
**Send:** Day 3 (48 hours after Email 1)
**Subject:** "Inside the Workbook: [Topic] Reflection Prompts"

**Content:**
```
Hi {{contact.firstname}},

The workbook is one of the most powerful parts of the course.

While the 30-minute video teaches the framework, the workbook is where transformation happens. Here's a preview of what you'll work through:

📝 Section 1: Naming What You're Carrying
📝 Section 2: Replacing Lies With God's Truth
📝 Section 3: Walking It Out With God

Each section includes reflection prompts designed to help you process your story, not just consume information.

**Privacy Note:**
Your workbook responses are stored ONLY on your device. We never see, store, or transmit your answers to our servers. For permanent backup, you can download or print your completed workbook.

[CTA Button: Enroll Now & Start Healing — $49]

[Preview Link: See Sample Workbook]

This is your healing journey. You're in control.

Blessings,
The Rise to Thrive Academy Team
```

---

### **Email 4: FAQ + Objections**
**Send:** Day 4 (72 hours after Email 1)
**Subject:** "Common Questions About [Course Name]"

**Content:**
```
Hi {{contact.firstname}},

I know you might have questions. Here are the most common ones:

**Q: Is this therapy or medical treatment?**
A: No. This is faith-based education and coaching, not medical, mental health, legal, or financial advice. If you're in crisis, please contact a licensed professional or call 988.

**Q: What if I've tried everything and nothing worked?**
A: Clinical methods often stabilize symptoms but don't always heal the root. This course addresses the spiritual and emotional foundations beneath your struggle.

**Q: How long do I have access?**
A: Lifetime. Watch as many times as you need.

**Q: What if I don't like it?**
A: We're confident this will help, but if not, email support@risetothrive-academy.com within 7 days for a full refund.

**Q: Is this for me if I'm not religious?**
A: This is a faith-based program rooted in Christian principles. If you're open to a biblical perspective on healing, you'll benefit.

[CTA Button: Enroll Now — $49]

Still have questions? Reply to this email.

Blessings,
The Rise to Thrive Academy Team
```

---

### **Email 5: Last Chance + Urgency**
**Send:** Day 5 (96 hours after Email 1)
**Subject:** "Last call: Don't let [topic] steal another day"

**Content:**
```
Hi {{contact.firstname}},

This is my last email about [Course Name].

I don't want to be pushy, but I also don't want you to miss this opportunity.

[Pain point] doesn't just hurt your emotions—it affects your relationships, decisions, and calling. The longer it goes unaddressed, the deeper the roots grow.

This course won't solve everything overnight, but it will give you tools, clarity, and hope you didn't have before.

**What You Get:**
✅ 30-minute cinematic teaching
✅ Guided workbook with reflection prompts
✅ Lifetime access
✅ Faith-based, root-cause approach
✅ $49 one-time payment

[CTA Button: Enroll Now — $49]

If now isn't the right time, that's okay. But if you feel that nudge to take action, don't ignore it.

You were made for more than survival. You were made to thrive.

Blessings,
Torah & The Rise to Thrive Academy Team

P.S. If you're in crisis, please call 988 or contact a licensed professional immediately. This course is educational, not emergency care.
```

---

## 🟢 ROUTE 2: CUSTOMER PURCHASE SEQUENCE

### Trigger:
- Stripe webhook: `checkout.session.completed`
- $49 payment confirmed
- Lifecycle stage = Customer

### Sequence Length: 3 Emails

---

### **Email 1: Purchase Confirmation + Access**
**Send:** Immediately after Stripe webhook
**Subject:** "[Course Name] — Your Access Link Inside"

**Content:**
```
Hi {{contact.firstname}},

🎉 Welcome to [Course Name]!

Your purchase is confirmed. Here's everything you need to get started:

**📺 Watch Your Course:**
[Login to Course Portal Button]

**📥 Download Your Workbook:**
[Download Workbook Button]

**Course Access Details:**
- Username: {{contact.email}}
- Password: [Login via magic link OR set password]
- Access: Lifetime
- Support: support@risetothrive-academy.com

**What to Do Next:**
1. Watch the 30-minute video at your own pace
2. Complete the workbook as you go (saved locally on your device)
3. Revisit the course as many times as you need

**Your Privacy:**
Your workbook responses are stored ONLY on your device. We never see, store, or transmit your answers to our servers. Download or print your workbook for permanent backup.

[Course Portal Access Button]

We're honored to walk with you on this healing journey.

Blessings,
The Rise to Thrive Academy Team

---

**Important:**
This is faith-based education and coaching, not medical, mental health, legal, or financial advice. If you're in crisis, please call 988 or contact a licensed professional.

Rise to Thrive Academy
5830 E 2nd St, Ste 7000 #30207
Casper, Wyoming 82609 USA
```

---

### **Email 2: Check-In + Encouragement**
**Send:** 3 Days After Purchase
**Subject:** "How's it going with [Course Name]?"

**Content:**
```
Hi {{contact.firstname}},

I wanted to check in and see how you're doing with [Course Name].

Have you had a chance to watch the video or start the workbook?

**Here are some tips:**
- Don't rush. This isn't about perfection—it's about progress.
- Be honest in your workbook responses. No one else will see them.
- Revisit the course multiple times. Healing happens in layers.
- Reach out if you need support: support@risetothrive-academy.com

**If you haven't started yet:**
That's okay. Life gets busy. Your access is lifetime, so start when you're ready.

[Access Course Portal Button]

You're not alone in this.

Blessings,
The Rise to Thrive Academy Team

P.S. Curious about other courses? Explore our full library: [Link to All 18 Mini-Courses]
```

---

### **Email 3: Testimonial Request + Upsell**
**Send:** 7 Days After Purchase
**Subject:** "We'd love to hear your story"

**Content:**
```
Hi {{contact.firstname}},

It's been a week since you enrolled in [Course Name]. We'd love to hear how it's going.

**Quick Survey (2 minutes):**
[Survey Link]
- Did the course help you?
- What was most valuable?
- Would you recommend it to others?

Your feedback helps us serve future students better.

**Share Your Story:**
If this course made a difference in your life, we'd be honored to feature your testimonial (with your permission). Reply to this email if you're open to sharing.

**Explore More:**
If you found this course helpful, check out our other root-cause recovery topics:

[Display 3 Recommended Courses Based on Topic]

Each course is $49 with lifetime access.

[Browse All 18 Courses Button]

Thank you for trusting us with your healing journey.

Blessings,
Torah & The Rise to Thrive Academy Team
```

---

## 📋 EMAIL TEMPLATE CHECKLIST

### Both Routes Must Include:
- ✅ Faith-based language
- ✅ Crisis hotline (988) in all emails
- ✅ Legal disclaimer: "Not medical/mental health care"
- ✅ Privacy note about workbook storage
- ✅ Support email: support@risetothrive-academy.com
- ✅ Physical address (Casper, Wyoming)
- ✅ Unsubscribe link (HubSpot auto-adds)

---

## 🎨 EMAIL DESIGN NOTES

### Brand Colors:
- **Teal:** #0097B2
- **Gold:** #DB910F
- **Dark Slate:** #0f172a

### Tone:
- Compassionate, not pushy
- Faith-centered, not preachy
- Professional, not clinical
- Personal, not robotic

### CTAs:
- **Lead Nurture:** "Enroll Now — $49"
- **Customer:** "Access Course Portal"

---

## 🔗 HUBSPOT SETUP REQUIREMENTS

### Lead Nurture Workflow:
1. Trigger: Form submission on `/minicourses/[slug]`
2. Delay between emails: 24 hours
3. Unenroll on purchase (Stripe webhook)
4. Unenroll on unsubscribe

### Customer Purchase Workflow:
1. Trigger: Stripe webhook `checkout.session.completed`
2. Delay Email 2: 3 days
3. Delay Email 3: 7 days
4. No re-enrollment (one-time sequence)

---

## 📊 TRACKING & ANALYTICS

### Lead Nurture Metrics:
- Email open rate
- Click-through rate
- Conversion rate (lead → customer)
- Unsubscribe rate

### Customer Purchase Metrics:
- Course completion rate (self-reported survey)
- Testimonial submission rate
- Upsell conversion rate (additional courses)
- Support ticket volume

---

## ⚠️ DO NOT BUILD YET

Per instructions:
- **DO NOT** create email templates in HubSpot yet
- **DO NOT** activate workflows yet
- **ONLY** confirm:
  - Lead pipeline exists
  - Customer pipeline exists
  - Stripe → HubSpot purchase event fires correctly

---

## 🔗 RELATED DOCS

- **Setup Guide:** `/website/HUBSPOT-MINICOURSES-SETUP.md`
- **Foundation Emails:** `/website/HUBSPOT-SETUP-GUIDE.md` (reference pattern)
- **Stripe Integration:** `/website/src/app/api/create-checkout/route.ts`
- **Legal Disclosures:** `/website/disclosures/universal-legal-disclosures.md`

---

**Last Updated:** December 14, 2025
**Status:** Documentation complete, DO NOT BUILD YET
