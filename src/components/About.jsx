import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, UserCheck, Stethoscope } from 'lucide-react';
import logo from '../assets/profile.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-light" id="about">
      <div className="container">
        <h2 className="section-title fade-up">{t('about_title')}</h2>
        <div className="about-content fade-up" style={{ transitionDelay: '0.1s' }}>
          <div className="about-image">
            <img 
              src={logo} 
              alt="Dr. Mohamed Abdelbasst" 
            />
          </div>
          <div className="about-text">
            <h3>{t('about_subtitle')}</h3>
            <p>{t('about_p2')}</p>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <Award size={24} />
                </div>
                <div>
                  <h4>{t('about_f1_title')}</h4>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4>{t('about_f2_title')}</h4>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <h4>{t('about_f3_title')}</h4>
                </div>
              </div>
            </div>
            
            <a href="#book" className="btn btn-primary mt-4">{t('about_consult')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
