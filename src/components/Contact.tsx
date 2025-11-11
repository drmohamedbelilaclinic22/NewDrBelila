import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language, t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      content: t('contact.location'),
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      link: 'https://maps.google.com/?q=30.7923497,30.9941469'
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      content: '0403586700 - 01146146144 - 01223980922',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      content: language === 'ar' ? 'كل يوم من الساعة 1 الظهر للساعة 10 مساء' : 'Daily from 1 PM to 10 PM',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/drmohamedbelilaclinic',
      color: 'bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/drmohamedbelilaclinic',
      color: 'bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@drmohamedbelilaclinic',
      color: 'bg-gradient-to-br from-gray-800 to-black hover:from-gray-900 hover:to-gray-800',
      customIcon: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-800 mb-4 ${
              language === 'ar' ? 'font-cairo' : 'font-montserrat'
            }`}>
              {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#01479e] to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const content = (
                  <div className="group">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <div className={`flex-shrink-0 w-14 h-14 ${info.color} text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {info.icon && React.createElement(info.icon, { size: 24 })}
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold text-gray-800 mb-2 ${
                            language === 'ar' ? 'font-cairo' : 'font-montserrat'
                          }`}>
                            {info.title}
                          </h3>
                          <p className={`text-gray-600 leading-relaxed ${
                            language === 'ar' ? 'font-cairo' : 'font-montserrat'
                          }`}>
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );

                // If there's a link, wrap in anchor tag
                if (info.link) {
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:no-underline"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <h3 className={`text-2xl font-bold text-gray-800 mb-6 ${
                    language === 'ar' ? 'font-cairo' : 'font-montserrat'
                  }`}>
                    {t('footer.follow')}
                  </h3>
                  <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-14 h-14 rounded-xl ${social.color} flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg transform hover:-translate-y-1`}
                        >
                          {social.customIcon ? (
                            // TikTok Icon SVG
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                          ) : (
                            <Icon size={22} />
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="h-[500px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.123456789!2d31.0!3d30.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ4JzAwLjAiTiAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Mohamed Belila Dental Center Location"
                  className="rounded-2xl"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <p className={`text-sm font-semibold text-gray-800 ${
                    language === 'ar' ? 'font-cairo' : 'font-montserrat'
                  }`}>
                    {language === 'ar' ? 'موقعنا' : 'Our Location'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;