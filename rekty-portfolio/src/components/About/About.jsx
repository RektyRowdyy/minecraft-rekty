import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const playerStats = [
    { label: 'Player', value: 'Hridya', icon: '👤' },
    { label: 'Level', value: 'Senior Developer', icon: '⭐' },
    { label: 'XP', value: '2+ years coding', icon: '✨' },
    { label: 'Health', value: '❤️❤️❤️❤️❤️', special: 'health' },
    { label: 'Hunger', value: '🍖🍖🍖🍖🍖', special: 'hunger' },
    { label: 'Location', value: 'Remote World', icon: '🌍' },
    { label: 'Biome', value: 'Software Development', icon: '🏔️' },
    { label: 'Game Mode', value: 'Creative & Survival', icon: '⚡' }
  ];

  const achievements = [
    { 
      title: 'Code Warrior', 
      description: 'Write 10,000+ lines of code',
      icon: '⚔️',
      unlocked: true
    },
    { 
      title: 'Bug Hunter', 
      description: 'Debug 100+ critical issues',
      icon: '🐛',
      unlocked: true
    },
    { 
      title: 'Stack Master', 
      description: 'Master full-stack development',
      icon: '🏗️',
      unlocked: true
    },
    { 
      title: 'Team Player', 
      description: 'Successfully collaborate on team projects',
      icon: '🤝',
      unlocked: true
    },
    { 
      title: 'Problem Solver', 
      description: 'Solve complex technical challenges',
      icon: '🧩',
      unlocked: true
    },
    { 
      title: 'Continuous Learner', 
      description: 'Always learning new technologies',
      icon: '📚',
      unlocked: true
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title minecraft-text">Player Stats</h2>
        </div>

        <div className="about-content">
          {/* Player Stats Panel */}
          <div className={`player-stats-panel ${statsVisible ? 'stats-visible' : ''}`}>
            <div className="stats-header">
              <div className="stats-title">Debug Screen (F3)</div>
              <div className="minecraft-version">Hridya Portfolio v1.0</div>
            </div>
            
            <div className="stats-grid">
              {playerStats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`stat-item ${stat.special || ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="stat-label">
                    {stat.icon && <span className="stat-icon">{stat.icon}</span>}
                    {stat.label}:
                  </span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio Section */}
          <div className={`about-bio ${statsVisible ? 'bio-visible' : ''}`}>
            <div className="bio-book">
              <div className="book-header">
                <h3 className="book-title">About Me</h3>
                <div className="book-subtitle">The Developer's Journey</div>
              </div>
              
              <div className="book-content">
                <div className="bio-page">
                  <p className="bio-paragraph">
                    Hello! I'm <span className="highlight-text">HRIDYA</span>, a passionate full-stack developer 
                    who loves building digital worlds with code. Like a skilled Minecraft builder, 
                    I craft applications one block (line of code) at a time.
                  </p>
                  
                  <p className="bio-paragraph">
                    My journey in software development started several years ago, and I've been 
                    exploring different technologies and frameworks ever since. I enjoy both the 
                    creative and logical aspects of programming.
                  </p>
                  
                  <p className="bio-paragraph">
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open source projects, or actually playing Minecraft for inspiration!
                  </p>
                </div>
                
                <div className="bio-signature">
                  <div className="signature-line">- HRIDYA</div>
                  <div className="signature-subtitle">Full Stack Developer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className={`achievements-panel ${statsVisible ? 'achievements-visible' : ''}`}>
            <div className="achievements-header">
              <h3 className="achievements-title">Achievements Unlocked</h3>
              <div className="achievements-count">{achievements.filter(a => a.unlocked).length}/{achievements.length}</div>
            </div>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className={`achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}`}
                  style={{ animationDelay: `${(index + playerStats.length) * 0.1}s` }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <div className="achievement-title">{achievement.title}</div>
                    <div className="achievement-description">{achievement.description}</div>
                  </div>
                  {achievement.unlocked && <div className="achievement-glow"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;