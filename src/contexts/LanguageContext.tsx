import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.team': 'Our Team',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Dr. Mohamed Belila Dental Center',
    'hero.subtitle': 'Expert Dental Care in Tanta, Egypt',
    'hero.cta': 'Book Appointment',
    
    // About Section
    'about.title': 'About Our Center',
    'about.description': 'Dr. Mohamed Belila Dental Center provides comprehensive dental care with state-of-the-art equipment and experienced specialists. We offer a wide range of services including cosmetic dentistry, dental implants, orthodontics, and pediatric dentistry.',
    'about.experience': 'Years of Excellence',
    'about.patients': 'Happy Patients',
    'about.specialists': 'Expert Specialists',
    
    // Team Section
    'team.title': 'Meet Our Expert Team',
    'team.subtitle': 'Professional specialists dedicated to your oral health',
    
    // Gallery Section
    'gallery.title': 'Smile Transformations',
    'gallery.subtitle': 'See the amazing results we achieve for our patients',
    'gallery.before': 'Before',
    'gallery.after': 'After',
    
    // Case Descriptions
    'case.1.title': 'Anterior Tooth Implant and Missing Tooth Replacement',
    'case.1.description': 'Same tooth color shade / Natural smile',
    'case.2.title': 'Dr. Ahmad Al-Bakri - Molar Rehabilitation with Post and Crown',
    'case.2.description': 'First Stage: Re-evaluation of molar after root canal treatment to determine the best type of post and suitable crown\nSecond Stage: Placement of first stage fiber post to connect molar parts/walls together\nThird Stage: Final touches of the post ready and taking impression for crown placement\nFourth Stage: Partial Emax crown from strongest and most durable materials - Preserving maximum molar structure without grinding',
    'case.3.title': 'Dr. Karim Hisham - Broken Needle Removal from Molar',
    'case.3.description': 'Broken needle removal from molar - Canal cleaning - Root filling final restoration',
    'case.4.title': 'Dr. Iman Awad - Removable Dentures',
    'case.4.description': 'Removable dentures before and after',
    'case.5.title': 'Bilal Al-Badiwi - Root Canal Treatment for Impacted Wisdom Tooth',
    'case.5.description': 'First case: Root canal treatment for impacted wisdom tooth\nSecond case: Removal of platinum filling causing tooth pain and replacement with composite fillings reinforced with Ever X',
    'case.6.title': 'Dr. Mohamed Abdel-Aal - Broken Needle Removal and Re-treatment',
    'case.6.description': 'Root canal treatment referred to center with 3 broken needles in molar, complete needle removal and re-treatment\nSecond case: Treatment of Missed Canal and Perforation in molar',
    
    // Reviews Section
    'reviews.title': 'Patient Reviews',
    'reviews.subtitle': 'Discover what our patients say about their experience with us',
    'reviews.seeMore': 'See More',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.hours': 'Working Hours',
    'contact.location': 'Tanta, El Nahas Street, Above Vodafone Branch, Gharbia Governorate',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.follow': 'Follow Us'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.team': 'فريقنا',
    'nav.gallery': 'المعرض',
    'nav.contact': 'تواصل معنا',
    
    // Hero Section
    'hero.title': 'مركز الدكتور / محمد بليلة التخصصي',
    'hero.subtitle': 'لطب وجراحة وتجميل الأسنان',
    'hero.cta': 'احجز موعد',
    
    // About Section
    'about.title': 'عن المركز',
    'about.description': 'يقدم مركز الدكتور محمد بليلة رعاية شاملة للأسنان باستخدام أحدث المعدات وأخصائيين ذوي خبرة. نقدم مجموعة واسعة من الخدمات بما في ذلك تجميل الأسنان وزراعة الأسنان وتقويم الأسنان وطب أسنان الأطفال.',
    'about.experience': 'سنوات من التميز',
    'about.patients': 'مريض راضي',
    'about.specialists': 'أخصائي خبير',
    
    // Team Section
    'team.title': 'تعرف على فريقنا المتخصص',
    'team.subtitle': 'أخصائيون محترفون مكرسون لصحة الفم',
    
    // Gallery Section
    'gallery.title': 'تحويلات الابتسامة',
    'gallery.subtitle': 'شاهد النتائج المذهلة التي نحققها لمرضانا',
    'gallery.before': 'قبل',
    'gallery.after': 'بعد',
    
    // Case Descriptions
    'case.1.title': 'حالة زراعة لسن أمامي وتعويض للسن المفقود',
    'case.1.description': 'نفس درجة لون الأسنان / ابتسامة طبيعية',
    'case.2.title': 'د. أحمد البكري - إعادة تأهيل الضرس بالدعامة والتركيبة',
    'case.2.description': 'أول مرحلة: إعادة تقييم الضرس بعد حشو العصب لتحديد أفضل نوع دعامة وتركيبة مناسب له\nثاني مرحلة: وضع أول مرحلة من الدعامة الفايبر لربط أجزاء/جدران الضروس ببعضها\nثالث مرحلة: اللمسات الأخيرة للدعامة جاهزة وأخذ مقاس لاستقبال التركيبة\nرابع مرحلة: التركيبة الجزئية إيماكس من أقوى المواد وأكثرها متانة - الحفاظ على أكبر جزء من الضروس بدون برد',
    'case.3.title': 'د. كريم هشام - إزالة إبرة مكسورة من الضرس',
    'case.3.description': 'إزالة إبرة مكسورة من الضرس - تنظيف القنوات - حشو الجذور حشو نهائي',
    'case.4.title': 'د. إيمان عواد - تركيبات متحركة',
    'case.4.description': 'تركيبات متحركة قبل وبعد',
    'case.5.title': 'بلال البديوي - حشو عصب لضرس عقل مائل',
    'case.5.description': 'حالة أولى: حشو عصب لضرس عقل مائل\nحالة ثانية: إزالة حشو بلاتين مسبب ألم للضرس وتبديله بحشوات الكومبوزيت المدعمة بالإيفر اكس',
    'case.6.title': 'د. محمد عبدالعال - إزالة الإبر المكسورة وإعادة الحشو',
    'case.6.description': 'حشو عصب محول للمركز في ضرس بـ3 إبر مكسورين وتم إزالة الإبر بالكامل وإعادة الحشو\nالحالة الثانية: علاج Missed Canal و Perforation في الضرس',
    
    // Reviews Section
    'reviews.title': 'آراء المرضى',
    'reviews.subtitle': 'اكتشف ما يقوله مرضانا عن تجربتهم معنا',
    'reviews.seeMore': 'شاهد المزيد',
    
    // Contact Section
    'contact.title': 'تواصل معنا',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.hours': 'ساعات العمل',
    'contact.location': 'طنطا، شارع النحاس، أعلى فرع فودافون، محافظة الغربية',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.follow': 'تابعنا'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};