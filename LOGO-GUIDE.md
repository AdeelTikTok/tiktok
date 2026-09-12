# TikTok Shop Solutions Logo Guide

## 📋 Overview

The TikTok Shop Solutions logo has been professionally redesigned using your website's premium color scheme (Ink, Gold, Paper). This guide covers all logo variations and usage guidelines.

## 🎨 Color Palette

| Color | Name | Hex Code | Usage |
|-------|------|----------|-------|
| ![#0a0e27](https://via.placeholder.com/30/0a0e27/0a0e27?text=) | Ink | `#0a0e27` | Dark backgrounds, handles, details |
| ![#e8bc10](https://via.placeholder.com/30/e8bc10/e8bc10?text=) | Gold | `#e8bc10` | Primary shopping bag, accents |
| ![#f5f5f0](https://via.placeholder.com/30/f5f5f0/f5f5f0?text=) | Paper | `#f5f5f0` | Text, highlights, light elements |

## 📁 Logo Files

### Main Versions

1. **logo.svg**
   - Full logo with text and icon
   - Best for: Headers, hero sections, large displays
   - Dimensions: Responsive (viewBox: 0 0 300 300)
   - File size: Minimal (SVG vector)

2. **logo-icon.svg**
   - Icon only (shopping bag with TikTok notes)
   - Best for: Favicons, app icons, small spaces
   - Dimensions: 200x200px (square)
   - Perfect for: Navigation bars, social media profiles

3. **logo-horizontal.svg**
   - Horizontal layout with text
   - Best for: Navbars, headers, wide layouts
   - Dimensions: 400x120px (landscape)
   - Perfect for: Website header, social media banners

## 💡 Usage Guidelines

### Where to Use Each Version

#### **Logo Icon** (logo-icon.svg)
- ✅ Favicon
- ✅ App icons
- ✅ Navigation bar
- ✅ Small profile pictures
- ✅ Social media profile picture
- ❌ Large displays
- ❌ Marketing materials

#### **Main Logo** (logo.svg)
- ✅ Large hero sections
- ✅ About pages
- ✅ Landing pages
- ✅ Print materials
- ✅ Brand guidelines documents
- ❌ Small spaces (use icon instead)

#### **Horizontal Logo** (logo-horizontal.svg)
- ✅ Website header
- ✅ Newsletter headers
- ✅ Social media banners
- ✅ Video intros/outros
- ✅ Presentation slides
- ❌ Vertical spaces
- ❌ Favicon

## 🔧 Implementation Examples

### Using in Next.js

```tsx
// Navigation component
import Image from 'next/image';

export function Header() {
  return (
    <header>
      <Image
        src="/logo-horizontal.svg"
        alt="TikTok Shop Solutions"
        width={300}
        height={90}
        priority
      />
    </header>
  );
}

// Favicon in layout.tsx
export const metadata = {
  icons: {
    icon: '/logo-icon.svg',
  },
};
```

### HTML/CSS Usage

```html
<!-- Header Logo -->
<img src="/logo-horizontal.svg" alt="TikTok Shop Solutions" class="logo-header">

<!-- Favicon -->
<link rel="icon" href="/logo-icon.svg" type="image/svg+xml">

<!-- CSS for sizing -->
<style>
  .logo-header {
    height: 60px;
    width: auto;
    filter: drop-shadow(0 2px 8px rgba(232, 188, 16, 0.2));
  }
</style>
```

## 🎯 Brand Consistency

### ✅ Do's
- Use the logo on brand-colored backgrounds
- Maintain aspect ratio when resizing
- Use the full logo for brand visibility
- Use icon for small applications
- Keep adequate white space around logo

### ❌ Don'ts
- Don't change colors (always use Gold, Ink, Paper)
- Don't stretch or distort the logo
- Don't remove the TikTok music notes
- Don't add drop shadows or effects
- Don't use different color variations

## 📐 Sizing Guide

| Usage | Recommended Size |
|-------|-----------------|
| Favicon | 32x32px - 192x192px |
| Navigation | 40-60px height |
| Hero Section | 200-300px height |
| Social Media Profile | 400x400px - 1200x1200px |
| Print (300 DPI) | 3" x 3" minimum |
| Business Card | 1" x 1" |
| Banner | 1200x300px or 1920x480px |

## 🔄 Alternative Variations

### Badge Style (For certifications)
Used for awards, certifications, or "Official Partner" badges
- Circular border around logo
- 1:1 aspect ratio
- Works on any background

### With Background (For social media)
Gold/ink gradient background
- Perfect for social posts
- 1:1 or 16:9 aspect ratio
- Ready to share

## 📊 Color Usage Examples

### On Dark Backgrounds (Ink #0a0e27)
- Use Gold shopping bag
- Use Paper for text
- Add subtle glow effect

### On Light Backgrounds
- Use Gold shopping bag with Gold shadow
- Use Ink for details
- Use Ink for text

### On Gold Backgrounds
- Use Ink shopping bag
- Use Paper for highlights
- Works for special editions

## 🎬 Animation Guidelines

If animating the logo:
- Keep motion subtle (fade, float, scale)
- Duration: 2-3 seconds minimum
- Don't distort or morph shapes
- Maintain color integrity

## 📱 Responsive Design

All logos are SVG vectors, so they scale perfectly:

```css
/* Logo scales with screen size */
.logo {
  width: 100%;
  max-width: 300px;
  height: auto;
}

/* Icon stays fixed size */
.logo-icon {
  width: 48px;
  height: 48px;
}
```

## ✨ Design Specifications

### Logo Icon (Square)
- **Viewbox:** 0 0 200 200
- **Bag Width:** 80px
- **Bag Height:** 110px
- **Music Notes:** Centered
- **Stroke Width:** 2px

### Full Logo
- **Viewbox:** 0 0 300 300
- **Bag Width:** 120px
- **Bag Height:** 165px
- **Handles:** Curved, dual-layer
- **Highlight:** Ellipse with 0.25 opacity

### Horizontal Logo
- **Viewbox:** 0 0 400 120
- **Bag:** Left-aligned
- **Text:** Right of bag
- **Font:** Sans-serif (Arial/Helvetica)
- **Font Sizes:** 32px (main), 14px (tagline)

## 🚀 Deployment

All logo files are in `/public/` directory:
- `logo.svg` - Main logo
- `logo-icon.svg` - Icon only
- `logo-horizontal.svg` - Horizontal with text

These are production-ready and optimized for web use.

## 📞 Questions?

Refer to the main color variables in your CSS:
- `--ink: #0a0e27`
- `--gold: #e8bc10`
- `--paper: #f5f5f0`

Always maintain these exact colors for brand consistency.
