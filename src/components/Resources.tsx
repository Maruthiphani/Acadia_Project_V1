// import React from 'react'; 
// // import { Calendar, FileText, Download } from 'lucide-react';
// import { Cpu, Building2, Ratio } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

// const Resources: React.FC = () => {
//   const resources = [
//     {
//       type: 'Technology',
//       icon: Cpu,
//       title: 'The Future of Communication Technologies',
//       excerpt: 'Discover how next-gen innovations like AI, 5G, and cloud are reshaping global communication systems.',
//       date: 'March 15, 2025',
//       readTime: ''
//     },
//     {
//       type: 'Enterprise',
//       icon: Building2,
//       title: 'Empowering Enterprises with Smart Infrastructure',
//       excerpt: 'Learn how modern enterprises are leveraging automation, analytics, and hybrid platforms to scale securely and efficiently.',
//       date: 'March 10, 2025',
//       readTime: ''
//     },
//     {
//       type: 'Solutions',
//       icon: Ratio,
//       title: 'Transforming Challenges into Scalable Solutions',
//       excerpt: 'Explore real-world strategies that turn complex communication challenges into streamlined, future-ready solutions.',
//       date: 'March 5, 2025',
//       readTime: ''
//     }
//   ];

//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
//             Latest Resources & Insights
//           </h2>
//           <p className="text-lg text-white/90 max-w-3xl mx-auto">
//             Stay informed with our latest insights, case studies, and best practices in enterprise communications
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {resources.map((resource, index) => (
//             <article
//               key={resource.title}
//               className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="p-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
//                     <resource.icon size={20} className="text-white" />
//                   </div>
//                   <span className="text-sm font-semibold text-brand-sky uppercase tracking-wide">
//                     {resource.type}
//                   </span>
//                 </div>

//                 <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 group-hover:text-brand-sky transition-colors duration-300">
//                   {resource.title}
//                 </h3>

//                 <p className="text-brand-slate mb-6 leading-relaxed">
//                   {resource.excerpt}
//                 </p>

//                 <div className="flex items-center justify-between text-sm text-brand-slate">
//                   <span>{resource.date}</span>
//                   <span>{resource.readTime}</span>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link
//             to="/resources"
//             className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//           >
//             View All Resources 
//             <ArrowRight size={20} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resources;

//two columns code with learn more button 

// import React from 'react'; 
// import { Cpu, Building2,Ratio } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, ChevronRight } from 'lucide-react';

// const Resources: React.FC = () => {
//   const resources = [
//     {
//       type: 'Technology',
//       icon: Cpu,
//       title: 'The Future of Communication Technologies',
//       excerpt: 'Discover how next-gen innovations like AI, 5G, and cloud are reshaping global communication systems.',
//       date: 'March 15, 2025',
//       slug: 'future-of-communication',
//     },
//     {
//       type: 'Enterprise',
//       icon: Building2,
//       title: 'Empowering Enterprises with Smart Infrastructure',
//       excerpt: 'Learn how modern enterprises are leveraging automation, analytics, and hybrid platforms to scale securely and efficiently.',
//       date: 'March 10, 2025',
//       slug: 'empowering-enterprises',
//     },
//     {
//             type: 'Solutions',
//             icon: Ratio,
//             title: 'Transforming Challenges into Scalable Solutions',
//             excerpt: 'Explore real-world strategies that turn complex communication challenges into streamlined, future-ready solutions.',
//             date: 'March 5, 2025',
//             readTime: ''
//           }
//   ];

//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
//             Latest Resources & Insights
//           </h2>
//           <p className="text-lg text-white/90 max-w-3xl mx-auto">
//             Stay informed with our latest insights, case studies, and best practices in enterprise communications
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {resources.map((resource, index) => (
//             <article
//               key={resource.title}
//               className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="p-8 flex flex-col h-full">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
//                     <resource.icon size={20} className="text-white" />
//                   </div>
//                   <span className="text-sm font-semibold text-brand-sky uppercase tracking-wide">
//                     {resource.type}
//                   </span>
//                 </div>

//                 <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 group-hover:text-brand-sky transition-colors duration-300">
//                   {resource.title}
//                 </h3>

//                 <p className="text-brand-slate mb-6 leading-relaxed flex-1">
//                   {resource.excerpt}
//                 </p>

//                 <div className="flex items-center justify-between text-sm text-brand-slate mb-4">
//                   <span>{resource.date}</span>
//                 </div>

//                 {/* Learn More button */}
//                 <div className="mt-auto">
//                   <Link
//                     to={`/resources/${resource.slug}`}
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

//         <div className="text-center mt-12">
//           <Link
//             to="/resources"
//             className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//           >
//             View All Resources 
//             <ArrowRight size={20} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resources;

import React from 'react'; 
import { Cpu, Building2, Ratio } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Resources: React.FC = () => {
  const resources = [
    {
      type: 'Technology',
      icon: Cpu,
      title: 'The Future of Communication Technologies',
      excerpt: 'Discover how next-gen innovations like AI, 5G, and cloud are reshaping global communication systems.',
      date: '',
      slug: 'future-of-communication',
    },
    {
      type: 'Enterprise',
      icon: Building2,
      title: 'Empowering Enterprises with Smart Infrastructure',
      excerpt: 'Learn how modern enterprises are leveraging automation, analytics, and hybrid platforms to scale securely and efficiently.',
      date: '',
      slug: 'empowering-enterprises',
    },
    {
      type: 'Solutions',
      icon: Ratio,
      title: 'Transforming Challenges into Scalable Solutions',
      excerpt: 'Explore real-world strategies that turn complex communication challenges into streamlined, future-ready solutions.',
      date: '',
      slug: 'scalable-solutions',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Latest Resources & Insights
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Stay informed with our latest insights, case studies, and best practices in enterprise communications
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <article
              key={resource.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 flex flex-col h-full">
                {/* Icon + Type */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
                    <resource.icon size={20} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-brand-sky uppercase tracking-wide">
                    {resource.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 group-hover:text-brand-sky transition-colors duration-300">
                  {resource.title}
                </h3>

                {/* Excerpt */}
                <p className="text-brand-slate mb-6 leading-relaxed flex-1">
                  {resource.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center justify-between text-sm text-brand-slate mb-4">
                  <span>{resource.date}</span>
                </div>

                {/* Learn More button */}
                <div className="mt-auto">
                  <Link
                    to={`/resources/${resource.slug}`}
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/resources"
            className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Resources 
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resources;

