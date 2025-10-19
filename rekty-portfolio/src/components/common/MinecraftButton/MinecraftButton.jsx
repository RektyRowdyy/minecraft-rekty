import React from 'react';
import './MinecraftButton.css';

const MinecraftButton = ({ 
  children, 
  onClick, 
  variant = 'default',
  size = 'medium',
  disabled = false,
  className = '',
  ...props 
}) => {
  const buttonClass = `minecraft-button minecraft-button--${variant} minecraft-button--${size} ${className}`;

  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="minecraft-button__content">
        {children}
      </span>
    </button>
  );
};

export default MinecraftButton;