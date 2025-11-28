# Legacy TV & Media Appearances - Image Setup Guide

## 📺 Overview

The Speaking Landing Page includes a "Legacy TV & Media Appearances" section that displays Torah's media appearances with placeholder images. This guide explains how to replace the placeholders with actual Legacy TV episode screenshots.

## 🖼️ Required Images

You need to prepare **3 episode screenshots** with the following filenames:

1. `legacy-tv-episode-1.jpg`
2. `legacy-tv-episode-2.jpg`
3. `legacy-tv-episode-3.jpg`

## 📐 Image Specifications

### Recommended Dimensions
- **Size**: 1920x1080px (16:9 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: Optimized to under 500KB per image for fast loading
- **Quality**: High resolution for professional appearance

### Best Practices
- Use clear, high-quality screenshots from the episodes
- Ensure Torah is prominently featured in the frame
- Choose moments that capture engagement and energy
- Include the Legacy TV branding if visible
- Avoid blurry or pixelated images

## 📁 Installation Steps

### Step 1: Prepare Your Images
1. Export or screenshot your Legacy TV episodes at 1920x1080px
2. Rename them exactly as specified above
3. Optimize file sizes using an image compression tool (e.g., TinyPNG, Squoosh)

### Step 2: Upload to Website
1. Navigate to the `/website/public/` directory in your project
2. Place all three images directly in the `public` folder:
   ```
   /website/public/
   ├── legacy-tv-episode-1.jpg
   ├── legacy-tv-episode-2.jpg
   └── legacy-tv-episode-3.jpg
   ```

### Step 3: Verify
1. The images will automatically replace the placeholders
2. The "PLACEHOLDER" badge will still appear (this is intentional until you're ready to go live)
3. Test the page locally to ensure images load correctly

## 🎨 Current Placeholder Images

The section currently uses professional stock images from Unsplash as fallbacks:
- Episode 1: Professional interview setting
- Episode 2: Corporate speaking environment
- Episode 3: Conference/seminar setting

These will be automatically replaced when you add your actual episode images.

## 🔧 Customization

### Adding More Episodes

To add more than 3 episodes, edit the `/website/src/app/speakers/page.tsx` file:

1. Locate the Legacy TV section (around line 331)
2. Add additional objects to the array:
```typescript
{
  episode: 4,
  title: "Legacy TV Episode 4",
  fallback: "YOUR_FALLBACK_IMAGE_URL"
}
```
3. Create the corresponding image file: `legacy-tv-episode-4.jpg`

### Removing the PLACEHOLDER Badge

Once you've added your actual images and are ready to go live:

1. Open `/website/src/app/speakers/page.tsx`
2. Find this code block (around line 368):
```tsx
{/* PLACEHOLDER Badge */}
<div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
  PLACEHOLDER
</div>
```
3. Delete or comment out the entire div

### Linking Episodes to Video Content

To make the "Watch Episode" buttons functional:

1. Add a `url` property to each episode object
2. Wrap the button in a link:
```tsx
<a href={item.url} target="_blank" rel="noopener noreferrer">
  <Button className="w-full bg-[#DB910F] hover:bg-[#c5820e] text-white">
    <Play className="h-4 w-4 mr-2" />
    Watch Episode
  </Button>
</a>
```

## 📝 Episode Metadata

Consider adding the following information to each episode card:

- Episode title/topic
- Air date
- Duration
- Brief description (currently uses generic text)
- Guest information (if applicable)

Edit the card content in the `page.tsx` file to customize this information.

## ✅ Checklist

Before going live, ensure:

- [ ] All 3 episode images are added to `/website/public/`
- [ ] Images are optimized and under 500KB each
- [ ] Images display correctly on desktop and mobile
- [ ] "Watch Episode" buttons link to actual video content
- [ ] PLACEHOLDER badges are removed
- [ ] Episode descriptions are updated with actual content
- [ ] Metadata is accurate (titles, dates, descriptions)

## 🆘 Troubleshooting

### Images Not Displaying
- Verify files are in `/website/public/` (not in a subdirectory)
- Check that filenames match exactly (case-sensitive)
- Clear your browser cache and rebuild the site

### Images Look Stretched
- Ensure source images are 16:9 aspect ratio (1920x1080px)
- The `aspect-video` class maintains proper proportions

### File Size Too Large
- Use compression tools like:
  - [TinyPNG](https://tinypng.com/)
  - [Squoosh](https://squoosh.app/)
  - [ImageOptim](https://imageoptim.com/)

## 📞 Support

For questions or issues with the Legacy TV section, refer to:
- Main project README: `/README.md`
- Website documentation: `/website/README.md`
- Contact the development team

---

**Last Updated**: November 2025
**Version**: 1.0.0