import React from 'react';
import { companyInfo } from '../data';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{companyInfo.name}</h1>
        <p className="hero-statement">{companyInfo.valueStatement}</p>
        <p className="hero-intro">{companyInfo.introduction}</p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-secondary">View projects</a>
          <a href="#contact" className="btn">Start a project</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
