# Frame & Function

A modern, minimalist portfolio site built with React, TypeScript, and Vite. Designed for clean presentation of digital design services with a focus on clarity, speed, and maintainability.

## ✨ Features

- **Modern Stack:** React 18 + TypeScript + Vite
- **Clean Design System:** Fluid typography, custom CSS tokens, lilac accent color
- **Responsive:** Mobile-first design with smooth animations
- **Accessible:** WCAG AA compliant, keyboard navigation, skip links
- **Fast:** Optimized bundle, lazy loading, efficient rendering
- **SEO Ready:** Meta tags, semantic HTML, structured data
- **CMS Ready:** Abstracted data layer for easy CMS integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── app/
│   └── App.tsx              # Main app with routing
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Card.tsx             # Card container
│   ├── ContactForm.tsx      # Contact form with validation
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section
│   ├── NavBar.tsx           # Navigation with mobile menu
│   ├── ProjectCard.tsx      # Project showcase card
│   ├── ProjectGrid.tsx      # Grid with filtering
│   ├── ServicesList.tsx     # Services display
│   └── ...                  # Other components
├── data/
│   ├── projects.ts          # Project data & abstraction layer
│   └── services.ts          # Services data & abstraction layer
├── pages/
│   ├── Home.tsx             # Landing page
│   ├── Work.tsx             # Projects portfolio
│   ├── Services.tsx         # Services breakdown
│   ├── About.tsx            # About & principles
│   └── Contact.tsx          # Contact form page
├── styles/
│   ├── tokens.css           # Design system tokens
│   └── globals.css          # Global styles
└── utils/
    └── seo.ts               # SEO utilities
```

## 🎨 Design System

### Colors
- **Ink:** `#0A0A0A` (primary text)
- **Accent:** `#A78BFA` (lilac - primary accent)
- **Paper:** `#F6F7F8` (background)
- **Line:** `#E5E7EB` (borders)

### Typography
- **Display:** Inter Tight (headings)
- **Body:** Inter (paragraph text)
- **Scale:** Fluid clamp-based sizing

### Spacing
Consistent spacing scale from `--space-xs` (8px) to `--space-4xl` (120px)

## 🔄 CMS Migration Path

The codebase is designed for easy CMS integration:

### Current Architecture
```typescript
// src/data/projects.ts
export async function getProjects(): Promise<Project[]> {
  return Promise.resolve(projectsData);
}
```

### Future CMS Integration
```typescript
// Just update the data fetching functions
export async function getProjects(): Promise<Project[]> {
  const response = await fetch('YOUR_CMS_API/projects');
  return response.json();
}
```

All components consume data through these abstraction functions, so no component changes needed!

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

This generates optimized static files in the `dist/` directory.

### Deploy Options
- **Vercel:** `vercel deploy`
- **Netlify:** Connect repo or drag/drop `dist/` folder
- **Cloudflare Pages:** Connect repo
- **Any static host:** Upload contents of `dist/`

## 🔜 Next.js Migration

When ready to migrate to Next.js for SSR/SSG:

1. **Pages:** Convert to Next.js file-based routing
2. **SEO:** Replace `updateSEO()` with Next.js `<Head>` or metadata API
3. **Data:** Use `getStaticProps` / `getServerSideProps`
4. **Components:** Work as-is (React components are portable)

## 📝 Adding Content

### Add a New Project
Edit `src/data/projects.ts`:

```typescript
{
  slug: "project-name",
  title: "Project Title",
  role: ["Role 1", "Role 2"],
  deliverables: ["Deliverable 1", "Deliverable 2"],
  stack: ["Tech 1", "Tech 2"],
  year: 2025,
  cover: "/images/project/cover.webp",
  gallery: ["/images/project/1.webp"],
  summary: "Project description...",
  category: "Website"
}
```

### Add a New Service
Edit `src/data/services.ts`:

```typescript
{
  title: "Service Name",
  slug: "service-slug",
  outcome: "What clients get",
  includes: ["Item 1", "Item 2"],
  timeline: "2-4 weeks",
  startingPrice: "$5,000"
}
```

## 🎯 Performance

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 📄 License

© 2025 Frame & Function. All rights reserved.

## 🤝 Contact

Questions? Reach out at hello@frameandfunction.com

---

**Built with clarity, modularity, and ownership in mind.**
