import React from 'react';
import { Palette, Monitor, Sparkles } from 'lucide-react';
import { useTheme, Theme } from '../contexts/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'default' as Theme, name: 'Classic', icon: Monitor, color: 'bg-brand-navy' },
    { id: 'modern' as Theme, name: 'Modern', icon: Palette, color: 'bg-accent-teal' },
    { id: 'creative' as Theme, name: 'Creative', icon: Sparkles, color: 'bg-accent-amber' },
  ];

  return (
    <div className="fixed top-24 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Theme</h3>
      <div className="flex flex-col gap-2">
        {themes.map((themeOption) => (
          <button
            key={themeOption.id}
            onClick={() => setTheme(themeOption.id)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
              theme === themeOption.id
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className={`w-4 h-4 rounded-full ${themeOption.color}`} />
            <themeOption.icon size={16} />
            <span className="text-sm font-medium">{themeOption.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;