import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    'Microsoft Teams', 'Cisco', 'Zoom', 'RingCentral', 'Avaya', 'Mitel',
    '8x8', 'Genesys', 'Five9', 'Amazon Connect', 'Salesforce', 'ServiceNow'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Strategic Technology
            <span className="block text-brand-light">Partnerships</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We collaborate with industry-leading technology partners to deliver comprehensive,
            integrated solutions that drive your business forward.
          </p>
        </div>
      </section>

      {/* Partners Marquee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-brand-slate max-w-3xl mx-auto">
              We partner with the world's leading communication technology providers
              to deliver the best solutions
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 md:space-x-16">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="flex-shrink-0 bg-gray-50 rounded-2xl px-8 py-6 shadow-sm hover:shadow-lg transition-shadow duration-300 min-w-[200px] flex items-center justify-center"
                >
                  <span className="text-brand-slate font-semibold text-lg whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <button className="border-2 border-brand-navy text-brand-navy px-8 py-4 rounded-full font-semibold hover:bg-brand-navy hover:text-white transition-all duration-300">
              View All Partners
            </button>
          </div> */}
        </div>

        {/* Inline styles (optional — better to use Tailwind config) */}
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default Partners;
