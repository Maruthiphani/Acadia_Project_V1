import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Globe from './Globe';
import WaveDivider from './WaveDivider';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Globe />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight">
            Boundless Potential Through
            <span className="block bg-gradient-to-r from-brand-light to-white bg-clip-text text-transparent">
              Innovative Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming enterprise communications with expert consulting and cutting-edge technology solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-violet hover:text-white transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Talk to Us
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-3">
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Our Solutions
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <WaveDivider />
    </section>
  );
};

export default Hero;