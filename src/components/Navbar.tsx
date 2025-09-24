// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { useLocation } from 'react-router-dom';

// interface NavbarProps {
//   currentPage: string;
//   setCurrentPage: (page: string) => void;
//   onNavClick: (pageId: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, onNavClick }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'services', label: 'Services' },
//     { id: 'solutions', label: 'Solutions' },
//     { id: 'partners', label: 'Partners' },
//     { id: 'resources', label: 'Resources' },
//     { id: 'about', label: 'About' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavClick = (pageId: string) => {
//     onNavClick(pageId);
//     setIsOpen(false);
//   };

//   const getNavbarBg = () => {
//     if (isHomePage) {
//       return isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent';
//     }
//     return 'bg-brand-navy/95 backdrop-blur-sm shadow-lg';
//   };

//   const getTextColor = () => {
//     if (isHomePage) {
//       return isScrolled ? 'text-gray-700' : 'text-white';
//     }
//     return 'text-white';
//   };

//   const getHoverColor = () => {
//     if (isHomePage) {
//       return isScrolled ? 'hover:text-brand-navy' : 'hover:text-brand-light';
//     }
//     return 'hover:text-brand-light';
//   };

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${getNavbarBg()}`}>
//       <div className="flex items-center justify-between h-16 md:h-20">
//         {/* <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
//              <img src="/FullLogo.jpg" alt="Acadia Consultants" className="h-10 md:h-12 w-auto" /> 
//             <img src="/FullLogo.jpg" alt="Acadia Consultants" className="h-16 w-48 md:h-20 md:w-64 object-contain" />

//           </div> */}
//         {/* <div
//             className="flex-shrink-0 cursor-pointer flex items-start"
//             onClick={() => handleNavClick('home')}
//           >
           
//             <img
//               src="/FullLogo_Acadia.jpg"
//               alt="Acadia Consultants Full Logo"
//               className="h-16 md:h-20 w-auto object-contain"
//             />

           
//             <img
//               src="/FullLogo_Acadia_1.jpg"
//               alt="Acadia Consultants Secondary Logo"
//               className="h-16 md:h-20 w-auto object-contain"
//             />
//           </div> */}

//         {/* LOGO AREA (always extreme left) */}
//         <div
//           className="flex-shrink-0 cursor-pointer flex items-start pl-4 ml-0"
//           onClick={() => handleNavClick('home')}
//         >
//           {/* Left Logo */}
//           <img
//             src="/FullLogo_Acadia.jpg"
//             alt="Acadia Consultants Full Logo"
//             className="h-12 md:h-16 w-auto object-contain"
//           />

//           {/* Right Logo */}
//           <img
//             src="/FullLogo_Acadia_1.jpg"
//             alt="Acadia Consultants Secondary Logo"
//             className="h-12 md:h-16 w-auto object-contain"
//           />
//         </div>

//         <div className="flex-1">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end pr-4">
//             <div className="hidden md:block">
//               <div className="ml-4 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
//                 {navItems.map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => handleNavClick(item.id)}
//                     // className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative ${currentPage === item.id
//                     //   ? isHomePage && isScrolled ? 'text-brand-navy' : 'text-brand-light'
//                     //   : `${getTextColor()} ${getHoverColor()}`
//                     //   }`}
//                     className={`px-2 lg:px-3 py-2 text-sm lg:text-lg font-semibold transition-all duration-200 relative ${currentPage === item.id
//                       ? isHomePage && isScrolled ? 'text-brand-navy' : 'text-brand-light'
//                       : `${getTextColor()} ${getHoverColor()}`
//                     }`}
//                     aria-current={currentPage === item.id ? 'page' : undefined}
//                   >
//                     {item.label}
//                     {currentPage === item.id && (
//                       <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-100 transition-transform duration-200 ${isHomePage && isScrolled ? 'bg-brand-navy' : 'bg-brand-light'
//                         }`} />
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="md:hidden pr-4">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${getTextColor()} ${getHoverColor()}`}
//             aria-expanded="false"
//             aria-label="Toggle navigation menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className={`md:hidden border-t ${isHomePage ? 'bg-white border-gray-200' : 'bg-brand-navy border-brand-light/20'
//           }`}>
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.id)}
//                 className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${currentPage === item.id
//                   ? isHomePage ? 'text-brand-navy bg-brand-light/20' : 'text-brand-light bg-white/10'
//                   : isHomePage ? 'text-gray-700 hover:text-brand-navy hover:bg-gray-50' : 'text-white hover:text-brand-light hover:bg-white/10'
//                   }`}
//                 aria-current={currentPage === item.id ? 'page' : undefined}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav >
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onNavClick: (pageId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'partners', label: 'Partners' },
    { id: 'resources', label: 'Resources' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavClick(pageId);
    setIsOpen(false); // close mobile menu after click
  };

  const getNavbarBg = () => {
    if (isHomePage) {
      return isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent';
    }
    return 'bg-brand-navy/95 backdrop-blur-sm shadow-lg';
  };

  const getTextColor = () => {
    if (isHomePage) {
      return isScrolled ? 'text-gray-700' : 'text-white';
    }
    return 'text-white';
  };

  const getHoverColor = () => {
    if (isHomePage) {
      return isScrolled ? 'hover:text-brand-navy' : 'hover:text-brand-light';
    }
    return 'hover:text-brand-light';
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${getNavbarBg()}`}>
      <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">

        {/* Logo - Always Left */}
        <div
          className="flex-shrink-0 cursor-pointer flex items-center"
          onClick={() => handleNavClick('home')}
        >
          <img
            src="/FullLogo_Acadia.jpg"
            alt="Acadia Consultants Full Logo"
            className="h-10 md:h-14 w-auto object-contain"
          />
          <img
            src="/FullLogo_Acadia_1.jpg"
            alt="Acadia Consultants Secondary Logo"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm lg:text-lg font-medium transition-all duration-200 relative ${
                currentPage === item.id
                  ? isHomePage && isScrolled
                    ? 'text-brand-navy'
                    : 'text-brand-light'
                  : `${getTextColor()} ${getHoverColor()}`
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-200 ${
                    isHomePage && isScrolled ? 'bg-brand-navy' : 'bg-brand-light'
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger - Right Side */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${getTextColor()} ${getHoverColor()}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden border-t ${
            isHomePage ? 'bg-white border-gray-200' : 'bg-brand-navy border-brand-light/20'
          }`}
        >
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? isHomePage
                      ? 'text-brand-navy bg-brand-light/20'
                      : 'text-brand-light bg-white/10'
                    : isHomePage
                    ? 'text-gray-700 hover:text-brand-navy hover:bg-gray-50'
                    : 'text-white hover:text-brand-light hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
