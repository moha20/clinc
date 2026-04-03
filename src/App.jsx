import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import './index.css';

// We will create these components next
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import LocationMap from './components/LocationMap';
import BookingForm from './components/BookingForm';
import WorkingHours from './components/WorkingHours';
import SocialWidgets from './components/SocialWidgets';
import Footer from './components/Footer';

function App() {
  const { t, i18n } = useTranslation();

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Set RTL direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo-wrapper">
            <div className="logo-dot"></div>
            <div className="logo">
              {t('nav_brand')}
            </div>
          </div>
          <div className="nav-links">
            <a href="#services" className="nav-link">{t('nav_services')}</a>
            <a href="#about" className="nav-link">{t('nav_about')}</a>
            <a href="#gallery" className="nav-link">{t('nav_gallery')}</a>
            <a href="#location" className="nav-link">{t('nav_location')}</a>
          </div>
          <div className="nav-actions">
            {/* <button 
              className="lang-toggle-btn" 
              onClick={toggleLanguage}
              aria-label="Toggle Language"
            >
              <Globe size={18} />
              <span>{i18n.language === 'en' ? 'AR' : 'EN'}</span>
            </button> */}
            <a href="#book" className="btn btn-primary btn-sm">{t('nav_book')}</a>
          </div>
        </div>
      </nav>

      {/* Floating Language Switcher */}
      {/* <button 
        className="floating-lang-btn" 
        onClick={toggleLanguage}
        aria-label="Toggle Language"
      >
        <Globe size={24} />
        <span>{i18n.language === 'en' ? 'عربي' : 'EN'}</span>
      </button> */}

      <main>
        <Hero />
        <Carousel />
        <Services />
        <About />
        <WorkingHours />
        <LocationMap />
        <BookingForm />
      </main>

      <SocialWidgets />
      <Footer />
    </>
  );
}

export default App;
