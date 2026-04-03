import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, UserCheck, Stethoscope } from 'lucide-react';
import logo from '../assets/profile.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title fade-up">{t('about_title')}</h2>
        <div className="about-content fade-up" style={{ transitionDelay: '0.1s' }}>
          <div className="about-visual">
            <div className="image-stack">
              <img 
                src={logo} 
                alt="Dr. Mohamed Abdelbasst" 
                className="main-profile-img"
              />
              <div className="experience-badge">
                <span className="years">8+</span>
                <span className="label">{t('hero_stats_years')}</span>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <h3 className="about-subtitle">{t('about_subtitle')}</h3>
            <p className="about-description">{t('about_p2')}</p>
            
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon-sm">
                  <Award size={20} />
                </div>
                <div className="feature-info">
                  <h4>{t('about_f1_title')}</h4>
                  <p>{t('about_f1_desc') || 'Board certified orthopedic specialist.'}</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-sm">
                  <UserCheck size={20} />
                </div>
                <div className="feature-info">
                  <h4>{t('about_f2_title')}</h4>
                  <p>{t('about_f2_desc') || 'Personalized patient-centric approach.'}</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-sm">
                  <Stethoscope size={20} />
                </div>
                <div className="feature-info">
                  <h4>{t('about_f3_title')}</h4>
                  <p>{t('about_f3_desc') || 'State-of-the-art surgical techniques.'}</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#book" className="btn btn-primary btn-lg">{t('about_consult')}</a>
              <div className="trust-logos">
                <span className="trust-label">Trusted Healthcare</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
