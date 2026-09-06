import React from 'react';
import { companyInfo } from '../data';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's start a conversation</h3>
            <p>Fill out the form to discuss your project, or reach out to us directly via email.</p>
            <div className="direct-contact">
              <strong>Email:</strong> <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </div>
          </div>
          
          <div className="contact-form-container">
            {/* Form configured for Netlify Forms */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              className="contact-form"
              action="/success"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="visually-hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>

              <div className="form-group">
                <label htmlFor="name">Name (Required)</label>
                <input type="text" id="name" name="name" required minLength="2" maxLength="100" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email (Required)</label>
                <input type="email" id="email" name="email" required maxLength="254" />
              </div>

              <div className="form-group">
                <label htmlFor="organisation">Organisation</label>
                <input type="text" id="organisation" name="organisation" maxLength="150" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service of interest</label>
                <select id="service" name="service">
                  <option value="">Select a service...</option>
                  <option value="Website and Web-App Development">Website and Web-App Development</option>
                  <option value="Custom Business Software">Custom Business Software</option>
                  <option value="Workflow Automation and Integrations">Workflow Automation and Integrations</option>
                  <option value="Software Maintenance">Software Maintenance</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project message (Required)</label>
                <textarea id="message" name="message" required minLength="20" maxLength="3000" rows="5"></textarea>
              </div>

              <div className="form-privacy-notice">
                <p>We use this information only to respond to your inquiry. We do not subscribe you to marketing or share this data.</p>
              </div>

              <button type="submit" className="btn">Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
