# Testing Dynamic Course Highlighting Feature
## Quick Testing Guide for Ad Landing Pages

**Feature:** Query parameter-based course highlighting on `/minicourses` page
**Last Updated:** December 14, 2025

---

## 🎯 HOW IT WORKS

When users click an ad link with `?course=<slug>`, the mini-courses page will:
1. ✅ Auto-scroll to the matching course card (300ms delay)
2. ✅ Auto-expand the "Learn More" section
3. ✅ Highlight with gold border and ring effect
4. ✅ Show "⭐ Recommended for you" badge
5. ✅ Allow browsing all other courses normally

---

## 🧪 TEST URLS (Local Development)

### Test on localhost:3000

```
http://localhost:3000/minicourses?course=shame-guilt
http://localhost:3000/minicourses?course=fear
http://localhost:3000/minicourses?course=anxiety
http://localhost:3000/minicourses?course=trauma
http://localhost:3000/minicourses?course=depression
http://localhost:3000/minicourses?course=boundaries
```

### Expected Behavior:

1. **Page loads normally** - All 18 courses visible
2. **After 300ms** - Smooth scroll to highlighted course
3. **Learn More expanded** - Description visible automatically
4. **Visual highlight** - Gold border (`#DB910F`) with ring effect
5. **Badge appears** - "⭐ Recommended for you" at top of card
6. **User can scroll** - Browse other courses freely

---

## 🌐 TEST URLS (Production - Netlify)

### Replace with your actual domain:

```
https://risetothrive-hub.com/minicourses?course=shame-guilt
https://risetothrive-hub.com/minicourses?course=fear
https://risetothrive-hub.com/minicourses?course=anxiety
```

---

## ✅ TESTING CHECKLIST

### Desktop Testing:
- [ ] Open test URL in Chrome
- [ ] Verify page scrolls to correct course
- [ ] Confirm "Learn More" section is expanded
- [ ] Check gold border and ring are visible
- [ ] Verify "⭐ Recommended for you" badge shows
- [ ] Test smooth scroll animation
- [ ] Scroll up/down to browse other courses
- [ ] Click "Learn More" on different course (should collapse/expand)
- [ ] Click "Enroll Now" to test Stripe checkout

### Mobile Testing:
- [ ] Open test URL on mobile browser
- [ ] Verify auto-scroll works on small screen
- [ ] Check card is fully visible after scroll
- [ ] Confirm badge is readable on mobile
- [ ] Test touch interactions (expand/collapse)

### Browser Compatibility:
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Invalid Slug Testing:
- [ ] Test with invalid slug: `?course=invalid-course-name`
- [ ] Verify page loads normally without error
- [ ] Confirm no course is highlighted
- [ ] All courses browsable

### Multiple Parameters:
- [ ] Test with UTM parameters: `?course=shame-guilt&utm_source=facebook&utm_medium=paid`
- [ ] Verify course highlighting still works
- [ ] Confirm UTM tracking is preserved

---

## 🐛 TROUBLESHOOTING

### Issue: Course doesn't scroll into view
**Possible causes:**
- JavaScript disabled
- Slug doesn't match any course
- Ref not properly attached

**Check:**
- Browser console for errors
- Network tab for failed requests
- React DevTools component state

### Issue: "Learn More" not auto-expanded
**Possible causes:**
- State not updating correctly
- Query parameter not detected

**Check:**
- `isRecommended` prop value
- `isExpanded` state in CourseCard
- `useSearchParams()` hook result

### Issue: Badge not showing
**Possible causes:**
- CSS not loaded
- Conditional rendering issue

**Check:**
- Element in DOM with DevTools
- `isRecommended` prop is true
- Tailwind classes compiled

---

## 📊 MANUAL TEST RESULTS TEMPLATE

```
Date: _______________
Tester: _______________
Environment: [ ] Local  [ ] Production

Test Results:

1. Auto-scroll to course:        [ ] Pass  [ ] Fail
2. Auto-expand "Learn More":     [ ] Pass  [ ] Fail
3. Gold border/ring visible:     [ ] Pass  [ ] Fail
4. "Recommended" badge shows:    [ ] Pass  [ ] Fail
5. Smooth animation:             [ ] Pass  [ ] Fail
6. Browse other courses:         [ ] Pass  [ ] Fail
7. Stripe checkout works:        [ ] Pass  [ ] Fail
8. Mobile responsive:            [ ] Pass  [ ] Fail

Notes:
_______________________________________________
_______________________________________________
_______________________________________________
```

---

## 🔗 ALL 18 TEST SLUGS

| Course # | Slug | Test URL |
|----------|------|----------|
| 01 | `shame-guilt` | `/minicourses?course=shame-guilt` |
| 02 | `fear` | `/minicourses?course=fear` |
| 03 | `hidden-pattern` | `/minicourses?course=hidden-pattern` |
| 04 | `move-on` | `/minicourses?course=move-on` |
| 05 | `hopelessness` | `/minicourses?course=hopelessness` |
| 06 | `purpose` | `/minicourses?course=purpose` |
| 07 | `exhausted` | `/minicourses?course=exhausted` |
| 08 | `resentment` | `/minicourses?course=resentment` |
| 09 | `anger` | `/minicourses?course=anger` |
| 10 | `trauma` | `/minicourses?course=trauma` |
| 11 | `past` | `/minicourses?course=past` |
| 12 | `boundaries` | `/minicourses?course=boundaries` |
| 13 | `financial-despair` | `/minicourses?course=financial-despair` |
| 14 | `forgiveness` | `/minicourses?course=forgiveness` |
| 15 | `identity` | `/minicourses?course=identity` |
| 16 | `grief` | `/minicourses?course=grief` |
| 17 | `depression` | `/minicourses?course=depression` |
| 18 | `anxiety` | `/minicourses?course=anxiety` |

---

## 🎬 DEMO VIDEO RECORDING

When recording demo for user/client:

1. Open browser to `/minicourses` (no query param)
2. Show all 18 courses loading normally
3. Then open `/minicourses?course=fear` in new tab
4. Show smooth scroll animation
5. Point out "Recommended for you" badge
6. Show auto-expanded description
7. Scroll up/down to show other courses still accessible
8. Click "Enroll Now" to show Stripe checkout

---

## 📝 NOTES FOR ADS SETUP

When setting up Facebook/Instagram ads:
- Use correct slug from table above
- Case-sensitive (always lowercase)
- Add UTM parameters after `?course=<slug>`
- Example: `?course=shame-guilt&utm_source=facebook&utm_medium=paid&utm_campaign=shame-recovery-cold`

---

## 🔧 TECHNICAL REFERENCE

**Implementation Files:**
- `/website/src/app/minicourses/page.tsx` - Main component
- Lines 290-301: Query param detection and ref setup
- Lines 169-182: Auto-scroll and expand logic
- Lines 215-229: Highlighted styling and badge

**Key Functions:**
- `useSearchParams()` - Next.js hook to get query params
- `scrollIntoView()` - Browser API for smooth scroll
- `isRecommended` prop - Triggers highlighting behavior

---

**Last Updated:** December 14, 2025
**Status:** ✅ Ready for testing

---

END OF GUIDE
