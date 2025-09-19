import React from 'react';
import { ArrowRight } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Enterprise Voice Solutions',
      description: 'Scalable voice infrastructure designed for modern enterprises with advanced analytics and reporting.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Multi-site deployment', 'Advanced analytics', 'Disaster recovery']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital overhaul of communication systems with integration across all business platforms.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Platform integration', 'Workflow automation', 'Change management']
    },
    {
      title: 'Collaboration Platforms',
      description: 'Modern collaboration tools that enhance productivity and connect teams across any location.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Team collaboration', 'Video conferencing', 'File sharing']
    }
  ];

  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
            Tailored Solutions for Every Challenge
          </h2>
          <p className="text-lg text-brand-slate max-w-3xl mx-auto">
            Discover how our specialized solutions can address your unique communication challenges and drive business growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-4">
                  {solution.title}
                </h3>
                <p className="text-brand-slate mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-brand-slate">
                      <div className="w-2 h-2 bg-brand-sky rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="group/btn flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-sky transition-colors duration-300">
                  Learn More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;