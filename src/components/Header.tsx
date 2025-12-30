import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/components/Header.css';

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: any, elementId: string) => void;
      };
    };
    googleTranslateElementInit: () => void;
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
      const translateInstance = new window.google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: languages.map(l => l.code).join(','),
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');

      // Changer la langue
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event('change'));
        return true;
      }
    } catch (error) {
      console.error('Erreur Google Translate:', error);
    }

    return false;
  };

  // Fonction pour changer de langue
  const changeLanguage = async (lang: string) => {
    const currentLang = localStorage.getItem('googtrans')?.split('/')?.[2] || 'fr';
    if (currentLang === lang) return;

    setLanguage(lang);

    // Méthode 1: Utiliser l'API Google Translate si disponible
    if (window.google?.translate?.TranslateElement && isGoogleTranslateReady) {
      if (applyGoogleTranslation(lang)) {
        localStorage.setItem('googtrans', `/fr/${lang}`);
        return;
      }
    }

    // Méthode 2: Méthode traditionnelle avec cookies
    try {
      const value = `/fr/${lang}`;
      
      // Cookies pour le domaine actuel
      document.cookie = `googtrans=${value};path=/;max-age=31536000;SameSite=Lax`;
      
      // Pour tous les sous-domaines
      const hostname = window.location.hostname;
      if (hostname && !hostname.includes('localhost')) {
        const domainParts = hostname.split('.');
        if (domainParts.length > 1) {
          const mainDomain = domainParts.slice(-2).join('.');
          document.cookie = `googtrans=${value};domain=.${mainDomain};path=/;max-age=31536000;SameSite=Lax`;
        }
      }

      localStorage.setItem('googtrans', value);
      
      // Méthode 3: Clic sur l'iframe si tout échoue
      setTimeout(() => {
        const frame = document.querySelector<HTMLIFrameElement>("iframe.goog-te-menu-frame");
        if (!frame) {
          window.location.reload();
          return;
        }

        try {
          const innerDoc = frame.contentDocument || frame.contentWindow?.document;
          if (innerDoc) {
            const langElements = innerDoc.querySelectorAll(".goog-te-menu2-item span.text");
            langElements.forEach((el) => {
              if (el.textContent && el.textContent.toLowerCase().includes(lang.toLowerCase())) {
                (el as HTMLElement).click();
              }
            });
          }
        } catch (e) {
          window.location.reload();
        }
      }, 100);

    } catch (error) {
      console.error('Erreur changement langue:', error);
      window.location.reload();
    }
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
    
    // Langues par défaut selon la région
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const region = timezone ? timezone.split('/')[0] : '';
    
    const regionMap: Record<string, string> = {
      'Europe': 'fr',
      'America': 'en',
      'Africa': navigator.language.startsWith('fr') ? 'fr' : 'en',
      'Asia': navigator.language.startsWith('zh') ? 'zh-CN' : 'en',
      'Australia': 'en',
      'Pacific': 'en',
    };
    
    return regionMap[region] || 'fr';
  };

  // Initialiser Google Translate
  const initializeGoogleTranslate = () => {
    // Vérifier si Google Translate est déjà chargé
    if (window.google?.translate?.TranslateElement) {
      setIsGoogleTranslateReady(true);
      hideGoogleTranslateElements();
      return;
    }

    // Charger le script Google Translate
    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);
    }

    // Définir la fonction callback
    window.googleTranslateElementInit = () => {
      setIsGoogleTranslateReady(true);
      hideGoogleTranslateElements();
      
      // Appliquer la langue sauvegardée
      const savedLang = localStorage.getItem('googtrans')?.split('/')?.[2];
      if (savedLang && savedLang !== 'fr') {
        setTimeout(() => applyGoogleTranslation(savedLang), 500);
      }
    };

    // Vérifier périodiquement si le script est chargé
    if (translateIntervalRef.current) {
      clearInterval(translateIntervalRef.current);
    }

    translateIntervalRef.current = setInterval(() => {
      if (window.google?.translate?.TranslateElement) {
        setIsGoogleTranslateReady(true);
        hideGoogleTranslateElements();
        if (translateIntervalRef.current) {
          clearInterval(translateIntervalRef.current);
        }
      }
    }, 500);
  };

  // Initialisation
  useEffect(() => {
    if (isInitialized) return;

    // Détecter la langue
    const savedLang = localStorage.getItem('googtrans')?.split('/')?.[2];
    const browserLang = getBrowserLanguage();
    const targetLang = savedLang || browserLang;

    setLanguage(targetLang);
    setIsInitialized(true);

    // Initialiser Google Translate
    initializeGoogleTranslate();

    // Si aucune langue n'est sauvegardée et que le navigateur n'est pas en français
    if (!savedLang && targetLang !== 'fr') {
      setTimeout(() => changeLanguage(targetLang), 1000);
    }

    // Nettoyage
    return () => {
      if (translateIntervalRef.current) {
        clearInterval(translateIntervalRef.current);
      }
    };
  }, [isInitialized]);

  // Surveillance optimisée du DOM - surveillance stratégique
  useEffect(() => {
    // Vérification initiale immédiate
    hideGoogleTranslateElements();
    
    // Observer seulement les changements significatifs
    let debounceTimeout: NodeJS.Timeout;
    const observer = new MutationObserver((mutations) => {
      // Vérifier s'il y a des éléments Google Translate ajoutés
      const hasGoogleElements = mutations.some(mutation => {
        if (mutation.type === 'childList') {
          // Vérifier dans les nœuds ajoutés
          for (let i = 0; i < mutation.addedNodes.length; i++) {
            const node = mutation.addedNodes[i] as Element;
            if (node.className && node.className.includes('goog-te')) {
              return true;
            }
            // Vérifier aussi dans les descendants
            if (node.querySelector && node.querySelector('[class*="goog-te"]')) {
              return true;
            }
          }
        }
        return false;
      });
      
      if (hasGoogleElements) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
          hideGoogleTranslateElements();
        }, 100); // Debounce de 100ms
      }
    });
    
    // Observer avec des options restrictives
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false
    });

    // Vérification périodique plus espacée (5 secondes au lieu de 3)
    const intervalId = setInterval(() => {
      hideGoogleTranslateElements();
    }, 5000);

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
    <div id="google_translate_element" style={{ display: 'none' }}></div>
    </header>
  );
};

// Déclaration pour TypeScript
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: any;
      };
    };
  }
}

export default Header;