import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const Partners: React.FC = () => {
  // const partners = [
  //   'Microsoft Teams', 'Cisco', 'Zoom', 'RingCentral', 'Avaya', 'Mitel',
  //   '8x8', 'Genesys', 'Five9', 'Amazon Connect', 'Salesforce', 'ServiceNow'
  // ];
  
  const partners = [
    { name: 'Microsoft Teams', logoUrl: 'https://i.imgur.com/jJSI5RU.jpeg' },
    { name: 'Mitel', logoUrl: 'https://i.imgur.com/NkGngyj.jpeg' },
    { name: 'RingCentral', logoUrl: 'https://i.imgur.com/81WnB0v.jpeg' },
    { name: 'Zoom', logoUrl: 'https://i.imgur.com/n49m2eO.jpeg' },
    { name: 'Avaya', logoUrl: 'https://i.imgur.com/CUneOyk.jpeg' },
    { name: '8x8', logoUrl: 'https://i.imgur.com/O8wdvTy.jpeg' },
    { name: 'Five9', logoUrl: 'https://i.imgur.com/pzWqvoM.jpeg' },
    { name: 'Genesys', logoUrl: 'https://i.imgur.com/eaL1dLQ.jpeg' },
    { name: 'Salesforce', logoUrl: 'https://i.imgur.com/Z1Lg1In.jpeg' },
  ];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-brand-slate max-w-3xl mx-auto">
            We partner with the world's leading communication technology providers to deliver the best solutions
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 md:space-x-16">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 bg-gray-50 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-shadow duration-300 min-w-[160px] flex items-center justify-center"
              >
                <img
                  src={partner.logoUrl}
                  alt={`${partner.name} logo`}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Partners;
