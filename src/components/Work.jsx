import React, { useEffect, useRef, useState } from 'react';
import Marquee from './Marquee';
import { projects } from '../data';
import './Work.css';

const Work = () => {
  const headingStr = '⤵ Projects';
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = rect.top - (windowHeight * 0.7);
      const end = rect.height; 
      
      let progress = 0;
      if (start < 0) {
        progress = Math.min(Math.max((Math.abs(start) / end) * 100, 0), 100);
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-work" id="work">
      {/* Education Section — macOS Browser Window */}
      <div className="education-section">
        <h3 className="education-heading">EDUCATION QUALIFICATIONS</h3>
        <div className="macos-window" ref={timelineRef}>
          {/* Title Bar */}
          <div className="macos-titlebar">
            <div className="macos-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="macos-tab">
              <span className="macos-tab-icon">🎓</span>
              <span className="macos-tab-title">aryan://education</span>
            </div>
            <div className="macos-dots-spacer"></div>
          </div>

          {/* Address Bar */}
          <div className="macos-addressbar">
            <div className="macos-nav-arrows">
              <span>‹</span>
              <span>›</span>
            </div>
            <div className="macos-url-bar">
              <span className="macos-lock">🔒</span>
              <span>aryankumarekka.dev/education</span>
            </div>
          </div>

          {/* Scroll Progress Bar */}
          <div className="macos-progress-track">
            <div className="macos-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
          </div>

          {/* Content Area */}
          <div className="macos-content">
            <div className={`macos-edu-card ${scrollProgress > 5 ? 'visible' : ''}`}>
              <div className="edu-card-year">AUG 2025 — AUG 2027</div>
              <div className="edu-card-degree">Master of Computer Applications (MCA)</div>
              <div className="edu-card-school">📍 Tezpur University <span className="edu-badge present">PRESENT</span></div>
              <div className="edu-card-desc">Computer Programming, Specific Applications</div>
            </div>
            <div className={`macos-edu-card ${scrollProgress > 30 ? 'visible' : ''}`}>
              <div className="edu-card-year">FEB 2022 — 2025</div>
              <div className="edu-card-degree">Bachelor of Computer Application</div>
              <div className="edu-card-school">📍 D.H.S.K. College, Dibrugarh</div>
              <div className="edu-card-desc">Computer Applications</div>
            </div>
            <div className={`macos-edu-card ${scrollProgress > 60 ? 'visible' : ''}`}>
              <div className="edu-card-year">APR 2020 — MAR 2022</div>
              <div className="edu-card-degree">HS, PCM</div>
              <div className="edu-card-school">📍 St. Xavier's H.S. School, Duliajan</div>
            </div>
            <div className={`macos-edu-card ${scrollProgress > 85 ? 'visible' : ''}`}>
              <div className="edu-card-year">FEB 2008 — MAR 2020</div>
              <div className="edu-card-degree">HSLC</div>
              <div className="edu-card-school">📍 St Mary's Higher Secondary School Naharkatia</div>
            </div>
          </div>
        </div>
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
              <div className="project-title-group" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="project-name">{project.name}</div>
                {project.subtitle && <div className="project-subtitle" style={{ fontSize: '0.85rem', opacity: 0.6, fontWeight: 400, marginTop: '2px', letterSpacing: '0.5px' }}>{project.subtitle}</div>}
              </div>
            </div>
            <div className="project-dash">—</div>
            <div className="project-type">{project.type}</div>
            <div className="project-preview">
              {typeof project.image === 'string' ? (
                <img src={project.image} alt={project.name} />
              ) : (
                <div className="multi-device-preview">
                  <img src={project.image.desktop} alt={`${project.name} Desktop`} className="desktop-view" />
                  <img src={project.image.mobile} alt={`${project.name} Mobile`} className="mobile-view" />
                </div>
              )}
            </div>
            <a href={project.link || "#"} target="_blank" rel="noreferrer" className="contact-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
