import React, { useState } from 'react';

const BookingForm = () => {
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
    alert('Booking request received! We will contact you shortly to confirm.');
    setFormData({ name: '', phone: '', date: '', time: '', message: '' });
  };

  return (
    <section className="section bg-light" id="book">
      <div className="container">
        <h2 className="section-title fade-up">Request an Appointment</h2>
        <div className="booking-form-wrapper fade-up">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="John Doe" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
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
                <label htmlFor="date">Preferred Date</label>
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
                <label htmlFor="time">Preferred Time</label>
                <select 
                  id="time" 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9AM - 1PM)</option>
                  <option value="afternoon">Afternoon (2PM - 6PM)</option>
                  <option value="evening">Evening (6PM - 9PM)</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Briefly describe your symptoms..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Book Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
