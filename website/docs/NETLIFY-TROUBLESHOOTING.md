# Netlify Deployment Troubleshooting Guide
## Fix SSL Errors, Deploy Failures, and Stripe Issues

**Last Updated:** December 14, 2025
**Site:** academy-hub-masterfile.netlify.app → risetothrive-hub.com

---

## 🚨 ISSUE 1: SSL / "Not Private" Error (DNS Mismatch)

### **Symptom:**
Chrome shows "Your connection is not private" or "NET::ERR_CERT_COMMON_NAME_INVALID" when accessing `risetothrive-hub.com`

### **Root Cause:**
DNS is pointing to wrong IP or has conflicting records. SSL certificate can't validate because Netlify doesn't see the domain pointing correctly.

### **What Netlify Shows:**
- Custom domain: `risetothrive-hub.com`
- Status: ⚠️ **Pending DNS verification**
- SSL: ❌ **Not provisioned**

---

### ✅ **FIX: Update DNS at Registrar (GoDaddy)**

**ONE-LINE INSTRUCTION FOR S.N.:**
> "Custom domain SSL is failing because Netlify shows Pending DNS verification. Please fix DNS at registrar so BOTH apex + www point to the Netlify site academy-hub-masterfile.netlify.app per Netlify's required records, remove conflicting A/CNAME records, then re-verify in Netlify."

---

### **STEP-BY-STEP DNS FIX:**

#### 1. Get Netlify's Required DNS Records
In Netlify dashboard:
1. Go to **Site settings** → **Domain management**
2. Click on `risetothrive-hub.com`
3. Click **"Check DNS configuration"** or **"Verify DNS"**
4. Copy the exact records shown (usually 4 A records + 1 CNAME)

**Expected Records:**
```
Type: A
Name: @ (or risetothrive-hub.com)
Value: 75.2.60.5

Type: A
Name: @
Value: 99.83.190.102

Type: A
Name: @
Value: 13.248.212.111

Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: academy-hub-masterfile.netlify.app
```

**⚠️ IMPORTANT:** Use the EXACT records Netlify shows for YOUR site. The IPs above may be outdated.

---

#### 2. Update DNS at GoDaddy (or Your Registrar)

**Login to GoDaddy:**
1. Go to [godaddy.com](https://www.godaddy.com)
2. Login with your account
3. Go to **My Products** → **Domains**
4. Click **DNS** next to `risetothrive-hub.com`

**Remove Conflicting Records:**
- Delete any existing A records pointing to old IPs
- Delete any CNAME records for `@` (apex)
- Delete any conflicting `www` CNAME records

**Add Netlify's Records:**
1. Add each A record (4 total) with Type=A, Name=@, Value=(Netlify IP)
2. Add CNAME record with Type=CNAME, Name=www, Value=academy-hub-masterfile.netlify.app
3. Save changes

**DNS Propagation Time:** 5 minutes to 24 hours (usually ~1 hour)

---

#### 3. Verify in Netlify

After updating GoDaddy DNS:
1. Wait 10-15 minutes
2. Go back to Netlify → **Domain management**
3. Click **"Verify DNS configuration"**
4. If successful, status changes to ✅ **DNS configured**
5. Wait ~10 more minutes for SSL certificate to provision
6. Refresh page → SSL should show ✅ **HTTPS enabled**

---

### **How to Check DNS Propagation:**

Use [dnschecker.org](https://dnschecker.org):
1. Enter `risetothrive-hub.com`
2. Select **A** record type
3. Click **Search**
4. Verify all servers show Netlify's 4 A records

For www subdomain:
1. Enter `www.risetothrive-hub.com`
2. Select **CNAME** record type
3. Verify all servers show `academy-hub-masterfile.netlify.app`

---

## 🚨 ISSUE 2: Netlify Deploy Failed (Blocking Updates)

### **Symptom:**
- Latest Git push doesn't appear on live site
- Netlify shows **"Failed"** deploy status
- Production stuck on last successful deploy

### **Root Cause:**
Build command (`bun run build`) exited with error code 2 (usually TypeScript error, missing dependency, or build failure)

---

### ✅ **FIX: Get Build Error and Fix Code**

**ONE-LINE INSTRUCTION FOR S.N.:**
> "Netlify production deploy is failing (build exit code 2). Please open the latest failed deploy → copy/paste the FIRST real error line from the build log, fix the repo, and re-deploy. Production is stuck on last successful deploy."

---

### **STEP-BY-STEP BUILD FIX:**

#### 1. Find the Build Error in Netlify

In Netlify dashboard:
1. Go to **Deploys** tab
2. Click on the most recent **"Failed"** deploy (red X)
3. Scroll through the build log to find the **FIRST** real error

**Common Error Patterns:**

**TypeScript Error:**
```
Error: Type error: Property 'X' does not exist on type 'Y'
  at /opt/build/repo/website/src/app/page.tsx:123:45
```

**Missing Dependency:**
```
Error: Cannot find module 'stripe'
  Require stack:
  - /opt/build/repo/website/src/app/api/create-checkout/route.ts
```

**Environment Variable Missing (Warning, not Fatal):**
```
Warning: STRIPE_SECRET_KEY is not defined
```

**Build Command Failed:**
```
error Command failed with exit code 2.
```

---

#### 2. Fix the Error Locally

Based on error type:

**TypeScript Error:**
```bash
cd academy-hub-main/website
bun run lint  # Find the error
# Fix the code in the file mentioned
bun run build  # Test build locally
```

**Missing Dependency:**
```bash
cd academy-hub-main/website
bun add stripe  # Add missing package
bun run build  # Test build locally
```

**Environment Variable Missing:**
- This is a warning, not fatal
- Add to Netlify env vars (see Issue 3 below)

---

#### 3. Commit Fix and Push

```bash
cd academy-hub-main
git add .
git commit -m "fix: resolve build error"
git push origin main
```

Netlify will auto-deploy after push.

---

#### 4. Monitor Deploy in Real-Time

In Netlify:
1. Go to **Deploys** tab
2. Click on the **"Building"** deploy (yellow)
3. Watch build log in real-time
4. Wait for ✅ **"Published"** status

---

### **If Build Still Fails After Fix:**

**Option 1: Clear Cache and Retry**
1. Netlify → **Deploys** → Failed deploy
2. Click **"Options"** dropdown → **"Clear cache and retry deploy"**

**Option 2: Manual Trigger**
1. Netlify → **Deploys** → **"Trigger deploy"** dropdown
2. Select **"Clear cache and deploy site"**

---

## 🚨 ISSUE 3: Stripe Links "Not Loaded" (Missing Env Vars)

### **Symptom:**
- "Enroll Now — $49" buttons don't work
- Clicking button shows "Failed to create checkout session"
- Browser console shows Stripe error

### **Root Cause:**
1. `STRIPE_SECRET_KEY` environment variable not set in Netlify
2. Stripe API route failing because no secret key
3. Frontend not handling error correctly

---

### ✅ **FIX: Add Stripe Environment Variables to Netlify**

**ONE-LINE INSTRUCTION FOR S.N.:**
> "On academy-hub-masterfile.netlify.app/minicourses, open DevTools → Console → refresh → screenshot any red errors + check Network tab for failed requests. Stripe buttons not loading is likely missing Netlify env vars or a failing API route."

---

### **STEP-BY-STEP STRIPE FIX:**

#### 1. Debug in Browser First

On `academy-hub-masterfile.netlify.app/minicourses`:
1. Right-click → **Inspect** (or press F12)
2. Go to **Console** tab
3. Refresh page (Cmd/Ctrl + R)
4. Look for red errors

**Common Errors:**

**Missing Env Var:**
```
POST /api/create-checkout 500 (Internal Server Error)
{error: "Stripe not configured. Please add STRIPE_SECRET_KEY environment variable."}
```

**Invalid Stripe Key:**
```
Stripe API Error: Invalid API Key provided
```

**Network Error:**
```
Failed to fetch
net::ERR_CONNECTION_REFUSED
```

---

#### 2. Get Stripe Secret Key

**If You Don't Have It:**
1. Go to [dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
2. Login with Stripe account
3. For **Testing:** Copy **Secret key** starting with `sk_test_...`
4. For **Production:** Copy **Secret key** starting with `sk_live_...`

⚠️ **Use `sk_test_...` for now until all 18 courses are tested**

---

#### 3. Add Environment Variables in Netlify

**In Netlify Dashboard:**
1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add these variables:

**Variable 1: STRIPE_SECRET_KEY**
- **Key:** `STRIPE_SECRET_KEY`
- **Value:** `sk_test_your_actual_key_here`
- **Scopes:** All scopes (production, deploy previews, branch deploys)

**Variable 2: NEXT_PUBLIC_BASE_URL** (Optional but recommended)
- **Key:** `NEXT_PUBLIC_BASE_URL`
- **Value:** `https://risetothrive-hub.com` (or `https://academy-hub-masterfile.netlify.app`)
- **Scopes:** All scopes

4. Click **"Save"** for each variable

---

#### 4. Redeploy Site

After adding env vars:
1. Netlify → **Deploys** → **"Trigger deploy"** dropdown
2. Select **"Deploy site"**
3. Wait for deploy to finish (2-3 minutes)

**⚠️ IMPORTANT:** Environment variables are only applied to NEW deploys, not existing ones.

---

#### 5. Test Stripe Checkout

After deploy completes:
1. Go to `academy-hub-masterfile.netlify.app/minicourses`
2. Click **"Enroll Now — $49"** on any course
3. You should be redirected to Stripe checkout page
4. Use test card: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., 12/26)
   - CVC: Any 3 digits (e.g., 123)
   - ZIP: Any 5 digits (e.g., 12345)
5. Complete test purchase
6. Should redirect to thank-you page

---

### **If Stripe Still Doesn't Work:**

**Check 1: Verify Env Vars Are Set**
```bash
# In Netlify build log, look for:
STRIPE_SECRET_KEY: [REDACTED]
NEXT_PUBLIC_BASE_URL: https://risetothrive-hub.com
```

**Check 2: Test API Route Directly**
Open browser to:
```
https://academy-hub-masterfile.netlify.app/api/test
```

If you get JSON response, Next.js API routes are working.

**Check 3: Browser Network Tab**
1. Open DevTools → **Network** tab
2. Click "Enroll Now"
3. Look for `/api/create-checkout` request
4. Click on it → **Preview** tab → See error response

**Check 4: Stripe Dashboard**
1. Go to [dashboard.stripe.com/test/logs](https://dashboard.stripe.com/test/logs)
2. Look for recent API errors
3. Check if API calls are even reaching Stripe

---

## 🔧 QUICK REFERENCE: ALL ENVIRONMENT VARIABLES NEEDED

### **Netlify Production Environment Variables:**

| Variable | Value | Required? | Purpose |
|----------|-------|-----------|---------|
| `STRIPE_SECRET_KEY` | `sk_test_...` or `sk_live_...` | ✅ **YES** | Stripe checkout API |
| `NEXT_PUBLIC_BASE_URL` | `https://risetothrive-hub.com` | ⚠️ Recommended | Success/cancel URLs |
| `NODE_VERSION` | `20` | ✅ **YES** (in netlify.toml) | Build environment |
| `BUN_VERSION` | `1.0.0` | ✅ **YES** (in netlify.toml) | Package manager |

---

## 📊 DEPLOYMENT CHECKLIST

Before going live with ads:

### DNS & SSL:
- [ ] DNS records updated at GoDaddy
- [ ] DNS propagation verified (dnschecker.org)
- [ ] Netlify shows ✅ DNS configured
- [ ] Netlify shows ✅ HTTPS enabled
- [ ] `https://risetothrive-hub.com` loads without SSL error
- [ ] `https://www.risetothrive-hub.com` redirects to apex

### Build & Deploy:
- [ ] Latest commit pushed to GitHub main branch
- [ ] Netlify auto-deploy triggered
- [ ] Build completed successfully (green checkmark)
- [ ] Deploy shows ✅ Published status
- [ ] Production site shows latest changes

### Stripe Integration:
- [ ] `STRIPE_SECRET_KEY` added to Netlify env vars
- [ ] `NEXT_PUBLIC_BASE_URL` added to Netlify env vars
- [ ] Site redeployed after adding env vars
- [ ] "Enroll Now" buttons work on all 18 courses
- [ ] Test purchase completes successfully
- [ ] Redirects to thank-you page after payment

### Dynamic Course Highlighting:
- [ ] Test URL: `/minicourses?course=shame-guilt`
- [ ] Page auto-scrolls to recommended course
- [ ] "Recommended for you" badge appears
- [ ] "Learn More" section auto-expands
- [ ] Gold border and ring effect visible
- [ ] Works on desktop and mobile

---

## 🆘 GETTING HELP

### If None of These Fixes Work:

**1. Check Netlify Status Page:**
https://www.netlifystatus.com

**2. Contact Netlify Support:**
- In Netlify dashboard → Click **"?"** icon → **"Contact support"**
- Include: Site name, deploy ID, error message

**3. Check GitHub Repo:**
https://github.com/risetothriveacademy/academy-hub

**4. Same AI Support:**
- User can share error screenshots in chat
- I can diagnose specific build/runtime errors
- Quick turnaround for code fixes

---

## 📝 MAINTENANCE NOTES

### When to Re-Check DNS:
- After changing domain providers
- After SSL certificate expires (auto-renews, but verify)
- After adding subdomains (e.g., `blog.risetothrive-hub.com`)

### When to Re-Check Stripe:
- After switching test → live keys
- After adding new courses with new Stripe products
- Monthly: Verify test transactions in Stripe dashboard

### When to Re-Deploy:
- After code changes pushed to GitHub
- After updating environment variables
- After Netlify plugin updates

---

**Last Updated:** December 14, 2025
**Status:** Troubleshooting guide complete

---

END OF GUIDE
