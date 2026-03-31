import React from 'react';
import { MessageCircle } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialWidgets = () => {
  return (
    <>
      <section className="section bg-light" id="social">
        <div className="container text-center">
          <h2 className="section-title fade-up">Follow Our Journey</h2>
          <p className="mb-4 fade-up" style={{ transitionDelay: '0.1s' }}>
            Stay updated with our latest healthcare tips, patient stories, and clinical announcements.
          </p>
          <div className="social-links fade-up" style={{ transitionDelay: '0.2s' }}>
            <a href="https://www.facebook.com/share/1GrMRtMndj" target="_blank" rel="noreferrer" className="social-btn facebook">
              <FaFacebook size={24} />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/dr.mohamed.orthopedic.clinic" target="_blank" rel="noreferrer" className="social-btn instagram">
              <FaInstagram size={24} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/201013210377" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} color="white" />
      </a>
    </>
  );
};

export default SocialWidgets;
