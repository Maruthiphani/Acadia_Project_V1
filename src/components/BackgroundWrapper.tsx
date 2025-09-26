import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface BackgroundWrapperProps {
  children: React.ReactNode;
  variant?: 'default' | 'hero' | 'section';
  className?: string;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const { theme } = useTheme();

  const getBackgroundClass = () => {
    if (theme === 'default') {
      return variant === 'hero' ? "bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed" : 
             variant === 'section' ? 'bg-brand-bg' : 'bg-white';
    }

    if (theme === 'modern') {
      const backgrounds = {
        hero: "bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed",
        section: "bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed",
        default: "bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed"
      };
      return backgrounds[variant];
    }

    if (theme === 'creative') {
      const backgrounds = {
        hero: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
        section: "bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed",
        default: "bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed"
      };
      return backgrounds[variant];
    }

    return 'bg-white';
  };

  const getOverlayClass = () => {
    if (variant === 'hero' || ((theme === 'modern' || theme === 'creative') && variant !== 'default')) {
      return 'relative before:absolute before:inset-0 before:bg-black/30 before:z-0';
    }
    return '';
  };

  return (
    <div className={`${getBackgroundClass()} ${getOverlayClass()} ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;