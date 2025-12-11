# 🌟 Rise to Thrive Academy Hub

**Faith-based trauma recovery and emotional healing platform**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [Deploy to Netlify](#-deploy-to-netlify)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Development](#-development)

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ or Bun 1.0+
- Git

### **Local Development**

```bash
# 1. Clone the repository
git clone https://github.com/risetothriveacademy/academy-hub.git
cd academy-hub/website

# 2. Install dependencies
bun install
# or: npm install

# 3. Copy environment variables template
cp .env.example .env.local

# 4. Add your environment variables to .env.local
# See "Environment Variables" section below

# 5. Run development server
bun run dev
# or: npm run dev

# 6. Open http://localhost:3000
```

---

## 🔐 Environment Variables

### **Required Variables**

| Variable | Description | Where to Get It |
|----------|-------------|-----------------|
| `STRIPE_SECRET_KEY` | Stripe API secret key | [Stripe Dashboard](https://dashboard.stripe.com/apikeys) |
| `NEXT_PUBLIC_BASE_URL` | Public URL of deployed site | Your domain (e.g., `https://risetothrive-academy.com`) |

### **Optional Variables**

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | HubSpot account ID |
| `NEXT_PUBLIC_HUBSPOT_FOUNDATION_FORM_ID` | HubSpot form GUID |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID |
| `NEXT_PUBLIC_META_PIXEL_ID` | Facebook/Meta Pixel ID |

### **Setup Instructions**

#### **For Local Development:**
1. Copy `.env.example` to `.env.local`
2. Fill in your values
3. `.env.local` is in `.gitignore` (never commit secrets!)

#### **For Netlify Deployment:**
1. Go to Netlify Dashboard → Your Site → **Site Settings**
2. Click **Environment Variables** in sidebar
3. Add each variable and value
4. Click **Save**
5. Trigger a new deploy

⚠️ **IMPORTANT:** Never commit `.env.local` or real secrets to GitHub!

---

## 🌐 Deploy to Netlify

### **Prerequisites**
- Netlify account (free tier works)
- GitHub repository: `risetothriveacademy/academy-hub`

### **Deployment Steps**

#### **1. Connect GitHub Repository to Netlify**

1. Log into [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Select repository: `risetothriveacademy/academy-hub`
5. Configure build settings:

```yaml
Base directory: website
Build command: bun run build
Publish directory: website/.next
```

Or use our pre-configured `netlify.toml`:

```toml
[build]
  base = "website"
  command = "bun run build"
  publish = "website/.next"

[build.environment]
  NODE_VERSION = "18"
```

6. Click **"Deploy site"**

#### **2. Add Environment Variables**

1. Go to **Site Settings** → **Environment Variables**
2. Click **"Add a variable"**
3. Add these **REQUIRED** variables:

```env
STRIPE_SECRET_KEY = sk_live_your_actual_key_here
NEXT_PUBLIC_BASE_URL = https://risetothrive-academy.com
```

4. Add **OPTIONAL** variables (if using):

```env
NEXT_PUBLIC_HUBSPOT_PORTAL_ID = 244294287
NEXT_PUBLIC_HUBSPOT_FOUNDATION_FORM_ID = your_form_guid
```

5. Click **"Save"**

#### **3. Configure Custom Domain**

1. Go to **Domain Settings** → **Add a domain**
2. Enter: `risetothrive-academy.com`
3. Follow DNS configuration instructions
4. Add `www.risetothrive-academy.com` as alias (optional)
5. Enable HTTPS (automatic with Netlify)

#### **4. Trigger Deploy**

Option A: **Auto-deploy (recommended)**
- Push to `main` branch → Netlify auto-deploys

Option B: **Manual deploy**
- Go to **Deploys** tab
- Click **"Trigger deploy"** → **"Deploy site"**

---

## 📁 Project Structure

```
website/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── page.tsx           # Homepage (Foundation + Mini-Courses)
│   │   ├── layout.tsx         # Root layout (header + footer)
│   │   ├── login/             # Universal login page
│   │   ├── minicourses/       # 18 mini-course pages
│   │   │   └── page.tsx       # Mini-courses hub
│   │   ├── foundation/        # Foundation course pages
│   │   ├── thank-you/         # Payment success page
│   │   └── api/
│   │       └── create-checkout/  # Stripe checkout API
│   │           └── route.ts
│   ├── components/
│   │   ├── SiteHeader.tsx     # Navigation header
│   │   ├── SiteFooter.tsx     # Footer with links
│   │   └── ui/                # shadcn/ui components
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   ├── images/
│   └── torah-logo.png
├── workbook-template/          # Workbook cover generator
│   ├── cover-template.html
│   ├── courses-config.js
│   └── README.md
├── .env.example               # Environment variables template
├── netlify.toml               # Netlify configuration
├── package.json
└── README.md                  # This file
```

---

## ✨ Features

### **Implemented**

✅ **Homepage**
- Foundation Course (5-day program) with interactive accordion
- 18 Mini-Courses with "Learn More" descriptions
- Testimonials and social proof
- Dual enrollment CTAs

✅ **Stripe Checkout**
- All 18 mini-courses wired to Stripe
- Server-side checkout session creation
- $49 USD per course
- Success/cancel redirect URLs

✅ **Universal Login**
- HubSpot integration ready
- Automated password recovery
- Security notices

✅ **Responsive Design**
- Mobile-first approach
- Teal & gold brand colors
- Accessible typography

✅ **Workbook Template System**
- HTML template for workbook covers
- Pre-configured for all 18 courses
- Print-to-PDF ready

### **In Progress**

🔄 Foundation Course Portal (full day-by-day platform)
🔄 Workbook PDF generation
🔄 HubSpot form integration

---

## 💻 Development

### **Tech Stack**

- **Framework:** Next.js 15.3.2 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Package Manager:** Bun (or npm/pnpm)
- **Deployment:** Netlify
- **Payments:** Stripe
- **CRM:** HubSpot

### **Build Commands**

```bash
# Development server (localhost:3000)
bun run dev

# Production build
bun run build

# Start production server
bun run start

# Lint code
bun run lint

# Type check
bun run type-check
```

### **Build Configuration**

**Next.js Config** (`next.config.js`):
```javascript
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'video.pictory.ai'],
  },
};
```

**Netlify Config** (`netlify.toml`):
```toml
[build]
  base = "website"
  command = "bun run build"
  publish = "website/.next"
```

---

## 🧪 Testing Stripe Checkout

### **Test Mode**

1. Use test secret key: `STRIPE_SECRET_KEY=sk_test_...`
2. Visit: `/minicourses`
3. Click any "Enroll Now — $49" button
4. Use test card:
   - **Card:** `4242 4242 4242 4242`
   - **Expiry:** Any future date (e.g., `12/34`)
   - **CVC:** Any 3 digits (e.g., `123`)
   - **ZIP:** Any 5 digits (e.g., `12345`)
5. Verify redirect to `/thank-you` page

### **Production Mode**

1. Use live secret key: `STRIPE_SECRET_KEY=sk_live_...`
2. Real cards will be charged
3. Test with $1 or refund test purchases

---

## 📦 Deployment Checklist

Before deploying to production:

- [ ] All environment variables set in Netlify
- [ ] `STRIPE_SECRET_KEY` is **live** key (`sk_live_...`)
- [ ] `NEXT_PUBLIC_BASE_URL` matches production domain
- [ ] Custom domain configured and SSL enabled
- [ ] Test all 18 Stripe checkout flows
- [ ] Verify email confirmations work
- [ ] Check mobile responsiveness
- [ ] Review analytics integration
- [ ] Test login flow

---

## 🚨 Troubleshooting

### **Build Fails**

```bash
# Check for TypeScript errors
bun run type-check

# Check for linting errors
bun run lint

# Clear cache and rebuild
rm -rf .next node_modules
bun install
bun run build
```

### **Stripe Checkout Not Working**

1. Verify `STRIPE_SECRET_KEY` is set in Netlify
2. Check Netlify logs for API errors
3. Ensure `NEXT_PUBLIC_BASE_URL` is correct
4. Test with Stripe test mode first

### **Environment Variables Not Loading**

1. Netlify: Must redeploy after adding env vars
2. Local: Restart dev server after editing `.env.local`
3. Check `.env.example` for correct variable names

---

## 📞 Support

- **Technical Issues:** Check [Netlify Docs](https://docs.netlify.com)
- **Stripe Issues:** Check [Stripe Docs](https://stripe.com/docs)
- **Next.js Issues:** Check [Next.js Docs](https://nextjs.org/docs)

---

## 🔒 Security Notes

- **Never** commit `.env.local` to Git
- **Never** expose `STRIPE_SECRET_KEY` in client-side code
- **Always** use environment variables for sensitive data
- **Review** Netlify deploy logs for exposed secrets
- **Rotate** API keys if accidentally committed

---

## 📜 License

© 2025 Rise to Thrive Academy. All rights reserved.

---

**Built with ❤️ for transforming pain into power through faith-based healing.**
