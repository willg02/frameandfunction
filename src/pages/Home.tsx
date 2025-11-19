import React, { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { ProjectGrid } from '../components/ProjectGrid';
import { ServicesList } from '../components/ServicesList';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { getFeaturedProjects } from '../data/projects';
import { getServices } from '../data/services';
import type { Project } from '../data/projects';
import type { Service } from '../data/services';
import './Home.css';

export const Home: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const [projectsData, servicesData] = await Promise.all([
        getFeaturedProjects(),
        getServices()
      ]);
      setProjects(projectsData);
      setServices(servicesData);
    };
    loadData();
  }, []);

  return (
    <main>
      <Hero
        title="Modular digital design. Functional by default."
        subtitle="I design and implement lean, modern web experiences—crafted for clarity, speed, and control."
        primary={{ label: 'View work', href: '/work' }}
        secondary={{ label: 'Contact', href: '/contact' }}
      />

      <Section id="featured-work">
        <Container>
          <div className="section-header">
            <h2>Featured Work</h2>
            <p className="section-description">
              A selection of recent projects emphasizing clean design, thoughtful UX, and technical excellence.
            </p>
          </div>
          <ProjectGrid projects={projects} />
          <div className="section-cta">
            <Button variant="secondary" as="link" href="/work">
              View all projects
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="services" className="services-section">
        <Container>
          <div className="section-header">
            <h2>Services</h2>
            <p className="section-description">
              Transparent scope, documented assets, handoff-ready.
            </p>
          </div>
          <ServicesList services={services} />
        </Container>
      </Section>

      <Section id="cta-banner" size="small">
        <Container>
          <div className="cta-banner">
            <h2>Ready to start a project?</h2>
            <p>Let's discuss your goals and explore how we can work together.</p>
            <Button variant="accent" as="link" href="/contact">
              Get in touch
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
};
