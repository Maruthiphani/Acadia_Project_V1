// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import SectionHeader from './SectionHeader';
// import TabsOrAccordion from './TabsOrAccordion';
// import { leadership } from '../data/leadership';
// import Badge from '../components/Badge'; 

// const AboutPreview: React.FC = () => {
//   const leadershipTabs = leadership.map(member => ({
//     id: member.id,
//     label: member.name,
//     content: (
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-1">
//           <img
//             src={member.image}
//             alt={member.name}
//             className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
//           />
//         </div>
//         <div className="lg:col-span-2">
//           <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">
//             {member.name}
//           </h3>
//           <Badge variant="violet" className="mb-6">
//             {member.role}
//           </Badge>
//           <div className="prose prose-lg text-gray-600 leading-relaxed">
//             {member.bio.split('\n').map((paragraph, index) => (
//               <p key={index} className="mb-4">
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }));
//   return (
//     <>
//       <section className="py-20 bg-brand-bg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
//                 Our Story
//               </h2>
//               <p className="text-lg text-brand-slate mb-6 leading-relaxed">
//                 Founded in 2025, Acadia Consultants emerged from a simple observation: enterprise communications were becoming increasingly complex, yet many organizations lacked the expertise to navigate this complexity effectively.
//               </p>
//               <p className="text-lg text-brand-slate mb-6 leading-relaxed">
//                 What started as a small consultancy focused on unified communications has evolved into a comprehensive solutions provider, helping organizations across industries transform their communication infrastructure and processes.
//               </p>
//               <p className="text-lg text-brand-slate leading-relaxed">
//                 Today, we serve Fortune 500 companies, government agencies, and growing businesses, always maintaining our core commitment to delivering solutions that truly work for the people who use them.
//               </p>



//             </div>
//             <div className="bg-gradient-brand rounded-3xl p-8 text-white">
//               <div className="grid grid-cols-2 gap-8 text-center">
//                 <div>
//                   <div className="text-4xl font-bold mb-2">500+</div>
//                   <div className="text-brand-light">Projects Delivered</div>
//                 </div>
//                 <div>
//                   <div className="text-4xl font-bold mb-2">15+</div>
//                   <div className="text-brand-light">Years of Excellence</div>
//                 </div>
//                 <div>
//                   <div className="text-4xl font-bold mb-2">98%</div>
//                   <div className="text-brand-light">Client Satisfaction</div>
//                 </div>
//                 <div>
//                   <div className="text-4xl font-bold mb-2">50+</div>
//                   <div className="text-brand-light">Expert Consultants</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <SectionHeader
//             title="Leadership Team"
//             subtitle="Meet the experts leading our mission to transform enterprise communications"
//             accentColor="amber"
//           />

//           <div className="block md:hidden">
//             <TabsOrAccordion
//               items={leadershipTabs}
//               defaultActive="ceo"
//               variant="accordion"
//             />
//           </div>

//           <div className="hidden md:block">
//             <TabsOrAccordion
//               items={leadershipTabs}
//               defaultActive="ceo"
//               variant="tabs"
//             />
//           </div>
//         </div>

//         {/* Centered Button at Bottom */}
//         <div className="mt-12 text-center">
//           <Link
//             to="/about"
//             className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//           >
//             Learn more about us
//             <ArrowRight size={20} />
//           </Link>
//         </div>
//       </section>


//     </>
//   );
// };

// export default AboutPreview;


import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import TabsOrAccordion from './TabsOrAccordion';
import { leadership } from '../data/leadership';
import Badge from '../components/Badge';

const AboutPreview: React.FC = () => {
  const leadershipTabs = leadership.map((member) => ({
    id: member.id,
    label: member.name,
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <img
            src={member.image}
            alt={member.name}
            className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
          />
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">
            {member.name}
          </h3>
          <Badge variant="violet" className="mb-6">
            {member.role}
          </Badge>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            {member.bio.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <>
      {/* About Acadia */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            About Acadia Consultants: Your Voice & UCC Transformation Partner
          </h2>
          <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">
            In today’s fast-moving business environment, communication demands more than just voice—it requires seamless, secure, and intelligent collaboration experiences across every channel. 
            At Acadia Consultants, we specialize in Voice, VoIP, and Unified Communications & Collaboration (UCC) transformation, helping enterprises modernize, optimize, and future-proof their communication ecosystems.
          </p>
        </div>
      </section> 

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Who We Are</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a consulting and managed services partner dedicated to simplifying the complex world of enterprise communications. 
              Our comprehensive expertise spans legacy voice systems, VoIP migration, cloud telephony, contact centers, collaboration platforms, and AI-driven automation. 
              This makes us the one-stop shop for organizations seeking end-to-end transformation.
            </p>
          </div>
          <div>
            <img
              src="/About.jpeg"
              alt="Who We Are"
              className="rounded-2xl shadow-lg object-cover w-full h-72"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Why Choose Us</h3>
            <ul className="space-y-4">
              {[
                'Single Partner, Complete Journey: We cover the entire lifecycle, from initial assessment through deployment to ongoing support.',
                'Vendor-Neutral Expertise: We work across all major platforms (including Microsoft Teams, Zoom, Cisco, and RingCentral) to design the best-fit solution integrated precisely to your business needs.',
                'Business-First Approach: We prioritize aligning technology choices directly with your strategic organizational goals.',
                'Future-Ready Solutions: AI, cloud, and automation capabilities are built into every transformation we deliver.',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-accent-violet mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg text-gray-600 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Why Choose Us"
              className="rounded-2xl shadow-lg object-cover w-full h-72"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to empower businesses with reliable, scalable, and intelligent communication solutions that achieve measurable results: reduce cost, improve customer experience, and accelerate growth.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
              alt="Our Mission"
              className="rounded-2xl shadow-lg object-cover w-full h-72"
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet the experts leading our mission to transform enterprise communications"
            accentColor="amber"
          />

          <div className="block md:hidden">
            <TabsOrAccordion items={leadershipTabs} defaultActive="ceo" variant="accordion" />
          </div>

          <div className="hidden md:block">
            <TabsOrAccordion items={leadershipTabs} defaultActive="ceo" variant="tabs" />
          </div>
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Learn more about us
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPreview;
