import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Freebies from './components/Freebies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoEditApp from './pages/VideoEditApp';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import './App.css';

function MainPortfolio() {
  // Initialize scroll animations
  useIntersectionObserver();

  return (
    <div className="app-container">
      <Loader />
      <Hero />
      <About />
      <TechStack />
      <Work />
      <Freebies />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPortfolio />} />
      <Route path="/video-editing/*" element={<VideoEditApp />} />
    </Routes>
  );
}

export default App;
