// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, ChevronRight, FileText } from 'lucide-react';
// import * as Icons from 'lucide-react';
// import { resources as allResources } from '../data/resources';



// type LucideIconType = React.ComponentType<{ size?: number; className?: string }>;
// type ResourceType = typeof allResources[number];

// // Optional: feature/order specific slugs here (leave empty to show all merged items)
// const FEATURED_SLUGS: string[] = [
//   // 'uccaas-migration',
//   // 'contact-center-automation',
// ];

// // 👇 Page-only extras (they’ll render here without editing data/resources)
// const EXTRA_ITEMS: ResourceType[] = [
//   {
//     slug: 'contact-center-automation',
//     title: 'Contact-center-automation',
//     excerpt:
//       'A guide to intelligent automation and AI-driven efficiency in customer experience.',
//     type: 'Solutions',
//     icon: 'Ratio',
//     heroTitle: 'Contact Center & CX Transformation',
//     intro: [
//       'Modern CX strategies depend on automation and AI to enhance customer interactions and agent performance.'
//     ],
//     sections: [
//       {
//         heading: 'The Case for Intelligent Contact Centers',
//         body: 'Automation reduces manual effort in call routing, ticketing, and analytics. Data-driven insights enable personalization and improve service quality at scale.'
//       },
//       {
//         heading: 'Key Focus Areas',
//         bullets: [
//           'Omnichannel Engagement',
//           'Automatically route and prioritize customer interactions across voice, chat, email, and social platforms.',
//           'AI & Automation',
//           'Deploy conversational AI to handle routine inquiries and accelerate issue resolution.',
//           'Performance Monitoring & Analytics',
//           'Gain real-time insights into productivity and service levels through automated dashboards.',
//           'Quality Assurance & Compliance',
//           'Automation ensures consistent adherence to quality and regulatory standards.'
//         ]
//       },
//       {
//         heading: 'The Vision Ahead',
//         body: 'AI and analytics enable proactive, personalized CX by predicting customer needs and optimizing agent performance.'
//       }
//     ],
//     // attachments: [] // optional
//   },
// ];

// const Resources: React.FC = () => {
//   const mergedList: ResourceType[] = React.useMemo(() => {
//     const map = new Map<string, ResourceType>();
//     for (const r of allResources) map.set(r.slug, r);
//     for (const x of EXTRA_ITEMS) if (!map.has(x.slug)) map.set(x.slug, x);
//     return Array.from(map.values());
//   }, []);

//   // 2) Apply optional curation/order via FEATURED_SLUGS
//   const baseList = FEATURED_SLUGS.length
//     ? FEATURED_SLUGS
//         .map(slug => mergedList.find(r => r.slug === slug))
//         .filter((r): r is NonNullable<typeof r> => Boolean(r))
//     : mergedList;

//   // 3) Prepare items for rendering
//   const resources = baseList.map((r) => {
//     const ResolvedIcon =
//       (Icons[r.icon as keyof typeof Icons] as LucideIconType) ||
//       (FileText as unknown as LucideIconType);

//     return {
//       type: r.type,
//       Icon: ResolvedIcon,
//       title: r.title,
//       excerpt: r.excerpt || '',
//       date: '', // add date if you later include it in your data
//       slug: r.slug,
//     };
//   });

//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
//             Latest Resources & Insights
//           </h2>
//           <p className="text-lg text-white/90 max-w-3xl mx-auto">
//             Stay informed with our latest insights, case studies, and best practices in enterprise
//             communications
//           </p>
//         </div>

//         {/* Resource Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {resources.map(({ type, Icon, title, excerpt, date, slug }, index) => (
//             <article
//               key={slug}
//               className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="p-8 flex flex-col h-full">
//                 {/* Icon + Type */}
//                 {/* <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
//                     <Icon size={20} className="text-white" />
//                   </div>
//                   <span className="text-sm font-semibold text-brand-sky uppercase tracking-wide">
//                     {type}
//                   </span>
//                 </div> */}

//                 {/* Title */}
//                 <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 group-hover:text-brand-sky transition-colors duration-300">
//                   {title}
//                 </h3>

//                 {/* Excerpt */}
//                 <p className="text-brand-slate mb-6 leading-relaxed flex-1">{excerpt}</p>

//                 {/* Date (optional) */}
//                 <div className="flex items-center justify-between text-sm text-brand-slate mb-4">
//                   <span>{date}</span>
//                 </div>

//                 {/* Learn More button */}
//                 <div className="mt-auto">
//                   <Link
//                     to={`/resources/${slug}`}
//                     className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white bg-accent-teal hover:bg-accent-teal/90 transition-all duration-300 transform hover:scale-105"
//                   >
//                     Learn More
//                     <ChevronRight size={18} />
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* View All Button */}
//         {/* <div className="text-center mt-12">
//           <Link
//             to="/resources"
//             className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//           >
//             View All Resources
//             <ArrowRight size={20} />
//           </Link>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Resources;

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText } from 'lucide-react';
import * as Icons from 'lucide-react';
import { getAllResources } from '../data/registry';
import type { resources as base } from '../data/resources';

type LucideIconType = React.ComponentType<{ size?: number; className?: string }>;
type ResourceType = typeof base[number];

// Optional: feature/order specific slugs here (leave empty to show all merged items)
const FEATURED_SLUGS: string[] = [
  // 'uccaas-migration',
  // 'contact-center-automation',
];

const Resources: React.FC = () => {
  // pull the merged list (../data/resources + ../data/extra)
  const mergedList: ResourceType[] = React.useMemo(() => getAllResources(), []);

  // optional curation/order via FEATURED_SLUGS
  const baseList = FEATURED_SLUGS.length
    ? FEATURED_SLUGS
        .map(slug => mergedList.find(r => r.slug === slug))
        .filter((r): r is NonNullable<typeof r> => Boolean(r))
    : mergedList;

  // prepare items for rendering
  const resources = baseList.map((r) => {
    const ResolvedIcon =
      (Icons[r.icon as keyof typeof Icons] as LucideIconType) ||
      (FileText as unknown as LucideIconType);

    return {
      type: r.type,
      Icon: ResolvedIcon,
      title: r.title,
      excerpt: r.excerpt || '',
      date: '', // populate if you later add date in data
      slug: r.slug,
    };
  });

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Latest Resources & Insights
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Stay informed with our latest insights, case studies, and best practices in enterprise
            communications
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map(({ type, Icon, title, excerpt, date, slug }, index) => (
            <article
              key={slug}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 group-hover:text-brand-sky transition-colors duration-300">
                  {title}
                </h3>

                {/* Excerpt */}
                <p className="text-brand-slate mb-6 leading-relaxed flex-1">{excerpt}</p>

                {/* Date (optional) */}
                <div className="flex items-center justify-between text-sm text-brand-slate mb-4">
                  <span>{date}</span>
                </div>

                {/* Learn More button */}
                <div className="mt-auto">
                  <Link
                    to={`/resources/${slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white bg-accent-teal hover:bg-accent-teal/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button (optional)
        <div className="text-center mt-12">
          <Link
            to="/resources"
            className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Resources
            <ArrowRight size={20} />
          </Link>
        </div>
        */}
      </div>
    </section>
  );
};

export default Resources;
