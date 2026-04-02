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
    <section className="section bg-primary text-white" id="hours">
      <div className="container">
        <div className="hours-wrapper fade-up">
          <div className="hours-text">
            <h2>{t('hours_title')}</h2>
            <p>{t('hours_desc')}</p>
            <Clock size={64} className="mt-4" opacity={0.5} />
          </div>
          <div className="hours-list">
            <ul>
              {schedule.map((item, index) => (
                <li key={index} className={item.status === 'closed' ? 'closed' : ''}>
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
