import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import TabsOrAccordion from './TabsOrAccordion';
import { leadership } from '../data/leadership';
import Badge from '../components/Badge';

const AboutPreview: React.FC = () => {
  const leadershipTabs = leadership.map(member => ({
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
    )
  }));
  return (
    <>
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
                Our Story
              </h2>
              <p className="text-lg text-brand-slate mb-6 leading-relaxed">
                Founded in 2025, Acadia Consultants emerged from a simple observation: enterprise communications were becoming increasingly complex, yet many organizations lacked the expertise to navigate this complexity effectively.
              </p>
              <p className="text-lg text-brand-slate mb-6 leading-relaxed">
                What started as a small consultancy focused on unified communications has evolved into a comprehensive solutions provider, helping organizations across industries transform their communication infrastructure and processes.
              </p>
              <p className="text-lg text-brand-slate leading-relaxed">
                Today, we serve Fortune 500 companies, government agencies, and growing businesses, always maintaining our core commitment to delivering solutions that truly work for the people who use them.
              </p>



            </div>
            <div className="bg-gradient-brand rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-brand-light">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-brand-light">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-brand-light">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-brand-light">Expert Consultants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet the experts leading our mission to transform enterprise communications"
            accentColor="amber"
          />

          <div className="block md:hidden">
            <TabsOrAccordion
              items={leadershipTabs}
              defaultActive="ceo"
              variant="accordion"
            />
          </div>

          <div className="hidden md:block">
            <TabsOrAccordion
              items={leadershipTabs}
              defaultActive="ceo"
              variant="tabs"
            />
          </div>
        </div>

        {/* Centered Button at Bottom */}
        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Learn about us
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>


    </>
  );
};

export default AboutPreview;