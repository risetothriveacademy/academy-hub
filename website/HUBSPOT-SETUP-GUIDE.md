# 📋 HubSpot Foundation Course Lead Form Setup Guide

## 🎯 Overview

This guide will help you configure HubSpot to capture compliant leads for the Foundation Course with proper tagging, automation, and legal coverage.

---

## 📝 STEP 1: Create Custom Properties in HubSpot

Before creating the form, set up these custom contact properties in HubSpot:

### Navigate to Settings → Properties → Contact Properties

Create the following custom properties:

#### 1. **Program Interest**
- **Property name:** `program_interest`
- **Field type:** Single-line text
- **Group:** Contact Information

#### 2. **Source**
- **Property name:** `source`
- **Field type:** Single-line text
- **Group:** Contact Information

#### 3. **Compliance Acknowledged**
- **Property name:** `compliance_acknowledged`
- **Field type:** Single checkbox
- **Group:** Legal Information

#### 4. **How Did You Hear About Us**
- **Property name:** `how_did_you_hear_about_us`
- **Field type:** Dropdown select
- **Options:**
  - Facebook Ad
  - Instagram Ad
  - Google Search
  - Friend/Family Referral
  - YouTube
  - Podcast
  - Other

#### 5. **Primary Support Area**
- **Property name:** `primary_support_area`
- **Field type:** Multiple checkboxes
- **Options:**
  - Trauma & PTSD
  - Anxiety & Fear
  - Depression & Hopelessness
  - Grief & Loss
  - Shame & Guilt
  - Financial Crisis
  - Identity & Worth
  - Boundaries & Relationships
  - Other

---

## 📋 STEP 2: Create the HubSpot Form

### 2A. Create New Form
1. Go to **Marketing** → **Lead Capture** → **Forms**
2. Click **"Create form"**
3. Select **"Embedded form"** (not popup)
4. Name: **"Foundation Course – Primary Lead Form"**

### 2B. Add Form Fields (in this order)

**Required Fields:**
1. **First Name** (firstname) - Required
2. **Last Name** (lastname) - Required
3. **Email** (email) - Required
4. **Phone Number** (phone) - Required
5. **Country** (country) - Required, Dropdown with options:
   - United States
   - Canada
   - United Kingdom
   - Australia
   - New Zealand
   - Other

**Optional Fields:**
6. **How did you hear about us?** (how_did_you_hear_about_us) - Optional, Dropdown
7. **Primary area you are seeking support in** (primary_support_area) - Optional, Checkboxes

**Consent/Legal Field:**
8. **Consent Checkbox** - Required
   - **Label text:** "I understand this is a faith-based educational and coaching program and not medical, mental health, legal, or financial advice. I agree to the Universal Legal Disclosures."
   - **Link text:** Make "Universal Legal Disclosures" a hyperlink to: `https://risetothrive-academy.com/disclosures/universal-legal-disclosures`
   - **Required:** Yes

### 2C. Form Options
- **Language:** English
- **Form style:** Use your brand colors (Teal: #0097B2, Gold: #DB910F)
- **Button text:** "Submit & Start Your Journey"

### 2D. What Happens After Submission

**Option 1: Redirect to Thank You Page (Recommended)**
- **Action:** Redirect to another page
- **URL:** `https://risetothrive-academy.com/foundation/thank-you`

**Option 2: Inline Message**
- **Action:** Display inline thank you message
- **Message:** "Thank you for taking the first step. Please check your email for next steps."

---

## 🏷️ STEP 3: Set Up Form Actions (Auto-Tagging)

In the form editor, go to **Options** → **Form Actions**

### Set Property Values on Submission:

1. **Lifecycle Stage**
   - Property: `lifecyclestage`
   - Value: `lead`

2. **Program Interest**
   - Property: `program_interest`
   - Value: `foundation`

3. **Source**
   - Property: `source`
   - Value: `website_form`

4. **Compliance Acknowledged**
   - Property: `compliance_acknowledged`
   - Value: `true`

---

## 🔄 STEP 4: Create Workflow (Automation)

### 4A. Create New Workflow
1. Go to **Automation** → **Workflows**
2. Click **"Create workflow"**
3. Select **"Contact-based"**
4. Name: **"Foundation Lead - Welcome Sequence"**

### 4B. Set Enrollment Trigger
**Trigger:** Form submission
- **Form:** Foundation Course – Primary Lead Form
- **Re-enrollment:** No (contacts can only enroll once)

### 4C. Add Workflow Actions

**Action 1: Send Confirmation Email**
- Wait: 0 minutes
- Action: Send email
- Email name: "Foundation Lead - Welcome Email" (create this email template - see Step 5)

**Action 2: Add to Foundation Nurture List**
- Wait: 0 minutes
- Action: Add to static list
- List: "Foundation Lead Nurture" (create this list)

**Action 3: Apply Tag**
- Wait: 0 minutes
- Action: Set contact property
- Property: Add tag "foundation_lead"

**Action 4: Internal Notification**
- Wait: 0 minutes
- Action: Send internal email notification
- To: Torah / Admin email
- Subject: "New Foundation Lead: [First Name] [Last Name]"
- Body: Include contact details and support area

### 4D. Activate Workflow
- Review all actions
- Click **"Review and publish"**
- Turn workflow **ON**

---

## 📧 STEP 5: Create Confirmation Email Template

### 5A. Create Email
1. Go to **Marketing** → **Email**
2. Click **"Create email"**
3. Select **"Regular email"**
4. Name: **"Foundation Lead - Welcome Email"**

### 5B. Email Content

**Subject Line:**
```
Welcome — Your First Step Toward Healing & Clarity
```

**From Name:** Rise to Thrive Academy

**From Email:** support@risetothrive-academy.com

**Email Body (Simple Template):**

```html
Hi {{contact.firstname}},

Thank you for reaching out to Rise to Thrive Academy. We're honored to walk alongside you on your healing journey.

This program is designed to support you through faith-based education and practical tools. Please remember this does not replace professional medical, mental health, legal, or financial care.

You can review our full legal information here:
[Universal Legal Disclosures](https://risetothrive-academy.com/disclosures/universal-legal-disclosures)

**What Happens Next?**
1. Check your inbox for additional information about the Foundation Course
2. A member of our team will reach out within 24-48 hours
3. In the meantime, feel free to explore our resources at risetothrive-academy.com

If you have any questions, please don't hesitate to reach out to us at support@risetothrive-academy.com.

Blessings,
The Rise to Thrive Academy Team

---

**Important:** If you are in crisis, please contact a licensed professional or call the National Suicide Prevention Lifeline at 988.

Rise to Thrive Academy
5830 E 2nd St, Ste 7000 #30207
Casper, Wyoming 82609 USA
```

### 5C. Email Settings
- **Save email as template:** Yes
- **Email type:** Automated
- **Activate:** Yes

---

## 🌐 STEP 6: Embed Form on Website

### Option A: Using HubSpot Embed Code (Recommended)

1. In HubSpot, go to your form
2. Click **"Share"** → **"Embed"**
3. Copy the embed code
4. The form component is already built in the website at:
   - `academy-hub/website/src/components/FoundationLeadForm.tsx`

### Option B: Using HubSpot API (Already Implemented)

The form component uses the HubSpot Forms API. You need to:

1. **Get your HubSpot Portal ID:**
   - Go to HubSpot Settings → Account Setup → Account Defaults
   - Copy your **Hub ID** (e.g., `12345678`)

2. **Get your Form GUID:**
   - Go to your form in HubSpot
   - Click on the form name
   - The URL will look like: `https://app.hubspot.com/forms/12345678/editor/abc-123-def-456/edit`
   - Copy the GUID (the part after `/editor/`, e.g., `abc-123-def-456`)

3. **Add to Environment Variables:**

Create a `.env.local` file in the website directory:

```bash
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=12345678
NEXT_PUBLIC_HUBSPOT_FOUNDATION_FORM_ID=abc-123-def-456
```

4. **For Netlify Deployment:**

Add these environment variables in Netlify:
- Go to **Site settings** → **Environment variables**
- Add:
  - `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` = your portal ID
  - `NEXT_PUBLIC_HUBSPOT_FOUNDATION_FORM_ID` = your form GUID

---

## 📍 STEP 7: Website Placement

The form is already embedded on:

1. **Primary Location:**
   - `/foundation/apply` - Dedicated form page

2. **Optional Future Placements:**
   - Homepage CTA section (add later if needed)
   - Footer modal (add later if needed)

---

## ✅ STEP 8: Testing Checklist

Before going live, complete these tests:

### Pre-Launch Testing:
- [ ] HubSpot form is created with all fields
- [ ] Custom properties are set up correctly
- [ ] Legal consent checkbox is required
- [ ] Legal disclosures link points to correct URL
- [ ] Form actions are configured (lifecycle stage, program_interest, etc.)
- [ ] Workflow is created and activated
- [ ] Confirmation email template is created and looks correct
- [ ] Environment variables are added to `.env.local`

### Test Submission:
1. [ ] Submit a test form on the website
2. [ ] Verify form submits successfully
3. [ ] Check HubSpot contact record was created
4. [ ] Verify all properties are set correctly:
   - [ ] lifecycle_stage = lead
   - [ ] program_interest = foundation
   - [ ] source = website_form
   - [ ] compliance_acknowledged = true
5. [ ] Check workflow was triggered
6. [ ] Verify confirmation email was received
7. [ ] Check contact was added to nurture list
8. [ ] Verify internal notification was sent to team
9. [ ] Check thank you page displays correctly

### Post-Launch Monitoring:
- [ ] Monitor first 10 submissions for errors
- [ ] Check email deliverability
- [ ] Verify all workflow actions execute correctly
- [ ] Monitor bounce rate and form abandonment

---

## 🎨 Form Styling & Branding

The form component is already styled with your brand colors:
- **Teal:** #0097B2
- **Gold:** #DB910F
- **Dark Slate:** #0f172a

The form matches the dark theme of the Academy Hub website.

---

## 📊 Reporting & Analytics

### HubSpot Reports to Create:

1. **Form Submissions Report**
   - Report type: Form submissions
   - Form: Foundation Course – Primary Lead Form
   - Date range: Last 30 days

2. **Lead Source Report**
   - Report type: Contacts by source
   - Filter: program_interest = foundation
   - Group by: how_did_you_hear_about_us

3. **Conversion Funnel**
   - Stage 1: Form submission
   - Stage 2: Nurture sequence opened
   - Stage 3: Course purchase

---

## 🔒 Compliance & Legal Notes

### GDPR & Privacy Compliance:
- ✅ Consent checkbox is required
- ✅ Link to legal disclosures is provided
- ✅ Privacy Policy is accessible
- ✅ Data collection is transparent

### Legal Protection:
- ✅ Disclaimer clearly states program is not medical/mental health care
- ✅ Users must acknowledge legal disclosures before submission
- ✅ Universal Legal Disclosures document is comprehensive

### Crisis Protocol:
- All confirmation emails include crisis hotline information (988)
- Legal disclosures clarify program limitations
- Support email is monitored for urgent requests

---

## 🆘 Troubleshooting

### Form Not Submitting
- Check browser console for errors
- Verify HubSpot Portal ID and Form GUID are correct
- Check CORS settings in HubSpot
- Ensure all required fields are filled

### Contacts Not Creating in HubSpot
- Verify form GUID is correct
- Check HubSpot API status
- Review form submission logs in HubSpot

### Workflow Not Triggering
- Check workflow is activated
- Verify enrollment criteria match
- Check contact meets enrollment criteria
- Review workflow history

### Emails Not Sending
- Verify email template is activated
- Check email sending domain is verified
- Review email logs in HubSpot
- Check spam folder

---

## 📞 Support

For HubSpot-specific questions:
- HubSpot Support: https://help.hubspot.com
- HubSpot Community: https://community.hubspot.com

For website/technical questions:
- Contact: support@risetothrive-academy.com

---

## 🎉 Summary

Once complete, your Foundation Course Lead Form will:

✅ Capture all required lead information
✅ Include legal compliance checkbox
✅ Auto-tag contacts with program interest and source
✅ Send automated welcome email
✅ Add contacts to nurture sequence
✅ Notify internal team of new leads
✅ Redirect to branded thank you page
✅ Maintain full legal protection

**Estimated Setup Time:** 45-60 minutes

**Go live when all testing is complete!**

---

END OF GUIDE
