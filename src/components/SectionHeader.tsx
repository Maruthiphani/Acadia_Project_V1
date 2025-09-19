import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accentColor?: 'violet' | 'teal' | 'amber';
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  accentColor = 'violet',
  centered = true 
}) => {
  const accentClasses = {
    violet: 'bg-accent-violet',
    teal: 'bg-accent-teal',
    amber: 'bg-accent-amber',
  };

  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
        {title}
      </h2>
      <div className={`w-20 h-1 ${accentClasses[accentColor]} ${centered ? 'mx-auto' : ''} mb-6`} />
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;