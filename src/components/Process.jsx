import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <h2>How We Work</h2>
        <div className="process-timeline">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Discuss</h3>
            <p>We start with a conversation to understand your business needs and project goals.</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Scope</h3>
            <p>We define the project requirements, deliverables, timeline, and costs clearly.</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Build</h3>
            <p>Our team develops the solution using modern, reliable technologies.</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Test</h3>
            <p>Rigorous testing ensures functionality, performance, and accessibility.</p>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Hand over</h3>
            <p>We deploy the solution and provide documentation and training for your team.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
