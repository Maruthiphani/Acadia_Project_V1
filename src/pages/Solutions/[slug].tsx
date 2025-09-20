import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import { solutions } from '../../data/solutions';

const SolutionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutions.find(s => s.slug === slug);

  if (!solution) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Solution Not Found</h1>
          <Link to="/solutions" className="text-accent-teal hover:text-accent-teal/80">
            Back to Solutions
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
            <Link to="/solutions" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
              <ArrowLeft size={16} />
              Solutions
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{solution.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className={`py-20 ${
        solution.heroAccent === 'violet' ? 'bg-gradient-to-br from-accent-violet/10 to-accent-violet/5' :
        solution.heroAccent === 'teal' ? 'bg-gradient-to-br from-accent-teal/10 to-accent-teal/5' :
        'bg-gradient-to-br from-accent-amber/10 to-accent-amber/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant={solution.heroAccent} size="lg" className="mb-6">
              Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
              {solution.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {solution.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {solution.capabilitiesText && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">
                  Our Capabilities
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {solution.capabilitiesText}
                </p>
              </div>
              
              {/* Image */}
              <div>
                <img
                  src={`https://images.pexels.com/photos/${3184338 + (solutions.findIndex(s => s.slug === solution.slug) % 3)}/pexels-photo-${3184338 + (solutions.findIndex(s => s.slug === solution.slug) % 3)}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                  alt={`${solution.title} capabilities`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                title="Key Capabilities"
                accentColor={solution.heroAccent}
                centered={false}
              />
              <div className="space-y-4">
                {solution.keyCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className={`mt-0.5 flex-shrink-0 ${
                      solution.heroAccent === 'violet' ? 'text-accent-violet' :
                      solution.heroAccent === 'teal' ? 'text-accent-teal' :
                      'text-accent-amber'
                    }`} />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                title="Business Benefits"
                accentColor={solution.heroAccent}
                centered={false}
              />
              <div className="space-y-4">
                {solution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className={`mt-0.5 flex-shrink-0 ${
                      solution.heroAccent === 'violet' ? 'text-accent-violet' :
                      solution.heroAccent === 'teal' ? 'text-accent-teal' :
                      'text-accent-amber'
                    }`} />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Getting Started CTA */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card accentColor={solution.heroAccent}>
            <div className="p-12 text-center">
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how {solution.title.toLowerCase()} can transform your organization. 
                Our experts are ready to create a customized solution for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                    solution.heroAccent === 'violet' ? 'bg-accent-violet hover:bg-accent-violet/90' :
                    solution.heroAccent === 'teal' ? 'bg-accent-teal hover:bg-accent-teal/90' :
                    'bg-accent-amber hover:bg-accent-amber/90'
                  } text-white hover:shadow-xl`}
                >
                  Schedule Consultation
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${
                    solution.heroAccent === 'violet' ? 'border-accent-violet text-accent-violet hover:bg-accent-violet hover:text-white' :
                    solution.heroAccent === 'teal' ? 'border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white' :
                    'border-accent-amber text-accent-amber hover:bg-accent-amber hover:text-white'
                  }`}
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetail;