import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const LocationMap = () => {
  return (
    <section className="section" id="location">
      <div className="container">
        <h2 className="section-title fade-up">Our Location</h2>
        <div className="location-wrapper fade-up">
          <div className="location-info">
            <h3>Visit Our Clinic</h3>
            <p className="mb-4">Conveniently located in the heart of the city with ample parking available.</p>
            
            <div className="contact-item">
              <MapPin className="text-primary" size={24} />
              <div>
                <strong>Address</strong>
                <p>123 Medical Center Ave, Suite 400<br/>City District, State 12345</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Phone className="text-primary" size={24} />
              <div>
                <strong>Phone</strong>
                <p>+20 123 456 7890</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Mail className="text-primary" size={24} />
              <div>
                <strong>Email</strong>
                <p>contact@abdelbasstorthoclinic.com</p>
              </div>
            </div>
            
            <div className="location-buttons mt-4">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-primary">Get Directions</a>
              <a href="tel:+201234567890" className="btn btn-secondary">Call Now</a>
            </div>
          </div>
          
          <div className="location-map">
            {/* Embedded Google Map iframe - using a generic view for demo */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.6222363052802!2d30.9007429!3d28.820329299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a4b0073f50ded%3A0xfcfa0a7613c954df!2z2K_Zg9iq2YjYsSDZhdit2YXYryDYudio2K8g2KfZhNio2KfYs9i3L9is2LHYp9it2KfYqiDYp9mE2LnYuNin2YU!5e0!3m2!1sar!2seg!4v1774926221780!5m2!1sar!2seg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
