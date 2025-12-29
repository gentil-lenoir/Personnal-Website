import React from 'react';
import '../css/views/NotFound.css';

const NotFound = () => (
  <section className="notfound-section">
    <h1>404 - Page non trouvée</h1>
    <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
    <a href="/">Retour à l'accueil</a>
  </section>
);

export default NotFound;
