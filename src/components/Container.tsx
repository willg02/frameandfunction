import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article';
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  as: Component = 'div' 
}) => {
  return (
    <Component className={`container ${className}`}>
      {children}
    </Component>
  );
};
