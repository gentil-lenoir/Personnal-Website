import React, { useEffect, useRef } from 'react';
import '../css/views/Bio.css';
import ContactForm from '../components/ContactForm';

const Bio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const elements = document.querySelectorAll('.bio-paragraph, .bio-quote, .timeline-item, .bio-conclusion');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bio-page">
      {/* Hero Section */}
      <section className="bio-hero">
        <div className="bio-hero-content">
          <h1 className="bio-hero-title">
            <span className="bio-hero-greeting">Qui est</span>
            <span className="bio-hero-name gradient-text" translate='no'>Gentil Le NoiR</span>
          </h1>
          <div className="bio-hero-stats">
            <div className="bio-stat">
              <span className="bio-stat-number">2007</span>
              <span className="bio-stat-label">Naissance</span>
            </div>
            <div className="bio-stat">
              <span className="bio-stat-number">5+</span>
              <span className="bio-stat-label">Années d'expérience</span>
            </div>
            <div className="bio-stat">
              <span className="bio-stat-number">7+</span>
              <span className="bio-stat-label">Projets réalisés</span>
            </div>
          </div>
        </div>
        <div className="bio-hero-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      {/* Bio Content */}
      <section className="bio-content-section" ref={sectionRef}>
        <div className="container">
          {/* Quick Actions */}
          <div className="bio-actions">
            <a href="/images" className="bio-action-card">
              <span className="action-icon">📸</span>
              <div className="action-text">
                <h3>Galerie d'images</h3>
                <p>Découvrez mes moments marquants</p>
              </div>
              <span className="action-arrow">→</span>
            </a>
            <a href="/cv" target="_blank" rel="noopener noreferrer" className="bio-action-card">
              <span className="action-icon">📄</span>
              <div className="action-text">
                <h3>Lire le CV</h3>
                <p>Parcourez mon parcours professionnel</p>
              </div>
              <span className="action-arrow">→</span>
            </a>
            <a href="/doc/gentil_le_noir_c_v.pdf" download className="bio-action-card">
              <span className="action-icon">⬇️</span>
              <div className="action-text">
                <h3>Télécharger le CV</h3>
                <p>Version PDF à conserver</p>
              </div>
              <span className="action-arrow">→</span>
            </a>
          </div>

          {/* Biography */}
          <div className="bio-content">
            <div className="bio-paragraph" data-aos="fade-up">
              <p>
                Je suis <strong translate='no'>Gentil Le Noir Maliyamungu Balegamire</strong>, un <strong>développeur web</strong>, 
                <strong>programmeur</strong> et <strong>électronicien</strong> passionné par la technologie et l'innovation. 
                Mon objectif est de concevoir des solutions numériques et matérielles intelligentes qui transforment 
                les idées en projets concrets et impactants.
              </p>
            </div>

            <div className="bio-quote" data-aos="fade-up">
              <blockquote>
                "Cela semble toujours impossible jusqu'à ce que ce soit fait."
                <cite>- Nelson Mandela</cite>
              </blockquote>
            </div>

            <div className="bio-paragraph" data-aos="fade-up">
              <p>
                Né à <strong>Goma</strong>, en <strong>République Démocratique du Congo</strong>, j'ai grandi dans un environnement 
                où la curiosité et l'expérimentation technologique étaient encouragées dès le plus jeune âge. Très tôt, 
                j'ai exploré l'informatique, l'électronique et la programmation, ce qui a façonné ma passion pour le 
                développement de projets innovants.
              </p>
            </div>

            <div className="bio-timeline">
              <h3 className="timeline-title">Parcours</h3>
              <div className="timeline-grid">
                <div className="timeline-item" data-aos="fade-right">
                  <span className="timeline-year">Primaire</span>
                  <h4>École Matumaini</h4>
                  <p>Goma, RDC</p>
                </div>
                <div className="timeline-item" data-aos="fade-up">
                  <span className="timeline-year">Secondaire</span>
                  <h4>Institut Maranatha</h4>
                  <p>Education de base</p>
                </div>
                <div className="timeline-item" data-aos="fade-left">
                  <span className="timeline-year">Supérieur</span>
                  <h4>Complexe Scolaire Adventiste Bethel</h4>
                  <p>Spécialisation en électronique</p>
                </div>
                <div className="timeline-item" data-aos="fade-right">
                  <span className="timeline-year">Actuel</span>
                  <h4 translate='no'>Software Engineering</h4>
                  <p>UNILAK/Kigali</p>
                </div>
              </div>
            </div>

            <div className="bio-paragraph" data-aos="fade-up">
              <p>
                Professionnellement, j'ai commencé comme stagiaire sur des projets web, développant rapidement des 
                compétences solides en front-end, back-end et gestion de bases de données. Cette expérience m'a permis 
                de livrer des projets fonctionnels et esthétiques, intégrant à la fois performance et expérience utilisateur.
              </p>
            </div>

            <div className="bio-skills-highlight">
              <h3>Domaines d'expertise</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <span className="expertise-icon">💻</span>
                  <h4>Développement Web</h4>
                  <p>React, Node.js, TypeScript, Laravel</p>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">🔌</span>
                  <h4>Électronique</h4>
                  <p>Arduino, Raspberry Pi, IoT, Capteurs</p>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">📱</span>
                  <h4>Programmation</h4>
                  <p>Applications web, mobiles, embarquées</p>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">🤝</span>
                  <h4>Gestion de projet</h4>
                  <p>Leadership, collaboration, méthodologies agiles</p>
                </div>
              </div>
            </div>

            <div className="bio-paragraph" data-aos="fade-up">
              <p>
                Parallèlement, j'ai approfondi mes connaissances en électronique et systèmes embarqués avec des 
                plateformes comme <em>Arduino</em> et <em>Raspberry Pi</em>, ce qui me permet de créer des solutions 
                hybrides où le logiciel et le matériel travaillent de concert.
              </p>
            </div>

            <div className="projects-showcase">
              <h3>Projets Majeurs</h3>
              <div className="projects-grid">
                <a href="https://partner-azenium.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-card">
                  <span className="project-name">Azenium</span>
                  <span className="project-desc">Plateforme de création des invitations virtuels</span>
                  <span className="project-link">→</span>
                </a>
                <a href="/portfolio" className="project-card">
                  <span className="project-name">Khaleen Schools</span>
                  <span className="project-desc">Automatisation scolaire, MIS, et Gestion</span>
                  <span className="project-link">→</span>
                </a>
                <a href="/portfolio" className="project-card">
                  <span className="project-name">Site Builder</span>
                  <span className="project-desc">Plateforme de création des sites et des pages web</span>
                  <span className="project-link">→</span>
                </a>
              </div>
            </div>

            <div className="bio-paragraph" data-aos="fade-up">
              <p>
                Mon approche repose sur l'innovation continue, la curiosité et l'apprentissage permanent. Je suis 
                toujours à l'affût des nouvelles technologies pour offrir des solutions à la fois créatives, fiables 
                et adaptées aux besoins réels des utilisateurs.
              </p>
            </div>

            <div className="values-section">
              <h3>Mes Valeurs</h3>
              <div className="values-grid">
                <div className="value-item">
                  <span className="value-icon">🤝</span>
                  <h4>Collaboration</h4>
                  <p>Travailler ensemble pour de meilleurs résultats</p>
                </div>
                <div className="value-item">
                  <span className="value-icon">⚡</span>
                  <h4>Intégrité</h4>
                  <p>Transparence et honnêteté dans chaque projet</p>
                </div>
                <div className="value-item">
                  <span className="value-icon">💪</span>
                  <h4>Persévérance</h4>
                  <p>Ne jamais abandonner face aux défis</p>
                </div>
                <div className="value-item">
                  <span className="value-icon">📚</span>
                  <h4>Partage</h4>
                  <p>Transmettre les connaissances à la communauté</p>
                </div>
              </div>
            </div>

            <div className="bio-conclusion" data-aos="fade-up">
              <p>
                En résumé, je suis un <strong>développeur</strong>, <strong>programmeur</strong>, 
                <strong>informaticien</strong> et <strong>électronicien</strong> passionné, capable de transformer 
                des idées en solutions concrètes et de collaborer pour créer un impact réel. Je suis toujours ouvert 
                aux nouvelles collaborations, projets ou échanges de connaissances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bio-contact-section">
        <div className="container">
          <div className="bio-contact-header">
            <h2 className="bio-contact-title">Travaillons ensemble</h2>
            <p className="bio-contact-description">
              Vous avez un projet ? Une idée ? Une opportunité de collaboration ?
              Je suis à votre écoute pour en discuter.
            </p>
          </div>
          <div className="contact-form-wrapper contact-form-container" style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: '2rem'
          }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Bio;