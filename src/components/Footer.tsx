import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  
  // Check if we're on the main page
  const isMainPage = location.pathname === '/';
  
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
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="https://i.postimg.cc/dV3jdP2w/Icon.png"
                  alt="Dr. Mohamed Belila Dental Center"
                  className="h-16 w-auto"
                />
              </div>
              <p className={`text-gray-400 leading-relaxed ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {language === 'ar' 
                  ? 'مركز الدكتور محمد بليلة التخصصي لطب وتجميل الأسنان في طنطا، مصر.'
                  : 'Dr. Mohamed Belila Specialized Dental Center for dental care and cosmetic dentistry in Tanta, Egypt.'
                }
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <ul className="space-y-2">
                {[
                  { key: 'nav.home', href: '#home' },
                  { key: 'nav.about', href: '#about' },
                  { key: 'nav.team', href: '#team' },
                  { key: 'nav.gallery', href: '#gallery' },
                  { key: 'nav.contact', href: '#contact' },
                ].map(link => (
                  <li key={link.key}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className={`text-gray-400 hover:text-white transition-colors duration-300 text-left ${
                        language === 'ar' ? 'font-cairo' : 'font-montserrat'
                      }`}
                    >
                      {t(link.key)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {t('contact.title')}
              </h3>
              <div className="space-y-3 text-gray-400">
                <p className={language === 'ar' ? 'font-cairo' : 'font-montserrat'}>
                  <a 
                    href="https://maps.app.goo.gl/kfB28hEE9jw6fvd87" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {t('contact.location')}
                  </a>
                </p>
                <p className={`text-sm ${language === 'ar' ? 'font-cairo' : 'font-montserrat'}`}>
                  <a href="tel:+20403586700" className="hover:text-white transition-colors duration-300">+2 0403586700</a><br />
                  <a href="tel:01146146144" className="hover:text-white transition-colors duration-300">01146146144</a><br />
                  <a href="tel:01223980922" className="hover:text-white transition-colors duration-300">01223980922</a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className={`text-gray-400 text-sm ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                © {currentYear} {language === 'ar' ? 'مركز الدكتور محمد بليلة التخصصي' : 'Dr. Mohamed Belila Dental Center'}. {t('footer.rights')}.
              </p>
              
              <p className={`text-gray-400 text-sm ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {language === 'ar' ? 'تم تطوير الموقع بواسطة: ' : 'Website made by: '}
                <a 
                  href="https://promptmarketingagency.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline"
                >
                  Prompt Marketing Agency
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;