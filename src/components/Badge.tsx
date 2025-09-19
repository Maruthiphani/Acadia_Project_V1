import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'violet' | 'teal' | 'amber' | 'gray';
  size?: 'sm' | 'md' | 'lg';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'violet', size = 'md' }) => {
  const variantClasses = {
    violet: 'bg-accent-violet/10 text-accent-violet border-accent-violet/20',
    teal: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
    amber: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
    gray: 'bg-gray-100 text-gray-700 border-gray-200',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span 
      className={`
        inline-flex items-center rounded-full border font-medium
        ${variantClasses[variant]}
        ${sizeClasses[size]}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;