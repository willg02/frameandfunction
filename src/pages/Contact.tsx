import React from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { ContactForm } from '../components/ContactForm';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <main id="main-content">
      <Section>
        <Container>
          <div className="page-header">
            <h1>Get in Touch</h1>
            <p className="page-description">
              Tell me about your project. I'll respond within 48 hours to discuss scope, 
              timeline, and how we can work together.
            </p>
          </div>
        </Container>
      </Section>

      <Section size="small">
        <Container>
          <ContactForm />
        </Container>
      </Section>

      <Section size="small">
        <Container>
          <div className="contact-info">
            <div className="contact-detail">
              <h3>Email</h3>
              <p>
                <a href="mailto:hello@frameandfunction.com">
                  hello@frameandfunction.com
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <h3>Location</h3>
              <p>Charlotte, NC — Working globally</p>
            </div>
            <div className="contact-detail">
              <h3>Response Time</h3>
              <p>Typically within 48 hours</p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};
