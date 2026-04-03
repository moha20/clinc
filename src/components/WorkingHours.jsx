import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock } from 'lucide-react';

const WorkingHours = () => {
  const { t } = useTranslation();

  const schedule = [
    { day: t('day_sat'), hours: '1:00 م - 10:00 م', status: 'open' },
    { day: t('day_sun'), hours: t('status_closed'), status: 'closed' },
    { day: t('day_mon'), hours: '1:00 م - 10:00 م', status: 'open' },
    { day: t('day_tue'), hours: '1:00 م - 10:00 م', status: 'open' },
    { day: t('day_wed'), hours: '1:00 م - 10:00 م', status: 'open' },
    { day: t('day_thu'), hours: '1:00 م - 10:00 م', status: 'open' },
    { day: t('day_fri'), hours: '1:00 م - 10:00 م', status: 'open' }
  ];

  return (
    <section className="section bg-navy text-white" id="hours">
      <div className="container">
        <div className="hours-card fade-up">
          <div className="hours-grid">
            <div className="hours-info">
              <div className="hours-icon-large">
                <Clock size={40} />
              </div>
              <h2 className="text-white">{t('hours_title')}</h2>
              <p className="hours-description-text">{t('hours_desc') || 'We are here to provide you with the best orthopedic care. Check our weekly schedule.'}</p>
              <div className="emergency-call">
                <span className="emergency-label">{t('emergency_label')}</span>
                <a href="tel:+201094949791" className="emergency-number">+20 109 494 9791</a>
              </div>
            </div>
            <div className="hours-schedule">
              <ul className="schedule-list">
                {schedule.map((item, index) => (
                  <li key={index} className={`schedule-item ${item.status === 'closed' ? 'is-closed' : ''}`}>
                    <span className="schedule-day">{item.day}</span>
                    <div className="schedule-divider"></div>
                    <span className="schedule-time">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
