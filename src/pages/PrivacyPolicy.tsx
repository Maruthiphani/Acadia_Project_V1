import React from 'react';
import { Shield, Eye, Lock, Users, Globe, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Data Collection and Usage',
      content: `We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This includes personal information like your name, email address, company information, and communication preferences.

We use this information to provide, maintain, and improve our services, communicate with you about your account and our services, respond to your requests and questions, and comply with legal obligations.

We may also collect information automatically when you use our services, including device information, usage data, and location information to enhance your experience and ensure service security.`
    },
    {
      icon: Globe,
      title: 'Cookies and Tracking',
      content: `We use cookies and similar tracking technologies to collect information about your browsing activities and to provide personalized experiences. These technologies help us understand how you use our services and improve functionality.

You can control cookies through your browser settings, though disabling certain cookies may limit some features of our services. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted).

We also work with third-party analytics providers to better understand user behavior and improve our services, always in accordance with applicable privacy laws.`
    },
    {
      icon: Users,
      title: 'User Rights',
      content: `You have several rights regarding your personal information, including the right to access, update, or delete your personal data. You may also request a copy of the personal information we hold about you.

If you wish to exercise any of these rights, please contact us using the information provided below. We will respond to your request within the timeframe required by applicable law.

You also have the right to opt-out of certain communications from us and to withdraw consent where we rely on consent as the legal basis for processing your information.`
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure data transmission, and regular security assessments.

Our security measures include industry-standard encryption for data in transit and at rest, multi-factor authentication, regular security audits, and employee training on data protection best practices.

While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We continuously monitor and update our security practices to address emerging threats.`
    },
    {
      icon: Shield,
      title: 'Third-Party Services',
      content: `We may use third-party service providers to help us operate our business and provide services to you. These providers are contractually obligated to protect your information and use it only for the purposes we specify.

Third-party services may include cloud hosting providers, analytics services, customer support platforms, and communication tools. We carefully vet all third-party providers to ensure they meet our security and privacy standards.

We do not sell, trade, or otherwise transfer your personal information to third parties for their marketing purposes without your explicit consent.`
    },
    {
      icon: Mail,
      title: 'Contact Information',
      content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us at:

Email: privacy@acadiaconsultants.com
Phone: +1 (123) 456-7890
Address: 4229 Lafayette Center Dr STE 1880, Chantilly, VA 20151

We will respond to your inquiry within 30 days. If you are not satisfied with our response, you may have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.`
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Privacy
            <span className="block text-brand-light">Policy</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our services.
          </p>
          <div className="mt-8 text-brand-light">
            <p>Last updated: March 15, 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center flex-shrink-0">
                    <section.icon size={32} className="text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-navy">
                    {section.title}
                  </h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-accent-violet/10 to-accent-teal/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're committed to transparency and protecting your privacy. If you have any questions or concerns about how we handle your data, don't hesitate to reach out.
            </p>
            <a
              href="mailto:privacy@acadiaconsultants.com"
              className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail size={20} />
              Contact Privacy Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;