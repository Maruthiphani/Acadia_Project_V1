import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ServiceCardProps {
  title: string;
  summary: string;
  slug: string;
  heroAccent: 'violet' | 'teal' | 'amber';
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, summary, slug, heroAccent, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const accentClasses = {
    violet: 'from-accent-violet to-accent-violet/80',
    teal: 'from-accent-teal to-accent-teal/80',
    amber: 'from-accent-amber to-accent-amber/80',
  };

  if (theme === 'default') {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-accent-violet hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent-violet/10 rounded-2xl flex items-center justify-center mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 text-accent-violet">
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
          <Link
            to={`/services/${slug}`}
            className="group inline-flex items-center gap-2 text-accent-violet hover:text-accent-violet/80 font-semibold transition-colors duration-300"
          >
            Learn More
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative h-64 sm:h-72 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg">
          <div className={`w-full h-full bg-gradient-to-br ${accentClasses[heroAccent]} flex items-center justify-center p-6`}>
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center leading-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {summary}
              </p>
            </div>
            <Link
              to={`/services/${slug}`}
              className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${accentClasses[heroAccent]}`}
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;