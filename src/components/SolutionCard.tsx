import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SolutionCardProps {
  title: string;
  summary: string;
  slug: string;
  heroAccent: 'violet' | 'teal' | 'amber';
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  summary,
  slug,
  heroAccent,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const accentClasses = {
    violet: 'border-accent-violet bg-accent-violet/5 text-accent-violet',
    teal: 'border-accent-teal bg-accent-teal/5 text-accent-teal',
    amber: 'border-accent-amber bg-accent-amber/5 text-accent-amber',
  };

  const gradientClasses = {
    violet: 'from-accent-violet/10 to-accent-violet/5',
    teal: 'from-accent-teal/10 to-accent-teal/5',
    amber: 'from-accent-amber/10 to-accent-amber/5',
  };

  // ---- Classic "default theme" look ----
  if (theme === 'default') {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-accent-teal hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent-teal/10 rounded-2xl flex items-center justify-center mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 text-accent-teal">
                <div className="w-full h-full bg-current opacity-60 rounded" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-gray-900 mb-3">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {summary}
            </p>
          </div>
          {/* This Link works */}
          <Link
            to={`/solutions/${slug}`}
            className="group inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80 font-semibold transition-colors duration-300"
          >
            Learn More
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    );
  }

  // ---- Modern / Creative theme look ----
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 transform ${
        isHovered ? 'scale-105 shadow-2xl' : 'shadow-lg hover:shadow-xl'
      } ${accentClasses[heroAccent]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[heroAccent]} transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-50'
        }`}
      />

      <div className="relative p-6 sm:p-8 h-64 sm:h-72 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h3>

          <div
            className={`transition-all duration-500 ${
              isHovered
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-4'
            }`}
          >
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              {summary}
            </p>
          </div>
        </div>

        <div
          className={`transition-all duration-500 ${
            isHovered
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-4'
          }`}
        >
          {/* This Link works properly */}
          <Link
            to={`/solutions/${slug}`}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              heroAccent === 'violet'
                ? 'bg-accent-violet text-white'
                : heroAccent === 'teal'
                ? 'bg-accent-teal text-white'
                : 'bg-accent-amber text-white'
            }`}
          >
            Learn More
            <ChevronRight size={16} />
          </Link>
        </div>

        {!isHovered && (
          <div className="absolute bottom-6 right-6 opacity-30">
            <ChevronRight size={24} className="text-gray-400" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionCard;
