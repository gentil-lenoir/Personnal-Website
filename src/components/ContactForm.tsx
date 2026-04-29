import React, { useState } from 'react';
import { FiMail, FiMessageSquare, FiSend, FiType, FiUser } from 'react-icons/fi';
import '../css/components/ContactForm.css';

const renderIcon = (Icon: any, className?: string) =>
  React.createElement(Icon as any, className ? { className, 'aria-hidden': true } : { 'aria-hidden': true });

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isPrepared, setIsPrepared] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (isPrepared) {
      setIsPrepared(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || 'Nouveau message depuis votre portfolio');
    const body = encodeURIComponent(
      `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    );

    setIsPrepared(true);
    window.location.href = `mailto:gentillenoir075@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-intro">
        <span className="contact-form-badge">Message email</span>
        <h3 className="contact-form-title">Prépare ton message proprement.</h3>
        <p className="contact-form-subtitle">
          Le formulaire ouvre ton client mail avec les champs déjà remplis, pour un envoi plus rapide.
        </p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">
            <span className="label-icon">{renderIcon(FiUser)}</span>
            Nom complet
          </label>
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
          <label htmlFor="email">
            <span className="label-icon">{renderIcon(FiMail)}</span>
            Email
          </label>
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
      </div>

      <div className="form-group">
        <label htmlFor="subject">
          <span className="label-icon">{renderIcon(FiType)}</span>
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Collaboration, mission, produit, question..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">
          <span className="label-icon">{renderIcon(FiMessageSquare)}</span>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={7}
          placeholder="Décris ton besoin, le contexte et le résultat attendu..."
        />
      </div>

      <button type="submit" className="form-submit">
        {renderIcon(FiSend, 'submit-icon')}
        <span>Préparer le message</span>
      </button>

      <p className={`form-note-footer ${isPrepared ? 'success' : ''}`}>
        {isPrepared
          ? 'Le message a été préparé. Il ne reste plus qu’à l’envoyer depuis ta boîte mail.'
          : 'Le formulaire ne perd pas ton temps: il prépare directement un email clair et prêt à partir.'}
      </p>
    </form>
  );
};

export default ContactForm;
