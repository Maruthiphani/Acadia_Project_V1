import React from 'react';

interface CardProps {
  children: React.ReactNode;
  accentColor?: 'violet' | 'teal' | 'amber';
  hover?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  accentColor = 'violet', 
  hover = true,
  className = '' 
}) => {
  const accentClasses = {
    violet: 'border-t-accent-violet hover:border-accent-violet/30',
    teal: 'border-t-accent-teal hover:border-accent-teal/30',
    amber: 'border-t-accent-amber hover:border-accent-amber/30',
  };

  return (
    <div 
      className={`
        bg-white rounded-xl shadow-sm border border-gray-100 border-t-4 
        ${accentClasses[accentColor]}
        ${hover ? 'hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;