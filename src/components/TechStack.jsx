import React from 'react';
import './TechStack.css';

const techCategories = [
  {
    category: "Frontend",
    skills: [
      { name: 'HTML5', color: '#E34F26' },
      { name: 'CSS3', color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E', darkText: true },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'React', color: '#20232a' },
      { name: 'Next.js', color: '#000000' },
      { name: 'Angular.js', color: '#DD0031' },
      { name: 'TailwindCSS', color: '#38B2AC' }
    ]
  },
  {
    category: "Backend & Core",
    skills: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#252525' },
      { name: 'NestJS', color: '#E0234E' },
      { name: 'Python', color: '#3776AB' },
      { name: 'Django', color: '#092E20' },
      { name: 'PHP', color: '#777BB4' },
      { name: 'C++', color: '#00599C' },
      { name: 'C', color: '#00599C' },
      { name: 'Java', color: '#f89820', darkText: true },
      { name: '.NET', color: '#512BD4' }
    ]
  },
  {
    category: "Database & Cloud",
    skills: [
      { name: 'MySQL', color: '#4479A1' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Firebase', color: '#FFCA28', darkText: true },
      { name: 'AWS', color: '#FF9900', darkText: true },
      { name: 'Google Cloud', color: '#4285F4' },
      { name: 'Cloudflare', color: '#F38020' },
      { name: 'Vercel', color: '#000000' },
      { name: 'Netlify', color: '#00C7B7' }
    ]
  },
  {
    category: "Design & Creative",
    skills: [
      { name: 'Figma', color: '#F24E1E' },
      { name: 'Framer', color: '#0055FF' },
      { name: 'Sketch', color: '#F7B500', darkText: true },
      { name: 'Adobe Illustrator', color: '#FF9A00', darkText: true },
      { name: 'Adobe After Effects', color: '#9999FF', darkText: true },
      { name: 'Adobe Lightroom', color: '#31A8FF', darkText: true },
      { name: 'Adobe', color: '#FF0000' }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#181717' },
      { name: 'GitLab', color: '#FCA121', darkText: true },
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
            className="tech-category animate-on-scroll"
            style={{ transitionDelay: `${groupIndex * 0.15}s` }}
          >
            <h3 className="tech-category-title">/ {group.category}</h3>
            <div className="tech-badges-wrapper">
              {group.skills.map((tech, i) => (
                <div 
                  key={i} 
                  className="tech-badge"
                  style={{ 
                    backgroundColor: tech.color, 
                    color: tech.darkText ? '#050505' : '#FFFFFF'
                  }}
                >
                  <span className="tech-badge-dot" style={{ backgroundColor: tech.darkText ? '#050505' : '#FFFFFF' }}></span>
                  {tech.name}
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
