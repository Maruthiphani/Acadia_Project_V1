// import React from 'react';
// import { FileText, Calendar, Download } from 'lucide-react';

// const ResourcesPage: React.FC = () => {
//   const resources = [
//     {
//       type: 'Blog',
//       icon: FileText,
//       title: 'The Future of Enterprise Communications',
//       excerpt: 'Exploring trends and innovations shaping the next generation of business communications.',
//       date: 'March 15, 2024',
//       readTime: '5 min read',
//     },
//     {
//       type: 'Case Study',
//       icon: Calendar,
//       title: 'Global Manufacturing Company Migration',
//       excerpt: 'How we helped a Fortune 500 manufacturer migrate 10,000+ users to the cloud.',
//       date: 'March 10, 2024',
//       readTime: '8 min read',
//     },
//     {
//       type: 'Whitepaper',
//       icon: Download,
//       title: 'Contact Center Optimization Guide',
//       excerpt: 'Complete guide to modernizing and optimizing your contact center operations.',
//       date: 'March 5, 2024',
//       readTime: '12 min read',
//     },
//   ];

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-hero">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
//             Resources & 
//             <span className="block text-brand-light">Insights</span>
//           </h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             Stay informed with our latest insights, case studies, and best practices in enterprise communications and technology.
//           </p>
//         </div>
//       </section>

//       {/* Resources Grid */}
//       <section className="py-20 bg-brand-bg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
//               Latest Resources & Insights
//             </h2>
//             <p className="text-lg text-brand-slate max-w-3xl mx-auto">
//               Stay informed with our latest insights, case studies, and best practices in enterprise communications
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {resources.map((resource, index) => (
//               <article
//                 key={resource.title}
//                 className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="p-8">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
//                       <resource.icon size={20} className="text-white" />
//                     </div>
//                     <span className="text-sm font-semibold text-brand-sky uppercase tracking-wide">
//                       {resource.type}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 group-hover:text-brand-sky transition-colors duration-300">
//                     {resource.title}
//                   </h3>

//                   <p className="text-brand-slate mb-6 leading-relaxed">
//                     {resource.excerpt}
//                   </p>

//                   <div className="flex items-center justify-between text-sm text-brand-slate">
//                     <span>{resource.date}</span>
//                     <span>{resource.readTime}</span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// };

// export default ResourcesPage;

import React, { useState } from 'react';
import { Cpu, Building2, Ratio } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);

  // Example docs stored in /public/docs/
  const docs = [
    { name: 'Proposal.docx', url: '/docs/proposal.docx' },
    { name: 'Report.docx', url: '/docs/report.docx' },
    { name: 'Strategy.docx', url: '/docs/strategy.docx' },
    { name: 'Summary.docx', url: '/docs/summary.docx' },
    { name: 'Pitch.pptx', url: '/docs/pitch.pptx' },
    { name: 'Workshop.pptx', url: '/docs/workshop.pptx' },
  ];

   const resources = [
      {
        type: 'Technology',
        icon: Cpu,
        title: 'The Future of Communication Technologies',
        excerpt: 'Discover how next-gen innovations like AI, 5G, and cloud are reshaping global communication systems.',
        date: 'March 15, 2025',
        readTime: '5 min read'
      },
      {
        type: 'Enterprise',
        icon: Building2,
        title: 'Empowering Enterprises with Smart Infrastructure',
        excerpt: 'Learn how modern enterprises are leveraging automation, analytics, and hybrid platforms to scale securely and efficiently.',
        date: 'March 10, 2025',
        readTime: '8 min read'
      },
      {
        type: 'Solutions',
        icon: Ratio,
        title: 'Transforming Challenges into Scalable Solutions',
        excerpt: 'Explore real-world strategies that turn complex communication challenges into streamlined, future-ready solutions.',
        date: 'March 5, 2025',
        readTime: '12 min read'
      }
    ];

  const toggleDoc = (docUrl: string) => {
    setSelectedDocs((prev) =>
      prev.includes(docUrl)
        ? prev.filter((d) => d !== docUrl)
        : [...prev, docUrl]
    );
  };

  const handleDownload = () => {
    selectedDocs.forEach((url) => {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop() || 'document';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
    setIsPopupOpen(false);
    setSelectedDocs([]);
  };

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
            {resources.map((resource) => (
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

          {/* Download Button */}
          {/* <div className="text-center mt-12">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center gap-2 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
             
              Download Resources
            </button>
          </div> */}
        </div>
      </section>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">
              Select Files to Download
            </h3>

            <div className="space-y-4 max-h-64 overflow-y-auto">
              {docs.map((doc) => (
                <label
                  key={doc.url}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedDocs.includes(doc.url)}
                    onChange={() => toggleDoc(doc.url)}
                    className="w-5 h-5 rounded-full text-brand-sky border-gray-300 focus:ring-brand-sky"
                  />
                  <span className="text-gray-700">{doc.name}</span>
                </label>
              ))}
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDownload}
                disabled={selectedDocs.length === 0}
                className={`px-6 py-2 rounded-full font-semibold text-white ${
                  selectedDocs.length === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-brand hover:shadow-lg'
                }`}
              >
                Download Selected
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;
 