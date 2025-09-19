import React from 'react';
import { Phone, Headphones, Cloud, Cpu, Shield, Settings, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Phone,
      title: 'Unified Communications Consulting',
      description: 'Complete UC strategy development, platform selection, and implementation guidance for seamless organizational communication.',
      features: ['Strategy Development', 'Platform Migration', 'Training & Adoption', 'Performance Optimization'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Headphones,
      title: 'Contact Center Solutions',
      description: 'Modern contact center design, implementation, and optimization to enhance customer experience and agent productivity.',
      features: ['Omnichannel Design', 'AI Integration', 'Workforce Optimization', 'Quality Management'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration Services',
      description: 'Seamless migration of communication systems to cloud platforms with minimal disruption and maximum efficiency.',
      features: ['Migration Planning', 'Risk Assessment', 'Data Security', 'Performance Testing'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Cpu,
      title: 'Automation & AI Solutions',
      description: 'Intelligent automation implementation to streamline workflows, reduce costs, and improve communication efficiency.',
      features: ['Process Automation', 'Chatbot Integration', 'Predictive Analytics', 'Workflow Optimization'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions and compliance management for enterprise communication systems.',
      features: ['Security Assessment', 'Compliance Auditing', 'Risk Mitigation', 'Policy Development'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Settings,
      title: 'Managed Services',
      description: '24/7 monitoring, management, and support for your communication infrastructure with proactive maintenance.',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Performance Reporting', 'Technical Support'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Comprehensive Communication
            <span className="block text-brand-light">Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From strategy to implementation, we provide end-to-end solutions that transform how your organization communicates, collaborates, and connects.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center">
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold font-heading text-brand-navy">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-brand-slate mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-sky rounded-full" />
                        <span className="text-brand-slate">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="group bg-gradient-brand text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                    Learn More
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-brand/20" />
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
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-brand-slate mb-8 max-w-2xl mx-auto">
            Contact our experts to discuss your specific needs and discover how our services can transform your communication infrastructure.
          </p>
          <button className="bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Start a Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;