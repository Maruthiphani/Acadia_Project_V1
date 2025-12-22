
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft, ArrowRight, CheckCircle, Paperclip } from 'lucide-react';
// import * as Icons from 'lucide-react';
// import { resources } from '../../data/resources';

// type LucideIconType = React.ComponentType<{ size?: number; className?: string }>;

// const ResourceDetail: React.FC = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const resource = resources.find((r) => r.slug === slug);

//   if (!resource) {
//     return (
//       <div className="pt-20 min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
//           <Link to="/resources" className="text-accent-teal hover:text-accent-teal/80">
//             Back to Resources
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // ---------- Clean Document-style layout for UCCaaS Migration ----------
//   if (slug === 'uccaas-migration') {
//     return (
//       <div className="pt-20 bg-white">
//         {/* Breadcrumb */}
//         <section className="py-6 border-b border-gray-100">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <nav className="flex items-center gap-2 text-sm">
//               <Link to="/resources" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
//                 <ArrowLeft size={16} />
//                 Resources
//               </Link>
//               <span className="text-gray-400">/</span>
//               <span className="text-gray-900 font-medium">{resource.title}</span>
//             </nav>
//           </div>
//         </section>

//         {/* Document Body */}
//         <section className="py-10">
//           <div className="max-w-3xl mx-auto px-5 sm:px-6">
//             {/* Title (no vertical bar now) */}
//             <h1 className="text-[22px] font-extrabold text-gray-900 tracking-tight text-center mb-8">
//               {resource.heroTitle}
//             </h1>

//             {/* Intro */}
//             {resource.intro?.map((para, i) => (
//               <p key={i} className="font-serif text-[17px] leading-[1.95] text-gray-800 mb-6">
//                 {para}
//               </p>
//             ))}

//             {/* Sections */}
//             {resource.sections?.map((sec, idx) => (
//               <div key={idx} className="mb-6">
//                 <h2 className="text-[18px] font-bold text-gray-900 mb-2">{sec.heading}</h2>

//                 {sec.body && (
//                   <p className="font-serif text-[17px] leading-[1.95] text-gray-800">
//                     {sec.body}
//                   </p>
//                 )}

//                 {sec.bullets?.length ? (
//                   <ul className="list-disc pl-6 font-serif text-[17px] leading-[1.9] text-gray-800 mt-3 space-y-3">
//                     {sec.bullets.map((b, bi) => {
//                       const isSubhead =
//                         b === 'Integration & Interoperability' ||
//                         b === 'Testing, Validation & Compliance';
//                       return (
//                         <li key={bi}>
//                           <span className={isSubhead ? 'font-bold text-gray-900' : ''}>{b}</span>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 ) : null}
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     );
//   }

//   // ---------- Default layout for all other resources ----------
//   const Icon = Icons[resource.icon as keyof typeof Icons] as LucideIconType;

//   return (
//     <div className="pt-20">
//       {/* Breadcrumb */}
//       <section className="py-8 bg-brand-bg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <nav className="flex items-center gap-2 text-sm">
//             <Link to="/resources" className="text-gray-200 hover:text-white flex items-center gap-1">
//               <ArrowLeft size={16} />
//               Resources
//             </Link>
//             <span className="text-gray-400">/</span>
//             <span className="text-white font-medium">{resource.title}</span>
//           </nav>
//         </div>
//       </section>

//       {/* Hero */}
//       <section className="py-16 bg-white">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg">
//             <Icon size={28} className="text-white" />
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
//             {resource.heroTitle}
//           </h1>
//           {resource.excerpt && (
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">{resource.excerpt}</p>
//           )}
//         </div>
//       </section>

//       {/* Sections */}
//       {resource.sections?.length ? (
//         <section className="py-14 bg-brand-bg">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
//             {resource.sections.map((sec, idx) => (
//               <article
//                 key={idx}
//                 className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
//               >
//                 <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
//                   {sec.heading}
//                 </h2>
//                 {sec.body && <p className="text-gray-700 leading-relaxed mb-4">{sec.body}</p>}
//                 {sec.bullets?.length ? (
//                   <ul className="space-y-3">
//                     {sec.bullets.map((b, bi) => (
//                       <li key={bi} className="flex items-start gap-3">
//                         <CheckCircle size={18} className="mt-1 text-accent-teal flex-shrink-0" />
//                         <span className="text-gray-700">{b}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : null}
//               </article>
//             ))}
//           </div>
//         </section>
//       ) : null}

//       {/* CTA */}
//       <section className="py-20 bg-brand-bg">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold font-heading text-white mb-4">
//             Want to go deeper?
//           </h2>
//           <p className="text-white/90 mb-8">
//             Talk to our experts about applying these ideas to your organization.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-accent-teal hover:bg-accent-teal/90 transition"
//             >
//               Contact Us
//               <ArrowRight size={20} />
//             </Link>
//             <Link
//               to="/resources"
//               className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold border-2 border-white/60 text-white hover:bg-white hover:text-brand-navy transition"
//             >
//               Back to Resources
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ResourceDetail;

// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
// import * as Icons from 'lucide-react';
// import { resources } from '../../data/resources';

// type LucideIconType = React.ComponentType<{ size?: number; className?: string }>;

// /** Normalize slugs/titles: lowercase, trim, replace non-alphanum with single '-' */
// const normalize = (s: string) =>
//   (s || '')
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/^-+|-+$/g, '');

// /** Any slug in this set (after normalization) will use the "document" layout */
// const DOC_STYLE_SLUGS = new Set(
//   [
//     // Core
//     'uccaas-migration',

//     // Explore – AI powered conversations (various forms)
//     'explore-resources-on-ai-powered-conversations-and-automation',
//     'explore-ai-powered-conversations-and-automation',
//     'ai-powered-conversations-and-automation',

//     // Transforming Voice
//     'transforming-voice',
//     'transform-voice',

//     // Unified communication
//     'unified-communication',
//     'unified-communication-simplify-integrate-engage',

//     // Automate collaboration
//     'automate-collaboration',
//     'automate-your-collaboration-experience',

//     // Contact center / CX
//     'transform-every-interaction-contact-center-cx-resources',
//     'transform-cx-resources',
//     'contact-center-automation',

//     // Connect / Extend (if you later want it doc-style, keep these)
//     'connect-extend-automate'
//   ].map(normalize)
// );

// const SUBHEAD_CANDIDATES = new Set(
//   [
//     // UCCaaS / SBC
//     'integration & interoperability',
//     'testing, validation & compliance',

//     // AI conversations
//     'intelligent chatbots & virtual agents',
//     'workflow automation',
//     'data-driven insights',
//     'personalization & predictive engagement',

//     // Unified communication
//     'seamless integration',
//     'user experience & adoption',
//     'operational efficiency',
//     'security & compliance',

//     // Automate collaboration
//     'meeting & scheduling automation',
//     'workflow integration',
//     'notifications & alerts',
//     'analytics & insights',

//     // Contact center
//     'omnichannel engagement',
//     'ai & automation',
//     'performance monitoring & analytics',
//     'quality assurance & compliance'
//   ].map(s => s.toLowerCase())
// );

// const ResourceDetail: React.FC = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const resource = resources.find((r) => r.slug === slug);

//   if (!resource) {
//     return (
//       <div className="pt-20 min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
//           <Link to="/resources" className="text-accent-teal hover:text-accent-teal/80">
//             Back to Resources
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const shouldUseDocLayout = DOC_STYLE_SLUGS.has(normalize(slug || ''));

//   // ---------- Document-style layout (clean, print-like) ----------
//   if (shouldUseDocLayout) {
//     return (
//       <div className="pt-20 bg-white">
//         {/* Breadcrumb */}
//         <section className="py-6 border-b border-gray-100">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <nav className="flex items-center gap-2 text-sm">
//               <Link to="/resources" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
//                 <ArrowLeft size={16} />
//                 Resources
//               </Link>
//               <span className="text-gray-400">/</span>
//               <span className="text-gray-900 font-medium">{resource.title}</span>
//             </nav>
//           </div>
//         </section>

//         {/* Document Body */}
//         <section className="py-10">
//           <div className="max-w-3xl mx-auto px-5 sm:px-6">
//             {/* Title */}
//             <h1 className="text-[22px] font-extrabold text-gray-900 tracking-tight text-center mb-8">
//               {resource.heroTitle}
//             </h1>

//             {/* Intro paragraphs */}
//             {resource.intro?.map((para, i) => (
//               <p key={i} className="font-serif text-[17px] leading-[1.95] text-gray-800 mb-6">
//                 {para}
//               </p>
//             ))}

//             {/* Sections */}
//             {resource.sections?.map((sec, idx) => (
//               <div key={idx} className="mb-6">
//                 <h2 className="text-[18px] font-bold text-gray-900 mb-2">{sec.heading}</h2>

//                 {sec.body && (
//                   <p className="font-serif text-[17px] leading-[1.95] text-gray-800">
//                     {sec.body}
//                   </p>
//                 )}

//                 {sec.bullets?.length ? (
//                   <ul className="list-disc pl-6 font-serif text-[17px] leading-[1.9] text-gray-800 mt-3 space-y-3">
//                     {sec.bullets.map((b, bi) => {
//                       const isSubhead = SUBHEAD_CANDIDATES.has(b.toLowerCase().trim());
//                       return (
//                         <li key={bi}>
//                           <span className={isSubhead ? 'font-bold text-gray-900' : ''}>{b}</span>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 ) : null}
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     );
//   }

//   // ---------- Default card/grid layout for everything else ----------
//   const Icon = Icons[resource.icon as keyof typeof Icons] as LucideIconType;

//   return (
//     <div className="pt-20">
//       {/* Breadcrumb */}
//       <section className="py-8 bg-brand-bg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <nav className="flex items-center gap-2 text-sm">
//             <Link to="/resources" className="text-gray-200 hover:text-white flex items-center gap-1">
//               <ArrowLeft size={16} />
//               Resources
//             </Link>
//             <span className="text-gray-400">/</span>
//             <span className="text-white font-medium">{resource.title}</span>
//           </nav>
//         </div>
//       </section>

//       {/* Hero */}
//       <section className="py-16 bg-white">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg">
//             <Icon size={28} className="text-white" />
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
//             {resource.heroTitle}
//           </h1>
//           {resource.excerpt && (
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">{resource.excerpt}</p>
//           )}
//         </div>
//       </section>

//       {/* Sections */}
//       {resource.sections?.length ? (
//         <section className="py-14 bg-brand-bg">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
//             {resource.sections.map((sec, idx) => (
//               <article
//                 key={idx}
//                 className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
//               >
//                 <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
//                   {sec.heading}
//                 </h2>
//                 {sec.body && <p className="text-gray-700 leading-relaxed mb-4">{sec.body}</p>}
//                 {sec.bullets?.length ? (
//                   <ul className="space-y-3">
//                     {sec.bullets.map((b, bi) => (
//                       <li key={bi} className="flex items-start gap-3">
//                         <CheckCircle size={18} className="mt-1 text-accent-teal flex-shrink-0" />
//                         <span className="text-gray-700">{b}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : null}
//               </article>
//             ))}
//           </div>
//         </section>
//       ) : null}

//       {/* CTA */}
//       <section className="py-20 bg-brand-bg">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold font-heading text-white mb-4">
//             Want to go deeper?
//           </h2>
//           <p className="text-white/90 mb-8">
//             Talk to our experts about applying these ideas to your organization.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-accent-teal hover:bg-accent-teal/90 transition"
//             >
//               Contact Us
//               <ArrowRight size={20} />
//             </Link>
//             <Link
//               to="/resources"
//               className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold border-2 border-white/60 text-white hover:bg-white hover:text-brand-navy transition"
//             >
//               Back to Resources
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ResourceDetail;


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, FileText } from 'lucide-react';
import * as Icons from 'lucide-react';
import { getResourceBySlug } from '../../data/registry';

type LucideIconType = React.ComponentType<{ size?: number; className?: string }>;

/** Normalize slugs/titles: lowercase, trim, replace non-alphanum with single '-' */
const normalize = (s: string) =>
  (s || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Any slug in this set (after normalization) will use the "document" layout */
const DOC_STYLE_SLUGS = new Set(
  [
    // Core
    'uccaas-migration',

    // Explore – AI powered conversations (various forms)
    'explore-resources-on-ai-powered-conversations-and-automation',
    'explore-ai-powered-conversations-and-automation',
    'ai-powered-conversations-and-automation',

    // Transforming Voice
    'transforming-voice',
    'transform-voice',

    // Unified communication
    'unified-communication',
    'unified-communication-simplify-integrate-engage',

    // Automate collaboration
    'automate-collaboration',
    'automate-your-collaboration-experience',

    // Contact center / CX
    'transform-every-interaction-contact-center-cx-resources',
    'transform-cx-resources',
    'contact-center-automation',

    // Connect / Extend (if you later want it doc-style, keep these)
    'connect-extend-automate'
  ].map(normalize)
);

const SUBHEAD_CANDIDATES = new Set(
  [
    // UCCaaS / SBC
    'integration & interoperability',
    'testing, validation & compliance',

    // AI conversations
    'intelligent chatbots & virtual agents',
    'workflow automation',
    'data-driven insights',
    'personalization & predictive engagement',

    // Unified communication
    'seamless integration',
    'user experience & adoption',
    'operational efficiency',
    'security & compliance',

    // Automate collaboration
    'meeting & scheduling automation',
    'workflow integration',
    'notifications & alerts',
    'analytics & insights',

    // Contact center
    'omnichannel engagement',
    'ai & automation',
    'performance monitoring & analytics',
    'quality assurance & compliance'
  ].map(s => s.toLowerCase())
);

const ResourceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = slug ? getResourceBySlug(slug) : undefined;

  if (!resource) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
          <Link to="/resources" className="text-accent-teal hover:text-accent-teal/80">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  const shouldUseDocLayout = DOC_STYLE_SLUGS.has(normalize(slug || ''));

  // ---------- Document-style layout (clean, print-like) ----------
  if (shouldUseDocLayout) {
    return (
      <div className="pt-20 bg-white">
        {/* Breadcrumb */}
        <section className="py-6 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/resources" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                <ArrowLeft size={16} />
                Resources
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{resource.title}</span>
            </nav>
          </div>
        </section>

        {/* Document Body */}
        <section className="py-10">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            {/* Title */}
            <h1 className="text-[22px] font-extrabold text-gray-900 tracking-tight text-center mb-8">
              {resource.heroTitle}
            </h1>

            {/* Intro paragraphs */}
            {resource.intro?.map((para, i) => (
              <p key={i} className="font-serif text-[17px] leading-[1.95] text-gray-800 mb-6">
                {para}
              </p>
            ))}

            {/* Sections */}
            {resource.sections?.map((sec, idx) => (
              <div key={idx} className="mb-6">
                <h2 className="text-[18px] font-bold text-gray-900 mb-2">{sec.heading}</h2>

                {sec.body && (
                  <p className="font-serif text-[17px] leading-[1.95] text-gray-800">
                    {sec.body}
                  </p>
                )}

                {sec.bullets?.length ? (
                  <ul className="list-disc pl-6 font-serif text-[17px] leading-[1.9] text-gray-800 mt-3 space-y-3">
                    {sec.bullets.map((b, bi) => {
                      const isSubhead = SUBHEAD_CANDIDATES.has(b.toLowerCase().trim());
                      return (
                        <li key={bi}>
                          <span className={isSubhead ? 'font text-gray-900' : ''}>{b}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // ---------- Default card/grid layout for everything else ----------
  const Icon =
    ((Icons[resource.icon as keyof typeof Icons] as LucideIconType) || (FileText as unknown as LucideIconType));

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="py-8 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/resources" className="text-gray-200 hover:text-white flex items-center gap-1">
              <ArrowLeft size={16} />
              Resources
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-white font-medium">{resource.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg">
            <Icon size={28} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
            {resource.heroTitle}
          </h1>
          {resource.excerpt && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{resource.excerpt}</p>
          )}
        </div>
      </section>

      {/* Sections */}
      {resource.sections?.length ? (
        // <section className="py-14 bg-brand-bg">
        //   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        //     {resource.sections.map((sec, idx) => (
        //       <article
        //         key={idx}
        //         className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        //       >
        //         <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
        //           {sec.heading}
        //         </h2>
        //         {sec.body && <p className="text-gray-700 leading-relaxed mb-4">{sec.body}</p>}
        //         {sec.bullets?.length ? (
        //           <ul className="space-y-3">
        //             {sec.bullets.map((b, bi) => (
        //               <li key={bi} className="flex items-start gap-3">
        //                 <CheckCircle size={18} className="mt-1 text-accent-teal flex-shrink-0" />
        //                 <span className="text-gray-700">{b}</span>
        //               </li>
        //             ))}
        //           </ul>
        //         ) : null}
        //       </article>
        //     ))}
        //   </div>
        // </section>
        <section className="py-14 bg-brand-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {resource.sections.map((sec, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                  {sec.heading}
                </h2>

                {sec.body && (
                  <p className="text-gray-700 leading-relaxed mb-4">{sec.body}</p>
                )}

                {sec.bullets?.length ? (
                  <ul className="space-y-3">
                    {sec.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <CheckCircle
                          size={18}
                          className="mt-1 text-accent-teal flex-shrink-0"
                        />
                        {/* Force normal font weight */}
                        <span className="text-gray-700 font-normal">{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>


      ) : null}

      {/* CTA */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">
            Want to go deeper?
          </h2>
          <p className="text-white/90 mb-8">
            Talk to our experts about applying these ideas to your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-accent-teal hover:bg-accent-teal/90 transition"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold border-2 border-white/60 text-white hover:bg-white hover:text-brand-navy transition"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceDetail;


