import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="about-grid">
        <div className="animate-on-scroll">
          <h2 className="about-heading" id="about-heading">
            <span className="char">A</span>
            <span className="char">b</span>
            <span className="char">o</span>
            <span className="char">u</span>
            <span className="char">t</span>
          </h2>
        </div>

        <div className="about-right animate-on-scroll" id="about-right">
          <p className="about-bio">
            Hey! My name is <span className="highlight">Aryan Kumar Ekka </span>
            <span className="label">(he/him)</span>
            , and I'm a full-stack web developer and cinematic video editor with a passion for digital storytelling and modern web technologies. I use tools like React Native, PHP, MySQL, and professional editing software to create stunning, functional platforms and high-end visual stories that come to life on the internet. Currently residing in Assam, I operate my digital agency globally and I'm always ready to take on the next creative design or technical challenge.
          </p>

          <div className="about-role-label">
            BUILDING PRODUCTS AT THE CROSSPATHS OF FULL-STACK DEV — CINEMATIC MEDIA — GRAPHIC DESIGN.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="about-current-job">
              <img src="archive\assets\images\" alt="Echelon Media Logo" className="job-logo" style={{ borderRadius: '50%', objectFit: 'contain', width: '50px', height: '50px', background: '#fff' }} />
              <div>
                <div className="about-job-title">Founder & Lead Developer</div>
                <div className="about-job-company">Echelon Media</div>
              </div>
            </div>

            <div className="about-current-job">
              <div className="job-logo" style={{ background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>SAP</div>
              <div>
                <div className="about-job-title">Founder & Media Producer</div>
                <div className="about-job-company">SAP Studios</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
