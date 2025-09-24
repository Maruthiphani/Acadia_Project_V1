import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Partners from '../components/Partners';
import Resources from '../components/Resources';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import SolutionCard from '../components/SolutionCard';
import BackgroundWrapper from '../components/BackgroundWrapper';
import { services } from '../data/services';
import { solutions } from '../data/solutions';

const Home: React.FC = () => {
  // const leadershipTabs = leadership.map(member => ({
  //   id: member.id,
  //   label: member.name,
  //   content: (
  //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  //       <div className="lg:col-span-1">
  //         <img
  //           src={member.image}
  //           alt={member.name}
  //           className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
  //         />
  //       </div>
  //       <div className="lg:col-span-2">
  //         <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">
  //           {member.name}
  //         </h3>
  //         <Badge variant="violet" className="mb-6">
  //           {member.role}
  //         </Badge>
  //         <div className="prose prose-lg text-gray-600 leading-relaxed">
  //           {member.bio.split('\n').map((paragraph, index) => (
  //             <p key={index} className="mb-4">
  //               {paragraph}
  //             </p>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }));

  return (
    <>
      <Hero />
     




      {/* Services Section */}
      <BackgroundWrapper variant="section">
        <section id="services" className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Services"
              subtitle="Comprehensive communication services designed to transform how your organization operates"
              accentColor="violet"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {services.slice(0, 6).map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  summary={service.summary}
                  slug={service.slug}
                  heroAccent={service.heroAccent}
                  index={index}
                />
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 bg-gradient-brand text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View All Services
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </BackgroundWrapper>

      {/* Solutions Section */}
      <BackgroundWrapper variant="section">
        <section id="solutions" className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Solutions"
              subtitle="Discover how our specialized solutions can address your unique communication challenges"
              accentColor="teal"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {solutions.slice(0, 6).map((solution, index) => (
                <SolutionCard
                  key={solution.slug}
                  title={solution.title}
                  summary={solution.summary}
                  slug={solution.slug}
                  heroAccent={solution.heroAccent}
                  index={index}
                />
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-3 bg-gradient-brand text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View All Solutions
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </BackgroundWrapper>

      <BackgroundWrapper variant="section">
        <section id="partners">
          <Partners />
        </section>
      </BackgroundWrapper>
      
      <BackgroundWrapper variant="default">
        <section id="resources">
          <Resources />
        </section>
      </BackgroundWrapper>
      
      <BackgroundWrapper variant="section">
        <section id="about">
          <AboutPreview />
        </section>
      </BackgroundWrapper>
      
      <BackgroundWrapper variant="default">
        <div className="text-center py-8 sm:py-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-brand text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact us
            <ArrowRight size={20} />
          </Link>
        </div>
      </BackgroundWrapper>
    </>
  );
};

export default Home;