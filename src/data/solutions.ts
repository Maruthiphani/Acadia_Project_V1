export interface Solution {
  slug: string; 
  title: string;
  summary: string;
  icon: string;
  heroAccent: 'violet' | 'teal' | 'amber';
  // description: string;
 capabilitiesText?: string[];
  image: string;
  // keyCapabilities: string[];
  // benefits: string[];
}

export const solutions: Solution[] = [
  {
    slug: 'voice, collaboration, & uCCaaS',
    title: 'Voice, Collaboration, & UCCaaS',
    summary: 'Seamless communication across all channels and devices',
    icon: 'MessageSquare',
    heroAccent: 'violet',
    // description: 'Transform your organization\'s communication with our comprehensive unified communications solutions that integrate voice, video, messaging, and collaboration tools into a single, powerful platform.',
    capabilitiesText: ['Remote workforces, globalization, and mobile technology have fundamentally changed the way we conduct business. More users from more locations means an increased demand for effective web and video communication technologies. We help companies manage growth and the transition to cloud-based Voice and UCCaaS solutions that deliver cost savings, enhanced features, flexibility, and disaster recovery while eliminating the need for capital expenditures.',
        ],
    image: '/Unified Communications.jpg',
   
  },
  {
    slug: 'uccaas overview:',
    title: 'UCCaaS Overview',
    summary: 'Intelligent process automation for enhanced efficiency',
    icon: 'Zap',
    heroAccent: 'teal',
    // description: 'Leverage cutting-edge automation technologies to streamline your business processes, reduce manual tasks, and improve operational efficiency across your organization.',
    capabilitiesText:['Unified Communications as a Service (UCCaaS) is a cloud delivery model for integrated communication and collaboration applications and services including messaging tools, video conferencing, and resources for facilitating different kinds of text and voice communications. It enables a uniform telephony and collaboration experience for all users, regardless of location.',
      'Delivered as a hosted, managed, and usage-based solution, enabling organizations to shift from capital investment to operating cost models while enhancing functionality Enables customers to offload the complexities of running a communications system to a service provider while ensuring access to the latest features Typically includes desktop and soft phones, voice services with PBX functionality, presence systems, integrated messaging, file sharing, and audio/video/web conferencing, all of which can be delivered over a private or public IP network.'
  
    ], 
    image: '/Automation.jpg',
  
  },
  {
    slug: 'automation:',
    title: 'Automation',
    summary: 'Intelligent process automation for enhanced efficiency',
    icon: 'Zap',
    heroAccent: 'teal',
    // description: 'Leverage cutting-edge automation technologies to streamline your business processes, reduce manual tasks, and improve operational efficiency across your organization.',
    capabilitiesText:['We empower businesses to transform their customer experience through comprehensive automated engineering solutions. We Our expertise spans every layer of the customer ecosystem, ensuring seamless integration and optimization. We use automation to offer customer the product development frameworks that involve continuous Integration and Deployment.',
      'Automation testing ensures seamless validation of voice and data services across multi-vendor platforms, improving efficiency and consistency. It accelerates interoperability checks, regression testing, and service verification for complex telecom environments.'
  
    ], 
    image: '/Automation.jpg',
  
  },
  {
    slug: 'conversational aI:',
    title: 'Conversational AI',
    summary: 'Artificial intelligence solutions for smarter operations',
    icon: 'Brain',
    heroAccent: 'amber',
    // description: 'Harness the power of artificial intelligence to transform your business operations, enhance decision-making, and deliver exceptional customer experiences.',
   capabilitiesText:['We deliver everything from data readiness to continuous improvement, crafting safe AI solutions built to enhance both customer and employee experiences that drive real value for your business. Along with any existing Managed Networking services that encompass cloud services, End User Management, Application Management and Infrastructure Management. Furthermore, we expand on these expertise, Our high-level service components and managed services include tooling, security, analytics, technology and practice.',
      'Reimagine customer engagement with our Voice and Conversational AI consulting services. We help organizations design, implement, and optimize intelligent voice and chat solutions that automate interactions, enhance customer satisfaction, and boost efficiency. From AI-driven contact centers to smart virtual assistants, we deliver tailored strategies that combine the power of speech recognition, NLP, and automation to create seamless, human-like conversations across every channel.'
  
    ], image: '/AI.jpg',
   
  },
  {
    slug: 'consulting-engineering',
    title: 'Consulting and Engineering',
    summary: 'Expert guidance and technical implementation',
    icon: 'Users',
    heroAccent: 'violet',
    // description: 'Our experienced consultants and engineers provide strategic guidance and hands-on implementation to ensure your technology initiatives deliver maximum value.',
   capabilitiesText:['Acadia provides consulting and Engineering in various solutions such as Voice - Unified Communications & Collaboration, Implementation Services, and Technical Project Management, automation, and managed services. We address the critical needs of modern collaboration solutions in on-premise, cloud, and hybrid environments, leveraging our proficiency in Ribbon, Cisco, Microsoft Teams and Avaya.'
  
    ], image: '/Consulting and Engineering.jpg',
    
  },
  {
    slug: 'networking',
    title: 'Networking',
    summary: 'Robust network infrastructure and optimization',
    icon: 'Network',
    heroAccent: 'teal',
    // description: 'Build and optimize your network infrastructure with our comprehensive networking solutions that ensure reliable, secure, and high-performance connectivity.',
    capabilitiesText:['Transform networks with Acadia’s intelligent routing and switching solutions, designed for simplicity, automation, and scalability. Our technology optimizes performance while reducing operational complexity, ensuring seamless connectivity across your infrastructure. We deploy, manage and support advanced network infrastructures, including migration, security, and ongoing optimization. Our team brings extensive experience and customer-centric approach to ensure successful project outcomes, operational excellence, and robust security posture.',
      'Empower your infrastructure with Acadia’s intelligent networking solutions built for performance, automation, and scalability. Our advanced routing and switching technologies simplify operations, enhance reliability, and ensure seamless connectivity across your enterprise. From deployment and migration to security and optimization, we design, manage, and support end-to-end network environments. With deep expertise and a customer-first approach, Acadia delivers secure, agile, and future-ready networks that drive operational excellence.'
  
    ], image: '/networking.jpg',
  
  },
  {
    slug: 'uccaas migrations:',
    title: 'UCCaaS Migrations',
    summary: 'Cloud-based unified communications as a service',
    icon: 'Cloud',
    heroAccent: 'amber',
    // description: '',
    capabilitiesText: ['Accelerate your shift to modern communication with Acadia’s end-to-end UCCaaS migration services. We simplify the transition from legacy systems to cloud-based unified communications, ensuring minimal disruption and maximum performance. Our experts handle every stage—from assessment and planning to deployment and user adoption—delivering secure, scalable, and cost-efficient UCCaaS environments. With Acadia, you gain a seamless migration experience that enhances collaboration, flexibility, and business continuity.',
     'Legacy PBX migration to Cloud.',
    'Sip trunking migration to BYOC',
    'SBC Migration from OnPrem to Cloud',
    'Device migrations'
  ], image: '/UCCaaS.jpg',
 
  },
  {
    slug: 'ccaas',
    title: 'CCaaS',
    summary: 'Contact center as a service for superior customer experience',
    icon: 'Headphones',
    heroAccent: 'violet',
    // description: 'Transform your customer service operations with our cloud-based contact center solutions that deliver exceptional customer experiences while optimizing agent productivity.',
    capabilitiesText: ['Acadia delivers modern Contact Center as a Service (CCaaS) solutions that help organizations create smarter, more connected customer experiences. Our cloud-based platforms unify voice, chat, email, and social channels—enabling seamless, omnichannel communication. With built-in AI, analytics, and automation, we help you boost agent performance, optimize workflows, and improve service quality. From design and integration to migration and ongoing support, Acadia ensures a smooth deployment tailored to your business needs, driving efficiency, scalability, and customer satisfaction.',
      'To put it simply, a contact center is the primary means by which a company interacts with its customers. Contact Center as a Service (CCaaS) solutions provide a customer experience beyond only voice calls, adopting digital channels like chat and SMS to expand with customer preferences. CCaaS technology enables businesses with on-demand scalability, global reach, and easy integrations to route customers to the appropriate agent as quickly and efficiently as possible.',
      'CCaaS Benefits: No hardware costs, built in HA and DR, remote functionality,web-based portal and control'
    ],
    image: '/CCaaS.jpg',
   
  }


];