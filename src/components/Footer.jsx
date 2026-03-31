import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-dark text-white">
      <div className="container footer-content">
        <div className="footer-brand fade-up">
          <h3>{t('nav_brand')}</h3>
          <p>{t('footer_slogan')}</p>
        </div>
        <div className="footer-links fade-up" style={{ transitionDelay: '0.1s' }}>
          <h4>{t('footer_quick_links')}</h4>
          <ul>
            <li><a href="#home">{t('footer_home')}</a></li>
            <li><a href="#services">{t('nav_services')}</a></li>
            <li><a href="#about">{t('about_title')}</a></li>
            <li><a href="#gallery">{t('nav_gallery')}</a></li>
          </ul>
        </div>
        <div className="footer-contact fade-up" style={{ transitionDelay: '0.2s' }}>
          <h4>{t('footer_contact_title')}</h4>
          <ul>
            <li>+20 1013210377</li>
            <li>contact@abdelbasstorthoclinic.com</li>
            <li>{t('location_address_val')}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} {t('footer_rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
