import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Reviews: React.FC = () => {
  const { language } = useLanguage();
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      nameAr: "أحمد محمد",
      nameEn: "Ahmed Mohamed",
      rating: 5,
      textAr: "تجربة رائعة في مركز الدكتور محمد بليلة. الفريق متعاون جداً والنتيجة كانت مذهلة. أنصح الجميع بالتعامل معهم.",
      textEn: "Amazing experience at Dr. Mohamed Belila's center. The team is very cooperative and the result was stunning. I recommend everyone to deal with them.",
      dateAr: "منذ شهرين",
      dateEn: "2 months ago"
    },
    {
      id: 2,
      nameAr: "سارة أحمد",
      nameEn: "Sarah Ahmed",
      rating: 5,
      textAr: "أفضل مركز أسنان في طنطا. الدكتور محمد بليلة محترف جداً والفريق كله متعاون. النتيجة تجاوزت توقعاتي.",
      textEn: "The best dental center in Tanta. Dr. Mohamed Belila is very professional and the whole team is cooperative. The result exceeded my expectations.",
      dateAr: "منذ 3 أشهر",
      dateEn: "3 months ago"
    },
    {
      id: 3,
      nameAr: "محمد علي",
      nameEn: "Mohamed Ali",
      rating: 5,
      textAr: "زراعة الأسنان كانت تجربة سلسة جداً. الدكتور بليلة خبير في مجاله والفريق الطبي ممتاز.",
      textEn: "Dental implant was a very smooth experience. Dr. Belila is an expert in his field and the medical team is excellent.",
      dateAr: "منذ 4 أشهر",
      dateEn: "4 months ago"
    },
    {
      id: 4,
      nameAr: "فاطمة حسن",
      nameEn: "Fatima Hassan",
      rating: 5,
      textAr: "تقويم الأسنان مع الدكتور بليلة كان اختيار ممتاز. النتيجة جميلة جداً وأنا سعيدة بالخدمة.",
      textEn: "Orthodontics with Dr. Belila was an excellent choice. The result is very beautiful and I'm happy with the service.",
      dateAr: "منذ 5 أشهر",
      dateEn: "5 months ago"
    },
    {
      id: 5,
      nameAr: "علي محمود",
      nameEn: "Ali Mahmoud",
      rating: 5,
      textAr: "تجربة تجميل الأسنان كانت رائعة. الدكتور بليلة وفريقه محترفون جداً والنتيجة مذهلة.",
      textEn: "Cosmetic dentistry experience was amazing. Dr. Belila and his team are very professional and the result is stunning.",
      dateAr: "منذ 6 أشهر",
      dateEn: "6 months ago"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
                          index < rating ? 'text-[#54c9ea] fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold text-gray-800 mb-6 ${
            language === 'ar' ? 'font-cairo' : 'font-montserrat'
          }`}>
            {language === 'ar' ? 'آراء المرضى' : 'Patient Reviews'}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${
            language === 'ar' ? 'font-cairo' : 'font-montserrat'
          }`}>
            {language === 'ar' 
              ? 'اكتشف ما يقوله مرضانا عن تجربتهم معنا' 
              : 'Discover what our patients say about their experience with us'
            }
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`transition-all duration-700 ease-in-out ${
                    index === currentReview
                      ? 'opacity-100 transform translate-x-0 scale-100'
                      : 'opacity-0 transform translate-x-full scale-95 absolute top-0 left-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#54c9ea]/20 to-[#4bb8d9]/30 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                    
                    {/* Quote Icon */}
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-full">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className={`text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8 ${
                        language === 'ar' ? 'font-cairo' : 'font-montserrat'
                      }`}>
                        {language === 'ar' ? review.textAr : review.textEn}
                      </p>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        <div className="flex space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="text-center">
                        <h4 className={`text-xl font-semibold text-gray-800 mb-2 ${
                          language === 'ar' ? 'font-cairo' : 'font-montserrat'
                        }`}>
                          {language === 'ar' ? review.nameAr : review.nameEn}
                        </h4>
                        <p className={`text-gray-500 ${
                          language === 'ar' ? 'font-cairo' : 'font-montserrat'
                        }`}>
                          {language === 'ar' ? review.dateAr : review.dateEn}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className={`text-gray-600 ${
              language === 'ar' ? 'font-cairo' : 'font-montserrat'
            }`}>
              {language === 'ar' ? 'مريض راضي' : 'Happy Patients'}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
            <p className={`text-gray-600 ${
              language === 'ar' ? 'font-cairo' : 'font-montserrat'
            }`}>
              {language === 'ar' ? 'تقييم متوسط' : 'Average Rating'}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <p className={`text-gray-600 ${
              language === 'ar' ? 'font-cairo' : 'font-montserrat'
            }`}>
              {language === 'ar' ? 'رضا المرضى' : 'Patient Satisfaction'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
