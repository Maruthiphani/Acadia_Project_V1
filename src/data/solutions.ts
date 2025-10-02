export interface Solution {
  slug: string; 
  title: string;
  summary: string;
  icon: string;
  heroAccent: 'violet' | 'teal' | 'amber';
  // description: string;
  capabilitiesText?: string;
  image: string;
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
    image: '/Unified Communications.jpg',
   
  },
  {
    slug: 'automation',
    title: 'Automation',
    summary: 'Intelligent process automation for enhanced efficiency',
    icon: 'Zap',
    heroAccent: 'teal',
    // description: 'Leverage cutting-edge automation technologies to streamline your business processes, reduce manual tasks, and improve operational efficiency across your organization.',
    capabilitiesText: 'We empower businesses to transform their customer experience through comprehensive automated engineering solutions. We Our expertise spans every layer of the customer ecosystem, ensuring seamless integration and optimization. We use automation to offer customer the product development frameworks that involve continuous Integration and Deployment.',
    image: '/Automation.jpg',
  
  },
  {
    slug: 'ai',
    title: 'AI',
    summary: 'Artificial intelligence solutions for smarter operations',
    icon: 'Brain',
    heroAccent: 'amber',
    // description: 'Harness the power of artificial intelligence to transform your business operations, enhance decision-making, and deliver exceptional customer experiences.',
    capabilitiesText: 'We deliver everything from data readiness to continuous improvement, crafting safe AI solutions built to enhance both customer and employee experiences that drive real value for your business. Along with any existing Managed Networking services that encompass cloud services, End User Management, Application Management and Infrastructure Management. Furthermore, we expand on these expertise, Our high-level service components and managed services include tooling, security, analytics, technology and practice.',
    image: '/AI.jpg',
   
  },
  {
    slug: 'consulting-engineering',
    title: 'Consulting and Engineering',
    summary: 'Expert guidance and technical implementation',
    icon: 'Users',
    heroAccent: 'violet',
    // description: 'Our experienced consultants and engineers provide strategic guidance and hands-on implementation to ensure your technology initiatives deliver maximum value.',
    capabilitiesText: 'Acadia provides consulting and Engineering in various solutions such as Voice- Unified Communications &Collaboration, Implementation Services, and Technical Project Management, automation, and managed services. We address the critical needs of modern collaboration solutions in on-premise, cloud, and hybrid environments, leveraging our proficiency in Ribbon, Cisco, Microsoft Teams and Avaya.',
    image: '/Consulting and Engineering.jpg',
    
  },
  {
    slug: 'networking',
    title: 'Networking',
    summary: 'Robust network infrastructure and optimization',
    icon: 'Network',
    heroAccent: 'teal',
    // description: 'Build and optimize your network infrastructure with our comprehensive networking solutions that ensure reliable, secure, and high-performance connectivity.',
    capabilitiesText: 'Transform networks with Acadia’s intelligent routing and switching solutions, designed for simplicity, automation, and scalability. Our technology optimizes performance while reducing operational complexity, ensuring seamless connectivity across your infrastructure. We deploy, manage and support advanced network infrastructures, including migration, security, and ongoing optimization. Our team brings extensive experience and customer- centric approach to ensure successful project outcomes, operational excellence, and robust security posture.',
    image: '/networking.jpg',
  
  },
  {
    slug: 'uccaas',
    title: 'UCCaaS',
    summary: 'Cloud-based unified communications as a service',
    icon: 'Cloud',
    heroAccent: 'amber',
    // description: '',
    capabilitiesText: 'Enterprises are replacing traditional PBXs with Unified Communications as a Service (UCaaS) at an incredible pace. UCaaS is feature-rich and easier to manage, using a delivery model where service providers offer collaboration tools and bill monthly providing flexibility and scalability for enterprise growth.UCaaS Benefits: No hardware costs, remote functionality, create users inseconds, web-based portal and control.',
    image: '/UCCaaS.jpg',
 
  },
  {
    slug: 'ccaas',
    title: 'CCaaS',
    summary: 'Contact center as a service for superior customer experience',
    icon: 'Headphones',
    heroAccent: 'violet',
    // description: 'Transform your customer service operations with our cloud-based contact center solutions that deliver exceptional customer experiences while optimizing agent productivity.',
    capabilitiesText: 'To put it simply, a contact center is the primary means by which a company interacts with its customers. Contact Center as a Service (CCaaS) solutions provide a customer experience beyond only voice calls, adopting digital channels like chat and SMS to expand with customer preferences. CCaaS technology enables businesses with on- demand scalability, global reach, and easy integrations to route customers to the appropriate agent as quickly and efficiently as possible.CCaaS Benefits: No hardware costs, built in HA and DR, remotefunctionality, web-based portal and control.',
    image: '/CCaaS.jpg',
   
  }


];