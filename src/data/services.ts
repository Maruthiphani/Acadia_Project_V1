export interface Service {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  heroAccent: 'violet' | 'teal' | 'amber';
  description: string;
  capabilitiesText?: string[];
  image: string;
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
  description:
    'Ensure optimal performance and reliability of your communication systems with our comprehensive managed services that provide proactive monitoring, maintenance, and support.',
  capabilitiesText: [
    'Acadia’s Managed Services empower organizations to focus on their core business while we handle the complexity of IT operations. Our proactive, end-to-end management covers networks, communication platforms, cloud infrastructure, and security environments—ensuring optimal performance, reliability, and uptime. We combine 24/7 monitoring, predictive analytics, and automation to detect and resolve issues before they impact your business.',
    'With Acadia, you gain a trusted partner dedicated to continuous improvement, cost efficiency, and operational excellence. Our tailored service models adapt to your evolving needs—offering flexibility, scalability, and peace of mind through expert management, governance, and support.',
    'Our Services Span the Full managed services Spectrum with all the solutions. In-addition Acadia’s Managed Services provide L1 - L3 support with Incident, Problem, Program, Change and Knowledge management along lifecycle engineering in maintaining the inventory and Risk & Vulnerability with upgrades. In addition, we provide support on Automation /Tools /AI Adoption.'
  ],
  image: '/managed services.jpg'
}
,
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration',
    summary: 'Strategic migration of communication systems to the cloud',
    icon: 'CloudUpload',
    heroAccent: 'amber',
    description: 'Transform your communication infrastructure with our comprehensive cloud migration services that ensure a smooth transition while maximizing the benefits of cloud technology.',
    capabilitiesText:[
      'Acadia offers end-to-end Cloud Migration services designed to modernize your comunication, collaboration, and IT infrastructure with minimal disruption. We specialize in PBX migrations to cloud platforms such as Webex, Microsoft Teams, RingCentral, and Zoom, ensuring seamless voice and collaboration experiences. Our expertise extends to SBC migrations from on-premises environments to AWS-hosted solutions, as well as SIP trunk migrations from legacy on-prem systems to BYOC (Bring Your Own Carrier) in the cloud—optimizing cost, scalability, and reliability. Additionally, we handle corporate domain migrations from on-premises to Azure, including email and directory services, to provide a secure, unified, and fully cloud-enabled environment. With Acadia, organizations gain a structured, risk-managed migration approach, covering assessment, planning, deployment, and post-migration support, ensuring business continuity, enhanced security, and future-ready operations.' ], 
    image: "/cloud migration.jpg"
  },
  {
    slug: 'data-center-migration',
    title: 'Data Center Migration',
    summary: 'Complete data center relocation and modernization services',
    icon: 'Server',
    heroAccent: 'violet',
    description: 'Execute complex data center migrations with precision and minimal downtime, ensuring your critical communication systems remain operational throughout the transition.',
    capabilitiesText: [ 'Acadia provides comprehensive Data Center Migration services to help organizations modernize, consolidate, or relocate their IT infrastructure with minimal downtime and risk. We manage end-to-end migrations, including physical, virtual, and hybrid environments, ensuring seamless transition of servers, storage, networking, and applications.',
      'Our services cover assessment, planning, execution, and post-migration optimization, with a focus on security, compliance, and operational continuity. We also handle workload rehosting, replatforming, and application modernization to improve performance and scalability. With Acadia, businesses benefit from a structured, risk-managed migration strategy that reduces complexity, enhances reliability, and positions their data center infrastructure for future growth.'],
    image: "/Datacenter Migration.jpg"
  },
  {
    slug: 'hosted-sbc-service',
    title: 'Hosted SBC Service',
    summary: 'Session Border Controller as a managed cloud service',
    icon: 'Shield',
    heroAccent: 'teal',
    description: 'Secure your VoIP communications with our hosted Session Border Controller service that provides enterprise-grade security and connectivity without the complexity of managing your own infrastructure.',
    capabilitiesText: [
      'Acadia offers comprehensive Hosted Session Border Controller (SBC) services designed to enable secure, scalable, and high-performance voice connectivity in the cloud. Our solutions support Direct Routing to Microsoft Teams, SIP trunking with Webex, and seamless integration with major cloud platforms, ensuring unified communication across your enterprise.We provide end-to-end management including deployment, configuration, and ongoing support, along with SIP trunk termination with carriers for reliable voice delivery. With features like call routing, security enforcement, session monitoring, and traffic optimization, Acadia’s Hosted SBC services simplify operations, enhance voice quality, and ensure regulatory compliance—allowing businesses to scale communications efficiently without the complexity of on-premises infrastructure.'
    ],
    image: "/Hosted SBCs.jpg"
  },
  {
    slug: 'ai-contact-center-implementation',
    title: 'AI Contact Center Implementation',
    summary: 'Intelligent contact center solutions powered by artificial intelligence',
    icon: 'Bot',
    heroAccent: 'amber',
    description: 'Transform your customer service operations with AI-powered contact center solutions that enhance customer experience while improving operational efficiency and agent productivity.',
    capabilitiesText: ['Acadia delivers next-generation Contact Center solutions enhanced with AI to transform customer engagement and operational efficiency. Our services integrate cloud-based CCaaS platforms with AI-powered features such as virtual assistants, chatbots, speech analytics, and predictive routing to deliver personalized, seamless interactions across voice, chat, email, and social channels.We provide end-to-end implementation—including design, deployment, integration with existing systems, and ongoing optimization—ensuring improved agent productivity, faster response times, and higher customer satisfaction. With Acadia’s AI-driven contact center solutions, businesses can leverage automation, insights, and intelligent workflows to enhance decision-making, reduce operational costs, and deliver exceptional, data-driven customer experiences.'],
    image: "/AI Contact Center Implementation.jpg"
  }
];