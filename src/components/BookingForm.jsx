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
    alert(t('booking_alert'));
    setFormData({ name: '', phone: '', date: '', time: '', message: '' });
  };

  return (
    <section className="section bg-light" id="book">
      <div className="container">
        <h2 className="section-title fade-up">{t('booking_title')}</h2>
        <div className="booking-form-wrapper fade-up">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
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
            <div className="form-group">
              <label htmlFor="phone">{t('booking_phone')}</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                placeholder="+20 1013210377" 
              />
            </div>
            <div className="form-row">
              <div className="form-group half">
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
              <div className="form-group half">
                <label htmlFor="time">{t('booking_time')}</label>
                <select 
                  id="time" 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">{t('booking_time_select')}</option>
                  <option value="morning">{t('booking_time_morning')}</option>
                  <option value="afternoon">{t('booking_time_afternoon')}</option>
                  <option value="evening">{t('booking_time_evening')}</option>
                </select>
              </div>
            </div>
            <div className="form-group">
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
            <button type="submit" className="btn btn-primary btn-block">{t('booking_submit')}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
