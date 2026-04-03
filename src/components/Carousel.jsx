import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

// Import all images from the carousel folder
const imagesContext = import.meta.glob('../assets/carousel/*.jpeg', { eager: true, query: '?url', import: 'default' });
const images = Object.values(imagesContext);

const Carousel = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index % images.length]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(images[nextIdx]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(images[prevIdx]);
  };

  return (
    <>
      <section className="carousel-section section" id="carousel">
        <div className="container" style={{ overflow: 'hidden', padding: 0, maxWidth: '100%' }}>
          <h2 className="section-title fade-up text-center">{t('carousel_title') || 'Clinic Overview'}</h2>
          
          <div className="carousel-track-container">
            <div className="carousel-track">
              {images.length > 0 ? images.concat(images).map((imgUrl, index) => (
                <div 
                  className="carousel-slide-modern" 
                  key={index}
                  onClick={() => openLightbox(index)}
                >
                  <img src={imgUrl} alt={`Clinic facility ${index + 1}`} loading="lazy" className="carousel-img" />
                  <div className="slide-overlay-modern">
                    <span className="expand-icon">🔍</span>
                  </div>
                </div>
              )) : (
                <div className="carousel-placeholder">No images found in assets/carousel</div>
              )}
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
          
          <button className="lightbox-nav prev" onClick={prevImage}>
            <span className="nav-arrow">←</span>
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Expanded view" />
            <div className="image-counter">
              {(currentIndex % images.length) + 1} / {images.length}
            </div>
          </div>
          
          <button className="lightbox-nav next" onClick={nextImage}>
            <span className="nav-arrow">→</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Carousel;
