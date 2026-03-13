import React, { useState, useEffect } from 'react';
import '../css/views/Images.css';

// Catégories d'images
const categories = [
  { id: 'all', name: 'Toutes les photos', icon: '📸' },
  { id: 'portraits', name: 'Portraits', icon: '👤' },
  { id: 'projects', name: 'Projets', icon: '💻' },
  { id: 'events', name: 'Événements', icon: '🎉' },
  { id: 'azenium', name: 'Azenium', icon: '🚀' }
];

// Données des images avec métadonnées
const imageData = [
  // Portraits (1-5)
  { filename: 'gentil1.jpg', category: 'portraits', title: 'Gentil - Portrait professionnel', date: '2025', featured: true },
  { filename: 'gentil2.jpg', category: 'portraits', title: 'Gentil - Style décontracté', date: '2026' },
  { filename: 'gentil3.jpg', category: 'portraits', title: 'Gentil - Au répos', date: '2024' },
  { filename: 'gentil4.jpg', category: 'portraits', title: 'Gentil - Portrait', date: '2026' },
  { filename: 'gentil5.jpg', category: 'portraits', title: 'Gentil - Studio', date: '2025' },
  
  // Projets (6-8)
  { filename: 'gentil6.jpg', category: 'projects', title: 'Développement web - Azenium', date: '2026', featured: true },
  { filename: 'gentil7.jpg', category: 'portraits', title: 'Ancien portrait', date: '2024' },
  { filename: 'gentil8.jpg', category: 'azenium', title: 'Présentation - Video de Azenium', date: '2026', featured: true },
  
  // Événements (9-11)
  { filename: 'gentil9.jpg', category: 'events', title: 'Epoque scolaire', date: '2023'},
  { filename: 'gentil10.jpg', category: 'portraits', title: 'Ancien Portrait', date: '2024' },
  { filename: 'gentil11.jpg', category: 'events', title: 'Evenement Spécial', date: '2024' },
  
  // Azenium (12-15)
  { filename: 'gentil12.jpg', category: 'azenium', title: 'Azenium - Video de Lancement', date: '2024', featured: true },
  { filename: 'gentil13.jpg', category: 'projects', title: 'Eléctronique - Équipe', date: '2025' },
  { filename: 'gentil14.jpg', category: 'events', title: 'Ancien Portait', date: '2024' },
  { filename: 'azenium_partner.jpg', category: 'azenium', title: 'Azenium - Partenariat', date: '2024' }
];

const Images = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState(imageData);
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des images
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Filtrer les images par catégorie
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(imageData);
    } else {
      setFilteredImages(imageData.filter(img => img.category === activeCategory));
    }
  }, [activeCategory]);

  const getImagePath = (filename: string) => `/img/photos/${filename}`;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsClosing(false);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const goToPrev = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <main className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title">
            <span className="gallery-hero-greeting">Explorez</span>
            <span className="gallery-hero-name gradient-text">Ma Galerie</span>
          </h1>
          <p className="gallery-hero-description">
            Découvrez les moments clés de mon parcours, mes projets et mon quotidien 
            de développeur à travers une collection d'images soigneusement sélectionnées.
          </p>
        </div>
        <div className="gallery-hero-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      {/* Categories */}
      <section className="gallery-categories">
        <div className="container">
          <div className="categories-grid">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
                {category.id !== 'all' && (
                  <span className="category-count">
                    {imageData.filter(img => img.category === category.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          {isLoading ? (
            <div className="gallery-loading">
              <div className="loading-spinner"></div>
              <p>Chargement des images...</p>
            </div>
          ) : (
            <>
              <div className="gallery-stats">
                <span className="stats-count">
                  {filteredImages.length} image{filteredImages.length > 1 ? 's' : ''} trouvée{filteredImages.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="gallery-grid">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.filename}
                    className="gallery-item"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="gallery-card">
                      <div 
                        className="gallery-image-container"
                        onClick={() => openLightbox(index)}
                      >
                        <img
                          src={getImagePath(image.filename)}
                          alt={image.title}
                          loading="lazy"
                          className="gallery-image"
                        />
                        {image.featured && (
                          <div className="image-featured-badge">
                            <span>⭐ En vedette</span>
                          </div>
                        )}
                        <div className="image-overlay">
                          <div className="overlay-content">
                            <span className="overlay-icon">🔍</span>
                            <span>Agrandir</span>
                          </div>
                        </div>
                      </div>

                      <div className="gallery-card-footer">
                        <div className="image-info">
                          <h3 className="image-title">{image.title}</h3>
                          <div className="image-meta">
                            <span className="image-category">
                              {categories.find(c => c.id === image.category)?.icon}
                              {categories.find(c => c.id === image.category)?.name}
                            </span>
                            <span className="image-date">{image.date}</span>
                          </div>
                        </div>
                        
                        <a
                          href={getImagePath(image.filename)}
                          download
                          className="download-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredImages.length === 0 && (
                <div className="no-results">
                  <p>Aucune image trouvée dans cette catégorie.</p>
                </div>
              )}
            </>
          )}
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
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <button 
              className="lightbox-nav-btn prev"
              onClick={goToPrev}
              disabled={selectedImage === 0}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="lightbox-image-wrapper">
              <img
                src={getImagePath(filteredImages[selectedImage].filename)}
                alt={filteredImages[selectedImage].title}
                className="lightbox-image"
              />
              
              <div className="lightbox-info">
                <h3 className="lightbox-title">{filteredImages[selectedImage].title}</h3>
                <div className="lightbox-meta">
                  <span className="lightbox-category">
                    {categories.find(c => c.id === filteredImages[selectedImage].category)?.icon}
                    {categories.find(c => c.id === filteredImages[selectedImage].category)?.name}
                  </span>
                  <span className="lightbox-date">{filteredImages[selectedImage].date}</span>
                  <span className="lightbox-counter">
                    {selectedImage + 1} / {filteredImages.length}
                  </span>
                </div>
              </div>

              <a
                href={getImagePath(filteredImages[selectedImage].filename)}
                download
                className="lightbox-download"
                onClick={(e) => e.stopPropagation()}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Télécharger
              </a>
            </div>

            <button 
              className="lightbox-nav-btn next"
              onClick={goToNext}
              disabled={selectedImage === filteredImages.length - 1}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Images;