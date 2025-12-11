# 📚 Mini-Course Workbook Cover Template

**Beautiful, professional workbook covers for all 18 Rise to Thrive Academy mini-courses**

---

## 🎨 What's Included

- `cover-template.html` - Customizable workbook cover template
- `courses-config.js` - Pre-configured data for all 18 courses (titles, scriptures, filenames)
- This README with step-by-step instructions

---

## 🚀 Quick Start (3 Simple Steps)

### **Step 1: Open the Template**
1. Open `cover-template.html` in your web browser (Chrome or Firefox recommended)
2. You'll see a beautiful workbook cover with placeholder content

### **Step 2: Customize for Each Course**
1. Open `courses-config.js` - copy the code for the course you want
2. Open your browser's **Console** (Press `F12` or right-click → Inspect → Console tab)
3. Paste the configuration code
4. The cover updates instantly!

### **Step 3: Export to PDF**
1. Press `Ctrl + P` (Windows) or `Cmd + P` (Mac)
2. Select "Save as PDF" as destination
3. Click "Save"
4. Name it: `workbook-[course-name].pdf`

**Done!** Repeat for all 18 courses.

---

## 📖 Detailed Instructions

### **Method 1: Using Browser Console (Fastest)**

```javascript
// 1. Open cover-template.html in browser
// 2. Press F12 to open Developer Console
// 3. Copy & paste this code (example for Course #1):

customizeCover({
  courseNumber: '1',
  courseTitle: 'Stuck in Shame & Guilt',
  scriptureText: '"There is therefore now no condemnation for those who are in Christ Jesus."',
  scriptureRef: 'ROMANS 8:1',
  imageUrl: 'images/shame-guilt.png' // Optional: add custom image
});

// 4. Press Ctrl/Cmd + P to print to PDF
```

### **Method 2: Edit HTML Directly**

1. Open `cover-template.html` in a text editor
2. Find the `<script>` section at the bottom
3. Uncomment and edit the `customizeCover()` function:

```javascript
customizeCover({
  courseNumber: '1',
  courseTitle: 'Stuck in Shame & Guilt',
  scriptureText: '"There is therefore now no condemnation..."',
  scriptureRef: 'ROMANS 8:1',
  imageUrl: 'path/to/your/image.png'
});
```

4. Save and open in browser
5. Print to PDF

---

## 🎨 Adding Custom Images

### **Option 1: Use Unsplash (Free Stock Photos)**

```javascript
customizeCover({
  courseNumber: '1',
  courseTitle: 'Stuck in Shame & Guilt',
  scriptureText: '"There is therefore now no condemnation..."',
  scriptureRef: 'ROMANS 8:1',
  imageUrl: 'https://images.unsplash.com/photo-xxxxx'
});
```

**Recommended image searches:**
- Course 1 (Shame): "breaking chains", "freedom", "light"
- Course 2 (Fear): "courage", "strength", "shield"
- Course 5 (Hopelessness): "sunrise", "hope", "light in darkness"
- Course 10 (Trauma): "gentle healing", "safety", "peace"

### **Option 2: Use Your Own Images**

1. Create an `images/` folder next to `cover-template.html`
2. Add your course images (PNG, JPG, or SVG)
3. Reference them:

```javascript
imageUrl: 'images/shame-guilt.png'
```

### **Option 3: Use AI-Generated Images**

Use Midjourney, DALL-E, or similar with prompts from `courses-config.js`:
- "breaking chains, freedom, light breaking through darkness, teal and gold colors"
- "courage and strength, overcoming fear, shield of faith, teal and gold gradient"

---

## 📋 All 18 Course Titles & Scriptures

Copy from `courses-config.js`:

1. **Stuck in Shame & Guilt** - Romans 8:1
2. **Breaking the Cycle of Fear** - 2 Timothy 1:7
3. **The Hidden Pattern Holding You Back** - John 8:32
4. **Why You Can't Move On** - Isaiah 43:18-19
5. **Fighting Hopelessness** - Romans 15:13
6. **Feeling Lost in Your Purpose** - Jeremiah 29:11
7. **Exhausted but Still Broken** - Matthew 11:28
8. **Resentment Ruining Your Peace** - Ephesians 4:31-32
9. **When Anger Turns Inward** - Ephesians 4:26
10. **Overwhelmed by Trauma** - Psalm 34:18
11. **Stuck in Your Past** - 2 Corinthians 5:17
12. **Struggling to Set Boundaries** - Proverbs 4:23
13. **Financial Despair** - Philippians 4:19
14. **When Forgiveness Feels Impossible** - Colossians 3:13
15. **Losing Your Identity & Self-Worth** - 1 Peter 2:9
16. **Carrying the Weight of Grief** - Matthew 5:4
17. **Trapped in Depression** - Psalm 42:11
18. **Why Anxiety Won't Let Go** - Philippians 4:6

---

## 🎨 Design Specifications

**Colors:**
- Teal: `#0097B2`
- Gold: `#DB910F`
- Background: Cream gradient

**Dimensions:**
- 8.5" × 11" (US Letter)
- Print-ready quality
- High-resolution graphics

**Fonts:**
- Montserrat (Google Fonts)
- Bold for titles
- Regular for scripture

---

## 💡 Tips for Best Results

### **For Professional Quality:**

1. **Use High-Resolution Images**
   - Minimum 1000px × 1000px
   - PNG or JPG format
   - Transparent backgrounds work best

2. **Keep Scripture Relevant**
   - All scriptures in `courses-config.js` match the course theme
   - Feel free to change to your preferred version (NIV, NLT, KJV, etc.)

3. **Print Settings**
   - Background graphics: ON
   - Margins: None
   - Scale: 100%
   - Paper size: Letter (8.5" × 11")

4. **Batch Production**
   - Open template once
   - Generate all 18 covers in one session
   - Use browser console for fast switching

---

## 🔧 Customization Options

### **Change Brand Colors:**

Edit the CSS in `cover-template.html`:

```css
/* Find and replace these values: */
#0097B2  /* Teal - change to your color */
#DB910F  /* Gold - change to your color */
```

### **Change Scripture:**

```javascript
scriptureText: '"Your custom scripture here"',
scriptureRef: 'BOOK CHAPTER:VERSE'
```

### **Add Your Logo:**

Replace the person icon SVG with your own logo image.

---

## 📦 File Naming Convention

**Use these exact names for consistency:**

```
workbook-shame-guilt.pdf
workbook-fear.pdf
workbook-hidden-pattern.pdf
workbook-move-on.pdf
workbook-hopelessness.pdf
workbook-purpose.pdf
workbook-exhausted.pdf
workbook-resentment.pdf
workbook-anger.pdf
workbook-trauma.pdf
workbook-past.pdf
workbook-boundaries.pdf
workbook-financial-despair.pdf
workbook-forgiveness.pdf
workbook-identity.pdf
workbook-grief.pdf
workbook-depression.pdf
workbook-anxiety.pdf
```

---

## ❓ Troubleshooting

**Q: The print looks cut off**
- A: Make sure margins are set to "None" in print settings

**Q: Colors look faded in PDF**
- A: Enable "Background graphics" in print dialog

**Q: Custom image not showing**
- A: Check the file path is correct and image file exists

**Q: Scripture is too long**
- A: Shorten the verse or split into two lines

**Q: Want to use a different Bible version?**
- A: Just edit the `scriptureText` in the config!

---

## 🎯 Next Steps

After creating all 18 covers:

1. **Create Full Workbooks**
   - Use these covers as Page 1
   - Add interior pages with:
     - Journaling prompts
     - Scripture reflections
     - Prayer sections
     - Action steps
     - Identity statements

2. **Upload to Website**
   - Save PDFs to `/public/workbooks/`
   - Update mini-course pages with download links

3. **Integrate with Stripe**
   - Deliver workbooks after purchase
   - Email PDF links to students

---

## 📞 Need Help?

If you need assistance:
- Check `courses-config.js` for all pre-configured data
- Review the example code in `cover-template.html`
- Test with one course first before generating all 18

---

## ✨ Features

✅ **Professional Design** - Matches Foundation Course aesthetic
✅ **Brand Consistent** - Teal & gold Rise to Thrive colors
✅ **Bible-Centered** - Relevant scripture for each course
✅ **Easy Customization** - Change text with one command
✅ **Print-Ready** - High-quality PDF export
✅ **Batch Friendly** - Generate all 18 covers quickly

---

**Created with ❤️ for Rise to Thrive Academy**
