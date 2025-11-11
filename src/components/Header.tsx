import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Check if we're on the main page
  const isMainPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.team', href: '#team' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const handleNavigation = (href: string) => {
    if (isMainPage) {
      // If on main page, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on doctor page, navigate to main page and then scroll
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={isScrolled ? "https://i.postimg.cc/BnzcBYpD/Icon-Blue.png" : "https://i.postimg.cc/dV3jdP2w/Icon.png"}
              alt="Dr. Mohamed Belila Dental Center"
              className="h-12 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${language === 'ar' ? 'gap-8' : 'space-x-8'}`}>
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.href)}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } ${language === 'ar' ? 'font-cairo' : 'font-montserrat'}
                after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 
                after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                hover:after:w-full`}
              >
                {t(item.key)}
              </button>
            ))}
            
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                isScrolled 
                  ? 'border-[#01479e] text-[#01479e] hover:bg-[#01479e] hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-[#01479e]'
              } ${language === 'ar' ? 'font-cairo' : 'font-montserrat'}`}
            >
              {language === 'en' ? <span className="font-cairo">العربية</span> : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded-full border text-sm transition-all duration-300 ${
                isScrolled 
                  ? 'border-[#01479e] text-[#01479e]' 
                  : 'border-white text-white'
              } ${language === 'ar' ? 'font-cairo' : 'font-montserrat'}`}
            >
              {language === 'en' ? 'ع' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.href)}
                className={`block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-300 ${
                  language === 'ar' ? 'font-cairo' : 'font-montserrat'
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;