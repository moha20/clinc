import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const BookingForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clinic WhatsApp number
    const whatsappNumber = '201094949791';
    
    // Construct the message
    const messageBody = `
*${t('booking_title')}*
--------------------------
*${t('booking_name')}:* ${formData.name}
*${t('booking_phone')}:* ${formData.phone}
*${t('booking_date')}:* ${formData.date}
*${t('booking_time')}:* ${t(`booking_time_${formData.time}`)}
*${t('booking_msg')}:* ${formData.message || 'N/A'}
    `.trim();

    const encodedMessage = encodeURIComponent(messageBody);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show confirmation and reset form
    alert(t('booking_alert'));
    setFormData({ name: '', phone: '', date: '', time: '', message: '' });
  };  


  return (
    <section className="section" id="book">
      <div className="container">
        <h2 className="section-title fade-up text-center">{t('booking_title')}</h2>
        <p className="section-desc fade-up text-center">{t('booking_desc_text')}</p>
        
        <div className="booking-card fade-up">
          <div className="booking-header">
            <div className="header-icon">📅</div>
            <div className="header-text">
              <h3>{t('booking_form_header')}</h3>
              <p>{t('booking_form_subheader')}</p>
            </div>
          </div>
          
          <form className="booking-form-modern" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group-modern">
                <label htmlFor="name">{t('booking_name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder={t('booking_name_ph')} 
                />
              </div>

              <div className="form-group-modern">
                <label htmlFor="phone">{t('booking_phone')}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  placeholder="+20 123 456 7890" 
                />
              </div>

              <div className="form-group-modern">
                <label htmlFor="date">{t('booking_date')}</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group-modern">
                <label htmlFor="time">{t('booking_time')}</label>
                <select 
                  id="time" 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange} 
                  required
                  className="custom-select"
                >
                  <option value="">{t('booking_time_select')}</option>
                  <option value="morning">{t('booking_time_morning')}</option>
                  <option value="afternoon">{t('booking_time_afternoon')}</option>
                  <option value="evening">{t('booking_time_evening')}</option>
                </select>
              </div>
            </div>

            <div className="form-group-modern full-width">
              <label htmlFor="message">{t('booking_msg')}</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder={t('booking_msg_ph')}
              ></textarea>
            </div>

            <div className="form-footer">
              <p className="privacy-note">{t('booking_privacy_note')}</p>
              <button type="submit" className="btn btn-primary btn-lg btn-wide">
                <span>{t('booking_submit')}</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
