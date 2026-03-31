import React from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";

const LocationMap = () => {
  const { t } = useTranslation();

  return (
    <section className="section" id="location">
      <div className="container">
        <h2 className="section-title fade-up">{t('location_title')}</h2>
        <div className="location-wrapper fade-up">
          <div className="location-info">
            <h3>{t('location_subtitle')}</h3>
            <p className="mb-4">{t('location_desc')}</p>

            <div className="contact-item">
              <MapPin className="text-primary" size={24} />
              <div>
                <strong>{t('location_address_label')}</strong>
                <p>{t('location_address_val')}</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="text-primary" size={24} />
              <div>
                <strong>{t('location_phone_label')}</strong>
                <p>+20 10 13210377</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail className="text-primary" size={24} />
              <div>
                <strong>{t('location_email_label')}</strong>
                <p>contact@abdelbasstorthoclinic.com</p>
              </div>
            </div>

            <div className="location-buttons mt-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                {t('location_directions')}
              </a>
              <a href="tel:+201013210377" className="btn btn-secondary">
                {t('hero_call')}
              </a>
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
