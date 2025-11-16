import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Intersection observer for footer visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: '📂', 
      url: 'https://github.com/username',
      description: 'View Code Repository'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: 'https://linkedin.com/in/username',
      description: 'Professional Network'
    },
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: 'https://twitter.com/username',
      description: 'Follow Updates'
    },
    { 
      name: 'Email', 
      icon: '📧', 
      url: 'mailto:your.email@example.com',
      description: 'Send Direct Message'
    }
  ];

  const quickLinks = [
    { name: 'Home', id: 'hero', icon: '🏠' },
    { name: 'About', id: 'about', icon: '📊' },
    { name: 'Skills', id: 'skills', icon: '📦' },
    { name: 'Projects', id: 'projects', icon: '🌍' },
    { name: 'Experience', id: 'experience', icon: '⚒️' },
    { name: 'Contact', id: 'contact', icon: '💬' },
    { name: 'Achievements', id: 'achievements', icon: '🏆' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer id="footer" className={`minecraft-footer ${isVisible ? 'visible' : ''}`}>
      <div className="footer-terrain">
        <div className="terrain-layer bedrock"></div>
        <div className="terrain-layer stone"></div>
        <div className="terrain-layer dirt"></div>
        <div className="terrain-layer grass"></div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <div className="brand-info">
              <div className="brand-icon">🎮</div>
              <div className="brand-text">
                <h3>Developer Portfolio</h3>
                <p>Crafted with passion, powered by code</p>
              </div>
            </div>
            <div className="server-status">
              <div className="status-indicator online"></div>
              <span className="status-text">Server Online</span>
              <span className="server-time">{formatTime(currentTime)}</span>
            </div>
          </div>

          <div className="footer-section links-section">
            <h4>Quick Navigation</h4>
            <div className="quick-links">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="quick-link"
                  title={`Go to ${link.name} section`}
                >
                  <span className="link-icon">{link.icon}</span>
                  <span className="link-text">{link.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="footer-section social-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={link.description}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-text">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section info-section">
            <h4>Portfolio Info</h4>
            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">🔧</span>
                <span className="info-text">Built with React & CSS</span>
              </div>
              <div className="info-item">
                <span className="info-icon">🎨</span>
                <span className="info-text">Minecraft Theme Design</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📱</span>
                <span className="info-text">Fully Responsive</span>
              </div>
              <div className="info-item">
                <span className="info-icon">⚡</span>
                <span className="info-text">Optimized Performance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <span className="copyright-icon">©</span>
            <span className="copyright-text">
              {getCurrentYear()} Developer Portfolio. All rights reserved.
            </span>
          </div>
          
          <div className="footer-actions">
            <button 
              onClick={scrollToTop}
              className="scroll-top-button"
              title="Return to spawn point"
            >
              <span className="button-icon">🚀</span>
              <span className="button-text">Back to Top</span>
            </button>
          </div>
          
          <div className="footer-version">
            <span className="version-text">Portfolio v2024.1</span>
            <span className="build-info">Build: Minecraft Edition</span>
          </div>
        </div>

        <div className="floating-elements">
          <div className="floating-block block-1">⬛</div>
          <div className="floating-block block-2">🟫</div>
          <div className="floating-block block-3">🟩</div>
          <div className="floating-block block-4">💎</div>
          <div className="floating-block block-5">🟨</div>
        </div>
      </div>

      <div className="footer-particles">
        {[...Array(20)].map((_, index) => (
          <div 
            key={index} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;