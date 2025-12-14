# 📋 HubSpot Mini-Courses (18 Courses) Setup Guide

## 🎯 Overview

This guide configures HubSpot for the 18 Root-Cause Recovery Mini-Courses with proper lead capture, Stripe integration, and automation workflows.

---

## 📊 PIPELINES REQUIRED

### 1. **Lead Pipeline** (Non-Purchase)
For people interested but haven't purchased yet

**Stages:**
1. New Lead (form submission)
2. Engaged (opened emails)
3. Nurture (in email sequence)
4. Disqualified / Unsubscribed

### 2. **Customer Pipeline** (Post-Purchase)
For people who completed Stripe checkout

**Stages:**
1. New Customer (Stripe purchase)
2. Onboarding (access email sent)
3. Active (logged into portal)
4. Complete (finished course)

---

## 🔗 STRIPE → HUBSPOT INTEGRATION

### Purchase Event Flow:
```
User Clicks "Enroll Now — $49"
  ↓
Stripe Checkout (via API route)
  ↓
Stripe Webhook fires
  ↓
HubSpot receives purchase event
  ↓
Contact moved to "Customer" lifecycle stage
  ↓
Course access email sent
```

### Required Webhooks:
**Stripe Event:** `checkout.session.completed`
**HubSpot Action:** Update contact properties + trigger workflow

---

## 📝 CUSTOM PROPERTIES (HubSpot)

Create these contact properties:

### Course Tracking:
- `mini_courses_purchased` - Multiple checkboxes (18 options)
- `total_mini_courses_purchased` - Number
- `last_mini_course_purchased` - Single-line text
- `last_purchase_date` - Date picker
- `stripe_customer_id` - Single-line text

### Lead Source:
- `lead_source` - Dropdown (same as Foundation)
- `utm_campaign` - Single-line text
- `utm_source` - Single-line text
- `utm_medium` - Single-line text

### Course Interest:
- `interested_mini_courses` - Multiple checkboxes (18 options)

---

## 📋 WORKFLOW 1: Lead Capture (Non-Purchase)

**Name:** Mini-Course Lead - Nurture Sequence

**Trigger:** Form submission on mini-course page

**Actions:**
1. Set `lifecyclestage` = `lead`
2. Set `interested_mini_courses` = course name
3. Add to static list: "Mini-Course Leads"
4. Send welcome email
5. Enroll in 5-day nurture email sequence
6. Internal notification to team

---

## 📋 WORKFLOW 2: Stripe Purchase

**Name:** Mini-Course Purchase - Access & Onboarding

**Trigger:** Stripe webhook `checkout.session.completed`

**Actions:**
1. Set `lifecyclestage` = `customer`
2. Add course to `mini_courses_purchased`
3. Increment `total_mini_courses_purchased`
4. Set `last_mini_course_purchased` = course name
5. Set `last_purchase_date` = today
6. Send course access email with login link
7. Add to static list: "Mini-Course Customers"
8. Remove from lead nurture sequence
9. Internal notification: "New Purchase: [Course Name]"

---

## 📧 EMAIL TEMPLATES

### 1. **Lead Nurture Welcome**
**Subject:** "Your First Step Toward [Topic] Healing"
**Content:**
- Thank them for interest
- Explain what the course includes
- Link to workbook preview
- Social proof testimonial
- CTA: Enroll Now

### 2. **Purchase Confirmation & Access**
**Subject:** "[Course Name] — Your Access Link Inside"
**Content:**
- Purchase confirmation
- Login credentials / magic link
- Course access URL
- Workbook download link
- Support email
- Legal disclaimer

### 3. **Nurture Sequence (5 Days)**
- Day 1: Welcome + course overview
- Day 2: Testimonial + key insight
- Day 3: Workbook preview
- Day 4: FAQ + objections
- Day 5: Last chance + urgency

---

## 🏷️ STRIPE METADATA MAPPING

When creating Stripe checkout session, include metadata:

```javascript
metadata: {
  course_slug: "shame-guilt",
  course_title: "Stuck in Shame & Guilt",
  product_type: "mini_course",
  hubspot_contact_email: customer.email
}
```

HubSpot workflow reads this metadata to:
- Update correct course checkbox
- Send course-specific access email
- Track analytics

---

## 🔒 COMPLIANCE (Same as Foundation)

- ✅ Consent checkbox on all forms
- ✅ Link to Universal Legal Disclosures
- ✅ Crisis hotline in all emails (988)
- ✅ Clear disclaimer: Not medical/mental health care
- ✅ Privacy Policy linked

---

## 📊 REPORTING

### Dashboard Widgets:
1. **Total Mini-Course Purchases (This Month)**
2. **Revenue by Course** (which courses sell best)
3. **Lead-to-Customer Conversion Rate**
4. **Average Courses per Customer**
5. **Top Traffic Sources** (UTM analysis)

---

## 🚀 IMPLEMENTATION CHECKLIST

### HubSpot Setup:
- [ ] Create Lead Pipeline
- [ ] Create Customer Pipeline
- [ ] Create all custom properties
- [ ] Build lead nurture workflow
- [ ] Build purchase workflow
- [ ] Create email templates (7 total)
- [ ] Set up Stripe → HubSpot integration
- [ ] Configure webhooks

### Testing:
- [ ] Test form submission → lead workflow
- [ ] Test Stripe checkout → purchase workflow
- [ ] Verify email delivery
- [ ] Check contact property updates
- [ ] Confirm lifecycle stage changes
- [ ] Test course access link delivery

---

## ⚠️ DO NOT BUILD YET

Per instructions:
- **DO NOT** create email templates yet
- **DO NOT** activate workflows yet
- **ONLY** confirm pipelines exist and Stripe event fires

---

## 🔗 SAME LOGIC AS FOUNDATION

This setup mirrors the Foundation course automation:
- Same lifecycle stages
- Same webhook structure
- Same email template patterns
- Same compliance approach

**Only difference:** Multiple courses tracked per contact instead of single program.

---

END OF GUIDE
