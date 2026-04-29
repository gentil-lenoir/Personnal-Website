import React, { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiExternalLink, FiLayers, FiMonitor, FiTrendingUp } from 'react-icons/fi';
import '../css/views/Portfolio.css';

const renderIcon = (Icon: any, className?: string) =>
  React.createElement(Icon as any, className ? { className, 'aria-hidden': true } : { 'aria-hidden': true });

const skillsData = [
  { category: "Frontend", skills: [
    { name: "React / TypeScript", level: "90%", icon: "⚡" },
    { name: "HTML5 / CSS3 / Tailwind", level: "95%", icon: "▣" },
    { name: "JavaScript ES6+", level: "92%", icon: "◈" },
    { name: "Nuxt.Js/Vue.Js", level: "85%", icon: "▲" }
  ]},
  { category: "Backend", skills: [
    { name: "PHP / Laravel", level: "82%", icon: "⚙" },
    { name: "Node.js / Express", level: "28%", icon: "◉" },
    { name: "Python / Django", level: "15%", icon: "◆" },
    { name: "MySQL / MongoDB", level: "85%", icon: "▤" }
  ]},
  { category: "Outils & Soft Skills", skills: [
    { name: "Git / GitHub", level: "98%", icon: "⌥" },
    { name: "Communication", level: "95%", icon: "⌂" },
    { name: "Problem Solving", level: "72%", icon: "⬡" },
    { name: "Gestion de projet", level: "85%", icon: "▦" }
  ]},
  { category: "Électronique & IoT", skills: [
    { name: "Arduino / Microcontrôleurs", level: "88%", icon: "⌁" },
    { name: "Circuit Design", level: "42%", icon: "∿" },
    { name: "IoT / Capteurs", level: "55%", icon: "⌔" },
    { name: "Automatisation", level: "50%", icon: "⎔" }
  ]}
];

const portfolioData = [
  {
    id: "quevvy-platform",
    img: "/img/quevvy/quevvy logo.png",
    title: "Quevvy Platform",
    status: <>⚡ Investisseurs recherchés</>,
    desc: "Plateforme produit ambitieuse qui construit des solutions numériques orientées business, présence en ligne et croissance digitale.",
    technologies: ["Laravel", "React.js", "TypeScript", "MySQL", "SaaS Strategy"],
    link: "https://partner.quevvy.com",
    github: "#",
    featured: true
  },
  {
    id: "sitex-quevvy",
    img: "/img/quevvy/sitex/sitex.logo.png",
    title: "SiteX Quevvy",
    desc: "Premier produit de Quevvy Platform. Une solution moderne pour créer des sites et expériences web avec une image professionnelle.",
    technologies: ["React", "TypeScript", "UI/UX", "Brand System", "Product Design"],
    link: "https://sitex.quevvy.com",
    github: "#"
  },
  {
    id: "khaleen-schools",
    img: "/img/khaleen-schools.png",
    title: "Khaleen Schools",
    desc: "Système d'automatisation scolaire : calculs automatiques, numérisation, gestion des notes et présence.",
    technologies: ["Laravel", "MySQL", "React", "Chart.js"],
    link: "https://schools.khaleen.com",
    github: "#"
  },
];

const Portfolio = () => {
  const [animatedSkills, setAnimatedSkills] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedSkills(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Filter projects
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(portfolioData);
    } else if (activeFilter === 'featured') {
      setFilteredProjects(portfolioData.filter(p => p.featured));
    }
  }, [activeFilter]);

  return (
    <main className="portfolio">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1 className="portfolio-hero-title">
            Mon <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="portfolio-hero-description">
            Découvrez mes projets récents et mon expertise technique. 
            Chaque projet est une opportunité de créer des solutions innovantes.
          </p>
          <div className="portfolio-hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">7+</span>
              <span className="hero-stat-label">Projets réalisés</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">8</span>
              <span className="hero-stat-label">Technologies maîtrisées</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Satisfaction client</span>
            </div>
          </div>
        </div>
        <div className="portfolio-hero-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      {/* Quevvy Spotlight - Section Spéciale */}
      <section className="azenium-spotlight">
        <div className="azenium-spotlight-container">
          <div className="azenium-spotlight-content">
            <div className="azenium-badge">◆ Projet Phare</div>
            <div className="azenium-logos">
              <img src="/img/quevvy/quevvy logo.png" alt="Quevvy Platform" className="azenium-logo" />
              <img src="/img/quevvy/sitex/sitex.logo.png" alt="SiteX Quevvy" className="azenium-logo-long" />
            </div>
            <h2 className="azenium-spotlight-title">
              Quevvy Platform & SiteX Quevvy
            </h2>
            <p className="azenium-spotlight-description">
              <strong>Quevvy Platform</strong> est mon écosystème produit actuel. Son premier produit,
              <strong> SiteX Quevvy</strong>, est une solution orientée création de sites web modernes,
              identité digitale et présence professionnelle en ligne.
              <br /> <strong>Quevvy recherche actuellement des investisseurs et des partenaires stratégiques.</strong>
            </p>
            <div className="azenium-features">
              <div className="azenium-feature">
                <span className="feature-icon">{renderIcon(FiLayers)}</span>
                <div>
                  <h4>Vision produit claire</h4>
                  <p>Une plateforme pensée pour bâtir plusieurs produits numériques forts</p>
                </div>
              </div>
              <div className="azenium-feature">
                <span className="feature-icon">{renderIcon(FiMonitor)}</span>
                <div>
                  <h4>SiteX Quevvy</h4>
                  <p>Le premier produit de Quevvy pour la création de sites modernes</p>
                </div>
              </div>
              <div className="azenium-feature">
                <span className="feature-icon">{renderIcon(FiTrendingUp)}</span>
                <div>
                  <h4>Investissement & expansion</h4>
                  <p>Ouverture à des investisseurs pour accélérer la croissance</p>
                </div>
              </div>
            </div>
            <div className="azenium-cta">
              <a 
                href="https://partner.quevvy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-azenium"
                style={{wordWrap:'break-word',textOverflow:'unset', textWrap:'nowrap'}}
              >
                Devenir partenaire
                {renderIcon(FiExternalLink, 'btn-icon')}
              </a>
            </div>
          </div>
          <div className="azenium-spotlight-stats">
            <div className="stat-circle">
              <span className="stat-circle-number">01</span>
              <span className="stat-circle-label">Produit lancé</span>
            </div>
            <div className="stat-circle">
              <span className="stat-circle-number">SaaS</span>
              <span className="stat-circle-label">Vision plateforme</span>
            </div>
            <div className="stat-circle">
              <span className="stat-circle-number">GO</span>
              <span className="stat-circle-label">Invest ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Les Compétences de Gentil */}
      <section className="skills-section-enhanced" ref={skillsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Expertise technique</span>
            <h2 className="section-title">Les Compétences de <span translate="no">Gentil</span></h2>
            <p className="section-description">
              Une combinaison unique de compétences en développement web, électronique et gestion de projet
            </p>
          </div>

          <div className="skills-categories">
            {skillsData.map((category, catIdx) => (
              <div key={catIdx} className="skill-category-card">
                <h3 className="category-title">{category.category}</h3>
                <div className="category-skills">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item-enhanced">
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}</span>
                      </div>
                      <div className="skill-bar-enhanced">
                        <div 
                          className="skill-progress-enhanced"
                          style={{ 
                            width: animatedSkills ? skill.level : '0%',
                            transitionDelay: `${(catIdx * 4 + idx) * 0.1}s`
                          }}
                        >
                          <div className="skill-progress-glow"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid avec Filtres */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Mes réalisations</span>
            <h2 className="section-title">Projets Récents</h2>
            <div className="portfolio-filters">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                Tous les projets
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'featured' ? 'active' : ''}`}
                onClick={() => setActiveFilter('featured')}
              >
                Projets phares
              </button>
              <button className="filter-btn">Web</button>
              <button className="filter-btn">Électronique</button>
              <button className="filter-btn">E-commerce</button>
            </div>
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className={`portfolio-card ${project.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="card-image-container">
                  <img src={project.img} alt={project.title} className="card-image" />
                  {project.status && (
                    <div className="card-status">{project.status}</div>
                  )}
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-link">
                        {renderIcon(FiExternalLink)}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.desc}</p>
                  <div className="card-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="card-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
                      Voir le projet
                      {renderIcon(FiExternalLink, 'link-icon')}
                    </a>
                    {project.github && project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link github">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.306.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <h2 className="cta-title">Intéressé par une collaboration ?</h2>
          <p className="cta-description">
            Je suis ouvert aux opportunités de partenariat, aux missions freelance 
            et à l'intégration dans vos équipes de développement.
          </p>
          <div className="cta-buttons">
            <a href="/contacts" className="btn btn-primary btn-large">
              Discutons de votre projet
            </a>
            <a href="/cv" className="btn btn-outline btn-large">
              Voir mon CV
              {renderIcon(FiArrowRight, 'link-icon')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
