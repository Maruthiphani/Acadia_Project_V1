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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              Complete Solution Portfolio
            </h2>
            <p className="text-lg text-brand-slate max-w-3xl mx-auto">
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
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  {/* <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={`https://images.pexels.com/photos/${3184338 + (index % 3)}/pexels-photo-${3184338 + (index % 3)}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      alt={solution.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-brand/20" />
                  </div> */}
                  <div>
                    <img
                      src={solution.image}   // <-- reference the image field you define
                      alt={`${solution.title} capabilities`}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${solution.heroAccent === 'violet' ? 'bg-accent-violet/10' :
                        solution.heroAccent === 'teal' ? 'bg-accent-teal/10' :
                          'bg-accent-amber/10'
                      }`}>
                      <div className={`w-8 h-8 ${solution.heroAccent === 'violet' ? 'text-accent-violet' :
                          solution.heroAccent === 'teal' ? 'text-accent-teal' :
                            'text-accent-amber'
                        }`}>
                        <div className="w-full h-full bg-current opacity-60 rounded" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-brand-navy mb-4">
                      {solution.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {solution.summary}
                    </p>

                    {solution.capabilitiesText && (
                      <p className="text-gray-600 leading-relaxed mb-8">
                        {solution.capabilitiesText}
                      </p>
                    )}

                    <Link
                      to={`/solutions/${solution.slug}`}
                      className={`group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${solution.heroAccent === 'violet' ? 'text-accent-violet hover:text-accent-violet/80' :
                          solution.heroAccent === 'teal' ? 'text-accent-teal hover:text-accent-teal/80' :
                            'text-accent-amber hover:text-accent-amber/80'
                        } border-2 ${solution.heroAccent === 'violet' ? 'border-accent-violet hover:bg-accent-violet hover:text-white' :
                          solution.heroAccent === 'teal' ? 'border-accent-teal hover:bg-accent-teal hover:text-white' :
                            'border-accent-amber hover:bg-accent-amber hover:text-white'
                        }`}
                    >
                      Learn More
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
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