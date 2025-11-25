# Portal URLs - Master Reference List
**Last Updated:** November 24, 2025
**Source:** User's routing fix request to Same.new

---

## 🏠 **ACADEMY HUB (Main Entry)**

**Root Domain:**
```
https://risetothrive-academy.com
```

**Netlify Project:**
```
Project Name: academy-hub-masterfile
Dashboard: https://app.netlify.com/projects/academy-hub-masterfile/overview
```

**IMPORTANT:**
⚠️ **DO NOT use same.new/chat URLs** - these are temporary editor URLs and unsafe for production
✅ **USE the academy-hub-masterfile Netlify project** for production deployment

**Should Show:** Hub landing page with:
- Introductory Recovery
- Foundation
- Mastermind
- Advanced Mastery (coming soon)
- Login button in header

**Current Status:** ⚠️ Pointing to wrong page (needs DNS/routing fix)

---

## 🔐 **AUTHENTICATION**

**Login Page:**
```
https://same-7alif4078a8-latest.netlify.app/account/login
```
**Features Needed:**
- Login with email used for payment
- Redirects to Transformation Programs after login
- "Forgot password" link (needs to be added)

**Password Reset:**
- Feature: Send reset link to email
- Return to login after successful reset
- **Current Status:** ⚠️ Needs to be added

---

## 🎓 **TRANSFORMATION PROGRAMS DASHBOARD**

**Main Dashboard:**
```
https://same-7alif4078a8-latest.netlify.app/courses/transformational-course
```
**Shows:** All transformation programs user has access to
- Foundation
- Mastermind
- Advanced Mastery

**Flow:** Login → Dashboard → Select Program

---

## 📚 **COURSE PORTALS**

### **Foundation Course Portal**
```
https://same-x3an0bjktsr-latest.netlify.app/foundation-course-
```
**Contains:**
- Day 1-5 lessons
- Videos
- Modules
- Course content

**Access:** Transformation Programs → Click Foundation button

**Current Status:** ⚠️ Button not wired (needs fix)

---

### **Mastermind Portal**
```
https://same-0erqnwjk0zo-latest.netlify.app/mastermind/
```
**Contains:**
- Mastermind course content
- Cohort materials

**Access:** Transformation Programs → Click Mastermind button

**Current Status:** ⚠️ Opening wrong page (needs fix)

---

### **Advanced Mastery Portal**
```
[URL to be provided later]
```
**Status:** 🔜 Coming soon - placeholder for now

---

## 🛤️ **USER FLOW (Complete Journey)**

### **New Student (First Time):**
```
1. Ad Click
   ↓
2. Foundation Offer Page
   ↓
3. Stripe Payment ($99)
   ↓
4. Account Creation (with email)
   ↓
5. Login: https://same-7alif4078a8-latest.netlify.app/account/login
   ↓
6. Transformation Programs: https://same-7alif4078a8-latest.netlify.app/courses/transformational-course
   ↓
7. Click Foundation
   ↓
8. Foundation Portal: https://same-x3an0bjktsr-latest.netlify.app/foundation-course-
```

### **Returning Student:**
```
1. Hub: https://risetothrive-academy.com
   ↓
2. Click "Log in" button
   ↓
3. Login: https://same-7alif4078a8-latest.netlify.app/account/login
   ↓
4. Transformation Programs: https://same-7alif4078a8-latest.netlify.app/courses/transformational-course
   ↓
5. Click Foundation or Mastermind
   ↓
6. Course Portal (respective URL)
```

---

## 🔧 **REQUESTED FIXES**

### **A) Root Domain**
- Fix: Point `https://risetothrive-academy.com` to Hub landing
- Status: ⏳ Requested from Same.new

### **B) Login Button**
- Fix: Add "Log in" to Hub header
- Link: `https://same-7alif4078a8-latest.netlify.app/account/login`
- Status: ⏳ Requested from Same.new

### **C) Forgot Password**
- Fix: Add to login page
- Feature: Self-service password reset
- Status: ⏳ Requested from Same.new

### **D) Foundation Button**
- Fix: Wire to Foundation portal
- Link: `https://same-x3an0bjktsr-latest.netlify.app/foundation-course-`
- Status: ⏳ Requested from Same.new

### **E) Mastermind Button**
- Fix: Point to correct Mastermind URL
- Link: `https://same-0erqnwjk0zo-latest.netlify.app/mastermind/`
- Status: ⏳ Requested from Same.new

### **F) Advanced Mastery**
- Fix: Placeholder/"Coming Soon"
- Status: ⏳ Requested from Same.new

---

## 💡 **OPTIONAL CONFIG CENTRALIZATION**

**Suggested Structure:**
```typescript
const PROGRAM_LINKS = {
  // Main Hub
  hubLanding: "https://risetothrive-academy.com",

  // Authentication
  login: "https://same-7alif4078a8-latest.netlify.app/account/login",

  // Dashboard
  dashboard: "https://same-7alif4078a8-latest.netlify.app/courses/transformational-course",

  // Course Portals
  foundationPortal: "https://same-x3an0bjktsr-latest.netlify.app/foundation-course-",
  mastermindPortal: "https://same-0erqnwjk0zo-latest.netlify.app/mastermind/",
  advancedMasteryPortal: "[TBD]",
};
```

**Benefits:**
- Single source of truth
- Easy to update
- Maintainable

**Status:** ⏳ Optional request to Same.new

---

## 📊 **DEPLOYMENT MAP**

| Deployment | Purpose | URL |
|------------|---------|-----|
| **same-7alif4078a8** | Hub + Login + Dashboard | `https://same-7alif4078a8-latest.netlify.app/` |
| **same-x3an0bjktsr** | Foundation Portal | `https://same-x3an0bjktsr-latest.netlify.app/` |
| **same-0erqnwjk0zo** | Mastermind Portal | `https://same-0erqnwjk0zo-latest.netlify.app/` |
| **risetothrive-academy.com** | Main Domain | Points to Hub (needs fix) |

---

## ✅ **WHEN SAME.NEW FIXES ARE COMPLETE:**

**Testing Checklist:**
- [ ] Visit `https://risetothrive-academy.com` → Verify shows Hub landing
- [ ] Click "Log in" → Verify goes to login page
- [ ] Login with test account → Verify redirects to Transformation Programs
- [ ] Click Foundation → Verify opens Foundation portal
- [ ] Click Mastermind → Verify opens Mastermind portal
- [ ] Test "Forgot password" → Verify sends reset email
- [ ] Complete password reset → Verify can login again

**Integration Tasks:**
- [ ] Document final working URLs
- [ ] Update any hardcoded links in academy-hub repo
- [ ] Test complete user journey
- [ ] Update user documentation

---

**Status:** ⏳ Waiting for Same.new to complete fixes
**Next Action:** Test all flows when Same.new confirms completion

**ALERT AI ASSISTANT WHEN FIXES ARE COMPLETE!** 🚨
