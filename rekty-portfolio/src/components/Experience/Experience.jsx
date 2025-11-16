import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [currentRecipe, setCurrentRecipe] = useState(0);

  const experiences = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      duration: '2023 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: 'Leading frontend development for enterprise web applications using React and TypeScript. Mentoring junior developers and architecting scalable UI components.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led migration from JavaScript to TypeScript across 15+ components',
        'Mentored 3 junior developers and conducted code reviews',
        'Implemented automated testing increasing code coverage to 85%'
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'Jest', 'Webpack'],
      craftingResult: {
        icon: '💎',
        name: 'Senior Developer',
        rarity: 'legendary'
      },
      ingredients: [
        { icon: '⚛️', name: 'React Mastery', position: 'top-left' },
        { icon: '🔷', name: 'TypeScript', position: 'top-center' },
        { icon: '🧪', name: 'Testing Skills', position: 'top-right' },
        { icon: '👥', name: 'Leadership', position: 'middle-left' },
        { icon: '🎯', name: 'Problem Solving', position: 'middle-center' },
        { icon: '📈', name: 'Performance', position: 'middle-right' },
        { icon: '📚', name: 'Mentoring', position: 'bottom-left' },
        { icon: '🏗️', name: 'Architecture', position: 'bottom-center' },
        { icon: '⚡', name: 'Optimization', position: 'bottom-right' }
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupHub Inc',
      duration: '2021 - 2023',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Developed full-stack web applications using modern JavaScript technologies. Built RESTful APIs and responsive user interfaces for startup products.',
      achievements: [
        'Built 5+ production applications from concept to deployment',
        'Reduced API response times by 60% through database optimization',
        'Implemented real-time features using WebSocket connections',
        'Collaborated with design team to create pixel-perfect UIs'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      craftingResult: {
        icon: '🔄',
        name: 'Full Stack Developer',
        rarity: 'epic'
      },
      ingredients: [
        { icon: '⚛️', name: 'React', position: 'top-left' },
        { icon: '🟢', name: 'Node.js', position: 'top-center' },
        { icon: '🍃', name: 'MongoDB', position: 'top-right' },
        { icon: '🚂', name: 'Express', position: 'middle-left' },
        { icon: '🔌', name: 'APIs', position: 'middle-center' },
        { icon: '📱', name: 'Responsive', position: 'middle-right' },
        { icon: '⚡', name: 'WebSocket', position: 'bottom-left' },
        { icon: '🎨', name: 'UI Design', position: 'bottom-center' },
        { icon: '🚀', name: 'Deployment', position: 'bottom-right' }
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'WebDev Agency',
      duration: '2020 - 2021',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Created responsive websites and web applications for various clients. Focused on modern CSS techniques and JavaScript frameworks.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Improved website loading speeds by 50% on average',
        'Implemented accessibility standards (WCAG 2.1 AA)',
        'Created reusable component library for agency use'
      ],
      technologies: ['React', 'Vue.js', 'Sass', 'Webpack', 'Git'],
      craftingResult: {
        icon: '🎨',
        name: 'Frontend Developer',
        rarity: 'rare'
      },
      ingredients: [
        { icon: '⚛️', name: 'React', position: 'top-left' },
        { icon: '💚', name: 'Vue.js', position: 'top-center' },
        { icon: '🎭', name: 'CSS/Sass', position: 'top-right' },
        { icon: '📦', name: 'Webpack', position: 'middle-left' },
        { icon: '🎯', name: 'Responsive', position: 'middle-center' },
        { icon: '♿', name: 'Accessibility', position: 'middle-right' },
        { icon: '📝', name: 'Git', position: 'bottom-left' },
        { icon: '🔧', name: 'Components', position: 'bottom-center' },
        { icon: '⚡', name: 'Performance', position: 'bottom-right' }
      ]
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'Digital Solutions Ltd',
      duration: '2019 - 2020',
      location: 'Remote',
      type: 'Full-time',
      description: 'Started career in web development, learning modern frameworks and best practices. Contributed to team projects and maintained existing codebases.',
      achievements: [
        'Successfully completed 15+ feature implementations',
        'Fixed 100+ bugs and improved code quality',
        'Learned React, Node.js, and modern development tools',
        'Participated in agile development processes'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap'],
      craftingResult: {
        icon: '🌱',
        name: 'Junior Developer',
        rarity: 'common'
      },
      ingredients: [
        { icon: '🟨', name: 'JavaScript', position: 'top-left' },
        { icon: '📄', name: 'HTML5', position: 'top-center' },
        { icon: '🎨', name: 'CSS3', position: 'top-right' },
        { icon: '💰', name: 'jQuery', position: 'middle-left' },
        { icon: '🧩', name: 'Problem Solving', position: 'middle-center' },
        { icon: '🔧', name: 'Debugging', position: 'middle-right' },
        { icon: '📚', name: 'Learning', position: 'bottom-left' },
        { icon: '👥', name: 'Teamwork', position: 'bottom-center' },
        { icon: '⚡', name: 'Agile', position: 'bottom-right' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRecipe((prev) => (prev + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'var(--minecraft-gold)';
      case 'epic': return 'var(--minecraft-diamond)';
      case 'rare': return 'var(--minecraft-emerald)';
      case 'common': return 'var(--minecraft-iron)';
      default: return 'var(--minecraft-stone)';
    }
  };

  const getRarityGlow = (rarity) => {
    switch (rarity) {
      case 'legendary': return '0 0 20px var(--minecraft-gold)';
      case 'epic': return '0 0 20px var(--minecraft-diamond)';
      case 'rare': return '0 0 20px var(--minecraft-emerald)';
      case 'common': return '0 0 10px var(--minecraft-iron)';
      default: return 'none';
    }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="crafting-header">
          <div className="header-content">
            <span className="crafting-icon">⚒️</span>
            <h2>Crafting Experience</h2>
          </div>
          <div className="experience-stats">
            <span>Total Experience: {experiences.length} Recipes</span>
            <span>Years Active: {new Date().getFullYear() - 2019}</span>
          </div>
        </div>

        <div className="crafting-interface">
          <div className="recipe-selector">
            <h3>Career Progression</h3>
            <div className="recipe-timeline">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`timeline-item ${currentRecipe === index ? 'active' : ''}`}
                  onClick={() => setCurrentRecipe(index)}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{exp.duration}</div>
                    <div className="timeline-title">{exp.title}</div>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="crafting-table">
            <div className="crafting-grid">
              <div className="crafting-input">
                <h4>Skills & Experience</h4>
                <div className="ingredient-grid">
                  {experiences[currentRecipe].ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className={`ingredient-slot ${ingredient.position}`}
                      title={ingredient.name}
                    >
                      <div className="ingredient-icon">{ingredient.icon}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="crafting-arrow">
                <span>→</span>
              </div>

              <div className="crafting-result">
                <h4>Career Achievement</h4>
                <div 
                  className={`result-slot ${experiences[currentRecipe].craftingResult.rarity}`}
                  style={{
                    borderColor: getRarityColor(experiences[currentRecipe].craftingResult.rarity),
                    boxShadow: getRarityGlow(experiences[currentRecipe].craftingResult.rarity)
                  }}
                >
                  <div className="result-icon">
                    {experiences[currentRecipe].craftingResult.icon}
                  </div>
                  <div className="result-name">
                    {experiences[currentRecipe].craftingResult.name}
                  </div>
                  <div 
                    className="result-rarity"
                    style={{ color: getRarityColor(experiences[currentRecipe].craftingResult.rarity) }}
                  >
                    {experiences[currentRecipe].craftingResult.rarity}
                  </div>
                </div>
              </div>
            </div>

            <div className="recipe-details">
              <div className="recipe-info">
                <h3>{experiences[currentRecipe].title}</h3>
                <div className="job-meta">
                  <span className="company">{experiences[currentRecipe].company}</span>
                  <span className="duration">{experiences[currentRecipe].duration}</span>
                  <span className="location">{experiences[currentRecipe].location}</span>
                  <span className="type">{experiences[currentRecipe].type}</span>
                </div>
                <p className="job-description">{experiences[currentRecipe].description}</p>
              </div>

              <div className="achievements-section">
                <h4>Key Achievements</h4>
                <ul className="achievements-list">
                  {experiences[currentRecipe].achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="technologies-section">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {experiences[currentRecipe].technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-navigation">
          <button
            className="nav-button prev"
            onClick={() => setCurrentRecipe((prev) => (prev - 1 + experiences.length) % experiences.length)}
          >
            ← Previous Recipe
          </button>
          <div className="recipe-indicator">
            {experiences.map((_, index) => (
              <span
                key={index}
                className={`indicator-dot ${currentRecipe === index ? 'active' : ''}`}
                onClick={() => setCurrentRecipe(index)}
              ></span>
            ))}
          </div>
          <button
            className="nav-button next"
            onClick={() => setCurrentRecipe((prev) => (prev + 1) % experiences.length)}
          >
            Next Recipe →
          </button>
        </div>

        {selectedExperience && (
          <div className="experience-modal" onClick={() => setSelectedExperience(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedExperience.title}</h3>
                <button 
                  className="close-button"
                  onClick={() => setSelectedExperience(null)}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                {/* Modal content would go here */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;