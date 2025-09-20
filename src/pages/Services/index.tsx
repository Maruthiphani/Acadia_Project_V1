import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import Card from '../../components/Card';
import { services } from '../../data/services';

const ServicesIndex: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Our
            <span className="block text-brand-light">Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive communication services designed to transform how your organization operates, collaborates, and connects with customers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-brand-slate max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end solutions that deliver measurable results
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                {/* <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={`https://images.pexels.com/photos/${3184291 + (index % 3)}/pexels-photo-${3184291 + (index % 3)}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-brand/20" />
                  </div>
                </div> */}
                 <div>
                <img
                  src={service.image}   // <-- reference the image field you define
                  alt={`${service.title} capabilities`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
                
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      service.heroAccent === 'violet' ? 'bg-accent-violet/10' :
                      service.heroAccent === 'teal' ? 'bg-accent-teal/10' :
                      'bg-accent-amber/10'
                    }`}>
                      <div className={`w-8 h-8 ${
                        service.heroAccent === 'violet' ? 'text-accent-violet' :
                        service.heroAccent === 'teal' ? 'text-accent-teal' :
                        'text-accent-amber'
                      }`}>
                        <div className="w-full h-full bg-current opacity-60 rounded" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-heading text-brand-navy mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.summary}
                    </p>
                    
                    {service.capabilitiesText && (
                      <p className="text-gray-600 leading-relaxed mb-8">
                        {service.capabilitiesText}
                      </p>
                    )}
                    
                    <Link
                      to={`/services/${service.slug}`}
                      className={`group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                        service.heroAccent === 'violet' ? 'text-accent-violet hover:text-accent-violet/80' :
                        service.heroAccent === 'teal' ? 'text-accent-teal hover:text-accent-teal/80' :
                        'text-accent-amber hover:text-accent-amber/80'
                      } border-2 ${
                        service.heroAccent === 'violet' ? 'border-accent-violet hover:bg-accent-violet hover:text-white' :
                        service.heroAccent === 'teal' ? 'border-accent-teal hover:bg-accent-teal hover:text-white' :
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our experts to discuss your specific needs and discover how our services can transform your communication infrastructure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Start a Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesIndex;