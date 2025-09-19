export interface Solution {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  heroAccent: 'violet' | 'teal' | 'amber';
  // description: string;
  capabilitiesText?: string;
  // keyCapabilities: string[];
  // benefits: string[];
}

export const solutions: Solution[] = [
  {
    slug: 'unified-communications',
    title: 'Unified Communications',
    summary: 'Seamless communication across all channels and devices',
    icon: 'MessageSquare',
    heroAccent: 'violet',
    // description: 'Transform your organization\'s communication with our comprehensive unified communications solutions that integrate voice, video, messaging, and collaboration tools into a single, powerful platform.',
    capabilitiesText: 'Acadia helps enterprises modernize legacy systems, streamline operations,and unlock business values, in addition we maintain compatibility with an ever-changing list of technology platforms, devices, and software versions. We help you integrate multiple communication channels into a single platform.',
    // keyCapabilities: [
    //   'Voice over IP (VoIP) systems',
    //   'Video conferencing and collaboration',
    //   'Instant messaging and presence',
    //   'Mobile and desktop applications',
    //   'Integration with business applications',
    //   'Advanced call routing and management'
    // ],
    // benefits: [
    //   'Improved productivity and collaboration',
    //   'Reduced communication costs',
    //   'Enhanced mobility and flexibility',
    //   'Streamlined IT management',
    //   'Better customer experience',
    //   'Scalable and future-ready infrastructure'
    // ]
  },
  {
    slug: 'automation',
    title: 'Automation',
    summary: 'Intelligent process automation for enhanced efficiency',
    icon: 'Zap',
    heroAccent: 'teal',
    // description: 'Leverage cutting-edge automation technologies to streamline your business processes, reduce manual tasks, and improve operational efficiency across your organization.',
    capabilitiesText: 'We empower businesses to transform their customer experience through comprehensive automated engineering solutions. We Our expertise spans every layer of the customer ecosystem, ensuring seamless integration and optimization. We use automation to offer customer the product development frameworks that involve continuous Integration and Deployment.',
    
    // keyCapabilities: [
    //   'Workflow automation and orchestration',
    //   'Robotic Process Automation (RPA)',
    //   'Business process optimization',
    //   'Integration with existing systems',
    //   'Custom automation development',
    //   'Performance monitoring and analytics'
    // ],
    // benefits: [
    //   'Reduced operational costs',
    //   'Improved accuracy and consistency',
    //   'Faster processing times',
    //   'Enhanced employee satisfaction',
    //   'Better compliance and audit trails',
    //   'Scalable automation framework'
    // ]
  },
  {
    slug: 'ai',
    title: 'AI',
    summary: 'Artificial intelligence solutions for smarter operations',
    icon: 'Brain',
    heroAccent: 'amber',
    // description: 'Harness the power of artificial intelligence to transform your business operations, enhance decision-making, and deliver exceptional customer experiences.',
    capabilitiesText: 'We deliver everything from data readiness to continuous improvement, crafting safe AI solutions built to enhance both customer and employee experiences that drive real value for your business. Along with any existing Managed Networking services that encompass cloud services, End User Management, Application Management and Infrastructure Management. Furthermore, we expand on these expertise, Our high-level service components and managed services include tooling, security, analytics, technology and practice.',
    
    // keyCapabilities: [
    //   'Machine learning model development',
    //   'Natural language processing',
    //   'Predictive analytics and insights',
    //   'Computer vision solutions',
    //   'AI-powered chatbots and virtual assistants',
    //   'Intelligent document processing'
    // ],
    // benefits: [
    //   'Data-driven decision making',
    //   'Improved customer satisfaction',
    //   'Automated intelligent responses',
    //   'Enhanced operational insights',
    //   'Competitive advantage',
    //   'Future-ready AI infrastructure'
    // ]
  },
  {
    slug: 'consulting-engineering',
    title: 'Consulting and Engineering',
    summary: 'Expert guidance and technical implementation',
    icon: 'Users',
    heroAccent: 'violet',
    // description: 'Our experienced consultants and engineers provide strategic guidance and hands-on implementation to ensure your technology initiatives deliver maximum value.',
    capabilitiesText: 'Acadia provides consulting and Engineering in various solutions such as Voice- Unified Communications &Collaboration, Implementation Services, and Technical Project Management, automation, and managed services. We address the critical needs of modern collaboration solutions in on-premise, cloud, and hybrid environments, leveraging our proficiency in Ribbon, Cisco, Microsoft Teams and Avaya.',
    
    // keyCapabilities: [
    //   'Strategic technology planning',
    //   'Architecture design and review',
    //   'Implementation and deployment',
    //   'Performance optimization',
    //   'Risk assessment and mitigation',
    //   'Change management and training'
    // ],
    // benefits: [
    //   'Expert guidance and best practices',
    //   'Reduced implementation risks',
    //   'Faster time to value',
    //   'Optimized technology investments',
    //   'Enhanced team capabilities',
    //   'Long-term strategic alignment'
    // ]
  },
  {
    slug: 'networking',
    title: 'Networking',
    summary: 'Robust network infrastructure and optimization',
    icon: 'Network',
    heroAccent: 'teal',
    // description: 'Build and optimize your network infrastructure with our comprehensive networking solutions that ensure reliable, secure, and high-performance connectivity.',
    capabilitiesText: 'Transform networks with Acadia’s intelligent routing and switching solutions, designed for simplicity, automation, and scalability. Our technology optimizes performance while reducing operational complexity, ensuring seamless connectivity across your infrastructure. We deploy, manage and support advanced network infrastructures, including migration, security, and ongoing optimization. Our team brings extensive experience and customer- centric approach to ensure successful project outcomes, operational excellence, and robust security posture.',
    
    // keyCapabilities: [
    //   'Network design and architecture',
    //   'Infrastructure deployment',
    //   'Network security implementation',
    //   'Performance monitoring and optimization',
    //   'Disaster recovery planning',
    //   'Cloud network integration'
    // ],
    // benefits: [
    //   'Reliable and secure connectivity',
    //   'Improved network performance',
    //   'Enhanced security posture',
    //   'Reduced downtime and outages',
    //   'Scalable network architecture',
    //   'Cost-effective infrastructure'
    // ]
  },
  {
    slug: 'uccaas',
    title: 'UCCaaS',
    summary: 'Cloud-based unified communications as a service',
    icon: 'Cloud',
    heroAccent: 'amber',
    // description: '',
    capabilitiesText: 'Enterprises are replacing traditional PBXs with Unified Communications as a Service (UCaaS) at an incredible pace. UCaaS is feature-rich and easier to manage, using a delivery model where service providers offer collaboration tools and bill monthly providing flexibility and scalability for enterprise growth.UCaaS Benefits: No hardware costs, remote functionality, create users inseconds, web-based portal and control.',
    
    // keyCapabilities: [
    //   'Cloud-hosted communication platform',
    //   'Multi-tenant architecture',
    //   'Auto-scaling and redundancy',
    //   'API integrations and customizations',
    //   'Mobile and web applications',
    //   'Advanced analytics and reporting'
    // ],
    // benefits: [
    //   'Reduced capital expenditure',
    //   'Rapid deployment and scaling',
    //   'Automatic updates and maintenance',
    //   'Enhanced disaster recovery',
    //   'Global accessibility',
    //   'Predictable operational costs'
    // ]
  },
  {
    slug: 'ccaas',
    title: 'CCaaS',
    summary: 'Contact center as a service for superior customer experience',
    icon: 'Headphones',
    heroAccent: 'violet',
    // description: 'Transform your customer service operations with our cloud-based contact center solutions that deliver exceptional customer experiences while optimizing agent productivity.',
    capabilitiesText: 'To put it simply, a contact center is the primary means by which a company interacts with its customers. Contact Center as a Service (CCaaS) solutions provide a customer experience beyond only voice calls, adopting digital channels like chat and SMS to expand with customer preferences. CCaaS technology enables businesses with on- demand scalability, global reach, and easy integrations to route customers to the appropriate agent as quickly and efficiently as possible.CCaaS Benefits: No hardware costs, built in HA and DR, remotefunctionality, web-based portal and control.',
    
    // keyCapabilities: [
    //   'Omnichannel customer engagement',
    //   'Intelligent call routing',
    //   'Real-time analytics and reporting',
    //   'Workforce management tools',
    //   'Quality management and coaching',
    //   'CRM and business system integration'
    // ],
    // benefits: [
    //   'Improved customer satisfaction',
    //   'Enhanced agent productivity',
    //   'Reduced operational costs',
    //   'Better insights and analytics',
    //   'Flexible scaling options',
    //   'Faster time to market'
    // ]
  }
];