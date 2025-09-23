import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../../components/ServiceCard';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import { services } from '../../data/services';

const ServicesIndex: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <BackgroundWrapper variant="hero">
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              <span className="block text-brand-light">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive communication services designed to transform how your organization operates, collaborates, and connects with customers.
            </p>
          </div>
        </section>
      </BackgroundWrapper>

      {/* Services Grid */}
      <BackgroundWrapper variant="section">
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
                Service Portfolio
              </h2>
              <p className="text-base sm:text-lg text-brand-slate max-w-3xl mx-auto">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  summary={service.summary}
                  slug={service.slug}
                  heroAccent={service.heroAccent}
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
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss your specific needs and discover how our services can transform your communication infrastructure.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gradient-brand text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start a Project
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </BackgroundWrapper>
    </div>
      );
    )
    };

export default ServicesIndex;
  )
}