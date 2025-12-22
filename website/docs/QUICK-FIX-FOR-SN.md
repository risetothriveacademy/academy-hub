# 🚨 QUICK FIX CARD — For S.N.

**Date:** December 14, 2025
**Issues:** SSL Error, Deploy Failed, Stripe Not Loading

---

## 🔴 ISSUE 1: SSL / "Not Private" Error

**ONE-LINE FIX:**
> "Custom domain SSL is failing because Netlify shows Pending DNS verification. Please fix DNS at registrar so BOTH apex + www point to the Netlify site academy-hub-masterfile.netlify.app per Netlify's required records, remove conflicting A/CNAME records, then re-verify in Netlify."

**Quick Steps:**
1. Login to GoDaddy (or domain registrar)
2. Go to DNS settings for `risetothrive-hub.com`
3. Delete old A records
4. Add Netlify's 4 A records (get from Netlify → Domain management → Check DNS)
5. Add CNAME: `www` → `academy-hub-masterfile.netlify.app`
6. Wait 10-15 minutes
7. Go back to Netlify → Verify DNS
8. Wait for SSL to provision (another 10 minutes)

**Expected Result:**
- ✅ DNS configured
- ✅ HTTPS enabled
- `https://risetothrive-hub.com` loads without error

---

## 🔴 ISSUE 2: Netlify Deploy Failed

**ONE-LINE FIX:**
> "Netlify production deploy is failing (build exit code 2). Please open the latest failed deploy → copy/paste the FIRST real error line from the build log, fix the repo, and re-deploy. Production is stuck on last successful deploy."

**Quick Steps:**
1. Go to Netlify → **Deploys** tab
2. Click on latest **"Failed"** deploy (red X)
3. Scroll through build log → Find FIRST error line
4. **COPY AND PASTE THE ERROR** (send to me or debug yourself)
5. Fix the code locally
6. Commit and push to GitHub main
7. Netlify will auto-deploy

**Common Errors:**
- **TypeScript error:** Fix the type issue in the file mentioned
- **Missing dependency:** Run `bun add <package-name>`
- **Environment variable:** Add to Netlify (see Issue 3 below)

**Expected Result:**
- ✅ Published (green checkmark)
- Latest code live on site

---

## 🔴 ISSUE 3: Stripe Buttons Not Working

**ONE-LINE FIX:**
> "On academy-hub-masterfile.netlify.app/minicourses, open DevTools → Console → refresh → screenshot any red errors + check Network tab for failed requests. Stripe buttons not loading is likely missing Netlify env vars or a failing API route."

**Quick Steps:**
1. Open `academy-hub-masterfile.netlify.app/minicourses` in browser
2. Right-click → **Inspect** (or press F12)
3. Go to **Console** tab
4. Refresh page
5. Look for red errors (screenshot them)
6. **If error says "Stripe not configured":**
   - Go to Netlify → Site settings → Environment variables
   - Add variable: `STRIPE_SECRET_KEY` = `sk_test_your_key`
   - Add variable: `NEXT_PUBLIC_BASE_URL` = `https://risetothrive-hub.com`
   - Click Save
   - Go to Deploys → Trigger deploy → Deploy site
7. Wait for deploy to finish
8. Test "Enroll Now" button again

**Expected Result:**
- ✅ Clicking "Enroll Now" redirects to Stripe checkout
- ✅ Test card `4242 4242 4242 4242` works
- ✅ Redirects to thank-you page after payment

---

## 📋 WHAT TO SEND ME IF STUCK

### For SSL Issue:
- Screenshot of Netlify domain settings showing DNS status
- Screenshot of GoDaddy DNS records
- Result from dnschecker.org for `risetothrive-hub.com`

### For Deploy Failure:
- **COPY/PASTE THE FIRST ERROR LINE FROM BUILD LOG**
- Screenshot of Netlify deploys page showing failed status

### For Stripe Issue:
- Screenshot of browser console errors
- Screenshot of Network tab showing `/api/create-checkout` request/response
- Confirmation that `STRIPE_SECRET_KEY` is set in Netlify env vars

---

## 🎯 PRIORITY ORDER

**Fix in this order:**

1. **Deploy Failure** (highest priority)
   - Nothing else matters if site won't build
   - Get build working first

2. **Stripe Environment Variables**
   - Easy fix, just add env vars and redeploy
   - Critical for checkout to work

3. **SSL/DNS**
   - Can take 24 hours for full propagation
   - Users can still access via `academy-hub-masterfile.netlify.app` while waiting

---

## ✅ SUCCESS CRITERIA

**You'll know everything is fixed when:**

1. ✅ Netlify deploy status = "Published" (green)
2. ✅ `https://risetothrive-hub.com` loads without SSL error
3. ✅ Clicking "Enroll Now" on any course redirects to Stripe
4. ✅ Test purchase completes successfully
5. ✅ `/minicourses?course=shame-guilt` auto-scrolls and highlights correctly

---

## 📞 NEED HELP?

**Paste this in chat:**
- Error message from Netlify build log
- Screenshot of browser console
- Screenshot of Netlify environment variables page
- Any specific error you're stuck on

I'll provide exact code fix or step-by-step walkthrough.

---

**Created:** December 14, 2025
**For:** S.N. (Rise to Thrive Academy)

---

END OF QUICK FIX CARD
