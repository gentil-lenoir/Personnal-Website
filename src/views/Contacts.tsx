import React, { useState } from 'react';
import '../css/views/Contacts.css';
import ContactForm from '../components/ContactForm';

const Contacts = () => {
  const contacts = [
    { 
      type: 'Email', 
      value: 'gentillenoir075@outlook.com', 
      link: 'mailto:gentillenoir075@outlook.com',
      icon: '📧',
      primary: true
    },
    { 
      type: 'WhatsApp', 
      value: '+243 978 089 552', 
      link: 'https://wa.me/243978089552',
      icon: '💬'
    },
    { 
      type: 'LinkedIn', 
      value: 'Gentil Le NoiR', 
      link: 'https://www.linkedin.com/in/gentil-le-noir-mali-ya-mungu-651751289',
      icon: '🔗'
    },
    { 
      type: 'GitHub', 
      value: '@gentil-lenoir', 
      link: 'https://github.com/gentil-lenoir',
      icon: '🐙'
    },
    { 
      type: 'Telegram', 
      value: '@lenoirgentil', 
      link: 'https://t.me/lenoirgentil',
      icon: '✈️'
    },
    { 
      type: 'Phone', 
      value: '+250 729 606 087',
      link: 'tel:+250729606087',
      icon: '📞'
    }
  ];

  return (
    <main className="contacts-page">
      {/* Hero Section */}
      <section className="contacts-hero">
        <div className="contacts-hero-content">
          <h1 className="contacts-hero-title">
            Restons en <span className="gradient-text">Contact</span>
          </h1>
          <p className="contacts-hero-description">
            Vous avez un projet ? Une idée ? Une opportunité de collaboration ?
            Je suis à votre écoute pour discuter de vos besoins.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contacts-grid-section">
        <div className="container">
          <div className="contacts-grid">
            {contacts.map((contact, idx) => (
              <a 
                key={idx}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="contact-card-link"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="contact-card">
                  <div className="contact-card-icon">{contact.icon}</div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-type">{contact.type}</h3>
                    <p className="contact-card-value">{contact.value}</p>
                  </div>
                  <div className="contact-card-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="contact-form-header">
              <h2 className="contact-form-title">Envoyez-moi un message</h2>
              <p className="contact-form-description">
                Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
                Votre message sera automatiquement envoyé à mon adresse email.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <h2 className="cta-title">Prêt à démarrer votre projet ?</h2>
          <p className="cta-description">
            Discutons de vos besoins et trouvons ensemble la meilleure solution.
          </p>
          <a href="mailto:gentillenoir075@outlook.com" className="btn btn-primary btn-large">
            Envoyez-moi un email directement
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contacts;