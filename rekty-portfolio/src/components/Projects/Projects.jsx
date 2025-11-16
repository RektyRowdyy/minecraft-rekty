import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      category: 'fullstack',
      status: 'completed',
      thumbnail: '🛒',
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/user/ecommerce-platform',
      features: [
        'User authentication and authorization',
        'Shopping cart and wishlist functionality',
        'Payment processing with Stripe',
        'Admin dashboard for inventory management',
        'Responsive design for all devices'
      ],
      worldType: 'Creative Mode',
      difficulty: 'Hard',
      lastPlayed: '2024-10-15'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'React-based task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      category: 'frontend',
      status: 'completed',
      thumbnail: '📋',
      liveUrl: 'https://example-tasks.com',
      githubUrl: 'https://github.com/user/task-manager',
      features: [
        'Drag and drop task organization',
        'Real-time collaboration',
        'Custom project boards',
        'File attachments and comments',
        'Advanced filtering and search'
      ],
      worldType: 'Survival Mode',
      difficulty: 'Medium',
      lastPlayed: '2024-10-20'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Vue.js weather application with geolocation, multiple city tracking, and detailed forecasts using OpenWeatherMap API.',
      technologies: ['Vue.js', 'Vuex', 'Chart.js', 'OpenWeatherMap API'],
      category: 'frontend',
      status: 'completed',
      thumbnail: '🌤️',
      liveUrl: 'https://example-weather.com',
      githubUrl: 'https://github.com/user/weather-dashboard',
      features: [
        'Current weather and 7-day forecast',
        'Multiple city tracking',
        'Interactive weather charts',
        'Geolocation support',
        'Responsive mobile design'
      ],
      worldType: 'Adventure Mode',
      difficulty: 'Easy',
      lastPlayed: '2024-09-28'
    },
    {
      id: 4,
      title: 'Chat Application',
      description: 'Real-time chat application built with Socket.io, featuring multiple rooms, file sharing, and emoji reactions.',
      technologies: ['Node.js', 'Socket.io', 'Express', 'MongoDB', 'React'],
      category: 'fullstack',
      status: 'in-progress',
      thumbnail: '💬',
      liveUrl: null,
      githubUrl: 'https://github.com/user/chat-app',
      features: [
        'Real-time messaging with Socket.io',
        'Multiple chat rooms',
        'File and image sharing',
        'Emoji reactions and typing indicators',
        'User presence and online status'
      ],
      worldType: 'Hardcore Mode',
      difficulty: 'Hard',
      lastPlayed: '2024-10-25'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Minecraft theme, showcasing projects and skills in a creative gaming interface.',
      technologies: ['React', 'CSS3', 'Vite', 'GitHub Pages'],
      category: 'frontend',
      status: 'in-progress',
      thumbnail: '🎮',
      liveUrl: null,
      githubUrl: 'https://github.com/user/minecraft-portfolio',
      features: [
        'Minecraft-themed UI design',
        'Interactive animations and effects',
        'Responsive grid layouts',
        'Custom CSS variables and theming',
        'Smooth scroll navigation'
      ],
      worldType: 'Creative Mode',
      difficulty: 'Medium',
      lastPlayed: '2024-10-26'
    },
    {
      id: 6,
      title: 'API Gateway Service',
      description: 'Microservices API gateway built with Node.js and Express, handling authentication, rate limiting, and request routing.',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
      category: 'backend',
      status: 'completed',
      thumbnail: '🔌',
      liveUrl: null,
      githubUrl: 'https://github.com/user/api-gateway',
      features: [
        'Request routing and load balancing',
        'JWT-based authentication',
        'Rate limiting and throttling',
        'Request/response logging',
        'Docker containerization'
      ],
      worldType: 'Survival Mode',
      difficulty: 'Hard',
      lastPlayed: '2024-09-15'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Worlds', icon: '🌍' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'fullstack', name: 'Full Stack', icon: '🔄' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'var(--minecraft-emerald)';
      case 'in-progress': return 'var(--minecraft-gold)';
      case 'planned': return 'var(--minecraft-iron)';
      default: return 'var(--minecraft-stone)';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'var(--minecraft-emerald)';
      case 'Medium': return 'var(--minecraft-gold)';
      case 'Hard': return 'var(--minecraft-redstone)';
      default: return 'var(--minecraft-stone)';
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="world-selector-header">
          <div className="header-title">
            <span className="world-icon">🌍</span>
            <h2>Select World</h2>
          </div>
          <div className="world-stats">
            <span>Total Worlds: {projects.length}</span>
            <span>Completed: {projects.filter(p => p.status === 'completed').length}</span>
          </div>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-button ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`project-world ${project.status}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="world-thumbnail">
                <div className="thumbnail-icon">{project.thumbnail}</div>
                <div className="world-overlay">
                  <span className="play-button">▶</span>
                </div>
              </div>
              
              <div className="world-info">
                <h3 className="world-title">{project.title}</h3>
                <div className="world-meta">
                  <span className="world-type">{project.worldType}</span>
                  <span 
                    className="world-difficulty"
                    style={{ color: getDifficultyColor(project.difficulty) }}
                  >
                    {project.difficulty}
                  </span>
                </div>
                <div className="world-description">
                  {project.description}
                </div>
                <div className="world-technologies">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="world-footer">
                  <span 
                    className="world-status"
                    style={{ color: getStatusColor(project.status) }}
                  >
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                  <span className="last-played">Last played: {project.lastPlayed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title">
                  <span className="modal-icon">{selectedProject.thumbnail}</span>
                  <h3>{selectedProject.title}</h3>
                </div>
                <button 
                  className="close-button"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
              </div>
              
              <div className="modal-body">
                <div className="project-details">
                  <div className="detail-section">
                    <h4>Description</h4>
                    <p>{selectedProject.description}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Technologies Used</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Key Features</h4>
                    <ul className="features-list">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h4>World Information</h4>
                    <div className="world-details">
                      <div className="detail-item">
                        <span className="label">Type:</span>
                        <span className="value">{selectedProject.worldType}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">Difficulty:</span>
                        <span 
                          className="value"
                          style={{ color: getDifficultyColor(selectedProject.difficulty) }}
                        >
                          {selectedProject.difficulty}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="label">Status:</span>
                        <span 
                          className="value"
                          style={{ color: getStatusColor(selectedProject.status) }}
                        >
                          {selectedProject.status.charAt(0).toUpperCase() + selectedProject.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button live-demo"
                  >
                    🌐 Live Demo
                  </a>
                )}
                <a 
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button github-link"
                >
                  📂 View Code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;