import React, { useState } from 'react';
import { companyInfo } from '../data';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">
          {companyInfo.name}
        </a>
        
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#team" onClick={() => setIsOpen(false)}>Team</a>
          <a href="#process" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn nav-btn">Start a project</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
