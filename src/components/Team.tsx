import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Team: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const doctors = [
    {
      id: 1,
      slug: "DrMohamed",
      nameAr: "د محمد علي بليله",
      nameEn: "Dr. Mohamed Ali Belila",
      titleAr: "استشاري طب وجراحة الفم والاسنان",
      titleEn: "Consultant of Oral & Dental Surgery",
      descriptionAr: "خبرة اكثر من ١٥ عام في تجميل وتركيبات الاسنان - حاصل علي زمالة زراعة الأسنان من جامعة هامبرج الالمانية - جامعة جينوا الايطالية",
      descriptionEn: "More than 15 years of experience in dental cosmetics and prosthetics - Fellowship in Dental Implants from Hamburg University Germany - Giovanna University Italy",
      image: "https://i.postimg.cc/Dz4TX7Kk/Dr-Belila.png"
    },
    {
      id: 2,
      slug: "DrHaidy",
      nameAr: "د هايدي السجاعي",
      nameEn: "Dr. Haidy El-Sogaaie",
      titleAr: "اخصائى طب أسنان الاطفال",
      titleEn: "Pediatric Dentistry Specialist",
      descriptionAr: "عضو الجمعية المصرية لطب أسنان الاطفال وذوى الاحتياجات الخاصة - حاصلة على الزمالة البريطانية المتخصصة جامعة ايرلندا",
      descriptionEn: "Member of the Egyptian Society for Pediatric Dentistry and Special Needs - British Fellowship from Ireland University",
      image: "https://i.postimg.cc/FRjXTGRT/Dr-Haidy.png"
    },
    {
      id: 3,
      slug: "DrEman",
      nameAr: "د ايمان عواد",
      nameEn: "Dr. Eman Awad",
      titleAr: "اخصائي التركيبات المتحركة",
      titleEn: "Removable Prosthetics Specialist",
      descriptionAr: "ماجستير الاستعاضة الصناعية والتركيبات المتحركة والتركيبات فوق الغرسات",
      descriptionEn: "Master's in Prosthetic Dentistry, Removable Prosthetics and Implant-Supported Prosthetics",
      image: "https://i.postimg.cc/k4rdNLnV/Dr-Eman.png"
    },
    {
      id: 4,
      slug: "DrIssa",
      nameAr: "د ابراهيم عيسي",
      nameEn: "Dr. Ibrahim Issa",
      titleAr: "أخصائي تقويم الاسنان",
      titleEn: "Orthodontics Consultant",
      descriptionAr: "حاصل علي الزمالة البريطانية المتخصصة لتقويم الاسنان بايرلندا",
      descriptionEn: "British Fellowship in Orthodontics from Ireland",
      image: "https://i.postimg.cc/8c4QS5LW/Dr-Issa.png"
    },
    {
      id: 5,
      slug: "DrOsama",
      nameAr: "د أسامة قاسم",
      nameEn: "Dr. Osama Kassem",
      titleAr: "اخصائي طب الفم والاسنان",
      titleEn: "Oral & Dental Medicine Specialist",
      descriptionAr: "ماجستير علاج الجذور جامعة طنطا",
      descriptionEn: "Master's in Endodontics from Tanta University",
      image: "https://i.postimg.cc/HsSDvrY1/Dr-Osama.png"
    },
    {
      id: 6,
      slug: "DrKozaa",
      nameAr: "د محمد عبد العال قوزع",
      nameEn: "Dr. Mohamed Abdel Aal Kozaa",
      titleAr: "أخصائي علاج الجذور",
      titleEn: "Endodontics Consultant",
      descriptionAr: "زميل كلية الجراحين الملكية بأدنبرة وحاصل على الزمالة البريطانية المتخصصة في علاج الجذور",
      descriptionEn: "Fellow of Royal College of Surgeons Edinburgh and British Fellowship in Endodontics",
      image: "https://i.postimg.cc/QxNZqQrq/Dr-Kozaa.png"
    },
    {
      id: 7,
      slug: "DrBelal",
      nameAr: "د بلال البديوي",
      nameEn: "Dr. Belal El-Badawy",
      titleAr: "اخصائي طب الفم والأسنان",
      titleEn: "Oral & Dental Medicine Specialist",
      descriptionAr: "زمالة بريطانية في تقويم الأسنان",
      descriptionEn: "British Fellowship in Orthodontics",
      image: "https://i.postimg.cc/BQN4WhCy/Dr-Belal.png"
    },
    {
      id: 8,
      slug: "DrKareem",
      nameAr: "د كريم هشام",
      nameEn: "Dr. Kareem Hesham",
      titleAr: "اخصائي طب الفم والأسنان",
      titleEn: "Oral & Dental Medicine Specialist",
      descriptionAr: "متخصص في طب الفم والأسنان",
      descriptionEn: "Specialist in Oral & Dental Medicine",
      image: "https://i.postimg.cc/XNk0F2tJ/Dr-Kareem.png"
    },
    {
      id: 9,
      slug: "DrAhmed",
      nameAr: "د احمد البكري",
      nameEn: "Dr. Ahmed El-Bakry",
      titleAr: "اخصائي طب الفم والاسنان والحشوات التجميلية",
      titleEn: "Oral & Dental Medicine and Cosmetic Fillings Specialist",
      descriptionAr: "متخصص في طب الفم والاسنان والحشوات التجميلية",
      descriptionEn: "Specialist in Oral & Dental Medicine and Cosmetic Fillings",
      image: "https://i.postimg.cc/Y0zkC8Bv/Dr-Bakry.png"
    },
    {
      id: 10,
      slug: "DrAmal",
      nameAr: "د امل رقية",
      nameEn: "Dr. Amal Rokaya",
      titleAr: "اخصائي طب الفم والاسنان",
      titleEn: "Oral & Dental Medicine Specialist",
      descriptionAr: "متخصصة في طب الفم والاسنان",
      descriptionEn: "Specialist in Oral & Dental Medicine",
      image: "https://i.postimg.cc/ZKJ4Mk6p/Dr-Amal.png"
    },
    {
      id: 11,
      slug: "DrRania",
      nameAr: "د رانيا الشرقاوي",
      nameEn: "Dr. Rania El-Sharkawy",
      titleAr: "اخصائي طب الفم والاسنان",
      titleEn: "Oral & Dental Medicine Specialist",
      descriptionAr: "دبلومة ادارة اعمال ونظم وتخطيط",
      descriptionEn: "Diploma in Business Administration, Systems and Planning",
      image: "https://i.postimg.cc/2SMpmgLH/Dr-Rania.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  const handleManualNavigation = (direction: 'next' | 'prev' | 'dot') => {
    setIsPaused(true);
    if (direction === 'next') nextSlide();
    if (direction === 'prev') prevSlide();
    if (direction === 'dot') {
      // Resume auto-sliding after 5 seconds of inactivity
      setTimeout(() => setIsPaused(false), 5000);
    }
  };

  // Swipe functions for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleManualNavigation('next');
    }
    if (isRightSwipe) {
      handleManualNavigation('prev');
    }
  };

  // Auto-slide every 10 seconds (paused when user interacts)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentDoctor = doctors[currentSlide];

  return (
    <section className="w-full bg-[#01479e] py-20">
      {/* Section Header */}
      <div className="text-center mb-16 px-4">
        <h2 className={`text-5xl font-bold text-white mb-6 ${
          language === 'ar' ? 'font-cairo' : 'font-montserrat'
        }`}>
          {language === 'ar' ? 'تعرف على فريقنا المتخصص' : 'Meet Our Expert Team'}
        </h2>
        <p className={`text-xl text-white/90 max-w-3xl mx-auto ${
          language === 'ar' ? 'font-cairo' : 'font-montserrat'
        }`}>
          {language === 'ar' 
            ? 'نقدم مركز الدكتور محمد بليلة رعاية شاملة للأسنان باستخدام أحدث المعدات وأخصائيين ذوي خبرة' 
            : 'Dr. Mohamed Belila Dental Center provides comprehensive dental care using the latest equipment and experienced specialists'
          }
        </p>
      </div>

      {/* Single Slide Display */}
      <div className="max-w-6xl mx-auto px-4">
        <div 
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 select-none touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Doctor Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={currentDoctor.image}
              alt={language === 'ar' ? currentDoctor.nameAr : currentDoctor.nameEn}
              className="w-72 h-80 md:w-80 md:h-96 object-cover object-top"
              loading="lazy"
            />
          </div>
          
          {/* Doctor Info */}
          <div className={`md:w-1/2 text-center md:text-left ${language === 'ar' ? 'md:text-right' : ''}`}>
            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 ${
              language === 'ar' ? 'font-cairo' : 'font-montserrat'
            }`}>
              {language === 'ar' ? currentDoctor.nameAr : currentDoctor.nameEn}
            </h3>
            
            <p className={`text-xl md:text-2xl text-[#54c9ea] mb-6 font-semibold ${
              language === 'ar' ? 'font-cairo' : 'font-montserrat'
            }`}>
              {language === 'ar' ? currentDoctor.titleAr : currentDoctor.titleEn}
            </p>
            
            <p className={`text-lg md:text-xl text-white/95 leading-relaxed mb-8 ${
              language === 'ar' ? 'font-cairo' : 'font-montserrat'
            }`}>
              {language === 'ar' ? currentDoctor.descriptionAr : currentDoctor.descriptionEn}
            </p>

            {/* See More Button */}
            <button
              onClick={() => navigate(`/doctor/${currentDoctor.slug}`)}
              className={`inline-flex items-center gap-2 bg-[#54c9ea] hover:bg-[#4bb8d9] text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}
            >
              {language === 'ar' ? 'شاهد المزيد' : 'See More'}
              <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Container */}
      <div className="relative mt-8">
        {/* Side Arrows */}
        <button
          onClick={() => handleManualNavigation('prev')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 z-10"
          aria-label="Previous doctor"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={() => handleManualNavigation('next')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 z-10"
          aria-label="Next doctor"
        >
          <ChevronRight size={24} />
        </button>

                 {/* Dots Navigation */}
         <div className="flex justify-center">
           {doctors.map((_, index) => (
             <button
               key={index}
               onClick={() => {
                 setCurrentSlide(index);
                 handleManualNavigation('dot');
               }}
               className={`w-4 h-4 rounded-full transition-all duration-300 border-2 mx-1.5 ${
                 index === currentSlide 
                   ? 'bg-white border-white scale-125' 
                   : 'bg-transparent border-white/50 hover:border-white'
               }`}
               aria-label={`Go to doctor ${index + 1}`}
             />
           ))}
         </div>
      </div>
    </section>
  );
};

export default Team;