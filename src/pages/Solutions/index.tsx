import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SolutionCard from '../../components/SolutionCard';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import { solutions } from '../../data/solutions';

const SolutionsIndex: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <BackgroundWrapper variant="hero">
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              Tailored
              <span className="block text-brand-light">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Discover our comprehensive suite of communication solutions designed to address your unique business challenges and drive measurable results.
            </p>
          </div>
        </section>
      </BackgroundWrapper>

      {/* Solutions Grid */}
      <BackgroundWrapper variant="section">
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
                Solution Portfolio
              </h2>
              <p className="text-base sm:text-lg text-brand-slate max-w-3xl mx-auto">
                From unified communications to AI-powered automation, we have the expertise to transform your business
              </p>
            </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={solution.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
              >
                {/* Image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {solutions.map((solution, index) => (
                <SolutionCard
                  key={solution.slug}
                  title={solution.title}
                  summary={solution.summary}
                  slug={solution.slug}
                  heroAccent={solution.heroAccent}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </BackgroundWrapper>

      {/* CTA Section */}
      <BackgroundWrapper variant="default">
        <section className="py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss which solution is right for your organization and create a customized implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-brand text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule Consultation
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center gap-3 border-2 border-accent-teal text-accent-teal px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-accent-teal hover:text-white transition-all duration-300"
              >
                Download Brochure
              </Link>
            </div>
          </div>
        </section>
      </BackgroundWrapper>
    </div>
  );
};

export default SolutionsIndex;