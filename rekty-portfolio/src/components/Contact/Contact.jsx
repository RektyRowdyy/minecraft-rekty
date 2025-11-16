import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const chatEndRef = useRef(null);

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: '📂', 
      url: 'https://github.com/username',
      status: 'online',
      players: '42/100',
      description: 'Code Repository Server'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: 'https://linkedin.com/in/username',
      status: 'online',
      players: '1.2k/∞',
      description: 'Professional Network'
    },
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: 'https://twitter.com/username',
      status: 'online',
      players: '156/∞',
      description: 'Social Media Server'
    },
    { 
      name: 'Email', 
      icon: '📧', 
      url: 'mailto:your.email@example.com',
      status: 'online',
      players: '1/1',
      description: 'Direct Communication'
    },
    { 
      name: 'Portfolio', 
      icon: '🌐', 
      url: 'https://yourportfolio.com',
      status: 'online',
      players: '∞/∞',
      description: 'Main Website Server'
    }
  ];

  const initialMessages = [
    {
      id: 1,
      type: 'system',
      content: '[Server] Welcome to the Developer Contact Portal!',
      timestamp: '12:00:00'
    },
    {
      id: 2,
      type: 'system',
      content: '[Info] You can reach out using the chat form below or connect through available servers.',
      timestamp: '12:00:01'
    },
    {
      id: 3,
      type: 'player',
      player: 'Developer',
      content: 'Hey there! Thanks for checking out my portfolio. Feel free to send me a message!',
      timestamp: '12:00:05'
    }
  ];

  useEffect(() => {
    // Add initial messages with delay
    let timeoutId;
    initialMessages.forEach((message, index) => {
      timeoutId = setTimeout(() => {
        setMessages(prev => [...prev, message]);
      }, index * 1000);
    });

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const simulateTyping = (message, callback) => {
    setIsTyping(true);
    setCurrentMessage('');
    
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < message.length) {
        setCurrentMessage(message.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setCurrentMessage('');
        if (callback) callback();
      }
    }, 50);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      const errorMessage = {
        id: Date.now(),
        type: 'system',
        content: '[Error] Please fill in all required fields (Name, Email, Message)',
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false })
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'visitor',
      player: formData.name,
      content: `Subject: ${formData.subject || 'General Inquiry'}\n\nMessage: ${formData.message}\n\nContact: ${formData.email}`,
      timestamp: new Date().toLocaleTimeString('en-US', { hour12: false })
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate developer response
    setTimeout(() => {
      const responses = [
        "Thanks for reaching out! I'll get back to you within 24 hours.",
        "Great to hear from you! I'll review your message and respond soon.",
        "Message received! Looking forward to connecting with you.",
        "Thanks for your interest! I'll be in touch shortly."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      simulateTyping(randomResponse, () => {
        const responseMessage = {
          id: Date.now() + 1,
          type: 'player',
          player: 'Developer',
          content: randomResponse,
          timestamp: new Date().toLocaleTimeString('en-US', { hour12: false })
        };
        setMessages(prev => [...prev, responseMessage]);
      });
    }, 1500);

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'var(--minecraft-emerald)';
      case 'away': return 'var(--minecraft-gold)';
      case 'offline': return 'var(--minecraft-redstone)';
      default: return 'var(--minecraft-stone)';
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="chat-header">
          <div className="header-content">
            <span className="chat-icon">💬</span>
            <h2>Contact Portal</h2>
          </div>
          <div className="server-info">
            <span>Server: Developer-Portfolio</span>
            <span>Players Online: {socialLinks.filter(link => link.status === 'online').length}/{socialLinks.length}</span>
          </div>
        </div>

        <div className="chat-interface">
          <div className="server-list">
            <h3>Available Servers</h3>
            <div className="servers">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`server-item ${link.status}`}
                >
                  <div className="server-icon">{link.icon}</div>
                  <div className="server-details">
                    <div className="server-name">{link.name}</div>
                    <div className="server-desc">{link.description}</div>
                    <div className="server-players">{link.players}</div>
                  </div>
                  <div 
                    className="server-status"
                    style={{ backgroundColor: getStatusColor(link.status) }}
                  ></div>
                </a>
              ))}
            </div>
          </div>

          <div className="chat-window">
            <div className="chat-messages">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.type}`}>
                  <span className="timestamp">[{message.timestamp}]</span>
                  {message.type === 'system' ? (
                    <span className="system-message">{message.content}</span>
                  ) : (
                    <>
                      <span className={`player-name ${message.type}`}>
                        &lt;{message.player}&gt;
                      </span>
                      <span className="message-content">{message.content}</span>
                    </>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="message typing">
                  <span className="timestamp">[{new Date().toLocaleTimeString('en-US', { hour12: false })}]</span>
                  <span className="player-name player">&lt;Developer&gt;</span>
                  <span className="message-content typing-indicator">
                    {currentMessage}<span className="cursor">|</span>
                  </span>
                </div>
              )}
              
              <div ref={chatEndRef} />
            </div>

            <form className="chat-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="/name YourName"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="chat-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="/email your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="chat-input"
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="/subject Optional Topic"
                value={formData.subject}
                onChange={handleInputChange}
                className="chat-input"
              />
              
              <textarea
                name="message"
                placeholder="/msg Type your message here..."
                value={formData.message}
                onChange={handleInputChange}
                className="chat-textarea"
                rows="4"
                required
              ></textarea>
              
              <button type="submit" className="send-button">
                <span className="button-icon">📤</span>
                <span className="button-text">Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="chat-footer">
          <div className="footer-info">
            <span>💡 Tip: Click on any server above to connect directly!</span>
            <span>🎮 Ready to collaborate? Send me a message!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;