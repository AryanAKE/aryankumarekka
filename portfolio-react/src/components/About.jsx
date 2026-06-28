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
            <span className="highlight">Matthis </span>
            <span className="label">(he/him)</span>
            {' '}is a nomad product and brand designer with a passion for art and technology. He uses Webflow and other low-code tools to create stunning, one-of-a-kind pieces that come to life on the internet. Currently residing in the lush jungle of Mexico, Matthis operates globally and is ready to take on any design challenge.
          </p>
          
          <div className="about-role-label">
            BUILDING PRODUCTS AT THE CROSSPATHS OF AI — SAAS — WEB3.
          </div>
          
          <div className="about-current-job">
            <img src="/assets/images/64f5e79fb44965b0c314f49a_SVZ.svg" alt="SVZ logo" className="job-logo" />
            <div>
              <div className="about-job-title">Senior Design Director</div>
              <div className="about-job-company">SVZ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
