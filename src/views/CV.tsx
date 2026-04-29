import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  FiArrowRight,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiGlobe,
} from 'react-icons/fi';
import '../css/views/CV.css';

const renderIcon = (Icon: any, className?: string) =>
  React.createElement(Icon as any, className ? { className, 'aria-hidden': true } : { 'aria-hidden': true });

const cvFiles = {
  fr: {
    label: 'CV Français',
    path: '/doc/cv.fr.pdf',
    route: '/cv/fr',
  },
  en: {
    label: 'Resume English',
    path: '/doc/cv.en.pdf',
    route: '/cv/en',
  },
} as const;

const CVPage = () => {
  const { pathname } = useLocation();
  const normalizedPath = pathname.toLowerCase();
  const activeLang = normalizedPath.endsWith('/fr') ? 'fr' : normalizedPath.endsWith('/en') ? 'en' : null;
  const activeFile = activeLang ? cvFiles[activeLang] : null;

  return (
    <main className="cv-page">
      <section className="cv-hero">
        <div className="cv-orb cv-orb-one" />
        <div className="cv-orb cv-orb-two" />

        <div className="container cv-hero-shell">
          <div className="cv-hero-copy">
            <span className="cv-kicker">CV • Lecture • Téléchargement</span>
            <h1 className="cv-title">
              Choisis la version de mon CV
              <span className="cv-title-highlight"> et ouvre-la au bon format.</span>
            </h1>
            <p className="cv-description">
              Cette page centralise les versions française et anglaise de mon CV, avec accès
              direct à la lecture en ligne et au téléchargement propre.
            </p>
          </div>

          <div className="cv-actions-grid">
            <a href={cvFiles.fr.route} className="cv-action-card">
              <span className="cv-action-icon">{renderIcon(FiFileText)}</span>
              <strong>Lire le CV en français</strong>
              <span className="cv-action-link">
                Ouvrir
                {renderIcon(FiArrowRight)}
              </span>
            </a>

            <a href={cvFiles.en.route} className="cv-action-card">
              <span className="cv-action-icon">{renderIcon(FiGlobe)}</span>
              <strong>Lire le CV en anglais</strong>
              <span className="cv-action-link">
                Ouvrir
                {renderIcon(FiArrowRight)}
              </span>
            </a>

            <a href={cvFiles.fr.path} download="gentil-lenoir-cv-fr.pdf" className="cv-action-card">
              <span className="cv-action-icon">{renderIcon(FiDownload)}</span>
              <strong>Télécharger le CV français</strong>
              <span className="cv-action-link">
                Télécharger
                {renderIcon(FiArrowRight)}
              </span>
            </a>

            <a href={cvFiles.en.path} download="gentil-lenoir-cv-en.pdf" className="cv-action-card">
              <span className="cv-action-icon">{renderIcon(FiGlobe)}</span>
              <strong>Télécharger le CV anglais</strong>
              <span className="cv-action-link">
                Télécharger
                {renderIcon(FiArrowRight)}
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="cv-viewer-section">
        <div className="container">
          {activeFile ? (
            <div className="cv-viewer-shell">
              <div className="cv-viewer-head">
                <div>
                  <span className="cv-viewer-kicker">Lecture en cours</span>
                  <h2>{activeFile.label}</h2>
                </div>
                <div className="cv-viewer-links">
                  <a href={activeFile.path} target="_blank" rel="noreferrer" className="cv-mini-btn">
                    {renderIcon(FiExternalLink)}
                    Ouvrir dans un onglet
                  </a>
                  <a
                    href={activeFile.path}
                    download={activeLang === 'fr' ? 'gentil-lenoir-cv-fr.pdf' : 'gentil-lenoir-cv-en.pdf'}
                    className="cv-mini-btn cv-mini-btn-primary"
                  >
                    {renderIcon(FiDownload)}
                    Télécharger
                  </a>
                </div>
              </div>

              <div className="cv-frame-wrapper">
                <iframe
                  src={activeFile.path}
                  title={activeFile.label}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          ) : (
            <div className="cv-placeholder">
              <span className="cv-placeholder-icon">{renderIcon(FiFileText)}</span>
              <h2>Sélectionne une version à lire.</h2>
              <p>
                Utilise les boutons ci-dessus pour ouvrir `CV Français` via <code>/cv/fr</code> ou
                `Resume English` via <code>/cv/en</code>.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CVPage;
