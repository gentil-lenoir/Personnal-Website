import React from 'react';
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiTwitter,
} from 'react-icons/fi';
import '../css/views/Contacts.css';
import ContactForm from '../components/ContactForm';

type PrimaryContact = {
  icon: any;
  label: string;
  value: string;
  href: string;
  note: string;
  accent: string;
};

type SocialPlatform = {
  icon: any;
  name: string;
  handle: string;
  href: string;
};

const primaryContacts: PrimaryContact[] = [
  {
    icon: FiMessageCircle,
    label: 'WhatsApp',
    value: '+243 978 089 552',
    href: 'https://wa.me/243978089552',
    note: 'Le canal le plus direct pour une réponse rapide.',
    accent: 'signal-green',
  },
  {
    icon: FiPhone,
    label: 'Téléphone',
    value: '+250 792 871 952',
    href: 'tel:+250792871952',
    note: 'Disponible pour appels, missions et collaborations.',
    accent: 'signal-blue',
  },
  {
    icon: FiPhone,
    label: 'Téléphone',
    value: '+250 738 663 519',
    href: 'tel:+250738663519',
    note: 'Deuxième ligne de contact pour rester joignable.',
    accent: 'signal-cyan',
  },
  {
    icon: FiSend,
    label: 'Telegram',
    value: '+250 738 663 519',
    href: 'https://t.me/+250738663519',
    note: 'Pratique pour échanges rapides et suivi de projet.',
    accent: 'signal-gold',
  },
];

const emails = [
  {
    icon: FiMail,
    label: 'Email principal',
    value: 'gentillenoir075@outlook.com',
    href: 'mailto:gentillenoir075@outlook.com',
  },
  {
    icon: FiMail,
    label: 'Email secondaire',
    value: 'gentillenoir075@gmail.com',
    href: 'mailto:gentillenoir075@gmail.com',
  },
];

const socials: SocialPlatform[] = [
  {
    icon: FiGithub,
    name: 'GitHub',
    handle: '@gentil-lenoir',
    href: 'https://github.com/gentil-lenoir',
  },
  {
    icon: FiLinkedin,
    name: 'LinkedIn',
    handle: 'Gentil Le NoiR Maliyamungu',
    href: 'https://www.linkedin.com/in/gentil-lenoir-maliyamungu',
  },
  {
    icon: FiGlobe,
    name: 'Dev.to',
    handle: 'gentillenoir',
    href: 'https://dev.to/gentillenoir',
  },
  {
    icon: FiGlobe,
    name: 'Facebook',
    handle: 'Profil officiel',
    href: 'https://web.facebook.com/profile.php?id=61576314604030',
  },
  {
    icon: FiTwitter,
    name: 'X',
    handle: '@GentilLeNoiR',
    href: 'https://x.com/@GentilLeNoiR',
  },
];

const renderIcon = (Icon: any, className?: string) =>
  React.createElement(Icon as any, className ? { className, 'aria-hidden': true } : { 'aria-hidden': true });

const Contacts = () => {
  return (
    <main className="contacts-page">
      <section className="contacts-hero">
        <div className="hero-orb orb-left" />
        <div className="hero-orb orb-right" />

        <div className="container contacts-hero-layout">
          <div className="contacts-hero-copy">
            <span className="hero-kicker">Contact • Collaboration • Disponibilité</span>
            <h1 className="contacts-hero-title">
              Parlons de ton projet avec un canal
              <span className="gradient-text"> simple, rapide et professionnel.</span>
            </h1>
            <p className="contacts-hero-description">
              Pour une mission freelance, un stage, une intégration en équipe, une opportunité
              produit ou une collaboration autour de <span translate="no">Quevvy Platform</span>, tu peux
              me joindre via WhatsApp, téléphone, email ou réseaux pro.
            </p>

            <div className="hero-actions">
              <a href="https://wa.me/243978089552" target="_blank" rel="noreferrer" className="hero-btn hero-btn-primary">
                Ouvrir WhatsApp
                {renderIcon(FiArrowRight)}
              </a>
              <a href="mailto:gentillenoir075@outlook.com" className="hero-btn hero-btn-secondary">
                Envoyer un email
                {renderIcon(FiArrowRight)}
              </a>
            </div>

            <div className="hero-mini-stats">
              <div className="mini-stat">
                <strong>2</strong>
                <span>emails actifs</span>
              </div>
              <div className="mini-stat">
                <strong>3</strong>
                <span>canaux directs</span>
              </div>
              <div className="mini-stat">
                <strong>5</strong>
                <span>réseaux professionnels</span>
              </div>
            </div>
          </div>

          <div className="hero-contact-panel">
            <div className="hero-panel-card">
              <div className="panel-head">
                <span className="panel-pill">Canal recommandé</span>
                <h2>Réponse rapide</h2>
              </div>

              <a
                href="https://wa.me/243978089552"
                target="_blank"
                rel="noreferrer"
                className="priority-contact"
              >
                <div className="priority-icon">{renderIcon(FiMessageCircle)}</div>
                <div>
                  <strong>WhatsApp direct</strong>
                  <span>+243 978 089 552</span>
                </div>
              </a>

              <div className="availability-grid">
                <div className="availability-card">
                  <span className="availability-label">Localisation</span>
                  <strong>Kigali / RDC</strong>
                </div>
                <div className="availability-card">
                  <span className="availability-label">Types d&apos;échanges</span>
                  <strong>Call, chat, email</strong>
                </div>
                <div className="availability-card">
                  <span className="availability-label">Sujets</span>
                  <strong>Web, produit, équipe</strong>
                </div>
                <div className="availability-card">
                  <span className="availability-label">Priorité</span>
                  <strong>Réactivité & clarté</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contacts-quick-access">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Accès direct</span>
            <h2>Choisis le canal qui te convient.</h2>
          </div>

          <div className="quick-grid">
            {primaryContacts.map((contact) => (
              <a
                key={`${contact.label}-${contact.value}`}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`quick-card ${contact.accent}`}
              >
                <div className="quick-card-top">
                  <span className="quick-badge">
                    {renderIcon(contact.icon)}
                    {contact.label}
                  </span>
                  <span className="quick-arrow">{renderIcon(FiArrowRight)}</span>
                </div>
                <strong>{contact.value}</strong>
                <p>{contact.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contacts-details-section">
        <div className="container contacts-details-layout">
          <div className="details-column">
            <article className="info-panel">
              <div className="section-heading section-heading-left">
                <span className="section-kicker">Emails</span>
                <h2>Pour une demande structurée.</h2>
              </div>
              <div className="email-list">
                {emails.map((email) => (
                  <a key={email.value} href={email.href} className="email-card">
                    <div>
                      <span className="email-card-label">
                        {renderIcon(email.icon)}
                        {email.label}
                      </span>
                      <strong>{email.value}</strong>
                    </div>
                  </a>
                ))}
              </div>
            </article>

            <article className="info-panel">
              <div className="section-heading section-heading-left">
                <span className="section-kicker">Réseaux</span>
                <h2>Mon univers pro et public.</h2>
              </div>
              <div className="social-list">
                {socials.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="social-card">
                    <div>
                      <span className="social-name">
                        {renderIcon(social.icon)}
                        {social.name}
                      </span>
                      <strong>{social.handle}</strong>
                    </div>
                    <span className="social-arrow">{renderIcon(FiExternalLink)}</span>
                  </a>
                ))}
              </div>
            </article>
          </div>

          <div className="form-panel">
            <div className="form-panel-head">
              <span className="section-kicker">Formulaire</span>
              <h2>Décris ton besoin clairement.</h2>
              <p>
                Utilise ce formulaire si tu veux préparer un message plus complet. Il ouvrira
                ensuite ton client email avec les informations déjà remplies.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-closing">
        <div className="container closing-shell">
          <h2>Disponible pour construire quelque chose de sérieux.</h2>
          <p>
            Produit web, redesign, correction, collaboration technique ou opportunité
            professionnelle: on peut démarrer par WhatsApp, appel ou email.
          </p>
          <div className="closing-actions">
            <a href="tel:+250792871952" className="hero-btn hero-btn-secondary">
              Appeler maintenant
            </a>
            <a href="https://github.com/gentil-lenoir" target="_blank" rel="noreferrer" className="hero-btn hero-btn-primary">
              Voir mon GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
