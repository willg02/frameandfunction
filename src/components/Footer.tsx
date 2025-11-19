import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-frame">Frame</span>
              <span className="logo-and">&</span>
              <span className="logo-function">Function</span>
            </div>
            <p className="footer-tagline">
              Modular digital design.<br />
              Functional by default.
            </p>
            <p className="footer-location">Charlotte, NC — Working globally</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="mailto:hello@frameandfunction.com">
                  hello@frameandfunction.com
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/frameandfunction" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/frameandfunction" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://dribbble.com/frameandfunction" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Frame & Function. All rights reserved.</p>
          <p className="footer-note">No fluff. Just thoughtful design.</p>
        </div>
      </div>
    </footer>
  );
};
