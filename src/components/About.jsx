import React from 'react';
import { Award, UserCheck, Stethoscope } from 'lucide-react';
import logo from '../assets/profile.jpg';

const About = () => {
  return (
    <section className="section bg-light" id="about">
      <div className="container">
        <h2 className="section-title fade-up">About Dr. Mohamed</h2>
        <div className="about-content fade-up" style={{ transitionDelay: '0.1s' }}>
          <div className="about-image">
            <img 
              src={logo} 
              alt="Dr. Mohamed Abdelbasst" 
            />
          </div>
          <div className="about-text">
            <h3>Specialist in Orthopedic Surgery</h3>
            <p>
              Dr. Mohamed Abdelbasst brings over 15 years of clinical experience in orthopedic surgery, focusing on minimally invasive techniques for joint replacement and sports injuries. 
            </p>
            <p>
              He is dedicated to providing personalized care, ensuring each patient fully understands their condition and the most effective treatment options available. His approach blends advanced modern medicine with compassion.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <Award size={24} />
                </div>
                <div>
                  <h4>Board Certified</h4>
                  <span>Recognized Excellence</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4>10k+ Patients</h4>
                  <span>Successfully Treated</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <h4>Modern Tech</h4>
                  <span>Latest Treatments</span>
                </div>
              </div>
            </div>
            
            <a href="#book" className="btn btn-primary mt-4">Consult Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
