import React from 'react';
import { Phone, Headphones, Cloud, Cpu, Shield, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Phone,
      title: 'UC Consulting',
      description: 'Unified Communications strategy and implementation expertise'
    },
    {
      icon: Headphones,
      title: 'Contact Center',
      description: 'Modern contact center solutions and optimization services'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud-based communication platforms'
    },
    {
      icon: Cpu,
      title: 'Automation & AI',
      description: 'Intelligent automation to streamline communication workflows'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security for voice and data communications'
    },
    {
      icon: Settings,
      title: 'Managed Services',
      description: '24/7 monitoring and management of communication systems'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
            Comprehensive Communication Services
          </h2>
          <p className="text-lg text-brand-slate max-w-3xl mx-auto">
            From strategy to implementation, we provide end-to-end solutions that transform how your organization communicates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;