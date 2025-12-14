# Ad Link Reference Guide
## Query Parameter Format for Mini-Courses Landing Page

**Purpose:** Direct ad traffic to the mini-courses page with dynamic course highlighting
**Base URL:** `https://risetothrive-hub.com/minicourses`
**Query Parameter:** `?course=<slug>`

**Last Updated:** December 14, 2025

---

## ✨ FEATURE BEHAVIOR

When a user clicks an ad link with the `?course=<slug>` parameter:

1. ✅ **Auto-scrolls** to the matching course card
2. ✅ **Auto-expands** the "Learn More" section
3. ✅ **Highlights** the card with gold border and ring
4. ✅ **Shows** "⭐ Recommended for you" badge
5. ✅ **Smooth animation** to draw attention

---

## 📋 ALL 18 COURSE AD LINKS

| # | Course Title | Query Parameter Slug | Full Ad Link |
|---|--------------|---------------------|--------------|
| 01 | Stuck in Shame & Guilt | `shame-guilt` | `https://risetothrive-hub.com/minicourses?course=shame-guilt` |
| 02 | Breaking the Cycle of Fear | `fear` | `https://risetothrive-hub.com/minicourses?course=fear` |
| 03 | The Hidden Pattern Holding You Back | `hidden-pattern` | `https://risetothrive-hub.com/minicourses?course=hidden-pattern` |
| 04 | Why You Can't Move On | `move-on` | `https://risetothrive-hub.com/minicourses?course=move-on` |
| 05 | Fighting Hopelessness | `hopelessness` | `https://risetothrive-hub.com/minicourses?course=hopelessness` |
| 06 | Feeling Lost in Your Purpose | `purpose` | `https://risetothrive-hub.com/minicourses?course=purpose` |
| 07 | Exhausted but Still Broken | `exhausted` | `https://risetothrive-hub.com/minicourses?course=exhausted` |
| 08 | Resentment Ruining Your Peace | `resentment` | `https://risetothrive-hub.com/minicourses?course=resentment` |
| 09 | When Anger Turns Inward | `anger` | `https://risetothrive-hub.com/minicourses?course=anger` |
| 10 | Overwhelmed by Trauma | `trauma` | `https://risetothrive-hub.com/minicourses?course=trauma` |
| 11 | Stuck in Your Past | `past` | `https://risetothrive-hub.com/minicourses?course=past` |
| 12 | Struggling to Set Boundaries | `boundaries` | `https://risetothrive-hub.com/minicourses?course=boundaries` |
| 13 | Financial Despair | `financial-despair` | `https://risetothrive-hub.com/minicourses?course=financial-despair` |
| 14 | When Forgiveness Feels Impossible | `forgiveness` | `https://risetothrive-hub.com/minicourses?course=forgiveness` |
| 15 | Losing Your Identity & Self-Worth | `identity` | `https://risetothrive-hub.com/minicourses?course=identity` |
| 16 | Carrying the Weight of Grief | `grief` | `https://risetothrive-hub.com/minicourses?course=grief` |
| 17 | Trapped in Depression | `depression` | `https://risetothrive-hub.com/minicourses?course=depression` |
| 18 | Why Anxiety Won't Let Go | `anxiety` | `https://risetothrive-hub.com/minicourses?course=anxiety` |

---

## 🎯 RECOMMENDED AD GROUPS BY TOPIC

### **Shame, Guilt & Worthlessness**
- `?course=shame-guilt` — Stuck in Shame & Guilt
- `?course=identity` — Losing Your Identity & Self-Worth

### **Fear, Anxiety & Worry**
- `?course=fear` — Breaking the Cycle of Fear
- `?course=anxiety` — Why Anxiety Won't Let Go

### **Trauma & PTSD**
- `?course=trauma` — Overwhelmed by Trauma
- `?course=past` — Stuck in Your Past

### **Depression & Hopelessness**
- `?course=depression` — Trapped in Depression
- `?course=hopelessness` — Fighting Hopelessness

### **Anger, Resentment & Bitterness**
- `?course=anger` — When Anger Turns Inward
- `?course=resentment` — Resentment Ruining Your Peace
- `?course=forgiveness` — When Forgiveness Feels Impossible

### **Grief & Loss**
- `?course=grief` — Carrying the Weight of Grief
- `?course=move-on` — Why You Can't Move On

### **Boundaries & Relationships**
- `?course=boundaries` — Struggling to Set Boundaries

### **Purpose & Direction**
- `?course=purpose` — Feeling Lost in Your Purpose
- `?course=exhausted` — Exhausted but Still Broken

### **Patterns & Subconscious Blocks**
- `?course=hidden-pattern` — The Hidden Pattern Holding You Back

### **Financial Stress**
- `?course=financial-despair` — Financial Despair

---

## 📱 FACEBOOK ADS IMPLEMENTATION

### Dynamic URL Parameters

Use Facebook's Dynamic URL Parameters to track ad performance:

```
https://risetothrive-hub.com/minicourses?course=shame-guilt&utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{adset.name}}
```

### Example Ad Configurations:

**Campaign Name:** "Shame-Guilt-Recovery-Dec2025"
**Ad Set Name:** "Female-35-55-ChristianInterests"
**Landing URL:** `?course=shame-guilt&utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{adset.name}}`

---

## 🎨 VISUAL BEHAVIOR

### Without Query Parameter:
- All course cards displayed equally
- No highlighting
- User must browse to find course

### With Query Parameter (`?course=fear`):
- Page loads normally
- After 300ms, page auto-scrolls to "Breaking the Cycle of Fear" card
- Card expands "Learn More" section automatically
- Gold border and ring appears
- "⭐ Recommended for you" badge displays at top
- User immediately sees recommended course

---

## ⚠️ IMPORTANT NOTES

### Case Sensitivity:
- Query parameters are **case-sensitive**
- Always use lowercase slugs
- ❌ WRONG: `?course=Shame-Guilt`
- ✅ CORRECT: `?course=shame-guilt`

### Invalid Slug Behavior:
- If slug doesn't match any course, page displays normally without highlighting
- No error shown to user
- All courses still browsable

### No Separate Landing Pages:
- **DO NOT** create separate landing pages like `/minicourses/shame-guilt`
- All ad traffic goes to `/minicourses` with query parameter
- This allows users to easily browse all 18 courses after viewing recommended course

---

## 🧪 TESTING

### Test Each Link:

1. Open browser
2. Paste full ad link (e.g., `https://risetothrive-hub.com/minicourses?course=shame-guilt`)
3. Wait 300ms for scroll animation
4. Verify:
   - [ ] Page scrolls to correct course
   - [ ] "Learn More" section is expanded
   - [ ] Gold border and ring visible
   - [ ] "⭐ Recommended for you" badge shows
   - [ ] Smooth scroll animation
   - [ ] User can still browse other courses

### Browser Compatibility:
- ✅ Chrome
- ✅ Safari
- ✅ Firefox
- ✅ Edge
- ✅ Mobile browsers

---

## 📊 CONVERSION TRACKING

### Recommended UTM Structure:

```
?course=<slug>&utm_source=<source>&utm_medium=<medium>&utm_campaign=<campaign>&utm_content=<content>
```

**Example:**
```
?course=shame-guilt&utm_source=facebook&utm_medium=paid&utm_campaign=shame-recovery-cold&utm_content=video-testimonial-1
```

This allows tracking:
- Which course was recommended (query param)
- Which ad platform (utm_source)
- Paid vs organic (utm_medium)
- Specific campaign (utm_campaign)
- Ad creative variation (utm_content)

---

## 🔗 RELATED FILES

- **Frontend Implementation:** `/website/src/app/minicourses/page.tsx`
- **Course Data:** Lines 13-163 in `page.tsx` (MINI_COURSES array)
- **Stripe Integration:** `/website/src/app/api/create-checkout/route.ts`
- **Workbook Routes:** `/website/src/app/workbook/[slug]/`

---

## 📞 SUPPORT

**Questions about ad links?**
Contact: support@risetothrive-academy.com

**Technical implementation questions?**
Refer to `/website/src/app/minicourses/page.tsx` lines 290-301

---

## ✅ CHECKLIST FOR AD CAMPAIGN SETUP

Before launching ads:
- [ ] Verify all 18 course slugs are correct
- [ ] Test each ad link in browser
- [ ] Confirm auto-scroll works on mobile
- [ ] Check UTM parameters are appended correctly
- [ ] Verify Stripe checkout works from recommended course
- [ ] Test on different browsers and devices
- [ ] Confirm "Recommended for you" badge displays
- [ ] Ensure smooth scroll animation works
- [ ] Verify user can still browse other courses after viewing recommended one

---

**Last Updated:** December 14, 2025
**Status:** ✅ Production ready

---

END OF GUIDE
