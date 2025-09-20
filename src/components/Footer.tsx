import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'partners', label: 'Partners' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src="/FullLogo.jpg" alt="Acadia Consultants" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-brand-light mb-6 leading-relaxed">
              Transforming enterprise communications with expert consulting and cutting-edge technology solutions. 
              We deliver user-experience-driven testing and solutions for leaders in enterprise communications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-light hover:text-white transition-colors duration-300">
                <Linkedin size={24} className="hover:text-accent-teal" />
              </a>
              <a href="#" className="text-brand-light hover:text-white transition-colors duration-300">
                <Twitter size={24} className="hover:text-accent-teal" />
              </a>
              <a href="#" className="text-brand-light hover:text-white transition-colors duration-300">
                <Facebook size={24} className="hover:text-accent-teal" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-brand-light hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-accent-teal mt-0.5" />
                <div>
                  <p className="text-brand-light">info@acadiaconsultants.com</p>
                  {/* <p className="text-brand-light">support@acadiaconsultants.com</p> */}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-accent-teal mt-0.5" />
                <div>
                  {/* <p className="text-brand-light">+1 (123) 456-7890</p> */}
                  <p className="text-brand-light">+1 (984) 209-3969</p>
                  <p className="text-brand-light">24/7 Support Available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent-teal mt-0.5" />
                <div>
                  <p className="text-brand-light">4229 Lafayette Center Dr STE 1880</p>
                  <p className="text-brand-light">Chantilly, VA 20151</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-light/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-light text-sm">
            © 2024 Acadia Consultants. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-brand-light hover:text-white transition-colors duration-300">
              <button
                onClick={() => setCurrentPage('privacy')}
                className="text-brand-light hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
            </a>
            <a href="#" className="text-brand-light hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;