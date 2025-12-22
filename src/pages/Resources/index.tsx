import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { resources as allResources } from '../../data/resources';

type LucideIconType = React.ComponentType<{ size?: number; className?: string }>;

// Map resource "type" to accent classes (tweak to your design system)
const typeAccent: Record<
  string,
  {
    bgSoft: string;      // soft background for icon block
    text: string;        // text color
    border?: string;     // optional border color
    pill?: string;       // type pill text color
  }
> = {
  Technology: { bgSoft: 'bg-accent-teal/10', text: 'text-accent-teal', pill: 'text-brand-sky' },
  Enterprise: { bgSoft: 'bg-accent-violet/10', text: 'text-accent-violet', pill: 'text-brand-sky' },
  Solutions: { bgSoft: 'bg-accent-amber/10', text: 'text-accent-amber', pill: 'text-brand-sky' },
  Networks: { bgSoft: 'bg-accent-teal/10', text: 'text-accent-teal', pill: 'text-brand-sky' },
  Security: { bgSoft: 'bg-accent-violet/10', text: 'text-accent-violet', pill: 'text-brand-sky' },
  DevOps: { bgSoft: 'bg-accent-amber/10', text: 'text-accent-amber', pill: 'text-brand-sky' },
  AI: { bgSoft: 'bg-accent-amber/10', text: 'text-accent-amber', pill: 'text-brand-sky' },
  Workplace: { bgSoft: 'bg-accent-teal/10', text: 'text-accent-teal', pill: 'text-brand-sky' },
};

const ResourcesIndex: React.FC = () => {
  // Use the full list or filter to a subset if desired
  const resources = allResources.map((r) => {
    const Icon = Icons[r.icon as keyof typeof Icons] as LucideIconType | undefined;
    return {
      ...r,
      Icon: Icon ?? Icons.FileText, // fallback icon
      accent: typeAccent[r.type] ?? { bgSoft: 'bg-brand-bg', text: 'text-brand-sky' },
      introPreview: r.intro?.[0] ?? r.excerpt ?? '',
    };
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Latest <span className="block text-brand-light">Resources</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Deep dives, guides, and thought leadership across communications, networking, security, AI, and DevOps.
          </p>
        </div>
      </section>

      {/* Alternating Resource Rows */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              Resource Library
            </h2>
            <p className="text-lg text-brand-slate max-w-3xl mx-auto">
              Explore practical guidance and future-ready strategies from our experts.
            </p>
          </div>

          <div className="space-y-16">
            {resources.map((res, index) => (
              <div
                key={res.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Visual / Icon block */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                    {/* soft gradient bubble */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-brand opacity-20" />
                    <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-gradient-brand opacity-10" />
                    <div
                      className={`w-20 h-20 ${res.accent.bgSoft} rounded-2xl flex items-center justify-center shadow-md relative z-10`}
                    >
                      <res.Icon size={36} className={`${res.accent.text}`} />
                    </div>
                    <div className="mt-6">
                      <span className={`inline-block text-sm font-semibold uppercase tracking-wide ${res.accent.pill ?? 'text-brand-sky'}`}>
                        {res.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold font-heading text-brand-navy mb-4">
                      {res.title}
                    </h3>

                    {/* Prefer excerpt; fall back to first intro paragraph */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {res.excerpt || res.introPreview}
                    </p>

                    {/* If you want an additional line, show more preview */}
                    {res.excerpt && res.introPreview && (
                      <p className="text-gray-600 leading-relaxed mb-8">
                        {res.introPreview}
                      </p>
                    )}

                    <Link
                      to={`/resources/${res.slug}`}
                      className={`group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 border-2 ${res.accent.text} hover:text-white hover:bg-brand-navy border-brand-navy/20`}
                    >
                      Learn More
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All (optional) */}
          <div className="text-center mt-16">
            <Link
              to="/resources"
              className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Browse All Resources
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Ready to Apply These Insights?
          </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let’s translate ideas into outcomes. Talk to our experts about your use case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-3 border-2 border-accent-teal text-accent-teal px-8 py-4 rounded-full font-semibold hover:bg-accent-teal hover:text-white transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesIndex;
