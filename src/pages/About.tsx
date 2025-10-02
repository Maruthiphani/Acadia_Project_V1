// import React from 'react'; 
// import { Users, Award, Globe, Heart } from 'lucide-react';

// const About: React.FC = () => {
//   const values = [
//     {
//       icon: Users,
//       title: 'Client-Centric',
//       description: 'Every solution is designed with our clients\' unique needs and goals at the center.'
//     },
//     {
//       icon: Award,
//       title: 'Excellence',
//       description: 'We maintain the highest standards of quality in everything we deliver.'
//     },
//     {
//       icon: Globe,
//       title: 'Innovation',
//       description: 'Staying ahead of technology trends to provide cutting-edge solutions.'
//     },
//     {
//       icon: Heart,
//       title: 'Integrity',
//       description: 'Building trust through transparent communication and ethical practices.'
//     }
//   ];

//   const team = [
//     {
//       name: 'Sarah Johnson',
//       role: 'CEO & Founder',
//       image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
//       bio: '15+ years in enterprise communications'
//     },
//     {
//       name: 'Michael Chen',
//       role: 'CTO',
//       image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
//       bio: 'Expert in cloud architecture and AI'
//     },
//     {
//       name: 'Emily Rodriguez',
//       role: 'VP of Solutions',
//       image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
//       bio: 'Specialist in UC and contact centers'
//     }
//   ];

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-hero">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
//             The Enterprise Communications
//             <span className="block text-brand-light">Center of Excellence</span>
//           </h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             We deliver user-experience-driven testing and solutions for leaders in enterprise communications—equipping teams with the context to innovate and solve the root causes of their biggest challenges.
//           </p>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-20 bg-brand-bg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
//                 Our Story
//               </h2>
//               <p className="text-lg text-brand-slate mb-6 leading-relaxed">
//                 Founded in 2009, Acadia Consultants emerged from a simple observation: enterprise communications were becoming increasingly complex, yet many organizations lacked the expertise to navigate this complexity effectively.
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

//       {/* Values Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
//               Our Values
//             </h2>
//             <p className="text-lg text-brand-slate max-w-3xl mx-auto">
//               The principles that guide everything we do and every relationship we build
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <div
//                 key={value.title}
//                 className="text-center p-6 rounded-2xl hover:bg-brand-bg transition-colors duration-300"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
//                   <value.icon size={32} className="text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold font-heading text-brand-navy mb-4">
//                   {value.title}
//                 </h3>
//                 <p className="text-brand-slate leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       {/* <section className="py-20 bg-brand-bg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
//               Leadership Team
//             </h2>
//             <p className="text-lg text-brand-slate max-w-3xl mx-auto">
//               Meet the experts leading our mission to transform enterprise communications
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {team.map((member, index) => (
//               <div
//                 key={member.name}
//                 className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
//                 />
//                 <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">
//                   {member.name}
//                 </h3>
//                 <p className="text-brand-sky font-semibold mb-4">
//                   {member.role}
//                 </p>
//                 <p className="text-brand-slate">
//                   {member.bio}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import TabsOrAccordion from '../components/TabsOrAccordion';
import { leadership } from '../data/leadership';
import Badge from '../components/Badge';

const About: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: 'Client-Centric',
      description: "Every solution is designed with our clients' unique needs and goals at the center.",
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we deliver.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Staying ahead of technology trends to provide cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparent communication and ethical practices.',
    },
  ];

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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-black mb-6">
            The Enterprise Communications
            <span className="block text-brand-light">Center of Excellence</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We deliver user-experience-driven testing and solutions for leaders in enterprise communications—equipping teams with the context to innovate and solve the root causes of their biggest challenges.
          </p>
        </div>
      </section>

      {/* About Acadia */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
            About Acadia Consultants: Your Voice & UCC Transformation Partner
          </h2>
          <p className="text-lg text-brand-slate leading-relaxed max-w-4xl mx-auto">
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

      {/* Values Section (unchanged) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              Our Values
            </h2>
            <p className="text-lg text-brand-slate max-w-3xl mx-auto">
              The principles that guide everything we do and every relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl hover:bg-brand-bg transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-brand-slate leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      {/* <section className="py-20 bg-brand-bg">
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

        
      </section> */}
    </div>
  );
};

export default About;
