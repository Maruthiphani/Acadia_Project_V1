import React from 'react';
import { Building2, Factory, GraduationCap, Shield } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Voice Solutions',
      description: 'Comprehensive voice infrastructure designed for large-scale enterprises with advanced features, analytics, and global reach.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Multi-site deployment and management',
        'Advanced call routing and queuing',
        'Real-time analytics and reporting',
        'Disaster recovery and business continuity',
        'Integration with existing business systems',
        'Scalable architecture for growth'
      ],
      benefits: [
        'Reduced communication costs by up to 40%',
        'Improved call quality and reliability',
        'Enhanced productivity and collaboration',
        'Better customer service capabilities'
      ]
    },
    {
      icon: Factory,
      title: 'Digital Transformation Platform',
      description: 'Complete digital overhaul of communication systems with seamless integration across all business platforms and processes.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Legacy system modernization',
        'Cloud-first architecture design',
        'API-driven integration platform',
        'Workflow automation and optimization',
        'Change management and training',
        'Performance monitoring and analytics'
      ],
      benefits: [
        'Streamlined business processes',
        'Improved operational efficiency',
        'Enhanced employee experience',
        'Future-ready technology stack'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Collaboration Hub',
      description: 'Modern collaboration platform that enhances productivity and connects teams across any location with intelligent features.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Unified team collaboration spaces',
        'HD video conferencing and screen sharing',
        'Intelligent file sharing and storage',
        'Mobile-first design and accessibility',
        'Third-party app integrations',
        'Advanced security and compliance'
      ],
      benefits: [
        'Increased team productivity by 35%',
        'Reduced meeting overhead and travel costs',
        'Better knowledge sharing and retention',
        'Improved work-life balance'
      ]
    },
    {
      icon: Shield,
      title: 'Secure Communications Suite',
      description: 'Enterprise-grade security solution ensuring all communications are protected with advanced encryption and compliance.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'End-to-end encryption for all communications',
        'Multi-factor authentication and SSO',
        'Compliance monitoring and reporting',
        'Threat detection and prevention',
        'Data loss prevention (DLP)',
        'Audit trails and forensic capabilities'
      ],
      benefits: [
        '99.9% security incident prevention',
        'Full regulatory compliance',
        'Reduced security management overhead',
        'Enhanced trust and reputation'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Tailored Solutions for
            <span className="block text-brand-light">Every Challenge</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover our comprehensive suite of communication solutions designed to address your unique business challenges and drive measurable results.
          </p>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={solution.title} className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center">
                        <solution.icon size={32} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold font-heading text-brand-navy">
                        {solution.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-brand-slate mb-8 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-bold font-heading text-brand-navy mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {solution.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-brand-sky rounded-full mt-2" />
                            <span className="text-brand-slate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      {/* <h3 className="text-xl font-bold font-heading text-brand-navy mb-4">Business Benefits</h3> */}
                      <div className="grid grid-cols-1 gap-3">
                        {solution.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                            <span className="text-brand-slate font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="bg-gradient-brand text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300">
                      Request Demo
                    </button>
                  </div>
                  
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-brand/10" />
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-brand-slate mb-8 max-w-2xl mx-auto">
            Let's discuss which solution is right for your organization and create a customized implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border-2 border-brand-navy text-brand-navy px-8 py-4 rounded-full font-semibold hover:bg-brand-navy hover:text-white transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;