import React from 'react';
import './Hero.css';

const Hero = () => {

  // The marquee now only uses CSS animation for scrolling

  return (
    <section className="hero-section">
      {/* Top Navigation */}
      <div className="top-navigation">
        {/* Left: Theme Switcher */}
        <div className="navigation_color-switch-container">
          <div className="color-switch_icon">
            <span className="emoji">🖼</span>
          </div>
          <div className="nav-text">/Think Beyond</div>
        </div>

        {/* Center: Logo & Title */}
        <div className="navigation_about">
          <a href="/" className="logo-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="logo" style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.05em' }}>A.K.E</div>
          </a>
          <h1 className="heading-style-header">
            CREATIVE nomad, designing digital products & brands.
          </h1>
          <a href="/video-editing.html" className="hero-portfolio-btn">
            Wanna see my video editing portfolio?
          </a>
        </div>

        {/* Right: Social Links */}
        <div className="navigation_social-links-button">
          <a href="https://www.instagram.com/aryan_a_k_e_?igsh=ajNrODdlZTI3MWtz" target="_blank" rel="noreferrer" className="social-icon-btn" data-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/aryan-kumar-ekka-a57b81264" target="_blank" rel="noreferrer" className="social-icon-btn" data-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="https://github.com/AryanAKE" target="_blank" rel="noreferrer" className="social-icon-btn" data-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>
          <a href="https://x.com/aryan31276" target="_blank" rel="noreferrer" className="social-icon-btn" data-label="X / Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636Zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="https://echelonmedia-ten.vercel.app/" target="_blank" rel="noreferrer" className="social-icon-btn agency-btn" data-label="Echelon Media">
            <img src="/assets/images/ech logo ivory.png" alt="Echelon" style={{ width: '18px', height: '18px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="hero_wrapper">

        <div className="marquee">
          <div className="marquee-content">
            <h1 className="marquee-text">ARYAN KUMAR EKKA <span className="marquee-separator">   </span></h1>
            <h1 className="marquee-text">ARYAN KUMAR EKKA <span className="marquee-separator">   </span></h1>
            <h1 className="marquee-text">ARYAN KUMAR EKKA <span className="marquee-separator">   </span></h1>
            <h1 className="marquee-text">ARYAN KUMAR EKKA <span className="marquee-separator">   </span></h1>
          </div>
        </div>
        {/* ✦ */}
        <div className="scroll-indicator_container">
          <div className="scroll-indicator">
            <div className="scroll-icon">
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.27962 1.95312L9.30469 20.4282" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M1.76333 14.356L9.31443 20.9403L16.7656 14.335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="scroll-text">SCROLL DOWN</div>
        </div>

        <div className="hero_copyright-wrapper">
          <div className="copyright-text">©2026</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
