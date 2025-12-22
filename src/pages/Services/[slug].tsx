import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import { services } from '../../data/services';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-accent-violet hover:text-accent-violet/80">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="py-8 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/services" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
              <ArrowLeft size={16} />
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className={`py-20 ${service.heroAccent === 'violet'
          ? 'bg-gradient-to-br from-accent-violet/10 to-accent-violet/5'
          : service.heroAccent === 'teal'
            ? 'bg-gradient-to-br from-accent-teal/10 to-accent-teal/5'
            : 'bg-gradient-to-br from-accent-amber/10 to-accent-amber/5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* <Badge variant={service.heroAccent} size="lg" className="mb-6">
              Service
            </Badge> */}
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {service.capabilitiesText && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             
              <div>
            
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.capabilitiesText}
                </p>
              </div>

         
              <div>
                <img
                  src={service.image}   
                  alt={`${service.title} capabilities`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section> */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {service.capabilitiesText && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                {/* Paragraph Renderer */}
                {Array.isArray(service.capabilitiesText) ? (
                  <div className="flex flex-col gap-6 text-lg text-gray-600 leading-relaxed">
                    {service.capabilitiesText.map((para, idx) => (
                      <p key={idx} className="whitespace-pre-line">
                        {para}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                    {service.capabilitiesText}
                  </p>
                )}
              </div>

              {/* Image */}
              <div>
                <img
                  src={service.image}
                  alt={`${service.title} capabilities`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section>



      {/* Getting Started CTA */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card accentColor={service.heroAccent}>
            <div className="p-12 text-center">
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how {service.title.toLowerCase()} can transform your organization.
                Our experts are ready to create a customized solution for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${service.heroAccent === 'violet'
                    ? 'bg-accent-violet hover:bg-accent-violet/90'
                    : service.heroAccent === 'teal'
                      ? 'bg-accent-teal hover:bg-accent-teal/90'
                      : 'bg-accent-amber hover:bg-accent-amber/90'
                    } text-white hover:shadow-xl`}
                >
                  Schedule Consultation
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${service.heroAccent === 'violet'
                    ? 'border-accent-violet text-accent-violet hover:bg-accent-violet hover:text-white'
                    : service.heroAccent === 'teal'
                      ? 'border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white'
                      : 'border-accent-amber text-accent-amber hover:bg-accent-amber hover:text-white'
                    }`}
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
