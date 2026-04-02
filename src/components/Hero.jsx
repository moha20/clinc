import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Phone } from 'lucide-react';
import orthopedic from '../assets/orthopedic.jpg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section" id="home">
      <div className="container hero-content">
        <div className="hero-text fade-up">
          <span className="badge">{t('hero_badge')}</span>
          <h1>{t('hero_title')}</h1>
          <p className="hero-description">{t('hero_desc')}</p>
          <div className="hero-buttons">
            <a href="#book" className="btn btn-primary btn-icon">
              <Calendar size={18} />
              {t('hero_book')}
            </a>
            <a href="tel:+201094949791" className="btn btn-secondary btn-icon">
              <Phone size={18} />
              {t('hero_call')}
            </a>
          </div>
        </div>
        <div className="hero-image fade-up" style={{transitionDelay: '0.2s'}}>
          <img 
            src={orthopedic} 
            alt="Doctor consulting with a patient" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
