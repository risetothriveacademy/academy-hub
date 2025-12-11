# 🚀 Deployment Guide - Rise to Thrive Academy Hub

## 📋 Overview

This guide will help you deploy the Academy Hub to:
- **GitHub**: Source code repository
- **Netlify**: Hosting with auto-deploy
- **Domain**: risetothrive-academy.com

---

## Step 1: Create GitHub Repository

1. **Go to GitHub:** https://github.com/new

2. **Repository Settings:**
   - **Repository name:** `academy-hub`
   - **Description:** "Rise to Thrive Academy - Main hub website"
   - **Visibility:** ✅ **Private** (recommended)
   - **❌ DO NOT** check "Initialize with README" (we already have one)

3. **Click "Create repository"**

---

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

### Option A: If your GitHub username is `risetothriveacademy`:

```bash
cd academy-hub/website
git remote add origin https://github.com/risetothriveacademy/academy-hub.git
git branch -M main
git push -u origin main
```

### Option B: If you have a different GitHub username:

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
cd academy-hub/website
git remote add origin https://github.com/YOUR_USERNAME/academy-hub.git
git branch -M main
git push -u origin main
```

**Note:** You may be prompted for your GitHub credentials. Use a Personal Access Token instead of password.

---

## Step 3: Connect to Netlify

### 3A. Log in to Netlify
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"

### 3B. Connect GitHub
1. Click "GitHub"
2. Authorize Netlify if prompted
3. Search for `academy-hub` repository
4. Click on it to select

### 3C. Configure Build Settings

Netlify should auto-detect these settings from `netlify.toml`:

```
Base directory: (leave empty)
Build command: bun install && bun run build
Publish directory: .next
```

**✅ These are already configured in `netlify.toml` - just verify they're correct**

### 3D. Environment Variables (if needed)

If you need any environment variables (like Stripe URLs), add them:
1. Click "Show advanced"
2. Click "New variable"
3. Add any needed variables (check `.env.example` for list)

### 3E. Deploy!
1. Click "Deploy site"
2. Wait 2-3 minutes for build to complete
3. You'll get a random Netlify URL (like `random-name-123.netlify.app`)

---

## Step 4: Configure Custom Domain

### 4A. In Netlify Dashboard:
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `risetothrive-academy.com`
4. Click **"Verify"**
5. Netlify will show you DNS records to add

### 4B. In GoDaddy (your domain registrar):

**You have two options:**

#### **Option 1: Use Netlify DNS (Recommended)**
1. In Netlify, click "Set up Netlify DNS"
2. Copy the nameservers Netlify provides (e.g., `dns1.p03.nsone.net`)
3. Go to GoDaddy → Your domain → DNS settings
4. Change nameservers to Netlify's nameservers
5. Wait 24-48 hours for propagation

#### **Option 2: Keep GoDaddy DNS (Faster)**
1. In GoDaddy, go to DNS settings for `risetothrive-academy.com`
2. Add/Update these records:

   **A Record:**
   - Type: `A`
   - Name: `@`
   - Value: `75.2.60.5` (Netlify's load balancer)
   - TTL: 600

   **CNAME Record (for www):**
   - Type: `CNAME`
   - Name: `www`
   - Value: `your-site-name.netlify.app`
   - TTL: 600

3. In Netlify, verify domain ownership

---

## Step 5: Keep Subdomain for Foundation Course

**Important:** Your Foundation course should stay at `foundation.risetothrive-academy.com`

1. In Netlify, make sure you have TWO sites:
   - **Site 1:** Academy Hub → `risetothrive-academy.com` (NEW)
   - **Site 2:** Foundation Course → `foundation.risetothrive-academy.com` (EXISTING)

2. Each site has its own GitHub repo and deploys independently

---

## 🎯 Final Setup

After deployment, your URLs will be:

- **Main Hub:** https://risetothrive-academy.com
- **Foundation Course:** https://foundation.risetothrive-academy.com/offer-video-a
- **Mini-Course Example:** https://risetothrive-academy.com/minicourses/shame-guilt
- **Login:** https://risetothrive-academy.com/login
- **Blog:** https://risetothrive-academy.com/blogs

---

## 🔄 Auto-Deploy Setup

Once connected to GitHub and Netlify:

1. **Make changes** to your code
2. **Commit** to git: `git add . && git commit -m "Update homepage"`
3. **Push** to GitHub: `git push`
4. **Netlify automatically deploys** (takes 2-3 minutes)

---

## 📝 Environment Variables Needed

If you need any environment variables (check with your setup):

```bash
# Example - add in Netlify dashboard
NEXT_PUBLIC_STRIPE_CHECKOUT_URL=https://buy.stripe.com/...
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

These should be added in:
**Netlify Dashboard → Site settings → Environment variables**

---

## 🆘 Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Verify `bun` is installed correctly
- Make sure all dependencies are in `package.json`

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS settings in GoDaddy
- Verify domain is added in Netlify

### Pages Not Loading
- Check that build command completed successfully
- Verify publish directory is set to `.next`
- Check for any runtime errors in browser console

---

## ✅ Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Netlify site created and connected
- [ ] Build successful
- [ ] Custom domain configured
- [ ] DNS records updated in GoDaddy
- [ ] Both sites working (hub + foundation)
- [ ] Auto-deploy tested (push a change)

---

**Need Help?**
Contact Same Support or check Netlify docs: https://docs.netlify.com
