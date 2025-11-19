import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
  as?: 'button' | 'link';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  as = 'button',
  href,
  className = '',
  ...props 
}) => {
  const classNames = `btn btn-${variant} ${className}`;

  if (as === 'link' && href) {
    // Internal link
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={classNames}>
          {children}
        </Link>
      );
    }
    // External link
    return (
      <a 
        href={href} 
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
