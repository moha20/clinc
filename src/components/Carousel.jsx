import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

// Import all images from the carousel folder
const imagesContext = import.meta.glob('../assets/carousel/*.jpeg', { eager: true, query: '?url', import: 'default' });
const images = Object.values(imagesContext);

const Carousel = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imgUrl) => {
    setSelectedImage(imgUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section className="carousel-section section bg-light" id="carousel">
        <div className="container" style={{ overflow: 'hidden', padding: 0, maxWidth: '100%' }}>
          <h2 className="section-title fade-up" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {t('carousel_title') || 'Clinic Overview'}
          </h2>
          
          <div className="carousel-track-container">
            <div className="carousel-track">
              {images.concat(images).map((imgUrl, index) => (
                <div 
                  className="carousel-slide" 
                  key={index}
                  onClick={() => openLightbox(imgUrl)}
                >
                  <img src={imgUrl} alt={`Clinic facility ${index + 1}`} loading="lazy" />
                  <div className="slide-overlay">
                    <span className="expand-text">{t('expand_image') || 'View'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Expanded view" />
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
