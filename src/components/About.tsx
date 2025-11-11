import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Award, number: 15, suffix: '+', labelKey: 'about.experience' },
    { icon: Heart, number: 10000, suffix: '+', labelKey: 'about.patients' },
    { icon: Users, number: 11, suffix: '+', labelKey: 'about.specialists' },
  ];

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter component for animated numbers
  const AnimatedCounter: React.FC<{ number: number; suffix: string; isVisible: boolean }> = ({ number, suffix, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [number, isVisible]);

    const formatNumber = (num: number) => {
      if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
      }
      return num.toString();
    };

    return (
      <span>{formatNumber(count)}{suffix}</span>
    );
  };

  return (
    <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Content */}
            <div className="space-y-8 max-w-4xl mx-auto">
              <div>
                <h2 className={`text-4xl lg:text-5xl font-bold text-gray-800 mb-6 ${
                  language === 'ar' ? 'font-cairo' : 'font-montserrat'
                }`}>
                  {t('about.title')}
                </h2>
                
                <p className={`text-lg text-gray-600 leading-relaxed ${
                  language === 'ar' ? 'font-cairo' : 'font-montserrat'
                }`}>
                  {t('about.description')}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#01479e] text-white rounded-full mb-4">
                        <Icon size={32} />
                      </div>
                      <div className={`text-3xl font-bold text-[#01479e] mb-2 ${
                        language === 'ar' ? 'font-cairo' : 'font-montserrat'
                      }`}>
                        <AnimatedCounter 
                          number={stat.number} 
                          suffix={stat.suffix} 
                          isVisible={isVisible} 
                        />
                      </div>
                      <div className={`text-gray-600 ${
                        language === 'ar' ? 'font-cairo' : 'font-montserrat'
                      }`}>
                        {t(stat.labelKey)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;