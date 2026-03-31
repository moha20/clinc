import React from 'react';
import { Clock } from 'lucide-react';

const schedule = [
  { day: 'Saturday', hours: '12:00 PM - 8:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
  { day: 'Monday', hours: '10:00 AM - 6:00 PM' },
  { day: 'Tuesday', hours: '2:00 PM - 10:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM - 6:00 PM' },
  { day: 'Thursday', hours: 'Closed' },
  { day: 'Friday', hours: 'Closed' }
];

const WorkingHours = () => {
  return (
    <section className="section bg-primary text-white" id="hours">
      <div className="container">
        <div className="hours-wrapper fade-up">
          <div className="hours-text">
            <h2>Clinic Working Hours</h2>
            <p>We are dedicated to being available when you need us most. Emergency consultations are available upon special request.</p>
            <Clock size={64} className="mt-4" opacity={0.5} />
          </div>
          <div className="hours-list">
            <ul>
              {schedule.map((item, index) => (
                <li key={index} className={item.hours === 'Closed' ? 'closed' : ''}>
                  <span className="day">{item.day}</span>
                  <span className="time">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
