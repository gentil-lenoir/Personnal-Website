import React from 'react';
import "../css/components/Footer.css";

const Footer = () => (
  <footer className="main-footer">
    <p>&copy; {new Date().getFullYear()} <span translate='no'>Gentil Le NoiR M.B. </span> | Tous droits réservés.</p>
  </footer>
);

export default Footer;