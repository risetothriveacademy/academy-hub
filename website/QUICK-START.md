# ⚡ Quick Start - Deploy in 10 Minutes

## 🎯 Goal
Deploy Academy Hub to **risetothrive-academy.com** with auto-deploy from GitHub

---

## ✅ 3-Step Deployment

### **Step 1: Create GitHub Repo (2 mins)**
1. Go to https://github.com/new
2. Name: `academy-hub`
3. Visibility: **Private**
4. ❌ Don't initialize with README
5. Click **Create repository**

---

### **Step 2: Push Code (1 min)**

**Run these commands in your terminal:**

```bash
cd academy-hub/website

# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/academy-hub.git
git branch -M main
git push -u origin main
```

**Example if your username is `risetothriveacademy`:**
```bash
git remote add origin https://github.com/risetothriveacademy/academy-hub.git
git branch -M main
git push -u origin main
```

---

### **Step 3: Deploy to Netlify (5 mins)**

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"GitHub"** → Select **`academy-hub`** repo
4. Build settings (auto-filled from `netlify.toml`):
   - Build command: `bun install && bun run build`
   - Publish directory: `.next`
5. Click **"Deploy site"**
6. Wait 2-3 minutes ⏳

---

## 🌐 Configure Domain (5 mins)

### In Netlify:
1. **Site settings** → **Domain management**
2. **Add custom domain**: `risetothrive-academy.com`
3. Note the DNS records shown

### In GoDaddy:
1. Go to your domain DNS settings
2. Update **A Record**:
   - Name: `@`
   - Value: `75.2.60.5`
3. Update **CNAME** (if needed):
   - Name: `www`
   - Value: `your-site.netlify.app`

---

## 🎉 Done!

Your site will be live at:
- https://risetothrive-academy.com

**Auto-deploy is now active:**
- Push to GitHub → Netlify builds → Site updates automatically

---

## 📚 Need More Details?
See `DEPLOYMENT-GUIDE.md` for complete instructions

---

## 🆘 Quick Troubleshooting

**Build failed?**
- Check Netlify build logs
- Make sure Bun version is set

**Domain not working?**
- DNS can take up to 48 hours
- Check GoDaddy DNS settings

**Need help?**
- Check `DEPLOYMENT-GUIDE.md`
- Contact support@risetothrive-academy.com
