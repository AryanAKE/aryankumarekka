import React, { useState, useEffect } from 'react';
import Marquee from './Marquee';
import { testimonials } from '../data';
import './Footer.css';

const Footer = () => {
  const [localTime, setLocalTime] = useState('--:--:--');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const cst = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const h = String(cst.getHours()).padStart(2, '0');
      const m = String(cst.getMinutes()).padStart(2, '0');
      const s = String(cst.getSeconds()).padStart(2, '0');
      setLocalTime(`${h}:${m}:${s}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="section-testimonials" id="testimonials">
        <div className="testimonials-marquee">
          <Marquee text="TESTIMONIALS" scrollDriven={true} reverse={true} />
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test) => (
            <div className="testimonial-card" key={test.id}>
              <p className="testimonial-quote">{test.quote}</p>
              <div className="testimonial-person">
                {test.avatar ? (
                  <div className="testimonial-avatar">
                    <img src={test.avatar} alt={test.name} />
                  </div>
                ) : (
                  <div className="testimonial-avatar" style={{ background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                    {test.emoji}
                  </div>
                )}
                <div>
                  <div className="testimonial-name">{test.name}</div>
                  <div className="testimonial-company">{test.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-location">
            <strong>Made with love </strong><br />
            in Assam, India.<br />
            <br />
            <span>Aryan Kumar Ekka · Full-Stack Developer</span>
          </div>

          <div className="footer-time">
            <div className="footer-time-label">Local time — Assam, India</div>
            <div className="footer-time-value">{localTime}</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--grey)' }}>IST (UTC+5:30)</div>
          </div>

          <div className="footer-links">
            <a href="https://www.instagram.com/aryan_a_k_e_?igsh=ajNrODdlZTI3MWtz" target="_blank" rel="noreferrer" className="footer-link">
              <span>Instagram</span><span>↗</span>
            </a>
            <a href="https://www.linkedin.com/in/aryan-kumar-ekka-a57b81264" target="_blank" rel="noreferrer" className="footer-link">
              <span>LinkedIn</span><span>↗</span>
            </a>
            <a href="https://github.com/AryanAKE" target="_blank" rel="noreferrer" className="footer-link">
              <span>GitHub</span><span>↗</span>
            </a>
            <a href="https://x.com/aryan31276" target="_blank" rel="noreferrer" className="footer-link">
              <span>X / Twitter</span><span>↗</span>
            </a>
            <a href="https://echelonmedia-ten.vercel.app/" target="_blank" rel="noreferrer" className="footer-link">
              <span>Echelon Media ↗</span><span>↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2026 Aryan Kumar Ekka. All rights reserved.</div>
          <div className="footer-love">
            <span>Designed &amp; built by Aryan Kumar Ekka</span>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
