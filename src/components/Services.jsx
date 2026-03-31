import React from 'react';
import { Bone, Activity, PersonStanding, ShieldPlus } from 'lucide-react';

const services = [
  {
    icon: <Bone size={40} className="text-primary" />,
    title: 'Joint Replacement',
    description: 'Advanced procedures for knee and hip replacements to restore your mobility.',
    delay: '0.1s'
  },
  {
    icon: <Activity size={40} className="text-primary" />,
    title: 'Sports Injuries',
    description: 'Expert treatment for ACL tears, meniscal injuries, and other sports-related conditions.',
    delay: '0.2s'
  },
  {
    icon: <PersonStanding size={40} className="text-primary" />,
    title: 'Spine & Back Care',
    description: 'Comprehensive management of spinal conditions, herniated discs, and back pain.',
    delay: '0.3s'
  },
  {
    icon: <ShieldPlus size={40} className="text-primary" />,
    title: 'Fracture & Trauma',
    description: 'Immediate and specialized care for all types of bone fractures and musculoskeletal trauma.',
    delay: '0.4s'
  }
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title fade-up">Our Expertise</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card fade-up" style={{ transitionDelay: service.delay }} key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#book" className="service-link">Learn More &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
