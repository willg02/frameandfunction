import React from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import './About.css';

export const About: React.FC = () => {
  return (
    <main id="main-content">
      <Section>
        <Container>
          <div className="page-header">
            <h1>About</h1>
          </div>
        </Container>
      </Section>

      <Section size="small">
        <Container>
          <div className="about-content">
            <div className="about-statement">
              <p className="lead">
                I'm a digital designer focused on creating modular, functional systems that prioritize 
                clarity and longevity over trends and complexity.
              </p>
              <p>
                My work spans web design, brand identity, UX frameworks, and design systems—always 
                with an emphasis on clean implementation, proper documentation, and handoff-ready assets.
              </p>
              <p>
                I believe great design is invisible. It gets out of the way and lets people accomplish 
                their goals without friction. That means thoughtful information architecture, accessible 
                interfaces, and systems that scale gracefully.
              </p>
            </div>

            <div className="about-principles">
              <h2>Principles</h2>
              <div className="principles-grid">
                <div className="principle">
                  <h3>Clarity over clutter</h3>
                  <p>Strip away the unnecessary. Every element should earn its place.</p>
                </div>
                <div className="principle">
                  <h3>Modular systems, not one-offs</h3>
                  <p>Build components and patterns that work together and evolve over time.</p>
                </div>
                <div className="principle">
                  <h3>Ownership and legibility</h3>
                  <p>Documented, maintainable work that teams can understand and extend.</p>
                </div>
              </div>
            </div>

            <div className="about-tools">
              <h2>Tools & Stack</h2>
              <div className="tools-grid">
                <div className="tool-category">
                  <h4>Design</h4>
                  <p>Figma, Adobe Creative Suite, Sketch</p>
                </div>
                <div className="tool-category">
                  <h4>Development</h4>
                  <p>React, TypeScript, Next.js, Vite</p>
                </div>
                <div className="tool-category">
                  <h4>Systems</h4>
                  <p>Storybook, design tokens, component libraries</p>
                </div>
                <div className="tool-category">
                  <h4>CMS</h4>
                  <p>Sanity, Contentful, Webflow, custom solutions</p>
                </div>
              </div>
            </div>

            <div className="about-location">
              <h2>Location</h2>
              <p className="location-text">
                Based in <strong>Charlotte, NC</strong> — working with clients globally.
              </p>
            </div>

            <div className="about-cta">
              <h2>Let's work together</h2>
              <p>
                I'm available for select projects. If you value clarity, craft, and ownership, 
                I'd love to hear about what you're building.
              </p>
              <Button variant="primary" as="link" href="/contact">
                Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};
