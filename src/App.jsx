import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Freebies from './components/Freebies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpidermanCursor from './components/SpidermanCursor';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import './App.css';

function App() {
  // Initialize scroll animations
  useIntersectionObserver();

  return (
    <div className="app-container">
      <SpidermanCursor />
      <Hero />
      <About />
      <Work />
      <Freebies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
