// components/Googletranslate.tsx
import React, { useEffect, useRef } from 'react';

const GoogleTranslate = () => {
  const googleTranslateRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    
    const addGoogleTranslateScript = () => {
      const existingScript = document.getElementById('google-translate-script');
      if (existingScript) return;

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      
      script.onerror = () => {
        console.log('Google Translate script failed to load');
      };

      document.head.appendChild(script);
    };

    // Déclarer la fonction globale
    window.googleTranslateElementInit = () => {
      if (window.google && google.translate && google.translate.TranslateElement) {
        new google.translate.TranslateElement(
          {
            pageLanguage: 'fr',
            includedLanguages: 'fr,en,es,de,pt,it,ru,zh,ja,ko,ar',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          'google_translate_element'
        );
        initializedRef.current = true;
      }
    };

    addGoogleTranslateScript();

    return () => {
      // Cleanup
      if (window.googleTranslateElementInit) {
        delete window.googleTranslateElementInit;
      }
    };
  }, []);

  return (
    <div 
      id="google_translate_element" 
      ref={googleTranslateRef}
      style={{ 
        opacity: '0', 
        position: 'absolute', 
        top: '-1000px', 
        left: '-1000px',
        width: '1px',
        height: '1px'
      }} 
    />
  );
};

export default GoogleTranslate;