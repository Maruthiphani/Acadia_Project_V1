import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Partners from '../components/Partners';
import Resources from '../components/Resources';
import ContactSection from '../components/ContactSection';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Badge from '../components/Badge';
import TabsOrAccordion from '../components/TabsOrAccordion';
import { services } from '../data/services';
import { solutions } from '../data/solutions';
import { leadership } from '../data/leadership';

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
     

      {/* Leadership Section */}
      {/* <section className="py-20 bg-white">
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
      </section> */}



      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Services"
            subtitle="Comprehensive communication services designed to transform how your organization operates"
            accentColor="violet"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 6).map((service, index) => (
              <Card key={service.slug} accentColor={service.heroAccent}>
                <div className="p-8">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${service.heroAccent === 'violet' ? 'bg-accent-violet/10' :
                      service.heroAccent === 'teal' ? 'bg-accent-teal/10' :
                        'bg-accent-amber/10'
                      }`}>
                      <div className={`w-8 h-8 ${service.heroAccent === 'violet' ? 'text-accent-violet' :
                        service.heroAccent === 'teal' ? 'text-accent-teal' :
                          'text-accent-amber'
                        }`}>
                        {/* Icon placeholder */}
                        <div className="w-full h-full bg-current opacity-60 rounded" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                  <Link
                    to={`/services/${service.slug}`}
                    className={`group inline-flex items-center gap-2 font-semibold transition-colors duration-300 ${service.heroAccent === 'violet' ? 'text-accent-violet hover:text-accent-violet/80' :
                      service.heroAccent === 'teal' ? 'text-accent-teal hover:text-accent-teal/80' :
                        'text-accent-amber hover:text-accent-amber/80'
                      }`}
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Solutions"
            subtitle="Discover how our specialized solutions can address your unique communication challenges"
            accentColor="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {solutions.slice(0, 6).map((solution, index) => (
              <Card key={solution.slug} accentColor={solution.heroAccent}>
                <div className="p-8">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${solution.heroAccent === 'violet' ? 'bg-accent-violet/10' :
                      solution.heroAccent === 'teal' ? 'bg-accent-teal/10' :
                        'bg-accent-amber/10'
                      }`}>
                      <div className={`w-8 h-8 ${solution.heroAccent === 'violet' ? 'text-accent-violet' :
                        solution.heroAccent === 'teal' ? 'text-accent-teal' :
                          'text-accent-amber'
                        }`}>
                        {/* Icon placeholder */}
                        <div className="w-full h-full bg-current opacity-60 rounded" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.summary}
                    </p>
                  </div>
                  <Link
                    to={`/solutions/${solution.slug}`}
                    className={`group inline-flex items-center gap-2 font-semibold transition-colors duration-300 ${solution.heroAccent === 'violet' ? 'text-accent-violet hover:text-accent-violet/80' :
                      solution.heroAccent === 'teal' ? 'text-accent-teal hover:text-accent-teal/80' :
                        'text-accent-amber hover:text-accent-amber/80'
                      }`}
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Solutions
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section id="partners">
        <Partners />
      </section>
      <section id="resources">
        <Resources />
      </section>
      <section id="about">
        <AboutPreview />
      </section>
      {/* <section id="contact">
        <ContactSection />
      </section> */}
      <div className="text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Contact us
          <ArrowRight size={20} />
        </Link>
      </div>
      <br/>
    </>
  );
};

export default Home;