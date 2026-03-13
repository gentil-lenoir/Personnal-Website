import React, { useEffect, useState, useRef, useMemo } from 'react';
import '../css/views/Home.css';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const gentilAge = new Date().getFullYear() - 2007;
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const sectionsRef = useRef<HTMLElement[]>([]);
  
  // ✅ FIX RENDER LOOP: Memoized progress calculation
  const progressWidth = useMemo(() => {
    if (sectionsRef.current.length === 0) return '25%';
    const activeIndex = sectionsRef.current.findIndex(s => s?.id === activeSection);
    return activeIndex >= 0 ? `${(activeIndex + 1) * 25}%` : '25%';
  }, [sectionsRef.current.length, activeSection]);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            setActiveSection(entry.target.id || 'hero');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Function to add sections to ref
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main className="home">
      {/* Navigation Progress Bar - FIXED */}
      <div className="progress-bar" style={{ width: progressWidth }} />

      {/* Hero Section */}
      <section id="hero" className="hero-section" ref={addToRefs}>
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">⚡ Développeur Full Stack & Electronicien</div>
              <h1 className="hero-title">
                <span className="hero-title-greeting">Bonjour, je suis</span>
                <span className="hero-title-name" translate='no'>Gentil Le NoiR M.B.</span>
              </h1>
              <p className="hero-description">
                Je transforme vos idées en expériences numériques exceptionnelles. 
                Développeur Web <span translate='no'>FullStack</span>, Programmeur et étudiant en 
                Software Engineering à UNILAK/Kigali.
              </p>
              <div className="hero-cta">
                <a href="/portfolio" className="btn btn-primary">
                  Voir mes projets
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="/contacts" className="btn btn-outline">
                  Me contacter
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Années d'expérience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">7+</span>
                  <span className="stat-label">Projets réalisés</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Clients satisfaits</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-wrapper">
                <img 
                  src="/img/gentil-sur-pc.jpg" 
                  alt="Gentil Le NoiR au travail"
                  className="hero-img"
                  loading="eager"
                />
                <div className="hero-image-overlay"></div>
                <div className="hero-image-badge">
                  <span className="badge-dot">●</span>
                  Disponible pour missions
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>▼ Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">◈ Qui suis-je ?</span>
            <h2 className="section-title">À Propos de Moi</h2>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                <strong translate='no'>Gentil Le NoiR Maliyamungu B.</strong>, né en 2007 au Sud-Kivu 
                (République Démocratique du Congo), est un développeur web passionné 
                et electronicien expérimenté de <mark>{gentilAge} ans</mark>.
              </p>
              <p className="about-text">
                Actuellement étudiant en <strong>Software Engineering à UNILAK/Kigali</strong>, 
                je combine mes compétences techniques avec une solide formation académique 
                pour créer des solutions innovantes.
              </p>
              <p className="about-text">
                En tant que fondateur et Directeur du projet <strong>Azenium</strong>, 
                je développe une plateforme de création des invitations numériques securisés, de gestion des hôtels et des événelents, et mise des réservations eligne pour les hôtels et les événements publics. dans cet angle, je cherche de partenariat et d'assistance financière 
                qui vise à révolutionner l'accès aux opportunités en Afrique.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">▲</span>
                  <span>5+ projets majeurs</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">◆</span>
                  <span>Innovation constante</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">⌂</span>
                  <span>Collaboration ouverte</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="/img/logo.png" 
                alt="Gentil Le NoiR"
                className="about-img"
              />
              <div className="about-image-decoration"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Azenium Spotlight Section */}
      <section id="azenium" className="azenium-section" ref={addToRefs}>
        <div className="container">
          <div className="azenium-content">
            <div className="azenium-logos">
              <img src="/img/azenium/azeni_um_logo_transparent.png" alt="Azenium" className="azenium-logo-normal" />
              <img src="/img/azenium/logo_transparent.png" alt="Azenium" className="azenium-logo-long" />
            </div>
            <h3 className="azenium-title">◆ Plateforme de création des invitations numériques</h3>
            <p className="azenium-description">
              <strong>Azenium</strong> est une plateforme SaaS de création des invitations/tickets numériques/virtuels securisés et la gestion des événements et des hôtels et permet de faire des réservations enligne pour les hôtels et les événements publics.
              <br /> <strong>Nous cherchons des partenaires stratégiques et des inversisseurs pour lancer ce gros projet </strong>
            </p>
            <div className="azenium-badges">
              <span className="azenium-badge">⚡ En recherche de partenariat</span>
              <span className="azenium-badge">⚙ Assistance financière</span>
            </div>
            <a 
              href="https://partner-azenium.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Devenir partenaire
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">◈ Ce que je fais</span>
            <h2 className="section-title">Mes Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⌨</div>
              <h3>Création de Sites Web</h3>
              <p>Sites vitrines, e-commerce, applications web sur mesure avec React, Node.js et technologies modernes.</p>
              <a href="/portfolio" className="service-link">Voir réalisations →</a>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙</div>
              <h3>Correction & Optimisation</h3>
              <p>Audit, optimisation de performance, correction de bugs et modernisation de sites existants.</p>
              <a href="/portfolio" className="service-link">Découvrir →</a>
            </div>
            <div className="service-card">
              <div className="service-icon">⌁</div>
              <h3>Travail en Équipe</h3>
              <p>Intégration dans vos équipes existantes pour renforcer vos capacités de développement.</p>
              <a href="/contacts" className="service-link">Me rejoindre →</a>
            </div>
            <div className="service-card">
              <div className="service-icon">⎔</div>
              <h3>Projets Électroniques</h3>
              <p>Développement de solutions IoT, projets Arduino, et intégration matériel-logiciel.</p>
              <a href="/portfolio" className="service-link">Voir projets →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">◈ Mon expertise</span>
            <h2 className="section-title">Compétences Techniques</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>▲ Frontend</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span>React / TypeScript / VueJs</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>HTML5 / CSS3 / Tailwind</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>◆ Backend</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span>PHP / Laravel</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>MySQL / MongoDB</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Node.js / Express</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>⚙ Outils & Soft Skills</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span>Git / GitHub</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '97%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Communication & Support</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Problem Solving</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '72%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>⌁ Électronique</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span>Arduino / Microcontrôleurs</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Circuit Design</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '52%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>IoT / Capteurs</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '55%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="contact-section" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">◈ Restons en contact</span>
            <h2 className="section-title">Travaillons Ensemble</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Informations de Contact</h3>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+243978089552</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-icon">✉</span>
                  <div>
                    <h4>Email</h4>
                    <p>gentillenoir075@outlook.com</p>
                  </div>
                </div>
              </div>
              <div className="contact-social">
                <a href="https://www.linkedin.com/in/gentil-lenoir-maliyamungu" className="social-link">LinkedIn</a>
                <a href="https://github.com/gentil-lenoir" className="social-link">GitHub</a>
                <a href="https://web.facebook.com/profile.php?id=61576314604030" className="social-link">Facebook</a>
              </div>
            </div>
            <div className="contact-form-wrapper contact-form-container" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;