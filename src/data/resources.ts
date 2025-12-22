export interface Resource {
  slug: string; 
  title: string;
  excerpt: string;
  type: string;
  icon: string;
  heroTitle: string;
  intro: string[];
  sections: {
    heading: string;
    body?: string;
    bullets?: string[];
  }[];
}

export const resources: Resource[] = [
  {
    slug: 'Explore - AI-Powered Conversations and Automation',
    title: 'Explore Resources on AI-Powered Conversations and Automation',
    excerpt:
      'As businesses strive to deliver faster, smarter, and more personalized interactions, AI-powered conversations.',
    type: 'Solutions',
    icon: 'Ratio',
    heroTitle: 'AI-Powered Conversations and Automation',
    intro: [
      'As businesses strive to deliver faster, smarter, and more personalized interactions, AI-powered conversations are transforming the way organizations engage with customers and employees. Automation combined with AI enables intelligent communication, reduces manual effort, and drives operational efficiency.'
    ],
    sections: [
      {
        heading: 'The Case for AI-Powered Conversations',
        body: 'Traditional conversational processes — like handling customer inquiries, routing support tickets, or responding to repetitive queries — can be time-consuming and error-prone. Integrating AI with automation allows organizations to streamline these interactions, deliver consistent experiences, and free human agents to focus on higher-value tasks.'
      },
      {
        heading: 'Key Focus Areas',
        bullets: [
          'Intelligent Chatbots & Virtual Agents',
          'AI-powered chatbots can understand natural language, respond to common queries, and escalate complex issues to human agents, ensuring seamless customer experiences.',
          'Workflow Automation',
          'Automate repetitive communication tasks such as ticket generation, follow-up messages, and notifications to improve speed and reliability.',
          'Data-Driven Insights',
          'Collect and analyze interaction data to uncover trends, monitor performance, and optimize communication strategies.',
          'Personalization & Predictive Engagement',
          'AI can anticipate user needs, tailor responses, and provide proactive recommendations, creating meaningful and personalized experiences.'
        ]
      },
      {
        heading: 'The Vision Ahead',
        body: 'Automating AI-powered conversations sets the stage for smarter, more responsive engagement. As machine learning and natural language processing evolve, organizations can predict needs, deliver contextual solutions, and continuously improve interaction quality. By leveraging these resources, businesses can transform communication from routine exchanges into intelligent, value-driven conversations.'
      }
    ]
  },
  {
    slug: 'uccaas-migration',
    title: 'UCCaaS Migration',
    excerpt:
      'As organizations embrace digital transformation, modernizing communication infrastructure has become essential.',
    type: 'Solutions',
    icon: 'Ratio',
    heroTitle: 'UCCaaS Migration:',
    intro: [
      'As organizations embrace digital transformation, modernizing communication infrastructure has become essential. Migrating from legacy PBX systems to UCCaaS platforms and moving Session Border Controllers (SBCs) to the cloud enables businesses to enhance scalability, flexibility, and collaboration while reducing operational complexity.'
    ],
    sections: [
      {
        heading: 'The Case for Migration',
        body: 'Legacy PBX systems incur significant ongoing costs through hardware maintenance, software licensing, and specialized personnel requirements. These systems lack the flexibility to support modern work patterns such as remote collaboration and mobile workforce enablement. On-premises SBCs add complexity through manual configuration, limited scalability, and challenges in maintaining security compliance. Cloud UCCaaS platforms combined with hosted SBC services eliminate these constraints while delivering enterprise-grade reliability and security.'
      },
      {
        heading: 'SBC Cloud Migration',
        bullets: [
          'Move Session Border Controllers to hosted or cloud-managed environments to enable secure, scalable, and resilient SIP trunking while simplifying network management.',
          'Integration & Interoperability',
          'Ensure the new UCCaaS platform and cloud SBC integrate smoothly with existing business applications, contact centers, and collaboration tools to maintain operational continuity.',
          'Testing, Validation & Compliance',
          'Automated validation and testing ensure reliable service quality, security, and regulatory compliance throughout the migration process.'
        ]
      },
      {
        heading: 'The Vision Ahead',
        body: 'Successful migration not only modernizes communication infrastructure but also opens the door to advanced capabilities such as AI-driven analytics, intelligent call routing, and unified collaboration across devices and locations. By moving to cloud-native platforms, organizations can focus on innovation, improve agility, and provide a seamless communication experience for employees and customers alike.'
      }
    ]
  },
  {
    slug: 'transforming voice',
    title: 'Transforming Voice',
    excerpt:
      'As businesses strive to deliver faster, smarter, and more personalized interactions.',
    type: 'Solutions',
    icon: 'Ratio',
    heroTitle: 'Transforming Voice',
    intro: [
      'As businesses strive to deliver faster, smarter, and more personalized interactions, AI-powered conversations are transforming how organizations engage with customers and employees.'
    ],
    sections: [
      {
        heading: 'The Case for AI-Powered Conversations',
        body: 'Traditional voice workflows can be time-consuming and costly. Integrating AI with automation allows organizations to streamline call handling, deliver consistent experiences, and optimize voice infrastructure.'
      },
      {
        heading: 'Key Focus Areas',
        bullets: [
          'Intelligent Chatbots & Virtual Agents',
          'AI-powered chatbots can handle routine calls and escalate complex issues to agents efficiently.',
          'Workflow Automation',
          'Automate call routing, ticket creation, and notifications to enhance operational speed.',
          'Data-Driven Insights',
          'Analyze call data to improve customer satisfaction and agent performance.',
          'Personalization & Predictive Engagement',
          'Predict user needs and deliver context-aware voice responses.'
        ]
      },
      {
        heading: 'The Vision Ahead',
        body: 'AI-driven voice platforms will define the next era of communication, offering organizations intelligent, personalized, and scalable solutions.'
      }
    ]
  },
  {
    slug: 'unified-communication',
    title: 'Unified Communication: Simplify, Integrate, Engage',
    excerpt:
      'Enterprises are adopting Unified Communications (UC) to simplify interactions, integrate systems, and enhance engagement.',
    type: 'Solutions',
    icon: 'Ratio',
    heroTitle: 'Unified Communication: Simplify, Integrate, Engage',
    intro: [
      'Enterprises are adopting Unified Communications (UC) to simplify interactions, integrate systems, and enhance engagement. UC brings voice, video, messaging, and collaboration together in one seamless platform.'
    ],
    sections: [
      {
        heading: 'The Case for Unified Communication',
        body: 'Traditional tools create fragmented experiences and reduce productivity. Unified Communication consolidates tools into a single ecosystem, simplifying management and empowering teams to collaborate across locations.'
      },
      {
        heading: 'Key Focus Areas',
        bullets: [
          'Seamless Integration',
          'Unify calling, messaging, video, and conferencing under one platform.',
          'User Experience & Adoption',
          'Simplify onboarding and ensure consistent interfaces across devices.',
          'Operational Efficiency',
          'Centralized management and automation reduce overhead.',
          'Security & Compliance',
          'Ensure end-to-end encryption, secure authentication, and privacy compliance.'
        ]
      },
      {
        heading: 'The Vision Ahead',
        body: 'UC will evolve into intelligent ecosystems that use AI to optimize performance, predict issues, and enhance collaboration experiences.'
      }
    ]
  },
  {
    slug: 'automate-collaboration',
    title: 'Automate Your Collaboration Experience',
    excerpt:
      'Automation ensures that teams stay connected, workflows run smoothly.',
    type: 'Solutions',
    icon: 'Ratio',
    heroTitle: 'Automate Your Collaboration Experience',
    intro: [
      'Automation ensures that teams stay connected, workflows run smoothly, and employees can focus on high-value tasks rather than repetitive work.'
    ],
    sections: [
      {
        heading: 'The Case for Collaboration Automation',
        body: 'Manual collaboration processes cause delays and errors. Automation streamlines scheduling, document sharing, and project updates, saving time and improving engagement.'
      },
      {
        heading: 'Key Focus Areas',
        bullets: [
          'Meeting & Scheduling Automation',
          'Automatically schedule and manage meetings, reducing administrative overhead.',
          'Workflow Integration',
          'Connect collaboration tools with project management systems for seamless workflows.',
          'Notifications & Alerts',
          'Automated reminders ensure teams stay updated on deadlines and milestones.',
          'Analytics & Insights',
          'Analyze collaboration data to optimize workflows and improve productivity.'
        ]
      },
      {
        heading: 'The Vision Ahead',
        body: 'AI-driven automation will redefine teamwork, enabling predictive collaboration and smarter decision-making.'
      }
    ]
  },
  {
    slug: 'Transform & CX Resources',
    title: 'Transform Every Interaction: Contact Center & CX Resources',
    excerpt:
      'In today’s competitive business landscape, delivering exceptional customer experiences (CX) has become a key differentiator for enterprises.',
    type: 'Solutions',
    icon: 'Ratio',
    heroTitle: 'Transform Every Interaction: Contact Center & CX Resources',
    intro: [
      'In today’s competitive business landscape, delivering exceptional customer experiences (CX) has become a key differentiator for enterprises. Contact centers are evolving from simple call-handling hubs into intelligent engagement platforms that leverage data, automation, and AI to transform every customer interaction.'
    ],
    sections: [
      {
        heading: 'The Case for Intelligent Contact Centers:',
        body: 'Modern CX strategies involve multiple stages, starting with streamlining repetitive contact center tasks. Automation reduces manual effort in areas such as call routing, ticket management, and reporting. Once foundational tasks are automated, data can be collected to train machine learning models, which in turn drive predictive analytics, personalized customer interactions, and intelligent decision-making. For contact centers, automation is the critical first step toward delivering consistent, high-quality experiences at scale.'
      },
      {
        heading: 'Key Focus Areas',
        bullets: [
          'Omnichannel Engagement',
          'Automatically route and prioritize customer interactions across voice, chat, email, and social platforms. Efficiently connecting customers to the right agents improves satisfaction and loyalty.',
          'AI & Automation',
          'Deploy conversational AI and chatbots to handle routine inquiries, freeing agents to focus on complex issues. Automated workflows accelerate issue resolution, reduce human error, and enhance operational efficiency.',
          'Performance Monitoring & Analytics',
          'Automated dashboards, reports, and analytics provide real-time insights into agent productivity, call volumes, and service levels. Leveraging these insights enables proactive decision-making and continuous CX improvement.',
          'Quality Assurance & Compliance',
          'Automation ensures that quality checks, security protocols, and regulatory compliance tasks are consistently applied across all interactions, reducing risk and maintaining service integrity.'
        ]
      },
      {
        heading: 'The Vision Ahead',
        body: 'With foundational automation in place, contact centers can harness AI to predict customer needs, optimize agent allocation, and deliver personalized experiences. AI-driven analytics reveal behavioral patterns, helping organizations anticipate issues and offer proactive support. By integrating natural language processing (NLP) and machine learning, contact centers can transform every interaction into a seamless, intelligent, and memorable experience for the customer.'
      }
    ]
  },
  // {
  //   slug: 'contact-center-automation',
  //   title: 'Contact-center-automation',
  //   excerpt:
  //     'A guide to intelligent automation and AI-driven efficiency in customer experience.',
  //   type: 'Solutions',
  //   icon: 'Ratio',
  //   heroTitle: 'Contact Center & CX Transformation',
  //   intro: [
  //     'Modern CX strategies depend on automation and AI to enhance customer interactions and agent performance.'
  //   ],
  //   sections: [
  //     {
  //       heading: 'The Case for Intelligent Contact Centers',
  //       body: 'Automation reduces manual effort in call routing, ticketing, and analytics. Data-driven insights enable personalization and improve service quality at scale.'
  //     },
  //     {
  //       heading: 'Key Focus Areas',
  //       bullets: [
  //         'Omnichannel Engagement',
  //         'Automatically route and prioritize customer interactions across voice, chat, email, and social platforms.',
  //         'AI & Automation',
  //         'Deploy conversational AI to handle routine inquiries and accelerate issue resolution.',
  //         'Performance Monitoring & Analytics',
  //         'Gain real-time insights into productivity and service levels through automated dashboards.',
  //         'Quality Assurance & Compliance',
  //         'Automation ensures consistent adherence to quality and regulatory standards.'
  //       ]
  //     },
  //     {
  //       heading: 'The Vision Ahead',
  //       body: 'AI and analytics enable proactive, personalized CX by predicting customer needs and optimizing agent performance.'
  //     }
  //   ]
  // }
];
