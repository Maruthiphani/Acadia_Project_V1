import type { resources as base } from './resources';
export type ResourceType = typeof base[number];

export const EXTRA_ITEMS: ResourceType[] = [
  {
    slug: 'contact-center-automation',
    title: 'Contact-center-automation',
    excerpt:
      'A guide to intelligent automation and AI-driven efficiency in customer experience.',
    type: 'Solutions',
    icon: 'Ratio',
    heroTitle: 'Contact Center & CX Transformation',
    intro: [
      'Modern CX strategies depend on automation and AI to enhance customer interactions and agent performance.'
    ],
    sections: [
      {
        heading: 'The Case for Intelligent Contact Centers',
        body: 'Automation reduces manual effort in call routing, ticketing, and analytics. Data-driven insights enable personalization and improve service quality at scale.'
      },
      {
        heading: 'Key Focus Areas',
        bullets: [
          'Omnichannel Engagement',
          'Automatically route and prioritize customer interactions across voice, chat, email, and social platforms.',
          'AI & Automation',
          'Deploy conversational AI to handle routine inquiries and accelerate issue resolution.',
          'Performance Monitoring & Analytics',
          'Gain real-time insights into productivity and service levels through automated dashboards.',
          'Quality Assurance & Compliance',
          'Automation ensures consistent adherence to quality and regulatory standards.'
        ]
      },
      {
        heading: 'The Vision Ahead',
        body: 'AI and analytics enable proactive, personalized CX by predicting customer needs and optimizing agent performance.'
      }
    ],
  },
];
