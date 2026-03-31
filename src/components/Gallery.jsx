import React from 'react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', alt: t('gallery_img1') },
    { src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80', alt: t('gallery_img2') },
    { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', alt: t('gallery_img3') },
    { src: 'https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&w=800&q=80', alt: t('gallery_img4') },
    { src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', alt: t('gallery_img5') },
    { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80', alt: t('gallery_img6') },
  ];

  return (
    <section className="section bg-light" id="gallery">
      <div className="container">
        <h2 className="section-title fade-up">{t('gallery_title')}</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div className="gallery-item fade-up" style={{ transitionDelay: `${index * 0.1}s` }} key={index}>
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
