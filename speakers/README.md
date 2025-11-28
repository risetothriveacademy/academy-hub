# Speakers Landing Page

## Overview
This folder contains the speaking engagements landing page for Torah Mathews, MBA. The page showcases Torah's speaking topics, testimonials, and provides information for organizations interested in booking her for events.

## Location
The speakers page is integrated into the Next.js application located at `/website/src/app/speakers/page.tsx`

## Dependencies
The speakers page uses the following components and utilities:

### UI Components (all located in `/website/src/components/ui/`)
- `button.tsx` - Button component with various variants
- `card.tsx` - Card components for content sections
- `badge.tsx` - Badge component for labels and tags

### Custom Components (located in `/website/src/components/`)
- `ImageWithFallback.tsx` - Image component with fallback support

### External Dependencies
- `lucide-react` - Icon library (already installed in the project)
- `@radix-ui/react-slot` - Required by the Button component
- `tailwindcss` - For styling

## Assets
The following assets are located in `/website/public/`:
- `torah-logo.png` - Torah Mathews logo
- `torah-mathews-author.jpg` - Author photo

## How to Access
1. Start the development server:
   ```bash
   cd website
   bun dev
   ```

2. Navigate to: `http://localhost:3000/speakers`

## Features
- **Responsive Design**: Mobile-first design that works across all devices
- **Speaking Topics**: Displays 6 signature speaking topics with descriptions
- **Testimonials**: Client feedback and reviews
- **CTA Sections**: Multiple call-to-action buttons for booking and downloading media kit
- **Email Integration**: mailto links for easy contact

## Customization
To customize the page:
1. Edit `/website/src/app/speakers/page.tsx`
2. Modify the content arrays (speakingTopics, testimonials, etc.)
3. Update styling using Tailwind CSS classes
4. Replace images in the `/website/public/` directory

## Environment Variables
No environment variables are required for this page. All contact links use direct mailto links.

## Notes
- All styling uses Tailwind CSS classes consistent with the rest of the website
- The page is standalone and doesn't require authentication
- Images use the fallback mechanism to ensure the page works even if local images are missing
