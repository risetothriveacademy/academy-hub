# Stripe Checkout Setup Guide

## Error: "Failed to create checkout session. Please try again."

This error appears because the **Stripe Secret Key** environment variable is not configured.

---

## Quick Fix (Local Development)

### Step 1: Get Your Stripe Secret Key

1. Go to: https://dashboard.stripe.com/apikeys
2. Copy your **Test mode** secret key (starts with `sk_test_...`)

### Step 2: Create `.env.local` File

```bash
cd website
touch .env.local
```

### Step 3: Add Your Stripe Key

Edit `.env.local` and add:

```env
STRIPE_SECRET_KEY=sk_test_YOUR_ACTUAL_KEY_HERE
```

### Step 4: Restart Dev Server

```bash
bun dev
```

### Step 5: Test Checkout

1. Go to http://localhost:3000/minicourses
2. Click "Enroll Now — $49" on any course
3. You should be redirected to Stripe Checkout

---

## Debugging

### Check if Stripe is Configured

Visit: http://localhost:3000/api/test

You should see:
```json
{
  "status": "ok",
  "message": "API is working",
  "env_check": {
    "has_stripe_key": true,  // <-- Should be true
    "has_base_url": false
  }
}
```

### Check Browser Console

When you click "Enroll Now", open the browser console (F12) and look for:

- **Request payload**: Should show `stripe_product_id` and `course_title`
- **Response**: Shows the actual error message
- **Network tab**: Check the `/api/create-checkout` request

### Check Server Logs

In your terminal where `bun dev` is running, you should see:
```
Checkout API called
Checkout request: { stripe_product_id: 'prod_...', course_title: '...' }
Redirect origin: http://localhost:3000
```

If you see "STRIPE_SECRET_KEY not configured", the environment variable is not being read.

---

## Production Setup (Netlify)

### Step 1: Add Environment Variable

1. Go to Netlify Dashboard → Your Site
2. Click **Site settings** → **Environment variables**
3. Click **Add a variable**
4. Add:
   - **Key**: `STRIPE_SECRET_KEY`
   - **Value**: `sk_live_YOUR_LIVE_KEY` (for production)
5. Click **Save**

### Step 2: Redeploy

1. Go to **Deploys**
2. Click **Trigger deploy** → **Deploy site**

---

## Alternative: Use Stripe Price IDs (Recommended)

Instead of creating products dynamically, use actual Stripe Price IDs:

### Step 1: Create Prices in Stripe

1. Go to https://dashboard.stripe.com/products
2. For each mini-course, create a product with a $49 price
3. Copy the **Price ID** (starts with `price_...`)

### Step 2: Update Course Data

Edit `src/app/minicourses/page.tsx`:

```typescript
const MINI_COURSES = [
  {
    order: 1,
    slug: "shame-guilt",
    stripe_product_id: "price_1234567890",  // <-- Use Price ID, not Product ID
    title: "Stuck in Shame & Guilt",
    ...
  },
  ...
];
```

### Step 3: Update API Route

Edit `src/app/api/create-checkout/route.ts`:

```typescript
const session = await stripe.checkout.sessions.create({
  mode: 'payment',
  line_items: [
    {
      price: stripe_product_id,  // <-- Use price directly
      quantity: 1,
    },
  ],
  success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${origin}/minicourses`,
});
```

This gives you better analytics and control in Stripe.

---

## Still Having Issues?

1. Check that `.env.local` is in the `website` directory (not the root)
2. Make sure there are no extra spaces or quotes around the key
3. Restart your dev server after adding environment variables
4. Check the browser console and server logs for specific error messages
5. Try the `/api/test` endpoint to verify configuration

If the error message changes to show a specific Stripe error (like "Invalid API key"), that means the environment variable is being read but the key itself is incorrect.
