import React from 'react';
import { services } from '../data';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p className="service-need"><strong>Business Need:</strong> {service.clientNeed}</p>
              <p className="service-output"><strong>Output:</strong> {service.output}</p>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <a href="#contact" className="btn">Enquire about a service</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
