import React, { useState, useEffect } from 'react';
import Marquee from './Marquee';
import { testimonials } from '../data';
import './Footer.css';

const Footer = () => {
  const [localTime, setLocalTime] = useState('--:--:--');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const cst = new Date(now.toLocaleString('en-US', { timeZone: 'America/Cancun' }));
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
          <Marquee text="★ Testimonials" speed="fast" reverse={true} />
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
            <strong>Made with love ❤️</strong><br />
            in Akumal, Mexico.<br />
            <br />
            <span>Matthis Garnier · Nomad Designer</span>
          </div>

          <div className="footer-time">
            <div className="footer-time-label">Local time — Akumal, Mexico</div>
            <div className="footer-time-value">{localTime}</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--grey)' }}>CST (UTC-6)</div>
          </div>

          <div className="footer-links">
            <a href="https://www.instagram.com/matthisgarnr" target="_blank" rel="noreferrer" className="footer-link">
              <span>Instagram</span><span>↗</span>
            </a>
            <a href="https://webflow.com/matthis" target="_blank" rel="noreferrer" className="footer-link">
              <span>Webflow</span><span>↗</span>
            </a>
            <a href="#" className="footer-link">
              <span>My course</span><span>↗</span>
            </a>
            <a href="https://twitter.com/matthisgarnr" target="_blank" rel="noreferrer" className="footer-link">
              <span>Twitter</span><span>↗</span>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copy">© 2024 Matthis Garnier. All right reserved.</div>
          <div className="footer-love">
            <span>Designed &amp; built by Matthis Garnier</span>
            <span>🌴</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
