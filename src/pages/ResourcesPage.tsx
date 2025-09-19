import React from 'react';
import { FileText, Calendar, Download } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      type: 'Blog',
      icon: FileText,
      title: 'The Future of Enterprise Communications',
      excerpt: 'Exploring trends and innovations shaping the next generation of business communications.',
      date: 'March 15, 2024',
      readTime: '5 min read',
    },
    {
      type: 'Case Study',
      icon: Calendar,
      title: 'Global Manufacturing Company Migration',
      excerpt: 'How we helped a Fortune 500 manufacturer migrate 10,000+ users to the cloud.',
      date: 'March 10, 2024',
      readTime: '8 min read',
    },
    {
      type: 'Whitepaper',
      icon: Download,
      title: 'Contact Center Optimization Guide',
      excerpt: 'Complete guide to modernizing and optimizing your contact center operations.',
      date: 'March 5, 2024',
      readTime: '12 min read',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Resources & 
            <span className="block text-brand-light">Insights</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay informed with our latest insights, case studies, and best practices in enterprise communications and technology.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              Latest Resources & Insights
            </h2>
            <p className="text-lg text-brand-slate max-w-3xl mx-auto">
              Stay informed with our latest insights, case studies, and best practices in enterprise communications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <article
                key={resource.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
                      <resource.icon size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-brand-sky uppercase tracking-wide">
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 group-hover:text-brand-sky transition-colors duration-300">
                    {resource.title}
                  </h3>

                  <p className="text-brand-slate mb-6 leading-relaxed">
                    {resource.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-brand-slate">
                    <span>{resource.date}</span>
                    <span>{resource.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <button className="bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              View All Resources
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
