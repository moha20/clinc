import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialWidgets = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="section bg-light" id="social">
        <div className="container text-center">
          <span className="section-subtitle fade-up">{t('social_badge')}</span>
          <h2 className="section-title fade-up">{t('social_title')}</h2>
          <p className="section-desc fade-up">
            {t('social_desc')}
          </p>
          <div className="social-links-modern fade-up">
            <a href="https://www.facebook.com/share/1GrMRtMndj" target="_blank" rel="noreferrer" className="social-btn-modern fb">
              <FaFacebook size={24} />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/dr.mohamed.orthopedic.clinic" target="_blank" rel="noreferrer" className="social-btn-modern ig">
              <FaInstagram size={24} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/201013210377" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} color="white" />
      </a>
    </>
  );
};

export default SocialWidgets;
