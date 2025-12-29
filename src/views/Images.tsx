import React, { useState } from 'react';
import '../css/views/Images.css';

const imageList = [
  'gentil1.jpg', 'gentil2.jpg', 'gentil3.jpg', 'gentil4.jpg', 'gentil5.jpg',
  'gentil6.jpg', 'gentil7.jpg', 'gentil8.jpg', 'gentil9.jpg', 'gentil10.jpg',
  'gentil11.jpg', 'gentil12.jpg', 'gentil13.jpg', 'gentil14.jpg', 'gentil15.jpg'
];

const Images = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const getImageName = (imgPath: string) => {
    const number = imgPath.replace('gentil', '').replace('.jpg', '');
    return `Gentil ${number}`;
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsClosing(false);
    // Bloquer le scroll du body
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
      // Restaurer le scroll du body
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < imageList.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const goToPrev = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  // Fermer avec la touche Echap
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage !== null) {
        closeLightbox();
      }
      if (e.key === 'ArrowRight' && selectedImage !== null) {
        goToNext();
      }
      if (e.key === 'ArrowLeft' && selectedImage !== null) {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, goToNext, goToPrev]);

  return (
    <>
      <section className="images-section">
        <h1 className="images-title">Galerie de Gentil</h1>
        <div className="images-grid">
          {imageList.map((img, index) => (
            <div className="imgCard" key={img}>
              <div 
                className="image-container"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={`/img/photos/${img}`} 
                  alt={getImageName(img)}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="overlay-text">
                    Cliquer pour agrandir
                  </div>
                </div>
              </div>
              
              <a 
                href={`/img/photos/${img}`} 
                download
                className="download-btn"
                onClick={(e) => e.stopPropagation()} // Empêche l'ouverture de la lightbox
              >
                <span>⬇️ Télécharger</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className={`lightbox-overlay ${isClosing ? 'closing' : ''}`}
          onClick={closeLightbox}
        >
          <div 
            className={`lightbox-content ${isClosing ? 'closing' : ''}`}
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture quand on clique sur le contenu
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            
            <img 
              src={`/img/photos/${imageList[selectedImage]}`} 
              alt={getImageName(imageList[selectedImage])}
              className="lightbox-image"
            />
            
            <div className="lightbox-counter">
              {selectedImage + 1} / {imageList.length}
            </div>
            
            <div className="lightbox-nav">
              <button onClick={goToPrev} disabled={selectedImage === 0}>
                ◀ Précédent
              </button>
              <button onClick={goToNext} disabled={selectedImage === imageList.length - 1}>
                Suivant ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Images;