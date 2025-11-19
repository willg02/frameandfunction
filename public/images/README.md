# Image Guide

Place your project images in these folders. Each project needs:

## Required Images:

### For each project folder:
- **cover.webp** (or .jpg) - Main project card image (recommended: 1600x1000px)
- **1.webp** - Gallery image 1
- **2.webp** - Gallery image 2  
- **3.webp** - Gallery image 3 (optional, add more as needed)

## Current Project Folders:

1. **pulseform/** - PulseForm Studio project
2. **meridian/** - Meridian Health project
3. **lunar/** - Lunar Workspace project
4. **apex/** - Apex Analytics project
5. **echo/** - Echo Creative project
6. **verdant/** - Verdant Gardens project
7. **kinetic/** - Kinetic Fitness project
8. **catalyst/** - Catalyst Conference project
9. **blueprint/** - Blueprint Design System project

## Tips:

- **Format:** WebP is best (smaller files), but JPG/PNG work fine
- **Size:** Covers ~1600x1000px, gallery images ~1920x1080px
- **Compress:** Use squoosh.app to reduce file size
- **Naming:** Use lowercase, no spaces (e.g., cover.webp, detail-1.webp)

## When you add your own projects:

1. Create a new folder in `/public/images/your-project-name/`
2. Add your images (cover.webp, 1.webp, etc.)
3. Update `src/data/projects.ts` with the new project and image paths

Example:
```typescript
{
  slug: "your-project",
  cover: "/images/your-project/cover.webp",
  gallery: [
    "/images/your-project/1.webp",
    "/images/your-project/2.webp"
  ]
}
```
