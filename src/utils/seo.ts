/**
 * SEO utility functions for managing meta tags and Open Graph data
 * Designed to be easily extended when migrating to Next.js
 */

export interface SEOData {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
}

/**
 * Updates document meta tags
 * In Next.js, this would be replaced with next/head or metadata API
 */
export function updateSEO(data: SEOData): void {
  // Update title
  document.title = data.title;

  // Update meta description
  updateMetaTag('name', 'description', data.description);

  // Open Graph tags
  updateMetaTag('property', 'og:title', data.title);
  updateMetaTag('property', 'og:description', data.description);
  updateMetaTag('property', 'og:type', data.type || 'website');
  
  if (data.url) {
    updateMetaTag('property', 'og:url', data.url);
  }
  
  if (data.image) {
    updateMetaTag('property', 'og:image', data.image);
  }

  // Twitter Card tags
  updateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateMetaTag('name', 'twitter:title', data.title);
  updateMetaTag('name', 'twitter:description', data.description);
  
  if (data.image) {
    updateMetaTag('name', 'twitter:image', data.image);
  }
}

/**
 * Helper function to update or create a meta tag
 */
function updateMetaTag(
  attribute: 'name' | 'property',
  value: string,
  content: string
): void {
  let element = document.querySelector(`meta[${attribute}="${value}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

/**
 * Default SEO data for the site
 */
export const defaultSEO: SEOData = {
  title: 'Frame & Function — Digital Design Studio',
  description: 'Modular digital design. Functional by default. Lean, modern web experiences crafted for clarity, speed, and control.',
  url: 'https://frameandfunction.com',
  image: 'https://frameandfunction.com/og-image.jpg',
  type: 'website'
};

/**
 * Generate page-specific SEO data
 */
export function getPageSEO(
  page: 'home' | 'work' | 'services' | 'about' | 'contact',
  customData?: Partial<SEOData>
): SEOData {
  const pages = {
    home: {
      title: 'Frame & Function — Digital Design Studio',
      description: 'Modular digital design. Functional by default. Lean, modern web experiences crafted for clarity, speed, and control.'
    },
    work: {
      title: 'Work — Frame & Function',
      description: 'Case studies and projects spanning web design, brand identity, UX research, and design systems.'
    },
    services: {
      title: 'Services — Frame & Function',
      description: 'Website builds, brand identity, UX frameworks, and design systems. Transparent scope, documented assets, handoff-ready.'
    },
    about: {
      title: 'About — Frame & Function',
      description: 'Digital designer focused on modular, functional systems that prioritize clarity and longevity. Based in Charlotte, NC.'
    },
    contact: {
      title: 'Contact — Frame & Function',
      description: 'Get in touch to discuss your project. I respond within 48 hours to discuss scope, timeline, and collaboration.'
    }
  };

  return {
    ...defaultSEO,
    ...pages[page],
    ...customData
  };
}
