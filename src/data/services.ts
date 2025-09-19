export interface Service {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  heroAccent: 'violet' | 'teal' | 'amber';
  description: string;
  capabilitiesText?: string;
  // keyCapabilities: string[];
  // benefits: string[];
}

export const services: Service[] = [
  {
    slug: 'managed-services',
    title: 'Managed Services',
    summary: '24/7 monitoring and management of your communication infrastructure',
    icon: 'Settings',
    heroAccent: 'violet',
    description: 'Ensure optimal performance and reliability of your communication systems with our comprehensive managed services that provide proactive monitoring, maintenance, and support.',
    capabilitiesText: 'Our Services Span the Full managed services Spectrum with all the solutions. We do Tier 1, Tier 2 and Tier 3 support. We provide Incident, Problem, Program, Change and Knowledge management along lifecycle engineering in maintaining the inventory and Risk & Vulnerability with upgrades. In addition, we provide support on Automation /Tools /AI Adoption.',
    // keyCapabilities: [
    //   '24/7 network monitoring and alerting',
    //   'Proactive maintenance and updates',
    //   'Performance optimization',
    //   'Security monitoring and response',
    //   'Help desk and technical support',
    //   'Capacity planning and reporting'
    // ],
    // benefits: [
    //   'Reduced downtime and outages',
    //   'Lower operational costs',
    //   'Access to expert technical resources',
    //   'Improved system performance',
    //   'Enhanced security posture',
    //   'Predictable monthly costs'
    // ]
  },
  {
    slug: 'webex-di-migration',
    title: 'Webex DI Migration',
    summary: 'Seamless migration from legacy Webex to modern collaboration platforms',
    icon: 'ArrowRight',
    heroAccent: 'teal',
    description: 'Migrate from legacy Webex Directory Integration to modern collaboration platforms with minimal disruption to your business operations and maximum preservation of your investment.',
    capabilitiesText: 'Acadia performes comprehensive zero downtime Webex DI migrations from any of on-premise environments along with providing design, deployment, and lifecycle support for next-generation cloud solutions.',
    // keyCapabilities: [
    //   'Legacy system assessment and planning',
    //   'Data migration and preservation',
    //   'User training and change management',
    //   'Integration with existing systems',
    //   'Testing and validation',
    //   'Post-migration support and optimization'
    // ],
    // benefits: [
    //   'Minimal business disruption',
    //   'Preserved user experience',
    //   'Enhanced collaboration features',
    //   'Improved security and compliance',
    //   'Future-ready platform',
    //   'Cost optimization opportunities'
    // ]
  },
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration',
    summary: 'Strategic migration of communication systems to the cloud',
    icon: 'CloudUpload',
    heroAccent: 'amber',
    description: 'Transform your communication infrastructure with our comprehensive cloud migration services that ensure a smooth transition while maximizing the benefits of cloud technology.',
    capabilitiesText: 'Acadia work on the concept of Deploy anywhere, connect anything. We offers secure, reliable, and scalable cloud infrastructure movementswithout impacting businesses.',
    // keyCapabilities: [
    //   'Cloud readiness assessment',
    //   'Migration strategy and planning',
    //   'Hybrid and multi-cloud architectures',
    //   'Data security and compliance',
    //   'Performance testing and optimization',
    //   'Training and change management'
    // ],
    // benefits: [
    //   'Reduced infrastructure costs',
    //   'Enhanced scalability and flexibility',
    //   'Improved disaster recovery',
    //   'Automatic updates and maintenance',
    //   'Global accessibility',
    //   'Better resource utilization'
    // ]
  },
  {
    slug: 'data-center-migration',
    title: 'Data Center Migration',
    summary: 'Complete data center relocation and modernization services',
    icon: 'Server',
    heroAccent: 'violet',
    description: 'Execute complex data center migrations with precision and minimal downtime, ensuring your critical communication systems remain operational throughout the transition.',
    capabilitiesText: 'We help you deploy your digital infrastructure closer to users and preferred location which in-turn Reduce latency, improve performance, and enhance user experience by leveraging your strategically located data center.',
    // keyCapabilities: [
    //   'Migration planning and risk assessment',
    //   'Infrastructure design and deployment',
    //   'Application and data migration',
    //   'Network reconfiguration',
    //   'Testing and validation',
    //   'Cutover coordination and support'
    // ],
    // benefits: [
    //   'Minimal downtime and disruption',
    //   'Improved infrastructure efficiency',
    //   'Enhanced security and compliance',
    //   'Cost optimization',
    //   'Modern, scalable architecture',
    //   'Reduced operational complexity'
    // ]
  },
  {
    slug: 'hosted-sbc-service',
    title: 'Hosted SBC Service',
    summary: 'Session Border Controller as a managed cloud service',
    icon: 'Shield',
    heroAccent: 'teal',
    description: 'Secure your VoIP communications with our hosted Session Border Controller service that provides enterprise-grade security and connectivity without the complexity of managing your own infrastructure.',
    capabilitiesText: 'Acadia helps the customer in Seamless integration with cloud providers like Microsoft Teams, migrating enterprise SIP trunks without any downtime.',
    // keyCapabilities: [
    //   'Cloud-hosted SBC infrastructure',
    //   'Security and fraud protection',
    //   'Protocol translation and mediation',
    //   'Quality of service management',
    //   'Carrier interconnection',
    //   'Real-time monitoring and analytics'
    // ],
    // benefits: [
    //   'Enhanced security and compliance',
    //   'Reduced infrastructure costs',
    //   'Improved call quality',
    //   'Simplified management',
    //   'Scalable capacity',
    //   'Expert support and maintenance'
    // ]
  },
  {
    slug: 'ai-contact-center-implementation',
    title: 'AI Contact Center Implementation',
    summary: 'Intelligent contact center solutions powered by artificial intelligence',
    icon: 'Bot',
    heroAccent: 'amber',
    description: 'Transform your customer service operations with AI-powered contact center solutions that enhance customer experience while improving operational efficiency and agent productivity.',
    capabilitiesText: 'Acadia helps in deploy AI-powered chatbots across multi-vendorenvironments, enhancing efficiency and reducing call center expenses significantly.',
    // keyCapabilities: [
    //   'AI-powered chatbots and virtual assistants',
    //   'Intelligent call routing and queuing',
    //   'Sentiment analysis and emotion detection',
    //   'Predictive analytics and forecasting',
    //   'Automated quality management',
    //   'Real-time agent assistance and coaching'
    // ],
    // benefits: [
    //   'Improved customer satisfaction scores',
    //   'Reduced average handle time',
    //   'Enhanced first-call resolution',
    //   'Lower operational costs',
    //   'Better agent performance',
    //   'Data-driven insights and optimization'
    // ]
  }
];