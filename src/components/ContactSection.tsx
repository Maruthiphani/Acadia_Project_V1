import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-brand-slate">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Ready to Transform Your Communications?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your communication goals. Get in touch with our experts today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-violet/20 ${
                  errors.name ? 'border-red-500' : 'border-gray-200 focus:border-accent-violet'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-violet/20 ${
                  errors.email ? 'border-red-500' : 'border-gray-200 focus:border-accent-violet'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-violet/20 ${
                errors.company ? 'border-red-500' : 'border-gray-200 focus:border-accent-violet'
              }`}
              placeholder="Enter your company name"
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-violet/20 resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-200 focus:border-accent-violet'
              }`}
              placeholder="Tell us about your project or how we can help..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="group bg-accent-teal text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-teal/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 mx-auto"
          >
            Send Message
            <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;