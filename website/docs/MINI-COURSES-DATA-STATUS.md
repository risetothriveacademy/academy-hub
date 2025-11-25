# Mini-Courses Data Status Report
**Date:** November 23, 2025
**File Location:** `website/data/courses.json`

---

## ✅ Data File Found

**Path:** `website/data/courses.json`
**Backup:** `website/data/courses.backup.json` ✅

---

## 📊 Course Count

**Total Courses Found:** 18 ✅

---

## 📋 All Course Slugs

1. `shame-guilt`
2. `fear`
3. `anxiety`
4. `depression`
5. `grief`
6. `identity`
7. `forgiveness`
8. `financial-despair`
9. `boundaries`
10. `past`
11. `trauma`
12. `anger`
13. `resentment`
14. `exhausted`
15. `purpose`
16. `hopelessness`
17. `move-on`
18. `hidden-pattern`

---

## 🔗 Stripe Link Status

### ✅ Active Stripe Links: 17/18

**All courses have Stripe links EXCEPT:**
- `trauma` - Empty string `""` (Coming Soon)

### ✅ Complete Metadata Verified

Each course entry contains:
- ✅ `slug` (unique identifier)
- ✅ `course_title` (full title)
- ✅ `root_cause` (category)
- ✅ `seo_title` (page title)
- ✅ `page_heading` (display heading)
- ✅ `short_description` (summary)
- ✅ `stripe_link` (payment URL - 17 active, 1 empty)
- ✅ `redirect_url` (thank-you page)
- ✅ `category` (introductory-mini)
- ✅ `product_type` (digital_course)
- ✅ `cta_label` (button text)

---

## ⚠️ Missing or Empty Fields

**Trauma Course:**
- `stripe_link`: `""` (empty string)
- Status: Coming Soon placeholder
- All other fields complete ✅

**Action Required:**
- Add Stripe payment link for Trauma course when ready

---

## ✅ Data Integrity Check

- ✅ Valid JSON format
- ✅ All 18 entries parseable
- ✅ No duplicate slugs
- ✅ All required fields present
- ✅ Consistent structure across all entries

---

## 📊 Summary

| Metric | Status |
|--------|--------|
| Total Courses | 18 ✅ |
| Complete Metadata | 18/18 ✅ |
| Active Stripe Links | 17/18 ⚠️ |
| Data Integrity | Valid ✅ |
| Backup File | Exists ✅ |

---

**Status:** ✅ **DATA VERIFIED - PRODUCTION READY**
**Blockers:** None (Trauma Stripe link is placeholder for future)
