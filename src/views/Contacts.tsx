import React from 'react';
import '../css/views/Contacts.css';
import ContactForm from '../components/ContactForm.tsx';
import ContactCard from '../components/ContactCard.tsx';

const contacts = [
  { 
    type: 'Email', 
    value: 'gentillenoir075@outlook.com', 
    link: 'mailto:gentillenoir075@outlook.com', 
    suggestion: "gentillenoir075@outlook.com : Envoyez vos courriers pour partager vos informations et vos requêtes." 
  },
  { 
    type: 'WhatsApp', 
    value: '+243 978 089 552', 
    link: 'https://wa.me/243978089552', 
    suggestion: "Messages, appels, échanges sur WhatsApp." 
  },
  { 
    type: 'LinkedIn', 
    value: 'GENTIL LE NOIR MALI YA MUNGU', 
    link: 'https://www.linkedin.com/in/gentil-le-noir-mali-ya-mungu-651751289', 
    suggestion: "Connectez-vous à Gentil Le NoiR sur LinkedIn." 
  },
  { 
    type: 'GitHub', 
    value: 'gentil-lenoir', 
    link: 'https://github.com/gentil-lenoir', 
    suggestion: "Travaillez avec Gentil sur ses projets de programmation." 
  },
  { 
    type: 'Facebook', 
    value: 'Gentil Le noir', 
    link: 'https://facebook.com/profile.php?id=61576314604030', 
    suggestion: "Retrouvez-moi sur Facebook pour plus de conversations." 
  },
  { 
    type: 'Telegram', 
    value: 't.me/lenoirgentil || +243 978 089 552', 
    link: 'https://t.me/lenoirgentil', 
    suggestion: "Discussions instantanées sur Telegram." 
  },
  { 
    type: 'Phone', 
    value: '+250 729 606 087',
    link: 'tel:+250729606087', 
    suggestion: "Appels téléphoniques pour des contacts directs." 
  },
  { 
    type: 'QRcode', 
    value: 'infos sur gentil-lenoir', 
    link: "/img/qr_gentil.png", 
    suggestion: "Ajoutez Gentil à votre répertoire via ce QR code." 
  }
];

const Contacts = () => (
  <section className="contacts-section">
    <h1 className="contacts-title">Contacts</h1>
    <div className="contacts-list">
      {contacts.map((contact, idx) => (
        <ContactCard key={idx} {...contact} />
      ))}
    </div>
    <ContactForm />
  </section>
);

export default Contacts;