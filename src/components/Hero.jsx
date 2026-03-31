import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-content">
        <div className="hero-text fade-up">
          <span className="badge">Welcome to PureLife Ortho</span>
          <h1>Advanced Orthopedic Care for a Pain-Free Life</h1>
          <p className="hero-description">
            Expert diagnosis and cutting-edge treatments from Dr. Mohamed Abdelbasst. We specialize in joint pain, sports injuries, and spine conditions to help you get back to your active lifestyle.
          </p>
          <div className="hero-buttons">
            <a href="#book" className="btn btn-primary btn-icon">
              <Calendar size={18} />
              Book Appointment
            </a>
            <a href="tel:+201234567890" className="btn btn-secondary btn-icon">
              <Phone size={18} />
              Call Consult
            </a>
          </div>
        </div>
        <div className="hero-image fade-up" style={{transitionDelay: '0.2s'}}>
          <img 
            src="../assets/orthopedic.jpg" 
            alt="Doctor consulting with a patient" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
