import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container footer-content">
        <div className="footer-brand fade-up">
          <h3>Dr. Mohamed Abdelbasst</h3>
          <p>Advanced Orthopedic Care for a Pain-Free Life.</p>
        </div>
        <div className="footer-links fade-up" style={{ transitionDelay: '0.1s' }}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Dr. Mohamed</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
        <div className="footer-contact fade-up" style={{ transitionDelay: '0.2s' }}>
          <h4>Contact Us</h4>
          <ul>
            <li>+20 1013210377</li>
            <li>[EMAIL_ADDRESS]</li>
            <li>El Gash, Al-Fashn City, Al-Fashn, Beni Suef Governorate 62511</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} abdelbasstorthoclinic.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
