import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from './Header';
import Footer from './Footer';

interface Doctor {
  id: number;
  slug: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  cases?: Array<{
    id: number;
    beforeImage: string;
    afterImage: string;
    duringImage?: string;
    removalImage?: string;
    descriptionAr: string;
    descriptionEn: string;
  }>;
  reviews?: Array<{
    id: number;
    nameAr: string;
    nameEn: string;
    rating: number;
    textAr: string;
    textEn: string;
    dateAr: string;
    dateEn: string;
  }>;
}

const DoctorDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [currentReview, setCurrentReview] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);

  // Mock data - in a real app, this would come from an API
  const doctors: Doctor[] = [
    {
      id: 1,
      slug: "DrMohamed",
      nameAr: "د محمد علي بليله",
      nameEn: "Dr. Mohamed Ali Belila",
      titleAr: "مؤسس ومدير مركز الدكتور محمد بليلة التخصصي",
      titleEn: "Founder & Director of Dr. Mohamed Belila Specialized Center",
      descriptionAr: "مؤسس ومدير مركز الدكتور محمد بليلة التخصصي لطب وتجميل الأسنان في طنطا، مصر. يمتلك خبرة أكثر من ١٥ عام في تجميل وتركيبات الأسنان، وحاصل على زمالة زراعة الأسنان من جامعة هامبرج الألمانية وجامعة جينوا الإيطالية. يقود فريق طبي متخصص لتقديم أفضل رعاية أسنان للمرضى.",
      descriptionEn: "Founder and Director of Dr. Mohamed Belila Specialized Dental Center in Tanta, Egypt. With over 15 years of experience in dental cosmetics and prosthetics, he holds a Fellowship in Dental Implants from Hamburg University Germany and Giovanna University Italy. He leads a specialized medical team to provide the best dental care for patients.",
      image: "https://i.postimg.cc/Dz4TX7Kk/Dr-Belila.png",
      cases: [
        {
          id: 1,
          beforeImage: "/implant d mohamed beff.jpg",
          afterImage: "/implant d mohamed aft.jpg",
          descriptionAr: "حالة زراعة لسن أمامي وتعويض للسن المفقود - نفس درجة لون الأسنان / ابتسامة طبيعية",
          descriptionEn: "Anterior tooth implant case with replacement of missing tooth - Same tooth color shade / Natural smile"
        },
        {
          id: 2,
          beforeImage: "https://i.postimg.cc/g2w7g49L/case-2.png",
          afterImage: "https://i.postimg.cc/g2w7g49L/case-2.png",
          descriptionAr: "كسر في السن الأمامي، تم تعويضه باستخدام حشو أبيض تجميلي لإعادة السن لشكله الطبيعي تماماً بدون وجود علامة الكسر",
          descriptionEn: "Front tooth fracture, restored using cosmetic white filling to return the tooth to its natural shape without any trace of fracture"
        },
        {
          id: 3,
          beforeImage: "https://i.postimg.cc/MGVFSTpW/case-4.png",
          afterImage: "https://i.postimg.cc/MGVFSTpW/case-4.png",
          descriptionAr: "حشو الكومبوزيت التجميلي للأسنان الأمامية",
          descriptionEn: "Cosmetic composite filling for front teeth"
        },
        {
          id: 4,
          beforeImage: "https://i.postimg.cc/4xrSqtZL/case-5.png",
          afterImage: "https://i.postimg.cc/4xrSqtZL/case-5.png",
          descriptionAr: "تركيبات زيركون تجميلية",
          descriptionEn: "Cosmetic zirconia crowns"
        },
        {
          id: 5,
          beforeImage: "https://i.postimg.cc/Y2bykTMm/case-6.png",
          afterImage: "https://i.postimg.cc/Y2bykTMm/case-6.png",
          descriptionAr: "تركيبات الإيماكس الجمالية وإعادة تأهيل الابتسامة من جديد",
          descriptionEn: "Aesthetic E-max crowns and smile rehabilitation"
        },
        {
          id: 6,
          beforeImage: "https://i.postimg.cc/qqbmL6jG/case-7.png",
          afterImage: "https://i.postimg.cc/qqbmL6jG/case-7.png",
          descriptionAr: "علاج التهابات اللثة والتركيبات السابقة - ترميم الأسنان بتركيبات الإيماكس الجمالية",
          descriptionEn: "Treatment of gum inflammation and previous crowns - Dental restoration with aesthetic E-max crowns"
        }
      ],
             reviews: [
         {
           id: 1,
           nameAr: "أحمد محمد علي",
           nameEn: "Ahmed Mohamed Ali",
           rating: 5,
           textAr: "يا دكتور محمد بليلة، أنت فعلاً أحسن دكتور أسنان في طنطا كلها! عملي تجميل الأسنان الأمامية والنتيجة كانت مذهلة. كل الناس بيسألوني إيه الحكاية. شكراً جداً يا دكتور!",
           textEn: "Dr. Mohamed Belila, you're truly the best dentist in all of Tanta! He did cosmetic work on my front teeth and the result was amazing. Everyone asks me what happened. Thank you so much, doctor!",
           dateAr: "منذ شهرين",
           dateEn: "2 months ago"
         },
         {
           id: 2,
           nameAr: "سارة أحمد محمود",
           nameEn: "Sarah Ahmed Mahmoud",
           rating: 5,
           textAr: "دكتور محمد بليلة محترف جداً ومريح في التعامل. عملي زراعة أسنان وكانت تجربة ممتازة. النتيجة طبيعية جداً ومش محسس إنها صناعية. أنصح بيه جداً!",
           textEn: "Dr. Mohamed Belila is very professional and comfortable to deal with. He did dental implants for me and it was an excellent experience. The result is very natural and doesn't feel artificial. I highly recommend him!",
           dateAr: "منذ 3 أشهر",
           dateEn: "3 months ago"
         },
         {
           id: 3,
           nameAr: "محمد عبد الحميد",
           nameEn: "Mohamed Abdel Hamid",
           rating: 5,
           textAr: "أنا من المنصورة وجيت خصيصاً لدكتور محمد بليلة في طنطا عشان سمعته الممتازة. والله ما خيب ظني خالص! النتيجة كانت أحسن من ما كنت متوقع.",
           textEn: "I'm from Mansoura and came specifically to Dr. Mohamed Belila in Tanta because of his excellent reputation. By God, he didn't disappoint me at all! The result was better than I expected.",
           dateAr: "منذ 4 أشهر",
           dateEn: "4 months ago"
         },
         {
           id: 4,
           nameAr: "فاطمة حسن",
           nameEn: "Fatima Hassan",
           rating: 5,
           textAr: "دكتور محمد بليلة عنده خبرة كبيرة جداً. عملي تقويم أسنان والنتيجة جميلة جداً. العيادة نظيفة والموظفين محترمين. شكراً يا دكتور!",
           textEn: "Dr. Mohamed Belila has very great experience. He did orthodontics for me and the result is very beautiful. The clinic is clean and the staff are respectful. Thank you, doctor!",
           dateAr: "منذ 5 أشهر",
           dateEn: "5 months ago"
         }
       ]
    },
    {
      id: 2,
      slug: "DrHaidy",
      nameAr: "د هايدي السجاعي",
      nameEn: "Dr. Haidy El-Sogaaie",
      titleAr: "اخصائية طب أسنان الأطفال وذوي الاحتياجات الخاصة",
      titleEn: "Pediatric Dentistry & Special Needs Specialist",
      descriptionAr: "دكتورة هايدي السجاعي متخصصة في طب أسنان الأطفال وذوي الاحتياجات الخاصة. عضو الجمعية المصرية لطب أسنان الأطفال وذوي الاحتياجات الخاصة، وحاصلة على الزمالة البريطانية المتخصصة من جامعة أيرلندا. تتميز بقدرتها الفريدة على التعامل مع الأطفال بطريقة ودية ومريحة، مما يجعل زيارات طبيب الأسنان تجربة ممتعة للأطفال وأولياء أمورهم.",
      descriptionEn: "Dr. Haidy El-Sogaaie specializes in pediatric dentistry and special needs care. A member of the Egyptian Society for Pediatric Dentistry and Special Needs, she holds a British Fellowship from Ireland University. She is known for her unique ability to interact with children in a friendly and comfortable manner, making dental visits an enjoyable experience for children and their parents.",
      image: "https://i.postimg.cc/FRjXTGRT/Dr-Haidy.png",
      cases: [
        {
          id: 1,
          beforeImage: "/pedo-1-before.jpg",
          afterImage: "/pedo 1 aftt.jpg",
          descriptionAr: "حشوات تجميلية متطورة للأسنان الأمامية مع استعادة الشكل الطبيعي",
          descriptionEn: "Advanced cosmetic fillings for front teeth, restoring natural appearance"
        },
        {
          id: 2,
          beforeImage: "/pedo 22.jpg",
          afterImage: "/pedo 2.jpg",
          descriptionAr: "جهاز حافظ المسافة للأسنان الأمامية المفقودة مبكراً مع التعويض التجميلي",
          descriptionEn: "Space maintainer device for early missing front teeth, preserving natural appearance"
        },
        {
          id: 3,
          beforeImage: "",
          afterImage: "/pedo 3.jpg",
          descriptionAr: "حالة كراونات بايوفليكس للأطفال , صحية , لون الأسنان , متينة",
          descriptionEn: "Bioflex crowns for children, healthy, tooth color, durable"
        },
    
      ],
             reviews: [
         {
           id: 1,
           nameAr: "أم أحمد محمد",
           nameEn: "Ahmed Mohamed's Mother",
           rating: 5,
           textAr: "دكتورة هايدي فعلاً رائعة مع الأطفال! ابني أحمد كان خايف جداً من طبيب الأسنان، بس مع دكتورة هايدي بقي يحب يجي العيادة. شكراً جداً يا دكتورة!",
           textEn: "Dr. Haidy is truly amazing with children! My son Ahmed was very afraid of the dentist, but with Dr. Haidy he now loves coming to the clinic. Thank you so much, doctor!",
           dateAr: "منذ شهر",
           dateEn: "1 month ago"
         },
         {
           id: 2,
           nameAr: "أم نورا",
           nameEn: "Nora's Mother",
           rating: 5,
           textAr: "دكتورة هايدي محترفة جداً مع الأطفال. بنتي نورا عملتلها حشوات تجميلية والنتيجة جميلة جداً. الأطفال بيحبوها جداً!",
           textEn: "Dr. Haidy is very professional with children. My daughter Nora had cosmetic fillings and the result is very beautiful. Children love her very much!",
           dateAr: "منذ شهرين",
           dateEn: "2 months ago"
         },
         {
           id: 3,
           nameAr: "أم يوسف",
           nameEn: "Youssef's Mother",
           rating: 5,
           textAr: "أنا من كفر الزيات وجيت لدكتورة هايدي عشان سمعتها الممتازة مع الأطفال. والله ما خيب ظني! ابني يوسف بقي مبسوط يجي العيادة.",
           textEn: "I'm from Kafr El-Zayat and came to Dr. Haidy because of her excellent reputation with children. By God, she didn't disappoint me! My son Youssef is now happy to come to the clinic.",
           dateAr: "منذ 3 أشهر",
           dateEn: "3 months ago"
         },
         {
           id: 4,
           nameAr: "أم مريم",
           nameEn: "Mariam's Mother",
           rating: 5,
           textAr: "دكتورة هايدي عنده خبرة كبيرة مع الأطفال وذوي الاحتياجات الخاصة. بنتي مريم عندها احتياجات خاصة ودكتورة هايدي تعاملت معاها باحترافية عالية. شكراً جداً!",
           textEn: "Dr. Haidy has great experience with children and special needs. My daughter Mariam has special needs and Dr. Haidy handled her with high professionalism. Thank you so much!",
           dateAr: "منذ 4 أشهر",
           dateEn: "4 months ago"
         }
       ]
    },
    {
      id: 3,
      slug: "DrEman",
      nameAr: "د ايمان عواد",
      nameEn: "Dr. Eman Awad",
      titleAr: "استشارية التركيبات المتحركة والثابتة",
      titleEn: "Consultant in Removable & Fixed Prosthetics",
      descriptionAr: "دكتورة إيمان عواد استشارية متخصصة في التركيبات المتحركة والثابتة. حاصلة على ماجستير الاستعاضة الصناعية والتركيبات المتحركة والتركيبات فوق الغرسات من جامعة طنطا. تتميز بخبرة أكثر من ١٢ عام في تصميم وتنفيذ التركيبات الدقيقة التي تحافظ على الشكل الطبيعي والوظيفة المثلى للأسنان، مع التركيز على تجميل الوجه والابتسامة.",
      descriptionEn: "Dr. Eman Awad is a specialized consultant in removable and fixed prosthetics. She holds a Master's degree in Prosthetic Dentistry, Removable Prosthetics and Implant-Supported Prosthetics from Tanta University. With over 12 years of experience, she excels in designing and implementing precise prosthetics that maintain natural appearance and optimal dental function, with a focus on facial aesthetics and smile enhancement.",
      image: "https://i.postimg.cc/k4rdNLnV/Dr-Eman.png",
      cases: [
        {
          id: 1,
          beforeImage: "https://i.postimg.cc/kG2MJZYF/1A.png",
          afterImage: "https://i.postimg.cc/59rN74jP/1B.png",
          descriptionAr: "تركيبات الأسنان المتحركة مع تجميل الوجه الشامل",
          descriptionEn: "Removable dental prosthetics with comprehensive facial aesthetics"
        },
        {
          id: 2,
          beforeImage: "https://i.postimg.cc/Vv2fdR3y/2A.png",
          afterImage: "https://i.postimg.cc/mDX2GRjg/2B.png",
          descriptionAr: "التركيبات الثابتة مع تجميل الابتسامة",
          descriptionEn: "Fixed prosthetics with smile enhancement"
        },
        {
          id: 3,
          beforeImage: "https://i.postimg.cc/pLbVvsfz/3A.png",
          afterImage: "https://i.postimg.cc/8CwThDqm/3B.png",
          descriptionAr: "التركيبات فوق الغرسات مع تجميل الوجه",
          descriptionEn: "Implant-supported prosthetics with facial aesthetics"
        }
      ],
             reviews: [
         {
           id: 1,
           nameAr: "فاطمة علي محمد",
           nameEn: "Fatima Ali Mohamed",
           rating: 5,
           textAr: "دكتورة إيمان عواد محترفة جداً في التركيبات! عملتلي تركيبات متحركة والنتيجة كانت مذهلة. كل الناس بيسألوني إيه الحكاية. شكراً جداً يا دكتورة!",
           textEn: "Dr. Eman Awad is very professional in prosthetics! She did removable prosthetics for me and the result was amazing. Everyone asks me what happened. Thank you so much, doctor!",
           dateAr: "منذ أسبوعين",
           dateEn: "2 weeks ago"
         },
         {
           id: 2,
           nameAr: "عبد الله حسن",
           nameEn: "Abdullah Hassan",
           rating: 5,
           textAr: "دكتورة إيمان عملتلي تركيبات ثابتة والنتيجة طبيعية جداً. مش محسس إنها صناعية خالص. العيادة نظيفة والموظفين محترمين. أنصح بيه جداً!",
           textEn: "Dr. Eman did fixed prosthetics for me and the result is very natural. It doesn't feel artificial at all. The clinic is clean and the staff are respectful. I highly recommend her!",
           dateAr: "منذ شهر",
           dateEn: "1 month ago"
         },
         {
           id: 3,
           nameAr: "نادية محمود",
           nameEn: "Nadia Mahmoud",
           rating: 5,
           textAr: "أنا من المحلة وجيت لدكتورة إيمان عشان سمعتها الممتازة في التركيبات. والله ما خيب ظني! النتيجة كانت أحسن من ما كنت متوقعة.",
           textEn: "I'm from El-Mahalla and came to Dr. Eman because of her excellent reputation in prosthetics. By God, she didn't disappoint me! The result was better than I expected.",
           dateAr: "منذ شهرين",
           dateEn: "2 months ago"
         },
         {
           id: 4,
           nameAr: "محمد عبد العزيز",
           nameEn: "Mohamed Abdel Aziz",
           rating: 5,
           textAr: "دكتورة إيمان عنده خبرة كبيرة في التركيبات فوق الغرسات. عملتلي تركيبات والنتيجة جميلة جداً. الابتسامة بقت أحسن بكتير!",
           textEn: "Dr. Eman has great experience in implant-supported prosthetics. She did prosthetics for me and the result is very beautiful. The smile became much better!",
           dateAr: "منذ 3 أشهر",
           dateEn: "3 months ago"
         }
       ]
    },
    {
      id: 4,
      slug: "DrIssa",
      nameAr: "د. إبراهيم عيسى",
      nameEn: "Dr. Ibrahim Issa",
      titleAr: "أخصائي تقويم الأسنان – زميل الكلية الملكية بأدنبرة",
      titleEn: "Orthodontics Specialist – Fellow of Royal College of Edinburgh",
      descriptionAr: "د. إبراهيم عيسى أخصائي تقويم الأسنان – زميل الكلية الملكية بأدنبرة، حاصل على الزمالة البريطانية في تقويم الأسنان. يقدّم خبرة مميزة في علاج وتشخيص حالات التقويم باستخدام أحدث التقنيات العالمية، مع اهتمام خاص بتقديم تجربة علاجية مريحة ونتائج طبيعية ودائمة. د. إبراهيم هو مؤسس Issa Clinics بالمنصورة، كما يعمل أيضًا في مركز د. محمد بليلة بطنطا ضمن فريق متميز من الأطباء.",
      descriptionEn: "Dr. Ibrahim Issa is an Orthodontics Specialist – Fellow of Royal College of Edinburgh, holding a British Fellowship in Orthodontics. He provides distinguished experience in treating and diagnosing orthodontic cases using the latest global techniques, with special attention to providing a comfortable treatment experience and natural, lasting results. Dr. Ibrahim is the founder of Issa Clinics in Mansoura, and also works at Dr. Mohamed Belila Center in Tanta as part of an outstanding team of doctors.",
      image: "https://i.postimg.cc/8c4QS5LW/Dr-Issa.png",
      cases: [
        {
          id: 1,
          beforeImage: "/ortho 1 before.jpg",
          afterImage: "/ortho 1 after.jpg",
          descriptionAr: "تقويم الأسنان الشامل مع تجميل الابتسامة",
          descriptionEn: "Comprehensive orthodontics with smile enhancement"
        },
          {
            id: 2,
            beforeImage: "/ortho 2 before.jpg",
            afterImage: "/ortho 2 after.jpg",
            descriptionAr: "تزاحم في الأسنان و حله بالكامل بالتقويم",
            descriptionEn: "Orthodontics for Solving Crowding proplem"
          },
      ],
             reviews: [
         {
           id: 1,
           nameAr: "مريم أحمد علي",
           nameEn: "Mariam Ahmed Ali",
           rating: 5,
           textAr: "دكتور إبراهيم عيسى ممتاز جداً في التقويم! عملي تقويم أسنان والنتيجة كانت مذهلة. كل الناس بيسألوني إيه الحكاية. شكراً جداً يا دكتور!",
           textEn: "Dr. Ibrahim Issa is excellent in orthodontics! He did orthodontics for me and the result was amazing. Everyone asks me what happened. Thank you so much, doctor!",
           dateAr: "منذ شهر",
           dateEn: "1 month ago"
         },
         {
           id: 2,
           nameAr: "أحمد محمود",
           nameEn: "Ahmed Mahmoud",
           rating: 5,
           textAr: "دكتور إبراهيم محترف جداً ومريح في التعامل. عملي تقويم للأسنان الأمامية والنتيجة طبيعية جداً. أنصح بيه جداً!",
           textEn: "Dr. Ibrahim is very professional and comfortable to deal with. He did orthodontics for my front teeth and the result is very natural. I highly recommend him!",
           dateAr: "منذ شهرين",
           dateEn: "2 months ago"
         },
         {
           id: 3,
           nameAr: "سارة عبد الله",
           nameEn: "Sarah Abdullah",
           rating: 5,
           textAr: "أنا من المنصورة وجيت لدكتور إبراهيم عيسى في طنطا عشان سمعته الممتازة في التقويم. والله ما خيب ظني! النتيجة كانت أحسن من ما كنت متوقعة.",
           textEn: "I'm from Mansoura and came to Dr. Ibrahim Issa in Tanta because of his excellent reputation in orthodontics. By God, he didn't disappoint me! The result was better than I expected.",
           dateAr: "منذ 3 أشهر",
           dateEn: "3 months ago"
         },
         {
           id: 4,
           nameAr: "علي حسن",
           nameEn: "Ali Hassan",
           rating: 5,
           textAr: "دكتور إبراهيم عنده خبرة كبيرة في التقويم للأطفال والكبار. عملي تقويم والنتيجة جميلة جداً. العيادة نظيفة والموظفين محترمين. شكراً يا دكتور!",
           textEn: "Dr. Ibrahim has great experience in orthodontics for children and adults. He did orthodontics for me and the result is very beautiful. The clinic is clean and the staff are respectful. Thank you, doctor!",
           dateAr: "منذ 4 أشهر",
           dateEn: "4 months ago"
         }
       ]
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
      image: "https://i.postimg.cc/HsSDvrY1/Dr-Osama.png",
      cases: [
        {
          id: 1,
          beforeImage: "https://i.postimg.cc/fWCgDyYK/B.png",
          afterImage: "https://i.postimg.cc/fWCgDyYK/B.png",
          descriptionAr: "جذور وقنوات متكلسه - وضع غير طبيعي للضرس",
          descriptionEn: "Calcified roots and canals - Abnormal molar position"
        },
        {
          id: 2,
          beforeImage: "/broken file retrieval aft.jpg",
          duringImage: "/broken file retrieval during.jpg",
          removalImage: "https://i.postimg.cc/8PnKfYKf/A.png",
          afterImage: "/broken file retrieval bef.jpg",
          descriptionAr: "تمت معالجته ومعالجه الانسداد و الوصول لاخر القنوات العصبية وتنضيفها تماما ثم الحشو النهائي للجذور - إزالة إبرة مكسورة",
          descriptionEn: "Successfully treated obstruction and reached the deepest neural canals, completely cleaned and final root filling - Broken file removal"
        }
      ],
             reviews: [
         {
           id: 1,
           nameAr: "علي حسن محمد",
           nameEn: "Ali Hassan Mohamed",
           rating: 5,
           textAr: "دكتور أسامة قاسم محترف جداً في علاج الجذور! عملي علاج جذور وكانت تجربة ممتازة. مش حسيت بأي ألم خالص. شكراً جداً يا دكتور!",
           textEn: "Dr. Osama Kassem is very professional in root canal treatment! He did root canal treatment for me and it was an excellent experience. I didn't feel any pain at all. Thank you so much, doctor!",
           dateAr: "منذ أسبوعين",
           dateEn: "2 weeks ago"
         },
         {
           id: 2,
           nameAr: "فاطمة عبد الحميد",
           nameEn: "Fatima Abdel Hamid",
           rating: 5,
           textAr: "دكتور أسامة مريح جداً في التعامل. عملي علاج جذور للضروس الخلفية والنتيجة ممتازة. أنصح بيه جداً!",
           textEn: "Dr. Osama is very comfortable to deal with. He did root canal treatment for my back molars and the result is excellent. I highly recommend him!",
           dateAr: "منذ شهر",
           dateEn: "1 month ago"
         },
         {
           id: 3,
           nameAr: "محمد عبد العزيز",
           nameEn: "Mohamed Abdel Aziz",
           rating: 5,
           textAr: "أنا من كفر الزيات وجيت لدكتور أسامة عشان سمعته الممتازة في علاج الجذور. والله ما خيب ظني! النتيجة كانت أحسن من ما كنت متوقع.",
           textEn: "I'm from Kafr El-Zayat and came to Dr. Osama because of his excellent reputation in root canal treatment. By God, he didn't disappoint me! The result was better than I expected.",
           dateAr: "منذ شهرين",
           dateEn: "2 months ago"
         },
         {
           id: 4,
           nameAr: "نادية محمود",
           nameEn: "Nadia Mahmoud",
           rating: 5,
           textAr: "دكتور أسامة عنده خبرة كبيرة في علاج الجذور المعقدة. عملي علاج والنتيجة ممتازة. العيادة نظيفة والموظفين محترمين. شكراً يا دكتور!",
           textEn: "Dr. Osama has great experience in complex root canal treatment. He did treatment for me and the result is excellent. The clinic is clean and the staff are respectful. Thank you, doctor!",
           dateAr: "منذ 3 أشهر",
           dateEn: "3 months ago"
         }
       ]
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
      image: "https://i.postimg.cc/QxNZqQrq/Dr-Kozaa.png",
      cases: [
        {
          id: 1,
          beforeImage: "/kozaa-case-1-before.jpg",
          duringImage: "/kozaa-case-1-during.jpg",
          afterImage: "/kozaa-case-1-after.jpg",
          descriptionAr: "حالة إزالة  إبرة مكسورة من الضرس , قناة مفقودة وثقب وعلاج الجذور بنجاح",
          descriptionEn: "Case of removing broken file ,missed canal and perforation - successfully retreated"
        },
        {
          id: 2,
          beforeImage: "/missed canal and perforation bef.jpg",
          afterImage: "/missed canal and perforation aft.jpg",
          descriptionAr: "ضرس ب3إبر مكسورة - تم إعادة العلاج بنجاح",
          descriptionEn: "Molar with 3 broken files,  - successfully retreated"
        }
      ],
             reviews: [
         {
           id: 1,
           nameAr: "نورا محمد علي",
           nameEn: "Nora Mohamed Ali",
           rating: 5,
           textAr: "دكتور محمد قوزع ممتاز جداً في الحشوات التجميلية! عملي حشوات تجميلية للأسنان الأمامية والنتيجة كانت مذهلة. كل الناس بيسألوني إيه الحكاية. شكراً جداً يا دكتور!",
           textEn: "Dr. Mohamed Kozaa is excellent in cosmetic fillings! He did cosmetic fillings for my front teeth and the result was amazing. Everyone asks me what happened. Thank you so much, doctor!",
           dateAr: "منذ 3 أسابيع",
           dateEn: "3 weeks ago"
         },
         {
           id: 2,
           nameAr: "أحمد عبد الحميد",
           nameEn: "Ahmed Abdel Hamid",
           rating: 5,
           textAr: "دكتور محمد محترف جداً ومريح في التعامل. عملي حشوات تجميلية والنتيجة طبيعية جداً. أنصح بيه جداً!",
           textEn: "Dr. Mohamed is very professional and comfortable to deal with. He did cosmetic fillings for me and the result is very natural. I highly recommend him!",
           dateAr: "منذ شهر",
           dateEn: "1 month ago"
         },
         {
           id: 3,
           nameAr: "فاطمة حسن",
           nameEn: "Fatima Hassan",
           rating: 5,
           textAr: "أنا من المحلة وجيت لدكتور محمد قوزع عشان سمعته الممتازة في الحشوات التجميلية. والله ما خيب ظني! النتيجة كانت أحسن من ما كنت متوقعة.",
           textEn: "I'm from El-Mahalla and came to Dr. Mohamed Kozaa because of his excellent reputation in cosmetic fillings. By God, he didn't disappoint me! The result was better than I expected.",
           dateAr: "منذ شهرين",
           dateEn: "2 months ago"
         },
         {
           id: 4,
           nameAr: "محمد عبد العزيز",
           nameEn: "Mohamed Abdel Aziz",
           rating: 5,
           textAr: "دكتور محمد عنده خبرة كبيرة في علاج الجذور والحشوات التجميلية. عملي علاج والنتيجة ممتازة. العيادة نظيفة والموظفين محترمين. شكراً يا دكتور!",
           textEn: "Dr. Mohamed has great experience in root canal treatment and cosmetic fillings. He did treatment for me and the result is excellent. The clinic is clean and the staff are respectful. Thank you, doctor!",
           dateAr: "منذ 3 أشهر",
           dateEn: "3 months ago"
         }
       ]
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
      image: "https://i.postimg.cc/BQN4WhCy/Dr-Belal.png",
             cases: [
         {
           id: 1,
           beforeImage: "",
           afterImage: "/endo tttt.jpg",
           descriptionAr: "علاج الجذور لضرس عقل مائل",
           descriptionEn: "Root canal treatment for tilted wisdom tooth"
         },
         {
           id: 2,
           beforeImage: "/amalgam removal bef.jpg",
           duringImage: "/amalgam removal during.jpg",
           afterImage: "/amalgam removal aft.jpg",
           descriptionAr: "إزالة حشو الأملغم واستبداله بالكومبوزيت المدعم بالإيفر إكس",
           descriptionEn: "Amalgam removal and replacement with composite reinforced with Ever X"
         }
       ],
             reviews: [
         {
           id: 1,
           nameAr: "أحمد علي محمد",
           nameEn: "Ahmed Ali Mohamed",
           rating: 5,
           textAr: "دكتور بلال البديوي ممتاز جداً في طب الأسنان العام! عملي علاج شامل للأسنان والنتيجة كانت ممتازة. شكراً جداً يا دكتور!",
           textEn: "Dr. Belal El-Badawy is excellent in general dentistry! He did comprehensive dental treatment for me and the result was excellent. Thank you so much, doctor!",
           dateAr: "منذ شهر",
           dateEn: "1 month ago"
         },
         {
           id: 2,
           nameAr: "سارة محمود",
           nameEn: "Sarah Mahmoud",
           rating: 5,
           textAr: "دكتور بلال محترف جداً ومريح في التعامل. عملي حشوات تجميلية والنتيجة طبيعية جداً. أنصح بيه جداً!",
           textEn: "Dr. Belal is very professional and comfortable to deal with. He did cosmetic fillings for me and the result is very natural. I highly recommend him!",
           dateAr: "منذ شهرين",
           dateEn: "2 months ago"
         },
         {
           id: 3,
           nameAr: "محمد عبد الحميد",
           nameEn: "Mohamed Abdel Hamid",
           rating: 5,
           textAr: "أنا من المحلة وجيت لدكتور بلال عشان سمعته الممتازة في طب الأسنان العام. والله ما خيب ظني! النتيجة كانت أحسن من ما كنت متوقع.",
           textEn: "I'm from El-Mahalla and came to Dr. Belal because of his excellent reputation in general dentistry. By God, he didn't disappoint me! The result was better than I expected.",
           dateAr: "منذ 3 أشهر",
           dateEn: "3 months ago"
         },
         {
           id: 4,
           nameAr: "فاطمة حسن",
           nameEn: "Fatima Hassan",
           rating: 5,
           textAr: "دكتور بلال عنده خبرة كبيرة في طب الفم والأسنان. عملي علاج شامل والنتيجة ممتازة. العيادة نظيفة والموظفين محترمين. شكراً يا دكتور!",
           textEn: "Dr. Belal has great experience in oral and dental medicine. He did comprehensive treatment for me and the result is excellent. The clinic is clean and the staff are respectful. Thank you, doctor!",
           dateAr: "منذ 4 أشهر",
           dateEn: "4 months ago"
         }
       ]
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
      image: "https://i.postimg.cc/XNk0F2tJ/Dr-Kareem.png",
              cases: [

          {
            id: 2,
            beforeImage: "/kareem composite.png",
            afterImage: "/kareem 3 endo after.png",
            descriptionAr: "علاج الجذور",
            descriptionEn: "Root canal treatment"
          },
          {
            id: 3,
            beforeImage: "/kareem 3 endo before.png",
            afterImage: "/kareem 2 endo after.png",
            descriptionAr: "علاج الجذور وإزالة إبرة مكسورة",
            descriptionEn: "Root canal treatment and broken file removal"
          }
        ],
             reviews: [
         {
           id: 1,
           nameAr: "سارة محمود علي",
           nameEn: "Sarah Mahmoud Ali",
           rating: 5,
           textAr: "دكتور كريم هشام محترف جداً! عملي فحص شامل للأسنان والنتيجة كانت ممتازة. شكراً جداً يا دكتور!",
           textEn: "Dr. Kareem Hesham is very professional! He did a comprehensive dental examination for me and the result was excellent. Thank you so much, doctor!",
           dateAr: "منذ أسبوع",
           dateEn: "1 week ago"
         },
         {
           id: 2,
           nameAr: "أحمد عبد الحميد",
           nameEn: "Ahmed Abdel Hamid",
           rating: 5,
           textAr: "دكتور كريم مريح جداً في التعامل. عملي فحص للأسنان الأمامية والنتيجة ممتازة. أنصح بيه جداً!",
           textEn: "Dr. Kareem is very comfortable to deal with. He did an examination of my front teeth and the result is excellent. I highly recommend him!",
           dateAr: "منذ أسبوعين",
           dateEn: "2 weeks ago"
         },
         {
           id: 3,
           nameAr: "فاطمة حسن",
           nameEn: "Fatima Hassan",
           rating: 5,
           textAr: "أنا من المحلة وجيت لدكتور كريم عشان سمعته الممتازة في فحص الأسنان. والله ما خيب ظني! النتيجة كانت أحسن من ما كنت متوقعة.",
           textEn: "I'm from El-Mahalla and came to Dr. Kareem because of his excellent reputation in dental examination. By God, he didn't disappoint me! The result was better than I expected.",
           dateAr: "منذ شهر",
           dateEn: "1 month ago"
         },
         {
           id: 4,
           nameAr: "محمد عبد العزيز",
           nameEn: "Mohamed Abdel Aziz",
           rating: 5,
           textAr: "دكتور كريم عنده خبرة كبيرة في فحص الأسنان الشامل. عملي فحص والنتيجة ممتازة. العيادة نظيفة والموظفين محترمين. شكراً يا دكتور!",
           textEn: "Dr. Kareem has great experience in comprehensive dental examination. He did an examination for me and the result is excellent. The clinic is clean and the staff are respectful. Thank you, doctor!",
           dateAr: "منذ شهرين",
           dateEn: "2 months ago"
         }
       ]
    },
         {
       id: 9,
       slug: "DrAhmed",
       nameAr: "د احمد البكري",
       nameEn: "Dr. Ahmed El-Bakry",
       titleAr: "اخصائي الحشوات التجميلية والحشوات المدعمة بالفايبر",
       titleEn: "Cosmetic Fillings & Fiber-Reinforced Fillings Specialist",
       descriptionAr: "د احمد البكري تخصص قسم الحشوات التجميلية والحشوات المدعمه بالفايبر والتركيبات الجزئيه ب استخدام اقوي المواد للحفاظ علي متانه الضروس",
       descriptionEn: "Dr. Ahmed El-Bakry specializes in cosmetic fillings, fiber-reinforced fillings, and partial prosthetics using the strongest materials to maintain molar strength",
       image: "https://i.postimg.cc/Y0zkC8Bv/Dr-Bakry.png",
       cases: [
         {
           id: 1,
           beforeImage: "https://i.postimg.cc/xdCn9h4x/A.png",
           afterImage: "https://i.postimg.cc/xdCn9h4x/A.png",
           descriptionAr: "اعاده تقييم الضرس بعد حشو العصب لتحديد افضل نوع دعامه وتركيبه مناسب له",
           descriptionEn: "Re-evaluation of molar after root canal treatment to determine the best type of post and suitable crown"
         },
         {
           id: 2,
           beforeImage: "https://i.postimg.cc/mgVTfB81/B.png",
           afterImage: "https://i.postimg.cc/mgVTfB81/B.png",
           descriptionAr: "وضع اول مرحله من الدعامه الفايبر لربط جدران الضروس ببعضها",
           descriptionEn: "Placement of first stage fiber post to connect molar walls together"
         },
         {
           id: 3,
           beforeImage: "https://i.postimg.cc/3x33cdCH/C.png",
           afterImage: "https://i.postimg.cc/3x33cdCH/C.png",
           descriptionAr: "االلمسات الاخيره للدعامه جاهزه و اخذ مقاس لاستقبال التركيبه",
           descriptionEn: "Final touches of the post ready and taking impression for crown placement"
         },
         {
           id: 4,
           beforeImage: "https://i.postimg.cc/Yq6pR1F3/D.png",
           afterImage: "https://i.postimg.cc/Yq6pR1F3/D.png",
           descriptionAr: "التركيبه الجزئيه ايماكس من اقوي المواد واكثرها متانه - الحفاظ علي اكبر جزء من الضروس بدون برد",
           descriptionEn: "Partial Emax crown from strongest and most durable materials - Preserving maximum molar structure without grinding"
         },
         {
           id: 5,
           beforeImage: "/ribbond reinforced composite bef.jpg",
           afterImage: "/ribbond reinforced composite bef.jpg",
           descriptionAr: "اول مرحله - قبل العلاج - حشو مدعم بالريبوند",
           descriptionEn: "Stage 1 - Before Treatment - Ribbond Reinforced Composite"
         },
         {
           id: 6,
           beforeImage: "/ribbond reinforced composite during.jpg",
           afterImage: "/ribbond reinforced composite during.jpg",
           descriptionAr: "تاني مرحله - اثناء العلاج - تطبيق الريبوند والحشوة",
           descriptionEn: "Stage 2 - During Treatment - Application of Ribbond and Composite"
         },
         {
           id: 7,
           beforeImage: "/ribbond reinforced composite aft.jpg",
           afterImage: "/ribbond reinforced composite aft.jpg",
           descriptionAr: "تالت مرحله - بعد العلاج - النتيجة النهائية للحشو المدعم بالريبوند",
           descriptionEn: "Stage 3 - After Treatment - Final Result of Ribbond Reinforced Composite"
         }
       ],
             reviews: [
         {
           id: 1,
           nameAr: "ليلى أحمد محمد",
           nameEn: "Layla Ahmed Mohamed",
           rating: 5,
           textAr: "دكتور أحمد البكري ممتاز جداً في الحشوات التجميلية! عملي حشوات مدعمة بالفايبر والنتيجة كانت مذهلة. الابتسامة بقت جميلة جداً. شكراً جداً يا دكتور!",
           textEn: "Dr. Ahmed El-Bakry is excellent in cosmetic fillings! He did fiber-reinforced fillings for me and the result was amazing. The smile became very beautiful. Thank you so much, doctor!",
           dateAr: "منذ 4 أسابيع",
           dateEn: "4 weeks ago"
         },
         {
           id: 2,
           nameAr: "أحمد عبد الحميد",
           nameEn: "Ahmed Abdel Hamid",
           rating: 5,
           textAr: "دكتور أحمد محترف جداً ومريح في التعامل. عملي حشوات مدعمة والنتيجة طبيعية جداً. أنصح بيه جداً!",
           textEn: "Dr. Ahmed is very professional and comfortable to deal with. He did reinforced fillings for me and the result is very natural. I highly recommend him!",
           dateAr: "منذ شهر",
           dateEn: "1 month ago"
         },
         {
           id: 3,
           nameAr: "فاطمة حسن",
           nameEn: "Fatima Hassan",
           rating: 5,
           textAr: "أنا من كفر الزيات وجيت لدكتور أحمد عشان سمعته الممتازة في الحشوات المدعمة. والله ما خيب ظني! النتيجة كانت أحسن من ما كنت متوقعة.",
           textEn: "I'm from Kafr El-Zayat and came to Dr. Ahmed because of his excellent reputation in reinforced fillings. By God, he didn't disappoint me! The result was better than I expected.",
           dateAr: "منذ شهرين",
           dateEn: "2 months ago"
         },
         {
           id: 4,
           nameAr: "محمد عبد العزيز",
           nameEn: "Mohamed Abdel Aziz",
           rating: 5,
           textAr: "دكتور أحمد عنده خبرة كبيرة في الحشوات المدعمة بالفايبر والتركيبات الجزئية. عملي علاج والنتيجة ممتازة. العيادة نظيفة والموظفين محترمين. شكراً يا دكتور!",
           textEn: "Dr. Ahmed has great experience in fiber-reinforced fillings and partial prosthetics. He did treatment for me and the result is excellent. The clinic is clean and the staff are respectful. Thank you, doctor!",
           dateAr: "منذ 3 أشهر",
           dateEn: "3 months ago"
         }
       ]
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
      image: "https://i.postimg.cc/ZKJ4Mk6p/Dr-Amal.png",
      cases: [
        {
          id: 1,
          beforeImage: "/anterior composite before.jpg",
          afterImage: "/anterior composite after.jpg",
          descriptionAr: "حالة علاج الأنياب العلوية بالحشو التجميلي الابيض يعيد المظهر الطبيعي والجمالي للمريض",
          descriptionEn: "Composite restoration for upper canine that restores the natural appearance and aesthetics of the patient"
        },
        {
          id: 2,
          beforeImage: "/amalgam rettt.jpg",
          afterImage: "/amalgam rettt after.jpg",
          descriptionAr: "حالة إعادة علاج الأملغم - إزالة الأملغم واستبداله بالحشو التجميلي الابيض",
          descriptionEn: "Amalgam retreatment case - removing amalgam and replacing it with composite"
        }
      ],
      reviews: [
          {
            id: 1,
            nameAr: "فاطمة محمد علي",
            nameEn: "Fatima Mohamed Ali",
            rating: 5,
            textAr: "دكتورة أمل رقية رائعة جداً! شعرت بالراحة معاها جداً. عملتلي علاج أسنان شامل والنتيجة كانت ممتازة. شكراً جداً يا دكتورة!",
            textEn: "Dr. Amal Rokaya is wonderful! I felt very comfortable with her. She did comprehensive dental treatment for me and the result was excellent. Thank you so much, doctor!",
            dateAr: "منذ أسبوعين",
            dateEn: "2 weeks ago"
          },
          {
            id: 2,
            nameAr: "أحمد عبد الحميد",
            nameEn: "Ahmed Abdel Hamid",
            rating: 5,
            textAr: "دكتورة أمل محترفة جداً ومريحة في التعامل. عملتلي علاج أسنان والنتيجة طبيعية جداً. أنصح بيه جداً!",
            textEn: "Dr. Amal is very professional and comfortable to deal with. She did dental treatment for me and the result is very natural. I highly recommend her!",
            dateAr: "منذ شهر",
            dateEn: "1 month ago"
          },
          {
            id: 3,
            nameAr: "سارة حسن",
            nameEn: "Sarah Hassan",
            rating: 5,
            textAr: "أنا من المحلة وجيت لدكتورة أمل عشان سمعتها الممتازة. والله ما خيب ظني! النتيجة كانت أحسن من ما كنت متوقعة.",
            textEn: "I'm from El-Mahalla and came to Dr. Amal because of her excellent reputation. By God, she didn't disappoint me! The result was better than I expected.",
            dateAr: "منذ شهرين",
            dateEn: "2 months ago"
          },
          {
            id: 4,
            nameAr: "محمد عبد العزيز",
            nameEn: "Mohamed Abdel Aziz",
            rating: 5,
            textAr: "دكتورة أمل عنده خبرة كبيرة في طب الأسنان. عملتلي علاج والنتيجة ممتازة. العيادة نظيفة والموظفين محترمين. شكراً يا دكتورة!",
            textEn: "Dr. Amal has great experience in dentistry. She did treatment for me and the result is excellent. The clinic is clean and the staff are respectful. Thank you, doctor!",
            dateAr: "منذ 3 أشهر",
            dateEn: "3 months ago"
          }
        ]
     },
         {
       id: 11,
       slug: "DrRania",
       nameAr: "د. رانيا الشرقاوي",
       nameEn: "Dr. Rania El-Sharkawy",
       titleAr: "أخصائية طب الفم والأسنان | مديرة تشغيل العيادة",
       titleEn: "Oral & Dental Medicine Specialist | Clinic Operations Manager",
       descriptionAr: "تمزج د. رانيا بين خبرتها الطبية ودراستها في إدارة الأعمال والأنظمة والتخطيط. بتشرف على دورة علاج المريض بالكامل بداية من وضع خطة العلاج وحتى المتابعة بعد التنفيذ، لضمان تحقيق أفضل النتائج. كما تقوم بمتابعة الفولو أب مع المرضى وحل أي تحديات قد تظهر، إضافة إلى إشرافها على التخطيط المالي ومتابعة الأداء لضمان سير العمل بكفاءة عالية وتقديم أفضل تجربة علاجية داخل المركز.",
       descriptionEn: "Dr. Rania combines her medical expertise with her studies in business administration, systems, and planning. She oversees the complete patient treatment cycle from treatment planning to post-implementation follow-up, ensuring the best results. She also handles patient follow-up and resolves any challenges that may arise, in addition to supervising financial planning and performance monitoring to ensure efficient workflow and provide the best treatment experience within the center.",
       image: "https://i.postimg.cc/2SMpmgLH/Dr-Rania.png"
    }
  ];

  const doctor = doctors.find(d => d.slug === slug);



  useEffect(() => {
    if (doctor?.reviews) {
      const interval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % doctor.reviews!.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [doctor]);

  useEffect(() => {
    if (doctor?.cases && (doctor.id === 2 || doctor.id === 3)) { // Dr. Haidy and Dr. Eman
      const interval = setInterval(() => {
        setCurrentCase((prev) => (prev + 1) % doctor.cases!.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [doctor]);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {language === 'ar' ? 'لم يتم العثور على الطبيب' : 'Doctor not found'}
          </h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Back Button */}
      <div className={`fixed top-20 md:top-24 z-50 ${language === 'ar' ? 'right-2 sm:right-4 md:right-6' : 'left-2 sm:left-4 md:left-6'}`}>
        <button
          onClick={() => navigate('/')}
          className="bg-white/90 backdrop-blur-md text-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-gray-200"
          aria-label={language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
        >
          <ArrowLeft size={20} className={`sm:w-6 sm:h-6 ${language === 'ar' ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Hero Section */}
      <section className="w-full bg-[#00469e] pt-20 pb-12 md:pt-24 md:pb-16 lg:py-20">
        <div className={`max-w-6xl mx-auto ${language === 'ar' ? 'pr-12 sm:pr-16 md:pr-4 pl-4' : 'pl-12 sm:pl-16 md:pl-4 pr-4'} sm:px-6 md:px-4`}>
          <div className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 ${
            language === 'ar' ? 'md:flex-row-reverse' : ''
          }`}>
            {/* Doctor Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={doctor.image}
                alt={language === 'ar' ? doctor.nameAr : doctor.nameEn}
                className="w-56 h-64 sm:w-64 sm:h-72 md:w-80 md:h-96 object-cover object-top rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            
            {/* Doctor Info */}
            <div className={`w-full md:w-1/2 text-center md:text-left ${language === 'ar' ? 'md:text-right' : ''} px-2 sm:px-0`}>
              <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {language === 'ar' ? doctor.nameAr : doctor.nameEn}
              </h1>
              
              <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-[#54c9ea] mb-3 sm:mb-4 md:mb-6 font-semibold ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {language === 'ar' ? doctor.titleAr : doctor.titleEn}
              </p>
              
              <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {language === 'ar' ? doctor.descriptionAr : doctor.descriptionEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Gallery Section */}
      {doctor.cases && doctor.cases.length > 0 && (
        <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {language === 'ar' ? 'معرض الحالات' : 'Case Gallery'}
              </h2>
              <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {language === 'ar' 
                  ? 'شاهد مجموعة من أفضل الحالات التي تم علاجها بنجاح' 
                  : 'View a collection of the best successfully treated cases'
                }
              </p>
            </div>

                                                                                                       {/* Case Gallery - Carousel for Dr. Haidy, Before/After for Dr. Eman, Elegant Gallery for Dr. Ibrahim, X-Ray Gallery for Dr. Osama, X-Ray Gallery for Dr. Kozaa, X-Ray Gallery for Dr. Belal, X-Ray Gallery for Dr. Kareem, Treatment Stages for Dr. Ahmed, Grid for others */}
               {doctor.id === 2 ? (
                // Before/After Gallery for Dr. Haidy
                <div className="relative">
                  <div className="flex justify-center">
                    <div className="max-w-6xl w-full">
                      {doctor.cases.map((caseItem, index) => (
                        <div
                          key={caseItem.id}
                          className={`transition-all duration-700 ease-in-out ${
                            index === currentCase
                              ? 'opacity-100 transform translate-x-0 scale-100'
                              : 'opacity-0 transform translate-x-full scale-95 absolute top-0 left-0'
                          }`}
                        >
                          <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-cyan-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                            
                            {/* Image Container */}
                            <div className="relative z-10">
                              <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                  </svg>
                                </div>
                              </div>

                              {/* Before/After Images */}
                              {caseItem.beforeImage && caseItem.beforeImage.trim() !== "" && caseItem.afterImage && caseItem.afterImage.trim() !== "" ? (
                                // Both before and after images
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                  {/* Before Image */}
                                  <div className="relative">
                                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl">
                                      <h4 className={`text-lg font-semibold text-red-700 mb-4 text-center ${
                                        language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                      }`}>
                                        {language === 'ar' ? 'قبل العلاج' : 'Before Treatment'}
                                      </h4>
                                      <img
                                        src={caseItem.beforeImage}
                                        alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                                      />
                                    </div>
                                  </div>

                                  {/* After Image */}
                                  <div className="relative">
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                                      <h4 className={`text-lg font-semibold text-green-700 mb-4 text-center ${
                                        language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                      }`}>
                                        {language === 'ar' ? 'بعد العلاج' : 'After Treatment'}
                                      </h4>
                                      <img
                                        src={caseItem.afterImage}
                                        alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              ) : caseItem.afterImage && caseItem.afterImage.trim() !== "" ? (
                                // Only after image (centered)
                                <div className="flex justify-center mb-8">
                                  <div className="relative max-w-4xl w-full">
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                                      <h4 className={`text-lg font-semibold text-green-700 mb-4 text-center ${
                                        language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                      }`}>
                                        {language === 'ar' ? 'بعد العلاج' : 'After Treatment'}
                                      </h4>
                                      <div className="flex justify-center">
                                        <img
                                          src={caseItem.afterImage}
                                          alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                          className="max-w-full h-auto object-contain rounded-lg shadow-lg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : caseItem.beforeImage && caseItem.beforeImage.trim() !== "" ? (
                                // Only before image (centered)
                                <div className="flex justify-center mb-8">
                                  <div className="relative max-w-4xl w-full">
                                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl">
                                      <h4 className={`text-lg font-semibold text-red-700 mb-4 text-center ${
                                        language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                      }`}>
                                        {language === 'ar' ? 'قبل العلاج' : 'Before Treatment'}
                                      </h4>
                                      <div className="flex justify-center">
                                        <img
                                          src={caseItem.beforeImage}
                                          alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                          className="max-w-full h-auto object-contain rounded-lg shadow-lg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}

                              {/* Case Number Badge */}
                              <div className="absolute top-8 right-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                                {language === 'ar' ? `حالة ${index + 1}` : `Case ${index + 1}`}
                              </div>

                              {/* Case Description */}
                              <div className="text-center">
                                <h3 className={`text-2xl font-bold text-gray-800 mb-4 ${
                                  language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                }`}>
                                  {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                                </h3>
                                <p className={`text-gray-600 text-lg ${
                                  language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                }`}>
                                  {language === 'ar' 
                                    ? 'تم العلاج بنجاح باستخدام أحدث التقنيات المتخصصة للأطفال' 
                                    : 'Successfully treated using the latest pediatric dental techniques'
                                  }
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
                      {doctor.cases.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentCase(index)}
                          className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            index === currentCase
                              ? 'bg-gradient-to-r from-pink-500 to-purple-600 scale-125'
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to case ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                           ) : doctor.id === 3 ? (
                // Before/After Gallery for Dr. Eman
                <div className="relative">
                  <div className="flex justify-center">
                    <div className="max-w-6xl w-full">
                      {doctor.cases.map((caseItem, index) => (
                        <div
                          key={caseItem.id}
                          className={`transition-all duration-700 ease-in-out ${
                            index === currentCase
                              ? 'opacity-100 transform translate-x-0 scale-100'
                              : 'opacity-0 transform translate-x-full scale-95 absolute top-0 left-0'
                          }`}
                        >
                          <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-indigo-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                            
                            {/* Image Container */}
                            <div className="relative z-10">
                              <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-full">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                              </div>

                              {/* Before/After Images */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* Before Image */}
                                <div className="relative">
                                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl">
                                    <h4 className={`text-lg font-semibold text-red-700 mb-4 text-center ${
                                      language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                    }`}>
                                      {language === 'ar' ? 'قبل العلاج' : 'Before Treatment'}
                                    </h4>
                                    <img
                                      src={caseItem.beforeImage}
                                      alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                                    />
                                  </div>
                                </div>
                                
                                {/* After Image */}
                                <div className="relative">
                                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                                    <h4 className={`text-lg font-semibold text-green-700 mb-4 text-center ${
                                      language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                    }`}>
                                      {language === 'ar' ? 'بعد العلاج' : 'After Treatment'}
                                    </h4>
                                    <img
                                      src={caseItem.afterImage}
                                      alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Case Description */}
                              <div className="text-center">
                                <h3 className={`text-2xl font-bold text-gray-800 mb-4 ${
                                  language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                }`}>
                                  {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                                </h3>
                                <p className={`text-gray-600 text-lg ${
                                  language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                }`}>
                                  {language === 'ar' 
                                    ? 'تم العلاج بنجاح باستخدام أحدث تقنيات التركيبات الدقيقة' 
                                    : 'Successfully treated using the latest precision prosthetic techniques'
                                  }
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
                      {doctor.cases.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentCase(index)}
                          className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            index === currentCase
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 scale-125'
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to case ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                             ) : doctor.id === 4 ? (
                 // Before/After Gallery for Dr. Ibrahim Issa
                 <div className="space-y-12">
                   {doctor.cases.map((caseItem, index) => (
                     <div
                       key={caseItem.id}
                       className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
                     >
                       {/* Background Pattern */}
                       <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                       <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-cyan-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                       
                       {/* Case Number Badge */}
                       <div className="absolute top-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                         {language === 'ar' ? `حالة ${index + 1}` : `Case ${index + 1}`}
                       </div>
                       
                       {/* Royal College Badge */}
                       <div className="absolute top-8 left-8 bg-gradient-to-r from-[#54c9ea] to-[#4bb8d9] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-20">
                         {language === 'ar' ? 'زميل الكلية الملكية' : 'Royal College Fellow'}
                       </div>

                       {/* Before/After Images */}
                       <div className="relative z-10 mt-4">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                           {/* Before Image */}
                           <div className="relative">
                             <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl">
                               <h4 className={`text-lg font-semibold text-red-700 mb-4 text-center ${
                                 language === 'ar' ? 'font-cairo' : 'font-montserrat'
                               }`}>
                                 {language === 'ar' ? 'قبل العلاج' : 'Before Treatment'}
                               </h4>
                               <img
                                 src={caseItem.beforeImage}
                                 alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                 className="w-full h-80 object-cover rounded-lg shadow-lg"
                               />
                             </div>
                           </div>

                           {/* After Image */}
                           <div className="relative">
                             <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                               <h4 className={`text-lg font-semibold text-green-700 mb-4 text-center ${
                                 language === 'ar' ? 'font-cairo' : 'font-montserrat'
                               }`}>
                                 {language === 'ar' ? 'بعد العلاج' : 'After Treatment'}
                               </h4>
                               <img
                                 src={caseItem.afterImage}
                                 alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                 className="w-full h-80 object-cover rounded-lg shadow-lg"
                               />
                             </div>
                           </div>
                         </div>

                         {/* Description Text Beneath */}
                         <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                           <h3 className={`text-2xl font-bold text-gray-800 mb-3 ${
                             language === 'ar' ? 'font-cairo' : 'font-montserrat'
                           }`}>
                             {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                           </h3>
                           <p className={`text-gray-600 text-lg ${
                             language === 'ar' ? 'font-cairo' : 'font-montserrat'
                           }`}>
                             {language === 'ar' 
                               ? 'تم العلاج بنجاح باستخدام أحدث تقنيات التقويم العالمية مع ضمان النتائج الطبيعية والدائمة' 
                               : 'Successfully treated using the latest global orthodontic techniques with guaranteed natural and lasting results'
                             }
                           </p>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               ) : doctor.id === 5 ? (
                 // Gallery for Dr. Osama - Supports 4 images (before/during/removal/after), 3 images (before/during/after), or single image
                 <div className={doctor.cases.some(c => c.duringImage) ? "space-y-12" : "grid grid-cols-1 lg:grid-cols-3 gap-8"}>
                   {doctor.cases.map((caseItem, index) => (
                     caseItem.removalImage ? (
                       // Case with 4 images: Before, During, Broken File Removal, After
                       <div
                         key={caseItem.id}
                         className="bg-white rounded-xl shadow-lg p-4 relative overflow-hidden max-w-5xl mx-auto"
                       >
                         {/* Background Pattern */}
                         <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-slate-200 rounded-full -translate-y-12 translate-x-12 opacity-50"></div>
                         <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-100 to-slate-200 rounded-full translate-y-8 -translate-x-8 opacity-50"></div>
                         
                         {/* Case Number Badge */}
                         <div className="absolute top-4 right-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-20">
                           {language === 'ar' ? `حالة ${index + 1}` : `Case ${index + 1}`}
                         </div>
                         
                         {/* Images Container */}
                         <div className="relative z-10 mt-2">
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                             {/* Before Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-red-50 to-red-100 p-2 rounded-lg">
                                 <h4 className={`text-sm font-semibold text-red-700 mb-2 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'قبل' : 'Before'}
                                 </h4>
                                 <img
                                   src={caseItem.beforeImage}
                                   alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-auto object-contain rounded-lg shadow-md max-h-48"
                                 />
                               </div>
                             </div>

                             {/* During Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-2 rounded-lg">
                                 <h4 className={`text-sm font-semibold text-orange-700 mb-2 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'أثناء' : 'During'}
                                 </h4>
                                 <img
                                   src={caseItem.duringImage}
                                   alt={`During - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-auto object-contain rounded-lg shadow-md max-h-48"
                                 />
                               </div>
                             </div>

                             {/* Broken File Removal Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-lg">
                                 <h4 className={`text-sm font-semibold text-purple-700 mb-2 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'إزالة الإبرة' : 'File Removal'}
                                 </h4>
                                 <img
                                   src={caseItem.removalImage}
                                   alt={`File Removal - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-auto object-contain rounded-lg shadow-md max-h-48"
                                 />
                               </div>
                             </div>

                             {/* After Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-green-50 to-green-100 p-2 rounded-lg">
                                 <h4 className={`text-sm font-semibold text-green-700 mb-2 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'بعد' : 'After'}
                                 </h4>
                                 <img
                                   src={caseItem.afterImage}
                                   alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-auto object-contain rounded-lg shadow-md max-h-48"
                                 />
                               </div>
                             </div>
                           </div>

                           {/* Description Text Beneath */}
                           <div className="text-center bg-gradient-to-r from-gray-50 to-slate-50 p-3 rounded-lg">
                             <h3 className={`text-lg font-bold text-gray-800 mb-2 ${
                               language === 'ar' ? 'font-cairo' : 'font-montserrat'
                             }`}>
                               {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                             </h3>
                             <p className={`text-gray-600 text-sm ${
                               language === 'ar' ? 'font-cairo' : 'font-montserrat'
                             }`}>
                               {language === 'ar' 
                                 ? 'تم العلاج بنجاح باستخدام أحدث تقنيات علاج الجذور مع ضمان النتائج المثلى' 
                                 : 'Successfully treated using the latest endodontic techniques with guaranteed optimal results'
                               }
                             </p>
                           </div>
                         </div>
                       </div>
                     ) : caseItem.duringImage ? (
                       // Case with 3 images: Before, During, After
                       <div
                         key={caseItem.id}
                         className="bg-white rounded-xl shadow-lg p-4 relative overflow-hidden max-w-4xl mx-auto"
                       >
                         {/* Background Pattern */}
                         <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-slate-200 rounded-full -translate-y-12 translate-x-12 opacity-50"></div>
                         <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-100 to-slate-200 rounded-full translate-y-8 -translate-x-8 opacity-50"></div>
                         
                         {/* Case Number Badge */}
                         <div className="absolute top-4 right-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-20">
                           {language === 'ar' ? `حالة ${index + 1}` : `Case ${index + 1}`}
                         </div>
                         
                         {/* Images Container */}
                         <div className="relative z-10 mt-2">
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                             {/* Before Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-red-50 to-red-100 p-2 rounded-lg">
                                 <h4 className={`text-sm font-semibold text-red-700 mb-2 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'قبل' : 'Before'}
                                 </h4>
                                 <img
                                   src={caseItem.beforeImage}
                                   alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-auto object-contain rounded-lg shadow-md max-h-48"
                                 />
                               </div>
                             </div>

                             {/* During Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-2 rounded-lg">
                                 <h4 className={`text-sm font-semibold text-orange-700 mb-2 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'أثناء' : 'During'}
                                 </h4>
                                 <img
                                   src={caseItem.duringImage}
                                   alt={`During - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-auto object-contain rounded-lg shadow-md max-h-48"
                                 />
                               </div>
                             </div>

                             {/* After Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-green-50 to-green-100 p-2 rounded-lg">
                                 <h4 className={`text-sm font-semibold text-green-700 mb-2 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'بعد' : 'After'}
                                 </h4>
                                 <img
                                   src={caseItem.afterImage}
                                   alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-auto object-contain rounded-lg shadow-md max-h-48"
                                 />
                               </div>
                             </div>
                           </div>

                           {/* Description Text Beneath */}
                           <div className="text-center bg-gradient-to-r from-gray-50 to-slate-50 p-3 rounded-lg">
                             <h3 className={`text-lg font-bold text-gray-800 mb-2 ${
                               language === 'ar' ? 'font-cairo' : 'font-montserrat'
                             }`}>
                               {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                             </h3>
                             <p className={`text-gray-600 text-sm ${
                               language === 'ar' ? 'font-cairo' : 'font-montserrat'
                             }`}>
                               {language === 'ar' 
                                 ? 'تم العلاج بنجاح باستخدام أحدث تقنيات علاج الجذور مع ضمان النتائج المثلى' 
                                 : 'Successfully treated using the latest endodontic techniques with guaranteed optimal results'
                               }
                             </p>
                           </div>
                         </div>
                       </div>
                     ) : (
                       // Case with single image (X-Ray style)
                       <div
                         key={caseItem.id}
                         className="group relative bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-700 hover:shadow-xl border border-gray-200 max-w-md mx-auto"
                       >
                         {/* Image Container */}
                         <div className="relative overflow-hidden">
                           <img
                             src={caseItem.beforeImage}
                             alt={language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                             className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 max-h-64"
                           />
                           
                           {/* X-Ray Overlay */}
                           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                             <div className="absolute bottom-4 left-4 right-4">
                               <h3 className={`text-white text-sm font-semibold mb-1 ${
                                 language === 'ar' ? 'font-cairo' : 'font-montserrat'
                               }`}>
                                 {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                               </h3>
                               <p className={`text-gray-200 text-xs ${
                                 language === 'ar' ? 'font-cairo' : 'font-montserrat'
                               }`}>
                                 {language === 'ar' 
                                   ? 'تم العلاج بنجاح باستخدام أحدث تقنيات علاج الجذور' 
                                   : 'Successfully treated using the latest endodontic techniques'
                                 }
                               </p>
                             </div>
                           </div>
                           
                           {/* Case Number Badge */}
                           <div className="absolute top-3 right-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                             {language === 'ar' ? `حالة ${index + 1}` : `Case ${index + 1}`}
                           </div>
                           
                           {/* X-Ray Badge */}
                           <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                             {language === 'ar' ? 'أشعة سينية' : 'X-Ray'}
                           </div>
                         </div>
                         
                         {/* Description */}
                         <div className="p-4">
                           <h3 className={`text-base font-bold text-gray-800 mb-2 ${
                             language === 'ar' ? 'font-cairo' : 'font-montserrat'
                           }`}>
                             {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                           </h3>
                           <p className={`text-gray-600 text-xs leading-relaxed ${
                             language === 'ar' ? 'font-cairo' : 'font-montserrat'
                           }`}>
                             {language === 'ar' 
                               ? 'تم العلاج بنجاح باستخدام أحدث تقنيات علاج الجذور مع ضمان النتائج المثلى' 
                               : 'Successfully treated using the latest endodontic techniques with guaranteed optimal results'
                             }
                           </p>
                           
                           {/* Treatment Stats */}
                           <div className="mt-3 flex justify-between items-center">
                             <div className="flex items-center space-x-1">
                               <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                               <span className={`text-xs text-gray-500 ${
                                 language === 'ar' ? 'font-cairo' : 'font-montserrat'
                               }`}>
                                 {language === 'ar' ? 'علاج متقدم' : 'Advanced Treatment'}
                               </span>
                             </div>
                             <div className="flex items-center space-x-1">
                               <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                               <span className={`text-xs text-gray-500 ${
                                 language === 'ar' ? 'font-cairo' : 'font-montserrat'
                               }`}>
                                 {language === 'ar' ? 'نتيجة مثلى' : 'Optimal Result'}
                               </span>
                             </div>
                           </div>
                         </div>
                       </div>
                     )
                   ))}
                 </div>
                               ) : doctor.id === 6 ? (
                  // Custom Gallery for Dr. Kozaa - Supports 3 images (before/during/after) or 2 images (before/after)
                  <div className="space-y-12">
                    {doctor.cases.map((caseItem, index) => (
                      <div
                        key={caseItem.id}
                        className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
                      >
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-slate-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100 to-slate-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                        
                        {/* Case Number Badge */}
                        <div className="absolute top-8 right-8 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                          {language === 'ar' ? `حالة ${index + 1}` : `Case ${index + 1}`}
                        </div>
                        
                        {/* Royal College Badge */}
                        <div className="absolute top-8 left-8 bg-gradient-to-r from-[#54c9ea] to-[#4bb8d9] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-20">
                          {language === 'ar' ? 'زميل الكلية الملكية' : 'Royal College Fellow'}
                        </div>

                        {/* Images Container */}
                        <div className="relative z-10 mt-4">
                          {caseItem.duringImage ? (
                            // Case with 3 images: Before, During, After
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                              {/* Before Image */}
                              <div className="relative">
                                <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl">
                                  <h4 className={`text-base font-semibold text-red-700 mb-3 text-center ${
                                    language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                  }`}>
                                    {language === 'ar' ? 'قبل' : 'Before'}
                                  </h4>
                                  <img
                                    src={caseItem.beforeImage}
                                    alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                                  />
                                </div>
                              </div>

                              {/* During Image */}
                              <div className="relative">
                                <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-4 rounded-xl">
                                  <h4 className={`text-base font-semibold text-orange-700 mb-3 text-center ${
                                    language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                  }`}>
                                    {language === 'ar' ? 'أثناء' : 'During'}
                                  </h4>
                                  <img
                                    src={caseItem.duringImage}
                                    alt={`During - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                                  />
                                </div>
                              </div>

                              {/* After Image */}
                              <div className="relative">
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                                  <h4 className={`text-base font-semibold text-green-700 mb-3 text-center ${
                                    language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                  }`}>
                                    {language === 'ar' ? 'بعد' : 'After'}
                                  </h4>
                                  <img
                                    src={caseItem.afterImage}
                                    alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                                  />
                                </div>
                              </div>
                            </div>
                          ) : (
                            // Case with 2 images: Before, After
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                              {/* Before Image */}
                              <div className="relative">
                                <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl">
                                  <h4 className={`text-lg font-semibold text-red-700 mb-4 text-center ${
                                    language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                  }`}>
                                    {language === 'ar' ? 'قبل العلاج' : 'Before Treatment'}
                                  </h4>
                                  <img
                                    src={caseItem.beforeImage}
                                    alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                                  />
                                </div>
                              </div>

                              {/* After Image */}
                              <div className="relative">
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                                  <h4 className={`text-lg font-semibold text-green-700 mb-4 text-center ${
                                    language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                  }`}>
                                    {language === 'ar' ? 'بعد العلاج' : 'After Treatment'}
                                  </h4>
                                  <img
                                    src={caseItem.afterImage}
                                    alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Description Text Beneath */}
                          <div className="text-center bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl">
                            <h3 className={`text-2xl font-bold text-gray-800 mb-3 ${
                              language === 'ar' ? 'font-cairo' : 'font-montserrat'
                            }`}>
                              {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                            </h3>
                            <p className={`text-gray-600 text-lg ${
                              language === 'ar' ? 'font-cairo' : 'font-montserrat'
                            }`}>
                              {language === 'ar' 
                                ? 'تم العلاج بنجاح باستخدام أحدث تقنيات علاج الجذور مع ضمان النتائج المثلى' 
                                : 'Successfully treated using the latest endodontic techniques with guaranteed optimal results'
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
               ) : doctor.id === 7 ? (
                 // Custom Gallery for Dr. Belal - Single image or 3 images (before/during/after)
                 <div className="space-y-12">
                   {doctor.cases.map((caseItem, index) => (
                     <div
                       key={caseItem.id}
                       className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
                     >
                       {/* Background Pattern */}
                       <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                       <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-emerald-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                       
                       {/* Case Number Badge */}
                       <div className="absolute top-8 right-8 bg-gradient-to-r from-green-700 to-emerald-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                         {language === 'ar' ? `حالة ${index + 1}` : `Case ${index + 1}`}
                       </div>
                       
                       {/* British Fellowship Badge */}
                       <div className="absolute top-8 left-8 bg-gradient-to-r from-[#54c9ea] to-[#4bb8d9] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-20">
                         {language === 'ar' ? 'زمالة بريطانية' : 'British Fellowship'}
                       </div>

                       {/* Images Container */}
                       <div className="relative z-10 mt-4">
                         {caseItem.afterImage && !caseItem.duringImage && (!caseItem.beforeImage || caseItem.beforeImage.trim() === "") ? (
                           // Case with single image (X-ray)
                           <div className="flex justify-center mb-6">
                             <div className="relative max-w-4xl w-full">
                               <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-4 rounded-xl">
                                 <h4 className={`text-lg font-semibold text-gray-700 mb-4 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'صورة أشعة' : 'X-Ray Image'}
                                 </h4>
                                 <div className="flex justify-center">
                                   <img
                                     src={caseItem.afterImage}
                                     alt={`X-Ray - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                     className="max-w-full h-auto object-contain rounded-lg shadow-lg"
                                   />
                                 </div>
                               </div>
                             </div>
                           </div>
                         ) : caseItem.duringImage ? (
                           // Case with 3 images: Before, During, After
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                             {/* Before Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl">
                                 <h4 className={`text-base font-semibold text-red-700 mb-3 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'قبل' : 'Before'}
                                 </h4>
                                 <img
                                   src={caseItem.beforeImage}
                                   alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-64 object-cover rounded-lg shadow-lg"
                                 />
                               </div>
                             </div>

                             {/* During Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-4 rounded-xl">
                                 <h4 className={`text-base font-semibold text-orange-700 mb-3 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'أثناء' : 'During'}
                                 </h4>
                                 <img
                                   src={caseItem.duringImage}
                                   alt={`During - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-64 object-cover rounded-lg shadow-lg"
                                 />
                               </div>
                             </div>

                             {/* After Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                                 <h4 className={`text-base font-semibold text-green-700 mb-3 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'بعد' : 'After'}
                                 </h4>
                                 <img
                                   src={caseItem.afterImage}
                                   alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-64 object-cover rounded-lg shadow-lg"
                                 />
                               </div>
                             </div>
                           </div>
                         ) : (
                           // Case with 2 images: Before, After
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                             {/* Before Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl">
                                 <h4 className={`text-lg font-semibold text-red-700 mb-4 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'قبل العلاج' : 'Before Treatment'}
                                 </h4>
                                 <img
                                   src={caseItem.beforeImage}
                                   alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-80 object-cover rounded-lg shadow-lg"
                                 />
                               </div>
                             </div>

                             {/* After Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                                 <h4 className={`text-lg font-semibold text-green-700 mb-4 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'بعد العلاج' : 'After Treatment'}
                                 </h4>
                                 <img
                                   src={caseItem.afterImage}
                                   alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-80 object-cover rounded-lg shadow-lg"
                                 />
                               </div>
                             </div>
                           </div>
                         )}

                         {/* Description Text Beneath */}
                         <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                           <h3 className={`text-2xl font-bold text-gray-800 mb-3 ${
                             language === 'ar' ? 'font-cairo' : 'font-montserrat'
                           }`}>
                             {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                           </h3>
                           <p className={`text-gray-600 text-lg ${
                             language === 'ar' ? 'font-cairo' : 'font-montserrat'
                           }`}>
                             {language === 'ar' 
                               ? 'تم العلاج بنجاح باستخدام أحدث تقنيات طب الأسنان مع ضمان النتائج المثلى' 
                               : 'Successfully treated using the latest dental techniques with guaranteed optimal results'
                             }
                           </p>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
                ) : doctor.id === 8 ? (
                  // Custom Gallery for Dr. Kareem - Supports single image or before/after
                  <div className="space-y-12">
                    {doctor.cases.map((caseItem, index) => (
                      <div
                        key={caseItem.id}
                        className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
                      >
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-indigo-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                        
                        {/* Case Number Badge */}
                        <div className="absolute top-8 right-8 bg-gradient-to-r from-purple-700 to-indigo-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                          {language === 'ar' ? `حالة ${index + 1}` : `Case ${index + 1}`}
                        </div>

                        {/* Images Container */}
                        <div className="relative z-10 mt-4">
                          {(!caseItem.beforeImage || caseItem.beforeImage.trim() === "") && caseItem.afterImage && !caseItem.duringImage ? (
                            // Case with single image
                            <div className="flex justify-center mb-6">
                              <div className="relative max-w-4xl w-full">
                                <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-4 rounded-xl">
                                  <div className="flex justify-center">
                                    <img
                                      src={caseItem.afterImage}
                                      alt={`${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                      className="max-w-full h-auto object-contain rounded-lg shadow-lg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            // Case with before/after images
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                              {/* Before Image */}
                              <div className="relative">
                                <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl">
                                  <h4 className={`text-lg font-semibold text-red-700 mb-4 text-center ${
                                    language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                  }`}>
                                    {language === 'ar' ? 'قبل العلاج' : 'Before Treatment'}
                                  </h4>
                                  <img
                                    src={caseItem.beforeImage}
                                    alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                                  />
                                </div>
                              </div>

                              {/* After Image */}
                              <div className="relative">
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                                  <h4 className={`text-lg font-semibold text-green-700 mb-4 text-center ${
                                    language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                  }`}>
                                    {language === 'ar' ? 'بعد العلاج' : 'After Treatment'}
                                  </h4>
                                  <img
                                    src={caseItem.afterImage}
                                    alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Description Text Beneath */}
                          <div className="text-center bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
                            <h3 className={`text-2xl font-bold text-gray-800 mb-3 ${
                              language === 'ar' ? 'font-cairo' : 'font-montserrat'
                            }`}>
                              {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                            </h3>
                            <p className={`text-gray-600 text-lg ${
                              language === 'ar' ? 'font-cairo' : 'font-montserrat'
                            }`}>
                              {language === 'ar' 
                                ? 'تم العلاج بنجاح باستخدام أحدث تقنيات طب الأسنان مع ضمان النتائج المثلى' 
                                : 'Successfully treated using the latest dental techniques with guaranteed optimal results'
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                 ) : doctor.id === 9 ? (
                   // Treatment Stages Gallery for Dr. Ahmed El-Bakry - Separated by Case
                   <div className="relative space-y-16">
                     {/* Case 1: Biobase Post & Emax Overlay (Stages 1-4) */}
                     <div>
                       <div className="text-center mb-8">
                         <h3 className={`text-3xl font-bold text-gray-800 mb-2 ${
                           language === 'ar' ? 'font-cairo' : 'font-montserrat'
                         }`}>
                           {language === 'ar' ? 'حالة 1: إعادة تأهيل الضرس بالدعامة والتركيبة' : 'Case 1: Molar Rehabilitation with Post and Crown'}
                         </h3>
                       </div>
                       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         {doctor.cases.filter((_, idx) => idx < 4).map((caseItem, index) => (
                           <div
                             key={caseItem.id}
                             className="group relative bg-gradient-to-br from-[#54c9ea]/10 to-[#4bb8d9]/20 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-700 hover:shadow-2xl border border-[#54c9ea]/30"
                           >
                             {/* Stage Number Badge */}
                             <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-[#54c9ea] to-[#4bb8d9] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                               {language === 'ar' ? `المرحلة ${index + 1}` : `Stage ${index + 1}`}
                             </div>
                             
                             {/* Image Container */}
                             <div className="relative overflow-hidden">
                               <img
                                 src={caseItem.beforeImage}
                                 alt={language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                                 className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                               />
                               
                               {/* Treatment Stage Overlay */}
                               <div className="absolute inset-0 bg-gradient-to-t from-[#54c9ea]/90 via-[#4bb8d9]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                 <div className="absolute bottom-6 left-6 right-6">
                                   <h3 className={`text-white text-lg font-semibold mb-2 ${
                                     language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                   }`}>
                                     {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                                   </h3>
                                   <p className={`text-[#54c9ea]/90 text-sm ${
                                     language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                   }`}>
                                     {language === 'ar' 
                                       ? 'تم العلاج بنجاح باستخدام أحدث تقنيات الحشوات المدعمة' 
                                       : 'Successfully treated using the latest reinforced filling techniques'
                                     }
                                   </p>
                                 </div>
                               </div>
                             </div>
                             
                             {/* Description */}
                             <div className="p-6">
                               <h3 className={`text-xl font-bold text-gray-800 mb-3 ${
                                 language === 'ar' ? 'font-cairo' : 'font-montserrat'
                               }`}>
                                 {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                               </h3>
                               <p className={`text-gray-600 text-sm leading-relaxed ${
                                 language === 'ar' ? 'font-cairo' : 'font-montserrat'
                               }`}>
                                 {language === 'ar' 
                                   ? 'تم العلاج بنجاح باستخدام أقوى المواد للحفاظ على متانة الضروس' 
                                   : 'Successfully treated using the strongest materials to maintain molar strength'
                                 }
                               </p>
                               
                               {/* Treatment Progress */}
                               <div className="mt-4">
                                 <div className="flex items-center justify-between mb-2">
                                   <span className={`text-xs text-gray-500 ${
                                     language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                   }`}>
                                     {language === 'ar' ? 'تقدم العلاج' : 'Treatment Progress'}
                                   </span>
                                   <span className={`text-xs font-semibold text-[#54c9ea] ${
                                     language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                   }`}>
                                     {Math.round(((index + 1) / 4) * 100)}%
                                   </span>
                                 </div>
                                 <div className="w-full bg-gray-200 rounded-full h-2">
                                   <div 
                                     className="bg-gradient-to-r from-[#54c9ea] to-[#4bb8d9] h-2 rounded-full transition-all duration-500"
                                     style={{ width: `${((index + 1) / 4) * 100}%` }}
                                   ></div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         ))}
                       </div>
                       
                       {/* Treatment Summary for Case 1 */}
                       <div className="mt-12 bg-gradient-to-r from-[#54c9ea]/10 to-[#4bb8d9]/10 rounded-2xl p-8 border border-[#54c9ea]/30">
                         <div className="text-center">
                           <h3 className={`text-2xl font-bold text-gray-800 mb-4 ${
                             language === 'ar' ? 'font-cairo' : 'font-montserrat'
                           }`}>
                             {language === 'ar' ? 'ملخص حالة 1' : 'Case 1 Summary'}
                           </h3>
                           <p className={`text-gray-600 text-lg leading-relaxed ${
                             language === 'ar' ? 'font-cairo' : 'font-montserrat'
                           }`}>
                             {language === 'ar' 
                               ? 'تم تنفيذ العلاج على 4 مراحل متتالية باستخدام الحشوات المدعمة بالفايبر والتركيبات الجزئية بأقوى المواد المتاحة' 
                               : 'Treatment was completed in 4 consecutive stages using fiber-reinforced fillings and partial prosthetics with the strongest available materials'
                             }
                           </p>
                         </div>
                       </div>
                     </div>

                     {/* Case 2: Ribbond Reinforced Composite (Stages 5-7) */}
                     <div>
                       <div className="text-center mb-8">
                         <h3 className={`text-3xl font-bold text-gray-800 mb-2 ${
                           language === 'ar' ? 'font-cairo' : 'font-montserrat'
                         }`}>
                           {language === 'ar' ? 'حالة 2: حشو مدعم بالريبوند' : 'Case 2: Ribbond Reinforced Composite'}
                         </h3>
                       </div>
                       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         {doctor.cases.filter((_, idx) => idx >= 4).map((caseItem, index) => (
                           <div
                             key={caseItem.id}
                             className="group relative bg-gradient-to-br from-[#54c9ea]/10 to-[#4bb8d9]/20 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-700 hover:shadow-2xl border border-[#54c9ea]/30"
                           >
                             {/* Stage Number Badge */}
                             <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-[#54c9ea] to-[#4bb8d9] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                               {language === 'ar' ? `المرحلة ${index + 1}` : `Stage ${index + 1}`}
                             </div>
                             
                             {/* Image Container */}
                             <div className="relative overflow-hidden">
                               <img
                                 src={caseItem.beforeImage}
                                 alt={language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                                 className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                               />
                               
                               {/* Treatment Stage Overlay */}
                               <div className="absolute inset-0 bg-gradient-to-t from-[#54c9ea]/90 via-[#4bb8d9]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                 <div className="absolute bottom-6 left-6 right-6">
                                   <h3 className={`text-white text-lg font-semibold mb-2 ${
                                     language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                   }`}>
                                     {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                                   </h3>
                                   <p className={`text-[#54c9ea]/90 text-sm ${
                                     language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                   }`}>
                                     {language === 'ar' 
                                       ? 'تم العلاج بنجاح باستخدام الحشوات المدعمة بالريبوند' 
                                       : 'Successfully treated using Ribbond reinforced composite fillings'
                                     }
                                   </p>
                                 </div>
                               </div>
                             </div>
                             
                             {/* Description */}
                             <div className="p-6">
                               <h3 className={`text-xl font-bold text-gray-800 mb-3 ${
                                 language === 'ar' ? 'font-cairo' : 'font-montserrat'
                               }`}>
                                 {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                               </h3>
                               <p className={`text-gray-600 text-sm leading-relaxed ${
                                 language === 'ar' ? 'font-cairo' : 'font-montserrat'
                               }`}>
                                 {language === 'ar' 
                                   ? 'تم العلاج بنجاح باستخدام الحشوات المدعمة بالريبوند للحفاظ على متانة الأسنان' 
                                   : 'Successfully treated using Ribbond reinforced composite fillings to maintain dental strength'
                                 }
                               </p>
                               
                               {/* Treatment Progress */}
                               <div className="mt-4">
                                 <div className="flex items-center justify-between mb-2">
                                   <span className={`text-xs text-gray-500 ${
                                     language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                   }`}>
                                     {language === 'ar' ? 'تقدم العلاج' : 'Treatment Progress'}
                                   </span>
                                   <span className={`text-xs font-semibold text-[#54c9ea] ${
                                     language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                   }`}>
                                     {Math.round(((index + 1) / 3) * 100)}%
                                   </span>
                                 </div>
                                 <div className="w-full bg-gray-200 rounded-full h-2">
                                   <div 
                                     className="bg-gradient-to-r from-[#54c9ea] to-[#4bb8d9] h-2 rounded-full transition-all duration-500"
                                     style={{ width: `${((index + 1) / 3) * 100}%` }}
                                   ></div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         ))}
                       </div>
                       
                       {/* Treatment Summary for Case 2 */}
                       <div className="mt-12 bg-gradient-to-r from-[#54c9ea]/10 to-[#4bb8d9]/10 rounded-2xl p-8 border border-[#54c9ea]/30">
                         <div className="text-center">
                           <h3 className={`text-2xl font-bold text-gray-800 mb-4 ${
                             language === 'ar' ? 'font-cairo' : 'font-montserrat'
                           }`}>
                             {language === 'ar' ? 'ملخص حالة 2' : 'Case 2 Summary'}
                           </h3>
                           <p className={`text-gray-600 text-lg leading-relaxed ${
                             language === 'ar' ? 'font-cairo' : 'font-montserrat'
                           }`}>
                             {language === 'ar' 
                               ? 'تم تنفيذ العلاج على 3 مراحل متتالية باستخدام الحشوات المدعمة بالريبوند' 
                               : 'Treatment was completed in 3 consecutive stages using Ribbond reinforced composite fillings'
                             }
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                 ) : doctor.id === 10 ? (
                   // Before/After Gallery for Dr. Amal - Side by Side
                   <div className="space-y-8 md:space-y-12 w-full">
                     {doctor.cases.map((caseItem, index) => (
                       <div
                         key={caseItem.id}
                         className="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-8 relative overflow-hidden w-full"
                       >
                         {/* Background Pattern */}
                         <div className={`absolute top-0 ${language === 'ar' ? 'right-0' : 'left-0'} w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full -translate-y-12 md:-translate-y-16 ${language === 'ar' ? 'translate-x-12 md:translate-x-16' : '-translate-x-12 md:-translate-x-16'} opacity-50`}></div>
                         <div className={`absolute bottom-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-16 h-16 md:w-24 md:h-24 bg-gradient-to-tr from-indigo-100 to-purple-200 rounded-full translate-y-8 md:translate-y-12 ${language === 'ar' ? '-translate-x-8 md:-translate-x-12' : 'translate-x-8 md:translate-x-12'} opacity-50`}></div>
                         
                         {/* Case Number Badge */}
                         <div className={`absolute top-4 md:top-8 ${language === 'ar' ? 'right-4 md:right-8' : 'left-4 md:left-8'} bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm md:text-base font-semibold shadow-lg z-20 whitespace-nowrap`}>
                           {language === 'ar' ? `حالة ${index + 1}` : `Case ${index + 1}`}
                         </div>

                         {/* Before/After Images Side by Side */}
                         <div className="relative z-10 mt-4 md:mt-4">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-6">
                             {/* Before Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 md:p-4 rounded-xl">
                                 <h4 className={`text-sm md:text-lg font-semibold text-red-700 mb-3 md:mb-4 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'قبل العلاج' : 'Before Treatment'}
                                 </h4>
                                 <img
                                   src={caseItem.beforeImage}
                                   alt={`Before - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                                 />
                               </div>
                             </div>

                             {/* After Image */}
                             <div className="relative">
                               <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 md:p-4 rounded-xl">
                                 <h4 className={`text-sm md:text-lg font-semibold text-green-700 mb-3 md:mb-4 text-center ${
                                   language === 'ar' ? 'font-cairo' : 'font-montserrat'
                                 }`}>
                                   {language === 'ar' ? 'بعد العلاج' : 'After Treatment'}
                                 </h4>
                                 <img
                                   src={caseItem.afterImage}
                                   alt={`After - ${language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}`}
                                   className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                                 />
                               </div>
                             </div>
                           </div>

                           {/* Case Description */}
                           <div className="text-center w-full px-2 md:px-0">
                             <h3 className={`text-base md:text-2xl font-bold text-gray-800 mb-2 md:mb-3 break-words leading-tight ${
                               language === 'ar' ? 'font-cairo' : 'font-montserrat'
                             }`}>
                               {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                             </h3>
                             <p className={`text-gray-600 text-sm md:text-lg break-words leading-relaxed ${
                               language === 'ar' ? 'font-cairo' : 'font-montserrat'
                             }`}>
                               {language === 'ar' 
                                 ? 'تم العلاج بنجاح باستخدام أحدث التقنيات المتخصصة' 
                                 : 'Successfully treated using the latest specialized techniques'
                               }
                             </p>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                 ) : (
                 // Grid for other doctors
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctor.cases.map((caseItem, index) => (
                  <div
                    key={caseItem.id}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={caseItem.beforeImage}
                        alt={language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className={`text-white text-lg font-semibold ${
                            language === 'ar' ? 'font-cairo' : 'font-montserrat'
                          }`}>
                            {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Case Number Badge */}
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {language === 'ar' ? `حالة ${index + 1}` : `Case ${index + 1}`}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="p-6">
                      <h3 className={`text-lg font-semibold text-gray-800 mb-2 ${
                        language === 'ar' ? 'font-cairo' : 'font-montserrat'
                      }`}>
                        {language === 'ar' ? caseItem.descriptionAr : caseItem.descriptionEn}
                      </h3>
                      <p className={`text-gray-600 text-sm ${
                        language === 'ar' ? 'font-cairo' : 'font-montserrat'
                      }`}>
                        {language === 'ar' 
                          ? 'تم العلاج بنجاح باستخدام أحدث التقنيات' 
                          : 'Successfully treated using the latest techniques'
                        }
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Gallery Stats */}
            <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{doctor.cases.length}</div>
                <p className={`text-sm sm:text-base text-gray-600 ${
                  language === 'ar' ? 'font-cairo' : 'font-montserrat'
                }`}>
                  {language === 'ar' ? 'حالة معروضة' : 'Cases Displayed'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">100%</div>
                <p className={`text-sm sm:text-base text-gray-600 ${
                  language === 'ar' ? 'font-cairo' : 'font-montserrat'
                }`}>
                  {language === 'ar' ? 'معدل النجاح' : 'Success Rate'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">15+</div>
                <p className={`text-sm sm:text-base text-gray-600 ${
                  language === 'ar' ? 'font-cairo' : 'font-montserrat'
                }`}>
                  {language === 'ar' ? 'سنوات الخبرة' : 'Years Experience'}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      {doctor.reviews && doctor.reviews.length > 0 && (
        <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {language === 'ar' ? 'آراء المرضى' : 'Patient Reviews'}
              </h2>
              <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 ${
                language === 'ar' ? 'font-cairo' : 'font-montserrat'
              }`}>
                {language === 'ar' 
                  ? 'اكتشف ما يقوله مرضانا عن تجربتهم مع الدكتور' 
                  : 'Discover what our patients say about their experience with the doctor'
                }
              </p>
            </div>

            <div className="relative">
              <div className="flex justify-center">
                <div className="max-w-4xl w-full">
                  {doctor.reviews.map((review, index) => (
                    <div
                      key={review.id}
                      className={`transition-all duration-700 ease-in-out ${
                        index === currentReview
                          ? 'opacity-100 transform translate-x-0 scale-100'
                          : 'opacity-0 transform translate-x-full scale-95 absolute top-0 left-0'
                      }`}
                    >
                      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
                        <div className="text-center">
                          {/* Rating */}
                          <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                            <div className="flex space-x-1">
                              {renderStars(review.rating)}
                            </div>
                          </div>

                          {/* Review Text */}
                          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-7 md:mb-8 px-2 ${
                            language === 'ar' ? 'font-cairo' : 'font-montserrat'
                          }`}>
                            {language === 'ar' ? review.textAr : review.textEn}
                          </p>

                          {/* Author Info */}
                          <div>
                            <h4 className={`text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 ${
                              language === 'ar' ? 'font-cairo' : 'font-montserrat'
                            }`}>
                              {language === 'ar' ? review.nameAr : review.nameEn}
                            </h4>
                            <p className={`text-sm sm:text-base text-gray-500 ${
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
              <div className="flex justify-center mt-6 sm:mt-8">
                <div className="flex gap-2 sm:gap-3">
                  {doctor.reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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
          </div>
        </section>
      )}
       
       {/* Footer */}
       <Footer />
       
       {/* Floating Facebook Icon */}
       <a
         href="https://www.facebook.com/profile.php?id=100094644267456"
         target="_blank"
         rel="noopener noreferrer"
         className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce"
         aria-label="Visit our Facebook page"
       >
         <svg
           className="w-4 h-4 md:w-6 md:h-6"
           fill="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
         </svg>
       </a>
     </div>
   );
 };

export default DoctorDetail;
