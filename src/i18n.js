import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navbar & Global
      "nav_brand": "Dr. Mohamed Abdelbasst",
      "nav_services": "Services",
      "nav_about": "About",
      "nav_gallery": "Gallery",
      "nav_location": "Location",
      "nav_book": "Book Appointment",
      
      // Hero
      "hero_badge": "Welcome to PureLife Ortho",
      "hero_title": "Advanced Orthopedic Care for a Pain-Free Life",
      "hero_desc": "Expert diagnosis and cutting-edge treatments from Dr. Mohamed Abdelbasst. We specialize in joint pain, sports injuries, and spine conditions to help you get back to your active lifestyle.",
      "hero_book": "Book Appointment",
      "hero_call": "Call Now",

      // carousel
      "carousel_title": "Photo Gallery",
      "expand_image": "Expand",

      
      // Services
      "services_title": "Our Expertise",
      "service_1_title": "Joint Replacement",
      "service_1_desc": "Advanced procedures for knee and hip replacements to restore your mobility.",
      "service_2_title": "Sports Injuries",
      "service_2_desc": "Expert treatment for ACL tears, meniscal injuries, and other sports-related conditions.",
      "service_3_title": "Spine & Back Care",
      "service_3_desc": "Comprehensive management of spinal conditions, herniated discs, and back pain.",
      "service_4_title": "Fracture & Trauma",
      "service_4_desc": "Immediate and specialized care for all types of bone fractures and musculoskeletal trauma.",
      "service_learn_more": "Learn More \u2192",
      
      // About
      "about_title": "About Dr. Mohamed",
      "about_subtitle": "Specialist in Orthopedic Surgery",
      "about_p1": "Dr. Mohamed Abdelbasst brings over 8 years of clinical experience in orthopedic surgery, focusing on minimally invasive techniques for joint replacement and sports injuries.",
      "about_p2": "He is dedicated to providing personalized care, ensuring each patient fully understands their condition and the most effective treatment options available. His approach blends advanced modern medicine with compassion.",
      "about_f1_title": "Board Certified",
      "about_f1_desc": "Recognized Excellence",
      "about_f2_title": "10k+ Patients",
      "about_f2_desc": "Successfully Treated",
      "about_f3_title": "Modern Tech",
      "about_f3_desc": "Latest Treatments",
      "about_consult": "Consult Now",
      
      // Working Hours
      "hours_title": "Clinic Working Hours",
      "hours_desc": "We are dedicated to being available when you need us most. Emergency consultations are available upon special request.",
      "day_sat": "Saturday",
      "day_sun": "Sunday",
      "day_mon": "Monday",
      "day_tue": "Tuesday",
      "day_wed": "Wednesday",
      "day_thu": "Thursday",
      "day_fri": "Friday",
      "status_closed": "Closed",
      
      // Gallery
      "gallery_title": "Our Facilities",
      "gallery_img1": "Clinic Reception",
      "gallery_img2": "Modern Equipment",
      "gallery_img3": "Consultation Room",
      "gallery_img4": "Physical Therapy Area",
      "gallery_img5": "X-Ray Facility",
      "gallery_img6": "Recovery Room",
      
      // Location Map
      "location_title": "Our Location",
      "location_subtitle": "Visit Our Clinic",
      "location_desc": "Conveniently located in the heart of the city with ample parking available.",
      "location_address_label": "Address",
      "location_address_val": "El Gash, Al-Fashn City, Al-Fashn, Beni Suef Governorate 62511",
      "location_phone_label": "Phone",
      "location_email_label": "Email",
      "location_directions": "Get Directions",
      
      // Booking Form
      "booking_title": "Request an Appointment",
      "booking_badge": "Appointment",
      "booking_desc_text": "Book your consultation now. Fill out the form and we will contact you shortly.",
      "booking_form_header": "Personal Details",
      "booking_form_subheader": "Please provide your contact information",
      "booking_privacy_note": "By submitting, you agree to our privacy policy and terms.",
      "booking_name": "Full Name",
      "booking_name_ph": "John Doe",
      "booking_phone": "Phone Number",
      "booking_date": "Preferred Date",
      "booking_time": "Preferred Time",
      "booking_time_select": "Select a time",
      "booking_time_morning": "Morning (9AM - 1PM)",
      "booking_time_afternoon": "Afternoon (2PM - 6PM)",
      "booking_time_evening": "Evening (6PM - 9PM)",
      "booking_msg": "Message (Optional)",
      "booking_msg_ph": "Briefly describe your symptoms...",
      "booking_submit": "Book Now",
      "booking_alert": "Booking request received! We will contact you shortly to confirm.",
      
      // Social
      "social_title": "Follow Our Journey",
      "social_badge": "Stay Connected",
      "social_desc": "Stay updated with our latest healthcare tips, patient stories, and clinical announcements.",
      "social_fb": "Facebook",
      "social_ig": "Instagram",
      
      // Additional Redesign Strings
      "emergency_label": "Emergency Call:",
      "hero_badge_rated": "Best Rated 2024",
      "hero_badge_expert": "Expert Care",
      "hero_stats_years": "Years Exp.",
      "hero_stats_patients": "Happy Patients",
      "about_badge": "Expert Surgeon",
      "services_subtitle": "Our Expertise",
      "services_desc": "We providing comprehensive orthopedic care using the latest medical technologies.",
      "location_badge": "Find Us",
      "location_desc": "Visit Dr. Mohamed Abdelbasst at his specialized orthopedic clinic.",
      "carousel_badge": "Our Facility",

      // Footer
      "footer_slogan": "Advanced Orthopedic Care for a Pain-Free Life.",
      "footer_quick_links": "Quick Links",
      "footer_home": "Home",
      "footer_contact_title": "Contact Us",
      "footer_rights": "abdelbasstorthoclinic.com. All Rights Reserved."
    }
  },
  ar: {
    translation: {
      // Navbar & Global
      "nav_brand": "د. محمد عبدالباسط",
      "nav_services": "خدماتنا",
      "nav_about": "عن الطبيب",
      "nav_gallery": "المعرض",
      "nav_location": "موقعنا",
      "nav_book": "احجز موعداً",
      
      // Hero
      "hero_badge": "مرحباً بكم",
      "hero_title": "رعاية عظام متطورة لحياة خالية من الألم",
      "hero_desc": "تشخيص دقيق وعلاجات حديثة مع دكتور محمد عبدالباسط. نحن متخصصون في آلام المفاصل، الإصابات الرياضية، وحالات العمود الفقري لمساعدتك على العودة لأسلوب حياتك النشط.",
      "hero_book": "احجز موعداً",
      "hero_call": "اتصل الآن",

      // carousel
      "carousel_title": "معرض الصور ",
      "expand_image": "عرض",
      
      // Services
      "services_title": "خبراتنا",
      "service_1_title": "تغيير المفاصل",
      "service_1_desc": "إجراءات متقدمة لتغيير مفاصل الركبة والورك لاستعادة حركتك الطبيعية.",
      "service_2_title": "الإصابات الرياضية",
      "service_2_desc": "علاج متخصص لتمزق الرباط الصليبي وإصابات الغضروف الهلالي وغيرها من الإصابات الرياضية.",
      "service_3_title": "رعاية العمود الفقري والظهر",
      "service_3_desc": "إدارة شاملة لحالات العمود الفقري، الانزلاق الغضروفي، وآلام الظهر.",
      "service_4_title": "الكسور والإصابات",
      "service_4_desc": "رعاية فورية ومتخصصة لجميع أنواع كسور العظام وإصابات الجهاز العضلي الهيكلي.",
      "service_learn_more": "اعرف المزيد \u2190",
      
      // About
      "about_title": "عن الدكتور محمد",
      "about_subtitle": "اخصائي جراحات العظام والكسور والمفاصل ومناظير الركبه والكتف وإصابات الملاعب وآلام العمود الفقري ",
      "about_p2": "يتمتع د. محمد عبدالباسط بخبرة تزيد عن 8 سنوات في جراحة العظام، مع التركيز على تقنيات التدخل المحدود لتغيير المفاصل والإصابات الرياضية.",
      "about_p1": "ماجستير جراحه العظام والمفاصل عضو الجمعية المصرية لجراحة العظام عضو الجمعية المصرية لمناظير الركبه والكتف مستشفيات التأمين الصحي بني سويف/ الدقي",
      "about_f1_title": "ماجستير جراحه العظام والمفاصل",
      "about_f1_desc": "ماجستير جراحه العظام والمفاصل",
      "about_f2_title": "عضو الجمعية المصرية لجراحة العظام",
      "about_f2_desc": "عضو الجمعية المصرية لجراحة العظام",
      "about_f3_title": "عضو الجمعية المصرية لمناظير الركبه والكتف",
      "about_f3_desc": "عضو الجمعية المصرية لمناظير الركبه والكتف",
      "about_consult": "استشر الآن",
      
      // Working Hours
      "hours_title": "مواعيد العمل",
      "hours_desc": "نحن ملتزمون بالتواجد عندما تحتاج إلينا أكثر. الاستشارات الطارئة متوفرة بناءً على طلب خاص.",
      "day_sat": "السبت",
      "day_sun": "الأحد",
      "day_mon": "الاثنين",
      "day_tue": "الثلاثاء",
      "day_wed": "الأربعاء",
      "day_thu": "الخميس",
      "day_fri": "الجمعة",
      "status_closed": "مغلق",
      
      // Gallery
      "gallery_title": "مرافقنا",
      "gallery_img1": "استقبال العيادة",
      "gallery_img2": "معدات حديثة",
      "gallery_img3": "غرفة الكشف",
      "gallery_img4": "منطقة العلاج الطبيعي",
      "gallery_img5": "مرفق الأشعة السينية",
      "gallery_img6": "غرفة الإفاقة",
      
      // Location Map
      "location_title": "موقعنا",
      "location_subtitle": "قم بزيارة العيادة",
      "location_desc": "موقع يسهل الوصول إليه في قلب المدينة مع توفر مواقف سيارات واسعة.",
      "location_address_label": "العنوان",
      "location_address_val": "الجيش، مدينة الفشن، الفشن، محافظة بني سويف 62511",
      "location_phone_label2": "رقم الطوارئ",
      "location_phone_label": "رقم الحجز",
      "location_email_label": "البريد الإلكتروني",
      "location_directions": "احصل على الاتجاهات",
      
      // Booking Form
      "booking_title": "طلب موعد",
      "booking_badge": "طلب حجز",
      "booking_desc_text": "احجز استشارتك الآن. املأ النموذج وسنتصل بك قريباً.",
      "booking_form_header": "البيانات الشخصية",
      "booking_form_subheader": "يرجى تقديم معلومات الاتصال الخاصة بك",
      "booking_privacy_note": "بإرسالك لهذا النموذج، فإنك توافق على سياسة الخصوصية والشروط الخاصة بنا.",
      "booking_name": "الاسم الكامل",
      "booking_name_ph": "أحمد محمد",
      "booking_phone": "رقم الهاتف",
      "booking_date": "التاريخ المفضل",
      "booking_time": "الوقت المفضل",
      "booking_time_select": "اختر وقتاً",
      "booking_time_morning": "صباحاً (9 ص - 1 م)",
      "booking_time_afternoon": "عصراً (2 م - 6 م)",
      "booking_time_evening": "مساءً (6 م - 9 م)",
      "booking_msg": "رسالة (اختياري)",
      "booking_msg_ph": "صف باختصار الأعراض التي تعاني منها...",
      "booking_submit": "احجز الآن",
      "booking_alert": "تم استلام طلب الحجز! سنتصل بك قريباً للتأكيد.",
      
      // Social
      "social_title": "تابع رحلتنا",
      "social_badge": "ابق على تواصل",
      "social_desc": "ابق على اطلاع بأحدث النصائح الصحية وقصص المرضى والإعلانات السريرية.",
      "social_fb": "فيسبوك",
      "social_ig": "إنستغرام",
      
      // Additional Redesign Strings
      "emergency_label": "اتصال طوارئ:",
      "hero_badge_rated": "الأفضل تقييماً 2024",
      "hero_badge_expert": "رعاية الخبراء",
      "hero_stats_years": "سنوات خبرة",
      "hero_stats_patients": "مريض سعيد",
      "about_badge": "جراح خبير",
      "services_subtitle": "خبراتنا",
      "services_desc": "نحن نقدم رعاية شاملة للعظام باستخدام أحدث التقنيات الطبية.",
      "location_badge": "تجدنا هنا",
      "location_desc": "قم بزيارة الدكتور محمد عبدالباسط في عيادته المتخصصة للعظام.",
      "carousel_badge": "مرافقنا",

      // Footer
      "footer_slogan": "رعاية عظام متطورة لحياة خالية من الألم.",
      "footer_quick_links": "روابط سريعة",
      "footer_home": "الرئيسية",
      "footer_contact_title": "اتصل بنا",
      "footer_rights": "abdelbasstorthoclinic.com. جميع الحقوق محفوظة."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar", // default language
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
