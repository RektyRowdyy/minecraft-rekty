import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleViewWorkClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section id="hero" className={`hero ${isVisible ? 'hero-visible' : ''}`}>
      <div className="hero-background">
        <div 
          className="hero-sky"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div className="hero-clouds">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </div>
        <div className="hero-terrain">
          <div 
            className="terrain-layer terrain-grass"
            style={{
              transform: `translateX(${mousePosition.x * 0.05}px)`
            }}
          ></div>
          <div 
            className="terrain-layer terrain-dirt"
            style={{
              transform: `translateX(${mousePosition.x * 0.03}px)`
            }}
          ></div>
          <div 
            className="terrain-layer terrain-stone"
            style={{
              transform: `translateX(${mousePosition.x * 0.01}px)`
            }}
          ></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line fade-in-up" style={{ animationDelay: '0.2s' }}>
              Hello, I'm
            </span>
            <span className="title-line hero-name fade-in-up" style={{ animationDelay: '0.4s' }}>
              HRIDYA
            </span>
            <span className="title-line hero-subtitle fade-in-up" style={{ animationDelay: '0.6s' }}>
              Full Stack Developer
            </span>
          </h1>
          <p className="hero-description fade-in-up" style={{ animationDelay: '0.8s' }}>
            Building digital worlds with code, one block at a time
          </p>
        </div>
        
        <div className="hero-actions fade-in-up" style={{ animationDelay: '1s' }}>
          <button 
            className="minecraft-button hero-cta"
            onClick={handleViewWorkClick}
          >
            View My Work
          </button>
          <button 
            className="minecraft-button hero-contact"
            onClick={handleContactClick}
          >
            Get In Touch
          </button>
        </div>
        
      </div>
      
      <div className="hero-decorations">
        <div 
          className="floating-block block-1 minecraft-float"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        >
          <div className="block-face block-grass"></div>
        </div>
        <div 
          className="floating-block block-2 minecraft-float"
          style={{
            transform: `translate(${-mousePosition.x * 0.08}px, ${mousePosition.y * 0.12}px)`
          }}
        >
          <div className="block-face block-diamond"></div>
        </div>
        <div 
          className="floating-block block-3 minecraft-float"
          style={{
            transform: `translate(${mousePosition.x * 0.06}px, ${-mousePosition.y * 0.08}px)`
          }}
        >
          <div className="block-face block-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;