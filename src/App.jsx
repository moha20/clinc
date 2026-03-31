import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import './index.css';

// We will create these components next
import Hero from './components/Hero';
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
          <div className="logo">
            {t('nav_brand')}
          </div>
          <div className="nav-links">
            <a href="#services">{t('nav_services')}</a>
            <a href="#about">{t('nav_about')}</a>
            <a href="#gallery">{t('nav_gallery')}</a>
            <a href="#location">{t('nav_location')}</a>
          </div>
          <a href="#book" className="btn btn-primary">{t('nav_book')}</a>
        </div>
      </nav>

      {/* Floating Language Switcher */}
      <button 
        className="floating-lang-btn" 
        onClick={toggleLanguage}
        aria-label="Toggle Language"
      >
        <Globe size={24} />
        <span>{i18n.language === 'en' ? 'عربي' : 'EN'}</span>
      </button>

      <main>
        <Hero />
        <Services />
        <About />
        <WorkingHours />
        <Gallery />
        <LocationMap />
        <BookingForm />
      </main>

      <SocialWidgets />
      <Footer />
    </>
  );
}

export default App;
