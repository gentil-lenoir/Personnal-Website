import React, { useEffect, useState } from 'react';
import '../css/views/Home.css';
import ContactForm from '../components/ContactForm.tsx';

const Home = () => {
  const gentilAge = new Date().getFullYear() - 2007;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ContactCard = (label: string, value: string, icon: string) => (
    <div className="one-contact">
      <img src={icon} alt={label} className="contact-icon" />
      <div>
        <h4>{label}</h4>
        <p>{value}</p>
      </div>
    </div>
  );

  return (
    <section className={`home-page ${isVisible ? 'visible' : ''}`}>
      <h1 className="welcomes-h1">
        Bienvenue sur le site de <span translate="no"> Gentil Le NoiR M.B.</span>
      </h1>

      <div className="gentil-passeport-container">
        <img 
          src="/img/logo.png" 
          className="gentil-passeport" 
          alt="Gentil Le NoiR" 
          loading="lazy"
        />
      </div>

      <p className="gentil-description">
        <strong translate="no">GENTIL LE NOIR MALIYAMUNGU B</strong><br />
        <mark>Développeur Web</mark> | <mark>Electronicien</mark> | <mark>Informaticien</mark> | <mark>Programmeur</mark>
      </p>

      <a className="link" href="/images">
        📸 VOIR SES IMAGES
      </a>

      <section className="contacts-section">
        <h3>Contacts</h3>
        {ContactCard("WhatsApp", "+243978089552", "/img/whatsapp.png")}
        {ContactCard("Email", "gentillenoir075@outlook.com", "/img/gmail.png")}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="/contacts" style={{ color: '#38bdf8', textDecoration: 'none' }}>
            📞 voir plus ...
          </a>
        </div>
      </section>

      <ContactForm />

      <section className="competences">
        <h2>Compétences Professionnelles</h2>

        <h4>🚀 Développement Web</h4>
        <p>Il conçoit des sites interactifs, responsives et modernes, aussi bien en Front-End qu'en Back-End, avec des frameworks puissants.</p>

        <h4>💻 Informatique</h4>
        <p>Il maîtrise les outils bureautiques, les systèmes numériques et informatiques spécialisés, avec une bonne culture technique.</p>

        <h4>🔌 Électronique</h4>
        <p>Il réalise des montages électroniques, des projets Arduino, et sait diagnostiquer, souder et programmer des composants.</p>

        <h4>👨‍💻 Programmation</h4>
        <p>Il développe des applications web, mobiles, desktop, et embarquées, combinant ses compétences logicielles et électroniques.</p>
      </section>

      <section className="cv-section">
        <a href="/cv" target="_blank" rel="noopener noreferrer">
          📄 Lire le CV
        </a>
        <a href="/doc/gentil_le_noir_c_v.pdf" download>
          ⬇️ Télécharger le CV
        </a>
      </section>

      <section className="bio-sect">
        <h2>📖 Biographie Brève</h2>
        <p>
          <strong>Gentil Le NoiR M.B.</strong> est un jeune développeur web passionné, electronicien expérimenté, informaticien polyvalent et programmeur créatif. <br />
          Né en 2007 au Sud-Kivu en <em>République Démocratique du Congo</em>, il est de nationalité congolaise.<br />
          Il travaille activement sur des projets numériques et électroniques à haute valeur ajoutée.
        </p>
        <p>
          Grâce à sa passion, son sérieux et son envie constante d'apprendre, il a déjà réalisé plusieurs projets ambitieux dans les domaines du web et de l'électronique. Il a aujourd'hui <mark>{gentilAge} ans</mark>, avec un avenir prometteur.
        </p>
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="/biography" style={{ 
            color: '#38bdf8', 
            textDecoration: 'none',
            fontWeight: '600',
            padding: '0.5rem 1rem',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '6px',
            background: 'rgba(56, 189, 248, 0.1)'
          }}>
            📚 Voir plus...
          </a>
        </p>
      </section>
    </section>
  );
};

export default Home;