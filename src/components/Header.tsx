import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/components/Header.css';

// Déclaration globale simplifiée
declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [language, setLanguage] = useState<string>('fr');
  const [isInitialized, setIsInitialized] = useState(false);
  const [isGoogleTranslateReady, setIsGoogleTranslateReady] = useState(false);
  const translateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Langues supportées avec leurs codes et labels
  const languages = [
    { code: 'fr', label: 'Fr', name: 'Français' },
    { code: 'en', label: 'En', name: 'English' },
    { code: 'sw', label: 'Sw', name: 'Kiswahili' },
    { code: 'rw', label: 'Rw', name: 'Kinyarwanda' },
    { code: 'es', label: 'Es', name: 'Español' },
    { code: 'de', label: 'De', name: 'Deutsch' },
    { code: 'pt', label: 'Pt', name: 'Português' },
    { code: 'ar', label: 'العربية', name: 'العربية' },
    { code: 'zh-CN', label: '中文', name: '中文' },
    { code: 'ru', label: 'Ru', name: 'Русский' },
    { code: 'ja', label: 'Ja', name: '日本語' },
    { code: 'ko', label: 'Ko', name: '한국어' },
    { code: 'hi', label: 'हिं', name: 'हिन्दी' },
  ];

  const hideGoogleTranslateElements = () => {
    try {
      // Sélecteurs essentiels seulement avec positionnement absolu
      const elements = document.querySelectorAll(
        '.goog-te-banner-frame, .goog-te-banner, .goog-te-menu-frame, [class*="goog-te"]'
      );
      
      elements.forEach(el => {
        if (el && (el as HTMLElement).style) {
          (el as HTMLElement).style.display = 'none';
          (el as HTMLElement).style.visibility = 'hidden';
          (el as HTMLElement).style.position = 'absolute';
          (el as HTMLElement).style.left = '-9999px';
          (el as HTMLElement).style.top = '-9999px';
          (el as HTMLElement).style.width = '1px';
          (el as HTMLElement).style.height = '1px';
          (el as HTMLElement).style.overflow = 'hidden';
        }
      });

      // Correction du body avec contraintes strictes
      if (document.body && document.body.style) {
        document.body.style.marginTop = '0';
        document.body.style.paddingTop = '0';
        document.documentElement.style.overflowX = 'hidden';
      }
    } catch (error) {
      // Silencieux pour éviter les erreurs
    }
  };

  // Appliquer la traduction manuellement
  const applyGoogleTranslation = (targetLang: string) => {
    if (!window.google || !window.google.translate) {
      console.warn('Google Translate non chargé');
      return false;
    }

    try {
      // Créer l'instance Google Translate
      new window.google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: languages.map(l => l.code).join(','),
        layout: 0,
        autoDisplay: false
      }, 'google_translate_element');

      // Changer la langue via le sélecteur
      setTimeout(() => {
        const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
        if (select && select.value !== targetLang) {
          select.value = targetLang;
          select.dispatchEvent(new Event('change'));
        }
      }, 500);

      return true;
    } catch (error) {
      console.error('Erreur Google Translate:', error);
      return false;
    }
  };

  // Fonction pour changer de langue
  const changeLanguage = (lang: string) => {
    const currentLang = localStorage.getItem('googtrans')?.split('/')?.[2] || 'fr';
    if (currentLang === lang) return;

    setLanguage(lang);
    const value = `/fr/${lang}`;
    
    // Sauvegarder la préférence
    localStorage.setItem('googtrans', value);
    
    // Set cookie pour le domaine actuel
    document.cookie = `googtrans=${value};path=/;max-age=31536000;SameSite=Lax`;

    // Essayer d'appliquer la traduction si Google Translate est prêt
    if (isGoogleTranslateReady) {
      if (applyGoogleTranslation(lang)) {
        return;
      }
    }

    // Si Google Translate n'est pas prêt ou a échoué, recharger la page
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // Détecter la langue du navigateur
  const getBrowserLanguage = () => {
    const browserLang = navigator.language;
    
    // Chercher une correspondance exacte
    const exactMatch = languages.find(lang => 
      lang.code.toLowerCase() === browserLang.toLowerCase()
    );
    
    if (exactMatch) return exactMatch.code;
    
    // Chercher une correspondance partielle (ex: en-US -> en)
    const mainLang = browserLang.split('-')[0].toLowerCase();
    const partialMatch = languages.find(lang => 
      lang.code.toLowerCase().split('-')[0] === mainLang
    );
    
    if (partialMatch) return partialMatch.code;
    
    return 'fr';
  };

  // Initialiser Google Translate
  const initializeGoogleTranslate = () => {
    // Vérifier si Google Translate est déjà chargé
    if (window.google && window.google.translate) {
      setIsGoogleTranslateReady(true);
      hideGoogleTranslateElements();
      return;
    }

    // Nettoyer les anciens scripts et fonctions
    cleanupGoogleTranslate();

    // Créer la fonction callback - IMPORTANT: doit être attachée directement à window
    const initFunction = () => {
      setIsGoogleTranslateReady(true);
      hideGoogleTranslateElements();
      
      // Appliquer la langue sauvegardée
      const savedLang = localStorage.getItem('googtrans')?.split('/')?.[2];
      if (savedLang && savedLang !== 'fr') {
        setTimeout(() => applyGoogleTranslation(savedLang), 500);
      }
    };

    // Attacher la fonction à window
    (window as any).googleTranslateElementInit = initFunction;

    // Charger le script Google Translate
    const scriptId = 'google-translate-script';
    const existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    // Vérifier périodiquement si le script est chargé
    translateIntervalRef.current = setInterval(() => {
      if (window.google && window.google.translate) {
        setIsGoogleTranslateReady(true);
        hideGoogleTranslateElements();
        
        if (translateIntervalRef.current) {
          clearInterval(translateIntervalRef.current);
          translateIntervalRef.current = null;
        }
      }
    }, 1000);
  };

  // Nettoyage de Google Translate
  const cleanupGoogleTranslate = () => {
    // Nettoyer l'intervalle
    if (translateIntervalRef.current) {
      clearInterval(translateIntervalRef.current);
      translateIntervalRef.current = null;
    }

    // Supprimer le script s'il existe
    const script = document.getElementById('google-translate-script');
    if (script) {
      script.remove();
    }

    // Nettoyer les éléments Google Translate
    const translateElements = document.querySelectorAll('.goog-te-banner, .goog-te-menu-frame');
    translateElements.forEach(el => el.remove());
  };

  // Initialisation
  useEffect(() => {
    if (isInitialized) return;

    // Détecter la langue
    const savedLang = localStorage.getItem('googtrans')?.split('/')?.[2];
    const browserLang = getBrowserLanguage();
    const targetLang = savedLang || browserLang || 'fr';

    setLanguage(targetLang);
    setIsInitialized(true);

    // Initialiser Google Translate
    setTimeout(() => {
      initializeGoogleTranslate();
    }, 100);

    // Nettoyage
    return () => {
      cleanupGoogleTranslate();
    };
  }, [isInitialized]);

  // Surveillance optimisée du DOM
  useEffect(() => {
    hideGoogleTranslateElements();
    
    // Observer pour cacher les éléments Google Translate
    let debounceTimeout: NodeJS.Timeout;
    const observer = new MutationObserver((mutations) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        hideGoogleTranslateElements();
      }, 50);
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Vérification périodique
    const intervalId = setInterval(() => {
      hideGoogleTranslateElements();
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(debounceTimeout);
      clearInterval(intervalId);
    };
  }, []);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo" translate="no">Gentil Le NoiR M.B.</div>
      <nav>
        <Link to="/" className={isActive('/') ? 'active' : ''}>Accueil</Link>
        <Link to="/bio" className={isActive('/bio') ? 'active' : ''}>Biographie</Link>
        <Link to="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>Portfolio</Link>
        <Link to="/contacts" className={isActive('/contacts') ? 'active' : ''}>Contacts</Link>
        <Link to="/images" className={isActive('/images') ? 'active' : ''}>Images</Link>
        
        <div className="language-select-container">
          <select 
            className="language-select" 
            aria-label="Choisir la langue"
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            title="Sélectionner la langue"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label} - {lang.name}
              </option>
            ))}
          </select>
          <div className="language-select-icon">🌐</div>
        </div>
      </nav>
      
      {/* Élément caché pour Google Translate */}
      <div id="google_translate_element" style={{ 
        display: 'none',
        position: 'absolute',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}></div>
    </header>
  );
};

export default Header;