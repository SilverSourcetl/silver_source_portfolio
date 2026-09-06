import React, { useState } from 'react';
import { projects } from '../data';
import './Projects.css';

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Project Showcase</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-summary">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-tag">{project.type}</span>
                  <span className="project-tag">{project.status}</span>
                </div>
                <p><strong>Category:</strong> {project.category} ({project.year})</p>
                
                <button 
                  className="btn btn-secondary expand-btn" 
                  onClick={() => toggleExpand(project.id)}
                  aria-expanded={expandedId === project.id}
                  aria-controls={`project-details-${project.id}`}
                >
                  {expandedId === project.id ? 'Hide Details' : 'View Details'}
                </button>
              </div>

              {expandedId === project.id && (
                <div id={`project-details-${project.id}`} className="project-details">
                  <div className="project-story">
                    <h4>The Story</h4>
                    <p><strong>Problem:</strong> {project.story.problem}</p>
                    <p><strong>Users:</strong> {project.story.intendedUsers}</p>
                    <p><strong>Solution:</strong> {project.story.solution}</p>
                    <p><strong>Contribution:</strong> {project.story.contribution}</p>
                    <p><strong>Outcome:</strong> {project.story.outcome}</p>
                    <p><strong>Tech:</strong> {project.story.technologies.join(', ')}</p>
                  </div>
                  
                  <div className="project-evidence">
                    <h4>Evidence</h4>
                    {project.evidence.screenshots.map((img, idx) => (
                      <img key={idx} src={img.url} alt={img.alt} className="project-screenshot" />
                    ))}
                    <div className="project-links">
                      {project.evidence.demoUrl && (
                        <a href={project.evidence.demoUrl} className="btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                      )}
                      {project.evidence.repoUrl && (
                        <a href={project.evidence.repoUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Repository</a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
