# ⚡ HubSpot Foundation Form - Quick Start Guide

## 🎯 Goal
Get the Foundation Course Lead Form live and capturing leads in HubSpot in **30 minutes or less**.

---

## ✅ 5-Step Quick Setup

### **STEP 1: Get Your HubSpot IDs (5 mins)**

1. **Portal ID:**
   - Log into HubSpot
   - Go to **Settings** (⚙️ icon) → **Account Setup** → **Account Defaults**
   - Copy your **Hub ID** (e.g., `12345678`)

2. **Create Form and Get Form GUID:**
   - Go to **Marketing** → **Lead Capture** → **Forms**
   - Click **"Create form"** → **"Embedded form"**
   - Name it: **"Foundation Course – Primary Lead Form"**
   - Add these fields (all required):
     - First Name
     - Last Name
     - Email
     - Phone Number
     - Country (dropdown)
   - Add consent checkbox with text:
     > "I understand this is a faith-based educational and coaching program and not medical, mental health, legal, or financial advice. I agree to the Universal Legal Disclosures."
   - Save the form
   - Copy the **Form GUID** from the URL (looks like: `abc-123-def-456`)

---

### **STEP 2: Add Environment Variables (2 mins)**

Create a `.env.local` file in the website directory:

```bash
cd academy-hub/website
touch .env.local
```

Add these lines (replace with your actual values):

```bash
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=12345678
NEXT_PUBLIC_HUBSPOT_FOUNDATION_FORM_ID=abc-123-def-456
```

---

### **STEP 3: Configure Form Actions in HubSpot (5 mins)**

In your HubSpot form:

1. Go to **Options** → **Form Actions**
2. Add these property values on submission:
   - `lifecyclestage` = `lead`
   - `program_interest` = `foundation`
   - `source` = `website_form`

3. Set redirect URL:
   - `https://risetothrive-academy.com/foundation/thank-you`

4. **Publish** the form

---

### **STEP 4: Test the Form (5 mins)**

1. **Start dev server:**
   ```bash
   cd academy-hub/website
   bun run dev
   ```

2. **Visit the form:**
   - Go to: `http://localhost:3000/foundation/apply`

3. **Submit a test:**
   - Fill out all required fields
   - Check the consent box
   - Click submit

4. **Verify:**
   - ✅ Redirects to `/foundation/thank-you`
   - ✅ Contact created in HubSpot
   - ✅ Properties are set correctly

---

### **STEP 5: Deploy to Netlify (10 mins)**

1. **Add environment variables in Netlify:**
   - Go to Netlify dashboard → **Site settings** → **Environment variables**
   - Add:
     - `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` = `your_portal_id`
     - `NEXT_PUBLIC_HUBSPOT_FOUNDATION_FORM_ID` = `your_form_guid`

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add HubSpot Foundation lead form"
   git push
   ```

3. **Wait for Netlify deploy** (2-3 mins)

4. **Test live form:**
   - Visit: `https://risetothrive-academy.com/foundation/apply`
   - Submit test form
   - Verify it works

---

## 🎉 You're Live!

Your Foundation Course Lead Form is now:
- ✅ Capturing leads
- ✅ Storing data in HubSpot
- ✅ Legally compliant
- ✅ Auto-redirecting to thank you page

---

## 📍 Form URLs

**Dev (local):**
- Form: http://localhost:3000/foundation/apply
- Thank You: http://localhost:3000/foundation/thank-you

**Production:**
- Form: https://risetothrive-academy.com/foundation/apply
- Thank You: https://risetothrive-academy.com/foundation/thank-you

---

## 🔄 Next Steps (Optional)

### Add Automation (10 mins)
1. Create welcome email in HubSpot
2. Create workflow to send email on form submission
3. Add contact to nurture list

👉 **See full instructions:** `HUBSPOT-SETUP-GUIDE.md`

---

## 🆘 Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify environment variables are correct
- Check HubSpot form GUID is exact match

**Contact not in HubSpot?**
- Check form submission logs in HubSpot
- Verify Portal ID is correct
- Check CORS settings

**Need more help?**
- See: `HUBSPOT-SETUP-GUIDE.md` (full documentation)
- Contact: support@risetothrive-academy.com

---

## ✅ Quick Checklist

Before going live, verify:
- [ ] Portal ID added to `.env.local`
- [ ] Form GUID added to `.env.local`
- [ ] Form tested locally
- [ ] Contact created in HubSpot
- [ ] Properties set correctly
- [ ] Environment variables added to Netlify
- [ ] Production form tested
- [ ] Thank you page displays correctly

---

**Total Setup Time:** ~30 minutes
**You're ready to capture leads! 🚀**
