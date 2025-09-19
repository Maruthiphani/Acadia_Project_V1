import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import Card from '../../components/Card';
import { solutions } from '../../data/solutions';

const SolutionsIndex: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Tailored
            <span className="block text-brand-light">Solutions</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover our comprehensive suite of communication solutions designed to address your unique business challenges and drive measurable results.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Complete Solution Portfolio"
            subtitle="From unified communications to AI-powered automation, we have the expertise to transform your business"
            accentColor="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={solution.slug} 
                accentColor={solution.heroAccent}
                className="h-full"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                      solution.heroAccent === 'violet' ? 'bg-accent-violet/10' :
                      solution.heroAccent === 'teal' ? 'bg-accent-teal/10' :
                      'bg-accent-amber/10'
                    }`}>
                      <div className={`w-8 h-8 ${
                        solution.heroAccent === 'violet' ? 'text-accent-violet' :
                        solution.heroAccent === 'teal' ? 'text-accent-teal' :
                        'text-accent-amber'
                      }`}>
                        {/* Icon placeholder */}
                        <div className="w-full h-full bg-current opacity-60 rounded" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {solution.summary}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <Link
                      to={`/solutions/${solution.slug}`}
                      className={`group inline-flex items-center gap-2 font-semibold transition-colors duration-300 ${
                        solution.heroAccent === 'violet' ? 'text-accent-violet hover:text-accent-violet/80' :
                        solution.heroAccent === 'teal' ? 'text-accent-teal hover:text-accent-teal/80' :
                        'text-accent-amber hover:text-accent-amber/80'
                      }`}
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss which solution is right for your organization and create a customized implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule Consultation
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center gap-3 border-2 border-accent-teal text-accent-teal px-8 py-4 rounded-full font-semibold hover:bg-accent-teal hover:text-white transition-all duration-300"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsIndex;