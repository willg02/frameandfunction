// Type definitions for service data
export interface Service {
  title: string;
  slug: string;
  outcome: string;
  includes: string[];
  timeline: string;
  startingPrice?: string;
  description?: string;
}

// Sample service data
const servicesData: Service[] = [
  {
    title: "Modern Website Build",
    slug: "website-build",
    outcome: "Fast, accessible, and maintainable site that represents your brand and drives conversions.",
    includes: [
      "Information architecture",
      "Design system foundation",
      "Responsive pages (5-10 pages)",
      "Basic CMS integration",
      "Performance optimization",
      "SEO fundamentals"
    ],
    timeline: "2–4 weeks",
    startingPrice: "$4,500",
    description: "Custom-built websites using modern frameworks. No templates—just clean code, thoughtful design, and fast load times."
  },
  {
    title: "Identity + Style Guide",
    slug: "brand-identity",
    outcome: "Consistent visual identity across all touchpoints with clear usage guidelines.",
    includes: [
      "Logo suite (primary + variations)",
      "Typography system",
      "Color palette with accessibility notes",
      "Usage rules and spacing guidelines",
      "Digital asset kit (SVG, PNG, PDF)"
    ],
    timeline: "1–3 weeks",
    startingPrice: "$3,000",
    description: "Distinctive brand identities that reflect your values and resonate with your audience. Includes complete guidelines for consistent application."
  },
  {
    title: "UX Frameworks",
    slug: "ux-frameworks",
    outcome: "User-centered designs backed by research and validated through testing.",
    includes: [
      "User research and personas",
      "Information architecture",
      "Wireframes and user flows",
      "Interactive prototypes",
      "Usability testing",
      "Design recommendations"
    ],
    timeline: "2–5 weeks",
    startingPrice: "$3,500",
    description: "Strategic UX work that solves real problems. We start with research, iterate quickly, and validate with real users."
  },
  {
    title: "Design Systems",
    slug: "design-systems",
    outcome: "Scalable component library that accelerates development and ensures consistency.",
    includes: [
      "Design token system",
      "Component library (20-40 components)",
      "Usage documentation",
      "Code-ready specs",
      "Accessibility guidelines",
      "Maintenance plan"
    ],
    timeline: "4–8 weeks",
    startingPrice: "$7,500",
    description: "Enterprise-grade design systems that unite design and development. From tokens to components, everything documented and production-ready."
  },
  {
    title: "Design Operations",
    slug: "design-ops",
    outcome: "Streamlined design workflows, improved collaboration, and measurable impact.",
    includes: [
      "Process audit and recommendations",
      "Tool stack optimization",
      "Team workflows and rituals",
      "Design quality metrics",
      "Documentation templates",
      "Ongoing support and refinement"
    ],
    timeline: "Ongoing",
    startingPrice: "$2,500/mo",
    description: "Operational excellence for design teams. We help you work smarter with better tools, clearer processes, and meaningful metrics."
  }
];

/**
 * Fetches all services
 * This abstraction makes it easy to swap in a CMS later by just changing this function
 */
export async function getServices(): Promise<Service[]> {
  // For now, return static data
  // Later: replace with CMS API call
  // Example: return await fetch('/api/services').then(r => r.json())
  return Promise.resolve(servicesData);
}

/**
 * Fetches a single service by slug
 */
export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const services = await getServices();
  return services.find(s => s.slug === slug);
}
