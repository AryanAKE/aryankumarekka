import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const socials = [
    { label: 'Instagram', url: 'https://www.instagram.com/aryan_a_k_e_?igsh=ajNrODdlZTI3MWtz' },
    { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/aryan-kumar-ekka-a57b81264' },
    { label: 'GitHub',    url: 'https://github.com/AryanAKE' },
    { label: 'X / Twitter', url: 'https://x.com/aryan31276' },
    { label: 'Echelon Media', url: 'https://echelonmedia-ten.vercel.app/' },
  ];

  return (
    <section
      className={`section-contact ${visible ? 'is-visible' : ''}`}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="contact"
    >
      {/* Radial spotlight that follows cursor */}
      <div
        className="contact-spotlight"
        style={{ '--mx': `${mousePos.x}%`, '--my': `${mousePos.y}%` }}
      />

      <div className="contact-inner">
        {/* Eyebrow */}
        <div className="contact-eyebrow">
          <span className="contact-dot" />
          AVAILABLE FOR WORK
        </div>

        {/* Big animated heading */}
        <h2 className="contact-heading">
          {'Let\'s Build'.split('').map((c, i) => (
            <span key={i} className="contact-char" style={{ transitionDelay: `${i * 0.04}s` }}>
              {c === ' ' ? '\u00A0' : c}
            </span>
          ))}
          <br />
          {'Something'.split('').map((c, i) => (
            <span key={i} className="contact-char contact-char--accent" style={{ transitionDelay: `${(i + 10) * 0.04}s` }}>
              {c}
            </span>
          ))}
          <br />
          {'Great.'.split('').map((c, i) => (
            <span key={i} className="contact-char" style={{ transitionDelay: `${(i + 20) * 0.04}s` }}>
              {c}
            </span>
          ))}
        </h2>

        {/* Sub copy */}
        <p className="contact-copy">
          Have a project in mind? A crazy idea? Or just want to say hi?<br />
          Drop me a message — I respond within 24 hours.
        </p>

        {/* CTA */}
        <div className="contact-cta-row">
          <a href="mailto:aryankumarekka@gmail.com" className="contact-email-btn">
            <span className="contact-email-text">aryankumarekka@gmail.com</span>
            <span className="contact-email-arrow">↗</span>
          </a>
        </div>

        {/* Divider */}
        <div className="contact-divider" />

        {/* Social row */}
        <div className="contact-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="contact-social-link">
              <span>{s.label}</span>
              <span className="cs-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Corner label */}
      <div className="contact-corner-label">GET IN TOUCH</div>
    </section>
  );
};

export default Contact;
