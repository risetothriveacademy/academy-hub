# Netlify Deployment Guide - Academy Hub
**Updated:** November 25, 2025
**Project:** academy-hub-masterfile

---

## ✅ STEP 1: Connect GitHub Repository to Netlify

1. **Open Netlify Dashboard:**
   - Go to: https://app.netlify.com/projects/academy-hub-masterfile/overview

2. **Connect to GitHub:**
   - Click "Site configuration" or "Site settings"
   - Look for "Build & deploy" section
   - Click "Link repository" or "Connect to Git provider"
   - Select "GitHub"
   - Choose repository: `risetothriveacademy/academy-hub`
   - Branch: `master`

3. **Build Settings (should auto-detect from netlify.toml):**
   - Base directory: `website`
   - Build command: `bun install && bun run build`
   - Publish directory: `website/.next`
   - Click "Save" or "Deploy site"

---

## ✅ STEP 2: Verify Domain Configuration

1. **In Netlify Dashboard:**
   - Go to "Domain management" or "Domain settings"
   - Verify `risetothrive-academy.com` is connected
   - Ensure it's set as the PRIMARY domain

2. **DNS Settings:**
   - If using Netlify DNS:
     - Should already be configured ✓

   - If using external DNS (like GoDaddy, Cloudflare):
     - Verify A record or CNAME points to Netlify
     - Check: https://docs.netlify.com/domains-https/custom-domains/

3. **HTTPS Certificate:**
   - Netlify should auto-provision SSL certificate
   - Verify "HTTPS" badge is active
   - Force HTTPS redirect should be enabled

---

## ✅ STEP 3: Environment Variables (if needed)

**Note:** The Hub landing page doesn't need environment variables currently.

If you add any in the future:
- Go to "Site settings" → "Environment variables"
- Add as needed
- Redeploy after adding

---

## ✅ STEP 4: Deploy!

1. **Trigger Deploy:**
   - Netlify should auto-deploy when you save settings
   - OR click "Trigger deploy" → "Deploy site"

2. **Monitor Build:**
   - Click on the deploy in progress
   - Watch build logs
   - Should complete in 1-2 minutes

3. **Expected Build Output:**
   ```
   ✓ Compiled successfully
   ✓ Collecting page data
   ✓ Generating static pages (50/50)
   ✓ Finalizing page optimization
   ```

---

## ✅ STEP 5: Verify Deployment

1. **Test the Hub:**
   - Visit: https://risetothrive-academy.com
   - Should show Academy Hub landing page with:
     - ✓ Introductory Recovery card
     - ✓ Foundation Course card
     - ✓ Mastermind card
     - ✓ Advanced Mastery card (coming soon)
     - ✓ "Log In" button in header
     - ✓ Logo in header

2. **Test Navigation:**
   - Click "Intro Courses" → Should go to `/intro-recovery/minicourses`
   - Click "Programs" → Should go to `/courses/transformational-course`
   - Click "Log In" → Should go to external login URL
   - Test on mobile and desktop

3. **Test a Mini-Course:**
   - From "Intro Courses", click any mini-course
   - Verify page loads with content
   - Check Stripe button works

---

## 🚨 TROUBLESHOOTING

### Build Fails with "bun: command not found"

**Solution:**
- In Netlify dashboard → "Site settings" → "Environment variables"
- Add: `NODE_VERSION = 20`
- Or change build command to: `npm ci && npm run build`

### Domain Not Pointing to New Hub

**Solution:**
- Clear browser cache
- Wait 5-10 minutes for DNS propagation
- Check Netlify DNS settings
- Verify domain is set as PRIMARY in Netlify

### 404 on Sub-Pages

**Solution:**
- Verify `@netlify/plugin-nextjs` is installed (it is in netlify.toml)
- Check publish directory is `website/.next` (not just `.next`)
- Redeploy

### "Repository not found" Error

**Solution:**
- In Netlify, disconnect and reconnect to GitHub
- Ensure you have admin access to `risetothriveacademy/academy-hub` repo
- Authorize Netlify to access the repo

---

## 📊 DEPLOYMENT CHECKLIST

Before going live, verify:

- [ ] GitHub repo connected to Netlify ✓
- [ ] Domain `risetothrive-academy.com` configured ✓
- [ ] HTTPS enabled ✓
- [ ] Build succeeds (check logs) ✓
- [ ] Homepage shows Hub with all 4 programs ✓
- [ ] Header has logo and "Log In" button ✓
- [ ] "Intro Courses" link works ✓
- [ ] "Programs" link works ✓
- [ ] Mini-courses pages load ✓
- [ ] Stripe buttons functional ✓
- [ ] Mobile responsive ✓

---

## 🎯 NEXT STEPS (After Deploy)

Once the Hub is live:

1. **Test Complete User Flow:**
   - Ad → Hub → Intro Courses → Purchase → Thank You

2. **Analytics:**
   - Add Google Analytics or tracking (if needed)

3. **Monitor:**
   - Check Netlify analytics for traffic
   - Watch for any 404s or errors

4. **Iterate:**
   - Collect user feedback
   - Make improvements
   - Push to GitHub → Auto-deploys!

---

## 📞 NEED HELP?

**Netlify Support:**
- https://www.netlify.com/support/

**Same.new Support:**
- support@same.new

**GitHub Repo:**
- https://github.com/risetothriveacademy/academy-hub

---

**Status:** ⏳ Awaiting Netlify connection
**Next:** Connect GitHub repo in Netlify dashboard (Step 1)

🚀 You're almost there!
