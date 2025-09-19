import React from 'react';

const Globe: React.FC = () => {
  return (
    <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] animate-float">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-2 border-brand-light/30 animate-spin" style={{ animationDuration: '20s' }}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-sky rounded-full shadow-lg" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-brand-light rounded-full" />
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-brand-sky rounded-full shadow-lg" />
      </div>

      {/* Middle ring */}
      <div className="absolute inset-8 rounded-full border-2 border-brand-sky/40 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
        <div className="absolute top-4 right-8 w-2 h-2 bg-brand-light rounded-full" />
        <div className="absolute bottom-4 left-8 w-3 h-3 bg-white rounded-full shadow-lg" />
        <div className="absolute top-1/3 left-2 w-2 h-2 bg-brand-sky rounded-full" />
        <div className="absolute bottom-1/3 right-2 w-2 h-2 bg-brand-light rounded-full" />
      </div>

      {/* Inner ring */}
      <div className="absolute inset-16 rounded-full border-2 border-white/50 animate-spin" style={{ animationDuration: '10s' }}>
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-brand-sky rounded-full" />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-brand-light rounded-full" />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-brand-sky rounded-full" />
      </div>

      {/* Central core */}
      <div className="absolute inset-1/3 bg-gradient-to-br from-brand-sky to-brand-light rounded-full shadow-2xl flex items-center justify-center">
        <div className="w-8 h-8 bg-white rounded-full shadow-lg animate-pulse" />
      </div>

      {/* Connecting lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-brand-light/60 to-transparent transform rotate-45" />
        <div className="absolute top-3/4 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent transform -rotate-45" />
        <div className="absolute top-1/2 left-0 w-48 h-px bg-gradient-to-r from-transparent via-brand-sky/60 to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-brand-light rounded-full opacity-60 animate-pulse`}
            style={{
              top: `${20 + (i * 7) % 60}%`,
              left: `${15 + (i * 13) % 70}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Globe;