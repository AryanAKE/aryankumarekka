import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Top Navigation */}
      <div className="top-navigation">
        {/* Left: Theme Switcher */}
        <div className="navigation_color-switch-container">
          <div className="color-switch_icon">
            <span className="emoji">🖼</span>
          </div>
          <div className="nav-text">/CHOOSE YOUR THEME</div>
        </div>

        {/* Center: Logo & Title */}
        <div className="navigation_about">
          <a href="/" className="logo-link">
            <img src="/assets/images/638c61879bf1380112df5835_Group 76.svg" alt="MG Logo" className="logo" />
          </a>
          <h1 className="heading-style-header">
            CREATIVE nomad, designing digital products & brands.
          </h1>
        </div>

        {/* Right: Social / Dashboard Links */}
        <div className="navigation_social-links-button">
          <a href="#" className="button is-nav">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon">
              <path d="M12 2L7 6.643S10.042 7 12 7c1.958 0 5-.357 5-.357L12 2ZM8.5 7L5 10.94S7.625 12 12 12s7-1.06 7-1.06L15.5 7"></path>
              <path d="M6.5 11.5L3 15.523S5.7 18 12 18s9-2.477 9-2.477L17.5 11.5M12 22v-3"></path>
            </svg>
            <span className="nav-text-btn">LINK TREE</span>
          </a>
          <a href="#" className="button is-nav hidden-mobile">
            <span className="nav-text-btn">DASHBOARD VIEW</span>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="hero_wrapper">
        <div className="hero_portrait-container">
          <img src="/assets/images/6392099811d7727f54b99e1d_Group 89-min.avif" alt="Portrait" className="hero-image" />
        </div>
        
        <div className="marquee">
          <div className="marquee-content">
            <img src="/assets/images/6387f510965fc558b727096d_MATTHIS GARNIER (2).svg" alt="Matthis Garnier Typography" className="marquee-content_image" />
          </div>
          <div className="marquee-content">
            <img src="/assets/images/6387f510965fc558b727096d_MATTHIS GARNIER (2).svg" alt="Matthis Garnier Typography" className="marquee-content_image" />
          </div>
        </div>

        <div className="scroll-indicator_container">
          <div className="scroll-indicator">
            <div className="scroll-icon">
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.27962 1.95312L9.30469 20.4282" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M1.76333 14.356L9.31443 20.9403L16.7656 14.335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="scroll-text">SCROLL DOWN</div>
        </div>

        <div className="hero_copyright-wrapper">
          <div className="copyright-text">©2024</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
