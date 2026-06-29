import React from 'react';
import Marquee from './Marquee';
import { projects } from '../data';
import './Work.css';

const Work = () => {
  const headingStr = '⤵ Projects';

  return (
    <section className="section-work" id="work">
      {/* Top Marquee */}
      <div className="work-marquee-top">
        <Marquee text="SUPER BADASS 🔥" speed="fast" reverse={true} />
      </div>

      {/* Header & Meta */}
      <div className="work-header">
        <div className="animate-on-scroll">
          <h2 className="work-heading">
            {headingStr.split('').map((char, index) => (
              <span className="char" key={index} style={{ transitionDelay: `${index * 0.04}s` }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
        </div>

        <div className="work-meta">
          <div className="work-meta-col">
            <label>TIMEFRAME</label>
            <ul>
              <li>YEAR 2022–23</li>
            </ul>
          </div>
          <div className="work-meta-col">
            <label>DISCIPLINE</label>
            <ul>
              <li>No code development</li>
              <li>UI design</li>
              <li>UX research</li>
              <li>Art Direction</li>
            </ul>
          </div>
          <div className="work-meta-col">
            <label>TOOLS</label>
            <ul>
              <li>Webflow</li>
              <li>After Effects</li>
              <li>Figma</li>
              <li>Wized</li>
            </ul>
          </div>
          <div className="work-meta-col">
            <label>INDUSTRY</label>
            <ul>
              <li className="project-tag">#CRYPTO</li>
              <li className="project-tag">#nocode</li>
              <li className="project-tag">#Saas</li>
              <li className="project-tag">#webapp</li>
              <li className="project-tag">#tech</li>
              <li className="project-tag">#CONSUMER</li>
              <li className="project-tag">#FINTECH</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="projects-list animate-on-scroll">
        {projects.map((project) => (
          <div className="project-row" key={project.id}>
            <div className="project-name-wrap">
              <div className="project-icon">
                {/* Simplified generic icon for demo purposes, could be customized per project if needed */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Zm6-3h3a3 3 0 0 1 0 6h-3V3Z"/>
                  <path d="M12 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0v0Zm-6 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0Zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z"/>
                </svg>
              </div>
              <div className="project-name">{project.name}</div>
            </div>
            <div className="project-dash">—</div>
            <div className="project-type">{project.type}</div>
            <div className="project-preview">
              <img src={project.image} alt={project.name} />
            </div>
            <a href="mailto:matthisgarnier.contact@gmail.com?subject=I loved this project!" className="contact-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 12h1.4a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H8m8 0V8c0-1.333-.8-4-4-4S8 6.667 8 8v4m8 0H8"/>
              </svg>
              Contact for details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
