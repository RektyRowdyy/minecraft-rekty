import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const skills = [
    // Programming Languages
    { name: 'JavaScript', level: 'Expert', category: 'languages', icon: '🟨', description: 'Modern ES6+ JavaScript for web development' },
    { name: 'Python', level: 'Advanced', category: 'languages', icon: '🐍', description: 'Backend development and data analysis' },
    { name: 'TypeScript', level: 'Advanced', category: 'languages', icon: '🔷', description: 'Type-safe JavaScript for large applications' },
    { name: 'Java', level: 'Intermediate', category: 'languages', icon: '☕', description: 'Object-oriented programming and Android development' },
    { name: 'C++', level: 'Intermediate', category: 'languages', icon: '⚡', description: 'System programming and performance-critical applications' },
    
    // Frontend Frameworks
    { name: 'React', level: 'Expert', category: 'frontend', icon: '⚛️', description: 'Component-based UI library with hooks and context' },
    { name: 'Vue.js', level: 'Advanced', category: 'frontend', icon: '💚', description: 'Progressive framework for building user interfaces' },
    { name: 'Angular', level: 'Intermediate', category: 'frontend', icon: '🅰️', description: 'Full-featured framework for enterprise applications' },
    { name: 'Next.js', level: 'Advanced', category: 'frontend', icon: '▲', description: 'React framework with SSR and static generation' },
    
    // Backend & Databases
    { name: 'Node.js', level: 'Advanced', category: 'backend', icon: '🟢', description: 'Server-side JavaScript runtime environment' },
    { name: 'Express.js', level: 'Advanced', category: 'backend', icon: '🚂', description: 'Fast and minimalist web framework for Node.js' },
    { name: 'MongoDB', level: 'Advanced', category: 'database', icon: '🍃', description: 'NoSQL document database for modern applications' },
    { name: 'PostgreSQL', level: 'Intermediate', category: 'database', icon: '🐘', description: 'Advanced relational database with JSON support' },
    { name: 'Redis', level: 'Intermediate', category: 'database', icon: '🔴', description: 'In-memory data structure store and cache' },
    
    // Tools & Technologies
    { name: 'Git', level: 'Expert', category: 'tools', icon: '📝', description: 'Version control and collaborative development' },
    { name: 'Docker', level: 'Advanced', category: 'tools', icon: '🐳', description: 'Containerization and deployment automation' },
    { name: 'AWS', level: 'Intermediate', category: 'cloud', icon: '☁️', description: 'Cloud computing services and infrastructure' },
    { name: 'Webpack', level: 'Advanced', category: 'tools', icon: '📦', description: 'Module bundler and build tool optimization' },
    { name: 'Jest', level: 'Advanced', category: 'testing', icon: '🃏', description: 'JavaScript testing framework with mocking' },
    { name: 'Cypress', level: 'Intermediate', category: 'testing', icon: '🌲', description: 'End-to-end testing for web applications' }
  ];

  const handleMouseEnter = (skill, event) => {
    setHoveredSkill(skill);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (hoveredSkill) {
      setTooltipPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'var(--minecraft-diamond)';
      case 'Advanced': return 'var(--minecraft-gold)';
      case 'Intermediate': return 'var(--minecraft-iron)';
      default: return 'var(--minecraft-stone)';
    }
  };

  const getCategoryTitle = (category) => {
    const titles = {
      languages: 'Programming Languages',
      frontend: 'Frontend Frameworks',
      backend: 'Backend Technologies',
      database: 'Databases',
      tools: 'Development Tools',
      cloud: 'Cloud Services',
      testing: 'Testing Frameworks'
    };
    return titles[category] || category;
  };

  const groupedSkills = skills.reduce((groups, skill) => {
    if (!groups[skill.category]) {
      groups[skill.category] = [];
    }
    groups[skill.category].push(skill);
    return groups;
  }, {});

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="inventory-header">
          <div className="inventory-title">
            <span className="inventory-icon">📦</span>
            <h2>Skills Inventory</h2>
          </div>
          <div className="inventory-stats">
            <span>Total Items: {skills.length}</span>
            <span>Categories: {Object.keys(groupedSkills).length}</span>
          </div>
        </div>

        <div className="inventory-content">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{getCategoryTitle(category)}</h3>
              <div className="inventory-grid">
                {categorySkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`inventory-slot ${skill.level.toLowerCase()}`}
                    onMouseEnter={(e) => handleMouseEnter(skill, e)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      '--level-color': getLevelColor(skill.level)
                    }}
                  >
                    <div className="item-icon">{skill.icon}</div>
                    <div className="item-name">{skill.name}</div>
                    <div className="item-level" style={{ color: getLevelColor(skill.level) }}>
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {hoveredSkill && (
          <div
            className="skill-tooltip"
            style={{
              left: tooltipPosition.x + 10,
              top: tooltipPosition.y - 10,
              '--tooltip-border-color': getLevelColor(hoveredSkill.level)
            }}
          >
            <div className="tooltip-header">
              <span className="tooltip-icon">{hoveredSkill.icon}</span>
              <span className="tooltip-name">{hoveredSkill.name}</span>
            </div>
            <div className="tooltip-level" style={{ color: getLevelColor(hoveredSkill.level) }}>
              Level: {hoveredSkill.level}
            </div>
            <div className="tooltip-description">
              {hoveredSkill.description}
            </div>
            <div className="tooltip-category">
              Category: {getCategoryTitle(hoveredSkill.category)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;