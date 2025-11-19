import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <span className="logo-frame">Frame</span>
          <span className="logo-and">&</span>
          <span className="logo-function">Function</span>
        </Link>

        <button 
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/')}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/work" 
              className={isActive('/work')}
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={isActive('/services')}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about')}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`${isActive('/contact')} navbar-cta`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
