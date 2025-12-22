# 🔴 ISSUE 2 — SSL ERROR FIX (DNS Configuration)

**Status:** Requires DNS update at GoDaddy  
**Error:** `NET::ERR_CERT_COMMON_NAME_INVALID`  
**Cause:** DNS records not pointing to correct Netlify IPs

---

## ⚠️ IMPORTANT: This is NOT a code fix

This is a **DNS configuration** issue at your domain registrar (GoDaddy).  
The code is working fine. SSL will provision automatically once DNS is correct.

---

## 🔧 FIX REQUIRED AT GODADDY

### Step 1: Login to GoDaddy

1. Go to [godaddy.com](https://www.godaddy.com)
2. Login with your account
3. Go to **My Products** → **Domains**
4. Click **DNS** next to `risetothrive-hub.com`

---

### Step 2: REMOVE this old A record

 **DELETE THIS:**
```
Type: A
Name: @
Value: 75.2.60.5
```

(If you have any other A records for `@`, delete those too)

---

### Step 3: ADD these TWO A records

 **ADD RECORD 1:**
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 600 (or default)
```

 **ADD RECORD 2:**
```
Type: A
Name: @
Value: 99.83.190.102
TTL: 600 (or default)
```

**IMPORTANT:** You need BOTH A records. Netlify requires multiple IPs for load balancing.

---

### Step 4: UPDATE www CNAME

 **UPDATE THIS:**
```
Type: CNAME
Name: www
Value: academy-hub-masterfile.netlify.app
TTL: 600 (or default)
```

**If you have a different CNAME pointing to `same-*.netlify.app`, REMOVE it and use the one above.**

---

### Step 5: REMOVE any conflicting records

 **DELETE these if you find them:**
- Any CNAME for `@` (apex domain)
- Any A records NOT listed above
- Any old Netlify subdomain CNAMEs

---

## ⏰ WAIT FOR DNS PROPAGATION

### How long it takes:
- **Minimum:** 5-10 minutes
- **Average:** 30 minutes
- **Maximum:** 24 hours (rare)

### How to check progress:

1. Go to [dnschecker.org](https://dnschecker.org)
2. Enter `risetothrive-hub.com`
3. Select **A** record type
4. Click **Search**
5. Wait until most servers show both:
   - `75.2.60.5`
   - `99.83.190.102`

For www subdomain:
1. Enter `www.risetothrive-hub.com`
2. Select **CNAME** record type
3. Verify shows: `academy-hub-masterfile.netlify.app`

---

## 🔒 SSL WILL AUTO-PROVISION

Once DNS propagates (usually 10-30 mins):

1. Netlify will detect correct DNS
2. "Pending DNS verification" will disappear
3. SSL certificate will auto-provision (takes another 5-10 mins)
4. Status will change to: ✅ **HTTPS enabled**
5. `https://risetothrive-hub.com` will load without SSL error

**DO NOT:**
- ❌ Manually regenerate SSL
- ❌ Delete and re-add the domain
- ❌ Change anything in Netlify

**Just wait for DNS to propagate.**

---

## ✅ EXPECTED RESULT

### In Netlify dashboard:
- Domain status: ✅ **DNS configured**
- SSL status: ✅ **HTTPS enabled**

### In browser:
- `https://risetothrive-hub.com` loads without error
- `https://www.risetothrive-hub.com` redirects to apex
- No "Not Private" warning

---

## 🆘 IF IT STILL DOESN'T WORK

### Check these:

1. **Correct Netlify site?**
   - Make sure you're configuring DNS for the site: `academy-hub-masterfile.netlify.app`
   - NOT an old site or different subdomain

2. **GoDaddy DNS saved?**
   - Click **Save** after making changes
   - Refresh the DNS page to confirm changes appear

3. **Propagation complete?**
   - Use dnschecker.org to verify
   - Try from incognito/private browsing mode
   - Clear browser cache

4. **Still showing old IP?**
   - DNS might be cached on your local network
   - Try from mobile data (different network)
   - Use VPN to test from different location

---

## 📞 CONTACT INFO

**If stuck after 24 hours:**

Email Netlify support:
- Login to Netlify
- Click **?** icon → **Contact support**
- Include: Site name, domain, DNS records screenshot

---

## 📋 QUICK CHECKLIST

Before calling it done:

- [ ] Removed old A record (`75.2.60.5` only)
- [ ] Added first A record (`75.2.60.5`)
- [ ] Added second A record (`99.83.190.102`)
- [ ] Updated www CNAME (`academy-hub-masterfile.netlify.app`)
- [ ] Saved all DNS changes in GoDaddy
- [ ] Waited 10-30 minutes for propagation
- [ ] Checked dnschecker.org for both A records
- [ ] Verified Netlify shows "DNS configured"
- [ ] Confirmed SSL shows "HTTPS enabled"
- [ ] Tested `https://risetothrive-hub.com` in browser
- [ ] No SSL warning appears

---

**Last Updated:** December 14, 2025  
**Issue:** DNS misconfiguration blocking SSL provisioning  
**Solution:** Update GoDaddy DNS records to point to Netlify

---

END OF DNS FIX GUIDE
