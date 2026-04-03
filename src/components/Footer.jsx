import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-navy text-white">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-section fade-up">
            <div className="footer-logo">
              <div className="logo-dot"></div>
              <h3>{t('nav_brand')}</h3>
            </div>
            <p className="footer-slogan">{t('footer_slogan') || 'Expert orthopedic care for a better quality of life.'}</p>
            <div className="footer-social-minimal">
              {/* Minimal social icons can go here */}
            </div>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-column fade-up" style={{ transitionDelay: '0.1s' }}>
              <h4>{t('footer_quick_links')}</h4>
              <ul className="footer-list">
                <li><a href="#home">{t('footer_home')}</a></li>
                <li><a href="#services">{t('nav_services')}</a></li>
                <li><a href="#about">{t('nav_about')}</a></li>
                <li><a href="#gallery">{t('nav_gallery')}</a></li>
              </ul>
            </div>
            
            <div className="footer-column fade-up" style={{ transitionDelay: '0.2s' }}>
              <h4>{t('footer_contact_title')}</h4>
              <ul className="footer-list">
                <li><span className="footer-icon-sm">📞</span> 01094949791</li>
                <li><span className="footer-icon-sm">✉️</span> contact@orthoclinic.com</li>
                <li><span className="footer-icon-sm">📍</span> {t('location_address_val')}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} {t('footer_rights') || 'All rights reserved.'}</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
