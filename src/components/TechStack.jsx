import React from 'react';
import './TechStack.css';

const techStack = [
  { name: 'JavaScript', color: '#f7df1e', label: 'JS' },
  { name: 'TypeScript', color: '#3178c6', label: 'TS' },
  { name: 'React', color: '#61dafb', label: 'Re' },
  { name: 'HTML5', color: '#e34f26', label: 'HT' },
  { name: 'CSS3', color: '#1572b6', label: 'CS' },
  { name: 'PHP', color: '#777bb4', label: 'PH' },
];

const TechStack = () => {
  return (
    <section className="section-techstack" id="techstack">
      <div className="techstack-heading-row">
        <h2 className="techstack-heading">Tech Stack</h2>
        <div className="techstack-subtitle">WHAT I USE TO BUILD ↗</div>
      </div>

      <div className="techstack-grid">
        {techStack.map((tech, index) => (
          <div 
            key={index} 
            className="tech-card animate-on-scroll"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="tech-card-inner">
              <div className="tech-logo" style={{ background: tech.color }}>
                {tech.label}
              </div>
              <div className="tech-name">{tech.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
