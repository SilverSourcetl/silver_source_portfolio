import React from 'react';
import { companyInfo, companySocials } from '../data';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">{companyInfo.name}</a>
          <p>{companyInfo.valueStatement}</p>
        </div>
        
        <div className="footer-links">
          <h3>Links</h3>
          <a href="#privacy">Privacy Policy</a>
        </div>
        
        <div className="footer-socials">
          <h3>Connect</h3>
          <div className="social-icons">
            {companySocials.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.label}`}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
