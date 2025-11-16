import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark, isTransitioning } = useTheme();

  return (
    <div className="theme-toggle-container">
      <div className="theme-toggle-label">
        <span className="toggle-icon">{isDark ? '🌙' : '☀️'}</span>
        <span className="toggle-text">{isDark ? 'Night' : 'Day'}</span>
      </div>
      
      <button 
        className={`theme-toggle ${isDark ? 'dark' : 'light'} ${isTransitioning ? 'transitioning' : ''}`}
        onClick={toggleTheme}
        title={`Switch to ${isDark ? 'day' : 'night'} mode`}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      >
        <div className="toggle-track">
          <div className="toggle-base">
            <div className="redstone-dust"></div>
            <div className="redstone-dust"></div>
            <div className="redstone-dust"></div>
          </div>
          
          <div className={`toggle-lever ${isDark ? 'on' : 'off'}`}>
            <div className="lever-handle">
              <div className="lever-top"></div>
              <div className="lever-middle"></div>
              <div className="lever-bottom"></div>
            </div>
          </div>
          
          <div className="toggle-indicators">
            <div className={`indicator sun ${!isDark ? 'active' : ''}`}>☀️</div>
            <div className={`indicator moon ${isDark ? 'active' : ''}`}>🌙</div>
          </div>
        </div>
        
        <div className="toggle-glow"></div>
        
        {isTransitioning && (
          <div className="transition-particles">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index} 
                className="particle"
                style={{
                  '--delay': `${index * 0.1}s`,
                  '--angle': `${index * 45}deg`
                }}
              >
                ✨
              </div>
            ))}
          </div>
        )}
      </button>
      
      <div className="theme-description">
        <span className="description-text">
          {isDark ? 'Cave exploration mode' : 'Surface adventure mode'}
        </span>
      </div>
    </div>
  );
};

export default ThemeToggle;