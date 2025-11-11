import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  onLoad?: () => void;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, onLoad }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoAnimating, setIsAutoAnimating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  const handleMouseDown = () => {
    setIsDragging(true);
    setIsAutoAnimating(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
    setIsAutoAnimating(false); // Stop auto-animation when user interacts
  };

  const handleMouseEnter = () => {
    setIsAutoAnimating(false); // Stop auto-animation when hovering
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    // Don't resume auto-animation immediately, let user control it
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
    setIsAutoAnimating(false); // Stop auto-animation when user interacts
  };

  // Auto-animation effect
  useEffect(() => {
    if (!isAutoAnimating) return;
    
    let direction = 1; // 1 for right, -1 for left
    let position = 50;
    
    const animate = () => {
      if (!isAutoAnimating) return;
      
      position += direction * 0.2; // Slower, smoother movement
      
      if (position >= 80) {
        direction = -1;
        position = 80;
      } else if (position <= 20) {
        direction = 1;
        position = 20;
      }
      
      setSliderPosition(position);
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [isAutoAnimating]);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalMouseUp);
    
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
          <div
        ref={containerRef}
        className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={t('gallery.after')}
          className="w-full h-full object-cover"
          onLoad={onLoad}
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {t('gallery.after')}
        </div>
      </div>

      {/* Before Image (Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={t('gallery.before')}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {t('gallery.before')}
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Slider Handle */}
      <div
        className="absolute top-1/2 w-8 h-8 bg-white rounded-full shadow-lg transform -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center">
          <div className="w-2 h-0.5 bg-gray-400"></div>
        </div>
        {/* Auto-animation indicator */}
        {isAutoAnimating && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
            Auto
          </div>
        )}
      </div>
    </div>
  );
};

const SmileGallery: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentCase, setCurrentCase] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const cases = [
    {
      before: 'https://i.postimg.cc/TYMtfKGs/case_A.png',
      after: 'https://i.postimg.cc/TYMtfKGs/case_A.png',
      id: 1
    },
    {
      before: 'https://i.postimg.cc/RZgb5LRV/2A.png',
      after: 'https://i.postimg.cc/BQcVN0PF/2B.png',
      id: 2
    },
    {
      before: 'https://i.postimg.cc/LshQHgCk/3A.png',
      after: 'https://i.postimg.cc/C5pcHPFJ/3B.png',
      id: 3
    },
    {
      before: 'https://i.postimg.cc/fL9HdnhJ/4A.png',
      after: 'https://i.postimg.cc/8C3Ksk92/4B.png',
      id: 4
    },
    {
      before: 'https://i.postimg.cc/sf56DrcL/5A.png',
      after: 'https://i.postimg.cc/3JBtmFzC/5B.png',
      id: 5
    },
    {
      before: 'https://i.postimg.cc/vT73PrTy/6A.png',
      after: 'https://i.postimg.cc/qM0mN5Dv/6B.png',
      id: 6
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentCase(prev => (prev + 1) % cases.length);
    }, 8000); // Increased to 8 seconds to allow more time for before/after animation

    return () => clearInterval(interval);
  }, [cases.length, imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-800 mb-4 ${
              language === 'ar' ? 'font-cairo' : 'font-montserrat'
            }`}>
              {t('gallery.title')}
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${
              language === 'ar' ? 'font-cairo' : 'font-montserrat'
            }`}>
              {t('gallery.subtitle')}
            </p>
          </div>

          {/* Main Slider */}
          <div className="max-w-3xl mx-auto mb-8">
            <BeforeAfterSlider
              beforeImage={cases[currentCase].before}
              afterImage={cases[currentCase].after}
              onLoad={handleImageLoad}
            />
            
            {/* Case Description */}
            <div className={`mt-6 text-center ${language === 'ar' ? 'font-cairo' : 'font-montserrat'}`}>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t(`case.${cases[currentCase].id}.title`)}
              </h3>
              {t(`case.${cases[currentCase].id}.description`) && (
                <div className="text-gray-600 max-w-2xl mx-auto">
                  {t(`case.${cases[currentCase].id}.description`).split('\n').map((line, index) => (
                    <p key={index} className="mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 overflow-x-auto pb-4">
            {cases.map((caseItem, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  currentCase === index 
                    ? 'border-[#01479e] ring-4 ring-[#01479e]/30' 
                    : 'border-gray-300 hover:border-[#01479e]'
                }`}
              >
                <img
                  src={caseItem.after}
                  alt={`Case ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 gap-3">
            {cases.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentCase === index ? 'bg-[#01479e]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmileGallery;