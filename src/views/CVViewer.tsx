import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiExternalLink } from 'react-icons/fi';
import '../css/views/CVViewer.css';

const renderIcon = (Icon: any) =>
  React.createElement(Icon as any, { 'aria-hidden': true });

const cvFiles = {
  fr: {
    label: 'CV Français',
    path: '/doc/cv.fr.pdf',
    download: 'gentil-lenoir-cv-fr.pdf',
  },
  en: {
    label: 'Resume English',
    path: '/doc/cv.en.pdf',
    download: 'gentil-lenoir-cv-en.pdf',
  },
} as const;

type Lang = keyof typeof cvFiles;

const CVViewer = () => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();

  const activeLang = (lang === 'fr' || lang === 'en') ? lang as Lang : null;
  const file = activeLang ? cvFiles[activeLang] : null;

  if (!file) {
    return (
      <div className="cvv-error">
        <p>Version introuvable. Utilise <code>/cv/fr</code> ou <code>/cv/en</code>.</p>
        <button onClick={() => navigate('/cv')} className="cvv-back-btn">
          {renderIcon(FiArrowLeft)} Retour
        </button>
      </div>
    );
  }

  return (
    <div className="cvv-root">
      <header className="cvv-bar">
        <button onClick={() => navigate('/cv')} className="cvv-back-btn">
          {renderIcon(FiArrowLeft)}
          Retour
        </button>

        <span className="cvv-label">{file.label}</span>

        <div className="cvv-actions">
          <a
            href={file.path}
            target="_blank"
            rel="noreferrer"
            className="cvv-btn"
          >
            {renderIcon(FiExternalLink)}
            Onglet
          </a>
          <a
            href={file.path}
            download={file.download}
            className="cvv-btn cvv-btn-primary"
          >
            {renderIcon(FiDownload)}
            Télécharger
          </a>
        </div>
      </header>

      <iframe
        className="cvv-frame"
        src={file.path}
        title={file.label}
      />
    </div>
  );
};

export default CVViewer;