import React, { useState } from 'react';
import '../css/components/ContactForm.css';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowMessage(false);

    // Récupération des données du formulaire
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    console.log('📨 Données du formulaire (simulation):', data);

    // Simulation d'attente (2 secondes)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // TOUJOURS en erreur (comme demandé)
    const errorMessages = [
      "🚫 Service temporairement indisponible - Mode simulation",
      "🔌 Erreur de connexion au serveur - Simulation en cours",
      "⏱️ Timeout de la requête - Ceci est une démo",
      "🛠️ Maintenance technique - Formulaire en mode test"
    ];
    
    const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    
    setMessage(randomError + '\n\nEn production, votre message serait envoyé à: gentillenoir075@outlook.com');
    setShowMessage(true);
    
    // Réinitialiser le formulaire
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2 className="form-title">Contactez-moi</h2>
          <p className="form-subtitle">
            En mode simulation - Tous les envois échouent volontairement
          </p>
        </div>

        <div className="input-group">
          <label htmlFor="name">
            <span className="icon">👤</span>
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">
            <span className="icon">📧</span>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="votre@email.com"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">
            <span className="icon">💬</span>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message..."
            rows={5}
            required
            disabled={isSubmitting}
          />
        </div>

        <button 
          type="submit" 
          className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Simulation en cours...
            </>
          ) : (
            '📤 Eenvoi'
          )}
        </button>

      </form>

      {showMessage && (
        <div className="error-message">
          <div className="error-icon">❌</div>
          <div className="error-content">
            <h3>Échec simulé</h3>
            <p>{message}</p>
            <button 
              className="close-btn"
              onClick={() => setShowMessage(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;