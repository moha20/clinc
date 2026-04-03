import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Phone } from 'lucide-react';
import orthopedic from '../assets/orthopedic.jpg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-accent"></div>
      <div className="container hero-content">
        <div className="hero-text fade-up">
          <div className="badge-pill">
            <span className="dot"></span>
            {t('hero_badge')}
          </div>
          <h1 className="hero-title">{t('hero_title')}</h1>
          <p className="hero-description">{t('hero_desc')}</p>
          <div className="hero-buttons">
            <a href="#book" className="btn btn-primary btn-lg">
              <Calendar size={20} />
              {t('hero_book')}
            </a>
            <a href="tel:+201094949791" className="btn btn-secondary btn-lg">
              <Phone size={20} />
              {t('hero_call')}
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">{t('hero_stats_years')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-divider"></span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5k+</span>
              <span className="stat-label">{t('hero_stats_patients')}</span>
            </div>
          </div>
        </div>
        <div className="hero-visual fade-up" style={{transitionDelay: '0.2s'}}>
          <div className="image-frame">
            <img 
              src={orthopedic} 
              alt="Doctor consulting with a patient" 
              className="hero-img"
            />
            <div className="floating-card top-right">
              <div className="card-icon">⭐</div>
              <div className="card-text">{t('hero_badge_rated')}</div>
            </div>
            <div className="floating-card bottom-left">
              <div className="card-icon">🛡️</div>
              <div className="card-text">{t('hero_badge_expert')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
