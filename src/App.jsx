import React, { useEffect } from 'react';
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

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            Dr. Mohamed Abdelbasst
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Location</a>
          </div>
          <a href="#book" className="btn btn-primary">Book Appointment</a>
        </div>
      </nav>

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
