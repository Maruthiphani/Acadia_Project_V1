import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ServicesIndex from './pages/Services/index';
import ServiceDetail from './pages/Services/[slug]';
import SolutionsIndex from './pages/Solutions/index';
import SolutionDetail from './pages/Solutions/[slug]';
import PartnersPage from './pages/PartnersPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useScrollSpy(['about', 'services', 'solutions', 'partners', 'resources', 'contact'], 100);


  // Update current page based on route and scroll spy
  // useEffect(() => {
  //   const path = location.pathname;
  //   if (path === '/') {
  //     if (activeSection === 'services') {
  //       setCurrentPage('services');
  //     } else if (activeSection === 'solutions') {
  //       setCurrentPage('solutions');
  //     } else {
  //       setCurrentPage('home');
  //     }
  //   } else if (path.startsWith('/services')) {
  //     setCurrentPage('services');
  //   } else if (path.startsWith('/solutions')) {
  //     setCurrentPage('solutions');
  //   } else if (path === '/about') {
  //     setCurrentPage('about');
  //   } else if (path === '/partners') {
  //     setCurrentPage('partners');
  //   } else if (path === '/resources') {
  //     setCurrentPage('resources');
  //   } else if (path === '/contact') {
  //     setCurrentPage('contact');
  //   }
  // }, [location.pathname, activeSection]);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      if (activeSection === 'about') {
        setCurrentPage('about');
      } else if (activeSection === 'services') {
        setCurrentPage('services');
      } else if (activeSection === 'solutions') {
        setCurrentPage('solutions');
      } else if (activeSection === 'partners') {
        setCurrentPage('partners');
      } else if (activeSection === 'resources') {
        setCurrentPage('resources');
      } else if (activeSection === 'contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    } else if (path.startsWith('/services')) {
      setCurrentPage('services');
    } else if (path.startsWith('/solutions')) {
      setCurrentPage('solutions');
    } else if (path === '/about') {
      setCurrentPage('about');
    } else if (path === '/partners') {
      setCurrentPage('partners');
    } else if (path === '/resources') {
      setCurrentPage('resources');
    } else if (path === '/contact') {
      setCurrentPage('contact');
    }
  }, [location.pathname, activeSection]);



  // const handleNavClick = (pageId: string) => {
  //   if (pageId === 'home') {
  //     navigate('/');
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   } else if (pageId === 'services') {
  //     if (location.pathname === '/') {
  //       // Scroll to services section on home page
  //       const element = document.getElementById('services');
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     } else {
  //       navigate('/services');
  //     }
  //   } 
  //  else if (pageId === 'solutions') {
  //     if (location.pathname === '/') {
  //       // Scroll to solutions section on home page
  //       const element = document.getElementById('solutions');
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     } else {
  //       navigate('/solutions');
  //     }
  //   } else {
  //     navigate(`/${pageId}`);
  //   }

  // };

  const handleNavClick = (pageId: string) => {
    if (pageId === 'home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pageId === 'about') {
      if (location.pathname === '/') {
        // Scroll to about section on home page
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/about');
      }
    } else if (pageId === 'services') {
      if (location.pathname === '/') {
        // Scroll to services section on home page
        const element = document.getElementById('services');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/services');
      }
    } else if (pageId === 'solutions') {
      if (location.pathname === '/') {
        // Scroll to solutions section on home page
        const element = document.getElementById('solutions');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/solutions');
      }
    } else if (pageId === 'partners') {
      if (location.pathname === '/') {
        // Scroll to partners section on home page
        const element = document.getElementById('partners');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/partners');
      }
    } else if (pageId === 'resources') {
      if (location.pathname === '/') {
        // Scroll to resources section on home page
        const element = document.getElementById('resources');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/resources');
      }
    } else if (pageId === 'contact') {
      if (location.pathname === '/') {
        // Scroll to contact section on home page
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/contact');
      }
    } else {
      navigate(`/${pageId}`);
    }
  };




  const handleFooterNavClick = (pageId: string) => {
    navigate(`/${pageId === 'home' ? '' : pageId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onNavClick={handleNavClick}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/solutions" element={<SolutionsIndex />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer setCurrentPage={handleFooterNavClick} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;