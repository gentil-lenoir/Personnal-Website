import React, { useState } from 'react';
import '../css/components/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construction du mailto avec les données du formulaire
    const subject = encodeURIComponent(formData.subject || 'Nouveau message depuis votre portfolio');
    const body = encodeURIComponent(
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Ouverture du client email par défaut
    window.location.href = `mailto:gentillenoir075@outlook.com?subject=${subject}&body=${body}`;
    
    // Optionnel: Afficher un message de succès
    alert('Votre message a été préparé ! Veuillez l\'envoyer depuis votre client email.');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nom complet</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Jean Dupont"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="jean.dupont@email.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Sujet</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Collaboration, projet, question..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Décrivez votre projet ou votre demande..."
        />
      </div>

      <button type="submit" className="form-submit">
        <span>Envoyer le message</span>
        <svg className="submit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <p className="form-note-footer" style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8, color: 'inherit' }}>
        ℹ️ En cliquant sur "Envoyer", votre client email s'ouvrira avec le message pré-rempli.
        Il ne vous restera plus qu'à l'envoyer depuis votre boîte mail.
      </p>
    </form>
  );
};

export default ContactForm;