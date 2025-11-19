import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'small';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '',
  size = 'default',
  id
}) => {
  const sizeClass = size === 'small' ? 'section-sm' : 'section';
  
  return (
    <section id={id} className={`${sizeClass} ${className}`}>
      {children}
    </section>
  );
};
