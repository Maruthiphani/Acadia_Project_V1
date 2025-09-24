export interface TeamMember { 
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const leadership: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Sreeram Bandakavi',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: `Sreeram Bandakavi is a visionary global technical leader with over 20+ years of experience in IT/Network Operations, IP/VoIP/SP Network Planning, Design, Implementation, Operations, Optimization, and Managed Services roles and leading global cross functional teams.

He has proven history of delivering high quality projects, constantly improving service offerings and driving the adoption of new services. Sreeram held several technical leadership roles at Ciena, Cisco, and Sprint (Now T-Mobile) in several verticals: Service Delivery, and Service Assurance, Product Development, Design and Architecture, Consulting, Pre-Sales support, Field Support, running Global NOC.

Sreeram has a bachelor's degree in Electronics Engineering and a Master's in Business Administration. He achieved CCIE Emeritus for Life after being an active CCIE for over a decade. He also held several other certifications including CCNP, and MCSE.`
  },
  // {
  //   id: 'cto',
  //   name: 'Michael Chen',
  //   role: 'CTO',
  //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   bio: 'Michael Chen brings over 15 years of experience in cloud architecture and AI technologies. He has led digital transformation initiatives for Fortune 500 companies and specializes in building scalable, secure communication platforms. Michael holds multiple cloud certifications and has been instrumental in developing our AI-powered solutions.'
  // },
  // {
  //   id: 'vp-solutions',
  //   name: 'Emily Rodriguez',
  //   role: 'VP of Solutions',
  //   image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   bio: 'Emily Rodriguez is a specialist in unified communications and contact center solutions with over 12 years of experience. She has successfully led numerous large-scale UC implementations and has deep expertise in change management and user adoption strategies. Emily is passionate about delivering solutions that truly transform how organizations communicate.'
  // }
];