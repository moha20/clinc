import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bone, Activity, PersonStanding, ShieldPlus } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const servicesList = [
    {
      icon: <Bone size={40} className="text-primary" />,
      title: t('service_1_title'),
      description: t('service_1_desc'),
      delay: '0.1s'
    },
    {
      icon: <Activity size={40} className="text-primary" />,
      title: t('service_2_title'),
      description: t('service_2_desc'),
      delay: '0.2s'
    },
    {
      icon: <PersonStanding size={40} className="text-primary" />,
      title: t('service_3_title'),
      description: t('service_3_desc'),
      delay: '0.3s'
    },
    {
      icon: <ShieldPlus size={40} className="text-primary" />,
      title: t('service_4_title'),
      description: t('service_4_desc'),
      delay: '0.4s'
    }
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title fade-up">{t('services_title')}</h2>
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card fade-up" style={{ transitionDelay: service.delay }} key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#book" className="service-link">{t('service_learn_more')}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
