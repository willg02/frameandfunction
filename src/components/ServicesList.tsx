import React from 'react';
import { Service } from '../data/services';
import { Card } from './Card';
import { Button } from './Button';
import './ServicesList.css';

interface ServicesListProps {
  services: Service[];
}

export const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
  return (
    <div className="services-list">
      {services.map(service => (
        <Card key={service.slug} className="service-card">
          <div className="service-content">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-outcome">{service.outcome}</p>
            
            <div className="service-details">
              <div className="service-section">
                <h4>Includes:</h4>
                <ul className="service-includes">
                  {service.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="service-meta">
                <div className="service-meta-item">
                  <span className="service-meta-label">Timeline:</span>
                  <span className="service-meta-value">{service.timeline}</span>
                </div>
                {service.startingPrice && (
                  <div className="service-meta-item">
                    <span className="service-meta-label">Starting at:</span>
                    <span className="service-meta-value service-price">
                      {service.startingPrice}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <Button variant="secondary" as="link" href="/contact" className="service-cta">
              Get started
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
