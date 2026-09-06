import React from 'react';
import { founders } from '../data';
import './Team.css';

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2>About the Team</h2>
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div key={index} className="founder-card">
              <h3>{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <p className="founder-bio">{founder.biography}</p>
              
              <div className="founder-skills">
                <strong>Skills:</strong>
                <ul>
                  {founder.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="founder-links">
                {founder.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
