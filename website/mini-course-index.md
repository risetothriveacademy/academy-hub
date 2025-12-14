# Mini-Courses Master Index
## 18 Root-Cause Recovery Courses

**Last Updated:** December 14, 2025
**Status:** Phase 2 scripts structure ready, awaiting content

---

## 📚 COURSE CATALOG

| # | Title | Slug | Stripe ID | Portal | Workbook | Phase 2 Script |
|---|-------|------|-----------|--------|----------|----------------|
| 01 | Stuck in Shame & Guilt | `shame-guilt` | `prod_TSOXfjMDZolCjf` | `/courses/recovery-shame` | `/workbook/shame-guilt` | `/course-content/phase-2-scripts/course-01-phase2-script.md` |
| 02 | Breaking the Cycle of Fear | `fear` | `prod_TSOLXn2nBDbZQP` | `/courses/recovery-fear` | `/workbook/fear` | `/course-content/phase-2-scripts/course-02-phase2-script.md` |
| 03 | The Hidden Pattern Holding You Back | `hidden-pattern` | `prod_TSMpZT57p9oDAq` | `/courses/recovery-introductory` | `/workbook/hidden-pattern` | `/course-content/phase-2-scripts/course-03-phase2-script.md` |
| 04 | Why You Can't Move On | `move-on` | `prod_TSMmWH9yzOYL73` | `/courses/recovery-restoration` | `/workbook/move-on` | `/course-content/phase-2-scripts/course-04-phase2-script.md` |
| 05 | Fighting Hopelessness | `hopelessness` | `prod_TSMFWg6XFMg9eE` | `/courses/recovery-resilience` | `/workbook/hopelessness` | `/course-content/phase-2-scripts/course-05-phase2-script.md` |
| 06 | Feeling Lost in Your Purpose | `purpose` | `prod_TSMCerVH0BXsZ3` | `/courses/recovery-purpose` | `/workbook/purpose` | `/course-content/phase-2-scripts/course-06-phase2-script.md` |
| 07 | Exhausted but Still Broken | `exhausted` | `prod_TSM6FuEC0lytHa` | `/courses/transformational-course` | `/workbook/exhausted` | `/course-content/phase-2-scripts/course-07-phase2-script.md` |
| 08 | Resentment Ruining Your Peace | `resentment` | `prod_TSLzM8bFDDKr65` | `/courses/recovery-restoration` | `/workbook/resentment` | `/course-content/phase-2-scripts/course-08-phase2-script.md` |
| 09 | When Anger Turns Inward | `anger` | `prod_TSLtNDxCh1xPrx` | `/courses/recovery-faith` | `/workbook/anger` | `/course-content/phase-2-scripts/course-09-phase2-script.md` |
| 10 | Overwhelmed by Trauma | `trauma` | `prod_TSLqD4IgqeE9qm` | `/courses/recovery-trauma` | `/workbook/trauma` | `/course-content/phase-2-scripts/course-10-phase2-script.md` |
| 11 | Stuck in Your Past | `past` | `prod_TSLogcuruN2fnZ` | `/courses/recovery-restoration` | `/workbook/past` | `/course-content/phase-2-scripts/course-11-phase2-script.md` |
| 12 | Struggling to Set Boundaries | `boundaries` | `prod_TSLjC8OEvYczgR` | `/courses/recovery-boundaries` | `/workbook/boundaries` | `/course-content/phase-2-scripts/course-12-phase2-script.md` |
| 13 | Financial Despair | `financial-despair` | `prod_TSLfseLSAWx7wC` | `/courses/recovery-financial` | `/workbook/financial-despair` | `/course-content/phase-2-scripts/course-13-phase2-script.md` |
| 14 | When Forgiveness Feels Impossible | `forgiveness` | `prod_TSLaH2YvBa12HK` | `/courses/recovery-forgiveness` | `/workbook/forgiveness` | `/course-content/phase-2-scripts/course-14-phase2-script.md` |
| 15 | Losing Your Identity & Self-Worth | `identity` | `prod_TSLSFJjIbtJ2ZU` | `/courses/recovery-identity` | `/workbook/identity` | `/course-content/phase-2-scripts/course-15-phase2-script.md` |
| 16 | Carrying the Weight of Grief | `grief` | `prod_TSLM7m8TYevDco` | `/courses/recovery-grief` | `/workbook/grief` | `/course-content/phase-2-scripts/course-16-phase2-script.md` |
| 17 | Trapped in Depression | `depression` | `prod_TSLEywmKicQnGz` | `/courses/recovery-depression` | `/workbook/depression` | `/course-content/phase-2-scripts/course-17-phase2-script.md` |
| 18 | Why Anxiety Won't Let Go | `anxiety` | `prod_TSL8wAz7zBSFaL` | `/courses/recovery-anxiety` | `/workbook/anxiety` | `/course-content/phase-2-scripts/course-18-phase2-script.md` |

---

## 📁 FILE STRUCTURE

### Phase 2 Scripts (NEW):
```
/course-content/phase-2-scripts/
├── INDEX.md
├── course-01-phase2-script.md  (Shame & Guilt)
├── course-02-phase2-script.md  (Fear)
├── course-03-phase2-script.md  (Hidden Pattern)
├── course-04-phase2-script.md  (Move On)
├── course-05-phase2-script.md  (Hopelessness)
├── course-06-phase2-script.md  (Purpose)
├── course-07-phase2-script.md  (Exhausted)
├── course-08-phase2-script.md  (Resentment)
├── course-09-phase2-script.md  (Anger)
├── course-10-phase2-script.md  (Trauma)
├── course-11-phase2-script.md  (Past)
├── course-12-phase2-script.md  (Boundaries)
├── course-13-phase2-script.md  (Financial Despair)
├── course-14-phase2-script.md  (Forgiveness)
├── course-15-phase2-script.md  (Identity)
├── course-16-phase2-script.md  (Grief)
├── course-17-phase2-script.md  (Depression)
└── course-18-phase2-script.md  (Anxiety)
```

### Portal Pages:
```
/website/src/app/courses/
├── recovery-shame/page.tsx
├── recovery-fear/page.tsx
├── recovery-boundaries/page.tsx
├── recovery-depression/page.tsx
├── recovery-faith/page.tsx
├── recovery-financial/page.tsx
├── recovery-forgiveness/page.tsx
├── recovery-grief/page.tsx
├── recovery-identity/page.tsx
├── recovery-introductory/page.tsx
├── recovery-purpose/page.tsx
├── recovery-resilience/page.tsx
├── recovery-restoration/page.tsx
├── recovery-trauma/page.tsx
└── transformational-course/page.tsx
```

### Workbooks:
```
/website/src/app/workbook/[slug]/
├── content.ts (All 18 workbooks)
├── WorkbookClient.tsx
└── page.tsx
```

### Marketing Pages:
```
/website/src/app/minicourses/
├── page.tsx (Main hub)
├── shame-guilt/page.tsx
├── fear/page.tsx
├── [17 other courses...]
└── [Each has individual landing page]
```

---

## 🔗 INTEGRATION MAP

### Stripe → Portal Flow:
```
User clicks "Enroll Now — $49"
  ↓
/api/create-checkout (Stripe session)
  ↓
Stripe Checkout (payment)
  ↓
Stripe Webhook → HubSpot
  ↓
HubSpot sends access email
  ↓
User logs into /courses/[slug]
  ↓
Watches Phase 2 video (30 min)
  ↓
Completes /workbook/[slug]
```

---

## 📊 CONTENT STATUS

### ✅ COMPLETE:
- [x] All 18 workbooks with content
- [x] All 18 portal page structures
- [x] All 18 marketing landing pages
- [x] Stripe checkout integration
- [x] HubSpot email sequences (documented)
- [x] Phase 2 script structure (placeholders)

### ⏳ PENDING:
- [ ] Phase 2 script content (awaiting Ava extraction)
- [ ] Video production (Fliki)
- [ ] Video embeds in portal pages
- [ ] HubSpot workflows (DO NOT BUILD YET)
- [ ] Course access login enforcement

---

## 🎬 PRODUCTION PIPELINE

1. **Scripts:** Ava extracts → S.N. inserts → ✅ Ready
2. **Videos:** Fliki production → Upload → Embed
3. **Portal:** Video embeds → Access control → Testing
4. **HubSpot:** Workflows → Email templates → Activation
5. **Launch:** All 18 courses live

---

## 📝 RELATED DOCS

- **Phase 2 Scripts Index:** `/course-content/phase-2-scripts/INDEX.md`
- **HubSpot Emails:** `/docs/HUBSPOT-MINICOURSES-EMAILS.md`
- **HubSpot Setup:** `/HUBSPOT-MINICOURSES-SETUP.md`
- **Stripe Products:** `/docs/stripe-products.md`
- **Ad Scripts:** `/docs/runbook-recovery-series-ads.md` (DO NOT MODIFY)

---

## 🚀 FOR S.N. (NEXT STEPS)

1. **Extract Phase 2 scripts** from Word doc
2. **Replace placeholders** in `/course-content/phase-2-scripts/course-XX-phase2-script.md`
3. **Update this index** status from 🟡 Placeholder → 🟢 Complete
4. **Commit:** `content: add Course XX Phase 2 script`
5. **Repeat** for all 18 courses

---

**DO NOT MODIFY:**
- `/website/docs/runbook-recovery-series-ads.md` (ad scripts)
- `/website/video-assets/templates/**` (video templates - not yet)

---

END OF INDEX
