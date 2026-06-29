import React from 'react';
import './TechStack.css';

const techCategories = [
  {
    category: "Frontend",
    skills: [
      { name: 'HTML5', color: '#E34F26' },
      { name: 'CSS3', color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#FFFFFF' },
      { name: 'Angular.js', color: '#DD0031' },
      { name: 'TailwindCSS', color: '#38B2AC' }
    ]
  },
  {
    category: "Backend & Core",
    skills: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#FFFFFF' },
      { name: 'NestJS', color: '#E0234E' },
      { name: 'Python', color: '#3776AB' },
      { name: 'Django', color: '#092E20' },
      { name: 'PHP', color: '#777BB4' },
      { name: 'C++', color: '#00599C' },
      { name: 'C', color: '#A8B9CC' },
      { name: 'Java', color: '#f89820' },
      { name: '.NET', color: '#512BD4' }
    ]
  },
  {
    category: "Database & Cloud",
    skills: [
      { name: 'MySQL', color: '#4479A1' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Firebase', color: '#FFCA28' },
      { name: 'AWS', color: '#FF9900' },
      { name: 'Google Cloud', color: '#4285F4' },
      { name: 'Cloudflare', color: '#F38020' },
      { name: 'Vercel', color: '#FFFFFF' },
      { name: 'Netlify', color: '#00C7B7' }
    ]
  },
  {
    category: "Design & Creative",
    skills: [
      { name: 'Figma', color: '#F24E1E' },
      { name: 'Framer', color: '#0055FF' },
      { name: 'Sketch', color: '#F7B500' },
      { name: 'Adobe Illustrator', color: '#FF9A00' },
      { name: 'Adobe After Effects', color: '#9999FF' },
      { name: 'Adobe Lightroom', color: '#31A8FF' },
      { name: 'Adobe', color: '#FF0000' }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#FFFFFF' },
      { name: 'GitLab', color: '#FCA121' },
      { name: 'NPM', color: '#CB3837' },
      { name: 'Flutter', color: '#02569B' },
      { name: 'Web3.js', color: '#F16822' }
    ]
  }
];

const TechStack = () => {
  return (
    <section className="section-techstack" id="techstack">
      <div className="techstack-heading-row">
        <h2 className="techstack-heading">Tech Stack</h2>
        <div className="techstack-subtitle">TOOLS I USE TO BUILD ↗</div>
      </div>

      <div className="techstack-categories">
        {techCategories.map((group, groupIndex) => (
          <div 
            key={groupIndex} 
            className="tech-category animate-on-scroll glass-box"
            style={{ transitionDelay: `${groupIndex * 0.15}s` }}
          >
            <h3 className="tech-category-title">{group.category}</h3>
            <div className="tech-badges-wrapper">
              {group.skills.map((tech, i) => (
                <div key={i} className="tech-badge">
                  <span 
                    className="tech-badge-dot" 
                    style={{ 
                      backgroundColor: tech.color,
                      boxShadow: `0 0 10px ${tech.color}`
                    }}
                  ></span>
                  <span className="tech-badge-text">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
