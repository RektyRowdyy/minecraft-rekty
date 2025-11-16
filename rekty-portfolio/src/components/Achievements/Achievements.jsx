import React, { useState, useEffect } from 'react';
import './Achievements.css';

const Achievements = () => {
  const [unlockedAchievements, setUnlockedAchievements] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDetails, setShowDetails] = useState(null);

  const achievements = [
    {
      id: 'first-code',
      title: 'Hello World',
      description: 'Write your first line of code',
      icon: '👋',
      category: 'learning',
      rarity: 'common',
      progress: 100,
      unlocked: true,
      date: '2019-01-15',
      reward: '10 XP'
    },
    {
      id: 'graduate',
      title: 'Scholar',
      description: 'Complete Computer Science degree',
      icon: '🎓',
      category: 'education',
      rarity: 'rare',
      progress: 100,
      unlocked: true,
      date: '2022-05-20',
      reward: '500 XP'
    },
    {
      id: 'first-job',
      title: 'Professional Developer',
      description: 'Land your first development job',
      icon: '💼',
      category: 'career',
      rarity: 'rare',
      progress: 100,
      unlocked: true,
      date: '2019-06-01',
      reward: '1000 XP'
    },
    {
      id: 'github-contributor',
      title: 'Open Source Contributor',
      description: 'Make 50+ contributions to open source projects',
      icon: '🌟',
      category: 'community',
      rarity: 'epic',
      progress: 100,
      unlocked: true,
      date: '2021-03-10',
      reward: '750 XP'
    },
    {
      id: 'bug-hunter',
      title: 'Bug Hunter',
      description: 'Fix 100+ bugs in production',
      icon: '🐛',
      category: 'technical',
      rarity: 'epic',
      progress: 100,
      unlocked: true,
      date: '2021-08-15',
      reward: '800 XP'
    },
    {
      id: 'mentor',
      title: 'Mentor',
      description: 'Successfully mentor 3+ junior developers',
      icon: '👨‍🏫',
      category: 'leadership',
      rarity: 'epic',
      progress: 100,
      unlocked: true,
      date: '2023-02-20',
      reward: '1200 XP'
    },
    {
      id: 'full-stack',
      title: 'Full Stack Master',
      description: 'Build complete applications with frontend and backend',
      icon: '🔄',
      category: 'technical',
      rarity: 'epic',
      progress: 100,
      unlocked: true,
      date: '2022-11-30',
      reward: '1500 XP'
    },
    {
      id: 'performance-optimizer',
      title: 'Performance Wizard',
      description: 'Improve application performance by 50%+',
      icon: '⚡',
      category: 'technical',
      rarity: 'legendary',
      progress: 100,
      unlocked: true,
      date: '2023-07-12',
      reward: '2000 XP'
    },
    {
      id: 'team-lead',
      title: 'Tech Lead',
      description: 'Lead a development team successfully',
      icon: '👑',
      category: 'leadership',
      rarity: 'legendary',
      progress: 100,
      unlocked: true,
      date: '2024-01-15',
      reward: '2500 XP'
    },
    {
      id: 'portfolio-creator',
      title: 'Portfolio Architect',
      description: 'Create an impressive portfolio website',
      icon: '🏗️',
      category: 'creative',
      rarity: 'rare',
      progress: 95,
      unlocked: false,
      date: null,
      reward: '1000 XP'
    },
    {
      id: 'ai-collaborator',
      title: 'AI Collaborator',
      description: 'Work effectively with AI development tools',
      icon: '🤖',
      category: 'innovation',
      rarity: 'epic',
      progress: 85,
      unlocked: false,
      date: null,
      reward: '1800 XP'
    },
    {
      id: 'startup-founder',
      title: 'Startup Founder',
      description: 'Launch your own tech startup',
      icon: '🚀',
      category: 'entrepreneurship',
      rarity: 'legendary',
      progress: 25,
      unlocked: false,
      date: null,
      reward: '5000 XP'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🏆' },
    { id: 'learning', name: 'Learning', icon: '📚' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'career', name: 'Career', icon: '💼' },
    { id: 'technical', name: 'Technical', icon: '⚙️' },
    { id: 'leadership', name: 'Leadership', icon: '👥' },
    { id: 'community', name: 'Community', icon: '🌍' },
    { id: 'creative', name: 'Creative', icon: '🎨' },
    { id: 'innovation', name: 'Innovation', icon: '💡' },
    { id: 'entrepreneurship', name: 'Business', icon: '💰' }
  ];

  useEffect(() => {
    // Simulate unlocking achievements with delay
    const unlockedIds = achievements.filter(a => a.unlocked).map(a => a.id);
    
    unlockedIds.forEach((id, index) => {
      setTimeout(() => {
        setUnlockedAchievements(prev => new Set([...prev, id]));
      }, index * 200);
    });
  }, []);

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

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
      case 'legendary': return '0 0 25px var(--minecraft-gold)';
      case 'epic': return '0 0 20px var(--minecraft-diamond)';
      case 'rare': return '0 0 15px var(--minecraft-emerald)';
      case 'common': return '0 0 10px var(--minecraft-iron)';
      default: return 'none';
    }
  };

  const getTotalXP = () => {
    return achievements
      .filter(a => a.unlocked)
      .reduce((total, achievement) => {
        const xp = parseInt(achievement.reward.split(' ')[0]);
        return total + xp;
      }, 0);
  };

  const getCompletionPercentage = () => {
    const unlockedCount = achievements.filter(a => a.unlocked).length;
    return Math.round((unlockedCount / achievements.length) * 100);
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <div className="achievements-header">
          <div className="header-content">
            <span className="achievements-icon">🏆</span>
            <h2>Achievements</h2>
          </div>
          <div className="stats-panel">
            <div className="stat-item">
              <span className="stat-label">Total XP</span>
              <span className="stat-value">{getTotalXP().toLocaleString()}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Completion</span>
              <span className="stat-value">{getCompletionPercentage()}%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Unlocked</span>
              <span className="stat-value">{achievements.filter(a => a.unlocked).length}/{achievements.length}</span>
            </div>
          </div>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="achievements-grid">
          {filteredAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`achievement-card ${achievement.rarity} ${
                unlockedAchievements.has(achievement.id) ? 'unlocked' : 'locked'
              }`}
              onClick={() => setShowDetails(achievement)}
              style={{
                '--rarity-color': getRarityColor(achievement.rarity),
                '--rarity-glow': getRarityGlow(achievement.rarity)
              }}
            >
              <div className="achievement-icon">
                {achievement.unlocked ? achievement.icon : '🔒'}
              </div>
              
              <div className="achievement-info">
                <h3 className="achievement-title">
                  {achievement.unlocked ? achievement.title : '???'}
                </h3>
                <p className="achievement-description">
                  {achievement.unlocked ? achievement.description : 'Achievement locked'}
                </p>
                
                {!achievement.unlocked && achievement.progress > 0 && (
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                    <span className="progress-text">{achievement.progress}%</span>
                  </div>
                )}
              </div>
              
              <div className="achievement-meta">
                <span className={`rarity-badge ${achievement.rarity}`}>
                  {achievement.rarity}
                </span>
                {achievement.unlocked && (
                  <span className="reward-badge">
                    {achievement.reward}
                  </span>
                )}
              </div>
              
              {unlockedAchievements.has(achievement.id) && (
                <div className="unlock-animation">
                  <span className="unlock-sparkle">✨</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {showDetails && (
          <div className="achievement-modal" onClick={() => setShowDetails(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-icon">{showDetails.icon}</div>
                <div className="modal-title">
                  <h3>{showDetails.title}</h3>
                  <span className={`modal-rarity ${showDetails.rarity}`}>
                    {showDetails.rarity.toUpperCase()}
                  </span>
                </div>
                <button 
                  className="close-button"
                  onClick={() => setShowDetails(null)}
                >
                  ✕
                </button>
              </div>
              
              <div className="modal-body">
                <p className="modal-description">{showDetails.description}</p>
                
                <div className="modal-details">
                  <div className="detail-row">
                    <span className="detail-label">Category:</span>
                    <span className="detail-value">
                      {categories.find(c => c.id === showDetails.category)?.name || showDetails.category}
                    </span>
                  </div>
                  
                  <div className="detail-row">
                    <span className="detail-label">Reward:</span>
                    <span className="detail-value reward">{showDetails.reward}</span>
                  </div>
                  
                  {showDetails.unlocked && showDetails.date && (
                    <div className="detail-row">
                      <span className="detail-label">Unlocked:</span>
                      <span className="detail-value">
                        {new Date(showDetails.date).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                  
                  {!showDetails.unlocked && (
                    <div className="detail-row">
                      <span className="detail-label">Progress:</span>
                      <span className="detail-value">{showDetails.progress}%</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;