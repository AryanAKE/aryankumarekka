import React from 'react';
import Marquee from './Marquee';
import { freebies } from '../data';
import './Freebies.css';

const Freebies = () => {
  return (
    <section className="section-freebies" id="freebies">
      <div className="freebies-marquee">
        <Marquee text="GIGS AND HOBBIES" scrollDriven />
      </div>

      <div className="freebies-heading-row">
        <h2 className="freebies-heading">Gigs & Hobbies</h2>
        <div className="freebies-subtitle">WHAT I DO & WHAT I LOVE ↗</div>
      </div>

      <div className="freebies-grid">
        {freebies.map((freebie) => (
          <a
            key={freebie.id}
            href={freebie.link}
            target={freebie.link !== '#' ? '_blank' : '_self'}
            rel="noreferrer"
            className={`freebie-card ${freebie.color}`}
          >
            <div className="freebie-card-number">{freebie.number}</div>
            <div className="freebie-card-emoji">{freebie.emoji}</div>
            <div className="freebie-card-title">{freebie.title}</div>
            <div className="freebie-card-subtitle">{freebie.subtitle}</div>
            <div className="freebie-card-arrow">↗</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Freebies;
