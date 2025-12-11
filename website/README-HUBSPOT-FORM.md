# 🎯 Foundation Course Lead Form - Complete Setup & Implementation

## ✅ IMPLEMENTATION COMPLETE

The Foundation Course Lead Form has been **fully implemented** and is ready for HubSpot integration and deployment.

---

## 📦 What's Been Created

### 1. **Lead Form Component**
**File:** `src/components/FoundationLeadForm.tsx`

A fully-functional, HubSpot-integrated lead capture form with:
- ✅ All required fields (First Name, Last Name, Email, Phone, Country)
- ✅ Optional fields (How did you hear about us, Primary support area)
- ✅ Required legal consent checkbox
- ✅ Link to Universal Legal Disclosures
- ✅ HubSpot Forms API integration
- ✅ Form validation & error handling
- ✅ Professional dark theme design (Teal + Gold brand colors)
- ✅ Mobile-responsive layout

### 2. **Form Landing Page**
**URL:** `/foundation/apply`
**File:** `src/app/foundation/apply/page.tsx`

Dedicated page where the form is displayed.

### 3. **Thank You Page**
**URL:** `/foundation/thank-you`
**File:** `src/app/foundation/thank-you/page.tsx`

Professional confirmation page with:
- ✅ Success icon and confirmation message
- ✅ Clear "What Happens Next" 3-step process
- ✅ Important legal reminder with crisis hotline (988)
- ✅ Links to Foundation Course and Homepage
- ✅ Support contact information

### 4. **Legal Disclosures Page**
**URL:** `/disclosures/universal-legal-disclosures`
**File:** `src/app/disclosures/universal-legal-disclosures/page.tsx`

Comprehensive legal page displaying all 5 policy sections:
- Privacy Policy
- Terms of Use
- Refund Policy (All Sales Final)
- Faith-Based & Coaching Disclaimer
- Legal Protection Clauses

### 5. **Documentation Files**

- `HUBSPOT-SETUP-GUIDE.md` - Complete 45-60 minute setup guide
- `HUBSPOT-QUICK-START.md` - Fast 30-minute setup guide
- `FOUNDATION-FORM-SUMMARY.md` - Implementation summary
- `README-HUBSPOT-FORM.md` - This file

### 6. **Environment Configuration**
- `.env.example` - Updated with HubSpot configuration variables

### 7. **Footer Update**
- Added "Universal Legal Disclosures" link to footer

---

## 🚀 How to Set Up & Go Live

### **OPTION 1: Quick Start (30 minutes)**

Follow the **`HUBSPOT-QUICK-START.md`** guide for a streamlined setup.

**Quick Summary:**
1. Get HubSpot Portal ID and create form
2. Add environment variables to `.env.local`
3. Configure form actions in HubSpot
4. Test locally
5. Deploy to Netlify

### **OPTION 2: Full Setup (45-60 minutes)**

Follow the **`HUBSPOT-SETUP-GUIDE.md`** for complete instructions including:
- Custom HubSpot properties
- Advanced form actions
- Workflow automation
- Email templates
- Detailed testing

---

## 🔑 Environment Variables Required

Create a `.env.local` file in the `academy-hub/website` directory:

```bash
# HubSpot Configuration
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id_here
NEXT_PUBLIC_HUBSPOT_FOUNDATION_FORM_ID=your_form_guid_here
```

### How to Get These Values:

**Portal ID:**
1. Log into HubSpot
2. Go to Settings (⚙️) → Account Setup → Account Defaults
3. Copy your **Hub ID** (e.g., `12345678`)

**Form GUID:**
1. Create form in HubSpot (Marketing → Lead Capture → Forms)
2. Name it: "Foundation Course – Primary Lead Form"
3. Copy the GUID from the form URL (e.g., `abc-123-def-456`)

---

## 🧪 Testing the Form

### **Local Testing:**

1. **Start the dev server:**
   ```bash
   cd academy-hub/website
   bun run dev
   ```

2. **Visit the form:**
   ```
   http://localhost:3000/foundation/apply
   ```

3. **Test submission:**
   - Fill out all required fields
   - Check the consent checkbox
   - Submit the form

4. **Verify:**
   - Redirects to `/foundation/thank-you`
   - Contact appears in HubSpot
   - All properties are set correctly

### **Production Testing:**

After deployment to Netlify:
1. Visit: `https://risetothrive-academy.com/foundation/apply`
2. Submit a test form
3. Verify same checks as local testing

---

## 🌐 Page URLs

### Development (Local)
- **Form:** http://localhost:3000/foundation/apply
- **Thank You:** http://localhost:3000/foundation/thank-you
- **Legal Disclosures:** http://localhost:3000/disclosures/universal-legal-disclosures

### Production (Live)
- **Form:** https://risetothrive-academy.com/foundation/apply
- **Thank You:** https://risetothrive-academy.com/foundation/thank-you
- **Legal Disclosures:** https://risetothrive-academy.com/disclosures/universal-legal-disclosures

---

## 📋 Form Fields Specification

### **Required Fields:**
1. **First Name** - Text input
2. **Last Name** - Text input
3. **Email** - Email validation
4. **Phone Number** - Tel format
5. **Country** - Dropdown (US, CA, GB, AU, NZ, Other)
6. **Consent Checkbox** - Required legal agreement

### **Optional Fields:**
7. **How did you hear about us?** - Dropdown with 7 options
8. **Primary support area** - Multi-select checkboxes with 9 options

### **Auto-Set HubSpot Properties:**
- `lifecyclestage` = `lead`
- `program_interest` = `foundation`
- `source` = `website_form`
- `compliance_acknowledged` = `true`

---

## 🔒 Legal Compliance

### **Built-In Legal Protection:**
✅ Faith-based disclaimer clearly stated
✅ Not medical/mental health advice disclaimer
✅ Crisis hotline information (988) included
✅ Required consent checkbox before submission
✅ Link to comprehensive legal disclosures
✅ Privacy notice on form
✅ All sales final policy clearly stated
✅ GDPR-compliant data collection

### **Consent Checkbox Wording:**
> "I understand this is a faith-based educational and coaching program and not medical, mental health, legal, or financial advice. I agree to the Universal Legal Disclosures."

---

## 🎨 Design & Branding

**Brand Colors:**
- **Teal:** #0097B2 (primary accent)
- **Gold:** #DB910F (secondary accent)
- **Dark Slate:** #0f172a (background)

**Design Features:**
- Dark slate background with gradient overlays
- Teal/Gold gradient buttons
- Professional, warm, and trustworthy aesthetic
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions

---

## 🔄 Recommended HubSpot Workflow

**Workflow Name:** "Foundation Lead - Welcome Sequence"

**Trigger:** Form submission (Foundation Course – Primary Lead Form)

**Actions:**
1. Send confirmation email
2. Add contact to "Foundation Lead Nurture" list
3. Set contact tag "foundation_lead"
4. Send internal notification to team

**See `HUBSPOT-SETUP-GUIDE.md` for complete workflow setup instructions.**

---

## 📊 Next Steps After Setup

### **Immediate (Required):**
1. ✅ Complete HubSpot form setup
2. ✅ Add environment variables
3. ✅ Test form locally
4. ✅ Deploy to Netlify
5. ✅ Test production form

### **Short-term (Recommended):**
1. Create HubSpot workflow for automation
2. Design welcome email template
3. Set up nurture email sequence
4. Add form link to homepage hero or CTA section
5. Monitor first submissions for issues

### **Long-term (Optional):**
1. A/B test form variations
2. Add conversion tracking analytics
3. Create follow-up sequences
4. Integrate with Meta ads for attribution
5. Build out lead scoring model

---

## 🆘 Troubleshooting

### **Form Not Submitting:**
- Check browser console for errors
- Verify `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` is correct
- Verify `NEXT_PUBLIC_HUBSPOT_FOUNDATION_FORM_ID` is correct
- Check that all required fields are filled
- Ensure consent checkbox is checked

### **Contact Not Creating in HubSpot:**
- Verify form GUID is exact match
- Check HubSpot form submission logs
- Verify HubSpot API is accessible
- Check CORS settings in HubSpot

### **Redirect Not Working:**
- Verify redirect URL in HubSpot form settings
- Check that `/foundation/thank-you` page exists
- Clear browser cache and test again

### **Legal Disclosures Link Not Working:**
- Verify `/disclosures/universal-legal-disclosures` page is accessible
- Check that link in consent checkbox is correct
- Clear cache and rebuild

---

## 📞 Support & Resources

### **Documentation:**
- Quick Setup: `HUBSPOT-QUICK-START.md`
- Full Setup: `HUBSPOT-SETUP-GUIDE.md`
- Summary: `FOUNDATION-FORM-SUMMARY.md`
- This README: `README-HUBSPOT-FORM.md`

### **HubSpot Resources:**
- HubSpot Help: https://help.hubspot.com
- HubSpot Community: https://community.hubspot.com
- HubSpot Forms API: https://developers.hubspot.com/docs/api/marketing/forms

### **Contact:**
- Technical Support: support@risetothrive-academy.com

---

## ✅ Pre-Launch Checklist

Use this checklist before going live:

### **HubSpot Setup:**
- [ ] HubSpot Portal ID obtained
- [ ] HubSpot form created
- [ ] Form GUID obtained
- [ ] Custom properties created (if needed)
- [ ] Form actions configured
- [ ] Redirect URL set to `/foundation/thank-you`
- [ ] Form published in HubSpot

### **Website Setup:**
- [ ] Environment variables added to `.env.local`
- [ ] Form tested locally
- [ ] Legal disclosures page accessible
- [ ] Thank you page displays correctly
- [ ] All links working

### **Testing:**
- [ ] Test form submission locally
- [ ] Contact created in HubSpot
- [ ] All properties set correctly
- [ ] Redirects to thank you page
- [ ] Environment variables added to Netlify
- [ ] Production deployment complete
- [ ] Production form tested

### **Optional (Recommended):**
- [ ] HubSpot workflow created
- [ ] Confirmation email template created
- [ ] Nurture sequence set up
- [ ] Internal notifications configured
- [ ] Analytics tracking added

---

## 🎉 Success!

Once complete, you'll have a:
- ✅ Professional lead capture form
- ✅ Fully compliant legal setup
- ✅ Automated HubSpot integration
- ✅ Branded thank you experience
- ✅ Foundation for automated follow-up

**Ready to transform pain into power! 🚀**

---

**Last Updated:** December 9, 2025
**Version:** 1.0
**Status:** ✅ Ready for HubSpot Integration

---

## 📝 Quick Commands

```bash
# Start dev server
cd academy-hub/website
bun run dev

# Build for production
bun run build

# Check for errors
bun run lint

# View form locally
# Visit: http://localhost:3000/foundation/apply
```

---

END OF README
