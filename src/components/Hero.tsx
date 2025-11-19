import React from 'react';
import { Button } from './Button';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle: string;
  primary?: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
}

export const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  primary,
  secondary 
}) => {
  return (
    <section className="hero" id="main-content">
      <div className="hero-container container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          {(primary || secondary) && (
            <div className="hero-cta">
              {primary && (
                <Button variant="primary" as="link" href={primary.href}>
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button variant="secondary" as="link" href={secondary.href}>
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
