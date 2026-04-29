import React, { useEffect, useRef, useState } from 'react';
import {
  FiArrowRight,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiMonitor,
  FiPhone,
  FiSend,
  FiZap,
} from 'react-icons/fi';
import '../css/views/Home.css';
import ContactForm from '../components/ContactForm';

type SectionId = 'hero' | 'about' | 'focus' | 'services' | 'contact';

type Service = {
  icon: any;
  title: string;
  text: string;
  link: string;
  linkLabel: string;
};

type ContactLink = {
  icon: any;
  label: string;
  value: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  accent: string;
};

const services: Service[] = [
  {
    icon: FiMonitor,
    title: 'Interfaces web premium',
    text: 'Sites vitrines, dashboards et applications modernes avec une attention forte au design, au motion et aux performances.',
    link: '/portfolio',
    linkLabel: 'Explorer mes réalisations',
  },
  {
    icon: FiLayers,
    title: 'Full stack & architecture',
    text: 'Développement frontend et backend, structuration de projet, intégration API et amélioration de l’expérience utilisateur.',
    link: '/portfolio',
    linkLabel: 'Voir mes projets',
  },
  {
    icon: FiZap,
    title: 'Correction & optimisation',
    text: 'Refonte visuelle, correction de bugs, nettoyage du code et montée en qualité d’un produit déjà en ligne.',
    link: '/contacts',
    linkLabel: 'Lancer une collaboration',
  },
  {
    icon: FiCode,
    title: 'Électronique & prototypes',
    text: 'Projets embarqués, IoT, microcontrôleurs et passerelles entre matériel et logiciel pour des produits concrets.',
    link: '/portfolio',
    linkLabel: 'Découvrir cet univers',
  },
];

const contacts: ContactLink[] = [
  {
    icon: FiMessageCircle,
    label: 'WhatsApp',
    value: '+243 978 089 552',
    href: 'https://wa.me/243978089552',
  },
  {
    icon: FiPhone,
    label: 'Téléphone',
    value: '+250 792 871 952',
    href: 'tel:+250792871952',
  },
  {
    icon: FiPhone,
    label: 'Téléphone',
    value: '+250 738 663 519',
    href: 'tel:+250738663519',
  },
  {
    icon: FiSend,
    label: 'Telegram',
    value: '+250 738 663 519',
    href: 'https://t.me/+250738663519',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'gentillenoir075@outlook.com',
    href: 'mailto:gentillenoir075@outlook.com',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'gentillenoir075@gmail.com',
    href: 'mailto:gentillenoir075@gmail.com',
  },
];

const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/gentil-lenoir', accent: 'var(--accent-cyan)' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gentil-lenoir-maliyamungu', accent: 'var(--accent-blue)' },
  { label: 'Dev.to', href: 'https://dev.to/gentillenoir', accent: 'var(--accent-gold)' },
  { label: 'Facebook', href: 'https://web.facebook.com/profile.php?id=61576314604030', accent: 'var(--accent-orange)' },
  { label: 'X', href: 'https://x.com/@GentilLeNoiR', accent: 'var(--accent-pink)' },
];

const renderIcon = (Icon: any, className?: string) =>
  React.createElement(Icon as any, className ? { className, 'aria-hidden': true } : { 'aria-hidden': true });

const Home = () => {
  const gentilAge = new Date().getFullYear() - 2007;
  const sectionIds: SectionId[] = ['hero', 'about', 'focus', 'services', 'contact'];
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const sectionsRef = useRef<Record<SectionId, HTMLElement | null>>({
    hero: null,
    about: null,
    focus: null,
    services: null,
    contact: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('section-visible');
          const nextId = entry.target.id as SectionId;
          if (sectionIds.includes(nextId)) {
            setActiveSection(nextId);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-5% 0px -10% 0px' }
    );

    sectionIds.forEach((id) => {
      const section = sectionsRef.current[id];
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const progressWidth = `${((sectionIds.indexOf(activeSection) + 1) / sectionIds.length) * 100}%`;

  const registerSection = (id: SectionId) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el;
  };

  return (
    <main className="home">
      <div className="progress-bar" style={{ width: progressWidth }} />

      <section id="hero" className="hero-section" ref={registerSection('hero')}>
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="container hero-shell">
          <div className="hero-copy">
            <span className="eyebrow">Portfolio développeur • Kigali / RDC • Disponible</span>

            <h1 className="hero-title">
              Je conçois des expériences
              <span className="hero-title-highlight"> web élégantes, techniques et crédibles.</span>
            </h1>

            <p className="hero-description">
              Je suis <span translate="no">Gentil Le NoiR Maliyamungu</span>, développeur full stack,
              étudiant en Software Engineering à UNILAK et fondateur de <span translate="no">Quevvy Platform</span>. Je crée des
              produits numériques qui allient esthétique, clarté métier et ambition technique.
            </p>

            <div className="hero-actions">
              <a href="/portfolio" className="btn btn-primary">
                Voir mes projets
                {renderIcon(FiArrowRight)}
              </a>
              <a href="/cv/fr" className="btn btn-secondary">
                CV Français
                {renderIcon(FiDownload)}
              </a>
              <a href="/cv/en" className="btn btn-ghost">
                Resume English
                {renderIcon(FiDownload)}
              </a>
            </div>

            <div className="hero-metrics">
              <div className="metric-card">
                <span className="metric-value">{gentilAge} ans</span>
                <span className="metric-label">Énergie, progression et discipline</span>
              </div>
              <div className="metric-card">
                <span className="metric-value">Full stack</span>
                <span className="metric-label">Frontend, backend, UX et vision produit</span>
              </div>
              <div className="metric-card">
                <span className="metric-value">Quevvy</span>
                <span className="metric-label">Plateforme produit orientée digital business & SaaS</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>

              <div className="hero-visual">
                <img
                  src="/img/gentil-sur-pc.jpg"
                  alt="Gentil Le NoiR devant son ordinateur"
                  className="hero-portrait"
                  loading="eager"
                />

                <div className="floating-card code-card">
                  <div className="floating-label">Stack</div>
                  <strong>React • TypeScript • Laravel</strong>
                </div>

                <div className="floating-card signal-card">
                  <span className="signal-dot" />
                  Disponible pour freelance, stage et collaboration
                </div>

                <div className="floating-card social-card">
                  <a href="https://github.com/gentil-lenoir" target="_blank" rel="noreferrer" aria-label="GitHub">
                    {renderIcon(FiGithub)}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gentil-lenoir-maliyamungu"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    {renderIcon(FiLinkedin)}
                  </a>
                  <a href="https://dev.to/gentillenoir" target="_blank" rel="noreferrer" aria-label="Dev.to">
                    {renderIcon(FiGlobe)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section" ref={registerSection('about')}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Profil</span>
            <h2>Un développeur qui pense produit, image et exécution.</h2>
          </div>

          <div className="about-layout">
            <div className="about-story glass-card">
              <p>
                Né au Sud-Kivu en République Démocratique du Congo, j&apos;avance avec une vision
                claire: construire des solutions utiles, solides et belles. Mon travail mélange
                développement web, sens du détail visuel et compréhension des besoins terrain.
              </p>
              <p>
                À UNILAK/Kigali, je poursuis une formation en Software Engineering tout en
                réalisant des projets réels. J&apos;aime transformer une idée brute en une interface
                lisible, performante et suffisamment professionnelle pour inspirer confiance.
              </p>
            </div>

            <div className="about-points">
              <article className="info-tile">
                <span className="tile-kicker">Positionnement</span>
                <h3>Développeur full stack</h3>
                <p>Interfaces, logique métier, intégration backend et amélioration continue.</p>
              </article>

              <article className="info-tile">
                <span className="tile-kicker">Méthode</span>
                <h3>Tech + design + clarté</h3>
                <p>Un rendu propre ne suffit pas: le produit doit aussi être compréhensible et utile.</p>
              </article>

              <article className="info-tile">
                <span className="tile-kicker">Ouverture</span>
                <h3>Collaboration internationale</h3>
                <p>Disponible pour partenariat, freelance, mission produit ou équipe de développement.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="focus-section" ref={registerSection('focus')}>
        <div className="container focus-layout">
          <div className="section-heading section-heading-left">
            <span className="eyebrow">Focus produit</span>
            <h2>Quevvy Platform, une vision SaaS ambitieuse pensée pour l’Afrique.</h2>
            <p>
              Quevvy Platform développe des produits numériques orientés business, présence en
              ligne et croissance produit. <span translate="no">SiteX Quevvy</span> en est le premier
              produit, dédié à la création de sites et d&apos;expériences web modernes.
            </p>
          </div>

          <div className="focus-panel glass-card">
            <div className="focus-logos">
              <img src="/img/quevvy/quevvy icon.png" alt="Logo Quevvy Platform" />
              <img src="/img/quevvy/quevvy logo.png" alt="Signature Quevvy Platform" />
            </div>

            <div className="focus-tags">
              <span>Quevvy Platform</span>
              <span>SiteX Quevvy</span>
              <span>Présence web moderne</span>
              <span>Investisseurs recherchés</span>
            </div>

            <a
              href="https://partner.quevvy.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Découvrir le projet
              {renderIcon(FiExternalLink)}
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="services-section" ref={registerSection('services')}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Services</span>
            <h2>Ce que je peux construire ou améliorer pour toi.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{renderIcon(service.icon)}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={service.link} className="service-link">
                  {service.linkLabel}
                  {renderIcon(FiArrowRight)}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section" ref={registerSection('contact')}>
        <div className="container contact-layout">
          <div className="contact-column">
            <div className="section-heading section-heading-left">
              <span className="eyebrow">Contact</span>
              <h2>On peut parler projet, mission, stage ou partenariat.</h2>
              <p>
                Voici les liens et coordonnées fiables à utiliser pour me joindre rapidement ou
                consulter mon univers professionnel.
              </p>
            </div>

            <div className="contact-cards">
              {contacts.map((item) => (
                <a className="contact-card" href={item.href} key={`${item.label}-${item.value}`}>
                  <span className="contact-card-icon">{renderIcon(item.icon)}</span>
                  <span className="contact-card-copy">
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="socials-card glass-card">
              <h3>Réseaux & plateformes</h3>
              <div className="socials-grid">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-pill"
                    style={{ '--social-accent': social.accent } as React.CSSProperties}
                  >
                    {social.label}
                    {renderIcon(FiExternalLink)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-shell glass-card">
            <div className="form-intro">
              <span className="form-badge">Message direct</span>
              <h3>Présente-moi ton besoin.</h3>
              <p>Je te répondrai avec une approche claire, technique et orientée résultat.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
