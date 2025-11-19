// Type definitions for project data
export interface Project {
  slug: string;
  title: string;
  role: string[];
  deliverables: string[];
  stack: string[];
  year: number;
  cover: string;
  gallery: string[];
  summary: string;
  category: 'Website' | 'Identity' | 'UI/UX' | 'Systems';
  outcome?: string;
  link?: string;
}

// Sample project data
const projectsData: Project[] = [
  {
    slug: "pulseform-studio",
    title: "PulseForm Studio",
    role: ["Art Direction", "Web Build"],
    deliverables: ["Identity", "Responsive Site", "CMS"],
    stack: ["Figma", "React", "Vite"],
    year: 2025,
    cover: "/images/pulseform/cover.webp",
    gallery: [
      "/images/pulseform/1.webp",
      "/images/pulseform/2.webp",
      "/images/pulseform/3.webp"
    ],
    summary: "A modular portfolio system emphasizing realism and conceptual clarity with carefully tuned motion. Built for a contemporary creative studio seeking to showcase their work with minimal friction.",
    category: "Website",
    outcome: "40% increase in quality inquiries, improved mobile engagement",
    link: "https://pulseform.studio"
  },
  {
    slug: "fuscion",
    title: "Fuscion",
    role: ["UX Design", "Design Systems"],
    deliverables: ["Component Library", "Documentation", "Prototypes"],
    stack: ["Figma", "Storybook", "React"],
    year: 2024,
    cover: "/images/fuscion/cover.webp",
    gallery: [
      "/images/fuscion/1.webp",
      "/images/fuscion/2.webp",
      "/images/fuscion/3.webp"
    ],
    summary: "A comprehensive design system for a healthcare platform serving 50K+ patients. Focused on accessibility, consistency, and efficient design-to-development handoff.",
    category: "Systems",
    outcome: "30% faster feature delivery, WCAG AAA compliance"
  },
  {
    slug: "lunar-workspace",
    title: "Lunar Workspace",
    role: ["Brand Identity", "Web Design"],
    deliverables: ["Logo Suite", "Brand Guidelines", "Landing Page"],
    stack: ["Illustrator", "Figma", "Webflow"],
    year: 2024,
    cover: "/images/lunar/cover.webp",
    gallery: [
      "/images/lunar/1.webp",
      "/images/lunar/2.webp",
      "/images/lunar/3.webp"
    ],
    summary: "End-to-end brand identity for a productivity SaaS startup. Created a distinctive visual language that balanced approachability with technical sophistication.",
    category: "Identity",
    outcome: "Featured in Awwwards, 2K+ waitlist signups in first month"
  },
  {
    slug: "apex-analytics",
    title: "Apex Analytics",
    role: ["UI/UX Design", "Data Visualization"],
    deliverables: ["Dashboard Design", "Interactive Charts", "Mobile App"],
    stack: ["Figma", "D3.js", "React Native"],
    year: 2024,
    cover: "/images/apex/cover.webp",
    gallery: [
      "/images/apex/1.webp",
      "/images/apex/2.webp",
      "/images/apex/3.webp"
    ],
    summary: "Intuitive dashboard interface for enterprise analytics platform. Transformed complex data into actionable insights through thoughtful information hierarchy and interactive visualizations.",
    category: "UI/UX",
    outcome: "50% reduction in training time, 4.8/5 user satisfaction"
  },
  {
    slug: "echo-creative",
    title: "Echo Creative",
    role: ["Web Design", "Development"],
    deliverables: ["Website", "CMS Setup", "Animation"],
    stack: ["Figma", "Next.js", "Framer Motion"],
    year: 2023,
    cover: "/images/echo/cover.webp",
    gallery: [
      "/images/echo/1.webp",
      "/images/echo/2.webp",
      "/images/echo/3.webp"
    ],
    summary: "Elevated portfolio experience for boutique creative agency. Smooth page transitions, scroll-driven animations, and an intuitive CMS for easy content updates.",
    category: "Website",
    outcome: "90+ Lighthouse score, 60% increase in time on site"
  },
  {
    slug: "verdant-gardens",
    title: "Verdant Gardens",
    role: ["Brand Identity", "Print Design"],
    deliverables: ["Logo", "Packaging", "Collateral"],
    stack: ["Illustrator", "InDesign", "Photoshop"],
    year: 2023,
    cover: "/images/verdant/cover.webp",
    gallery: [
      "/images/verdant/1.webp",
      "/images/verdant/2.webp",
      "/images/verdant/3.webp"
    ],
    summary: "Nature-inspired identity system for sustainable urban gardening company. Organic forms and earthy palette reflect their commitment to environmental stewardship.",
    category: "Identity",
    outcome: "20% increase in brand recognition, expanded to 3 new markets"
  },
  {
    slug: "kinetic-fitness",
    title: "Kinetic Fitness",
    role: ["UX Research", "Mobile Design"],
    deliverables: ["User Flows", "Wireframes", "High-Fidelity Screens"],
    stack: ["Figma", "Miro", "Principle"],
    year: 2023,
    cover: "/images/kinetic/cover.webp",
    gallery: [
      "/images/kinetic/1.webp",
      "/images/kinetic/2.webp",
      "/images/kinetic/3.webp"
    ],
    summary: "Mobile-first fitness tracking app focused on habit formation and progress visualization. Conducted user research with 100+ athletes to inform design decisions.",
    category: "UI/UX",
    outcome: "4.7 star rating, 25K downloads in first quarter"
  },
  {
    slug: "catalyst-conference",
    title: "Catalyst Conference",
    role: ["Web Design", "Motion Graphics"],
    deliverables: ["Event Site", "Promo Videos", "Digital Assets"],
    stack: ["Webflow", "After Effects", "Figma"],
    year: 2023,
    cover: "/images/catalyst/cover.webp",
    gallery: [
      "/images/catalyst/1.webp",
      "/images/catalyst/2.webp",
      "/images/catalyst/3.webp"
    ],
    summary: "High-energy web presence for annual tech conference. Dynamic layouts and bold typography captured the event's innovative spirit and attracted 1,500+ attendees.",
    category: "Website",
    outcome: "Sold out event, 85% satisfaction rating"
  },
  {
    slug: "blueprint-system",
    title: "Blueprint Design System",
    role: ["Design Systems", "Documentation"],
    deliverables: ["Component Library", "Token System", "Usage Guidelines"],
    stack: ["Figma", "Storybook", "TypeScript"],
    year: 2024,
    cover: "/images/blueprint/cover.webp",
    gallery: [
      "/images/blueprint/1.webp",
      "/images/blueprint/2.webp",
      "/images/blueprint/3.webp"
    ],
    summary: "Scalable design system for enterprise SaaS platform serving multiple products. Established tokens, components, and patterns to unify experience across 15+ applications.",
    category: "Systems",
    outcome: "70% reduction in design inconsistencies, 5x faster prototyping"
  }
];

/**
 * Fetches all projects
 * This abstraction makes it easy to swap in a CMS later by just changing this function
 */
export async function getProjects(): Promise<Project[]> {
  // For now, return static data
  // Later: replace with CMS API call
  // Example: return await fetch('/api/projects').then(r => r.json())
  return Promise.resolve(projectsData);
}

/**
 * Fetches a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug);
}

/**
 * Fetches projects filtered by category
 */
export async function getProjectsByCategory(category: Project['category']): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter(p => p.category === category);
}

/**
 * Gets featured projects (first 6)
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.slice(0, 6);
}
