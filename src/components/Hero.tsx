import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-[#01479e]">
      {/* Mobile Layout */}
      <div className="block md:hidden pt-20">
        {/* Mobile Hero Content */}
        <div className="px-4 pb-8">
          {/* Mobile Image */}
          <div className="flex justify-center mb-6">
            <img
              src="https://i.postimg.cc/SxJ214Ns/all-mobile.png"
              alt="Dr. Mohamed Belila Dental Team"
              className="w-full max-w-xs object-contain"
            />
          </div>

          {/* Mobile Text Content */}
          <div className="text-center">
            <h1 className={`text-2xl font-bold text-white mb-3 leading-tight ${
              language === 'ar' ? 'font-cairo' : 'font-montserrat'
            }`}>
              {t('hero.title')}
            </h1>
            
            <p className={`text-base text-white/90 mb-6 leading-relaxed ${
              language === 'ar' ? 'font-cairo' : 'font-montserrat'
            }`}>
              {t('hero.subtitle')}
            </p>

            <button
              onClick={scrollToContact}
              className={`bg-white text-[#01479e] px-6 py-3 rounded-full text-base font-semibold 
                hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 
                shadow-lg ${language === 'ar' ? 'font-cairo' : 'font-montserrat'}`}
            >
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative h-screen flex items-center justify-center overflow-hidden">
        {/* Desktop Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/k5L71Byg/all.png"
            alt="Dr. Mohamed Belila Dental Team"
            className="w-full h-full object-contain max-w-6xl"
          />
        </div>

        {/* Desktop Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-20 pb-8">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className={`text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {t('hero.title')}
              </h1>
              
              <p className={`text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {t('hero.subtitle')}
              </p>

              <button
                onClick={scrollToContact}
                className={`bg-white text-[#01479e] px-6 py-3 rounded-full text-base font-semibold 
                  hover:bg-[#01479e] hover:text-white transform hover:scale-105 transition-all duration-300 
                  shadow-lg hover:shadow-xl ${language === 'ar' ? 'font-cairo' : 'font-montserrat'}`}
              >
                {t('hero.cta')}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;