import React, { useEffect, useState } from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { ServicesList } from '../components/ServicesList';
import { Button } from '../components/Button';
import { getServices } from '../data/services';
import type { Service } from '../data/services';
import './Services.css';

export const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const loadServices = async () => {
      const data = await getServices();
      setServices(data);
    };
    loadServices();
  }, []);

  return (
    <main id="main-content">
      <Section>
        <Container>
          <div className="page-header">
            <h1>Services</h1>
            <p className="page-description">
              Transparent scope, documented assets, handoff-ready. No fluff—just thoughtful design 
              and implementation that solves real problems.
            </p>
          </div>
        </Container>
      </Section>

      <Section size="small">
        <Container>
          <ServicesList services={services} />
        </Container>
      </Section>

      <Section id="process" size="small" className="process-section">
        <Container>
          <h2 className="section-title">Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Discover</h3>
              <p>Understanding goals, constraints, and opportunities through research and conversation.</p>
            </div>
            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Define</h3>
              <p>Clarifying scope, deliverables, and success metrics with transparent timelines.</p>
            </div>
            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Design</h3>
              <p>Creating thoughtful solutions with attention to detail, accessibility, and scalability.</p>
            </div>
            <div className="process-step">
              <div className="process-number">04</div>
              <h3>Implement</h3>
              <p>Building with clean code, proper documentation, and handoff-ready assets.</p>
            </div>
            <div className="process-step">
              <div className="process-number">05</div>
              <h3>Iterate</h3>
              <p>Refining based on feedback, testing, and real-world performance.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section size="small">
        <Container>
          <div className="services-cta">
            <h2>Ready to get started?</h2>
            <p>Let's discuss your project and find the right approach.</p>
            <Button variant="primary" as="link" href="/contact">
              Start a project
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
};
