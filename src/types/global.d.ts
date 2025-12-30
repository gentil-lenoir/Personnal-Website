// Déclaration globale pour Google Translate
interface Window {
  googleTranslateElementInit?: () => void;
}

declare namespace google {
  namespace translate {
    class TranslateElement {
      constructor(options: {
        pageLanguage: string;
        includedLanguages?: string;
        layout?: number;
        autoDisplay?: boolean;
      }, elementId: string);
    }
  }
}